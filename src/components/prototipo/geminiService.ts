import { LessonContent } from "./types";
import { LanguageLevel } from "./constants";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

const GENERATION_PROMPT = `You are an expert English as a Second Language (ESL) curriculum designer. Your task is to generate comprehensive, engaging, and pedagogically sound lesson content for a given topic and CEFR level. The content should be interactive and suitable for an online learning platform.

The lesson must include the following 10 sections. Provide the output as a single, valid JSON object matching the TypeScript interface below. Do not include any text outside of the JSON object.

**Output JSON Structure (TypeScript Interface):**
\`\`\`typescript
interface LessonContent {
  unitTitle: string; // A creative title for the unit
  unitTopic: string; // The original topic
  presentation: Slide[]; // 3-5 slides introducing the topic
  vocabulary: VocabularyItem[]; // Exactly 6 vocabulary items with example sentences and placeholder image URLs
  flashcards: Flashcard[]; // Exactly 8 flashcards for drilling key vocabulary/phrases
  grammarContext: { sentences: string[]; description: string }; // 3 sentences from the topic that naturally demonstrate the grammar point, plus a brief description
  grammarStructure: GrammarPoint; // A detailed grammar explanation with structure and examples
  quiz: QuizQuestion[]; // Exactly 5 multiple-choice questions testing vocabulary and grammar
  reading: TextContent; // A short text (150-200 words for A1/A2, 250-350 for B1/B2/C1) relevant to the topic, with 3 comprehension questions
  gapFill: GapFillSentence[]; // Exactly 5 gap-fill sentences practicing vocabulary and grammar
  listening: ListeningContent; // A transcript of a short dialogue or monologue (100-150 words) with 3 comprehension questions
  writing: WritingTask; // A writing prompt with minimum word count and rubric points
}

interface Slide { title: string; bullets: string[]; speakerNotes: string; }
interface VocabularyItem { word: string; translation: string; example: string; imageUrl: string; }
interface Flashcard { front: string; back: string; example: string; }
interface GrammarPoint { title: string; explanation: string; structure: { form: string; rule: string; }[]; examples: string[]; }
interface QuizQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; }
interface TextContent { title: string; body: string; questions: QuizQuestion[]; }
interface GapFillSentence { sentenceParts: string[]; answer: string; options?: string[]; }
interface ListeningContent { title: string; transcript: string; questions: QuizQuestion[]; }
interface WritingTask { prompt: string; minWords: number; rubric: string[]; }
\`\`\`

**Important Instructions:**
- For \`imageUrl\`, use placeholder URLs like "https://placehold.co/400x300/E2E8F0/475569?text=Word+Here". Replace "Word+Here" with the actual vocabulary word (use + for spaces).
- For \`gapFill\`, \`sentenceParts\` is an array where the answer fits between the parts. e.g., \`sentenceParts: ["I am", "to the store"]\` with answer "going" means "I am _going_ to the store".
- Tailor vocabulary complexity, sentence length, and grammar to the specified CEFR level.
- Ensure all content is thematically connected to the topic.
- \`correctAnswer\` for quiz questions is a 0-indexed integer.

Now, generate the lesson content.
`;

export async function generateLessonContent(
  topic: string,
  level: LanguageLevel
): Promise<LessonContent> {
  if (!API_KEY) {
    throw new Error(
      "API Key not configured. Please set VITE_GEMINI_API_KEY in your environment."
    );
  }

  const userPrompt = `Generate a complete ESL lesson for the topic "${topic}" at CEFR level "${level}".`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: GENERATION_PROMPT }] },
          { role: "model", parts: [{ text: "I understand. I will generate the lesson content as a JSON object. Please provide the topic and level." }] },
          { role: "user", parts: [{ text: userPrompt }] },
        ],
        generationConfig: {
          responseMimeType: "application/json",
        },
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Gemini API Error:", errorBody);
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();
  const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!jsonText) {
    throw new Error("Could not parse response from AI.");
  }

  try {
    return JSON.parse(jsonText) as LessonContent;
  } catch {
    console.error("Failed to parse JSON:", jsonText);
    throw new Error("AI response was not valid JSON.");
  }
}
