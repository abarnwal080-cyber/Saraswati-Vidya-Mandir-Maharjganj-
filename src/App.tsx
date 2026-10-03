import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Search, 
  Bell, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Calendar,
  Phone,
  HelpCircle,
  FileText
} from 'lucide-react';

import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Principal from './components/Principal';
import Glory from './components/Glory';
import Reviews from './components/Reviews';
import BeyondClassroom from './components/BeyondClassroom';
import EducationSystem from './components/EducationSystem';
import NoticeBoard from './components/NoticeBoard';
import Teachers from './components/Teachers';
import CBSEAffiliation from './components/CBSEAffiliation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PremiumLoader from './components/PremiumLoader';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  // Search input state
  const [searchVal, setSearchVal] = useState('');

  // Force Light Mode completely & scroll to top on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Search result mapping helper
  const searchItems = [
    { label: "CBSE Affiliation & Official Accreditation", link: "#cbse" },
    { label: "Principal Shri Shambhu Sharan Tiwari Message", link: "#principal" },
    { label: "Academic Glory Class 10 Toppers & School Topper", link: "#glory" },
    { label: "School Faculty & Teacher Directory", link: "#teachers" },
    { label: "About Saraswati Vidya Mandir Foundations", link: "#about" },
    { label: "Beyond Classroom sports, music, drama clubs", link: "#classroom" },
    { label: "Community Reviews & Write a Review", link: "#reviews" },
    { label: "Prantiya Sanskriti Mahotsav 5 & 6 Sept Notice", link: "#notices" },
    { label: "Contact Us & Quick Typeform Enquiry", link: "#contact" }
  ];

  const filteredSearchResults = searchVal
    ? searchItems.filter(item => item.label.toLowerCase().includes(searchVal.toLowerCase()))
    : searchItems;

  return (
    <div className="min-h-screen font-sans antialiased text-slate-800 bg-slate-50 transition-colors duration-300">
      
      {/* Premium Loading Animation */}
      <PremiumLoader />

      {/* Floating Glass Navigation Bar */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      />

      <main className="relative">
        {/* Full-screen Premium Hero Section */}
        <Hero />

        {/* Admission Glowing Infinite Marquee */}
        <Marquee />

        {/* Premium Cute Gallery Carousel */}
        <Gallery />

        {/* About Section - Split Layout & Timeline */}
        <About />

        {/* Principal Desk Section with 1:1 animated frame */}
        <Principal />

        {/* Our Glory - Special School Topper Card & Class X CBSE Results Auto-Scroll Carousel */}
        <Glory />

        {/* Beyond Classroom - Co-curricular Clubs Grid */}
        <BeyondClassroom />

        {/* Education System Map */}
        <EducationSystem />

        {/* Interactive Notice Board with Sanskrit Mahotsav */}
        <NoticeBoard />

        {/* Searchable Teacher Faculty Directory with subpage support */}
        <Teachers />

        {/* CBSE Affiliation Official Accreditation */}
        <CBSEAffiliation />

        {/* Testimonials and Write a Review Center */}
        <Reviews />

        {/* Contact form & Google maps section with Typeform flow */}
        <Contact />
      </main>

      {/* Wave Separator Footer */}
      <Footer />

      {/* Floating Left Contact Us & Quick Enquiry Button */}
      <FloatingContact />

      {/* MODAL 1: Live Search Dialog */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xl flex items-center justify-center p-4"
            id="search-modal-overlay"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                id="search-modal-close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-blue-600" />
                <h3 className="font-display font-bold text-base text-slate-900">
                  Search SVM Maharajganj Portal
                </h3>
              </div>

              <input 
                type="text"
                autoFocus
                placeholder="Type query: toppers, faculty, reviews, notices..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                id="search-modal-input"
              />

              <div className="flex flex-col gap-2 max-h-60 overflow-y-auto no-scrollbar">
                {filteredSearchResults.length > 0 ? (
                  filteredSearchResults.map((res, i) => (
                    <a
                      key={i}
                      href={res.link}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-3 bg-slate-50 hover:bg-blue-50 rounded-xl text-xs text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">{res.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-blue-600" />
                    </a>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 text-center py-4">No direct matching sections found.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Live Notifications Modal */}
      <AnimatePresence>
        {isNotificationsOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xl flex items-center justify-center p-4"
            id="notifications-modal-overlay"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsNotificationsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                id="notifications-modal-close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <Bell className="h-5 w-5 text-orange-500" />
                <h3 className="font-display font-bold text-base text-slate-900">
                  Live School Notices
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between text-[10px] text-orange-600 font-bold uppercase tracking-wider mb-1.5">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Grand Cultural Event
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-orange-200/80 text-orange-800">5 & 6 SEPT</span>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-slate-900">
                    🎉 Prantiya Sanskriti Mahotsav 2026
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Honored Chief Guests: <strong>Shri Mithilesh Tiwari</strong> (Education Minister of Bihar), <strong>Shri Janardan Singh Sigriwal</strong> (MP Maharajganj), and <strong>Smt. Anita Sinha</strong> (SDM Maharajganj) alongside Lok Shiksha Samiti members.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
