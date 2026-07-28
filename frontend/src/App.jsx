import React, { useState, useRef, useEffect } from 'react';

// Custom inline SVG icons for zero-dependency reliability
const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Sparkles = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
  </svg>
);

const Send = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const Loader2 = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const CheckCircle2 = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const AlertCircle = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const Trash2 = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const MessageSquare = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Info = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const RefreshCw = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

// Helper function to extract YouTube video ID from URL
const getYoutubeVideoId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

function App() {
  // Video Processing States
  const [videoUrl, setVideoUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState(null); // { type: 'success' | 'error', text: '' }

  // Chat Interface States
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [videoProcessed, setVideoProcessed] = useState(false);
  const [processedVideoId, setProcessedVideoId] = useState(null);

  // Auto-scroll ref
  const chatEndRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Handle Video Processing
  const handleProcessVideo = async (e) => {
    e.preventDefault();
    if (!videoUrl.trim()) return;

    const id = getYoutubeVideoId(videoUrl);
    if (!id) {
      setProcessStatus({
        type: 'error',
        text: 'Invalid YouTube URL. Please provide a standard YouTube video link.',
      });
      return;
    }

    setIsProcessing(true);
    setProcessStatus(null);

    try {
      const response = await fetch('http://localhost:8000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setProcessStatus({
          type: 'success',
          text: data.message || 'Video transcript loaded and indexed successfully!',
        });
        setProcessedVideoId(id);
        setVideoProcessed(true);
        // Add system message to the chat
        setMessages([
          {
            id: 'sys-' + Date.now(),
            sender: 'system',
            text: 'System: Vector index built. You can now ask questions about the video content!',
          }
        ]);
      } else {
        throw new Error(data.detail || 'Failed to process video.');
      }
    } catch (error) {
      console.error(error);
      setProcessStatus({
        type: 'error',
        text: error.message || 'Error connecting to FastAPI backend. Make sure the backend is running on port 8000.',
      });
      setVideoProcessed(false);
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle Question Submission
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userQuestion = chatInput.trim();
    setChatInput('');

    // Append User Message
    const userMsgId = 'user-' + Date.now();
    setMessages((prev) => [...prev, { id: userMsgId, sender: 'user', text: userQuestion }]);
    
    setIsThinking(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userQuestion }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        // Append AI Response
        setMessages((prev) => [
          ...prev, 
          { id: 'ai-' + Date.now(), sender: 'ai', text: data.answer }
        ]);
      } else {
        throw new Error(data.detail || 'Failed to fetch response.');
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { 
          id: 'error-' + Date.now(), 
          sender: 'system-error', 
          text: `Error: ${error.message || 'Something went wrong.'}` 
        }
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  // Reset page to load another video
  const handleResetVideo = () => {
    setVideoProcessed(false);
    setProcessedVideoId(null);
    setVideoUrl('');
    setProcessStatus(null);
    setMessages([]);
  };

  // Clear Chat History
  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-100 flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 font-sans">
      
      {/* BACKGROUND DECORATIONS (Floating space ambience) */}
      <div className="stars-overlay absolute inset-0 pointer-events-none"></div>
      
      {/* Neon Orbs blur */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      {/* HEADER SECTION */}
      <header className="relative z-10 text-center mb-8 flex flex-col items-center">
        <div className="flex items-center space-x-3 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-full mb-4 shadow-[0_0_20px_rgba(168,85,247,0.1)] animate-float-slow">
          <Youtube className="w-6 h-6 text-red-500 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          <span className="text-slate-400 font-medium text-sm tracking-wide">YouTube RAG AI</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 select-none">
          <span className="shimmer-text">YouTube RAG Chatbot</span>
        </h1>
        <p className="text-slate-400 max-w-lg text-sm md:text-base font-light">
          Ask questions and chat with the transcript of any YouTube video in real-time.
        </p>
      </header>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-6xl relative z-10 flex flex-col px-1">
        
        {!videoProcessed ? (
          /* INITIAL VIEW: Centered video processing card */
          <div className="w-full max-w-2xl mx-auto mt-6 animate-float">
            <section className="glow-purple-container backdrop-blur-xl bg-slate-900/30 border border-purple-500/20 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
              <h2 className="text-lg md:text-xl font-semibold mb-4 text-purple-400 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Process Video Transcript</span>
              </h2>

              <form onSubmit={handleProcessVideo} className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Youtube className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    type="url"
                    required
                    disabled={isProcessing}
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isProcessing || !videoUrl}
                  className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:shadow-none flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Process Video</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* STATUS NOTIFICATIONS */}
              {processStatus && (
                <div className={`mt-4 p-4 rounded-xl border flex items-start space-x-3 transition-all duration-500 ${
                  processStatus.type === 'success' 
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                    : 'bg-red-950/20 border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                }`}>
                  {processStatus.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="text-sm font-light leading-relaxed flex-1">
                    {processStatus.text}
                  </div>
                </div>
              )}
            </section>
          </div>
        ) : (
          /* PROCESSED VIEW: Split Screen (Video Thumbnail Left, Chat Interface Right) */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-4">
            
            {/* LEFT COLUMN: Video Thumbnail Card */}
            <div className="md:col-span-5 flex flex-col space-y-4 animate-float">
              <section className="glow-purple-container backdrop-blur-xl bg-slate-900/30 border border-purple-500/20 rounded-2xl p-5 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
                
                <h3 className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3 flex items-center space-x-2">
                  <Youtube className="w-4 h-4" />
                  <span>Currently Indexed Video</span>
                </h3>

                {/* Video Thumbnail Box */}
                {processedVideoId && (
                  <div className="relative group overflow-hidden rounded-xl border border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.4)] aspect-video bg-slate-950 flex items-center justify-center">
                    <img 
                      src={`https://img.youtube.com/vi/${processedVideoId}/mqdefault.jpg`}
                      alt="YouTube Video Thumbnail"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        // fallback if maxres or mq doesn't exist
                        e.target.src = `https://img.youtube.com/vi/${processedVideoId}/0.jpg`;
                      }}
                    />
                    
                    {/* Floating play overlay design */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <polygon points="8 5 19 12 8 19 8 5" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 bg-emerald-500/90 text-emerald-950 font-bold px-2 py-0.5 rounded text-xxs tracking-wider uppercase flex items-center space-x-1.5 shadow-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-950 animate-ping" />
                      <span>RAG ACTIVE</span>
                    </div>
                  </div>
                )}

                {/* Video URL details */}
                <div className="mt-4 space-y-2 text-sm font-light text-slate-400">
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-500">Video ID</span>
                    <span className="font-mono text-xs text-purple-300">{processedVideoId}</span>
                  </div>
                  <div className="truncate text-xs text-slate-500 hover:text-slate-400 transition-colors">
                    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="underline">
                      {videoUrl}
                    </a>
                  </div>
                </div>

                {/* Back to Process New Link Button */}
                <button
                  onClick={handleResetVideo}
                  className="w-full mt-6 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-300 font-medium hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-purple-400" />
                  <span>Index Another Video</span>
                </button>
              </section>

              {processStatus && processStatus.type === 'success' && (
                <div className="p-4 rounded-xl border bg-emerald-950/10 border-emerald-500/20 text-emerald-400 text-xs font-light leading-relaxed flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" />
                  <span>{processStatus.text}</span>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Chat Interface */}
            <div className="md:col-span-7 flex flex-col animate-float-delayed">
              <section className="glow-cyan-container flex-1 backdrop-blur-xl bg-slate-900/30 border border-cyan-500/20 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.05)] flex flex-col min-h-[500px]">
                
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <h2 className="text-lg md:text-xl font-semibold text-cyan-400">RAG Chat Window</h2>
                  </div>
                  
                  {messages.length > 0 && (
                    <button 
                      onClick={clearChat}
                      className="text-slate-500 hover:text-red-400 transition-colors duration-200 flex items-center space-x-1.5 text-sm cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Clear Chat</span>
                    </button>
                  )}
                </div>

                {/* Chat Body / Messages History */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[340px] min-h-[260px]">
                  {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center px-4 py-8 text-slate-500">
                      <MessageSquare className="w-12 h-12 mb-3 text-slate-600" />
                      <h3 className="font-medium text-slate-400 mb-1">No messages yet</h3>
                      <p className="text-sm font-light max-w-sm">
                        Ask a question about the processed video to begin!
                      </p>
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <div 
                        key={msg.id} 
                        className={`flex ${
                          msg.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div 
                          className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm transition-all duration-300 ${
                            msg.sender === 'user' 
                              ? 'bg-gradient-to-r from-purple-600/80 to-blue-600/80 border border-purple-500/20 text-white rounded-br-none shadow-[0_2px_15px_rgba(124,58,237,0.15)]'
                              : msg.sender === 'ai'
                              ? 'bg-slate-900/60 border border-slate-800/80 text-slate-200 rounded-bl-none shadow-[0_2px_15px_rgba(0,0,0,0.2)]'
                              : msg.sender === 'system'
                              ? 'bg-slate-950/80 border border-cyan-500/30 text-cyan-400 italic text-center w-full rounded-md py-2 border-dashed'
                              : 'bg-red-950/30 border border-red-500/20 text-red-400 italic w-full text-center py-2'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))
                  )}

                  {/* Thinking indicator */}
                  {isThinking && (
                    <div className="flex justify-start">
                      <div className="bg-slate-900/60 border border-slate-800/80 text-slate-400 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2 shadow-[0_2px_15px_rgba(0,0,0,0.2)]">
                        <div className="flex space-x-1.5 items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                        <span className="text-xs italic text-slate-500 ml-1.5 font-light">Thinking...</span>
                      </div>
                    </div>
                  )}
                  
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Footer Input Form */}
                <form onSubmit={handleSendMessage} className="mt-4 flex items-center space-x-2">
                  <input
                    type="text"
                    required
                    disabled={isThinking}
                    placeholder="Ask anything about the video..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 px-4 py-3.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isThinking || !chatInput.trim()}
                    className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_4px_15px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:shadow-none flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </section>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 mt-12 text-center text-xs text-slate-600 tracking-wide select-none">
        <p>&copy; {new Date().getFullYear()} Anti-Gravity YouTube RAG Chatbot. Weightless Intelligence.</p>
      </footer>
    </div>
  );
}

export default App;
