import { 
  NavItem, 
  HeroSlide, 
  FeatureCard, 
  TimelineEvent, 
  SchoolStat, 
  GalleryItem, 
  TopperStudent, 
  ReviewItem, 
  ClubItem, 
  EducationTimeline, 
  FAQItem, 
  NoticeItem, 
  TeacherItem, 
  CBSEData 
} from './types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'principal', label: 'Principal\'s Message', href: '#principal' },
  { id: 'glory', label: 'Our Glory', href: '#glory' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'classroom', label: 'Beyond Classroom', href: '#classroom' },
  { id: 'notices', label: 'Notice Board', href: '#notices' },
  { id: 'teachers', label: 'Our Teachers', href: '#teachers' },
  { id: 'cbse', label: 'CBSE Affiliation', href: '#cbse' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];

export const heroSlides: HeroSlide[] = [
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlhddPW61gbkX1JtgatSpeZ01Z9n1cnZ89j3dB0fKhjnJG7m_LtuI30SEfkWKi1Bw4pimLime4NGU_gMbQRn2OjTCING1-EJDPa_bK1oKfpHIsJ-zf5ZSek50LYMhDH6OUcI3RlVCVHlrl3=s1360-w1360-h1020-rw',
    title: 'Nurturing Leaders of Tomorrow',
    subtitle: 'Blended education with traditional culture and futuristic smart classes.'
  },
  {
    url: 'https://www.21kschool.com/in/wp-content/uploads/sites/4/2024/08/What-is-a-Smart-Classroom-The-Complete-Overview.png',
    title: 'Character Build & Discipline',
    subtitle: 'Instilling the values of service, humility, and moral integrity.'
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2025/3/497435984/QI/OC/EQ/199130833/computer-laboratory-service-500x500.jpg',
    title: 'State-of-the-Art Labs',
    subtitle: 'Equipping our digital citizens with hands-on computational skills.'
  },
  {
    url: 'https://i.ibb.co/TMTNxb5c/IMG-20260522-181830.jpg',
    title: 'Holistic Campus Life',
    subtitle: 'Engaging in sports, arts, debates, and tech clubs for complete growth.'
  }
];

export const featureCards: FeatureCard[] = [
  {
    title: 'Expert Teachers',
    description: 'Experienced faculty fostering moral ethics and conceptual clarity.',
    icon: 'GraduationCap'
  },
  {
    title: 'Quality Education',
    description: 'CBSE syllabus matched with Vedic mathematics and cultural values.',
    icon: 'BookOpen'
  },
  {
    title: 'Smart Classrooms',
    description: 'Interactive digital boards, multimedia tools, and smart audio-visual aids.',
    icon: 'Tv'
  },
  {
    title: 'Computer Lab',
    description: 'Modern high-speed terminals with hands-on coding instruction.',
    icon: 'Cpu'
  },
  {
    title: 'Science Lab',
    description: 'Fully equipped Physics, Chemistry, and Biology practical labs.',
    icon: 'FlaskConical'
  },
  {
    title: '24/7 CCTV Security',
    description: 'Continuous campus surveillance ensuring complete student safety.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Strict Discipline',
    description: 'Structured daily routine building self-regulation and moral values.',
    icon: 'Users'
  },
  {
    title: 'Regular PTM',
    description: 'Continuous parent-teacher dialogue to track each child\'s progress.',
    icon: 'CalendarDays'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '1989',
    title: 'Humble Foundations',
    description: 'Started as a small traditional school with the vision of Vidya Bharati.'
  },
  {
    year: '2004',
    title: 'CBSE Affiliation Secured',
    description: 'Expanded campus structure and obtained high-standard CBSE affiliation.'
  },
  {
    year: '2015',
    title: 'Digital Leap',
    description: 'Inaugurated smart classrooms and the state-of-the-art computer labs.'
  },
  {
    year: '2026',
    title: 'Futuristic Vision Redefined',
    description: 'Redesigned education model focusing on AI awareness and comprehensive interactive learning.'
  }
];

export const schoolStats: SchoolStat[] = [
  { label: 'Secure Transport', value: 20, suffix: '+ Vehicles', icon: 'Bus' },
  { label: 'Brilliant Students', value: 1250, suffix: '+ Enrolled', icon: 'Smile' },
  { label: 'Expert Educators', value: 45, suffix: '+ Members', icon: 'UserCheck' },
  { label: 'Smart Tech Learning', value: 100, suffix: '% Digitized', icon: 'Laptop' }
];

export interface SchoolPhotoItem {
  id: number;
  numberLabel: string;
  title: string;
  category: 'Campus & Assembly' | 'Cultural & Events' | 'Sports & Yoga' | 'Academic & Labs';
  url: string;
}

