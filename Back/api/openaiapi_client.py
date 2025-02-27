import os
from openai import OpenAI


class OpenAIClientSingleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            instance = super(OpenAIClientSingleton, cls).__new__(cls)
            instance.client = OpenAI()
            instance.client.api_key = os.getenv("OPENAI_API_KEY")
            cls._instance = instance
        return cls._instance


def get_client():
    return OpenAIClientSingleton().client
