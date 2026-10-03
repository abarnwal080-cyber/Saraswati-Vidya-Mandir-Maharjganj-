import { motion } from 'motion/react';
import { Quote, Sparkles, Award } from 'lucide-react';

export default function Principal() {
  return (
    <section 
      id="principal" 
      className="relative py-24 px-6 md:px-12 bg-white overflow-hidden"
    >
      {/* Subtle light background ambient glow and animations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 via-amber-100/30 to-transparent rounded-full filter blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100/30 via-orange-100/20 to-transparent rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Principal Avatar Card in 1:1 Frame with Light Background Animation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group w-full max-w-[350px]">
              
              {/* Rotating Luminous Aura Animation behind Light Background */}
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-300/40 via-amber-300/30 to-orange-300/40 rounded-[38px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" 
              />
              
              {/* Pulsing floating light orbital rings */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1 bg-gradient-to-tr from-blue-500 via-amber-400 to-orange-500 rounded-[34px] opacity-30 blur-sm"
              />

              {/* Main 1:1 Frame Card */}
              <div className="relative rounded-[32px] overflow-hidden bg-white/95 border-2 border-slate-100 p-3.5 shadow-2xl backdrop-blur-md">
                
                {/* 1:1 Aspect Ratio Frame Container with Light BG Animation */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-amber-50/40 p-1 border border-slate-200/80">
                  <motion.img 
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.04 }}
                    src="https://plain-apac-prod-public.komododecks.com/202610/03/jMUQxLaCv9JpXNtowF4o/image.png" 
                    alt="Principal Shri Shambhu Sharan Tiwari" 
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    id="principal-img"
                  />
                  
                  {/* Floating Experience Badge */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/80 p-2.5 rounded-xl flex items-center gap-3 shadow-lg"
                  >
                    <div className="p-2 rounded-lg bg-orange-100 text-orange-600 shadow-sm">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block font-display font-black text-slate-900 text-sm leading-none">35+ Years</span>
                      <span className="text-[9px] text-blue-600 font-bold tracking-wider uppercase">Educational Leadership</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Principal Identity Metadata */}
                <div className="text-center pt-4 pb-2">
                  <h3 className="font-display font-black text-xl text-slate-900 leading-tight">
                    Shri Shambhu Sharan Tiwari
                  </h3>
                  <p className="text-xs text-blue-600 font-mono tracking-widest mt-1 font-bold uppercase">
                    M.A., B.Ed. • Principal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Principal's Inspiring Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200 text-xs font-bold tracking-wider uppercase mb-5 self-start shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Leadership Message
            </motion.div>

            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-6">
              Nurturing <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 bg-clip-text text-transparent">Wisdom, Faith</span> & Scientific Temper
            </h2>

            {/* Quote Block */}
            <div className="relative pl-6 border-l-4 border-blue-600 mb-8 bg-blue-50/30 py-3 rounded-r-2xl">
              <Quote className="h-8 w-8 text-blue-200 absolute -top-4 -left-3 -z-10" />
              <p className="font-serif italic text-base md:text-lg text-slate-800 leading-relaxed">
                "Our fundamental objective is not merely to prepare students for examinations, but to awaken within them the flame of moral duty, critical inquiry, and cultural conviction."
              </p>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed font-sans mb-8">
              <p>
                Welcome to Saraswati Vidya Mandir, Maharajganj. In an era marked by rapid technological transformations, we remain steadfast in our commitment to cultivating disciplined thinkers who revere their timeless heritage.
              </p>
              <p>
                Through state-of-the-art computer labs, smart classrooms, and Vedic mathematical techniques, we ensure our students are well equipped to conquer modern competitive landscapes while retaining humility and selfless love for humanity.
              </p>
            </div>

            {/* Signature Block */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
              <div className="flex flex-col">
                <span className="font-display font-bold text-slate-900 text-sm">
                  Shri Shambhu Sharan Tiwari
                </span>
                <span className="text-xs text-slate-500">
                  Principal, Saraswati Vidya Mandir Maharajganj
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
