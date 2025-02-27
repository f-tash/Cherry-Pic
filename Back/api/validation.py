from urllib.parse import urlparse


def validate_post_dreams(data):
    # 夢のタイトルと画像URLが含まれているか確認
    if "dream" not in data or "img_url" not in data:
        return False

    dream_title = data["dream_title"]
    url = data["url"]

    # 型チェック
    if not isinstance(dream_title, str) or not isinstance(url, str):
        return False

    # 空文字列チェック
    if not dream_title.strip() or not url.strip():
        return False

    # URLの形式確認
    parsed_url = urlparse(url)
    if not (parsed_url.scheme and parsed_url.netloc):
        return False

    return True


def validate_update_dreams(data):
    # idが含まれているかの確認
    if "Dream ID" not in data:
        return False

    # submitがTrueかの確認
    if "submit" not in data:
        return False
    if data["submit"] != True:
        return False

    return True