export const schoolGalleryPhotos: SchoolPhotoItem[] = [
  {
    id: 1,
    numberLabel: 'Photo #01',
    title: 'Photo #01: Cultural Gathering & School Celebrations',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/493216648_3150456835105700_1994203057197351734_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x960&ctp=s1280x960&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=eapjoxP5qvQQ7kNvwHkB8YM&_nc_oc=AdoYqA3EXzw-phFVZx1iglGXg6eKiyfqcak2idR1YywZHuK7xWu4910zKXkhuu1D6Y0q4b-4I-Hfvw48-za8Xhq5&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=EzvF2C3orleEFrtDW1sENg&_nc_ss=7b2a8&oh=00_AQOEtvzxK0SDB_JbHVBHNpMi1_BYyaBnWeRJWZw7Zpgjxg&oe=6AC6C82A'
  },
  {
    id: 2,
    numberLabel: 'Photo #02',
    title: 'Photo #02: School Function & Guest Felicitation',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/488022725_3973746172879010_1335260247213376915_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=cnGosXfK2fMQ7kNvwFNObnJ&_nc_oc=AdpvZTESxWd5OBznQ2ZOE189wnBzJSrC7MD4Lt3CqLNObyxR3OQcQYS8X7SseeKfF9gDcf9tieM9I_CR-uxDmwAE&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=ld_89cpeICnjCRXbYgAPRw&_nc_ss=7b2a8&oh=00_AQMWmwYvYOz-NntYTvpIWVWn7RGO8Rhlv8gaxB1uMS1JEw&oe=6AC6D0CF'
  },
  {
    id: 3,
    numberLabel: 'Photo #03',
    title: 'Photo #03: Campus Activities & Student Life',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/488243793_3973781216208839_8248379257660495900_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x960&ctp=p118x118&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=C3soj1ytNCsQ7kNvwGZWSRx&_nc_oc=Adql4jRoxUedOh9QY6caJXdezZbUdtg9fjHcUzbsD9xvyZBkaGgk1FKImYyY4zQMecG73N3cvPEZaEyT4IcSWken&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=t5pYMtVUiT3z3YYJd8NGRw&_nc_ss=7b2a8&oh=00_AQMrh13Jz9i9o_OCtnc4-tO4VjcQlf9ZY3diB4G94fMfEg&oe=6AC6F537'
  },
  {
    id: 4,
    numberLabel: 'Photo #04',
    title: 'Photo #04: Stage Performance & Classical Celebrations',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/487921722_3973746182879009_743852495417482578_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1152&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=FWtrV78GUbAQ7kNvwFFxfUd&_nc_oc=AdplB8sDJxLHrXGbmGIeQ-x5Y4R9nmm3cukHCkLNLMguhkbLvKiU7CAYrY-j11v2eKhSH67iGlxVlpWtOt-uMFtW&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=QeNavUOtqc9ys1BBoqS9Gg&_nc_ss=7b2a8&oh=00_AQNBtRYdJeaf_zv50b_g-NC6urHC7wvfaDH_nbsGwPM2ag&oe=6AC6DD05'
  },
  {
    id: 5,
    numberLabel: 'Photo #05',
    title: 'Photo #05: Saraswati Puja & Vedic Rituals',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/487792510_3973745872879040_2311380259557062077_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s206x206&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=_KtaPTbLhI8Q7kNvwHOypmL&_nc_oc=AdodbA5GqJcJEgNYSblxLvrqQebug36--2raMXJoYcylIpI28_4AXZPiQa6J9imp7VIlSdhI-LQn70e7RYqaVIaW&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=2B7ztYEmW3o5j_RBqhWV7A&_nc_ss=7b2a8&oh=00_AQM-xOVy3dKClV45zri8XroMdY6roHcM0naiKxKLWbQbKg&oe=6AC6F4EC'
  },
  {
    id: 6,
    numberLabel: 'Photo #06',
    title: 'Photo #06: Award Ceremony & Certificate Distribution',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/488174498_3973745866212374_517856537916021754_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s206x206&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=-qZTdRxULBIQ7kNvwEqp9B-&_nc_oc=AdoZAMOKtBnKoshKMv8aFTCLSMs387lyeD5zUCpFGNZ8IsySvP1kSWqkxnjGuQyZI9ciyWDZ4SJRiGVBcOd8A4Td&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=C-EfWYXbZ1SfiGHnBFXRBg&_nc_ss=7b2a8&oh=00_AQNaKFtwr6BXHHIuRrrJ5pAyRG0HbsDMvFNI9tRiULEhjg&oe=6AC6E4AA'
  },
  {
    id: 7,
    numberLabel: 'Photo #07',
    title: 'Photo #07: Academic Seminar & Student Presentation',
    category: 'Academic & Labs',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/488222947_3973746106212350_3216363206305143888_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s206x206&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=86v8VYkviQkQ7kNvwGKgDHP&_nc_oc=Adpu0wh5IWaP7sFlmXdLSl-eV152BNSEk55e24PCkDUk6L3NP7F7x_JvnjnrvqaNq0xXye0kvo5Regl-euzIVa3t&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=hGBjek6K-vNiJuX_Am8wtQ&_nc_ss=7b2a8&oh=00_AQOqj2VpYdv4pX6UZPmcQlQH0nawtuLCXkwpO5G4321m2A&oe=6AC6C7D6'
  },
  {
    id: 8,
    numberLabel: 'Photo #08',
    title: 'Photo #08: Yoga & Physical Discipline Session',
    category: 'Sports & Yoga',
    url: 'https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/488053968_3973745916212369_6996682234099438699_n.jpg?stp=dst-jpg_tt6&cstp=mx960x540&ctp=s206x206&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=MCbowNblEnQQ7kNvwEljT4p&_nc_oc=AdqZFdxirkulWU7HQF4qmsvifZUoQQzfImRfaCwJm2NV2uoFcEs7JVvQjp6TWNH9-8LrWQLjZn21GmxDef7Y5gua&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=_UXHN1fIjv3a_DPB6ehuvQ&_nc_ss=7b2a8&oh=00_AQP_T2zaYy0s22K6EC0McUbtnga1-rriCmXUVdMS3pll0w&oe=6AC6E7E3'
  },
  {
    id: 9,
    numberLabel: 'Photo #09',
    title: 'Photo #09: Sanskriti Mahotsav Celebrations',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/487505066_3973745716212389_2058427755363526262_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s206x206&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=58AIdr1jeyEQ7kNvwFhQ7l7&_nc_oc=Adohr4BPlgyrwK7Tu2o3HtSRrX3FYE7AcpQj-YOzJryKOkELWp8ju8wJnBRYyNhkp7YMfUxVskcEnSRlxIV_I0Xn&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=hGBjek6K-vNiJuX_Am8wtQ&_nc_ss=7b2a8&oh=00_AQOcXkCPQXSOhZ9LCg4A0YIUktBpSCPkj-2GkXYPTF43sA&oe=6AC6F86E'
  },
  {
    id: 10,
    numberLabel: 'Photo #10',
    title: 'Photo #10: Dignitaries Address & Assembly',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/488011212_3973746162879011_8208583091009529277_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s206x206&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=O-VOgV82V_sQ7kNvwGbRjuG&_nc_oc=AdrG19uLG_JZnNRYFYVmprYwiH2uXlT5F2-CjOOE_OXfogX1-5NXIZ__nfuWMeThMr1AxvsOo3JP5EIZ_T3Ih7Ng&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=y5olbXyumuqoDuTbOgi0qg&_nc_ss=7b2a8&oh=00_AQPTALddiR2wRUFOTgXqENOF9XE28nZF_Dq9otg6mGV3qg&oe=6AC6F80B'
  },
  {
    id: 11,
    numberLabel: 'Photo #11',
    title: 'Photo #11: Annual Sports Meet & Athletics',
    category: 'Sports & Yoga',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/476436642_1422850008688228_475464215151105804_n.jpg?stp=dst-jpg_tt6&cstp=mx1052x780&ctp=s1052x780&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SZH3j7iBT-4Q7kNvwFGSr16&_nc_oc=AdqULc47dobPSIX4mZr3hcO3DekcWTcgIAM9haHeJAH-fUgJClvb8CoU8M-9tQ0y1dnSjhAewnDp2HoQOQsOimVj&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=kIz_zmxjXaQAZ2UOuKLv4w&_nc_ss=7b2a8&oh=00_AQMXXh6PVpq8k4kxlxLqZmD6ha3P5J_moQ5y7q-BMf_QDw&oe=6AC6F863'
  },
  {
    id: 12,
    numberLabel: 'Photo #12',
    title: 'Photo #12: Historic School Archive & Memory',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t1.6435-9/100817857_339879226985317_6794116788817756160_n.jpg?stp=dst-jpg_tt6&cstp=mx720x531&ctp=s720x531&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Zc9BRlzAQwYQ7kNvwHxm8IQ&_nc_oc=AdqT1OkVpcaMOpoxzWM7cN0tENDLRa7fBaCIyHfGKGWglh5VHNO0DSvyyEyXBZC5p667T_BKpqUHIA7ts4a4m0Gb&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=mOSO0dJDB-rWhKjjoKBV6Q&_nc_ss=7b2a8&oh=00_AQNJVVPF9Nyf9bK7Ybisy3IY1f3RLc9nrWzltGITFBeVuQ&oe=6AE85FA8'
  },
  {
    id: 13,
    numberLabel: 'Photo #13',
    title: 'Photo #13: Co-Curricular Arts & Exhibition',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/798047081_3689015014583210_8343404095572464705_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s590x590&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BtbG0Gqc1HIQ7kNvwFhkWz3&_nc_oc=AdpWipTY0BSrvXNkyY9D8TM70wampnSYB_jUD99EAuKppcXFwaI6bjPU4o2ce_CZR6ydASyupNAjnB3_p1y0e8_b&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=BqzFQwVoAlXx7GstxKJcnw&_nc_ss=7b2a8&oh=00_AQMPbw9csB5IJmjQ5dH86QxGRI4iLb-oFn7d1qUD2qAy7g&oe=6AC6CF71'
  },
  {
    id: 14,
    numberLabel: 'Photo #14',
    title: 'Photo #14: Traditional Drama & Stage Recital',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/801885760_3689015671249811_7757821139050920163_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s590x590&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wTJZgXKWCx8Q7kNvwGIRjmi&_nc_oc=AdpdNMlcAMnIett0rLO7JY00b2t6im3dWMAfkAZTPZAs9qqr7Y1qy6FT0YNVFbpScE38jVREls_uKDJcDTZy21on&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=BqzFQwVoAlXx7GstxKJcnw&_nc_ss=7b2a8&oh=00_AQNorBP4D2hqo8CWwGvVqgdS3c1VOK6JyVWuRR0LlD1rBA&oe=6AC6C454'
  },
  {
    id: 15,
    numberLabel: 'Photo #15',
    title: 'Photo #15: Science Exhibition & Project Showcase',
    category: 'Academic & Labs',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/801885744_3689015217916523_4534088797058800623_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s590x590&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eOzc4M07_DIQ7kNvwE94hsD&_nc_oc=AdqVuKYivG5snocA9eIiEb6Ihta-dCpLoE2W_Q5y67ULV11I2HPX9yWHoE6pnsROnnK_aAb2OZMxiWvl6j7lFJ6z&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=BqzFQwVoAlXx7GstxKJcnw&_nc_ss=7b2a8&oh=00_AQMF1U8D5jdvHPmZeKFLkVH5YOeDIamtZ-0csV8nvyDOww&oe=6AC6F300'
  },
  {
    id: 16,
    numberLabel: 'Photo #16',
    title: 'Photo #16: Creative Craft & Model Making',
    category: 'Academic & Labs',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.99422-6/749878620_1525460756266346_326530677936156846_n.png?stp=dst-jpg_tt6&cstp=mx1280x720&ctp=s590x590&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PIDm8dWfbxsQ7kNvwFOBGEf&_nc_oc=AdpS1cxQ9gWU1Q_kkkoIv7gUBPAudXi67uzn61SYuckbrzxTEiAu28KHNbNecSoaYRAY2m6HDNKxVQaETbbxQSwn&_nc_zt=14&_nc_ht=scontent.fixr3-1.fna&_nc_gid=7Os-vitgskIJr-LkIve57Q&_nc_ss=7b2a8&oh=00_AQN1ZGskcZU098JJUPk6JAtN6FcVvmA1WNl0s-dJnx_k5A&oe=6AC6CCD7'
  },
  {
    id: 17,
    numberLabel: 'Photo #17',
    title: 'Photo #17: Independence Day & Patriotic March',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/729375828_3599443493540363_365889363186796025_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s2048x1542&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KD-TvFdK4FYQ7kNvwFl4TGe&_nc_oc=Adpx_6upnYhnc46ytTd6oBtJvD3sQznao0psvVPXQbRSiZFbigrijzLl2-pbt0g9exQut_Ex9NOKrPqooV3YQsaH&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=xv3NMb4Hl0F0qF9c9RkUMw&_nc_ss=7b2a8&oh=00_AQMmbgppfvSLFQZ_n8Y7prBAG5Bx0jYl3GsFhrP7d5ig-Q&oe=6AC6D76D'
  },
  {
    id: 18,
    numberLabel: 'Photo #18',
    title: 'Photo #18: Classroom Smart Teaching & Interaction',
    category: 'Academic & Labs',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/701157305_3559296014221778_4308624441334863450_n.jpg?stp=dst-jpg_tt6&cstp=mx900x1600&ctp=s900x1600&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tKxL9eWMWHwQ7kNvwFi4rhH&_nc_oc=Adq48FTW2OwPijdCKUdNJz9q1yDn7xIYiQhcmwTGIGn6N9Ly1LDfO7DCt_oR7OYQdPlXZCN-cDArgB9XDGrdyGu1&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=sd-San5APNLDqRLrk7nOdA&_nc_ss=7b2a8&oh=00_AQMq033Hpjq4F1mtG0Pzap46bFjjr5ppPOZcLKxqNmgS3Q&oe=6AC6EB7E'
  },
  {
    id: 19,
    numberLabel: 'Photo #19',
    title: 'Photo #19: Teacher Orientation & Faculty Meeting',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/700035679_3559296137555099_7661031350816999684_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x900&ctp=s1600x900&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SOHUXAWcBI8Q7kNvwGSwYfq&_nc_oc=AdreXLSSIDb8dLTGfGP90bclhjDEKaYZvVvqeePolezZFVUW6605ZM6NiSVBiuHzSGcBeliqD-BPubbgDXL38V6U&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=96LUBkMdrOrIc0Rai0dhoQ&_nc_ss=7b2a8&oh=00_AQPcSPq_5ER30G2EjU1TOP1mlAyCJamcn27N9gJXWtNUVA&oe=6AC6E835'
  },
  {
    id: 20,
    numberLabel: 'Photo #20',
    title: 'Photo #20: Parent-Teacher Meeting (PTM)',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/701246528_3559299800888066_5039157126958481483_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s2048x1542&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e-UZSoyt4HIQ7kNvwFge1Vr&_nc_oc=Adp5QGFP2HUVWJkZ0EGNt_vpym6l_xwm5EjP6lrU6D4bm8Nb2T3ckQdcN2-HYdVHIC4jwV_SjQ7leK1eu6o2W4y-&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=OBLZ9oyDdV8LvvHZ9awyHQ&_nc_ss=7b2a8&oh=00_AQMAk88Usc-sc0jQV3Wm2Ppr6svIHjhGABrKaL8QsbVIDA&oe=6AC6F001'
  },
  {
    id: 21,
    numberLabel: 'Photo #21',
    title: 'Photo #21: Music, Harmonium & Shloka Recitation',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/699978116_3559305960887450_5635762377529053506_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x900&ctp=s1600x900&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CBdTN06eyX4Q7kNvwEZttHM&_nc_oc=Adrb9GxRiLY1gZfFHgkT8Zf1s72xc5O8F9z61WPapimu-ruBae5up0L3lQaiAcKpE-KQv9bpp1sPpABsp952aKYM&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=UML1Vyj75h6kIcVBdTjTjA&_nc_ss=7b2a8&oh=00_AQNy673-uAK3p75D22RjWln2SuerdjS_SUuypqzQIgeiCA&oe=6AC6DF31'
  },
  {
    id: 22,
    numberLabel: 'Photo #22',
    title: 'Photo #22: Campus Greenery & Environmental Day',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/699479715_3559306560887390_6769929369986161621_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x900&ctp=s1600x900&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-lW-jP5acGQQ7kNvwHUS3PL&_nc_oc=AdrKQznSysgyger_i5U5d37VQKHqbAgPrV-4-5j-W-a7JmTirCrojV3j6C3Aiv7GR0zmsR69d37Mx0TcxyrWsuQp&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=A1_QA5JWEZUdF4-lyvet9A&_nc_ss=7b2a8&oh=00_AQMTAqU4THOwixQLy52z-v6Cr1AT_Vz1XG8YkUhfOS72Ag&oe=6AC6C494'
  },
  {
    id: 23,
    numberLabel: 'Photo #23',
    title: 'Photo #23: Laboratory Experiments & Practical Work',
    category: 'Academic & Labs',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/693075869_3551807561637290_5558507845313117132_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s1600x1200&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AM4Q9Vje97oQ7kNvwEkyo9W&_nc_oc=AdpmWE_dQwmLH4PeUAdyn3bEFuFoM-mQDYgAZVblxfFKzc9Ujhzi5YWsWlLQiNTgeU_6qI-s18BqH-gAjpFkxa_K&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=lTto-XUxndWWtwP5rQFDMA&_nc_ss=7b2a8&oh=00_AQOGo4tmwVIb40GJulwvqFEkjtjEj9LM_bNhfG_E_ZAU8w&oe=6AC6E3A8'
  },
  {
    id: 24,
    numberLabel: 'Photo #24',
    title: 'Photo #24: Library & Reading Session',
    category: 'Academic & Labs',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/691746720_3551808134970566_6533669777801481033_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x905&ctp=s1600x905&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ArYI_V51FTMQ7kNvwFJubyL&_nc_oc=AdoyAgckYl_4GQ88PP-BsjED6vpX3aiGKaQb9Y4mfusUzy1b5i-XyiIqRhG6qYowQXzILctsiOBSUJbQHF7UFalj&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=YxOT4NE47SU0eU-avwup2Q&_nc_ss=7b2a8&oh=00_AQO0OQ8CNL-VEuCWYcQW-VMOLOikUHhSVkpqH18Je3ij9g&oe=6AC6DAFF'
  },
  {
    id: 25,
    numberLabel: 'Photo #25',
    title: 'Photo #25: Republic Day Parade & Salutation',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/672815230_3525279174290129_283466149345897575_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s590x590&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nclXpow3RKwQ7kNvwGeuSv0&_nc_oc=AdoTfww-rR8cFqkD9h5kOLRiQckvCIzuSER57K3PJ2lY7g-FIKzYzuk6LAgtq_Kjxr2OU9g2owwCBdsaSVTCs718&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=iNKGnnB0P_AfPQewnPCz0g&_nc_ss=7b2a8&oh=00_AQMoy4VbexVOw0vu4wZA2bHuraI7aBdeBKnC7AalyaBVUg&oe=6AC6C563'
  },
  {
    id: 26,
    numberLabel: 'Photo #26',
    title: 'Photo #26: Cultural Dance & Folk Presentation',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/670271173_3525279084290138_6279665646423323498_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s590x590&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6vv0TG3wktQQ7kNvwEYVB8h&_nc_oc=Adp5zjZqH77YNfegEO6VWy7cLUxVPCo-PkjFO67UCmRLgn0vC388QmlQwsiNUS_CaZLZqwYsVtskf6O-Z088rclR&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=iNKGnnB0P_AfPQewnPCz0g&_nc_ss=7b2a8&oh=00_AQM9woykajcjYWkz9nrzsu8mbpDjcRwaL09J8iLZDGTHhA&oe=6AC6F48F'
  },
  {
    id: 27,
    numberLabel: 'Photo #27',
    title: 'Photo #27: Inter-School Competition Achievers',
    category: 'Academic & Labs',
    url: 'https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/665459874_3517229195095127_992391995341141830_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s590x590&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IpUu5cAAbksQ7kNvwEXpODi&_nc_oc=Adr3ntAQW97Y5tTt-buq1qUuoH81pNiU0asLQbkiWycjQsrfaw4KGs8pBSudonldsRIduQQ4A5Ug7wiIyprHprpe&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=XUxe2elhZTHra83l78W3LQ&_nc_ss=7b2a8&oh=00_AQPsZPAWbx8y--KzURL9vBvNU7llsp-UZp969-Ey1TVsFw&oe=6AC6F5B5'
  },
  {
    id: 28,
    numberLabel: 'Photo #28',
    title: 'Photo #28: Sanskrit Day Celebrations & Speeches',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/507310656_3207575379393845_8249050979589823152_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s2048x1542&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BHfLqY4zIGIQ7kNvwHhJlCl&_nc_oc=AdpJIEA9nbTs-LvZApOpXP0BP3yf6ovVvq31ebokH2HUQTCOwCcTbxkyJ7nWAqFThz1TpkHzmF0WAscpEBiVACu6&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=hWFCxeIPe1kK0aUP06Cu5g&_nc_ss=7b2a8&oh=00_AQMwuCeNottLlLWVz_YGmNU7tlzXcbJbVTioiwIl_mT7PA&oe=6AC6EE94'
  },
  {
    id: 29,
    numberLabel: 'Photo #29',
    title: 'Photo #29: Morning Vandana & Assembly Discipline',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/507217197_3207575232727193_5083884699024924204_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s2048x1542&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=o9v5iWPl6AIQ7kNvwEvLa2G&_nc_oc=Ado9V59TICrg76hEWKJZABHbS-AqfqtEW8v-XHTP1Qqp1IMWK4aD7_4WkDIvd-7Dnp9ipLt4QBR7OSeyp5NnWzUY&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&_nc_gid=TacgnWH1B_1C365BNMaKOw&_nc_ss=7b2a8&oh=00_AQO5jKpHLzw4idTBA4DKZyC72jUFB55jpRxlblLVkHem-A&oe=6AC6E586'
  },
  {
    id: 30,
    numberLabel: 'Photo #30',
    title: 'Photo #30: Student Leadership & Council Meet',
    category: 'Campus & Assembly',
    url: 'https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/508161046_3207629016055148_6606466980726597574_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s590x590&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y7mo2ltQr6AQ7kNvwGj_IFr&_nc_oc=AdobWIV7zek4YYi4C4q-AmslfaRtGk6DaKh-nQi_4NMKcEE4Q1ksMV4OJFsCeHRuwGZuyEIcxr8l75pzjOUSKLkw&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&_nc_gid=_cu9XF7Y7HB9vT4ecgGizQ&_nc_ss=7b2a8&oh=00_AQNhjm6UFhXTd3WidKYglZCoNy9ux0gu3onIGRZF_k2ZzQ&oe=6AC6EAB2'
  },
  {
    id: 31,
    numberLabel: 'Photo #31',
    title: 'Photo #31: Sports Day Medal Ceremony',
    category: 'Sports & Yoga',
    url: 'https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/491922218_3141766155974768_2618875190009780784_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s590x590&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0n8nyDEJl78Q7kNvwHii6H3&_nc_oc=AdqG68rvwaMrhdNzXP-oQaBIO07CQ0f_t1rhltN0KXJ0BX7MZzx8L002WH5qJ4huwWpdyx8fCPGYclHrwhvEY33B&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=oESI8f3J2akxZ_32x3t05A&_nc_ss=7b2a8&oh=00_AQPzMPydkJEGKXRO0YPC-Uco7wltfQM375CTnpedngu2uA&oe=6AC6DFA7'
  },
  {
    id: 32,
    numberLabel: 'Photo #32',
    title: 'Photo #32: Vidya Bharati State Meet & Fest',
    category: 'Cultural & Events',
    url: 'https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/482212439_3101106983374019_2576354366355229577_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1542&ctp=s2048x1542&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rtVAxKzVv1wQ7kNvwEp4Qtm&_nc_oc=AdolHy00gmFSCdDFQhCRnxrwKm2dnoXOEUSKJk3vmDdSNAEOiL9sHURWrZ2UgFLDjChuBqK9Zh0dmIoQrTJqp9dD&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&_nc_gid=yQaUXCLLtGJQKU04pRDGcw&_nc_ss=7b2a8&oh=00_AQPPN5E68Dur0FUIg_YyxOPWrA1jZzx1IFdR2SpJoTjrAQ&oe=6AC6C9D2'
  }
];

