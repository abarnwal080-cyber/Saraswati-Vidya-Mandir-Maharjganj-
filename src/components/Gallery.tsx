import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Heart,
  Pencil,
  Smile
} from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://i.ibb.co/twyfGhX5/Chat-GPT-Image-May-22-2026-10-12-04-AM.png',
    title: 'School Campus',
    category: 'Campus'
  },
  {
    id: 2,
    url: 'https://www.21kschool.com/in/wp-content/uploads/sites/4/2024/08/What-is-a-Smart-Classroom-The-Complete-Overview.png',
    title: 'Smart Classroom',
    category: 'Smart Learning'
  },
  {
    id: 3,
    url: 'https://5.imimg.com/data5/SELLER/Default/2025/3/497435984/QI/OC/EQ/199130833/computer-laboratory-service-500x500.jpg',
    title: 'Computer Laboratory',
    category: 'IT Lab'
  },
  {
    id: 4,
    url: 'https://i.ibb.co/TMTNxb5c/IMG-20260522-181830.jpg',
    title: 'Students & Activities',
    category: 'Activities'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [likedImages, setLikedImages] = useState<Record<number, boolean>>({});

  // 3D Tilt Hover States
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 });
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Auto-slide every 1.5 seconds (1500ms)
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate 3D tilt coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltAngle({ x: rotateX, y: rotateY });
    setCursorPos({ x, y });
    setHoveredCardId(id);
  };

  const handleCardMouseLeave = () => {
    setTiltAngle({ x: 0, y: 0 });
    setHoveredCardId(null);
  };

  return (
    <section 
      id="gallery" 
      className="relative py-20 px-4 md:px-10 bg-gradient-to-b from-white via-sky-50/30 to-amber-50/20 overflow-hidden"
    >
      {/* Soft Pastel Background Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-tr from-pink-200/40 to-orange-200/30 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-blue-200/40 to-teal-200/30 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-tr from-yellow-200/30 to-rose-200/20 rounded-full filter blur-[90px] pointer-events-none" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-16 left-[8%] animate-bounce duration-[4s] opacity-70 pointer-events-none">
        <Sparkles className="h-7 w-7 text-amber-400 filter drop-shadow-sm" />
      </div>
      <div className="absolute top-36 right-[8%] animate-[spin_10s_infinite] opacity-60 pointer-events-none">
        <GraduationCap className="h-8 w-8 text-blue-500 filter drop-shadow-sm" />
      </div>
      <div className="absolute bottom-20 left-[10%] animate-[pulse_3s_infinite] opacity-70 pointer-events-none">
        <BookOpen className="h-7 w-7 text-teal-500 filter drop-shadow-sm" />
      </div>
      <div className="absolute bottom-32 right-[10%] animate-bounce duration-[5s] opacity-60 pointer-events-none">
        <Pencil className="h-6 w-6 text-orange-400 filter drop-shadow-sm" />
      </div>
      <div className="absolute top-[60%] right-[4%] animate-[pulse_4s_infinite] opacity-60 pointer-events-none">
        <Star className="h-5 w-5 text-pink-400 fill-pink-300/40" />
      </div>
      <div className="absolute top-[40%] left-[4%] animate-bounce duration-[3s] opacity-50 pointer-events-none">
        <Smile className="h-6 w-6 text-emerald-500" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
          >
            <span role="img" aria-label="camera" className="text-sm">📸</span>
            School Gallery
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-slate-900">
            Every Moment <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-blue-600 bg-clip-text text-transparent">Tells a Story</span>
          </h2>
        </div>

        {/* Clean Carousel Container */}
        <div 
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
          id="premium-school-carousel"
        >
          {/* Main Showcase Slide Frame */}
          <div className="relative p-3 sm:p-5 bg-white border border-slate-200/80 rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 overflow-hidden">
            
            {/* Animated Border Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500" />

            {/* Inner Content Carousel Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-100 shadow-sm group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => {
                    setLightboxImage(galleryImages[currentIndex].url);
                    setLightboxTitle(galleryImages[currentIndex].title);
                  }}
                  onMouseMove={(e) => handleCardMouseMove(e, galleryImages[currentIndex].id)}
                  onMouseLeave={handleCardMouseLeave}
                  style={{
                    perspective: 1000,
                    transform: hoveredCardId === galleryImages[currentIndex].id
                      ? `rotateX(${tiltAngle.x}deg) rotateY(${tiltAngle.y}deg) scale(1.01)`
                      : 'rotateX(0deg) rotateY(0deg) scale(1)',
                    transition: hoveredCardId === galleryImages[currentIndex].id ? 'none' : 'all 0.4s ease-out'
                  }}
                >
                  {/* Image */}
                  <img 
                    src={galleryImages[currentIndex].url} 
                    alt={galleryImages[currentIndex].title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gentle shimmer */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />

                  {/* Top Right Quick Actions */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => toggleLike(galleryImages[currentIndex].id, e)}
                      className="p-2 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/60 text-slate-700 shadow-sm transition-colors"
                      id="like-gallery-btn"
                    >
                      <Heart 
                        className={`h-4 w-4 transition-colors ${
                          likedImages[galleryImages[currentIndex].id] 
                            ? 'text-rose-500 fill-rose-500' 
                            : 'text-slate-700'
                        }`} 
                      />
                    </motion.button>

                    <button
                      className="p-2 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/60 text-slate-700 shadow-sm transition-colors"
                      aria-label="Zoom Image"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Category Badge at top-left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white bg-slate-900/70 backdrop-blur-md shadow-sm">
                      {galleryImages[currentIndex].category}
                    </span>
                  </div>

                  {/* Gradient bottom overlay for caption readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Inside image title for clean look */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="text-white font-display font-extrabold text-lg md:text-xl drop-shadow-md">
                      {galleryImages[currentIndex].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Left and Right Controls */}
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-md border border-white pointer-events-auto transition-transform hover:scale-105"
                  aria-label="Previous Slide"
                  id="gallery-slider-prev"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-md border border-white pointer-events-auto transition-transform hover:scale-105"
                  aria-label="Next Slide"
                  id="gallery-slider-next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </div>

            {/* Bottom Minimal Dots Navigation */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-6 bg-orange-500' 
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            id="gallery-lightbox"
          >
            {/* Close button */}
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-5 right-5 p-2.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all"
              aria-label="Close Lightbox"
              id="lightbox-close-btn"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous */}
            <button 
              onClick={() => {
                const prevIdx = (galleryImages.findIndex(img => img.url === lightboxImage) - 1 + galleryImages.length) % galleryImages.length;
                setLightboxImage(galleryImages[prevIdx].url);
                setLightboxTitle(galleryImages[prevIdx].title);
              }}
              className="absolute left-4 md:left-8 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image display */}
            <div className="max-w-4xl w-full flex flex-col items-center justify-center">
              <motion.img 
                key={lightboxImage}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={lightboxImage} 
                alt={lightboxTitle} 
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-display font-bold text-xl">
                  {lightboxTitle}
                </h3>
              </div>
            </div>

            {/* Next */}
            <button 
              onClick={() => {
                const nextIdx = (galleryImages.findIndex(img => img.url === lightboxImage) + 1) % galleryImages.length;
                setLightboxImage(galleryImages[nextIdx].url);
                setLightboxTitle(galleryImages[nextIdx].title);
              }}
              className="absolute right-4 md:right-8 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
