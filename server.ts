import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined. Please configure it in your Secrets/Environment variables.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

// In-Memory & Server reviews store
interface ReviewItem {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  date: string;
}

let storedReviews: ReviewItem[] = [
  {
    id: "r1",
    name: "Dr. Alok Ranjan",
    role: "Parent of Class X Student",
    review: "Saraswati Vidya Mandir maintains an outstanding equilibrium between rigorous modern curricula and core Indian values. My daughter has matured into a disciplined, intellectually curious leader here.",
    rating: 5,
    date: "2026-09-15"
  },
  {
    id: "r2",
    name: "Prerna Sharma",
    role: "Alumna (Batch 2021)",
    review: "The confidence SVM Maharajganj bestowed on me is unmatched. From public speaking debates to state-of-the-art programming in our computer labs, the support system prepared me perfectly for my university life.",
    rating: 5,
    date: "2026-08-20"
  },
  {
    id: "r3",
    name: "Advocate Vinay Jha",
    role: "Parent of Class X Board Student",
    review: "Weekly practice examinations, digital teaching modules, and personal phone sessions with teachers made our board semesters feel entirely seamless. Outstanding pedagogical design!",
    rating: 5,
    date: "2026-07-10"
  }
];

// Fully trained comprehensive knowledge base for Saraswati Vidya Mandir, Maharajganj (Powered by Google Gemini)
const SYSTEM_INSTRUCTION = `
You are the official Gemini AI Academic Assistant for Saraswati Vidya Mandir, Maharajganj (Siwan District, Bihar).
Your purpose is to assist parents, students, alumni, teachers, and visitors with authentic, warm, polite, and detailed guidance regarding our school.
Always uphold Indian cultural ethos ("Namaste 🙏", "Pranam", "Jai Hind"). You are fluent in English, Hindi (हिन्दी), and Hinglish.

===================================================================
1. CORE INSTITUTIONAL PROFILE:
===================================================================
• School Name: Saraswati Vidya Mandir (SVM), Maharajganj
• Motto: "सा विद्या या विमुक्तये" (Knowledge is that which liberates)
• Campus Location: Maharajganj Town, Siwan District, Bihar, India - PIN 841238
• Affiliation: Central Board of Secondary Education (CBSE), New Delhi
• CBSE Affiliation No: 330263 | School Code: 65259
• Affiliation Status: Fully accredited Secondary Level institution (Extension valid through 31.03.2028).
• Management: Governed by Lok Shiksha Samiti, Bihar & Vidya Bharati Akhil Bharatiya Shiksha Sansthan.
• Principal: Shri Shambhu Sharan Tiwari (M.A., B.Ed., with 35+ years of distinguished leadership in educational pedagogy).
• Grades Offered: Nursery to Class X (Strictly Secondary Level from Nursery to Class 10; not Senior Secondary Class XII).
• Official Contact Numbers: +91 94314 26738 | +91 99342 11094 | +91 7209325453
• Official Desk Email: svmmrj1@gmail.com

===================================================================
2. MAJOR UPCOMING EVENT: PRANTIYA SANSKRITI MAHOTSAV 2026
===================================================================
• Event: Prantiya Sanskriti Mahotsav 2026
• Dates: 5th & 6th September
• Venue: Saraswati Vidya Mandir Campus, Maharajganj
• Dignitaries & Chief Guests:
  1. Shri Mithilesh Tiwari - Hon'ble Education Minister of Bihar
  2. Shri Janardan Singh Sigriwal - Hon'ble Member of Parliament (MP), Maharajganj
  3. Smt. Anita Sinha - Sub-Divisional Magistrate (SDM), Maharajganj
  4. Esteemed Office Bearers of Lok Shiksha Samiti, Bihar
• Activities: Vedic recitations, Sanskrit speech, moral drama, folk arts, exhibitions, and cultural contests.

===================================================================
3. COMPLETE FACULTY & DEPARTMENTAL DIRECTORY:
===================================================================
• Leadership:
  - Shri Shambhu Sharan Tiwari (Principal, M.A., B.Ed.)

• Social Science Department:
  - Dinesh Ji (Senior Social Science Teacher, M.A. History/Pol. Science, B.Ed.)
  - Sanjay Kumar Rai (Economics + Geography Teacher - 9471053585)
  - Aruna (Social Science Teacher - 9570898684)
  - Usha Kumari (Social Science Teacher - 9155501258)
  - Meena Kumari (Social Science Teacher)

• Sanskrit Department:
  - Niraj Jee (Acharya - Sanskrit Teacher, Acharya, M.A. Sanskrit, B.Ed.)
  - Satyam Tiwari (Sanskrit Teacher - 9123201838)
  - Alok Ranjan Prabhat (Sanskrit Teacher - 9470480369)

• Mathematics Department:
  - Gautam Sharma (Maths Teacher - 8084820851)
  - Hariom Kumar (Maths Specialist - 9199111822)
  - Pradyuman Kumar Mishra (Chemistry + Maths Teacher - 9006397662)
  - Amit Kumar (Maths + Science Teacher - 8864015957)

• Hindi Department:
  - Pratibha Kumari (Hindi Teacher - 9852687421)
  - Santosh Jee (Hindi Teacher - 8271910352)

• Computer Science, IT & AI Department:
  - Amresh Ranjan Ojha (Computer & AI/IT Teacher - 9199687970)
  - Bhaskar Kumar (CBSE Trainer - 7209325453)
  - Ratna Kumari (AI & IT Teacher - 9304167995)

• English Department:
  - Dheeraj Kumar Singh (English Teacher - 8709517208)
  - Jai Prakash Chaubey (English Teacher - 6206486254)
  - Rishikesh Rai (English Teacher - 8002541556)
  - Rakesh Kumar Tiwari (English + Hindi Teacher - 9708802373)
  - Seema Ray (English Teacher - 9060533578)

• Science Department:
  - Pradeep Kumar Dubey (Physics Teacher - 7254848247)
  - Vibha Didi Jee (Science Teacher, B.Sc., B.Ed.)
  - Garima Didi Jee (Science Teacher, B.Sc., B.Ed.)
  - Nipu Kumari Sinha (Science Teacher - 8083279788)
  - Manoj Kumar Raj (Physics Teacher - 9504187252)
  - Rani Singh (Biology Teacher - 8603392565)

• Primary & Kindergarten Department:
  - Premlata Kumari (Kids Teacher - 8340588570)
  - Kumari Shweta Rai (Kids Teacher - 9031193965)

• Sports & Physical Education:
  - Abhishek Kumar Mishra (Sports Teacher - 9801294884)

• Music & Cultural:
  - Shalu Singh (Music Teacher - 7493832297)

• Accounts & Administration:
  - Shashi Ji (Fees Incharge)

===================================================================
4. ACADEMIC GLORY & OUTSTANDING HONORS:
===================================================================
• Special Middle Wing Honor:
  - Sristy Kumari: 97.2% (Class VIII Outstanding Honor & School Champion, D/O Mr. Vinod Kumar Varnawal)

• CBSE Class X Board Result Highlights:
  - Shashikant: 98% (Rank #1 CBSE Class X Topper, S/O Mr. Sohan Pandit)
  - Jaywardhan: 96.8% (Rank #2 CBSE Class X Topper, S/O Mr. Prem Kumar)
  - Priyaranjan Raj: 95.6% (Rank #3 CBSE Class X Topper, S/O Mr. Vinod Kumar Varnawal)

===================================================================
5. BANK DETAILS & TUITION FEE PAYMENT:
===================================================================
• Official Account Name: SARASWATI VIDYA MANDIR
• Bank: State Bank of India (SBI), Maharajganj Branch
• Account Number: 39824058291
• IFSC Code: SBIN0003264
• Accepted Modes: UPI / NEFT / IMPS / Net Banking / Bank Counter Deposit.
• After making payment, parents can share the receipt screenshot at svmmrj1@gmail.com.

===================================================================
6. CAMPUS INFRASTRUCTURE & STUDENT LIFE:
===================================================================
• 100% Digitized Smart Classrooms with audio-visual smartboards.
• High-tech AI & Computer Science Laboratory.
• Science Labs (Physics, Chemistry, Biology).
• Library with over 5,000+ reference volumes, moral literature & encyclopedias.
• Safe transportation fleet of 20+ buses covering Maharajganj and nearby regions.
• CCTV surveillance across the entire 2.5-acre lush green campus.
• Co-curricular clubs: Yoga & Martial Arts, Debate & Oratory, Sanskrit Shloka Chanting, Eco & Science Club, Drama & Folk Music.
`;