export const galleryItems: GalleryItem[] = schoolGalleryPhotos.map(p => ({
  id: `g${p.id}`,
  url: p.url,
  title: p.title,
  category: p.category
}));

export const topperStudents: TopperStudent[] = [
  {
    name: 'Sristy Kumari',
    image: 'https://plain-apac-prod-public.komododecks.com/202610/03/96fgsTZfarsxHbIyzhWf/image.png',
    percentage: '97.2%',
    role: 'Class VIII Outstanding Honor & School Champion',
    rank: 1,
    guardian: 'Mr. Vinod Kumar Varnawal'
  },
  {
    name: 'Shashikant',
    image: 'https://i.ibb.co/DDnXZZXv/IMG-20260522-153204.jpg',
    percentage: '98%',
    role: 'CBSE Class X Rank #1 Topper',
    rank: 1,
    guardian: 'Mr. Sohan Pandit'
  },
  {
    name: 'Jaywardhan',
    image: 'https://plain-apac-prod-public.komododecks.com/202605/22/ccxtFDF10B1J89SCGMXf/image.png',
    percentage: '96.8%',
    role: 'CBSE Class X Rank #2 Topper (Mathematics Genius)',
    rank: 2,
    guardian: 'Mr. Prem Kumar'
  },
  {
    name: 'Priyaranjan Raj',
    image: 'https://plain-apac-prod-public.komododecks.com/202605/22/9rLWt11WWMCyxqaGiLmK/image.png',
    percentage: '95.6%',
    role: 'CBSE Class X Rank #3 Topper (Sanskrit & Social Science)',
    rank: 3,
    guardian: 'Mr. Vinod Kumar Varnawal'
  }
];

