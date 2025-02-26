import openai
import os
from flask import Flask, render_template, request, jsonify
from openai import OpenAI

client = OpenAI(os.getenv("OPENAI_API_KEY"))


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


def image_generation(title):
    # OpenAI APIキーの取得とインスタンス化
    client = OpenAI(os.getenv("OPENAI_API_KEY"))
    # 画像生成
    response = client.images.generate(
        model="dall-e-2",  # モデル選択 dall-e-2 or dall-e-3
        prompt=title,  # プロンプト
        n=1,  # 生成数
        size="512x512",  # 解像度 dall-e-3では1024x1024、1792x1024、1024x1792
        response_format="b64_json",  # レスポンスフォーマット url or b64_json
        quality="standard",  # 品質 standard or hd
        style="vivid",
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True)
