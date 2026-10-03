import { motion } from 'motion/react';
import { Sparkles, PhoneCall, GraduationCap, School } from 'lucide-react';

export default function Marquee() {
  const marqueeItems = [
    { text: "ADMISSION OPEN 2026-27", icon: <GraduationCap className="h-4 w-4 text-orange-400" /> },
    { text: "Nursery to Class X", icon: <Sparkles className="h-4 w-4 text-yellow-400" /> },
    { text: "CBSE Affiliated No. 330263", icon: <School className="h-4 w-4 text-teal-400" /> },
    { text: "Admissions Helpline: 7209325453", icon: <PhoneCall className="h-4 w-4 text-blue-400" /> },
  ];

  // Double the array to make seamless looping
  const loopItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div 
      id="admission-marquee-container"
      className="relative w-full bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-y border-blue-500/30 overflow-hidden py-3 shadow-[0_0_25px_rgba(30,58,138,0.3)] z-20"
    >
      {/* Glow overlays on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10" />

      <div className="flex w-max items-center">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-10 whitespace-nowrap"
        >
          {loopItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2.5"
              id={`marquee-item-${idx}`}
            >
              {item.icon}
              <span className="font-display font-extrabold text-sm md:text-base tracking-widest text-slate-100 uppercase bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
                {item.text}
              </span>
              <span className="text-orange-500 font-black text-lg mx-2">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