export const reviewItems: ReviewItem[] = [
  {
    name: 'Dr. Alok Ranjan',
    role: 'Parent of Class X Student',
    review: 'Saraswati Vidya Mandir maintains an outstanding equilibrium between rigorous modern curricula and core Indian values. My daughter has matured into a disciplined, intellectually curious leader here.',
    rating: 5
  },
  {
    name: 'Prerna Sharma',
    role: 'Alumna (Batch 2021)',
    review: 'The confidence SVM MaharajaGanj bestowed on me is unmatched. From public speaking debates to state-of-the-art programming in our computer labs, the support system prepared me perfectly for my university life.',
    rating: 5
  },
  {
    name: 'Advocate Vinay Jha',
    role: 'Parent of Class X Board Student',
    review: 'Weekly practice examinations, digital teaching modules, and personal phone sessions with teachers made our board semesters feel entirely seamless. Outstanding pedagogical design!',
    rating: 5
  }
];

export const clubItems: ClubItem[] = [
  {
    title: 'Sports & Athletics',
    description: 'State-level basketball coaching, classical yoga setups, annual athletics meets, and martial arts.',
    icon: 'Trophy',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Drama & Theatre',
    description: 'Performing traditional Sanskrit epics, street plays on modern social topics, and national monologue stages.',
    icon: 'Theater',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Music & Chants',
    description: 'Vocal training in Hindustani classical ragas, modern instruments like synthesizer/flute, and morning shlokas.',
    icon: 'Music',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Innovation & Robotics Club',
    description: 'Curious hands building Arduino microcontrollers, simple sensor scripts, and entering state science exhibitions.',
    icon: 'Lightbulb',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    title: 'Eco Club',
    description: 'Clean energy talks, medicinal herb planting sessions, plastic waste minimization, and green energy drives.',
    icon: 'Leaf',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Oratory & Debate Club',
    description: 'Extempore battles, public speech mastery, school-to-school quiz events, and digital writing forums.',
    icon: 'MessageSquare',
    color: 'from-orange-500 to-yellow-500'
  }
];

