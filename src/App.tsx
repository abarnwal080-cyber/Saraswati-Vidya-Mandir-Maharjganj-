import { useState, useEffect } from 'react';
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
import StoryCarousel from './components/StoryCarousel';
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

export type AppView = 'home' | 'gallery' | 'teachers';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  // Search input state
  const [searchVal, setSearchVal] = useState('');

  // Handle URL hash changes (e.g. #/gallery, #/teachers, or browser back button)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/gallery' || hash === '#gallery-page') {
        setCurrentView('gallery');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } else if (hash === '#/teachers' || hash === '#teachers-page') {
        setCurrentView('teachers');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Force Light Mode completely & scroll to top on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const navigateTo = (view: AppView, sectionId?: string) => {
    setCurrentView(view);
    if (view === 'gallery') {
      window.location.hash = '#/gallery';
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else if (view === 'teachers') {
      window.location.hash = '#/teachers';
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.location.hash = sectionId ? `#${sectionId}` : '#home';
      if (sectionId) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  };

  // Search result mapping helper
  const searchItems = [
    { label: "Photo Gallery - Complete 32 Archival Photos", view: "gallery" as AppView },
    { label: "Faculty Directory - All Teachers & Staff Members", view: "teachers" as AppView },
    { label: "CBSE Affiliation & Official Accreditation", link: "cbse" },
    { label: "Principal Shri Shambhu Sharan Tiwari Message", link: "principal" },
    { label: "Academic Glory Class 10 Toppers & School Topper", link: "glory" },
    { label: "About Saraswati Vidya Mandir Foundations", link: "about" },
    { label: "Beyond Classroom sports, music, drama clubs", link: "classroom" },
    { label: "Community Reviews & Write a Review", link: "reviews" },
    { label: "Prantiya Sanskriti Mahotsav 5 & 6 Sept Notice", link: "notices" },
    { label: "Contact Us & Quick Typeform Enquiry", link: "contact" }
  ];

  const filteredSearchResults = searchVal
    ? searchItems.filter(item => item.label.toLowerCase().includes(searchVal.toLowerCase()))
    : searchItems;

  return (
    <div className="min-h-screen font-sans antialiased text-slate-800 bg-slate-50 transition-colors duration-300">
      
      {/* Premium Loading Animation */}
      <PremiumLoader />

      {/* Floating Glass Navigation Bar with Subpage Routing */}
      <Navbar 
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      />

      {/* CONDITIONAL SUBPAGE ROUTING: Dedicated subpages or Main Homepage */}
      {currentView === 'gallery' ? (
        <Gallery 
          isSubpage={true}
          onBackToHome={() => navigateTo('home', 'gallery')}
        />
      ) : currentView === 'teachers' ? (
        <Teachers 
          isSubpage={true}
          onBackToHome={() => navigateTo('home', 'teachers')}
        />
      ) : (
        <main className="relative">
          {/* Full-screen Premium Hero Section */}
          <Hero />

          {/* Admission Glowing Infinite Marquee */}
          <Marquee />

          {/* Restored Every Moment Tells a Story Carousel with Images 24, 25, 26 added */}
          <StoryCarousel onOpenFullGallery={() => navigateTo('gallery')} />

          {/* About Section - Split Layout & Timeline */}
          <About />

          {/* Principal Desk Section with 1:1 animated frame */}
          <Principal />

          {/* Our Glory - Special School Topper Card & Class X CBSE Results Auto-Scroll Carousel */}
          <Glory />

          {/* Photo Gallery Tab on Home page (Clicking Open Gallery navigates to dedicated subpage) */}
          <Gallery 
            isSubpage={false}
            onOpenSubpage={() => navigateTo('gallery')}
          />

          {/* Beyond Classroom - Co-curricular Clubs Grid */}
          <BeyondClassroom />

          {/* Education System Map */}
          <EducationSystem />

          {/* Interactive Notice Board with Sanskrit Mahotsav */}
          <NoticeBoard />

          {/* Searchable Teacher Faculty Tab on Home page (Clicking Open Directory navigates to dedicated subpage) */}
          <Teachers 
            isSubpage={false}
            onOpenSubpage={() => navigateTo('teachers')}
          />

          {/* CBSE Affiliation Official Accreditation */}
          <CBSEAffiliation />

          {/* Testimonials and Write a Review Center */}
          <Reviews />

          {/* Contact form & Google maps section with Typeform flow */}
          <Contact />
        </main>
      )}

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
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-4 text-blue-600">
                <Search className="h-5 w-5" />
                <h3 className="font-display font-black text-xl text-slate-900">
                  Instant Portal Search
                </h3>
              </div>

              <div className="relative mb-6">
                <input 
                  type="text" 
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Search faculty, gallery, CBSE, toppers, events..."
                  className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800"
                  autoFocus
                />
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto">
                {filteredSearchResults.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsSearchOpen(false);
                      if (item.view) {
                        navigateTo(item.view);
                      } else if (item.link) {
                        navigateTo('home', item.link);
                      }
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-blue-50 text-slate-700 text-xs font-semibold flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Live Notifications Center */}
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
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full border border-slate-200 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsNotificationsOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Close notifications"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-4 text-amber-600">
                <Bell className="h-5 w-5" />
                <h3 className="font-display font-black text-xl text-slate-900">
                  Official Notifications
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full inline-block mb-1.5">
                  Featured Event
                </span>
                <h4 className="font-display font-bold text-sm text-slate-900">
                  🎉 Prantiya Sanskriti Mahotsav 2026
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Scheduled on <strong>5 & 6 September</strong> with Hon'ble Education Minister Shri Mithilesh Tiwari and MP Shri Janardan Singh Sigriwal.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-200/80 px-2 py-0.5 rounded-full inline-block mb-1.5">
                  Admissions Open
                </span>
                <h4 className="font-display font-bold text-sm text-slate-900">
                  Nursery to Class X Registrations
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Limited seats available. Online enquiry and desk counseling active daily 8:00 AM – 3:00 PM.
                </p>
              </div>

              <button
                onClick={() => setIsNotificationsOpen(false)}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Mark as Read
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
