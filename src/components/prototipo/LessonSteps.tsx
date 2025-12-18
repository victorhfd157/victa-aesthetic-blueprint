import React, { useState, useEffect, useCallback } from 'react';
import {
  LessonContent,
  StepType,
  QuizQuestion,
  GapFillSentence,
  Flashcard,
  Slide,
} from './types';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Volume2,
  Send,
  Lightbulb,
  BookOpen,
  Brain,
  MessageSquare,
  PenTool,
  Headphones,
  Edit3,
  Image as ImageIcon,
  Loader2,
} from 'lucide-react';

interface StepProps {
  content: LessonContent;
  onComplete: () => void;
}

// --- Reusable Components ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 ${className}`}>{children}</div>
);

const SectionTitle: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}> = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">{icon}</div>
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
  </div>
);

const OptionButton: React.FC<{
  label: string;
  onClick: () => void;
  isSelected: boolean;
  isCorrect: boolean | null;
  disabled: boolean;
}> = ({ label, onClick, isSelected, isCorrect, disabled }) => {
  let bgColor = 'bg-slate-50 hover:bg-slate-100 border-slate-200';
  if (isSelected) {
    bgColor =
      isCorrect === true
        ? 'bg-green-100 border-green-500 ring-2 ring-green-500'
        : isCorrect === false
        ? 'bg-red-100 border-red-500 ring-2 ring-red-500'
        : 'bg-blue-100 border-blue-500 ring-2 ring-blue-500';
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${
        disabled && !isSelected ? 'opacity-60 cursor-not-allowed' : ''
      }`}
    >
      {label}
    </button>
  );
};

// --- Step Components ---

export const PresentationStep: React.FC<StepProps> = ({ content, onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = content.presentation;

  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      onComplete();
    }
  }, [currentSlide, slides.length, onComplete]);

  return (
    <Card>
      <SectionTitle
        icon={<BookOpen />}
        title="Topic Introduction"
        subtitle={`Slide ${currentSlide + 1} of ${slides.length}`}
      />
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg p-8 min-h-[300px] flex flex-col justify-between shadow-inner">
        <div>
          <h3 className="text-2xl font-bold mb-4">{slides[currentSlide]?.title}</h3>
          <ul className="space-y-3">
            {slides[currentSlide]?.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-blue-300 rounded-full shrink-0"></span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-blue-200 mt-6 italic border-t border-blue-500 pt-4">
          Speaker Notes: {slides[currentSlide]?.speakerNotes}
        </p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setCurrentSlide((s) => Math.max(0, s - 1))}
          disabled={currentSlide === 0}
          className="flex items-center gap-1 px-4 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
        >
          <ChevronLeft /> Previous
        </button>
        <button
          onClick={() => setCurrentSlide((s) => Math.min(slides.length - 1, s + 1))}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Next <ChevronRight />
        </button>
      </div>
    </Card>
  );
};

export const VocabularyStep: React.FC<StepProps> = ({ content, onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  return (
    <Card>
      <SectionTitle
        icon={<ImageIcon />}
        title="Vocabulary"
        subtitle="Learn these key words for the topic."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.vocabulary.map((item, i) => (
          <div
            key={i}
            className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={item.imageUrl}
              alt={item.word}
              className="w-full h-32 object-cover bg-slate-100"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg text-blue-800">{item.word}</h4>
              <p className="text-sm text-slate-500 italic">{item.translation}</p>
              <p className="text-sm text-slate-600 mt-2 border-l-2 border-blue-200 pl-2">
                "{item.example}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const FlashcardsStep: React.FC<StepProps> = ({ content, onComplete }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const flashcards: Flashcard[] = content.flashcards;

  useEffect(() => {
    if (currentCard === flashcards.length - 1 && isFlipped) {
      onComplete();
    }
  }, [currentCard, flashcards.length, isFlipped, onComplete]);

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setIsFlipped(false);
      setCurrentCard((c) => c + 1);
    }
  };

  return (
    <Card>
      <SectionTitle
        icon={<Brain />}
        title="Flashcard Drill"
        subtitle={`Card ${currentCard + 1} of ${flashcards.length}`}
      />
      <div
        className="relative w-full max-w-lg mx-auto h-64 cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex flex-col items-center justify-center p-6 backface-hidden shadow-xl"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="text-3xl font-bold text-center">{flashcards[currentCard]?.front}</p>
            <p className="text-sm mt-4 opacity-70">Click to flip</p>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 bg-white border-2 border-indigo-200 text-slate-800 rounded-xl flex flex-col items-center justify-center p-6 backface-hidden shadow-xl rotate-y-180"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-2xl font-bold text-center text-indigo-700">
              {flashcards[currentCard]?.back}
            </p>
            <p className="text-sm text-slate-500 mt-4 italic text-center">
              "{flashcards[currentCard]?.example}"
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => {
            setIsFlipped(false);
            setCurrentCard((c) => Math.max(0, c - 1));
          }}
          disabled={currentCard === 0}
          className="px-5 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextCard}
          disabled={currentCard === flashcards.length - 1}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>
    </Card>
  );
};

export const GrammarContextStep: React.FC<StepProps> = ({ content, onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  return (
    <Card>
      <SectionTitle
        icon={<Lightbulb />}
        title="Grammar in Context"
        subtitle="Observe how the grammar point appears naturally."
      />
      <p className="text-slate-600 mb-4">{content.grammarContext.description}</p>
      <div className="space-y-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
        {content.grammarContext.sentences.map((s, i) => (
          <p key={i} className="text-lg text-amber-900 italic">
            "{s}"
          </p>
        ))}
      </div>
    </Card>
  );
};

export const GrammarStructureStep: React.FC<StepProps> = ({ content, onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const grammar = content.grammarStructure;
  return (
    <Card>
      <SectionTitle
        icon={<BookOpen />}
        title={grammar.title}
        subtitle="Understand the structure."
      />
      <p className="text-slate-700 mb-6">{grammar.explanation}</p>
      <div className="space-y-3 mb-6">
        {grammar.structure.map((s, i) => (
          <div key={i} className="p-3 bg-slate-100 rounded-lg">
            <p className="font-mono font-bold text-blue-700">{s.form}</p>
            <p className="text-sm text-slate-600">{s.rule}</p>
          </div>
        ))}
      </div>
      <h4 className="font-semibold text-slate-800 mb-2">Examples:</h4>
      <ul className="list-disc list-inside space-y-1 text-slate-600">
        {grammar.examples.map((ex, i) => (
          <li key={i}>{ex}</li>
        ))}
      </ul>
    </Card>
  );
};

const QuizComponent: React.FC<{
  questions: QuizQuestion[];
  onComplete: () => void;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}> = ({ questions, onComplete, title, subtitle, icon }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (currentQ === questions.length - 1) {
      onComplete();
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentQ((q) => Math.min(questions.length - 1, q + 1));
  };

  const q = questions[currentQ];
  const isCorrect = selectedAnswer === q.correctAnswer;

  return (
    <Card>
      <SectionTitle icon={icon} title={title} subtitle={subtitle} />
      <div className="mb-2 text-sm text-slate-500">
        Question {currentQ + 1} of {questions.length}
      </div>
      <p className="text-lg font-semibold text-slate-800 mb-4">{q.question}</p>
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <OptionButton
            key={i}
            label={opt}
            onClick={() => handleSelect(i)}
            isSelected={selectedAnswer === i}
            isCorrect={showFeedback ? i === q.correctAnswer : null}
            disabled={showFeedback}
          />
        ))}
      </div>
      {showFeedback && (
        <div
          className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
            isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {isCorrect ? <CheckCircle className="shrink-0" /> : <XCircle className="shrink-0" />}
          <div>
            <p className="font-semibold">{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
            <p className="text-sm">{q.explanation}</p>
          </div>
        </div>
      )}
      {showFeedback && currentQ < questions.length - 1 && (
        <button
          onClick={nextQuestion}
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg"
        >
          Next Question
        </button>
      )}
    </Card>
  );
};

export const QuizStep: React.FC<StepProps> = ({ content, onComplete }) => (
  <QuizComponent
    questions={content.quiz}
    onComplete={onComplete}
    title="Knowledge Check"
    subtitle="Test your understanding of vocabulary and grammar."
    icon={<MessageSquare />}
  />
);

export const ReadingStep: React.FC<StepProps> = ({ content, onComplete }) => {
  const [showQuestions, setShowQuestions] = useState(false);
  return (
    <Card>
      <SectionTitle
        icon={<BookOpen />}
        title={content.reading.title}
        subtitle="Read the text carefully."
      />
      <div className="prose prose-slate max-w-none bg-slate-50 p-6 rounded-lg border mb-4">
        <p className="whitespace-pre-line">{content.reading.body}</p>
      </div>
      {!showQuestions ? (
        <button
          onClick={() => setShowQuestions(true)}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg"
        >
          I've finished reading. Show questions.
        </button>
      ) : (
        <QuizComponent
          questions={content.reading.questions}
          onComplete={onComplete}
          title="Comprehension Questions"
          subtitle="Answer based on the text."
          icon={<MessageSquare />}
        />
      )}
    </Card>
  );
};

export const GapFillStep: React.FC<StepProps> = ({ content, onComplete }) => {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const sentences: GapFillSentence[] = content.gapFill;
  const s = sentences[currentSentence];

  const checkAnswer = () => {
    setShowFeedback(true);
    if (currentSentence === sentences.length - 1) {
      onComplete();
    }
  };

  const nextSentence = () => {
    setUserAnswer('');
    setShowFeedback(false);
    setCurrentSentence((c) => c + 1);
  };

  const isCorrect = userAnswer.toLowerCase().trim() === s.answer.toLowerCase().trim();

  return (
    <Card>
      <SectionTitle
        icon={<PenTool />}
        title="Gap Fill Practice"
        subtitle={`Sentence ${currentSentence + 1} of ${sentences.length}`}
      />
      <div className="text-xl text-slate-700 mb-4 flex flex-wrap items-center gap-2">
        <span>{s.sentenceParts[0]}</span>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={showFeedback}
          className="border-b-2 border-blue-500 px-2 py-1 text-center w-32 focus:outline-none bg-transparent"
          placeholder="..."
        />
        <span>{s.sentenceParts[1]}</span>
      </div>
      {s.options && !showFeedback && (
        <div className="flex flex-wrap gap-2 mb-4">
          {s.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setUserAnswer(opt)}
              className="px-3 py-1 bg-slate-200 rounded-full text-sm hover:bg-slate-300"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
      {!showFeedback ? (
        <button
          onClick={checkAnswer}
          disabled={!userAnswer}
          className="w-full py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
        >
          Check
        </button>
      ) : (
        <div
          className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          <p className="font-bold">{isCorrect ? 'Correct!' : `Incorrect. The answer is: ${s.answer}`}</p>
        </div>
      )}
      {showFeedback && currentSentence < sentences.length - 1 && (
        <button onClick={nextSentence} className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg">
          Next Sentence
        </button>
      )}
    </Card>
  );
};

export const ListeningStep: React.FC<StepProps> = ({ content, onComplete }) => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(content.listening.transcript);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Your browser does not support text-to-speech.');
    }
  }, [content.listening.transcript]);

  return (
    <Card>
      <SectionTitle
        icon={<Headphones />}
        title={content.listening.title}
        subtitle="Listen to the audio and answer questions."
      />
      <div className="flex gap-4 mb-4">
        <button
          onClick={speak}
          disabled={isPlaying}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-70"
        >
          {isPlaying ? <Loader2 className="animate-spin" /> : <Volume2 />}
          {isPlaying ? 'Playing...' : 'Play Audio'}
        </button>
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="px-4 py-2 border border-slate-300 rounded-lg"
        >
          {showTranscript ? 'Hide' : 'Show'} Transcript
        </button>
      </div>
      {showTranscript && (
        <div className="p-4 bg-slate-50 rounded-lg mb-4 text-slate-700 italic">
          "{content.listening.transcript}"
        </div>
      )}
      {!showQuestions ? (
        <button
          onClick={() => setShowQuestions(true)}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg"
        >
          I'm ready for the questions.
        </button>
      ) : (
        <QuizComponent
          questions={content.listening.questions}
          onComplete={onComplete}
          title="Listening Questions"
          subtitle="Answer based on what you heard."
          icon={<MessageSquare />}
        />
      )}
    </Card>
  );
};

export const WritingStep: React.FC<StepProps> = ({ content, onComplete }) => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const task = content.writing;

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete();
  };

  return (
    <Card>
      <SectionTitle
        icon={<Edit3 />}
        title="Writing Task"
        subtitle={`Minimum ${task.minWords} words.`}
      />
      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
        <p className="font-semibold text-amber-900">{task.prompt}</p>
      </div>
      <h4 className="font-semibold text-slate-700 mb-2">Rubric:</h4>
      <ul className="list-disc list-inside text-sm text-slate-600 mb-4 space-y-1">
        {task.rubric.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitted}
        rows={8}
        className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-slate-100"
        placeholder="Write your response here..."
      />
      <div className="flex justify-between items-center mt-2">
        <span
          className={`text-sm ${wordCount >= task.minWords ? 'text-green-600' : 'text-slate-500'}`}
        >
          Word count: {wordCount} / {task.minWords}
        </span>
        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={wordCount < task.minWords}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
          >
            <Send size={16} /> Submit
          </button>
        )}
      </div>
      {submitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          <p className="font-semibold">Submitted!</p>
          <p className="text-sm">Your writing has been recorded. Great work completing the lesson!</p>
        </div>
      )}
    </Card>
  );
};
