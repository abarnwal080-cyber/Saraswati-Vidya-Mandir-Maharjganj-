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

export default function BeyondClassroom() {
  return (
    <section 
      id="classroom" 
      className="relative py-24 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Holistic Growth Spectrum
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            Beyond The <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Traditional Classroom</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-600 text-sm mt-3 font-medium">
            Academic distinction combined with dynamic creative clubs ensures that our students build deep critical thinking, leadership, and athletic stability.
          </p>
        </div>

        {/* 3D Hover & Glow Shadow Grid */}
        <div 
          id="clubs-grid-panel"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {clubItems.map((club, index) => {
            const IconComp = iconMap[club.icon] || Lightbulb;
            return (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  boxShadow: "0 20px 40px -15px rgba(37,99,235,0.12)"
                }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-sm flex flex-col justify-between group hover:border-blue-300 hover:bg-white transition-all duration-300 relative overflow-hidden"
                id={`club-card-${index}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-100/80 text-blue-700 group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {club.name}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                    {club.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
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
