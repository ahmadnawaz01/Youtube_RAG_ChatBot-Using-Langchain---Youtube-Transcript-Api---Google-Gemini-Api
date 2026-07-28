from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv

from rag_pipeline import build_rag_chain

# Load environment variables
load_dotenv()

app = FastAPI(title="YouTube RAG API", description="API for querying YouTube video transcripts.")

# Global variable to hold the active LangChain pipeline in memory
active_chain = None

# --- Request Models ---
class VideoRequest(BaseModel):
    url: str

class ChatRequest(BaseModel):
    question: str

# --- API Endpoints ---
@app.post("/process")
def process_video(request: VideoRequest):
    """Downloads transcript and builds the FAISS vector store."""
    global active_chain
    chain, status_msg = build_rag_chain(request.url)
    
    if not chain:
        raise HTTPException(status_code=400, detail=status_msg)
    
    active_chain = chain
    return {"status": "success", "message": "Video processed and vector store built successfully."}

@app.post("/chat")
def chat(request: ChatRequest):
    """Sends a question to the LLM using the processed video context."""
    global active_chain
    if not active_chain:
        raise HTTPException(status_code=400, detail="No video processed. Please call /process first.")
    
    try:
        response = active_chain.invoke(request.question)
        return {"status": "success", "answer": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Generation error: {str(e)}")