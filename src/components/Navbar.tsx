import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Search, Bell, Sparkles, PhoneCall, GraduationCap } from 'lucide-react';
import { navItems } from '../data';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
}

export default function Navbar({ 
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

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 px-4 md:px-8 bg-white/70 dark:bg-[#050814]/70 backdrop-blur-xl border-b border-slate-200/40 dark:border-white/5 shadow-[0_8px_32px_0_rgba(15,23,42,0.06)]' 
            : 'py-4 px-4 md:px-12 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left Logo and School Name */}
          <div className="flex items-center gap-3">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5"
            >
              <img 
                src="https://msvmbarhangopal.org/new/images/logo.png" 
                alt="Saraswati Vidya Mandir Left Logo" 
                className="h-10 md:h-12 w-auto object-contain rounded-full bg-white/10 p-0.5"
                referrerPolicy="no-referrer"
                id="school-left-logo"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs md:text-sm tracking-wide text-brand-blue dark:text-blue-400">
                  SARASWATI VIDYA MANDIR
                </span>
                <span className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider">
                  MAHARAJGANJ • VIDYA BHARATI
                </span>
              </div>
            </motion.a>
          </div>

          {/* Center Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/20">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white'
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
                </a>
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
              className="p-1.5 md:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300"
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
              className="relative p-1.5 md:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300"
              aria-label="System notifications"
              id="notification-bell-btn"
            >
              <Bell className="h-4 w-4 md:h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white dark:ring-[#050814] animate-ping" />
            </motion.button>

            {/* Right Logo (Vidya Bharati emblem) */}
            <div className="hidden sm:block h-9 w-9 overflow-hidden rounded-full border border-slate-200/50 bg-white p-0.5 shadow-sm">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/0/01/Vidyabharti.png" 
                alt="Vidya Bharati Logo Right" 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
                id="school-right-logo"
              />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 lg:hidden"
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="fixed top-14 left-0 right-0 z-40 bg-white/95 dark:bg-[#050814]/95 backdrop-blur-2xl border-b border-slate-200/60 dark:border-white/5 shadow-2xl p-6 lg:hidden max-h-[85vh] overflow-y-auto"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-200/30 dark:border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/0/01/Vidyabharti.png" 
                    alt="Vidya Bharati Logo Right" 
                    className="h-8 w-8 object-contain"
                  />
                  <span className="font-display font-bold text-xs tracking-wider text-slate-500 dark:text-slate-400">
                    VIDYA BHARATI SANSKAR
                  </span>
                </div>
                <div className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  CBSE 330263
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className="px-4 py-2.5 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-brand-blue"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-3 border-t border-slate-200/30 dark:border-white/5">
                <a
                  href="#payment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  Pay Tuition Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
