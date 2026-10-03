import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Phone, Users, Sparkles, ArrowLeft, ArrowRight, Home } from 'lucide-react';
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

interface TeachersProps {
  isSubpage?: boolean;
  onOpenSubpage?: () => void;
  onBackToHome?: () => void;
}

export default function Teachers({
  isSubpage = false,
  onOpenSubpage,
  onBackToHome
}: TeachersProps) {
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

  /* =========================================================================
      1. HOMEPAGE VIEW: CLEAN OVERVIEW TAB CARD UNDER #teachers
  ========================================================================= */
  if (!isSubpage) {
    return (
      <section 
        id="teachers" 
        className="relative py-20 px-6 md:px-12 bg-slate-50 overflow-hidden scroll-mt-10"
      >
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
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
          <div className="mt-10 p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden flex flex-col items-center">
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
              onClick={onOpenSubpage}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
              id="open-teacher-directory-btn"
            >
              <Users className="h-4 w-4" />
              <span>Open Complete Teacher Directory</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================================
      2. DEDICATED SUBPAGE VIEW: FULL STANDALONE DIRECTORY PAGE
  ========================================================================= */
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Subpage Header Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-md mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
              <button 
                onClick={onBackToHome}
                className="hover:text-blue-600 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </button>
              <span>/</span>
              <span className="text-blue-600 font-bold">Faculty Directory Subpage</span>
            </div>

            <h1 className="font-display font-black text-2xl md:text-4xl text-slate-900 tracking-tight flex items-center gap-3">
              <span>Faculty & Staff Directory</span>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono font-bold border border-blue-200">
                {teacherItems.length} Members
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Showing <strong className="text-blue-600">{filteredTeachers.length}</strong> educators and staff members • Vidya Bharati Certified
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs md:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              id="subpage-teachers-back-home-btn"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Directory Content Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg">
          {/* Search & Department Filters */}
          <div className="pb-6 border-b border-slate-100 flex flex-col md:flex-row gap-4">
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

          {/* Grid of Teachers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
        </div>

        {/* Bottom Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onBackToHome}
            className="px-8 py-3.5 rounded-full bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-bold text-sm shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home Page</span>
          </button>
        </div>

      </div>
    </div>
  );
}
