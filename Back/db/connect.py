from supabase_client import get_supabase_client

import os
from dotenv import load_dotenv

load_dotenv()

table_name=os.environ.get("DATABASE_TABLE")

def post_dreams(title:str,url:str) -> int:
    """
    Post dreams to the Supabase database.

    Args:
        title (str): The title of the dream.
        url (str): The URL of the image

    Returns:
        id (int): The id of the posted dream.
    """
    supabase=get_supabase_client()
    
    new_dream = {
        "title": title,
        "url": url
    }

    response = supabase.table(table_name).insert(new_dream).execute()

    id = response.model_dump()["data"][0]["id"]

    return id

def update_img_url(id:int,img_url:str):
    """
    Update the image URL of the dream with the given id.
    
    Args:
        id (int): The id of the dream.
        img_url (str): The new image URL.
    
    Returns:
        None

    """
    supabase=get_supabase_client()

    updated_dream = {
        "url": img_url
    }

    
    response = supabase.table(table_name).update(updated_dream).eq("id", id).execute()


def get_dreams(amount:int=10) -> list:
    """
    Get the latest the given number of dreams from the Supabase database.
    
    Args:
        amount (int): The number of dreams to get. Default is 10.
    Returns:
        list: A list of the latest 10 dreams.
    """
    supabase=get_supabase_client()
    response = (
        supabase.table(table_name)
        .select("*")
        .order("created_at", desc=True)
        .limit(amount) # 最新10件
        .execute()
    )

    return response.model_dump()["data"]
