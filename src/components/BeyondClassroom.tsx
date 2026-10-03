import { motion } from 'motion/react';
import { Trophy, Theater, Music, Lightbulb, Leaf, MessageSquare, Sparkles } from 'lucide-react';
import { clubItems } from '../data';

const iconMap: { [key: string]: any } = {
  Trophy: Trophy,
  Theater: Theater,
  Music: Music,
  Lightbulb: Lightbulb,
  Leaf: Leaf,
  MessageSquare: MessageSquare,
};

const vibrantColors = [
  { gradient: 'from-amber-500 via-orange-500 to-red-500', shadow: 'shadow-orange-500/25', bgSoft: 'bg-orange-50/60' },
  { gradient: 'from-purple-600 via-fuchsia-500 to-pink-500', shadow: 'shadow-purple-500/25', bgSoft: 'bg-purple-50/60' },
  { gradient: 'from-blue-600 via-indigo-600 to-cyan-500', shadow: 'shadow-blue-500/25', bgSoft: 'bg-blue-50/60' },
  { gradient: 'from-teal-500 via-emerald-500 to-cyan-600', shadow: 'shadow-emerald-500/25', bgSoft: 'bg-emerald-50/60' },
  { gradient: 'from-emerald-600 via-green-500 to-lime-500', shadow: 'shadow-green-500/25', bgSoft: 'bg-green-50/60' },
  { gradient: 'from-rose-500 via-red-500 to-amber-500', shadow: 'shadow-rose-500/25', bgSoft: 'bg-rose-50/60' }
];

export default function BeyondClassroom() {
  return (
    <section 
      id="classroom" 
      className="relative py-16 md:py-24 px-4 md:px-12 bg-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Holistic Growth Spectrum
          </motion.div>
          
          <h2 className="font-display font-black text-2xl md:text-5xl tracking-tight text-slate-900">
            Beyond The <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Traditional Classroom</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-600 text-xs md:text-sm mt-2.5 font-medium">
            Academic distinction combined with dynamic creative clubs ensuring that our students build critical thinking, leadership, and athletic stability.
          </p>
        </div>

        {/* Responsive Grid: On mobile: 2-columns with vibrant icons & short text only */}
        <div 
          id="clubs-grid-panel"
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
        >
          {clubItems.map((club, index) => {
            const IconComp = iconMap[club.icon] || Lightbulb;
            const colorTheme = vibrantColors[index % vibrantColors.length];

            return (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -4, 
                  scale: 1.01
                }}
                viewport={{ once: true }}
                className={`p-4 md:p-8 rounded-2xl md:rounded-3xl ${colorTheme.bgSoft} border border-slate-200/90 shadow-xs hover:shadow-lg flex flex-col items-center md:items-start text-center md:text-left justify-between group hover:border-blue-300 hover:bg-white transition-all duration-300 relative overflow-hidden`}
                id={`club-card-${index}`}
              >
                <div className="w-full flex flex-col items-center md:items-start">
                  {/* Top Bar / Vibrant Colored Icon */}
                  <div className="flex items-center justify-between w-full mb-3 md:mb-6">
                    {/* Vibrant Icon Box */}
                    <div className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-gradient-to-tr ${colorTheme.gradient} text-white shadow-md ${colorTheme.shadow} group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0`}>
                      <IconComp className="h-5 w-5 md:h-6 md:w-6" />
                    </div>

                    {/* Number on Desktop */}
                    <span className="hidden md:inline font-mono text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Short Title on Mobile & Desktop */}
                  <h3 className="font-display font-black text-xs sm:text-sm md:text-xl text-slate-900 mb-1 md:mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {club.title}
                  </h3>

                  {/* Long Description: Hidden on mobile, visible on desktop */}
                  <p className="hidden md:block text-xs md:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                    {club.description}
                  </p>
                </div>

                {/* Explore Activities link: Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Activities</span>
                  <span className="text-sm">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
