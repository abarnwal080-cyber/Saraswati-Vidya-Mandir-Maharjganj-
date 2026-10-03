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
  HelpCircle, 
  Phone, 
  Mail, 
  GraduationCap, 
  Users, 
  School,
  FileQuestion
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
      // phone is optional or optional format check
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
    }, 800);
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
      subtitle: 'Inquiry regarding admission, child progress & fees',
      icon: Users,
      letter: 'A'
    },
    {
      id: 'Students',
      title: 'Student',
      subtitle: 'Academic queries, syllabus & school activities',
      icon: GraduationCap,
      letter: 'B'
    },
    {
      id: 'Alumni',
      title: 'Alumni',
      subtitle: 'Batch connect, school visits & memories',
      icon: School,
      letter: 'C'
    },
    {
      id: 'Guest',
      title: 'Visitor / Guest',
      subtitle: 'General inquiries, event details & partnerships',
      icon: FileQuestion,
      letter: 'D'
    }
  ];

  // Slide Animation Variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0
    })
  };

  return (
    <>
      {/* Floating Contact Us Button on Left */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          setIsOpen(true);
          setStep(1);
          setIsSubmitted(false);
        }}
        className="fixed bottom-6 left-6 z-40 h-15 w-15 rounded-2xl bg-white text-slate-800 flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.18)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group border-2 border-orange-300 p-1"
        id="floating-contact-btn"
        aria-label="Contact Us & Quick Enquiry Typeform"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-orange-50">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ayi3dLWy0HCbzCp8Zq3hfYWBNEHi9FudSJ3BIukQFA&s=10" 
            alt="Contact Us" 
            className="w-10 h-10 object-contain rounded-full"
            referrerPolicy="no-referrer"
          />
          {/* Subtle pulse badge */}
          <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
          </span>
        </div>
      </motion.button>

      {/* Typeform Multi-Step Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
            id="typeform-contact-overlay"
          >
            <motion.div
              initial={{ scale: 0.94, y: 25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 25, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="max-w-2xl w-full bg-white rounded-3xl md:rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-slate-200 relative overflow-hidden flex flex-col min-h-[520px] justify-between"
            >
              {/* Typeform Top Header & Progress Bar */}
              <div className="relative z-10">
                {/* Visual Progress Bar */}
                <div className="w-full h-1.5 bg-slate-100 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-blue-600 rounded-r-full"
                    animate={{ width: isSubmitted ? '100%' : `${progressPercentage}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>

                {/* Header bar with counter and close button */}
                <div className="p-4 md:px-8 flex items-center justify-between border-b border-slate-100 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 p-0.5 flex items-center justify-center">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ayi3dLWy0HCbzCp8Zq3hfYWBNEHi9FudSJ3BIukQFA&s=10" 
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
                {/* Background soft pastel ambient blur */}
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
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5 shadow-inner border-2 border-green-200 animate-bounce">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>

                      <span className="text-xs font-mono font-bold text-green-700 bg-green-50 border border-green-200 px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                        Enquiry Submitted
                      </span>

                      <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight mb-2">
                        Thank You, {name}!
                      </h3>

                      <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                        Your inquiry as a <strong>{role}</strong> has been officially logged in our admission registry. Our Maharajganj school administrative team will reach out to you shortly.
                      </p>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm w-full text-xs text-slate-600 mb-6 flex flex-col gap-1.5">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Desk Email:</span>
                          <span className="font-mono font-bold text-slate-800">svmmrj1@gmail.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Helpline:</span>
                          <span className="font-mono font-bold text-slate-800">+91 94314 26738</span>
                        </div>
                      </div>

                      <button
                        onClick={handleResetAndClose}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs md:text-sm rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all cursor-pointer"
                      >
                        Back to Portal
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`step-${step}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="w-full max-w-xl mx-auto"
                    >
                      {/* QUESTION 1: FULL NAME */}
                      {step === 1 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                            <span>01</span>
                            <ArrowRight className="h-3 w-3" />
                            <span>Identity</span>
                          </div>

                          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight leading-snug">
                            What is your full name? *
                          </h2>

                          <p className="text-xs md:text-sm text-slate-500 mb-3">
                            Please enter your name as a parent, student, or guardian.
                          </p>

                          <div className="relative mt-2">
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

                      {/* QUESTION 2: WHO ARE YOU (ROLE) */}
                      {step === 2 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                            <span>02</span>
                            <ArrowRight className="h-3 w-3" />
                            <span>Affiliation</span>
                          </div>

                          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight leading-snug">
                            Who are you? *
                          </h2>

                          <p className="text-xs md:text-sm text-slate-500 mb-2">
                            Select the category that best describes your connection to our school.
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                            {roleOptions.map((opt) => {
                              const IconComponent = opt.icon;
                              const isSelected = role === opt.id;
                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => selectRoleAndAdvance(opt.id)}
                                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 group relative ${
                                    isSelected
                                      ? 'border-orange-500 bg-orange-50/70 shadow-md ring-2 ring-orange-500/20'
                                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                                  }`}
                                >
                                  <span className={`h-6 w-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center border shrink-0 ${
                                    isSelected
                                      ? 'bg-orange-500 text-white border-orange-500'
                                      : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-orange-100 group-hover:text-orange-700'
                                  }`}>
                                    {opt.letter}
                                  </span>

                                  <div className="flex-1">
                                    <div className="flex items-center gap-1.5 font-display font-bold text-sm text-slate-900">
                                      <IconComponent className="h-4 w-4 text-orange-600 shrink-0" />
                                      {opt.title}
                                    </div>
                                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                      {opt.subtitle}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* QUESTION 3: CONTACT NUMBER / WHATSAPP */}
                      {step === 3 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                            <span>03</span>
                            <ArrowRight className="h-3 w-3" />
                            <span>Contact Helpline</span>
                          </div>

                          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight leading-snug">
                            What is your phone or WhatsApp number?
                          </h2>

                          <p className="text-xs md:text-sm text-slate-500 mb-3">
                            We will use this to contact you or share admission updates. (Optional)
                          </p>

                          <div className="relative mt-2">
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

                      {/* QUESTION 4: REASON FOR CONTACT */}
                      {step === 4 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                            <span>04</span>
                            <ArrowRight className="h-3 w-3" />
                            <span>Your Message</span>
                          </div>

                          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight leading-snug">
                            What is your reason for contacting us? *
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
                          <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
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
