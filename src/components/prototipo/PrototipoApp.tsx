import React, { useState, useCallback } from 'react';
import { LessonContent, StepType, STEPS_ORDER } from './types';
import { AVAILABLE_TOPICS, AVAILABLE_LEVELS, LEVEL_DESCRIPTIONS, LanguageLevel } from './constants';
import { generateLessonContent } from './geminiService';
import { Layout } from './Layout';
import {
  PresentationStep,
  VocabularyStep,
  FlashcardsStep,
  GrammarContextStep,
  GrammarStructureStep,
  QuizStep,
  ReadingStep,
  GapFillStep,
  ListeningStep,
  WritingStep,
} from './LessonSteps';
import { Sparkles, Loader2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Dashboard Component
const Dashboard: React.FC<{
  onStartLesson: (topic: string, level: LanguageLevel) => void;
  isLoading: boolean;
  error: string | null;
}> = ({ onStartLesson, isLoading, error }) => {
  const [selectedTopic, setSelectedTopic] = useState(AVAILABLE_TOPICS[0]);
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel>('B1');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border border-white/20">
        <button
          onClick={() => navigate('/servicos')}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar ao Hub
        </button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AI Lesson Generator</h1>
          <p className="text-indigo-200">
            Powered by Google Gemini. Select a topic and level to generate a complete lesson.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-2">Select Topic</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none"
            >
              {AVAILABLE_TOPICS.map((topic) => (
                <option key={topic} value={topic} className="text-slate-900">
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-2">Select CEFR Level</label>
            <div className="grid grid-cols-5 gap-2">
              {AVAILABLE_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`p-3 rounded-lg font-bold transition-all ${
                    selectedLevel === level
                      ? 'bg-indigo-500 text-white ring-2 ring-indigo-300'
                      : 'bg-white/10 text-indigo-200 hover:bg-white/20'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <p className="text-xs text-indigo-300 mt-2 text-center">
              {LEVEL_DESCRIPTIONS[selectedLevel]}
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-200">
              <AlertTriangle />
              <span>{error}</span>
            </div>
          )}

          <button
            onClick={() => onStartLesson(selectedTopic, selectedLevel)}
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Generating Lesson (this may take a minute)...
              </>
            ) : (
              <>
                <Sparkles />
                Generate Lesson with AI
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const PrototipoApp: React.FC = () => {
  const [lessonContent, setLessonContent] = useState<LessonContent | null>(null);
  const [currentStep, setCurrentStep] = useState<StepType>(StepType.Presentation);
  const [completedSteps, setCompletedSteps] = useState<Set<StepType>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartLesson = async (topic: string, level: LanguageLevel) => {
    setIsLoading(true);
    setError(null);
    try {
      const content = await generateLessonContent(topic, level);
      setLessonContent(content);
      setCurrentStep(StepType.Presentation);
      setCompletedSteps(new Set());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteStep = useCallback(() => {
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
  }, [currentStep]);

  if (!lessonContent) {
    return <Dashboard onStartLesson={handleStartLesson} isLoading={isLoading} error={error} />;
  }

  const stepProps = { content: lessonContent, onComplete: handleCompleteStep };

  const renderStep = () => {
    switch (currentStep) {
      case StepType.Presentation:
        return <PresentationStep {...stepProps} />;
      case StepType.Vocabulary:
        return <VocabularyStep {...stepProps} />;
      case StepType.Flashcards:
        return <FlashcardsStep {...stepProps} />;
      case StepType.GrammarContext:
        return <GrammarContextStep {...stepProps} />;
      case StepType.GrammarStructure:
        return <GrammarStructureStep {...stepProps} />;
      case StepType.Quiz:
        return <QuizStep {...stepProps} />;
      case StepType.Reading:
        return <ReadingStep {...stepProps} />;
      case StepType.GapFill:
        return <GapFillStep {...stepProps} />;
      case StepType.Listening:
        return <ListeningStep {...stepProps} />;
      case StepType.Writing:
        return <WritingStep {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <Layout
      currentStep={currentStep}
      completedSteps={completedSteps}
      onStepChange={setCurrentStep}
      unitTitle={lessonContent.unitTitle}
    >
      {renderStep()}
    </Layout>
  );
};

export default PrototipoApp;
