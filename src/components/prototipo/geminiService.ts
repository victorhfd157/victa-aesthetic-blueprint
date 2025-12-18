import { LessonContent } from "./types";
import { UNIT_1_CONTENT, UNIT_2_CONTENT, UNIT_3_CONTENT } from "./constants";

// --- Image Generation Helper ---
export const generateCoverImage = async (prompt: string): Promise<string | null> => {
    if (prompt.includes("Unit 1")) return "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
    if (prompt.includes("Unit 2")) return "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
    if (prompt.includes("Unit 3")) return "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

    return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
}

// --- TTS Helper (uses browser's speech synthesis) ---
export const generateSpeech = async (text: string): Promise<ArrayBuffer | null> => {
    // Always return null to use browser's native speech synthesis
    // The LessonSteps component handles the fallback correctly
    return null;
};

// --- Content Generation ---
export const generateLessonContent = async (unitTitle: string): Promise<LessonContent> => {
  if (unitTitle.includes("Unit 1")) return UNIT_1_CONTENT;
  if (unitTitle.includes("Unit 2")) return UNIT_2_CONTENT;
  if (unitTitle.includes("Unit 3")) return UNIT_3_CONTENT;

  // Fallback to Unit 1
  return { ...UNIT_1_CONTENT, unitTitle: unitTitle };
};