// Reviews API Routes
app.get("/api/reviews", (req, res) => {
  res.json({ reviews: storedReviews });
});

app.post("/api/reviews", (req, res) => {
  try {
    const { name, role, review, rating } = req.body;
    if (!name || !review) {
      res.status(400).json({ error: "Name and review text are required." });
      return;
    }

    const newReview: ReviewItem = {
      id: `r_${Date.now()}`,
      name: name.trim(),
      role: (role || "Parent / Guardian").trim(),
      review: review.trim(),
      rating: Number(rating) || 5,
      date: new Date().toISOString().split("T")[0]
    };

    storedReviews.unshift(newReview);
    res.status(201).json({ success: true, review: newReview, reviews: storedReviews });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Gemini Chat API Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message parameter is required." });
      return;
    }

    // Fallback response if GEMINI_API_KEY is not set
    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY not configured. Running offline trained responder.");
      
      const lower = message.toLowerCase();
      let responseText = "Namaste! Welcome to Saraswati Vidya Mandir Maharajganj.";

      if (lower.includes("fee") || lower.includes("fees") || lower.includes("payment") || lower.includes("account") || lower.includes("sbi")) {
        responseText = "Namaste! For school fee payments, please use our official SBI bank details:\n\n• Account Name: SARASWATI VIDYA MANDIR\n• Account Number: 39824058291\n• IFSC Code: SBIN0003264\n• Branch: SBI Maharajganj\n\nPlease email the confirmation receipt to svmmrj1@gmail.com.";
      } else if (lower.includes("mahotsav") || lower.includes("event") || lower.includes("september") || lower.includes("sanskrit")) {
        responseText = "🎉 Prantiya Sanskriti Mahotsav 2026 will be held on 5 & 6 September at the SVM Maharajganj Campus.\n\nHon'ble Chief Guests:\n1. Shri Mithilesh Tiwari (Education Minister of Bihar)\n2. Shri Janardan Singh Sigriwal (Hon'ble MP Maharajganj)\n3. Smt. Anita Sinha (SDM Maharajganj)\n4. Lok Shiksha Samiti Office Bearers.";
      } else if (lower.includes("sristy") || lower.includes("class 8") || lower.includes("class viii")) {
        responseText = "Sristy Kumari (D/O Mr. Vinod Kumar Varnawal) achieved 97.2% and holds the prestigious Class VIII Outstanding Honor & School Champion title at Saraswati Vidya Mandir Maharajganj.";
      } else if (lower.includes("topper") || lower.includes("glory") || lower.includes("result") || lower.includes("shashikant") || lower.includes("jaywardhan") || lower.includes("priyaranjan")) {
        responseText = "Our CBSE Class 10 Board Toppers:\n• Shashikant: 98% (Rank #1)\n• Jaywardhan: 96.8% (Rank #2)\n• Priyaranjan Raj: 95.6% (Rank #3)\n\nSpecial Class VIII Honor: Sristy Kumari (97.2%).";
      } else if (lower.includes("dinesh") || lower.includes("social science")) {
        responseText = "Dinesh Ji is our Senior Social Science Teacher (M.A. History/Pol. Science, B.Ed.) at Saraswati Vidya Mandir Maharajganj.";
      } else if (lower.includes("niraj") || lower.includes("sanskrit")) {
        responseText = "Niraj Jee is our Acharya & Senior Sanskrit Teacher (Acharya, M.A. Sanskrit, B.Ed.) at Saraswati Vidya Mandir Maharajganj.";
      } else if (lower.includes("principal") || lower.includes("tiwari")) {
        responseText = "Our respected Principal is Shri Shambhu Sharan Tiwari (M.A., B.Ed.), bringing over 35 years of educational experience and values-based leadership.";
      } else {
        responseText = `Namaste! Welcome to Saraswati Vidya Mandir, Maharajganj (CBSE Affiliation: 330263).\n\nKey Highlights:\n• Principal: Shri Shambhu Sharan Tiwari\n• Sanskriti Mahotsav: 5 & 6 September 2026\n• Helpline: +91 94314 26738 / +91 99342 11094\n• Official Email: svmmrj1@gmail.com\n\nHow can I help you today with admissions, faculty, or school details?`;
      }

      res.json({ text: responseText });
      return;
    }

    const ai = getGeminiClient();

    // Map conversation history
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        contents.push({
          role: turn.role === "assistant" ? "model" : "user",
          parts: [{ text: turn.content }]
        });
      });
    }
    
    // Append user's current message
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "An error occurred during Gemini chat generation." });
  }
});

async function setupViteOrStatic() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SVM Gemini Fullstack] Server listening on http://0.0.0.0:${PORT}`);
  });
}

setupViteOrStatic();
