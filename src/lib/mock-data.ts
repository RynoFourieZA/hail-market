// ============================================================
// Mock task data for the HAIL Task Marketplace
// Replace with real API calls when backend is ready
// ============================================================

export interface Task {
  id: string;
  title: string;
  description: string;
  budget: number;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  required_level: number;
  time_estimate: string;
  created_at: string;
  ai_assist: boolean;
  /** Icon emoji or identifier for the task card */
  icon: string;
  /** Background color class for the icon container */
  iconBg: string;
  /** Whether this is a premium/featured task */
  premium?: boolean;
  /** Task type: micro (quick accept) or large (apply) */
  type: "micro" | "large";
  /** Tags for highlighting (e.g., "High Demand", "Quick Task", "AI Recommended") */
  tags?: string[];
  /** Full detailed description for details page */
  fullDescription?: string;
  /** Array of required skills */
  requirements?: string[];
  /** Array of required tools */
  tools?: string[];
  /** Array of deliverables */
  deliverables?: string[];
  /** Creator name */
  creatorName?: string;
  /** Creator rating (0-5) */
  creatorRating?: number;
  /** Number of applicants */
  applicants?: number;
  /** Deadline if applicable */
  deadline?: string;
  /** Payment type: fixed or per-result */
  paymentType?: "fixed" | "per-result";
  /** Images to display in the task (URLs) */
  images?: string[];
  /** Links/resources for the task */
  links?: { label: string; url: string }[];
}

export const CATEGORIES = [
  "All Categories",
  "Data Labeling",
  "Translation",
  "Code Review",
  "Bug Fix",
  "UI/UX Design",
  "Content Writing",
  "Testing",
  "Research",
  "Legal",
] as const;

export const DIFFICULTIES = ["all", "easy", "medium", "hard"] as const;