export const educationTimeline: EducationTimeline[] = [
  {
    phase: 'Stage 1: Primary Wing (Nursery - V)',
    title: 'Foundational & Moral Learning',
    description: 'Activity-based learning, Sanskrit shlokas, moral stories, and basic mathematical concepts.',
    points: ['Activity Learning', 'Vedic Values & Stories', 'Basic Arithmetic', 'Creative Arts']
  },
  {
    phase: 'Stage 2: Middle Wing (VI - VIII)',
    title: 'Analytical & Practical Skills',
    description: 'Experimental science, coding fundamentals, mathematical logic, and language fluency.',
    points: ['Science Laboratory', 'Coding & Computer Basics', 'Vedic Math Methods', 'Language Fluency']
  },
  {
    phase: 'Stage 3: Secondary Wing (IX - X)',
    title: 'CBSE Board Mastery & Guidance',
    description: 'Targeted board prep, regular mock tests, science practicals, and career mentorship.',
    points: ['CBSE Mock Tests', 'Specialized Doubt Classes', 'Science Practicals', 'Career Mentorship']
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Admission',
    question: 'How do we enroll a new student for academic session 2026-27?',
    answer: 'Admissions are open from Nursery to Class X. Parents can submit the online registration form in the portal, or visit the school desk. Post documentation check, a friendly interactive evaluation is scheduled.'
  },
  {
    id: 'faq2',
    category: 'Academics',
    question: 'Is Saraswati Vidya Mandir affiliated with CBSE?',
    answer: 'Yes! We are permanently affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Affiliation No. 330263.'
  },
  {
    id: 'faq3',
    category: 'Facilities',
    question: 'Are smart classrooms and labs accessible to all classes?',
    answer: 'Absolutely. Smart board audio-visual sessions are integrated into our daily routine. Computer labs and separate Chemistry/Physics/Biology labs are allocated on weekly rosters.'
  },
  {
    id: 'faq4',
    category: 'Security',
    question: 'What security measures are implemented on campus?',
    answer: 'We have 24/7 CCTV surveillance spanning corridors, play arenas, and entries. All buses have dedicated track support. Entrance is restricted via smart identity slips.'
  }
];

