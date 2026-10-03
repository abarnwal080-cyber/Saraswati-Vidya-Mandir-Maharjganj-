import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, PlusCircle, CheckCircle2, X, Send, Heart, User, Sparkles } from 'lucide-react';
import { reviewItems as initialReviewItems } from '../data';

interface Review {
  id?: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  date?: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviewItems);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isWriteOpen, setIsWriteOpen] = useState(false);

  // New Review Form State
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('Parent of SVM Student');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch reviews from server on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews);
          }
        }
      } catch (e) {
        console.error("Could not fetch server reviews, using fallback", e);
      }
    };
    fetchReviews();
  }, []);

  // Auto-slide reviews
  useEffect(() => {
    if (reviews.length === 0) return;
    const slider = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(slider);
  }, [reviews.length]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    setIsSubmitting(true);
    const newReview: Review = {
      name: authorName.trim(),
      role: authorRole.trim(),
      review: reviewText.trim(),
      rating,
      date: new Date().toLocaleDateString()
    };

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reviews) {
          setReviews(data.reviews);
        } else {
          setReviews(prev => [newReview, ...prev]);
        }
      } else {
        setReviews(prev => [newReview, ...prev]);
      }
    } catch (err) {
      console.error(err);
      setReviews(prev => [newReview, ...prev]);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setActiveIdx(0);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsWriteOpen(false);
        setAuthorName('');
        setReviewText('');
        setRating(5);
      }, 2500);
    }
  };

  const activeReview = reviews[activeIdx] || reviews[0];

  return (
    <section 
      id="reviews" 
      className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Testimonials Glass Slider Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-5 self-start shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Trusted Community Testimonials
            </motion.div>

            <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
              Real Experiences from Our <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Grateful Families</span>
            </h2>

            <p className="text-slate-600 text-xs md:text-sm font-medium mb-8 max-w-lg">
              Hear directly from parents, students, and alumni about the intellectual, moral, and cultural growth at Saraswati Vidya Mandir Maharajganj.
            </p>

            {/* Testimonials Glass Slider Card */}
            {activeReview && (
              <div className="relative min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="p-7 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between"
                    id={`review-slide-${activeIdx}`}
                  >
                    {/* Rating Stars */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4.5 w-4.5 ${i < activeReview.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} 
                          />
                        ))}
                      </div>

                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase bg-slate-100 px-2.5 py-1 rounded-full">
                        Verified Review
                      </span>
                    </div>

                    {/* Simple Bold Clean Font for Review Text */}
                    <p className="font-sans font-bold text-slate-800 text-sm md:text-base leading-relaxed mb-6">
                      "{activeReview.review}"
                    </p>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-display font-extrabold text-sm shadow-sm">
                          {activeReview.name[0] || 'U'}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-slate-900 leading-tight">
                            {activeReview.name}
                          </h4>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            {activeReview.role}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-slate-400 font-medium">
                        {activeReview.date || 'SVM Community'}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {/* Slider Navigation & Write Review Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIdx === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                    id={`review-dot-${idx}`}
                  />
                ))}
              </div>

              {/* Write a Review Button */}
              <button
                onClick={() => setIsWriteOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                id="write-review-open-btn"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>

          {/* Right Column: Campus Showcase Banner */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
              <img 
                src="https://5.imimg.com/data5/SELLER/Default/2025/3/497435984/QI/OC/EQ/199130833/computer-laboratory-service-500x500.jpg"
                alt="SVM Computer Lab & Classrooms"
                className="w-full h-80 md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                  SVM Maharajganj Legacy
                </span>
                <h3 className="font-display font-black text-2xl text-white mt-1">
                  Holistic Education & Moral Values
                </h3>
                <p className="text-xs text-slate-200 mt-2 max-w-md leading-relaxed">
                  Join hundreds of parents who trust Saraswati Vidya Mandir for high academic rigor and traditional Bharatiya culture.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isWriteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4"
            id="write-review-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="max-w-lg w-full bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsWriteOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                id="write-review-close-btn"
                aria-label="Close Dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Parent & Community Voice</span>
              </div>

              <h3 className="font-display font-black text-2xl text-slate-900 mb-1">
                Share Your Experience
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Your review will be shared on our school web portal and community board.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-black text-lg text-slate-900">
                    Review Published Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-xs">
                    Thank you, {authorName}. Your review is now visible on our official portal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="flex flex-col gap-4">
                  {/* Star Rating Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Rating *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star 
                            className={`h-7 w-7 ${
                              (hoverRating || rating) >= star 
                                ? 'text-amber-400 fill-amber-400' 
                                : 'text-slate-200'
                            }`} 
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-600 self-center ml-2">
                        {rating} out of 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra Sharma"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      id="review-form-name"
                    />
                  </div>

                  {/* Role / Relation */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Relation / Role *
                    </label>
                    <select
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      id="review-form-role"
                    >
                      <option value="Parent of SVM Student">Parent of SVM Student</option>
                      <option value="Parent of Class X Student">Parent of Class X Student</option>
                      <option value="SVM Alumnus / Alumna">SVM Alumnus / Alumna</option>
                      <option value="Current Student">Current Student</option>
                      <option value="Teacher / Academician">Teacher / Academician</option>
                      <option value="Community Member / Well Wisher">Community Member / Well Wisher</option>
                    </select>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Review & Feedback *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your thoughts on school academics, teachers, facilities, or culture..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-medium"
                      id="review-form-text"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !authorName.trim() || !reviewText.trim()}
                    className="w-full mt-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs md:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    id="review-form-submit-btn"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? 'Publishing...' : 'Publish Review'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
