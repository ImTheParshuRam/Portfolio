from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import os
from langchain_community.vectorstores import FAISS
from langchain_core.embeddings import Embeddings
from langchain.memory import ConversationBufferMemory
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from typing import List
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    print("❌ GOOGLE_API_KEY is missing! Check your .env file or environment variables.")
    raise ValueError("GOOGLE_API_KEY environment variable not set")

genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-pro")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Fix: Use environment variable for `cv.txt` file path
file_path = os.getenv("CV_FILE_PATH", os.path.join(os.path.dirname(__file__), "cv.txt"))
if not os.path.exists(file_path):
    raise FileNotFoundError(f"❌ File not found: {file_path}")

class GeminiEmbeddings(Embeddings):
    def __init__(self, model_name="embedding-001"):
        self.model_name = model_name

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return [self.embed_query(text) for text in texts]

    def embed_query(self, text: str) -> List[float]:
        try:
            result = genai.embed_content(
                model=f"models/{self.model_name}",
                content=text,
                task_type="retrieval_document"
            )
            return result["embedding"]
        except Exception as e:
            print(f"❌ Error generating embedding: {e}")
            return []

def load_data_from_file(file_path):
    """Loads and splits data from a text file."""
    try:
        print(f"✅ Loading data from: {file_path}")
        loader = TextLoader(file_path=file_path, encoding="utf-8")
        documents = loader.load()
        text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        return text_splitter.split_documents(documents)
    except Exception as e:
        raise RuntimeError(f"❌ Error loading file {file_path}: {e}")

documents = load_data_from_file(file_path)
embeddings = GeminiEmbeddings()
vectorstore = FAISS.from_documents(documents, embedding=embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

def process_query(question):
    """Retrieve context & generate AI response."""
    try:
        print(f"User Question: {question}")  # ✅ Log input for debugging
        docs = retriever.invoke(question)
        formatted_docs = "\n\n".join(doc.page_content for doc in docs)

        prompt = f"""
        You are an AI assistant with knowledge about Parshu Ram Sharma.

        Use the following context to answer the question:
        {formatted_docs}

        Question: {question}
        """

        response = model.generate_content(prompt)
        print(f"AI Response: {response.text}")  # ✅ Log output for debugging

        memory.save_context({"input": question}, {"output": response.text})
        return response.text
    except Exception as e:
        print(f"❌ Error processing query: {e}")
        return "Sorry, I encountered an error processing your request."

class ChatRequest(BaseModel):
    question: str

@app.post("/chat")
def chat(request: ChatRequest):
    try:
        response = process_query(request.question)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def root():
    return {"message": "✅ Gemini RAG API is running"}
