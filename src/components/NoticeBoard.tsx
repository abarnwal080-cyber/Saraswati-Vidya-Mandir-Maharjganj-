import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BellRing, Maximize2, X, Download, ZoomIn } from 'lucide-react';

const NOTICE_IMAGE_URL = 'https://plain-apac-prod-public.komododecks.com/202610/03/v1m5piVF12ukM8wv5cvB/image.png';

export default function NoticeBoard() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section 
      id="notices" 
      className="relative py-20 px-6 md:px-12 bg-white overflow-hidden scroll-mt-10"
    >
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official Notice Desk Header */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200 text-xs font-bold tracking-wider uppercase mb-1 self-start shadow-sm"
            >
              <BellRing className="h-3.5 w-3.5 animate-bounce" />
              <span>Official Notice Desk</span>
            </motion.div>

            <h2 className="font-display font-black text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Live Official <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-blue-600 bg-clip-text text-transparent">Notice Board</span>
            </h2>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans font-medium">
              Official school announcements, administrative circulars, and major institutional event notices at Saraswati Vidya Mandir, Maharajganj.
            </p>

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-xs text-orange-950 font-medium leading-relaxed">
              📢 <strong>Official Circular:</strong> Click the notice circular to view in high definition or download the circular.
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <ZoomIn className="h-4 w-4" />
                <span>View Full Size Circular</span>
              </button>
            </div>
          </div>

          {/* Right Column: Full-size 2:3 Portrait Notice Image */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.015 }}
              onClick={() => setIsImageModalOpen(true)}
              className="relative w-full max-w-sm md:max-w-md aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 cursor-pointer group"
              id="notice-portrait-card"
            >
              <img 
                src={NOTICE_IMAGE_URL} 
                alt="Official Notice Circular - Saraswati Vidya Mandir Maharajganj"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay with Expand Indicator */}
              <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-white/95 text-slate-900 shadow-xl text-xs font-bold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="h-4 w-4 text-orange-600" />
                  <span>Click to View Full Screen</span>
                </div>
              </div>

              {/* Urgent Notice Badge Pill */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>Official Notice</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Full Resolution Modal View for the Notice */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
            onClick={() => setIsImageModalOpen(false)}
            id="notice-image-modal"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-2xl w-full max-h-[95vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 px-6 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white z-10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-mono font-bold border border-orange-500/30">
                    Official Circular
                  </span>
                  <span className="text-xs text-slate-400">
                    Saraswati Vidya Mandir Maharajganj
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={NOTICE_IMAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Open in new tab"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setIsImageModalOpen(false)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Display (Full 2:3 Portrait) */}
              <div className="flex-1 bg-black/95 flex items-center justify-center p-2 overflow-auto max-h-[85vh]">
                <img 
                  src={NOTICE_IMAGE_URL} 
                  alt="Official Notice Circular Full Size"
                  className="max-h-[82vh] w-auto object-contain rounded-xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
