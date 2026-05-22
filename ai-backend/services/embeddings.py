from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from core.config import require_openai_api_key

def create_vector_store(chunks):
    embeddings = OpenAIEmbeddings(
        model="text-embedding-3-small",
        openai_api_key=require_openai_api_key()
    )
    vectorstore = FAISS.from_texts(chunks, embeddings)
    return vectorstore