export const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Highest Pay", value: "highest_pay" },
  { label: "Lowest Pay", value: "lowest_pay" },
  { label: "Easiest First", value: "easiest" },
] as const;

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Data Labeling for Medical AI",
    description:
      "Identify and label anatomical structures in surgical video frames to improve machine learning models for minimally invasive surgery assistance.",
    fullDescription: `We are training a machine learning model to assist surgeons during minimally invasive procedures by providing real-time anatomical guidance. Your task is to identify and label specific anatomical structures in high-resolution surgical video frames.

This is a critical component of our AI training pipeline, and accuracy is paramount. Each frame contains multiple organs and tissues that must be precisely labeled according to our classification scheme.

The work involves:
- Reviewing pre-extracted frames from surgical videos
- Identifying anatomical structures based on visual characteristics
- Applying consistent labels from our structured vocabulary
- Flagging any ambiguous or unclear regions

Quality assurance is built into our process, with spot-checks on 10% of submissions and detailed feedback provided for learning.`,
    budget: 45,
    difficulty: "medium",
    category: "Data Labeling",
    required_level: 2,
    time_estimate: "~45 min",
    created_at: "1 hour ago",
    ai_assist: true,
    icon: "🔬",
    iconBg: "bg-blue-100 text-blue-600",
    type: "large",
    tags: ["AI Recommended", "High Demand"],
    requirements: ["Basic anatomy knowledge", "Attention to detail", "Familiarity with medical imaging"],
    tools: ["Web-based labeling interface", "Sample dataset provided"],
    deliverables: ["Labeled dataset (100 frames)", "Quality report"],
    creatorName: "MediAI Labs",
    creatorRating: 4.8,
    applicants: 12,
    deadline: "2 days",
    paymentType: "fixed",
    images: [
      "https://miro.medium.com/v2/1*SkRixKiPnXpJGlrTzyDtXg.png",
      "https://miro.medium.com/v2/1*SkRixKiPnXpJGlrTzyDtXg.png",
      "https://miro.medium.com/v2/1*SkRixKiPnXpJGlrTzyDtXg.png"
    ],
    links: [
      { label: "Labeling Guide (PDF)", url: "https://example.com/labeling-guide.pdf" },
      { label: "Sample Dataset", url: "https://example.com/samples" },
      { label: "Classification Schema", url: "https://example.com/schema" },
    ],
  },
  {
    id: "2",
    title: "Translation Verification",
    description:
      "Review automated translations from Korean to English for technical documentation accuracy.",
    budget: 12.5,
    difficulty: "easy",
    category: "Translation",
    required_level: 1,
    time_estimate: "15 min",
    created_at: "3 hours ago",
    ai_assist: false,
    icon: "🌐",
    iconBg: "bg-rose-100 text-rose-600",
    type: "micro",
    tags: ["Quick Task"],
  },
  {
    id: "3",
    title: "Emotional Tone Scoring",
    description:
      "Score the emotional nuance of human-AI chat transcripts to calibrate empathy response models.",
    budget: 85,
    difficulty: "hard",
    category: "Data Labeling",
    required_level: 4,
    time_estimate: "2 hours",
    created_at: "30 mins ago",
    ai_assist: true,
    icon: "💜",
    iconBg: "bg-purple-100 text-purple-600",
    type: "large",
    tags: ["AI Recommended"],
  },
  {
    id: "4",
    title: "Rare Specimen Tagging",
    description:
      "Identify and categorize microscopic organisms in high-resolution biological imagery for environmental research.",
    budget: 60,
    difficulty: "medium",
    category: "Data Labeling",
    required_level: 3,
    time_estimate: "60 min",
    created_at: "2 hours ago",
    ai_assist: false,
    icon: "🧬",
    iconBg: "bg-emerald-100 text-emerald-600",
    type: "large",
    tags: ["High Demand"],
  },
  {
    id: "5",
    title: "Elite Legal Discovery Analysis",
    description:
      "Deep-dive review of historical case law archives for pattern recognition in intellectual property disputes. Requires legal background.",
    budget: 450,
    difficulty: "hard",
    category: "Legal",
    required_level: 5,
    time_estimate: "~6 hours",
    created_at: "15 mins ago",
    ai_assist: false,
    icon: "⚖️",
    iconBg: "bg-amber-100 text-amber-600",
    premium: true,
    type: "large",
    tags: ["Premium"],
  },
  {
    id: "6",
    title: "Fix React Navbar Bug",
    description:
      "Resolve mobile responsiveness issue in the main navigation component. The hamburger menu doesn't close after selecting a link.",
    budget: 25,
    difficulty: "easy",
    category: "Bug Fix",
    required_level: 1,
    time_estimate: "30 mins",
    created_at: "4 hours ago",
    ai_assist: true,
    icon: "🐛",
    iconBg: "bg-orange-100 text-orange-600",
    type: "micro",
    tags: ["Quick Task", "AI Recommended"],
  },
  {
    id: "7",
    title: "Sentiment Analysis Labels",
    description:
      "Classify 1,000 customer support tickets by sentiment and tag primary issue categories for NLP model training.",
    budget: 50,
    difficulty: "easy",
    category: "Data Labeling",
    required_level: 1,
    time_estimate: "3 hours",
    created_at: "5 hours ago",
    ai_assist: true,
    icon: "📊",
    iconBg: "bg-cyan-100 text-cyan-600",
    type: "large",
    tags: ["AI Recommended"],
  },
  {
    id: "8",
    title: "Review Authentication Module",
    description:
      "Conduct a thorough code review of the JWT authentication implementation. Check for security vulnerabilities.",
    budget: 95,
    difficulty: "hard",
    category: "Code Review",
    required_level: 3,
    time_estimate: "4 hours",
    created_at: "1 day ago",
    ai_assist: false,
    icon: "🔒",
    iconBg: "bg-red-100 text-red-600",
    type: "large",
  },
  {
    id: "9",
    title: "Image Quality Assessment",
    description:
      "Rate image quality and identify corrupted or low-resolution photos for a product catalog cleanup project.",
    budget: 8.5,
    difficulty: "easy",
    category: "Data Labeling",
    required_level: 1,
    time_estimate: "20 min",
    created_at: "30 mins ago",
    ai_assist: false,
    icon: "📸",
    iconBg: "bg-pink-100 text-pink-600",
    type: "micro",
    tags: ["Quick Task", "High Demand"],
  },
  {
    id: "10",
    title: "Chatbot Response Evaluation",
    description:
      "Evaluate AI chatbot responses for accuracy, relevance, and helpfulness using a structured rubric.",
    budget: 22,
    difficulty: "medium",
    category: "Data Labeling",
    required_level: 2,
    time_estimate: "2 hours",
    created_at: "2 hours ago",
    ai_assist: true,
    icon: "🤖",
    iconBg: "bg-violet-100 text-violet-600",
    type: "micro",
    tags: ["AI Recommended"],
  },
  {
    id: "11",
    title: "API Documentation Review",
    description:
      "Review and improve API documentation for clarity, completeness, and code example accuracy.",
    budget: 75,
    difficulty: "medium",
    category: "Code Review",
    required_level: 2,
    time_estimate: "3 hours",
    created_at: "45 mins ago",
    ai_assist: false,
    icon: "📚",
    iconBg: "bg-indigo-100 text-indigo-600",
    type: "large",
  },
  {
    id: "12",
    title: "UI Component Testing",
    description:
      "Test responsive design across multiple devices and screen sizes for a new React component library.",
    budget: 40,
    difficulty: "medium",
    category: "Testing",
    required_level: 2,
    time_estimate: "2.5 hours",
    created_at: "1 hour ago",
    ai_assist: false,
    icon: "🧪",
    iconBg: "bg-yellow-100 text-yellow-600",
    type: "large",
    tags: ["High Demand"],
  },
];
