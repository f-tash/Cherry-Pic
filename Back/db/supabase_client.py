import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()


url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")


_supabase: Client | None = None

def get_supabase_client() -> Client:
    global _supabase
    if _supabase is None:
        _supabase = create_client(url, key)
    return _supabase
