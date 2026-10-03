import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  CornerDownLeft, 
  Sparkles, 
  Phone, 
  Mail, 
  GraduationCap, 
  Users, 
  School,
  FileQuestion,
  MessageCircle
} from 'lucide-react';

type UserRole = 'Parents' | 'Students' | 'Alumni' | 'Guest';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('Parents');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Focus input on step change
  useEffect(() => {
    if (isOpen && !isSubmitted) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 250);
    }
  }, [step, isOpen, isSubmitted]);

  // Lock body scroll when modal is open
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

  const progressPercentage = Math.round((step / totalSteps) * 100);

  const getWhatsAppUrl = () => {
    const text = `Namaste! New Inquiry from SVM Maharajganj Website:\n\n*Name:* ${name}\n*Role:* ${role}\n*Phone:* ${phone || 'Not provided'}\n*Query/Reason:* ${reason}\n\nSchool: Saraswati Vidya Mandir, Maharajganj (CBSE: 330263)`;
    return `https://wa.me/917209325453?text=${encodeURIComponent(text)}`;
  };

  const handleNext = () => {
    setErrorMsg('');
    if (step === 1) {
      if (!name.trim()) {
        setErrorMsg('Please enter your name to proceed.');
        return;
      }
    } else if (step === 2) {
      if (!role) {
        setErrorMsg('Please select who you are.');
        return;
      }
    } else if (step === 3) {
      // phone is optional
    } else if (step === 4) {
      if (!reason.trim()) {
        setErrorMsg('Please write your query or reason for contacting us.');
        return;
      }
      handleSubmit();
      return;
    }

    setDirection(1);
    setStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setErrorMsg('');
    setDirection(-1);
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (step !== 4) {
        e.preventDefault();
        handleNext();
      }
    }
  };

  const selectRoleAndAdvance = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setErrorMsg('');
    setTimeout(() => {
      setDirection(1);
      setStep(3);
    }, 200);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Auto-redirect to WhatsApp number 7209325453
      const waUrl = getWhatsAppUrl();
      window.location.href = waUrl;
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setName('');
      setRole('Parents');
      setPhone('');
      setReason('');
      setIsSubmitted(false);
      setErrorMsg('');
    }, 300);
  };

  const roleOptions: { id: UserRole; title: string; subtitle: string; icon: any; letter: string }[] = [
    {
      id: 'Parents',
      title: 'Parent / Guardian',
      subtitle: 'Seeking admissions, fee details, or meeting teachers',
      icon: Users,
      letter: 'A'
    },
    {
      id: 'Students',
      title: 'Prospective Student',
      subtitle: 'Curious about academic syllabus, clubs, and sports',
      icon: GraduationCap,
      letter: 'B'
    },
    {
      id: 'Alumni',
      title: 'Alumni / Ex-Student',
      subtitle: 'Staying connected or contributing to school legacy',
      icon: School,
      letter: 'C'
    },
    {
      id: 'Guest',
      title: 'General Visitor / Guest',
      subtitle: 'Event queries, invitations, or general questions',
      icon: Sparkles,
      letter: 'D'
    }
  ];

  return (
    <>
      {/* Floating Interactive Image Button on Left Bottom */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 h-15 w-15 rounded-2xl bg-white flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.2)] border-2 border-orange-400 p-1 cursor-pointer group"
        id="floating-enquiry-btn"
        aria-label="Contact Us & Quick Enquiry"
        title="Contact Us"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-orange-50/60">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-f1WXHyNZj63JAcwfPY5TcJDT4vil6D2warNdV4dURg&s=10"
            alt="Contact Us"
            className="w-10 h-10 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          {/* Pulsing Active Indicator */}
          <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
          </span>
        </div>
      </motion.button>

      {/* Full-Screen Modern Typeform Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
            id="typeform-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.94, y: 25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 25, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
              id="typeform-card"
            >
              {/* Top Progress Bar & Header */}
              <div className="relative">
                <div className="w-full h-1.5 bg-slate-100 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-r-full"
                    animate={{ width: isSubmitted ? '100%' : `${progressPercentage}%` }}
                    transition={{ duration: 0.35 }}
                  />
                </div>

                <div className="p-4 md:px-8 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center p-1 border border-orange-200 shadow-xs">
                      <img 
                        src="https://msvmbarhangopal.org/new/images/logo.png" 
                        alt="SVM Contact" 
                        className="w-full h-full object-contain rounded-lg"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="font-display font-black text-xs md:text-sm text-slate-900 tracking-wide block uppercase">
                        Saraswati Vidya Mandir Enquiry
                      </span>
                      {!isSubmitted && (
                        <span className="text-[11px] font-mono text-orange-600 font-bold">
                          Step {step} of {totalSteps} • {progressPercentage}% Completed
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleResetAndClose}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                    id="typeform-close-btn"
                    aria-label="Close Typeform"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main Typeform Question Body */}
              <div className="p-6 md:p-10 flex-1 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/5 rounded-full filter blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full filter blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait" custom={direction}>
                  {isSubmitted ? (
                    <motion.div
                      key="submitted-state"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-6 flex flex-col items-center justify-center"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5 shadow-inner border-2 border-green-200">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>

                      <span className="text-xs font-mono font-bold text-green-700 bg-green-50 border border-green-200 px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                        Enquiry Submitted
                      </span>

                      <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight mb-2">
                        Redirecting to WhatsApp (+91 7209325453)...
                      </h3>

                      <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                        Thank you, <strong>{name}</strong>! Your inquiry details are being forwarded directly to our official WhatsApp helpline.
                      </p>

                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <a
                          href={getWhatsAppUrl()}
                          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Open WhatsApp Chat (+91 7209325453)</span>
                        </a>

                        <button
                          onClick={handleResetAndClose}
                          className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs md:text-sm rounded-xl transition-all cursor-pointer"
                        >
                          Close Window
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`step-${step}`}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -40 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="flex flex-col"
                    >
                      {/* Step 1: Name */}
                      {step === 1 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md">
                              01 → Name
                            </span>
                            <span className="text-xs text-slate-400 font-medium">Personal Details</span>
                          </div>

                          <h2 className="font-display font-black text-xl md:text-2xl lg:text-3xl text-slate-900 tracking-tight mb-3">
                            What is your full name? <span className="text-orange-500">*</span>
                          </h2>

                          <p className="text-xs md:text-sm text-slate-500 mb-6">
                            Let us know who we have the pleasure of speaking with.
                          </p>

                          <div className="relative">
                            <input
                              ref={inputRef as React.RefObject<HTMLInputElement>}
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder="Type your name here..."
                              className="w-full text-base md:text-xl font-medium text-slate-900 placeholder-slate-300 border-b-2 border-slate-200 focus:border-orange-500 py-3 bg-transparent focus:outline-none transition-colors"
                              id="typeform-name-input"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Role / Persona Selection */}
                      {step === 2 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md">
                              02 → Persona
                            </span>
                            <span className="text-xs text-slate-400 font-medium">Role Identification</span>
                          </div>

                          <h2 className="font-display font-black text-xl md:text-2xl lg:text-3xl text-slate-900 tracking-tight mb-2">
                            Which describes you best? <span className="text-orange-500">*</span>
                          </h2>

                          <p className="text-xs md:text-sm text-slate-500 mb-5">
                            Select one option below to tailor your school consultation.
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {roleOptions.map((opt) => {
                              const isSelected = role === opt.id;
                              const Icon = opt.icon;
                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => selectRoleAndAdvance(opt.id)}
                                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 group relative ${
                                    isSelected
                                      ? 'border-orange-500 bg-orange-50/70 shadow-sm ring-2 ring-orange-400/30'
                                      : 'border-slate-200 bg-white hover:border-orange-200 hover:bg-slate-50/80 shadow-xs'
                                  }`}
                                >
                                  <div className={`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 border ${
                                    isSelected
                                      ? 'bg-orange-500 text-white border-orange-600'
                                      : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:border-orange-300'
                                  }`}>
                                    {opt.letter}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-display font-bold text-xs md:text-sm text-slate-900 leading-tight">
                                      {opt.title}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                                      {opt.subtitle}
                                    </p>
                                  </div>

                                  <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${isSelected ? 'text-orange-600' : 'text-slate-300 group-hover:text-orange-400'}`} />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Phone / Contact Number */}
                      {step === 3 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md">
                              03 → Phone Number
                            </span>
                            <span className="text-xs text-slate-400 font-medium">Quick Callback</span>
                          </div>

                          <h2 className="font-display font-black text-xl md:text-2xl lg:text-3xl text-slate-900 tracking-tight mb-3">
                            What's your mobile number?
                          </h2>

                          <p className="text-xs md:text-sm text-slate-500 mb-6">
                            We'll use this to send WhatsApp updates or coordinate admissions.
                          </p>

                          <div className="relative">
                            <input
                              ref={inputRef as React.RefObject<HTMLInputElement>}
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder="+91 98765 43210"
                              className="w-full text-base md:text-xl font-mono font-medium text-slate-900 placeholder-slate-300 border-b-2 border-slate-200 focus:border-orange-500 py-3 bg-transparent focus:outline-none transition-colors"
                              id="typeform-phone-input"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 4: Query Details */}
                      {step === 4 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md">
                              04 → Your Query
                            </span>
                            <span className="text-xs text-slate-400 font-medium">Inquiry Details</span>
                          </div>

                          <h2 className="font-display font-black text-xl md:text-2xl lg:text-3xl text-slate-900 tracking-tight mb-2">
                            How can our school team assist you? <span className="text-orange-500">*</span>
                          </h2>

                          <p className="text-xs md:text-sm text-slate-500 mb-2">
                            Describe your inquiry regarding admissions, fee schedules, Sanskrit Mahotsav, or meeting teachers.
                          </p>

                          <div className="relative mt-2">
                            <textarea
                              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                              required
                              rows={4}
                              value={reason}
                              onChange={(e) => setReason(e.target.value)}
                              placeholder="Write your query details here..."
                              className="w-full text-sm md:text-base font-normal text-slate-900 placeholder-slate-300 border-2 border-slate-200 focus:border-orange-500 rounded-2xl p-4 bg-slate-50/50 focus:bg-white focus:outline-none transition-all resize-none shadow-inner"
                              id="typeform-reason-input"
                            />
                          </div>
                        </div>
                      )}

                      {/* Error Banner if validation fails */}
                      {errorMsg && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium flex items-center gap-2"
                        >
                          <span>⚠️</span>
                          <span>{errorMsg}</span>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Typeform Footer Actions Bar */}
              {!isSubmitted && (
                <div className="p-4 md:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  {/* Left: Back button or step dots */}
                  <div className="flex items-center gap-2">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                        id="typeform-back-btn"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Back</span>
                      </button>
                    )}

                    <div className="hidden sm:flex items-center gap-1.5 ml-2">
                      {[1, 2, 3, 4].map((i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (i < step || (i === 2 && name.trim()) || (i === 3 && name.trim())) {
                              setDirection(i > step ? 1 : -1);
                              setStep(i);
                            }
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            i === step
                              ? 'w-6 bg-orange-600'
                              : i < step
                              ? 'bg-orange-300'
                              : 'bg-slate-200'
                          }`}
                          aria-label={`Go to question ${i}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Next / Submit Button */}
                  <div className="flex items-center gap-2">
                    <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                      press <strong className="text-slate-600">Enter ↵</strong>
                    </span>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs md:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                      id="typeform-next-btn"
                    >
                      {step === totalSteps ? (
                        <>
                          <span>{isSubmitting ? 'Sending...' : 'Send on WhatsApp'}</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Next</span>
                          <CornerDownLeft className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
