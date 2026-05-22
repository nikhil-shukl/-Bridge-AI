from pathlib import Path
from dotenv import load_dotenv
import os

ENV_PATH = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(dotenv_path=ENV_PATH)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


def require_openai_api_key():
    if not OPENAI_API_KEY:
        raise RuntimeError("OPENAI_API_KEY is missing in ai-backend environment")
    return OPENAI_API_KEY
