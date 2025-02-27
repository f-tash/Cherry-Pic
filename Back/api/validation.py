from urllib.parse import urlparse


def validate_post_dreams(data):

    # 夢のタイトルが含まれているか確認
    dream_title = data["dream_title"]
    if dream_title is None or not isinstance(dream_title, str):
        return False

    return True


def validate_update_dreams(data):
    # idが含まれているかの確認
    dream_id = data["dream_id"]
    if dream_id is None or "submit" not in data:
        return False

    return True
