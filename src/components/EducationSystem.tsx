import { motion } from 'motion/react';
import { BookMarked, Cpu, Lightbulb, ClipboardCheck } from 'lucide-react';
import { educationTimeline } from '../data';

export default function EducationSystem() {
  const icons = [
    <Lightbulb className="h-5 w-5 text-orange-600" />,
    <Cpu className="h-5 w-5 text-teal-600" />,
    <ClipboardCheck className="h-5 w-5 text-blue-600" />
  ];

  return (
    <section 
      id="education-system" 
      className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <BookMarked className="h-3.5 w-3.5" />
            Curriculum & Pedagogy
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            System of <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Integrated Learning</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-600 text-sm mt-3 font-medium">
            A carefully mapped educational journey designed to foster logical analysis, deep computer literacy, scientific experimentation, and continuous performance evaluation.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div 
          id="education-timeline-panel"
          className="flex flex-col gap-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200"
        >
          {educationTimeline.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row gap-6 items-start relative ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                id={`edu-step-${idx}`}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 z-10">
                  <div className="h-8 w-8 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white font-mono font-bold text-xs shadow-md">
                    {idx + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <motion.div 
                    whileHover={{ y: -4 }}
                    viewport={{ once: true }}
                    className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-100">
                        {icons[idx] || <Lightbulb className="h-5 w-5 text-blue-600" />}
                      </div>
                      <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
                        STAGE {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans mb-4">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                      {step.points.map((pt, pIdx) => (
                        <span 
                          key={pIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                        >
                          ✓ {pt}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
