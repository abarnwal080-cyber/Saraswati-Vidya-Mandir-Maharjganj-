import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Facebook, Twitter, Youtube, Linkedin, Send, Mail, CheckCircle2, Award, Heart, Sparkles } from 'lucide-react';
import { navItems } from '../data';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsEmail('');
      setSubscribed(false);
      alert('Subscribed successfully to Saraswati Vidya Mandir circulars!');
    }, 2000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-slate-900"
    >
      {/* Animated Wave Separator at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-full fill-slate-50 transform rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,3,57.05,11.52,85.13,19.38C152.6,38.22,224.57,68.4,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-slate-900">
          
          {/* Left Column: Branding and Logos */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://msvmbarhangopal.org/new/images/logo.png" 
                alt="Saraswati Vidya Mandir Left Logo" 
                className="h-12 w-auto object-contain rounded-full bg-white/10 p-0.5"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-sm tracking-wider text-white">
                  SARASWATI VIDYA MANDIR
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                  MAHARAJGANJ • VIDYA BHARATI
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm mt-2">
              Combining standardized state CBSE frameworks with Vedic mathematics, classical moral teachings, and complete physical health routines under Vidya Bharati leadership.
            </p>

            <div className="flex items-center gap-2.5 mt-2">
              <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px] font-mono font-bold rounded-md uppercase">
                CBSE ACCREDITED
              </span>
              <span className="px-2.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[9px] font-mono font-bold rounded-md uppercase">
                LOK SHIKSHA SAMITI
              </span>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-display font-black text-xs text-slate-400 uppercase tracking-widest mb-4">
                CAMPUS NAVIGATION
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-black text-xs text-slate-400 uppercase tracking-widest mb-4">
                EXPLORE PORTAL
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
                {navItems.slice(5).map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-display font-black text-xs text-slate-400 uppercase tracking-widest mb-1">
              DIGITAL DISPATCH & CONTACT
            </h3>
            <p className="text-xs text-slate-400 leading-normal">
              Official school helpline & notices. For admissions and payments: <span className="text-white font-mono font-bold">svmmrj1@gmail.com</span>
            </p>

            <div className="relative mt-2">
              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <form 
                    onSubmit={handleSubscribe} 
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      required
                      placeholder="e.g. parent@example.com"
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-800 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Subscribed successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-xl border border-slate-800 transition-all shadow-md"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900 hover:bg-blue-400 hover:text-white rounded-xl border border-slate-800 transition-all shadow-md"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900 hover:bg-red-600 hover:text-white rounded-xl border border-slate-800 transition-all shadow-md"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900 hover:bg-blue-700 hover:text-white rounded-xl border border-slate-800 transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and Creator Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs text-slate-400">
          <div className="flex flex-col gap-1">
            <span>© {new Date().getFullYear()} Saraswati Vidya Mandir, Maharajganj Town, Siwan District. All Rights Reserved.</span>
            
            {/* Priyaranjan Raj Creator Credit with Hyperlink */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
              <span>Created by</span>
              <a 
                href="https://priyaranjan-web.ai.studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20"
              >
                <Sparkles className="h-3 w-3 text-amber-400" />
                Priyaranjan Raj
              </a>
              <span className="text-slate-400 font-mono font-semibold">(2026 Batch)</span>
            </div>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-pointer shadow-sm hover:bg-slate-800 transition-all"
            id="back-to-top-btn"
          >
            <span>Back To Top</span>
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
