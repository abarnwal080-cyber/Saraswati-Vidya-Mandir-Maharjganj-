import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface PremiumLoaderProps {
  onFinish?: () => void;
}

export default function PremiumLoader({ onFinish }: PremiumLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(15);

  // Lock body & document scroll completely while loader is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isVisible]);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(45), 250);
    const timer2 = setTimeout(() => setProgress(85), 650);
    const timer3 = setTimeout(() => setProgress(100), 1000);
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white overflow-hidden w-full h-full select-none"
          id="premium-loader-overlay"
        >
          {/* Subtle warm & blue background ambient glow */}
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute w-80 h-80 bg-orange-400/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse" />

          <div className="relative flex flex-col items-center text-center px-6 max-w-md z-10">
            {/* Animated Logo Container with rotating glowing border ring */}
            <div className="relative mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-600 via-amber-500 to-orange-500 opacity-60 blur-sm"
              />
              
              <div className="relative w-24 h-24 rounded-full bg-white p-2 shadow-2xl border-2 border-slate-100 flex items-center justify-center">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src="https://msvmbarhangopal.org/new/images/logo.png"
                  alt="SVM Emblem"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -bottom-1 -right-1 p-1.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full text-white shadow-md"
              >
                <Sparkles className="h-3.5 w-3.5" />
              </motion.div>
            </div>

            {/* School Name & Motto */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h2 className="font-display font-black text-xl md:text-2xl tracking-tight text-slate-900 leading-tight">
                SARASWATI VIDYA MANDIR
              </h2>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mt-1">
                MAHARAJGANJ • VIDYA BHARATI
              </p>
              <div className="mt-2 text-xs font-serif italic text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                सा विद्या या विमुक्तये
              </div>
            </motion.div>

            {/* Sleek Progress Bar */}
            <div className="w-56 h-1.5 bg-slate-100 rounded-full mt-7 overflow-hidden border border-slate-200/60 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-amber-500 to-orange-500 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
              />
            </div>

            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mt-2.5">
              Loading Digital Campus Experience...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
