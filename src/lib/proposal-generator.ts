import { type Task } from "@/lib/mock-data";
import { type ProposalFormData } from "@/components/ProposalForm";

/**
 * AI Proposal Generator
 * Generates a complete proposal based on task data
 */

const SKILL_MAPPING: Record<string, string[]> = {
  "Data Labeling": [
    "Data Annotation",
    "Attention to Detail",
    "Quality Assurance",
  ],
  Translation: ["Translation", "Copywriting", "Proofreading"],
  "Code Review": ["Code Review", "TypeScript", "Bug Fixing"],
  "Bug Fix": ["Bug Fixing", "React", "Debugging"],
  "UI/UX Design": ["UI/UX", "Design", "Figma"],
  "Content Writing": ["Content Writing", "Copywriting", "SEO"],
  Testing: ["Testing", "QA", "Attention to Detail"],
  Research: ["Research", "Analysis", "Data Analysis"],
  Legal: ["Legal Analysis", "Research", "Attention to Detail"],
};

const PORTFOLIO_PLACEHOLDERS: Record<string, { label: string; url: string }[]> =
  {
    "Data Labeling": [
      { label: "ML Dataset Project", url: "https://example.com/ml-project" },
      { label: "Annotation Portfolio", url: "https://example.com/portfolio" },
    ],
    Translation: [
      { label: "Translation Samples", url: "https://example.com/samples" },
      { label: "Language Portfolio", url: "https://example.com/languages" },
    ],
    "Code Review": [
      { label: "GitHub Profile", url: "https://github.com/username" },
      { label: "Code Review Case Study", url: "https://example.com/reviews" },
    ],
    "Bug Fix": [
      { label: "GitHub Issues Fixed", url: "https://github.com/username" },
      { label: "Bug Fix Portfolio", url: "https://example.com/bugfixes" },
    ],
    "UI/UX Design": [
      { label: "Figma Portfolio", url: "https://figma.com/@username" },
      { label: "Design Case Studies", url: "https://example.com/design" },
    ],
    "Content Writing": [
      { label: "Writing Samples", url: "https://example.com/writing" },
      { label: "Medium Profile", url: "https://medium.com/@username" },
    ],
    Testing: [
      { label: "QA Portfolio", url: "https://example.com/qa" },
      { label: "Test Case Examples", url: "https://example.com/tests" },
    ],
    Research: [
      { label: "Research Papers", url: "https://example.com/research" },
      { label: "Analysis Portfolio", url: "https://example.com/analysis" },
    ],
    Legal: [
      { label: "Legal Analysis Case Study", url: "https://example.com/legal" },
      { label: "Research Database", url: "https://example.com/research" },
    ],
  };

function generateProposal(task: Task): string {
  const taskType = task.category || "this task";
  const difficulty = task.difficulty;

  const introductions = [
    `I'm an experienced freelancer with expertise in ${taskType}. I've successfully completed numerous similar projects and understand the nuances of delivering high-quality work.`,
    `With proven experience in ${taskType}, I'm confident in delivering excellence for your project. I take pride in attention to detail and consistent quality.`,
    `As a skilled professional in ${taskType}, I have a track record of exceeding client expectations and delivering results that matter.`,
  ];

  const approaches = {
    easy: `I'll execute this efficiently, leveraging my experience to deliver quality results quickly without compromising accuracy.`,
    medium: `I'll break this down into manageable phases, ensuring thorough quality checks at each stage. My approach balances speed with precision.`,
    hard: `I'll implement a detailed, methodical approach—starting with deep analysis, then execution, and comprehensive quality assurance throughout. I'm prepared for complexity.`,
  };

  const closings = [
    "I'm ready to start immediately and maintain clear communication throughout the project.",
    "I'm excited to contribute to this project and deliver work that exceeds your expectations.",
    "Let's collaborate to make this project a success. I'm available and ready to begin.",
  ];

  const intro = introductions[Math.floor(Math.random() * introductions.length)];
  const approach = approaches[difficulty];
  const closing =
    closings[Math.floor(Math.random() * closings.length)];

  return `${intro}

I understand you need ${task.title.toLowerCase()}. Based on your requirements, I recognize the importance of quality and thoroughness. ${approach}

${closing}`;
}

function extractSkills(task: Task): string[] {
  const categorySkills = SKILL_MAPPING[task.category] || [
    "Problem Solving",
    "Attention to Detail",
  ];

  // Add difficulty-based skills
  const difficultySkills = {
    easy: [],
    medium: ["Project Management"],
    hard: ["Strategic Thinking", "Problem Analysis"],
  };

  const allSkills = [
    ...categorySkills,
    ...difficultySkills[task.difficulty],
  ];

  // Remove duplicates
  return [...new Set(allSkills)];
}

function calculateDeliveryTime(task: Task): string {
  const difficultyMap = {
    easy: "1-2 hours",
    medium: "1-2 days",
    hard: "2-4 days",
  };

  return difficultyMap[task.difficulty];
}

function calculateSuggestedPrice(task: Task): number {
  // If fixed price, return the budget
  if (task.paymentType === "fixed") {
    return task.budget;
  }

  // Otherwise, suggest ±10% of budget
  const adjustment = Math.random() > 0.5 ? 1.05 : 0.95;
  return Math.round(task.budget * adjustment * 100) / 100;
}

function getPortfolioLinks(task: Task): { label: string; url: string }[] {
  const defaultLinks = [
    { label: "Portfolio Website", url: "https://example.com/portfolio" },
    { label: "GitHub Profile", url: "https://github.com/username" },
  ];

  return PORTFOLIO_PLACEHOLDERS[task.category] || defaultLinks;
}

function getPlaceholderImages(): string[] {
  return [
    "https://pixabay.com/images/download/slavan_art-frog-10180402_1920.jpg",
    "https://pixabay.com/images/download/slavan_art-frog-10180402_1920.jpg",
    "https://pixabay.com/images/download/slavan_art-frog-10180402_1920.jpg",
  ];
}

/**
 * Main function to generate complete proposal data
 */
export function generateProposalData(task: Task): ProposalFormData {
  return {
    proposal: generateProposal(task),
    skills: extractSkills(task),
    deliveryTime: calculateDeliveryTime(task),
    suggestedPrice: calculateSuggestedPrice(task),
    links: getPortfolioLinks(task),
    images: getPlaceholderImages(),
  };
}
