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
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'principal', label: 'Principal\'s Message', href: '#principal' },
  { id: 'glory', label: 'Our Glory', href: '#glory' },
  { id: 'classroom', label: 'Beyond Classroom', href: '#classroom' },
  { id: 'notices', label: 'Notice Board', href: '#notices' },
  { id: 'teachers', label: 'Our Teachers', href: '#teachers' },
  { id: 'cbse', label: 'CBSE Affiliation', href: '#cbse' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];

export const heroSlides: HeroSlide[] = [
  {
    url: 'https://i.ibb.co/twyfGhX5/Chat-GPT-Image-May-22-2026-10-12-04-AM.png',
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
    description: 'Highly trained professionals dedicated to moral development and academic clarity.',
    icon: 'GraduationCap'
  },
  {
    title: 'Quality Education',
    description: 'Rigorous CBSE syllabus matched with Vedic mathematics and cultural heritage.',
    icon: 'BookOpen'
  },
  {
    title: 'Smart Classrooms',
    description: 'Equipped with interactive projectors, audio-visual systems, and digital boards.',
    icon: 'Tv'
  },
  {
    title: 'Computer Lab',
    description: 'Modern desktop terminals with high-speed internet and coding instruction.',
    icon: 'Cpu'
  },
  {
    title: 'Science Lab',
    description: 'Fully-stocked Physics, Chemistry, and Biology laboratories for active experimentation.',
    icon: 'FlaskConical'
  },
  {
    title: 'CCTV Security',
    description: '24/7 campus surveillance ensuring a bulletproof safe environment for all.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Strict Discipline',
    description: 'Structured routine building self-regulation, respect, and neat dress code.',
    icon: 'Users'
  },
  {
    title: 'Regular PTM',
    description: 'Continuous dialogue with parents to track and uplift every child\'s growth.',
    icon: 'CalendarDays'
  },
  {
    title: '24/7 Academic Support',
    description: 'Remedial classes, online materials, and custom guidance for board exams.',
    icon: 'HeartHandshake'
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

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://i.ibb.co/twyfGhX5/Chat-GPT-Image-May-22-2026-10-12-04-AM.png',
    title: 'School High Tech Entrance',
    category: 'campus'
  },
  {
    id: 'g2',
    url: 'https://www.21kschool.com/in/wp-content/uploads/sites/4/2024/08/What-is-a-Smart-Classroom-The-Complete-Overview.png',
    title: 'Classroom Lecture & PTM Discussions',
    category: 'academics'
  },
  {
    id: 'g3',
    url: 'https://5.imimg.com/data5/SELLER/Default/2025/3/497435984/QI/OC/EQ/199130833/computer-laboratory-service-500x500.jpg',
    title: 'Advanced Computer Lab Practice',
    category: 'academics'
  },
  {
    id: 'g4',
    url: 'https://i.ibb.co/TMTNxb5c/IMG-20260522-181830.jpg',
    title: 'Co-curricular Stage Events & Prize Distribution',
    category: 'cultural'
  },
  {
    id: 'g5',
    url: 'https://www.21kschool.com/in/wp-content/uploads/sites/4/2024/08/What-is-a-Smart-Classroom-The-Complete-Overview.png',
    title: 'Students Performing Science Experiments',
    category: 'sports'
  }
];

export const topperStudents: TopperStudent[] = [
  {
    name: 'Sristy Kumari',
    image: 'https://i.ibb.co/bRC40wmb/WA-1779439852294.jpg',
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
    phase: 'Primary Level (Nursery - V)',
    title: 'Joyful Vedic Foundations',
    description: 'Emphasis is laid on interactive playway models, language fluency, core moral stories, and clean behavioral habits.',
    points: ['Theme-based physical worksheets', 'Vocal moral storytelling', 'Basic computers and arithmetic math tricks', 'Creative arts and clay workshops']
  },
  {
    phase: 'Middle Level (VI - VIII)',
    title: 'Scientific Temperament & Languages',
    description: 'Nurturing deep analytic understanding of science and advanced math alongside structural languages (Sanskrit, Hindi, English).',
    points: ['Hands-on laboratory activities', 'Computer programming introduction', 'Vedic Mathematics tools', 'Social science role-play and quizzes']
  },
  {
    phase: 'Secondary Level (IX - X)',
    title: 'Board Excellence & Specialized Guidance',
    description: 'Rigorous preparatory testing, analytical reasoning training, customized career counseling, and digital classrooms.',
    points: ['Weekly full-syllabus board simulation tests', 'One-on-one parent feedback forums', 'Advanced science practical sessions', 'Stress-management & character guidance workshops']
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
    name: 'Niraj Jee',
    designation: 'Acharya - Sanskrit Teacher',
    department: 'Sanskrit',
    qualification: 'Acharya, M.A. Sanskrit, B.Ed.',
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
    name: 'Pradeep Kumar Dubey',
    designation: 'Physics Teacher',
    department: 'Science',
    qualification: 'M.Sc. Physics, B.Ed.',
    phone: '7254848247'
  },
  {
    name: 'Vibha Didi Jee',
    designation: 'Science Teacher',
    department: 'Science',
    qualification: 'B.Sc. (Science), B.Ed.',
    phone: 'N/A'
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

