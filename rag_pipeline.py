from langchain_community.document_loaders import YoutubeLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnableParallel, RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser

def format_docs(retrieved_docs):
    """Joins the content of retrieved LangChain documents."""
    return "\n\n".join(doc.page_content for doc in retrieved_docs)

def build_rag_chain(video_url: str):
    """Fetches YouTube transcript via LangChain, builds FAISS index, and returns the LCEL chain."""
    
    # 1. Load transcript using LangChain's YoutubeLoader
    try:
        loader = YoutubeLoader.from_youtube_url(video_url, add_video_info=False)
        docs = loader.load()
        
        if not docs:
            return None, "No transcripts could be extracted from this video."
            
    except Exception as e:
        return None, f"Error fetching transcript: {str(e)}"

    # 2. Split Text chunks
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks = text_splitter.split_documents(docs)

    # 3. Create Embeddings & Vector Store
    embeddings = GoogleGenerativeAIEmbeddings(model='gemini-embedding-2')
    vector_store = FAISS.from_documents(chunks, embeddings)
    retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k": 4})

    # 4. Set up Gemini LLM & Prompt Template
    llm = ChatGoogleGenerativeAI(model='gemini-3.6-flash', temperature=0.2)
    prompt = PromptTemplate(
        template="""
          You are a helpful assistant.
          Answer ONLY from the provided transcript context.
          If the context is insufficient, just say you don't know.

          {context}
          Question: {question}
        """,
        input_variables=['context', 'question']
    )

    # 5. Build LCEL Chain
    parallel_chain = RunnableParallel({
        'context': retriever | RunnableLambda(format_docs),
        'question': RunnablePassthrough()
    })
    
    main_chain = parallel_chain | prompt | llm | StrOutputParser()

    return main_chain, "Success"