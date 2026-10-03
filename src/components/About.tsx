import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Tv, 
  Cpu, 
  FlaskConical, 
  ShieldCheck, 
  Users, 
  CalendarDays, 
  HeartHandshake, 
  Milestone,
  CheckCircle2
} from 'lucide-react';
import { featureCards, timelineEvents } from '../data';

// Map icon strings to Lucide components
const iconMap: { [key: string]: any } = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Tv: Tv,
  Cpu: Cpu,
  FlaskConical: FlaskConical,
  ShieldCheck: ShieldCheck,
  Users: Users,
  CalendarDays: CalendarDays,
  HeartHandshake: HeartHandshake,
};

const amenityGradients = [
  { gradient: 'from-blue-600 to-indigo-600', shadow: 'shadow-blue-500/25', bg: 'hover:border-blue-300' },
  { gradient: 'from-amber-500 to-orange-600', shadow: 'shadow-amber-500/25', bg: 'hover:border-amber-300' },
  { gradient: 'from-cyan-500 to-teal-600', shadow: 'shadow-teal-500/25', bg: 'hover:border-teal-300' },
  { gradient: 'from-purple-600 to-violet-600', shadow: 'shadow-purple-500/25', bg: 'hover:border-purple-300' },
  { gradient: 'from-emerald-500 to-green-600', shadow: 'shadow-emerald-500/25', bg: 'hover:border-emerald-300' },
  { gradient: 'from-rose-500 to-pink-600', shadow: 'shadow-rose-500/25', bg: 'hover:border-rose-300' },
  { gradient: 'from-indigo-600 to-sky-600', shadow: 'shadow-indigo-500/25', bg: 'hover:border-indigo-300' },
  { gradient: 'from-fuchsia-600 to-pink-600', shadow: 'shadow-fuchsia-500/25', bg: 'hover:border-fuchsia-300' },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-600/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200"
          >
            <Milestone className="h-3.5 w-3.5" />
            Discover our Legacy
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900"
            id="about-section-heading"
          >
            Shaping Minds, <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Uplifting Souls</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base mt-3 font-medium"
          >
            Combining standard modern STEM frameworks with deep ancient Indian wisdom to construct the ultimate foundation for life.
          </motion.p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline & Vision */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-display font-black text-xl md:text-2xl text-slate-900 mb-4">
                Our Sacred Ideals
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                At Saraswati Vidya Mandir, Maharajganj, education is not merely a tool for employment; it is a sacred pilgrimage of character synthesis. Inspired by the Vidya Bharati ideology, our teachers instill the pillars of patriotism, humility, hard work, and technical capability.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">Nationalist Outlook</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">Vedic Math Masterclass</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">Digital Classroom Hub</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">Yoga & Athletics</span>
                </div>
              </div>
            </div>

            {/* Timeline Events Panel */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white border border-blue-800/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl" />
              
              <h3 className="font-display font-black text-xl text-white mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                Historic Landmarks
              </h3>
              
              <div className="flex flex-col gap-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-400/30">
                {timelineEvents.map((evt, idx) => (
                  <div key={idx} className="flex gap-4 relative pl-8" id={`timeline-evt-${idx}`}>
                    {/* Circle Node */}
                    <div className="absolute left-1 top-1.5 w-4 h-4 rounded-full border-2 border-teal-400 bg-blue-950 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                    </div>
                    <div>
                      <span className="font-mono font-bold text-xs text-teal-300 block tracking-widest">{evt.year}</span>
                      <h4 className="font-display font-extrabold text-sm text-white mt-0.5">{evt.title}</h4>
                      <p className="text-xs text-slate-200 mt-1 leading-relaxed">{evt.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Feature Grid */}
          <div className="lg:col-span-7">
            <h3 className="font-display font-black text-xl md:text-2xl text-slate-900 mb-6">
              Our Core Amenities & Focus Points
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="feature-grid-panel">
              {featureCards.map((card, index) => {
                const IconComponent = iconMap[card.icon] || GraduationCap;
                const theme = amenityGradients[index % amenityGradients.length];
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.01 }}
                    viewport={{ once: true }}
                    className={`p-4 md:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 ${theme.bg}`}
                    id={`feature-card-${index}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${theme.gradient} text-white shadow-md ${theme.shadow} shrink-0`}>
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                      <h4 className="font-display font-extrabold text-sm md:text-base text-slate-900 tracking-tight">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans pl-0.5">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