export const noticeItems: NoticeItem[] = [
  {
    id: 'n1',
    title: '🎉 Prantiya Sanskriti Mahotsav (5 & 6 September)',
    date: '5 & 6 September',
    priority: 'high',
    isToday: true,
    isImportant: true,
    description: 'Prantiya Sanskriti Mahotsav will be held on 5 & 6 September at Saraswati Vidya Mandir Maharajganj. Honored Chief Guests: Education Minister of Bihar Shri Mithilesh Tiwari, Hon\'ble MP of Maharajganj Shri Janardan Singh Sigriwal, and SDM Smt. Anita Sinha, alongside our distinguished Lok Shiksha Samiti members.'
  }
];

export const teacherItems: TeacherItem[] = [
  {
    name: 'Shri Shambhu Sharan Tiwari',
    designation: 'Principal',
    department: 'Administration',
    qualification: 'M.A., B.Ed.',
    phone: 'N/A'
  },
  {
    name: 'Dinesh Ji',
    designation: 'Senior Teacher - Social Science',
    department: 'Social Science',
    qualification: 'M.A. (History/Pol. Science), B.Ed.',
    phone: 'N/A'
  },
  {
    name: 'Abhishek Kumar Mishra',
    designation: 'Sports Teacher',
    department: 'Sports',
    qualification: 'B.P.Ed.',
    phone: '9801294884'
  },
  {
    name: 'Ankit Ji',
    designation: 'Maths Teacher',
    department: 'Mathematics',
    qualification: 'Mathematics Specialist',
    phone: 'N/A'
  },
  {
    name: 'Gautam Sharma',
    designation: 'Maths Teacher',
    department: 'Mathematics',
    qualification: 'M.Sc. Mathematics, B.Ed.',
    phone: '8084820851'
  },
  {
    name: 'Hariom Kumar',
    designation: 'Maths Specialist',
    department: 'Mathematics',
    qualification: 'M.Sc. Maths',
    phone: '9199111822'
  },
  {
    name: 'Pradyuman Kumar Mishra',
    designation: 'Chemistry + Maths Teacher',
    department: 'Mathematics',
    phone: '9006397662'
  },
  {
    name: 'Amit Kumar',
    designation: 'Maths + Science Teacher',
    department: 'Mathematics',
    phone: '8864015957'
  },
  {
    name: 'Sanjay Kumar Rai',
    designation: 'Economics + Geography Teacher',
    department: 'Social Science',
    phone: '9471053585'
  },
  {
    name: 'Aruna',
    designation: 'Social Science Teacher',
    department: 'Social Science',
    phone: '9570898684'
  },
  {
    name: 'Usha Kumari',
    designation: 'Social Science Teacher',
    department: 'Social Science',
    phone: '9155501258'
  },
  {
    name: 'Meena Kumari',
    designation: 'Social Science Teacher',
    department: 'Social Science',
    phone: 'N/A'
  },
  {
    name: 'Vibha Singh',
    designation: 'Social Science Teacher',
    department: 'Social Science',
    qualification: 'M.A. / B.Ed. (Social Science)',
    phone: 'N/A'
  },
  {
    name: 'Pratibha Kumari',
    designation: 'Hindi Teacher',
    department: 'Hindi',
    phone: '9852687421'
  },
  {
    name: 'Santosh Jee',
    designation: 'Hindi Teacher',
    department: 'Hindi',
    phone: '8271910352'
  },
  {
    name: 'Satyam Tiwari',
    designation: 'Sanskrit Teacher',
    department: 'Sanskrit',
    phone: '9123201838'
  },
  {
    name: 'Alok Ranjan Prabhat',
    designation: 'Sanskrit Teacher',
    department: 'Sanskrit',
    phone: '9470480369'
  },
  {
    name: 'Amresh Ranjan Ojha',
    designation: 'Computer (AI & IT) Teacher',
    department: 'Computer / IT',
    phone: '9199687970'
  },
  {
    name: 'Bhaskar Kumar',
    designation: 'CBSE Trainer',
    department: 'Computer / IT',
    phone: '7209325453'
  },
  {
    name: 'Ratna Kumari',
    designation: 'AI & IT Teacher',
    department: 'Computer / IT',
    phone: '9304167995'
  },
  {
    name: 'Dheeraj Kumar Singh',
    designation: 'English Teacher',
    department: 'English',
    phone: '8709517208'
  },
  {
    name: 'Jai Prakash Chaubey',
    designation: 'English Teacher',
    department: 'English',
    phone: '6206486254'
  },
  {
    name: 'Rishikesh Rai',
    designation: 'English Teacher',
    department: 'English',
    phone: '8002541556'
  },
  {
    name: 'Rakesh Kumar Tiwari',
    designation: 'English + Hindi Teacher',
    department: 'English',
    phone: '9708802373'
  },
  {
    name: 'Seema Ray',
    designation: 'English Teacher',
    department: 'English',
    phone: '9060533578'
  },
  {
    name: 'Garima Didi Jee',
    designation: 'Science Teacher',
    department: 'Science',
    qualification: 'B.Sc. (Science), B.Ed.',
    phone: 'N/A'
  },
  {
    name: 'Nipu Kumari Sinha',
    designation: 'Science Teacher',
    department: 'Science',
    phone: '8083279788'
  },
  {
    name: 'Manoj Kumar Raj',
    designation: 'Physics Teacher',
    department: 'Science',
    phone: '9504187252'
  },
  {
    name: 'Rani Singh',
    designation: 'Biology Teacher',
    department: 'Science',
    phone: '8603392565'
  },
  {
    name: 'Premlata Kumari',
    designation: 'Kids Teacher',
    department: 'Primary',
    phone: '8340588570'
  },
  {
    name: 'Kumari Shweta Rai',
    designation: 'Kids Teacher',
    department: 'Primary',
    phone: '9031193965'
  },
  {
    name: 'Shalu Singh',
    designation: 'Music Teacher',
    department: 'Music',
    phone: '7493832297'
  },
  {
    name: 'Shashi Ji',
    designation: 'Fees Incharge',
    department: 'Others',
    phone: 'N/A'
  }
];

export const cbseData: CBSEData[] = [];

export const schoolContactEmail = "svmmrj1@gmail.com";

