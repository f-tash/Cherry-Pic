from db.connect import post_dreams, update_img_url, get_dreams, submit_dream_db
from db.save_image import save_image
from api.image_generate import image_generation

from returns.result import Result, Success, Failure

def get_dreams_from_db(limit:int = 10)-> Result[list, Exception]:
    """
    Gets dreams from the database.

    Args:
        limit (int, optional): The number of dreams to get. Defaults to 10.
    
    Returns:
        Result[list, Exception]: Return Success(dreams) if the fetching was successful, Failure otherwise.
    """
    return get_dreams(limit)

def post_dreams_to_db(dream_title:str) -> Result[tuple[int,str], Exception]:
    """
    Posts a dream to the database.

    Args:
        dream_title (str): The title of the dream.
    Returns:
        Result[tuple[int,str], Exception]: Return Success(dream_ud, image url) if the posting was successful, Failure otherwise.
    """
    default_url = "https://example.com" #todo: change this to some image url
    
    try:
        id = post_dreams(dream_title,default_url).unwrap()
        file_path = image_generation(dream_title)
        img_url = save_image(id,file_path).unwrap()
        update_img_url(id,img_url)
        return Success((id,img_url))
    except Exception as e:
        return Failure(e)


def submit_dream(dream_id:int,submit:bool)->Result[None,Exception]:
    """
    Submits a dream to the database.

    Args:
        dream_id (int): The id of the dream.
        submit (bool): Whether the dream is submitted or not.
    Returns:
        Result[None, Exception]: Success if the submission was successful, Failure otherwise.
    """
    try:
        submit_dream_db(dream_id,submit)
        return Success(None)
    except Exception as e:
        return Failure(e)