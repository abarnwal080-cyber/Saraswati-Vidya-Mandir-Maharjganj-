import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  Phone, 
  CreditCard, 
  BrainCircuit, 
  Calendar,
  GraduationCap,
  Users,
  Award
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
      content: 'Namaste! Welcome to Saraswati Vidya Mandir Maharajganj AI Desk. 🙏\n\nHow can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { text: 'Sanskriti Mahotsav 5 & 6 Sept', icon: <Sparkles className="h-3.5 w-3.5 text-amber-500" /> },
    { text: 'SBI Fee Payment & Account', icon: <CreditCard className="h-3.5 w-3.5 text-blue-500" /> },
    { text: 'Faculty & Science Teachers', icon: <Users className="h-3.5 w-3.5 text-teal-500" /> },
    { text: 'CBSE Class 10 Toppers', icon: <Award className="h-3.5 w-3.5 text-orange-500" /> },
    { text: 'Principal Shri Shambhu Sharan Tiwari', icon: <GraduationCap className="h-3.5 w-3.5 text-indigo-500" /> }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Lock body scroll when full-screen chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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
        throw new Error('Failed to communicate with AI server.');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.text || 'Sorry, I did not receive a response.' }]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I encountered a brief connection delay. Please contact our main administrative desk directly at +91 94314 26738 / +91 99342 11094 or try again shortly!'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Custom Floating AI Button with Requested Icon on Right */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-15 w-15 rounded-2xl bg-white flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.18)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group border-2 border-blue-400 p-1"
        id="chatbot-floating-toggle"
        aria-label="Open Fullscreen AI Helpdesk"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-blue-50">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUa65HwxfK-3NgHsLl9lfnSc_9gVZv6QXl8HtKrA9JQ&s=10"
            alt="AI Assistant"
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

      {/* Full-Screen Pop-Up AI Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex flex-col justify-end md:justify-center md:p-6 lg:p-10"
            id="chatbot-fullscreen-modal"
          >
            {/* Full-Screen Inner Card */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-full h-full md:max-w-5xl md:h-[90vh] bg-white md:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-slate-200 overflow-hidden flex flex-col mx-auto"
            >
              {/* Fullscreen Header */}
              <div className="p-4 md:px-6 md:py-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500 text-white flex items-center justify-between shadow-md shrink-0">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-white p-1 flex items-center justify-center border border-white/30 shadow-inner relative overflow-hidden shrink-0">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUa65HwxfK-3NgHsLl9lfnSc_9gVZv6QXl8HtKrA9JQ&s=10"
                      alt="AI Avatar"
                      className="w-full h-full object-contain rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-black text-sm md:text-base uppercase tracking-wider text-white leading-none">
                        SVM Maharajganj AI Intelligence Desk
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        ONLINE
                      </span>
                    </div>
                    <span className="text-[11px] text-blue-100 font-medium mt-1 block">
                      Official 24/7 AI Guide for Admissions, Events, Faculty & Campus Details
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
                    id="chatbot-fullscreen-close-btn"
                    aria-label="Close fullscreen modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 bg-slate-50/80">
                {/* Welcome Card Banner inside Chat */}
                <div className="max-w-2xl mx-auto w-full p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 shadow-sm text-center mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 bg-white px-3 py-1 rounded-full border border-blue-200">
                    SARASWATI VIDYA MANDIR MAHARAJGANJ
                  </span>
                  <p className="text-xs text-slate-600 mt-2">
                    Trained on authentic school records, board affiliations, faculty members, and the upcoming Prantiya Sanskriti Mahotsav.
                  </p>
                </div>

                {messages.map((msg, index) => {
                  const isAI = msg.role === 'assistant';
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex items-start gap-3 max-w-[92%] md:max-w-[78%] ${isAI ? 'self-start' : 'self-end flex-row-reverse'}`}
                    >
                      {isAI && (
                        <div className="h-9 w-9 rounded-2xl bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0 mt-0.5 shadow-sm overflow-hidden">
                          <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUa65HwxfK-3NgHsLl9lfnSc_9gVZv6QXl8HtKrA9JQ&s=10"
                            alt="AI"
                            className="w-full h-full object-contain rounded-xl"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                      
                      <div className={`p-4 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                        isAI 
                          ? 'bg-white border border-slate-200 text-slate-800 rounded-tl-none' 
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none font-medium'
                      }`}>
                        {msg.content}
                      </div>
                    </motion.div>
                  );
                })}

                {isLoading && (
                  <div className="flex items-start gap-3 self-start max-w-[80%]">
                    <div className="h-9 w-9 rounded-2xl bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUa65HwxfK-3NgHsLl9lfnSc_9gVZv6QXl8HtKrA9JQ&s=10"
                        alt="AI"
                        className="w-full h-full object-contain rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl rounded-tl-none flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-[bounce_1s_infinite_100ms]" />
                      <span className="w-2 h-2 bg-amber-500 rounded-full animate-[bounce_1s_infinite_200ms]" />
                      <span className="w-2 h-2 bg-orange-500 rounded-full animate-[bounce_1s_infinite_300ms]" />
                      <span className="text-xs text-slate-500 font-medium ml-1">SVM AI is thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="px-4 md:px-6 py-2.5 bg-slate-100/90 border-t border-slate-200 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth shrink-0">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.text}
                    onClick={() => handleSend(reply.text)}
                    className="inline-flex items-center gap-2 shrink-0 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-slate-700 shadow-sm cursor-pointer transition-all"
                  >
                    {reply.icon}
                    {reply.text}
                  </button>
                ))}
              </div>

              {/* Fullscreen Input Footer */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="p-3 md:p-4 bg-white border-t border-slate-200 flex items-center gap-3 shrink-0"
              >
                <input
                  type="text"
                  placeholder="Type your question about admissions, Sanskrit Mahotsav, teachers, or results..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs md:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="chatbot-text-input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-40 text-white font-bold text-xs md:text-sm transition-all cursor-pointer shrink-0 shadow-md flex items-center gap-2"
                  id="chatbot-submit-btn"
                  aria-label="Send query"
                >
                  <span>Send</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
