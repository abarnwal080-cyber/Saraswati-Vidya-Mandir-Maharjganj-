import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BellRing, Calendar, Sparkles, UserCheck, ArrowRight, X, Award } from 'lucide-react';
import { noticeItems } from '../data';
import { NoticeItem } from '../types';

export default function NoticeBoard() {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  return (
    <section 
      id="notices" 
      className="relative py-24 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official Notice Desk Header */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200 text-xs font-bold tracking-wider uppercase mb-1 self-start shadow-sm"
            >
              <BellRing className="h-3.5 w-3.5 animate-bounce" />
              Official Notice Desk
            </motion.div>

            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Live Interactive <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-blue-600 bg-clip-text text-transparent">Notice Board</span>
            </h2>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans font-medium">
              Official school announcements, event circulars, and major institutional gatherings at Saraswati Vidya Mandir, Maharajganj.
            </p>

            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80 text-xs text-orange-800 font-medium leading-relaxed">
              📢 Please check back regularly for official circulars from the Principal's Desk and Vidya Bharati Lok Shiksha Samiti.
            </div>
          </div>

          {/* Right Column: Grand Notice Card */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {noticeItems.map((notice) => (
              <motion.div
                key={notice.id}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedNotice(notice)}
                className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-orange-50/70 via-white to-amber-50/50 border-2 border-orange-300/80 shadow-lg cursor-pointer transition-all hover:shadow-xl relative overflow-hidden"
                id={`notice-item-${notice.id}`}
              >
                {/* Top Badge Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-orange-200/60">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500 text-white shadow-sm flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      Grand Mahotsav
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 animate-pulse">
                      🔴 URGENT NOTICE
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-orange-700 flex items-center gap-1.5 bg-orange-100/80 px-3 py-1 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    5 & 6 September
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                  {notice.title}
                </h3>

                {/* Main Description */}
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 font-sans">
                  Saraswati Vidya Mandir, Maharajganj is proud to organize and host the prestigious <strong>Prantiya Sanskriti Mahotsav</strong> on <strong>5 & 6 September</strong>.
                </p>

                {/* Chief Guests Highlight Box */}
                <div className="p-5 rounded-2xl bg-white border border-orange-200 shadow-sm mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-orange-600 uppercase tracking-widest mb-3">
                    <Award className="h-4 w-4" />
                    Honorable Chief Guests & Dignitaries
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-800">
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-orange-50/50">
                      <UserCheck className="h-4 w-4 text-orange-600 shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Shri Mithilesh Tiwari</span>
                        <span className="text-[11px] text-slate-500">Education Minister of Bihar</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-orange-50/50">
                      <UserCheck className="h-4 w-4 text-orange-600 shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Shri Janardan Singh Sigriwal</span>
                        <span className="text-[11px] text-slate-500">Hon'ble MP, Maharajganj</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-orange-50/50">
                      <UserCheck className="h-4 w-4 text-orange-600 shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Smt. Anita Sinha</span>
                        <span className="text-[11px] text-slate-500">SDM, Maharajganj</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-orange-50/50">
                      <UserCheck className="h-4 w-4 text-orange-600 shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Lok Shiksha Samiti</span>
                        <span className="text-[11px] text-slate-500">Respected Members & Officials</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-orange-700 pt-2 border-t border-orange-200/50">
                  <span>Issued under the Authority of Principal & Lok Shiksha Samiti</span>
                  <span className="flex items-center gap-1 hover:underline">
                    View Full Circular <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Notice Detail Dialog */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
            id="notice-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedNotice(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                aria-label="Close Notice Dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 uppercase">
                  5 & 6 September 2026
                </span>
                <span className="text-xs text-red-600 font-bold">🔴 Official Notification</span>
              </div>

              <h3 className="font-display font-black text-2xl text-slate-900 mb-3">
                {selectedNotice.title}
              </h3>

              <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-200 text-sm text-slate-800 leading-relaxed font-sans mb-6">
                {selectedNotice.description}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Authorized by Administration</span>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
