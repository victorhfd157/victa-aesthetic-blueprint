import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { generateLessonContent, generateCoverImage } from './geminiService';
import { LessonContent, STEPS_ORDER, STEP_TITLES, StepType } from './types';
import { AVAILABLE_UNITS } from './constants';
import { 
    VocabularyView, 
    GrammarContextView, 
    GrammarStructureView, 
    QuizView, 
    ReadingView, 
    GapFillView, 
    ListeningView, 
    WritingView,
    FlashcardsView,
    PresentationView
} from './LessonSteps';
import { CheckCircle, Lock, PlayCircle, Loader2, ArrowRight, Image as ImageIcon, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

const UnitCard: React.FC<{ unit: { id: string, title: string }, onSelect: () => void }> = ({ unit, onSelect }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loadingImage, setLoadingImage] = useState(true);

    useEffect(() => {
        let mounted = true;
        const fetchImage = async () => {
            const url = await generateCoverImage(unit.title);
            if (mounted) {
                setImageUrl(url);
                setLoadingImage(false);
            }
        };
        fetchImage();
        return () => { mounted = false; };
    }, [unit.title]);

    return (
        <div 
            className="group relative bg-white rounded-[2rem] shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 border border-slate-100/50" 
            onClick={onSelect}
        >
            <div className="h-60 bg-slate-50 relative overflow-hidden">
                {loadingImage ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50">
                        <Loader2 size={28} className="mb-3 text-indigo-500 animate-spin"/>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Loading Visuals</span>
                    </div>
                ) : imageUrl ? (
                    <>
                         <img src={imageUrl} alt={unit.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                         <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition-colors duration-500"></div>
                    </>
                ) : (
                     <div className="w-full h-full flex items-center justify-center bg-slate-100">
                        <ImageIcon size={48} className="text-slate-300" />
                     </div>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-md p-5 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <PlayCircle size={32} className="text-indigo-600 fill-indigo-100" />
                    </div>
                </div>
                
                <div className="absolute top-5 left-5">
                    <span className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md text-indigo-600 shadow-sm">
                        Business English
                    </span>
                </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
                <h4 className="font-bold text-2xl text-slate-800 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">{unit.title}</h4>
                
                <div className="flex items-center gap-4 mt-auto pt-6">
                     <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
                        <Sparkles size={12} className="text-amber-400 fill-amber-400" />
                        10 Steps
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
                        <GraduationCap size={14} className="text-slate-400" />
                        B1-B2
                    </span>
                </div>
            </div>
        </div>
    );
};

const Dashboard: React.FC<{ onSelectUnit: (id: string, title: string) => void }> = ({ onSelectUnit }) => {
    return (
        <div className="space-y-20 pb-12 animate-in fade-in duration-700">
            <section className="relative rounded-[3rem] overflow-hidden bg-[#0F172A] shadow-2xl shadow-indigo-900/20 min-h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute -top-24 -right-24 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
                    <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl mix-blend-screen"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                </div>

                <div className="relative z-10 px-10 md:px-20 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
                            Welcome Back
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Master Professional <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-white">English Communication</span>
                        </h2>
                        <p className="text-slate-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl font-light">
                            Elevate your career with industry-specific modules designed for the modern workplace.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10 flex items-center gap-3">
                                Start Learning <ArrowRight size={20} />
                            </button>
                             <button className="bg-transparent border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors">
                                View Curriculum
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-3">Learning Modules</h3>
                        <p className="text-slate-500 text-lg">Select a unit to begin your tailored lesson plan</p>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{AVAILABLE_UNITS.length} Units Available</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {AVAILABLE_UNITS.map((unit) => (
                        <UnitCard key={unit.id} unit={unit} onSelect={() => onSelectUnit(unit.id, unit.title)} />
                    ))}
                    
                    <div className="border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center p-8 text-slate-400 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all cursor-not-allowed h-full min-h-[400px] group">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Lock size={32} className="text-slate-300 group-hover:text-indigo-300 transition-colors"/>
                        </div>
                        <span className="font-bold text-xl text-slate-500 mb-1">Coming Soon</span>
                        <span className="text-sm font-medium opacity-60">Advanced Modules unlocking...</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

const UnitPlayer: React.FC<{ unitTitle: string, onExit: () => void }> = ({ unitTitle, onExit }) => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<LessonContent | null>(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        let mounted = true;
        const load = async () => {
            setLoading(true);
            const data = await generateLessonContent(unitTitle);
            if (mounted) {
                setContent(data);
                setLoading(false);
            }
        };
        load();
        return () => { mounted = false; };
    }, [unitTitle]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in zoom-in duration-700">
                <div className="relative mb-8">
                    <div className="w-24 h-24 border-4 border-slate-100 border-t-indigo-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)] animate-pulse"></div>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Loading Lesson</h3>
                <p className="text-slate-500 font-medium">Preparing your content...</p>
            </div>
        );
    }

    if (!content) return <div>Error loading content.</div>;

    const currentStep = STEPS_ORDER[currentStepIndex];
    const progress = ((currentStepIndex + 1) / STEPS_ORDER.length) * 100;

    const handleNext = () => {
        if (currentStepIndex < STEPS_ORDER.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case StepType.Presentation: return <PresentationView slides={content.presentation} />;
            case StepType.Vocabulary: return <VocabularyView items={content.vocabulary} />;
            case StepType.Flashcards: return <FlashcardsView cards={content.flashcards} />;
            case StepType.GrammarContext: return <GrammarContextView content={content.grammarContext} />;
            case StepType.GrammarStructure: return <GrammarStructureView content={content.grammarStructure} />;
            case StepType.Quiz: return <QuizView content={content.quiz} />;
            case StepType.Reading: return <ReadingView content={content.reading} />;
            case StepType.GapFill: return <GapFillView content={content.gapFill} />;
            case StepType.Listening: return <ListeningView content={content.listening} />;
            case StepType.Writing: return <WritingView content={content.writing} />;
            default: return <div>Unknown Step</div>;
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-in fade-in slide-in-from-bottom-8 duration-700">
            <aside className="lg:col-span-3 sticky top-32">
                 <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-lg shadow-slate-200/50 border border-white/50 p-6">
                    <button onClick={onExit} className="text-xs font-bold text-slate-400 hover:text-indigo-600 mb-8 flex items-center gap-2 uppercase tracking-widest transition-colors group pl-2">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Dashboard
                    </button>
                    
                    <div className="px-2 mb-8">
                        <h2 className="font-extrabold text-slate-900 leading-[1.2] mb-2 text-xl tracking-tight">{content.unitTitle}</h2>
                        <p className="text-xs font-medium text-indigo-600 bg-indigo-50 inline-block px-3 py-1 rounded-full">{content.unitTopic}</p>
                    </div>
                    
                    <div className="mb-8 bg-slate-50 p-5 rounded-3xl border border-slate-100">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                            <span>Progress</span>
                            <span className="text-indigo-600">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-slate-200/70 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {STEPS_ORDER.map((step, idx) => {
                            const isActive = idx === currentStepIndex;
                            const isCompleted = idx < currentStepIndex;
                            
                            return (
                                <button
                                    key={step}
                                    onClick={() => setCurrentStepIndex(idx)}
                                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm transition-all text-left ${
                                        isActive 
                                            ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-200 transform scale-[1.02]' 
                                            : isCompleted 
                                                ? 'text-slate-600 hover:bg-slate-50 font-medium'
                                                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-500'
                                    }`}
                                >
                                    {isCompleted ? (
                                        <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                                    ) : isActive ? (
                                        <div className="w-4 h-4 rounded-full border-[3px] border-white shrink-0 animate-pulse"></div>
                                    ) : (
                                        <div className="w-4 h-4 rounded-full border-2 border-slate-200 shrink-0"></div>
                                    )}
                                    <span className="truncate tracking-tight">{STEP_TITLES[step]}</span>
                                </button>
                            );
                        })}
                    </nav>
                 </div>
            </aside>

            <div className="lg:col-span-9 space-y-8">
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 min-h-[700px] flex flex-col overflow-hidden relative">
                    <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/30 backdrop-blur-sm sticky top-0 z-20">
                        <div>
                            <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em] mb-2 block">
                                Step {currentStepIndex + 1} of {STEPS_ORDER.length}
                            </span>
                            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{STEP_TITLES[currentStep]}</h2>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                             <BookOpen size={20} />
                        </div>
                    </div>
                    
                    <div className="p-10 md:p-14 flex-1 relative z-10">
                        <div key={currentStep} className="animate-in fade-in slide-in-from-right-4 duration-500">
                             {renderStepContent()}
                        </div>
                    </div>

                    <div className="px-10 py-8 border-t border-slate-100 bg-slate-50/50 backdrop-blur-sm flex justify-between items-center sticky bottom-0 z-20">
                        <button 
                            onClick={handlePrev} 
                            disabled={currentStepIndex === 0}
                            className="px-8 py-4 rounded-2xl text-slate-500 font-bold hover:bg-white hover:text-slate-900 hover:shadow-lg hover:shadow-slate-200/50 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all active:scale-95 text-sm"
                        >
                            Back
                        </button>
                        <button 
                            onClick={handleNext}
                            disabled={currentStepIndex === STEPS_ORDER.length - 1}
                            className="px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 shadow-xl shadow-slate-900/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 transition-all active:scale-95 hover:-translate-y-1 text-sm"
                        >
                            {currentStepIndex === STEPS_ORDER.length - 1 ? 'Complete Unit' : 'Next Activity'}
                            {currentStepIndex < STEPS_ORDER.length - 1 && <ArrowRight size={18} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PrototipoApp: React.FC = () => {
    const [selectedUnit, setSelectedUnit] = useState<{ id: string; title: string } | null>(null);

    return (
        <Layout onHome={() => setSelectedUnit(null)}>
            {selectedUnit ? (
                <UnitPlayer unitTitle={selectedUnit.title} onExit={() => setSelectedUnit(null)} />
            ) : (
                <Dashboard onSelectUnit={(id, title) => setSelectedUnit({ id, title })} />
            )}
        </Layout>
    );
};

export default PrototipoApp;
