export interface VocabularyItem {
  word: string;
  translation: string;
  example: string;
  imageUrl: string;
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  structure: {
    form: string;
    rule: string;
  }[];
  examples: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TextContent {
  title: string;
  body: string;
  questions: QuizQuestion[];
}

export interface ListeningContent {
  title: string;
  transcript: string;
  questions: QuizQuestion[];
}

export interface WritingTask {
  prompt: string;
  minWords: number;
  rubric: string[];
}

export interface GapFillSentence {
  sentenceParts: string[];
  answer: string;
  options?: string[];
}

export interface Flashcard {
  front: string;
  back: string;
  example: string;
}

export interface Slide {
  title: string;
  bullets: string[];
  speakerNotes: string;
}

export interface LessonContent {
  unitTitle: string;
  unitTopic: string;
  presentation: Slide[];
  vocabulary: VocabularyItem[];
  flashcards: Flashcard[];
  grammarContext: { sentences: string[]; description: string };
  grammarStructure: GrammarPoint;
  quiz: QuizQuestion[];
  reading: TextContent;
  gapFill: GapFillSentence[];
  listening: ListeningContent;
  writing: WritingTask;
}

export enum StepType {
  Presentation = 'presentation',
  Vocabulary = 'vocabulary',
  Flashcards = 'flashcards',
  GrammarContext = 'grammarContext',
  GrammarStructure = 'grammarStructure',
  Quiz = 'quiz',
  Reading = 'reading',
  GapFill = 'gapFill',
  Listening = 'listening',
  Writing = 'writing',
}

export const STEPS_ORDER = [
  StepType.Presentation,
  StepType.Vocabulary,
  StepType.Flashcards,
  StepType.GrammarContext,
  StepType.GrammarStructure,
  StepType.Quiz,
  StepType.Reading,
  StepType.GapFill,
  StepType.Listening,
  StepType.Writing,
];

export const STEP_TITLES: Record<StepType, string> = {
  [StepType.Presentation]: 'Topic Introduction',
  [StepType.Vocabulary]: 'Vocabulary Presentation',
  [StepType.Flashcards]: 'Flashcard Drill',
  [StepType.GrammarContext]: 'Grammar in Context',
  [StepType.GrammarStructure]: 'Grammar Structure',
  [StepType.Quiz]: 'Knowledge Check',
  [StepType.Reading]: 'Reading Comprehension',
  [StepType.GapFill]: 'Practice: Gap Fill',
  [StepType.Listening]: 'Listening Comprehension',
  [StepType.Writing]: 'Writing Task',
};
