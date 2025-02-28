from api.openaiapi_client import get_client
import tempfile
import base64

from pydantic import BaseModel


# 画像を生成する関数し、tmpファイルに保存してそのパスを返す
def image_generation(title):
    prompt = create_prompt(title)
    try:
        client = get_client()
        # 画像生成
        response = client.images.generate(
            model="dall-e-3",  # モデル選択
            prompt=prompt,  # プロンプト
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
    except Exception as e:
        raise Exception(f"An error occurred during image generation: {str(e)}")


def create_prompt(title):
    try:
        client = get_client()
        response = client.beta.chat.completions.parse(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "developer",
                    "content": "Given the description of a dream someone wants to achieve, generate an appropriate prompt in English for image generation by dall-e-2 that best represents the dream.",
                },
                {"role": "user", "content": title},
            ],
            response_format=PromptGeneratingImage,
        )
        return response.choices[0].message.parsed.prompt_to_dalle
    except Exception as e:
        raise Exception(f"An error occurred during prompt generation: {str(e)}")


class PromptGeneratingImage(BaseModel):
    title: str
    description: str
    prompt_to_dalle: str
