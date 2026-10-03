import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Crown, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Award
} from 'lucide-react';
import { topperStudents } from '../data';

export default function Glory() {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});
  
  // Carousel State for Class 10th CBSE Results
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Sristy Kumari - Class VIII Outstanding Honor & School Champion
  const class8SpecialHonor = topperStudents.find(s => s.name === 'Sristy Kumari') || topperStudents[0];

  // Class X Board Toppers Only (Excluding Class VIII Sristy Kumari)
  const class10Toppers = topperStudents
    .filter(s => s.name !== 'Sristy Kumari')
    .sort((a, b) => {
      const pA = parseFloat(a.percentage);
      const pB = parseFloat(b.percentage);
      return pB - pA;
    });

  const totalClass10Toppers = class10Toppers.length;

  // Auto-slide interval without displaying timing
  useEffect(() => {
    if (isPaused || totalClass10Toppers === 0) return;

    // Fast slide for ranks 1 & 2 (1.5s), longer for rank 3 (4s)
    const duration = currentIndex === 0 ? 1500 : 4000;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalClass10Toppers);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, totalClass10Toppers]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalClass10Toppers);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalClass10Toppers) % totalClass10Toppers);
  };

  const handleLike = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLiked[name]) {
      setLikes(prev => ({ ...prev, [name]: (prev[name] || 0) - 1 }));
      setHasLiked(prev => ({ ...prev, [name]: false }));
    } else {
      setLikes(prev => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
      setHasLiked(prev => ({ ...prev, [name]: true }));
    }
  };

  const activeStudent = class10Toppers[currentIndex] || class10Toppers[0];

  return (
    <section 
      id="glory" 
      className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden"
    >
      {/* Clean subtle ambient backdrop */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
          >
            <Trophy className="h-3.5 w-3.5 text-amber-600" />
            Academic Glory
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            Proud Achievers of <span className="bg-gradient-to-r from-blue-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Saraswati Vidya Mandir</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-slate-600 text-xs md:text-sm mt-3 font-medium leading-relaxed">
            Celebrating outstanding academic execution, Class VIII Special Honors, and CBSE Class X board exam results.
          </p>
        </div>

        {/* ====================================================
             1. SEPARATE SPECIAL CARD FOR CLASS VIII HONOR (SRISTY KUMARI)
        ==================================================== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-16 bg-white border-2 border-amber-300 rounded-[32px] p-6 md:p-8 shadow-xl overflow-hidden group"
        >
          {/* Subtle gold decorative gradient in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full filter blur-2xl pointer-events-none" />

          {/* Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-white font-display font-black text-xs uppercase tracking-wider shadow-md">
              <Crown className="h-4 w-4 fill-white" />
              <span>Class VIII Outstanding Honor</span>
            </div>

            <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Grade 8 Academic Champion
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            {/* Avatar */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-3xl p-1.5 bg-gradient-to-tr from-amber-400 via-orange-400 to-blue-600 shadow-lg">
                <div className="w-full h-full rounded-[22px] bg-white overflow-hidden p-1 border-2 border-white">
                  <img 
                    src={class8SpecialHonor.image} 
                    alt={class8SpecialHonor.name} 
                    className="w-full h-full object-cover rounded-[18px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-8 flex flex-col justify-center text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
                  {class8SpecialHonor.name}
                </h3>
                <span className="font-display font-black text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent leading-none">
                  {class8SpecialHonor.percentage}
                </span>
              </div>

              <p className="text-xs md:text-sm font-bold text-amber-700 mt-1">
                Class VIII Outstanding Honor & School Champion
              </p>

              <div className="my-4 p-3 bg-amber-50/60 rounded-2xl border border-amber-200/80 inline-flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
                <span className="text-slate-600">
                  Guardian / Father: <strong className="text-slate-900">{class8SpecialHonor.guardian}</strong>
                </span>
                <span className="text-amber-800 font-mono font-bold">
                  Saraswati Vidya Mandir, Maharajganj
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Class 8 Honor
                </span>

                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={(e) => handleLike(class8SpecialHonor.name, e)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    hasLiked[class8SpecialHonor.name]
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200'
                  }`}
                >
                  <Heart className={`h-3.5 w-3.5 ${hasLiked[class8SpecialHonor.name] ? 'fill-current' : ''}`} />
                  <span>{likes[class8SpecialHonor.name] > 0 ? `${likes[class8SpecialHonor.name]} Appreciations` : 'Appreciate Achiever'}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
             2. CBSE CLASS X BOARD RESULT HIGHLIGHTS (CAROUSEL ONLY)
        ==================================================== */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="font-display font-black text-xl text-slate-900 tracking-tight flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              <span>Class X Board Result Highlights</span>
            </h3>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm transition-all cursor-pointer"
                aria-label="Previous Topper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm transition-all cursor-pointer"
                aria-label="Next Topper"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Active Carousel Card (Yellow Highlighted Element Kept) */}
          {activeStudent && (
            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStudent.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border-2 border-blue-400 bg-white p-5 md:p-6 shadow-md flex items-center justify-between gap-4 transition-all"
                  id={`carousel-topper-${currentIndex}`}
                >
                  {/* Left: Square-Rounded Student Photo */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 p-0.5">
                      <img 
                        src={activeStudent.image} 
                        alt={activeStudent.name} 
                        className="w-full h-full object-cover rounded-[14px]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Middle: Rank, Name, Guardian */}
                    <div>
                      <span className="text-xs md:text-sm font-mono font-bold text-amber-500 uppercase tracking-wider block">
                        RANK #{currentIndex + 1}
                      </span>
                      <h4 className="font-display font-black text-lg md:text-xl text-slate-900 mt-0.5 leading-tight">
                        {activeStudent.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {activeStudent.guardian}
                      </p>
                    </div>
                  </div>

                  {/* Right: Bold Percentage */}
                  <div className="text-right shrink-0">
                    <span className="font-display font-black text-2xl md:text-4xl text-blue-600 block leading-none">
                      {activeStudent.percentage}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase mt-1 block">
                      CBSE CLASS X
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Clean Carousel Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {class10Toppers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
