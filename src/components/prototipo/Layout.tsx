import React from 'react';
import { StepType, STEP_TITLES, STEPS_ORDER } from './types';
import { CheckCircle, Circle, ChevronLeft, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentStep: StepType;
  completedSteps: Set<StepType>;
  onStepChange: (step: StepType) => void;
  unitTitle: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentStep,
  completedSteps,
  onStepChange,
  unitTitle,
}) => {
  const currentIndex = STEPS_ORDER.indexOf(currentStep);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      onStepChange(STEPS_ORDER[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < STEPS_ORDER.length - 1) {
      onStepChange(STEPS_ORDER[currentIndex + 1]);
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg flex flex-col">
        <div className="p-5 border-b border-slate-200">
          <h1 className="text-lg font-bold text-blue-800 truncate" title={unitTitle}>
            {unitTitle}
          </h1>
          <p className="text-xs text-slate-500 mt-1">AI-Generated Lesson</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {STEPS_ORDER.map((step, index) => {
            const isActive = step === currentStep;
            const isCompleted = completedSteps.has(step);
            return (
              <button
                key={step}
                onClick={() => onStepChange(step)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : isCompleted
                    ? 'bg-green-50 text-green-800 hover:bg-green-100'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {isCompleted && !isActive ? (
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                ) : (
                  <Circle
                    className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`}
                  />
                )}
                <span className="truncate">
                  {index + 1}. {STEP_TITLES[step]}
                </span>
              </button>
            );
          })}
        </nav>
        {/* Navigation Controls */}
        <div className="p-4 border-t border-slate-200 flex gap-2">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === STEPS_ORDER.length - 1}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">{children}</main>
    </div>
  );
};
