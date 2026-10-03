import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  Phone, 
  CreditCard, 
  Calendar,
  GraduationCap,
  Users,
  Award,
  Trash2,
  Maximize2,
  Minimize2,
  Bot,
  User,
  ArrowRight,
  School
} from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Namaste! I am your official **Gemini AI Assistant** for Saraswati Vidya Mandir, Maharajganj. 🙏\n\nHow can I help you today with admissions, faculty, board results, or school events?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies = [
    { text: 'Sanskriti Mahotsav 5 & 6 Sept', icon: <Sparkles className="h-3.5 w-3.5 text-amber-500" /> },
    { text: 'CBSE Class 10 & Class 8 Toppers', icon: <Award className="h-3.5 w-3.5 text-blue-500" /> },
    { text: 'School Faculty & Subject Teachers', icon: <Users className="h-3.5 w-3.5 text-teal-500" /> },
    { text: 'SBI Fee Payment Details', icon: <CreditCard className="h-3.5 w-3.5 text-orange-500" /> },
    { text: 'Principal Shri Shambhu Sharan Tiwari', icon: <GraduationCap className="h-3.5 w-3.5 text-indigo-500" /> }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Lock body scroll when modal is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage = textToSend.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const historyPayload = messages
        .slice(1)
        .map(msg => ({ role: msg.role, content: msg.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: historyPayload
        })
      });

      if (!response.ok) {
        throw new Error('Failed to communicate with Gemini server.');
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev, 
        { role: 'assistant', content: data.text || 'Namaste! Please ask your question again.' }
      ]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Namaste! I experienced a brief connectivity hiccup. You can also reach our Maharajganj school office directly at **+91 94314 26738 / +91 99342 11094** or email **svmmrj1@gmail.com**.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Namaste! Chat cleared. How can Gemini AI assist you with Saraswati Vidya Mandir today? 🙏'
      }
    ]);
  };

  // Helper function to render text with bold and newlines
  const formatMessageText = (text: string) => {
    return text.split('\n').map((paragraph, pIdx) => {
      if (!paragraph.trim()) return <div key={pIdx} className="h-2" />;
      
      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={pIdx} className="mb-1.5 last:mb-0 leading-relaxed">
          {parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={index} className="font-bold text-slate-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Gemini Chat Button on Bottom Right */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-15 w-15 rounded-2xl bg-white flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.18)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group border-2 border-blue-400 p-1"
        id="gemini-chat-toggle"
        aria-label="Open Gemini AI Chat Assistant"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-tr from-blue-50 to-indigo-50">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUa65HwxfK-3NgHsLl9lfnSc_9gVZv6QXl8HtKrA9JQ&s=10"
            alt="Gemini AI Assistant"
            className="w-10 h-10 object-contain rounded-full"
            referrerPolicy="no-referrer"
          />
          {/* Pulsing Ping Indicator */}
          <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
        </div>
      </motion.button>

      {/* Full-Screen / Modal Gemini Chat Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex flex-col justify-end md:justify-center p-0 md:p-6 lg:p-10"
            id="gemini-chat-overlay"
          >
            {/* Modal Inner Container */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-full h-[94vh] md:max-w-4xl md:h-[85vh] bg-white rounded-t-3xl md:rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.3)] border border-slate-200 overflow-hidden flex flex-col mx-auto"
            >
              {/* Top Header */}
              <div className="p-4 md:px-6 py-3.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 text-white flex items-center justify-between shadow-md shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md p-1 border border-white/30 flex items-center justify-center shrink-0">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUa65HwxfK-3NgHsLl9lfnSc_9gVZv6QXl8HtKrA9JQ&s=10"
                      alt="Gemini AI Avatar"
                      className="w-full h-full object-contain rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-black text-sm md:text-base leading-tight tracking-wide flex items-center gap-1.5">
                        <span>Gemini AI Assistant</span>
                        <Sparkles className="h-4 w-4 text-amber-300 fill-amber-300" />
                      </h3>
                      <span className="hidden sm:inline-block text-[10px] font-mono bg-white/20 border border-white/30 px-2 py-0.5 rounded-full font-bold uppercase">
                        Gemini 3.8 Flash
                      </span>
                    </div>
                    <p className="text-[11px] text-blue-100 font-medium">
                      Saraswati Vidya Mandir, Maharajganj (CBSE: 330263)
                    </p>
                  </div>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={clearChat}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
                    title="Clear Conversation"
                    id="gemini-clear-chat"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Close Chat"
                    id="gemini-close-modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Quick Topics Banner */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase shrink-0">
                  Quick Topics:
                </span>
                {quickReplies.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q.text)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-medium text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs whitespace-nowrap transition-all cursor-pointer"
                  >
                    {q.icon}
                    <span>{q.text}</span>
                  </button>
                ))}
              </div>

              {/* Chat Message Scroll Area */}
              <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 bg-slate-50/40">
                {messages.map((msg, index) => {
                  const isUser = msg.role === 'user';
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                    >
                      {/* Avatar */}
                      <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold shadow-xs ${
                        isUser 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-orange-500 text-white'
                      }`}>
                        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>

                      {/* Message Bubble */}
                      <div className={`rounded-2xl p-4 text-xs md:text-sm shadow-xs ${
                        isUser
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                      }`}>
                        {formatMessageText(msg.content)}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3 items-center"
                  >
                    <div className="h-8 w-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                      <Sparkles className="h-4 w-4 animate-spin" />
                    </div>
                    <div className="p-3.5 bg-white border border-slate-200 rounded-2xl rounded-tl-none text-xs text-slate-500 flex items-center gap-1.5 shadow-xs">
                      <span className="font-mono font-bold text-blue-600">Gemini 3.8</span>
                      <span>is thinking...</span>
                      <div className="flex gap-1 ml-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <div className="p-3.5 md:p-4 bg-white border-t border-slate-200 shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(input);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ask Gemini about SVM teachers, toppers, fees, events..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 transition-all font-medium"
                    id="gemini-input-field"
                  />

                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs md:text-sm rounded-2xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-40"
                    id="gemini-send-btn"
                  >
                    <span>Send</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>

                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-2 px-1">
                  <span>Saraswati Vidya Mandir, Maharajganj</span>
                  <span className="flex items-center gap-1 text-blue-600 font-bold">
                    <Sparkles className="h-3 w-3" /> Powered by Google Gemini
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
