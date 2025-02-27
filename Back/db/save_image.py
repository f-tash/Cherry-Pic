from db.supabase_client import get_supabase_client

from returns.result import Result, Success, Failure

from dotenv import load_dotenv
import os 
load_dotenv()
table_name=os.environ.get("DATABASE_TABLE")

def save_image(id:int,image_path: str) -> Result[str, Exception]:
    """
    Uploads an image to the Supabase storage and returns its public URL.

    Args:
        id (int): id of the dream
        image_path (str): local file path of the image

    Returns:
        Result[str, Exception]: The public URL of the uploaded image or an error.
    """
    supabase = get_supabase_client()

    bucket_name = "Images"
    storage_path = f"uploads/{table_name}/image{id}.png" 

    try:
        with open(image_path, "rb") as file:
            supabase.storage.from_(bucket_name).upload(file=file, path=storage_path,file_options={"cache-control": "3600", "upsert": "false", "content-type": "image/png"})
        public_url = supabase.storage.from_(bucket_name).get_public_url(storage_path)
        return Success(public_url)
    except Exception as e:
        return Failure(e)
