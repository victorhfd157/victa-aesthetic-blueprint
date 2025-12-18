import React, { useState, useEffect } from 'react';
import { LessonContent, VocabularyItem, GrammarPoint, QuizQuestion, TextContent, ListeningContent, GapFillSentence, WritingTask, Flashcard, Slide } from './types';
import { Volume2, CheckCircle2, XCircle, Info, Pause, RefreshCw, Loader2, BookOpen, ChevronLeft, ChevronRight, Monitor, RotateCcw, MessageSquare, Shuffle, Edit3, Headphones, Keyboard, Settings2, Sparkles } from 'lucide-react';

const AudioPlayerButton: React.FC<{ text: string, className?: string, iconSize?: number, lightMode?: boolean }> = ({ text, className, iconSize = 20, lightMode = false }) => {
    const [loading, setLoading] = useState(false);
    const [playing, setPlaying] = useState(false);

    const playAudio = async () => {
        if (playing) {
            window.speechSynthesis.cancel();
            setPlaying(false);
            return;
        }

        setLoading(true);
        
        try {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.pitch = 1;
            
            // Get available voices and prefer a natural English voice
            const voices = window.speechSynthesis.getVoices();
            const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) 
                || voices.find(v => v.lang.startsWith('en-US'))
                || voices.find(v => v.lang.startsWith('en'));
            
            if (englishVoice) {
                utterance.voice = englishVoice;
            }
            
            utterance.onstart = () => {
                setPlaying(true);
                setLoading(false);
            };
            
            utterance.onend = () => setPlaying(false);
            utterance.onerror = (e) => {
                console.error("Speech error:", e);
                setPlaying(false);
                setLoading(false);
            };
            
            window.speechSynthesis.speak(utterance);
            
            // Fallback timeout in case onstart doesn't fire
            setTimeout(() => setLoading(false), 500);

        } catch (e) {
            console.error("Audio Playback Error", e);
            setPlaying(false);
            setLoading(false);
        }
    };

    const baseClasses = "transition-all duration-300 rounded-full p-3 shadow-md active:scale-95 z-20 flex items-center justify-center shrink-0";
    const lightClasses = playing 
        ? 'text-indigo-600 bg-white shadow-indigo-200 scale-110' 
        : 'text-white/80 bg-white/10 border border-white/20 hover:bg-white hover:text-indigo-600 hover:shadow-lg backdrop-blur-md';
    const darkClasses = playing 
        ? 'text-white bg-indigo-600 shadow-indigo-200 scale-110' 
        : 'text-slate-400 bg-white border border-slate-100 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-lg';

    return (
        <button 
            onClick={(e) => { e.stopPropagation(); playAudio(); }}
            disabled={loading}
            className={`${baseClasses} ${lightMode ? lightClasses : darkClasses} ${className}`}
            title="Listen to pronunciation"
        >
            {loading ? <Loader2 size={iconSize} className="animate-spin" /> : playing ? <Pause size={iconSize} /> : <Volume2 size={iconSize} />}
        </button>
    )
}

