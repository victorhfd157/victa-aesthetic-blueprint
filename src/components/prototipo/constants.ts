export const AVAILABLE_TOPICS = [
  "Daily Routines and Habits",
  "Travel and Tourism",
  "Food and Cooking",
  "Health and Fitness",
  "Technology and Social Media",
  "Environment and Sustainability",
  "Work and Careers",
  "Hobbies and Leisure Activities",
  "Education and Learning",
  "Relationships and Family",
];

export const AVAILABLE_LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
export type LanguageLevel = (typeof AVAILABLE_LEVELS)[number];

export const LEVEL_DESCRIPTIONS: Record<LanguageLevel, string> = {
  A1: "Beginner - Basic phrases and vocabulary",
  A2: "Elementary - Simple everyday situations",
  B1: "Intermediate - Main points on familiar matters",
  B2: "Upper-Intermediate - Complex texts and interactions",
  C1: "Advanced - Wide range of demanding, longer texts",
};
