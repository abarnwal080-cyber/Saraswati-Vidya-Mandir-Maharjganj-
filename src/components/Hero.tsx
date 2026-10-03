import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, GraduationCap, Award, Cpu, Phone } from 'lucide-react';
import { schoolStats } from '../data';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-gradient-to-b from-blue-50/50 via-white to-amber-50/30"
    >
      {/* Background Soft Pastel Blobs & Grid */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-100/40 via-sky-50/30 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-tr from-sky-200/40 to-blue-200/30 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-orange-200/40 to-amber-200/30 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Subtle Geometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      {/* Floating Animated Education Icons */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none hidden md:block">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-[8%] p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-[0_8px_30px_rgba(37,99,235,0.12)] text-blue-600"
        >
          <GraduationCap className="h-7 w-7" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-[8%] p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-orange-100 shadow-[0_8px_30px_rgba(234,88,12,0.12)] text-orange-500"
        >
          <BookOpen className="h-6 w-6" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/3 right-[12%] p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-teal-100 shadow-[0_8px_30px_rgba(20,184,166,0.12)] text-teal-600"
        >
          <Award className="h-6 w-6" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-1/3 left-[10%] p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-amber-100 shadow-[0_8px_30px_rgba(245,158,11,0.12)] text-amber-500"
        >
          <Cpu className="h-6 w-6" />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-20 text-center flex flex-col items-center justify-center">
        
        {/* Sanskrit Motto Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100/90 border border-orange-200/80 text-orange-600 text-xs md:text-sm font-bold tracking-wider uppercase mb-5 shadow-sm"
          id="motto-badge"
        >
          <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
          ✨ शिक्षा | सेवा | संस्कार ✨
        </motion.div>

        {/* School Name & Unit Info */}
        <div className="flex flex-col gap-1 mb-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm font-display font-extrabold tracking-widest uppercase text-blue-700"
          >
            A Unit of Vidya Bharati • Lok Shiksha Samiti
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-900"
            id="hero-main-title"
          >
            Saraswati <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent">Vidya Mandir</span>
          </motion.h1>
        </div>

        {/* Headline & Subtitle */}
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl font-bold text-slate-700 font-display mb-3 tracking-wide"
        >
          Welcome to Saraswati Vidya Mandir, Maharajganj
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl text-xs md:text-base text-slate-600 leading-relaxed font-sans mb-8"
        >
          Excellence in Education. Innovation with Indian Values. 
          <span className="block mt-2 font-mono font-bold text-teal-700 text-xs md:text-sm tracking-widest uppercase">
            Knowledge • Character • Service
          </span>
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <a 
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-display font-extrabold text-sm rounded-full shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:scale-[1.02] transition-all"
            id="btn-explore-hero"
          >
            Explore Campus
            <ArrowRight className="h-4 w-4" />
          </a>
          
          <a 
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-display font-extrabold text-sm rounded-full border border-slate-200 shadow-sm hover:scale-[1.02] transition-all"
            id="btn-contact-hero"
          >
            Connect With Us
            <Phone className="h-4 w-4 text-orange-500" />
          </a>
        </motion.div>

        {/* Pure Light Statistics Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          id="hero-stats-panel"
        >
          {schoolStats.map((stat, index) => (
            <div 
              key={index}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_8px_20px_rgba(15,23,42,0.05)] flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              <span className="font-display font-black text-xl md:text-3xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase mt-1 tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
