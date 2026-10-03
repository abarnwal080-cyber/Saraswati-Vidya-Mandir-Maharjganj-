import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Images, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Heart, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Camera,
  Home
} from 'lucide-react';
import { schoolGalleryPhotos, SchoolPhotoItem } from '../data';

interface GalleryProps {
  isSubpage?: boolean;
  onOpenSubpage?: () => void;
  onBackToHome?: () => void;
}

export default function Gallery({ 
  isSubpage = false, 
  onOpenSubpage, 
  onBackToHome 
}: GalleryProps) {
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<number, number>>({});
  const [userLikes, setUserLikes] = useState<Record<number, boolean>>({});

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') {
        handlePrevLightbox();
      } else if (e.key === 'ArrowRight') {
        handleNextLightbox();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % schoolGalleryPhotos.length);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + schoolGalleryPhotos.length) % schoolGalleryPhotos.length);
  };

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = userLikes[id];
    setUserLikes((prev) => ({ ...prev, [id]: !isLiked }));
    setLikedPhotos((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (isLiked ? -1 : 1)
    }));
  };

  const activeLightboxPhoto: SchoolPhotoItem | null = 
    lightboxIndex !== null ? schoolGalleryPhotos[lightboxIndex] : null;

  /* =========================================================================
      1. HOMEPAGE VIEW: JUST ONE CLEAN TAB UNDER OUR GLORY
  ========================================================================= */
  if (!isSubpage) {
    return (
      <section 
        id="gallery" 
        className="relative py-16 px-4 md:px-10 bg-slate-50 overflow-hidden scroll-mt-10"
      >
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-100/30 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg relative overflow-hidden flex flex-col items-center text-center">
            {/* Decorative background glow */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-br from-blue-400/15 via-teal-400/10 to-transparent rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-gradient-to-tr from-amber-400/15 via-orange-400/10 to-transparent rounded-full filter blur-2xl pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
              <Camera className="h-3.5 w-3.5 text-blue-600" />
              <span>Photo Gallery</span>
            </div>

            {/* Heading */}
            <h3 className="font-display font-black text-2xl md:text-4xl tracking-tight text-slate-900 mb-3">
              School <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">Photo Gallery</span>
            </h3>

            <p className="text-slate-600 text-xs md:text-sm max-w-lg mb-8 font-medium leading-relaxed">
              Explore {schoolGalleryPhotos.length} numbered archival campus moments and celebrations of Saraswati Vidya Mandir Maharajganj.
            </p>

            {/* Thumbnail Preview Stack */}
            <div className="flex items-center justify-center -space-x-3 mb-8">
              {schoolGalleryPhotos.slice(0, 5).map((photo) => (
                <div 
                  key={photo.id}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md relative group shrink-0"
                >
                  <img 
                    src={photo.url} 
                    alt={`Photo #${photo.id}`} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 border-2 border-white shadow-md flex items-center justify-center text-white font-mono font-bold text-xs shrink-0">
                +27
              </div>
            </div>

            {/* THE "OPEN GALLERY" ACTION BUTTON */}
            <button
              onClick={onOpenSubpage}
              id="open-gallery-btn"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-display font-extrabold text-sm md:text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3 cursor-pointer group"
            >
              <Images className="h-5 w-5 text-white group-hover:rotate-6 transition-transform" />
              <span>Open Gallery</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-mono">
                {schoolGalleryPhotos.length} Photos
              </span>
              <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================================
      2. DEDICATED SUBPAGE VIEW: FULL STANDALONE PAGE (HORIZONTALLY 2-2 IMAGES)
  ========================================================================= */
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Subpage Sticky Header with Breadcrumb & Back to Home */}
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
              <span className="text-blue-600 font-bold">Photo Gallery Subpage</span>
            </div>

            <h1 className="font-display font-black text-2xl md:text-4xl text-slate-900 tracking-tight flex items-center gap-3">
              <span>School Photo Gallery</span>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono font-bold border border-blue-200">
                {schoolGalleryPhotos.length} Photos
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Complete photographic records • Click any image to view in high definition
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs md:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              id="subpage-back-home-btn"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* HORIZONTALLY 2-2 IMAGES (grid-cols-2) WITH JUST IMAGE & NUMBERING */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {schoolGalleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.3) }}
              whileHover={{ y: -3 }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 border-2 border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] md:aspect-[16/11] w-full overflow-hidden relative">
                <img 
                  src={photo.url} 
                  alt={`Photo #${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Numbering Badge Only */}
                <div className="absolute top-2.5 left-2.5 md:top-3.5 md:left-3.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-amber-300 border border-white/20 text-xs md:text-sm font-mono font-black shadow-lg flex items-center gap-1.5 z-10">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>#{photo.id < 10 ? `0${photo.id}` : photo.id}</span>
                </div>

                {/* Hover icon */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="p-2.5 rounded-full bg-white/90 text-slate-900 shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBackToHome}
            className="px-8 py-3.5 rounded-full bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-bold text-sm shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home Page</span>
          </button>
        </div>

      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR FULL RESOLUTION VIEWER
      ========================================================================= */}
      <AnimatePresence>
        {activeLightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-3 md:p-8"
            onClick={() => setLightboxIndex(null)}
            id="gallery-lightbox-modal"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header Bar - Clean Numbering Only */}
              <div className="p-4 px-6 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white z-10">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono font-bold text-sm">
                    #{activeLightboxPhoto.id < 10 ? `0${activeLightboxPhoto.id}` : activeLightboxPhoto.id}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Photo {lightboxIndex! + 1} of {schoolGalleryPhotos.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleLike(activeLightboxPhoto.id, e)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      userLikes[activeLightboxPhoto.id]
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <Heart className={`h-3.5 w-3.5 ${userLikes[activeLightboxPhoto.id] ? 'fill-current' : ''}`} />
                    <span>{likedPhotos[activeLightboxPhoto.id] || 0}</span>
                  </button>

                  <a
                    href={activeLightboxPhoto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Open image"
                  >
                    <Download className="h-4 w-4" />
                  </a>

                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Lightbox Main Image Display */}
              <div className="relative flex-1 bg-black/95 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[72vh] p-2">
                <img 
                  src={activeLightboxPhoto.url} 
                  alt={`Photo #${activeLightboxPhoto.id}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />

                {/* Previous / Next Floating Arrows */}
                <button
                  onClick={handlePrevLightbox}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-lg"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={handleNextLightbox}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-lg"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Lightbox Footer Thumbnail Scroller */}
              <div className="p-3 bg-slate-950 flex items-center gap-2 overflow-x-auto border-t border-slate-800">
                {schoolGalleryPhotos.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative shrink-0 w-12 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      lightboxIndex === idx
                        ? 'border-amber-400 scale-105 opacity-100 shadow-sm shadow-amber-400/30'
                        : 'border-transparent opacity-40 hover:opacity-80'
                    }`}
                  >
                    <img 
                      src={p.url} 
                      alt={`Photo #${p.id}`} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[8px] font-mono text-center text-white py-0.2">
                      #{p.id < 10 ? `0${p.id}` : p.id}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
