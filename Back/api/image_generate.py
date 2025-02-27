from openai import OpenAI
import tempfile
import base64
import os

# インスタンス化とAPIキーの設定
client = OpenAI()
client.api_key = os.getenv("OPENAI_API_KEY")


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
