import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Phone, Users, Sparkles, ArrowLeft, ArrowRight, GraduationCap, BookOpen } from 'lucide-react';
import { teacherItems } from '../data';

const departmentsList = [
  'All',
  'Administration',
  'Science',
  'Mathematics',
  'Social Science',
  'Sanskrit',
  'Hindi',
  'English',
  'Computer / IT',
  'Primary',
  'Sports',
  'Music',
  'Others'
];

export default function Teachers() {
  const [isFullDirectoryView, setIsFullDirectoryView] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDept, setActiveDept] = useState<string>('All');

  const filteredTeachers = teacherItems.filter((teacher) => {
    const matchesSearch = 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (teacher.qualification || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDept = activeDept === 'All' || teacher.department === activeDept;

    return matchesSearch && matchesDept;
  });

  return (
    <section 
      id="teachers" 
      className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden scroll-mt-10"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        <AnimatePresence mode="wait">
          {!isFullDirectoryView ? (
            /* OVERVIEW SUMMARY VIEW */
            <motion.div
              key="overview-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Section Heading */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3"
              >
                <Users className="h-3.5 w-3.5 animate-pulse" />
                Academic & Spiritual Pillars
              </motion.div>
              
              <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
                Our Proud <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Faculty & Members</span>
              </h2>
              
              <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base mt-3 font-medium">
                Meet our dedicated educators, subject masters, and administrative team molding future leaders with knowledge, discipline, and moral values.
              </p>

              {/* Action Trigger Card */}
              <div className="mt-12 p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden flex flex-col items-center">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 mb-4 border border-blue-100">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="font-display font-black text-2xl text-slate-900 mb-2">
                  {teacherItems.length}+ Dedicated Teachers & Faculty Members
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mb-8">
                  Explore our complete faculty directory across Science, Sanskrit, Social Science, Mathematics, English, Computer Science, and Primary wings.
                </p>

                <button
                  onClick={() => {
                    setIsFullDirectoryView(true);
                    // Smooth scroll into view
                    document.getElementById('teachers')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
                  id="open-teacher-directory-btn"
                >
                  <Users className="h-4 w-4" />
                  Open Complete Teacher Directory
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* FULL IN-PAGE DIRECTORY SUBPAGE */
            <motion.div
              key="directory-subpage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl"
              id="complete-teacher-subpage"
            >
              {/* Top Subpage Navigation Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <button
                    onClick={() => setIsFullDirectoryView(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors mb-3 cursor-pointer"
                    id="back-to-overview-btn"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Overview
                  </button>

                  <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900">
                    Faculty & Staff Complete Directory
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Showing <strong className="text-blue-600">{filteredTeachers.length}</strong> educators and staff members
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
                    Vidya Bharati Certified
                  </span>
                </div>
              </div>

              {/* Search & Department Filter Controls */}
              <div className="py-6 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by teacher name, subject, or qualification..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Department Horizontal Scroll */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                  {departmentsList.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setActiveDept(dept)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                        activeDept === dept
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Responsive Grid of All Faculty Members */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {filteredTeachers.map((teacher, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 text-white flex items-center justify-center font-display font-black text-sm shrink-0 shadow-sm">
                          {teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-sm md:text-base text-slate-900 truncate">
                            {teacher.name}
                          </h4>
                          <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-md mt-0.5">
                            {teacher.department}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 font-semibold mt-1">
                        {teacher.designation}
                      </p>

                      {teacher.qualification && (
                        <p className="text-[11px] text-slate-500 font-mono mt-1">
                          🎓 {teacher.qualification}
                        </p>
                      )}
                    </div>

                    {teacher.phone && teacher.phone !== 'N/A' && (
                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-mono text-slate-500">
                        <Phone className="h-3.5 w-3.5 text-teal-600" />
                        <span>{teacher.phone}</span>
                      </div>
                    )}
                  </motion.div>
                ))}

                {filteredTeachers.length === 0 && (
                  <div className="col-span-full py-12 text-center text-slate-400 text-sm">
                    No teacher found matching "{searchTerm}". Try another search keyword.
                  </div>
                )}
              </div>

              {/* Bottom Return Action */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
                <button
                  onClick={() => setIsFullDirectoryView(false)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Close Directory View
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