export const PresentationView: React.FC<{ slides: Slide[] }> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showNotes, setShowNotes] = useState(true);

    const slide = slides[currentSlide];

    return (
        <div className="space-y-8">
            <div className="relative aspect-video bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden flex flex-col">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-500 w-full"></div>
                
                <div className="px-12 py-10 border-b border-slate-50 flex justify-between items-start bg-slate-50/30">
                    <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight max-w-3xl leading-tight">{slide.title}</h3>
                    <div className="bg-slate-100 text-slate-500 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider">
                        Slide {currentSlide + 1} / {slides.length}
                    </div>
                </div>

                <div className="flex-1 px-12 md:px-16 py-10 flex flex-col justify-center bg-white">
                    <ul className="space-y-8">
                        {slide.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-6 animate-in slide-in-from-bottom-4 duration-700 fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 mt-3.5 flex-shrink-0 shadow-sm shadow-indigo-200"></div>
                                <span className="text-2xl text-slate-700 leading-relaxed font-light">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-8 bg-[#0F172A] text-white flex justify-between items-center">
                    <button 
                        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                        disabled={currentSlide === 0}
                        className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors font-medium text-lg px-4 py-2 hover:bg-white/10 rounded-xl"
                    >
                        <ChevronLeft size={24} /> Previous
                    </button>
                    
                    <button 
                        onClick={() => setShowNotes(!showNotes)}
                        className={`p-3 rounded-xl transition-all ${showNotes ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                        title="Toggle Speaker Notes"
                    >
                        <MessageSquare size={22} />
                    </button>

                    <button 
                        onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                        disabled={currentSlide === slides.length - 1}
                        className="flex items-center gap-2 text-white hover:text-indigo-400 disabled:opacity-30 disabled:hover:text-white transition-colors font-bold text-lg px-4 py-2 hover:bg-white/10 rounded-xl"
                    >
                        Next <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {showNotes && (
                <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-100 p-8 rounded-3xl animate-in slide-in-from-top-4 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">
                        <Monitor size={14} /> Teacher's Notes
                    </div>
                    <p className="text-amber-900/80 italic text-xl leading-relaxed font-serif">
                        "{slide.speakerNotes}"
                    </p>
                </div>
            )}
        </div>
    );
};

export const FlashcardsView: React.FC<{ cards: Flashcard[] }> = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [deck, setDeck] = useState(cards);

    useEffect(() => {
        setDeck(cards);
        setCurrentCard(0);
        setIsFlipped(false);
    }, [cards]);

    const handleShuffle = () => {
        const newDeck = [...deck];
        for (let i = newDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
        }
        setDeck(newDeck);
        setCurrentCard(0);
        setIsFlipped(false);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => setCurrentCard((prev) => (prev + 1) % deck.length), 300);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => setCurrentCard((prev) => (prev - 1 + deck.length) % deck.length), 300);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                setIsFlipped(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [deck, currentCard]);

    const card = deck[currentCard];

    return (
        <div className="flex flex-col items-center space-y-10 py-6">
            <div className="w-full max-w-3xl flex justify-between items-center px-4">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-full">
                        Card {currentCard + 1} / {deck.length}
                    </span>
                    <span className="hidden md:flex items-center gap-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest px-2">
                        <Keyboard size={12} /> Space to flip
                    </span>
                </div>
                <button 
                    onClick={handleShuffle}
                    className="flex items-center gap-2 text-indigo-600 bg-white border border-indigo-100 hover:bg-indigo-50 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                    <Shuffle size={14} /> Shuffle
                </button>
            </div>

            <div className="flex gap-2 w-full max-w-3xl px-4">
                {deck.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-500 ease-out ${idx === currentCard ? 'w-12 bg-indigo-500 shadow-sm shadow-indigo-300' : 'w-full bg-slate-200'}`}
                    ></div>
                ))}
            </div>

            <div className="w-full max-w-3xl h-[28rem] relative [perspective:1500px] group select-none">
                <div className="absolute top-4 left-4 right-4 bottom-[-1rem] bg-indigo-50 border border-indigo-100 rounded-[2.5rem] -z-10 transform scale-[0.96] translate-y-2 opacity-60 shadow-lg"></div>
                <div className="absolute top-8 left-8 right-8 bottom-[-2rem] bg-slate-50 border border-slate-100 rounded-[2.5rem] -z-20 transform scale-[0.92] translate-y-4 opacity-40 shadow-sm"></div>

                <div 
                    onClick={() => setIsFlipped(!isFlipped)}
                    className={`w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''} cursor-pointer`}
                >
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br from-[#4F46E5] to-[#3730A3] rounded-[2.5rem] shadow-2xl shadow-indigo-900/20 flex flex-col items-center justify-center p-12 text-center border border-white/10 overflow-hidden">
                        <div className="absolute top-8 right-8 z-20">
                            <AudioPlayerButton text={card.front} lightMode={true} />
                        </div>

                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
                        
                        <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[80px] pointer-events-none mix-blend-overlay"></div>
                        <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-overlay"></div>

                        <span className="relative text-indigo-200 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 px-4 py-2 rounded-full bg-black/10 backdrop-blur-md">Key Term</span>
                        <h3 className="relative text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">{card.front}</h3>
                        
                        <div className="absolute bottom-10 text-white/50 text-sm flex items-center gap-2 font-medium tracking-wide bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 group-hover:bg-white/10 transition-colors">
                            <RotateCcw size={14} /> Tap to flip
                        </div>
                    </div>

                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 flex flex-col items-center justify-center p-14 text-center border border-slate-100 overflow-hidden">
                         <div className="absolute top-8 right-8 z-20">
                            <AudioPlayerButton text={card.front} />
                        </div>
                        
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Definition</span>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">{card.back}</h3>
                        
                        <div className="w-full bg-[#F8FAFC] p-8 rounded-3xl border border-slate-100 relative mt-4">
                             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100 rounded-full shadow-sm">Example</div>
                             <p className="text-slate-600 italic text-xl font-serif leading-relaxed">"{card.example}"</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-10 pt-4">
                <button 
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-16 h-16 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group active:scale-95"
                    title="Previous Card (Left Arrow)"
                >
                    <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                
                <button 
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="w-16 h-16 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-200 hover:bg-indigo-500 hover:shadow-indigo-300 hover:-translate-y-1 transition-all flex items-center justify-center group active:scale-95"
                    title="Next Card (Right Arrow)"
                >
                    <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export const VocabularyView: React.FC<{ items: VocabularyItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {items.map((item, idx) => (
      <div key={idx} className="bg-white rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden group border border-slate-100/50 hover:-translate-y-1">
        <div className="h-64 bg-slate-100 relative overflow-hidden">
             <img src={item.imageUrl} alt={item.word} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-white font-bold tracking-wide">Business Context</span>
             </div>
        </div>
        <div className="p-8 flex-1 flex flex-col relative">
            <div className="absolute -top-8 right-8">
                <AudioPlayerButton text={item.word} iconSize={24} className="shadow-xl bg-white text-indigo-600 w-16 h-16" />
            </div>
            
            <div className="mb-6 mt-2">
                <h3 className="text-4xl font-bold text-slate-800 tracking-tight mb-2">{item.word}</h3>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-200">{item.translation}</span>
            </div>
            
            <div className="mt-auto bg-[#F8FAFC] border-l-4 border-indigo-500 pl-6 py-5 rounded-r-2xl">
                <p className="text-slate-700 italic text-xl font-serif leading-relaxed">"{item.example}"</p>
            </div>
        </div>
      </div>
    ))}
  </div>
);

export const GrammarContextView: React.FC<{ content: LessonContent['grammarContext'] }> = ({ content }) => (
  <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
    <div className="flex flex-col md:flex-row md:items-start gap-8 mb-12 border-b border-slate-100 pb-10">
        <div className="bg-indigo-600 p-5 rounded-2xl text-white shadow-xl shadow-indigo-200 shrink-0">
            <Info size={32} />
        </div>
        <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Grammar in Context</h3>
            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl font-light">{content.description}</p>
        </div>
    </div>
    <div className="grid gap-5">
        {content.sentences.map((sent, i) => (
            <div key={i} className="flex items-center gap-6 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 transition-all group duration-300">
                <span className="shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-lg font-bold shadow-sm group-hover:border-indigo-300 group-hover:text-indigo-600 transition-colors">0{i + 1}</span>
                <p className="text-slate-800 font-medium text-2xl flex-1 tracking-tight">{sent}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <AudioPlayerButton text={sent} />
                </div>
            </div>
        ))}
    </div>
  </div>
);

export const GrammarStructureView: React.FC<{ content: GrammarPoint }> = ({ content }) => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 p-10 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/10 text-indigo-100 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={12} className="text-indigo-200" />
                Grammar Focus
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{content.title}</h3>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-3xl font-light opacity-90 border-l-4 border-indigo-400 pl-6">
                {content.explanation}
            </p>
        </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Settings2 size={16} />
                </span>
                Structure Rules
            </h4>
            <div className="space-y-4">
                {content.structure.map((row, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group">
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{row.form}</span>
                            <div className="text-lg md:text-xl font-bold text-indigo-900 font-mono bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50 group-hover:bg-indigo-50 transition-colors">
                                {row.rule}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={16} />
                </span>
                Examples in Action
            </h4>
            <div className="space-y-4">
                {content.examples.map((ex, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all group">
                         <div className="mt-1">
                             <AudioPlayerButton text={ex} iconSize={16} className="w-10 h-10 bg-white shadow-sm" />
                         </div>
                         <p className="text-slate-700 text-lg leading-relaxed pt-1.5 font-medium">{ex}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </div>
);

const QuizInteraction: React.FC<{ questions: QuizQuestion[] }> = ({ questions }) => {
    const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
    const [showFeedback, setShowFeedback] = useState<boolean[]>(new Array(questions.length).fill(false));

    const handleSelect = (qIdx: number, optIdx: number) => {
        if (showFeedback[qIdx]) return;
        const newAnswers = [...answers];
        newAnswers[qIdx] = optIdx;
        setAnswers(newAnswers);
    };

    const checkAnswer = (qIdx: number) => {
        const newFeedback = [...showFeedback];
        newFeedback[qIdx] = true;
        setShowFeedback(newFeedback);
    };

    return (
        <div className="space-y-12">
            {questions.map((q, qIdx) => (
                <div key={qIdx} className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-slate-100/80">
                    <h4 className="font-bold text-2xl text-slate-900 mb-10 leading-relaxed flex gap-5">
                        <span className="text-indigo-200 font-black text-4xl shrink-0 -mt-2">0{qIdx + 1}</span>
                        {q.question}
                    </h4>
                    <div className="space-y-4 mb-10">
                        {q.options.map((opt, optIdx) => {
                            const isSelected = answers[qIdx] === optIdx;
                            const isRevealed = showFeedback[qIdx];
                            const isCorrect = q.correctAnswer === optIdx;
                            
                            let baseClass = "w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between font-medium text-lg cursor-pointer group shadow-sm ";
                            if (isRevealed) {
                                if (isCorrect) baseClass += "bg-emerald-50 border-emerald-400 text-emerald-900 ";
                                else if (isSelected) baseClass += "bg-rose-50 border-rose-400 text-rose-900 ";
                                else baseClass += "bg-white border-slate-100 text-slate-300 opacity-50 grayscale ";
                            } else {
                                if (isSelected) baseClass += "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200 scale-[1.01] ";
                                else baseClass += "bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700 hover:scale-[1.005] ";
                            }

                            return (
                                <button key={optIdx} onClick={() => handleSelect(qIdx, optIdx)} className={baseClass}>
                                    <span className="flex items-center gap-6">
                                        <span className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${
                                            isRevealed ? (isCorrect || isSelected ? 'border-current' : 'border-slate-300') : (isSelected ? 'bg-white text-indigo-600 border-white' : 'border-slate-300 text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-400')
                                        }`}>
                                            {String.fromCharCode(65 + optIdx)}
                                        </span>
                                        {opt}
                                    </span>
                                    {isRevealed && isCorrect && <CheckCircle2 size={28} className="text-emerald-600 animate-in zoom-in" />}
                                    {isRevealed && isSelected && !isCorrect && <XCircle size={28} className="text-rose-600 animate-in zoom-in" />}
                                </button>
                            )
                        })}
                    </div>
                    
                    {!showFeedback[qIdx] ? (
                        <div className="flex justify-end pt-6 border-t border-slate-100">
                            <button 
                                onClick={() => checkAnswer(qIdx)}
                                disabled={answers[qIdx] === -1}
                                className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-base font-bold hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl active:scale-95 hover:-translate-y-1"
                            >
                                Check Answer
                            </button>
                        </div>
                    ) : (
                        <div className={`mt-8 p-8 rounded-3xl text-lg border-l-8 ${answers[qIdx] === q.correctAnswer ? 'bg-emerald-50/50 border-emerald-500 text-emerald-900' : 'bg-rose-50/50 border-rose-500 text-rose-900'} animate-in fade-in slide-in-from-top-4 shadow-inner`}>
                            <strong className="block mb-3 font-bold uppercase tracking-wider text-xs opacity-70">{answers[qIdx] === q.correctAnswer ? 'Correct Analysis' : 'Correction Needed'}</strong> 
                            {q.explanation}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export const QuizView: React.FC<{ content: QuizQuestion[] }> = ({ content }) => <QuizInteraction questions={content} />;

export const ReadingView: React.FC<{ content: TextContent }> = ({ content }) => (
    <div className="space-y-16">
        <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500"></div>
             
             <div className="flex items-center gap-4 mb-12">
                 <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                    <BookOpen size={24} />
                 </div>
                 <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Reading Comprehension</span>
             </div>
             
            <h3 className="font-extrabold text-4xl md:text-5xl text-slate-900 mb-10 leading-tight">{content.title}</h3>
            <div className="prose prose-xl prose-slate max-w-none prose-p:leading-loose text-slate-700 font-serif border-l-4 border-indigo-100 pl-8">
                <p>{content.body}</p>
            </div>
        </div>
        
        <div className="relative py-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-[#F8FAFC] px-8 py-2 text-sm font-bold text-slate-400 uppercase tracking-widest rounded-full border border-slate-200">Knowledge Check</span>
            </div>
        </div>
        <QuizInteraction questions={content.questions} />
    </div>
);

export const GapFillView: React.FC<{ content: GapFillSentence[] }> = ({ content }) => {
    const [userInputs, setUserInputs] = useState<string[]>(new Array(content.length).fill(""));
    const [checked, setChecked] = useState(false);

    const handleCheck = () => setChecked(true);
    const handleReset = () => {
        setChecked(false);
        setUserInputs(new Array(content.length).fill(""));
    }

    return (
        <div className="bg-white p-12 md:p-14 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-6 mb-12 bg-indigo-50/60 p-8 rounded-[2rem] text-indigo-900 border border-indigo-100">
                <div className="p-3 bg-white rounded-xl shadow-sm text-indigo-600 shrink-0">
                    <Edit3 size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-1">Fill in the blanks</h4>
                    <p className="font-medium opacity-80">Complete the sentences by selecting or typing the correct word contextually.</p>
                </div>
            </div>
            <div className="space-y-6">
                {content.map((item, i) => {
                    const isCorrect = userInputs[i].toLowerCase().trim() === item.answer.toLowerCase();
                    return (
                        <div key={i} className="flex flex-wrap items-center gap-4 text-2xl leading-loose text-slate-800 p-6 rounded-3xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-slate-100">
                            <span className="shrink-0 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-bold shadow-md shadow-slate-200 mr-2">0{i + 1}</span>
                            <span>{item.sentenceParts[0]}</span>
                            <div className="relative inline-block">
                                {item.options ? (
                                    <select
                                        disabled={checked}
                                        value={userInputs[i]}
                                        onChange={(e) => {
                                            const newInputs = [...userInputs];
                                            newInputs[i] = e.target.value;
                                            setUserInputs(newInputs);
                                        }}
                                        className={`h-14 border-2 px-6 rounded-2xl font-bold focus:ring-4 focus:ring-indigo-100 outline-none appearance-none cursor-pointer pr-12 transition-all shadow-sm ${checked ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-rose-500 bg-rose-50 text-rose-800') : 'border-slate-200 bg-white hover:border-indigo-300 text-indigo-600'}`}
                                    >
                                        <option value="">Select...</option>
                                        {item.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                ) : (
                                    <input 
                                        type="text" 
                                        disabled={checked}
                                        value={userInputs[i]}
                                        onChange={(e) => {
                                            const newInputs = [...userInputs];
                                            newInputs[i] = e.target.value;
                                            setUserInputs(newInputs);
                                        }}
                                        className={`h-14 border-2 px-6 rounded-2xl font-bold min-w-[160px] focus:ring-4 focus:ring-indigo-100 outline-none transition-all shadow-sm text-center ${checked ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-rose-500 bg-rose-50 text-rose-900') : 'border-slate-200 hover:border-indigo-300 text-indigo-600'}`}
                                        placeholder="Type here..."
                                    />
                                )}
                            </div>
                            <span>{item.sentenceParts[1]}</span>
                            {checked && (
                                isCorrect 
                                ? <CheckCircle2 size={32} className="text-emerald-500 animate-in zoom-in ml-2" />
                                : <span className="ml-4 text-sm font-bold text-rose-600 bg-rose-100 px-4 py-2 rounded-xl border border-rose-200 animate-in fade-in">Ans: {item.answer}</span>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="mt-16 pt-10 border-t border-slate-100 flex gap-6">
                <button 
                    onClick={handleCheck} 
                    disabled={checked} 
                    className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 text-white px-12 py-4 rounded-2xl font-bold disabled:opacity-50 disabled:shadow-none transition-all active:scale-95 hover:-translate-y-1"
                >
                    Check Answers
                </button>
                {checked && (
                    <button onClick={handleReset} className="text-slate-600 hover:text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 flex items-center gap-3 transition-colors border border-transparent hover:border-slate-200">
                        <RefreshCw size={20}/> Try Again
                    </button>
                )}
            </div>
        </div>
    )
}

export const ListeningView: React.FC<{ content: ListeningContent }> = ({ content }) => {
    const [showTranscript, setShowTranscript] = useState(false);

    return (
        <div className="space-y-12">
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-inner">
                        <AudioPlayerButton text={content.transcript} className="w-16 h-16 bg-white text-indigo-900 shadow-lg hover:scale-105" iconSize={24} lightMode={true} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4 opacity-70">
                            <Headphones size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Listening Exercise</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{content.title}</h3>
                        <p className="text-lg text-slate-300 font-light max-w-xl">Listen to the conversation carefully and answer the questions below.</p>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8 flex justify-center md:justify-start">
                     <button 
                        onClick={() => setShowTranscript(!showTranscript)}
                        className="text-sm font-bold text-indigo-200 hover:text-white flex items-center gap-2 transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                        {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
                    </button>
                </div>
                
                {showTranscript && (
                    <div className="mt-8 p-8 bg-white/5 rounded-2xl border border-white/10 text-slate-300 italic font-serif leading-relaxed animate-in fade-in slide-in-from-top-2">
                        "{content.transcript}"
                    </div>
                )}
            </div>

            <QuizInteraction questions={content.questions} />
        </div>
    );
};

export const WritingView: React.FC<{ content: WritingTask }> = ({ content }) => {
    const [text, setText] = useState("");
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const minWords = content.minWords || 1; 

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
                <div className="bg-indigo-50 p-10 rounded-[2.5rem] border border-indigo-100">
                    <div className="flex items-center gap-3 text-indigo-600 mb-6">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                            <Edit3 size={20} />
                        </div>
                         <span className="text-xs font-bold uppercase tracking-widest">Writing Task</span>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900 mb-6 leading-snug">{content.prompt}</h3>
                    
                    <div className="space-y-4">
                        <h4 className="font-bold text-indigo-900/70 text-sm uppercase tracking-wider flex items-center gap-2">
                            <Settings2 size={14} /> Rubric Checklist
                        </h4>
                        <ul className="space-y-3">
                            {content.rubric.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-indigo-800">
                                    <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                    <div>
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Target Length</span>
                         <span className="text-2xl font-bold text-slate-700">{content.minWords} words</span>
                    </div>
                    <div className="w-px h-12 bg-slate-100"></div>
                     <div className="text-right">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Current Count</span>
                         <span className={`text-2xl font-bold transition-colors ${wordCount >= content.minWords ? 'text-emerald-500' : 'text-slate-700'}`}>{wordCount} words</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full">
                <div className="relative flex-1">
                    <textarea 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full h-full min-h-[400px] p-8 rounded-[2.5rem] border-2 border-slate-200 resize-none outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all text-lg leading-relaxed text-slate-700 font-serif placeholder:text-slate-300"
                        placeholder="Start typing your response here..."
                    ></textarea>
                     <div className="absolute bottom-6 right-6 pointer-events-none">
                        <div className="w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center bg-white shadow-sm">
                             <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 36 36">
                                <path
                                    className="text-slate-100"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className={`${wordCount >= content.minWords ? 'text-emerald-500' : 'text-indigo-500'} transition-all duration-500`}
                                    strokeDasharray={`${Math.min(100, (wordCount / minWords) * 100)}, 100`}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                            </svg>
                             {wordCount >= content.minWords && <CheckCircle2 size={16} className="text-emerald-500 relative z-10" />}
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}
