from db.connect import post_dreams, update_img_url, get_dreams
from db.save_image import save_image
from api.image_generate import image_generation

def get_dreams_from_db(limit:int = 10):
    """
    Returns a list of dreams from the database.
    """
    dreams = get_dreams(limit)
    return dreams

def post_dreams_to_db(dream_title:str):
    """
    Posts a dream to the database.

    Args:
        dream_title (str): The title of the dream.
    Returns:
        img_url (str): The public URL of the uploaded image.
    """
    default_url = "https://example.com" #todo: change this to some image url
    
    id = post_dreams(dream_title,default_url)
    file_path = image_generation(dream_title)
    img_url = save_image(id,file_path)
    update_img_url(id,img_url)
    return img_url
