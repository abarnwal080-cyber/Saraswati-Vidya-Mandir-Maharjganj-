import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  HelpCircle, 
  Send, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  CornerDownLeft
} from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [name, setName] = useState('');
  const [role, setRole] = useState<'Parent' | 'Student' | 'Alumni' | 'Visitor'>('Parent');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const progressPercentage = Math.round((step / totalSteps) * 100);

  const handleNext = () => {
    setErrorMsg('');
    if (step === 1) {
      if (!name.trim()) {
        setErrorMsg('Please enter your name.');
        return;
      }
    } else if (step === 4) {
      if (!query.trim()) {
        setErrorMsg('Please enter your query or message.');
        return;
      }
      handleSubmit();
      return;
    }
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setStep(1);
    setName('');
    setRole('Parent');
    setPhone('');
    setQuery('');
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Connect with us
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            Have Any <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Inquiries?</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-slate-600 text-xs md:text-sm mt-3 font-medium">
            Reach out to our principal desk or fill the step-by-step interactive inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Contact Card Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col gap-6 justify-center h-full">
              <h3 className="font-display font-black text-lg md:text-xl text-slate-900 border-b border-slate-100 pb-3">
                Official School Desk
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">CAMPUS LOCATION</span>
                  <p className="text-xs md:text-sm text-slate-800 font-semibold mt-1">
                    Saraswati Vidya Mandir, Maharajganj Town, Siwan District, Bihar, India Pin 841238
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-teal-50 text-teal-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">ADMIN HELPLINE</span>
                  <p className="text-xs md:text-sm text-slate-800 font-semibold mt-1 font-mono">
                    +91 94314 26738 / +91 99342 11094
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-50 text-orange-600 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">OFFICIAL EMAIL</span>
                  <p className="text-xs md:text-sm text-slate-800 font-semibold mt-1 font-mono">
                    svmmrj1@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Typeform with Progress Bar */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Top Progress Bar */}
            <div>
              <div className="w-full h-1.5 bg-slate-100 relative overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-r-full"
                  animate={{ width: isSubmitted ? '100%' : `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-5 px-6 pb-0 flex items-center justify-between">
                <h3 className="font-display font-black text-base md:text-lg text-slate-900">
                  Admission & General Inquiry
                </h3>
                {!isSubmitted && (
                  <span className="text-[11px] font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full">
                    Question {step} of {totalSteps} • {progressPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Form Step Body */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center min-h-[260px]">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3 shadow-inner">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="font-display font-black text-xl text-slate-900 mb-1">
                      Inquiry Logged Successfully!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto mb-4">
                      Thank you, <strong>{name}</strong>. Our school admissions team will respond via phone or email (<span className="font-mono">svmmrj1@gmail.com</span>).
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`form-step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-3"
                  >
                    {step === 1 && (
                      <div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                          01 / Name Identification
                        </span>
                        <label className="text-sm md:text-base font-display font-black text-slate-900 block mb-2">
                          What is your full name? *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full text-base font-medium text-slate-900 border-b-2 border-slate-200 focus:border-blue-600 py-2.5 bg-transparent focus:outline-none transition-colors"
                        />
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                          02 / Identity Type
                        </span>
                        <label className="text-sm md:text-base font-display font-black text-slate-900 block mb-2">
                          Who are you? *
                        </label>
                        <div className="grid grid-cols-2 gap-2.5 mt-2">
                          {(['Parent', 'Student', 'Alumni', 'Visitor'] as const).map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => {
                                setRole(r);
                                setStep(3);
                              }}
                              className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                                role === r
                                  ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm'
                                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <span>{r}</span>
                              <ArrowRight className="h-3 w-3 opacity-60" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                          03 / Contact Details
                        </span>
                        <label className="text-sm md:text-base font-display font-black text-slate-900 block mb-2">
                          Mobile number for callback (Optional)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                          placeholder="+91 98765 43210"
                          className="w-full text-base font-mono font-medium text-slate-900 border-b-2 border-slate-200 focus:border-blue-600 py-2.5 bg-transparent focus:outline-none transition-colors"
                        />
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                          04 / Message & Query
                        </span>
                        <label className="text-sm md:text-base font-display font-black text-slate-900 block mb-2">
                          What is your message or inquiry? *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Write your admission questions or inquiry here..."
                          className="w-full text-xs md:text-sm font-normal text-slate-900 border-2 border-slate-200 focus:border-blue-600 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none transition-all resize-none"
                        />
                      </div>
                    )}

                    {errorMsg && (
                      <p className="text-xs text-red-500 font-semibold mt-1">
                        ⚠️ {errorMsg}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Step Actions */}
            {!isSubmitted && (
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm hover:bg-slate-100"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {step === totalSteps ? (
                    <>
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
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
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
