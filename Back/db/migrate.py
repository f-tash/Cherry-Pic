import os
from dotenv import load_dotenv

load_dotenv()

postgres_url: str = os.environ.get("POSTGRES_URL")
tabel_name: str = os.environ.get("DATABASE_TABLE")

from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String, DateTime, Boolean, func
from sqlalchemy.orm import declarative_base

engine = create_engine(postgres_url)

Base = declarative_base()

class Dream(Base):
    __tablename__ = tabel_name
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    url = Column(String(500), nullable=False, default="https://example.com")
    created_at = Column(DateTime, server_default=func.now())  
    submitted = Column(Boolean, server_default='false')

Base.metadata.create_all(engine)