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
import traceback

# Load environment variables
load_dotenv()
print("Environment loaded")

# Get API key and validate
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("❌ GOOGLE_API_KEY is missing! Check your .env file.")
else:
    print("✅ API Key found")

try:
    # Configure Gemini
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel("gemini-1.5-pro")
    print("✅ Gemini model configured successfully")
except Exception as e:
    print(f"❌ Error configuring Gemini: {str(e)}")
    raise

app = FastAPI()

# Update CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "https://portfolio-dy4k.onrender.com"],
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
        print(f"✅ Initialized embeddings with model: {model_name}")

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        try:
            return [self.embed_query(text) for text in texts]
        except Exception as e:
            print(f"❌ Error in embed_documents: {str(e)}")
            raise

    def embed_query(self, text: str) -> List[float]:
        try:
            result = genai.embed_content(
                model=f"models/{self.model_name}",
                content=text,
                task_type="retrieval_document"
            )
            if not result or "embedding" not in result:
                print("❌ No embedding in result")
                print(f"Result: {result}")
                raise ValueError("No embedding returned from API")
            return result["embedding"]
        except Exception as e:
            print(f"❌ Error in embed_query: {str(e)}")
            raise

def load_data_from_file(file_path):
    """Loads and splits data from a text file."""
    try:
        print(f"📚 Loading data from: {file_path}")
        loader = TextLoader(file_path=file_path, encoding="utf-8")
        documents = loader.load()
        print(f"✅ Loaded {len(documents)} documents")
        
        text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        split_docs = text_splitter.split_documents(documents)
        print(f"✅ Split into {len(split_docs)} chunks")
        
        return split_docs
    except Exception as e:
        print(f"❌ Error loading file {file_path}: {str(e)}")
        print("Full error traceback:")
        print(traceback.format_exc())
        raise

documents = load_data_from_file(file_path)
embeddings = GeminiEmbeddings()
vectorstore = FAISS.from_documents(documents, embedding=embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

def process_query(question):
    """Retrieve context & generate AI response."""
    try:
        print(f"📝 Starting to process question: {question}")
        
        try:
            print("1️⃣ Retrieving documents...")
            docs = retriever.invoke(question)
            print(f"✅ Retrieved {len(docs)} documents")
            
            formatted_docs = "\n\n".join(doc.page_content for doc in docs)
            print(f"✅ Context prepared: {len(formatted_docs)} characters")
        except Exception as e:
            print(f"❌ Error in document retrieval: {str(e)}")
            return f"Error retrieving context: {str(e)}"

        try:
            print("2️⃣ Preparing prompt...")
            prompt = f"""
            You are an AI assistant with knowledge about Parshu Ram Sharma. You must follow these rules:

            1. Provide concise, well-structured responses
            2. Use bullet points or numbered lists when listing multiple points
            3. Break down complex answers into clear sections with headings
            4. Keep responses focused and relevant to the question

            Context information:
            {formatted_docs}

            Question: {question}

            Response:
            """
            print("✅ Prompt prepared")
        except Exception as e:
            print(f"❌ Error in prompt preparation: {str(e)}")
            return f"Error preparing prompt: {str(e)}"

        try:
            print("3️⃣ Generating response with Gemini...")
            # Test the API key and model first
            print(f"Using API key (first 10 chars): {GOOGLE_API_KEY[:10]}...")
            
            response = model.generate_content(
                prompt,
                generation_config={
                    'temperature': 0.7,
                    'top_p': 0.8,
                    'top_k': 40,
                }
            )
            
            if not response:
                print("❌ Received empty response from Gemini")
                return "Error: Received empty response from AI model"
                
            if not hasattr(response, 'text'):
                print(f"❌ Invalid response structure: {response}")
                return "Error: Invalid response structure from AI model"
                
            print(f"✅ Generated response of length: {len(response.text)}")
            
        except Exception as e:
            print(f"❌ Error in Gemini response generation: {str(e)}")
            print("Full error traceback:")
            print(traceback.format_exc())
            return f"Error generating response: {str(e)}"

        try:
            print("4️⃣ Saving to memory...")
            memory.save_context({"input": question}, {"output": response.text})
            print("✅ Context saved to memory")
        except Exception as e:
            print(f"❌ Error saving to memory: {str(e)}")
            # Don't return here, we still have the response

        return response.text

    except Exception as e:
        print(f"❌ Unexpected error in process_query: {str(e)}")
        print("Full error traceback:")
        print(traceback.format_exc())
        return f"Sorry, I encountered an unexpected error: {str(e)}"

class ChatRequest(BaseModel):
    question: str

# Add error handling for the chat endpoint
@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        if not request.question or not request.question.strip():
            raise HTTPException(status_code=400, detail="Question cannot be empty")
            
        print(f"📝 Received question: {request.question}")
        response = process_query(request.question.strip())
        
        if response.startswith("Sorry, I encountered an error"):
            print(f"❌ Error in response: {response}")
            raise HTTPException(status_code=500, detail=response)
        
        print("✅ Successfully processed request")
        return {"response": response}
        
    except Exception as e:
        print(f"❌ Error in chat endpoint: {str(e)}")
        print(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def root():
    return {"message": "✅ Gemini RAG API is running"}
