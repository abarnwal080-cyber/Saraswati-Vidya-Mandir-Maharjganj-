export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface HeroSlide {
  url: string;
  title: string;
  subtitle: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface SchoolStat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'campus' | 'academics' | 'sports' | 'cultural';
}

export interface TopperStudent {
  name: string;
  image: string;
  percentage: string;
  role: string;
  rank: number;
  guardian?: string;
}

export interface ReviewItem {
  name: string;
  role: string;
  review: string;
  rating: number;
  avatarUrl?: string;
}

export interface ClubItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface EducationTimeline {
  phase: string;
  title: string;
  description: string;
  points: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  description?: string;
  isImportant?: boolean;
  link?: string;
  isToday?: boolean;
}

export interface TeacherItem {
  name: string;
  qualification?: string;
  designation: string;
  department: string;
  experience?: string;
  phone: string;
  email?: string;
}

export interface CBSEData {
  parameter: string;
  value: string;
}
