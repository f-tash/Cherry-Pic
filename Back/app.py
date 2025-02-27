import os
from flask import Flask, render_template, request, jsonify
from openai import OpenAI
import tempfile
import base64


from api.dreams import get_dreams_from_db
from api.validation import validate_post_dreams


# インスタンス化とAPIキーの設定
client = OpenAI()
client.api_key = os.getenv("OPENAI_API_KEY")

# Flaskの設定
app = Flask(__name__)


# 画像を生成する関数し、tmpファイルに保存してそのパスを返す
def image_generation(title):
    # 画像生成
    response = client.images.generate(
        model="dall-e-2",  # モデル選択
        prompt=title,  # プロンプト
        n=1,  # 生成数
        size="512x512",  # 解像度
        response_format="b64_json",  # レスポンスフォーマット
        quality="standard",  # 品質
        style="vivid",
    )
    # tmpファイルに保存する
    with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as f:
        image_data = base64.b64decode(response.data[0].b64_json)
        f.write(image_data)
        return f.name


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/dreams", methods=["GET"])
def get_dreams():
    response = get_dreams_from_db()
    return jsonify(response)


@app.route("/dreams", methods=["POST"])
def post_dream():
    data = request.json
    is_request_ok = validate_post_dreams(data)
    if not is_request_ok:
        return jsonify({"error": "Bad Request"}), 400
    dream_title = data["dream_title"]

    response = {"message": "dream created successfully", "id": 123, "status": "success"}

    return jsonify(response)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
