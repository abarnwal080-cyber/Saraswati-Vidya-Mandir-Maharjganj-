import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Heart,
  Smile,
  Star
} from 'lucide-react';

interface StoryCarouselProps {
  onOpenFullGallery?: () => void;
}

// 4 Original Campus Images + Images #24, #25, #26 added at the end from Gallery archive
const storyCarouselImages = [
  {
    id: 1,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlhddPW61gbkX1JtgatSpeZ01Z9n1cnZ89j3dB0fKhjnJG7m_LtuI30SEfkWKi1Bw4pimLime4NGU_gMbQRn2OjTCING1-EJDPa_bK1oKfpHIsJ-zf5ZSek50LYMhDH6OUcI3RlVCVHlrl3=s1360-w1360-h1020-rw'
  },
  {
    id: 2,
    url: 'https://www.21kschool.com/in/wp-content/uploads/sites/4/2024/08/What-is-a-Smart-Classroom-The-Complete-Overview.png'
  },
  {
    id: 3,
    url: 'https://5.imimg.com/data5/SELLER/Default/2025/3/497435984/QI/OC/EQ/199130833/computer-laboratory-service-500x500.jpg'
  },
  {
    id: 4,
    url: 'https://i.ibb.co/TMTNxb5c/IMG-20260522-181830.jpg'
  },
  {
    id: 24,
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/691746720_3551808134970566_6533669777801481033_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x905&ctp=s1600x905&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ArYI_V51FTMQ7kNvwFJubyL&_nc_oc=AdoyAgckYl_4GQ88PP-BsjED6vpX3aiGKaQb9Y4mfusUzy1b5i-XyiIqRhG6qYowQXzILctsiOBSUJbQHF7UFalj&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=YxOT4NE47SU0eU-avwup2Q&_nc_ss=7b2a8&oh=00_AQO0OQ8CNL-VEuCWYcQW-VMOLOikUHhSVkpqH18Je3ij9g&oe=6AC6DAFF'
  },
  {
    id: 25,
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/672815230_3525279174290129_283466149345897575_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s590x590&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nclXpow3RKwQ7kNvwGeuSv0&_nc_oc=AdoTfww-rR8cFqkD9h5kOLRiQckvCIzuSER57K3PJ2lY7g-FIKzYzuk6LAgtq_Kjxr2OU9g2owwCBdsaSVTCs718&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=iNKGnnB0P_AfPQewnPCz0g&_nc_ss=7b2a8&oh=00_AQMoy4VbexVOw0vu4wZA2bHuraI7aBdeBKnC7AalyaBVUg&oe=6AC6C563'
  },
  {
    id: 26,
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/670271173_3525279084290138_6279665646423323498_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s590x590&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6vv0TG3wktQQ7kNvwEYVB8h&_nc_oc=Adp5zjZqH77YNfegEO6VWy7cLUxVPCo-PkjFO67UCmRLgn0vC388QmlQwsiNUS_CaZLZqwYsVtskf6O-Z088rclR&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=iNKGnnB0P_AfPQewnPCz0g&_nc_ss=7b2a8&oh=00_AQM9woykajcjYWkz9nrzsu8mbpDjcRwaL09J8iLZDGTHhA&oe=6AC6F48F'
  }
];

export default function StoryCarousel({ onOpenFullGallery }: StoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [likedImages, setLikedImages] = useState<Record<number, boolean>>({});

  // 3D Tilt Hover States
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 });
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  // Auto-slide every 2.5 seconds
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % storyCarouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % storyCarouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + storyCarouselImages.length) % storyCarouselImages.length);
  };

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTiltAngle({ x: rotateX, y: rotateY });
    setHoveredCardId(id);
  };

  const handleCardMouseLeave = () => {
    setTiltAngle({ x: 0, y: 0 });
    setHoveredCardId(null);
  };

  const activeImage = storyCarouselImages[currentIndex];

  return (
    <section 
      id="story-carousel" 
      className="relative py-16 md:py-20 px-4 md:px-10 bg-gradient-to-b from-white via-sky-50/20 to-amber-50/20 overflow-hidden"
    >
      {/* Soft Pastel Background Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-tr from-pink-200/30 to-orange-200/20 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/20 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Floating Emojis / Badges */}
      <motion.div 
        animate={{ y: [-4, 4, -4], rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[10%] hidden md:flex items-center gap-1.5 px-3 py-1 bg-yellow-100/90 border border-yellow-300 rounded-full shadow-xs text-yellow-800 text-xs font-bold pointer-events-none"
      >
        <Smile className="h-3.5 w-3.5 text-yellow-600" />
        <span>Joyful Schooling</span>
      </motion.div>

      <motion.div 
        animate={{ y: [4, -4, 4], rotate: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-[10%] hidden md:flex items-center gap-1.5 px-3 py-1 bg-pink-100/90 border border-pink-300 rounded-full shadow-xs text-pink-800 text-xs font-bold pointer-events-none"
      >
        <Star className="h-3.5 w-3.5 text-pink-500 fill-pink-500" />
        <span>Bright Futures</span>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            LITTLE SMILES & BIG DREAMS
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            Every Moment Tells a <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">Story</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-slate-600 text-xs md:text-sm mt-2.5 font-medium leading-relaxed">
            Glimpses of daily life, vibrant celebrations, smart learning, and joyful activities at Saraswati Vidya Mandir Maharajganj.
          </p>
        </div>

        {/* Carousel Showcase - Clean Image Only without Text Overlays */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card with 3D Tilt */}
          <div 
            className="relative aspect-[16/9] md:aspect-[21/10] w-full rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group cursor-pointer"
            onMouseMove={(e) => handleCardMouseMove(e, activeImage.id)}
            onMouseLeave={handleCardMouseLeave}
            onClick={() => setLightboxImage(activeImage.url)}
            style={{
              transform: hoveredCardId === activeImage.id
                ? `perspective(1000px) rotateX(${tiltAngle.x}deg) rotateY(${tiltAngle.y}deg) scale3d(1.015, 1.015, 1.015)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
              transition: 'transform 0.15s ease-out'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImage.id}
                src={activeImage.url}
                alt="Story Carousel Image"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Top Right Subtle Interactive Icons Only */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={(e) => toggleLike(activeImage.id, e)}
                className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
                  likedImages[activeImage.id]
                    ? 'bg-rose-500 text-white'
                    : 'bg-black/35 text-white hover:bg-black/55'
                }`}
                title="Appreciate"
              >
                <Heart className={`h-4 w-4 ${likedImages[activeImage.id] ? 'fill-current' : ''}`} />
              </button>

              <div className="p-2 rounded-full bg-black/35 text-white backdrop-blur-md hover:bg-black/55 shadow-md">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>

            {/* Left / Right Nav Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-md transition-all hover:scale-110 cursor-pointer z-10"
              aria-label="Previous story image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-md transition-all hover:scale-110 cursor-pointer z-10"
              aria-label="Next story image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Clean Dots Indicator & Autoplay Toggle */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-1.5">
              {storyCarouselImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-7 bg-amber-500' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                {isAutoplay ? 'Pause' : 'Play'}
              </button>
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-amber-400 transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
              <img 
                src={lightboxImage} 
                alt="Enlarged view"
                className="max-h-[82vh] w-auto object-contain rounded-2xl border border-white/20 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
