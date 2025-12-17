import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from '@/data/slides';
import { SlideRenderer } from '@/components/servicos/SlideRenderer';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { PasswordProtection } from '@/components/PasswordProtection';

const ServicosContent: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* Top Bar */}
      <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-20 shadow-sm">
        <div className="font-bold text-blue-700 tracking-wider flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-serif">V</div>
          <span>VICTA AI</span>
        </div>
        <div className="text-sm text-slate-400 font-medium hidden md:block">
          {currentSlideIndex === 0 ? 'Confidencial' : `Slide ${currentSlideIndex + 1} / ${SLIDES.length}`}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-500">
          <Menu />
        </button>
      </div>

      {/* Main Slide Area */}
      <div className="flex-grow relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <div className="w-full max-w-7xl h-full md:h-[90%] md:aspect-[16/9] bg-white md:rounded-2xl md:shadow-2xl overflow-hidden relative border border-slate-100">
          <AnimatePresence mode="wait">
            <SlideRenderer key={currentSlide.id} slide={currentSlide} />
          </AnimatePresence>
        </div>
      </div>

      {/* Controls & Progress */}
      <div className="h-16 bg-white border-t border-slate-200 flex items-center justify-between px-6 z-20">
        <div className="flex items-center space-x-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>
        <div className="flex-grow mx-8 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider hidden sm:block">
          Proposta Comercial
        </div>
      </div>
    </div>
  );
};

const Servicos: React.FC = () => {
  return (
    <PasswordProtection password="victa2024" storageKey="servicos_access">
      <ServicosContent />
    </PasswordProtection>
  );
};

export default Servicos;
