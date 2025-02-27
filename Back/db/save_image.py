from db.supabase_client import get_supabase_client

def save_image(id:int,image_path: str) -> str:
    """
    Uploads an image to the Supabase storage and returns its public URL.

    Args:
        id (int): id of the dream
        image_path (str): local file path of the image

    Returns:
        str: The public URL of the uploaded image.
    """
    supabase = get_supabase_client()

    bucket_name = "Images"
    storage_path = f"uploads/image{id}.png" 

    with open(image_path, "rb") as file:
        supabase.storage.from_(bucket_name).upload(file=file, path=storage_path,file_options={"cache-control": "3600", "upsert": "false", "content-type": "image/png"})


    public_url = supabase.storage.from_(bucket_name).get_public_url(storage_path)
    return public_url
