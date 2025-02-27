from db.supabase_client import get_supabase_client
from returns.result import Result, Success, Failure

import os
from dotenv import load_dotenv

load_dotenv()

table_name=os.environ.get("DATABASE_TABLE")

def post_dreams(title: str, url: str) -> Result[int, Exception]:
    """
    Post dreams to the Supabase database.

    Args:
        title (str): The title of the dream.
        url (str): The URL of the image.

    Returns:
        Result[int, Exception]: The ID of the posted dream or an error.
    """
    try:
        supabase = get_supabase_client()

        new_dream = {
            "dream_title": title,
            "url": url
        }

        response = supabase.table(table_name).insert(new_dream).execute()

        id = response.model_dump()["data"][0]["dream_id"]

        return Success(id)

    except Exception as e:
        return Failure(e)
    

def update_img_url(id: int, img_url: str) -> Result[None, Exception]:
    """
    Update the image URL of the dream with the given ID.

    Args:
        id (int): The ID of the dream.
        img_url (str): The new image URL.

    Returns:
        Result[None, Exception]: Success if the update was successful, Failure otherwise.
    """
    try:
        supabase = get_supabase_client()

        updated_dream = {
            "url": img_url
        }
        
        response = supabase.table(table_name).update(updated_dream).eq("dream_id", id).execute()
        return Success(None)

    except Exception as e:
        return Failure(e)


def get_dreams(amount:int=10) -> Result[list, Exception]:
    """
    Get the latest the given number of dreams from the Supabase database.
    
    Args:
        amount (int): The number of dreams to get. Default is 10.
    Returns:
        Result[list, Exception]: The list of dreams or an error.
    """
    try:
        supabase=get_supabase_client()
        response = (
            supabase.table(table_name)
            .select("dream_id", "dream_title", "url")
            .eq("submitted", True)
            .order("created_at", desc=True)
            .limit(amount) # 最新10件
            .execute()
        )

        return Success(response.model_dump()["data"])
    except Exception as e:
        return Failure(e)

def submit_dream_db(id,submit) -> Result[None, Exception]:
    """
    Submit a dream to the Supabase database.
    
    Args:
        id (int): The id of the dream.
    Returns:
        Result[None, Exception]: Success if the submission was successful, Failure otherwise.
    """
    try:
        supabase=get_supabase_client()
        response = supabase.table(table_name).update({"submitted": submit}).eq("dream_id", id).execute()
        return Success(None)
    except Exception as e:
        return Failure(e)
