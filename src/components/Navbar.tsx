import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Bell } from 'lucide-react';
import { navItems } from '../data';

interface NavbarProps {
  currentView: 'home' | 'gallery' | 'teachers';
  onNavigate: (view: 'home' | 'gallery' | 'teachers', sectionId?: string) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
}

export default function Navbar({ 
  currentView,
  onNavigate,
  onOpenSearch, 
  onOpenNotifications 
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentView === 'gallery') {
      setActiveItem('gallery');
    } else if (currentView === 'teachers') {
      setActiveItem('teachers');
    } else {
      setActiveItem('home');
    }
  }, [currentView]);

  const handleNavClick = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);

    if (id === 'gallery') {
      onNavigate('gallery');
    } else if (id === 'teachers') {
      onNavigate('teachers');
    } else {
      setActiveItem(id);
      onNavigate('home', id);
    }
  };

  return (
    <>
      <header 
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 px-4 md:px-8 bg-white/85 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_8px_32px_0_rgba(15,23,42,0.06)]' 
            : 'py-4 px-4 md:px-12 bg-white/50 backdrop-blur-md border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left Logo and School Name */}
          <div className="flex items-center gap-3">
            <button 
              onClick={(e) => handleNavClick('home', e)}
              className="flex items-center gap-2.5 text-left cursor-pointer group"
            >
              <img 
                src="https://msvmbarhangopal.org/new/images/logo.png" 
                alt="Saraswati Vidya Mandir Left Logo" 
                className="h-10 md:h-12 w-auto object-contain rounded-full bg-white/10 p-0.5 group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
                id="school-left-logo"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs md:text-sm tracking-wide text-blue-900 group-hover:text-blue-600 transition-colors">
                  SARASWATI VIDYA MANDIR
                </span>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-medium tracking-wider">
                  MAHARAJGANJ • VIDYA BHARATI
                </span>
              </div>
            </button>
          </div>

          {/* Center Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/70 p-1 rounded-full border border-slate-200/50">
            {navItems.map((item) => {
              const isActive = (currentView === 'gallery' && item.id === 'gallery') ||
                               (currentView === 'teachers' && item.id === 'teachers') ||
                               (currentView === 'home' && activeItem === item.id);
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full -z-10 shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls & Actions */}
          <div className="flex items-center gap-1 md:gap-2.5">
            {/* Search Toggle */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenSearch}
              className="p-1.5 md:p-2 rounded-full hover:bg-slate-100 text-slate-600 cursor-pointer"
              aria-label="Search content"
              id="search-toggle-btn"
            >
              <Search className="h-4 w-4 md:h-5 w-5" />
            </motion.button>

            {/* Notification Bell */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenNotifications}
              className="relative p-1.5 md:p-2 rounded-full hover:bg-slate-100 text-slate-600 cursor-pointer"
              aria-label="Notice alert"
              id="notice-bell-btn"
            >
              <Bell className="h-4 w-4 md:h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </motion.button>

            {/* Quick Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
            >
              Contact Desk
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 lg:hidden cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-2xl p-6 lg:hidden max-h-[85vh] overflow-y-auto"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-200/50 pb-3">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/0/01/Vidyabharti.png" 
                    alt="Vidya Bharati Logo Right" 
                    className="h-8 w-8 object-contain"
                  />
                  <span className="font-display font-bold text-xs tracking-wider text-slate-500">
                    VIDYA BHARATI SANSKAR
                  </span>
                </div>
                <div className="px-2 py-1 bg-green-500/10 text-green-600 text-[10px] font-bold rounded-full flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  CBSE 330263
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className="px-4 py-2.5 text-xs font-semibold rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
