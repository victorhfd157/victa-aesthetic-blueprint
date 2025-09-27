import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} id="hero" className="min-h-screen bg-black relative overflow-hidden">
      {/* SVG Filters and Gradients */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="victa-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="hero-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="70%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 w-full h-full hero-bg">
        <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift" />
      </div>

      {/* Secondary Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black animate-pulse" />
      </div>

      {/* Main Content - Bottom Left Layout */}
      <main className="absolute bottom-8 left-8 z-20 max-w-4xl">
        <div className="text-left">
          {/* Badge */}
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20 mb-8 relative group hover:border-primary/40 transition-all duration-300"
            style={{ filter: 'url(#glass-effect)' }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
            <Sparkles className="h-5 w-5 text-primary mr-3 animate-pulse" />
            <span className="text-white/90 font-medium relative z-10 tracking-wide">
              ✨ Nova Experiência VICTA AI
            </span>
            {/* Floating particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none tracking-tight">
            <span 
              className="block font-light text-5xl md:text-6xl lg:text-7xl mb-4 tracking-wider animate-gradient-text"
              style={{
                background: 'url(#victa-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'url(#text-glow)',
                backgroundSize: '200% 200%',
              }}
            >
              Inteligência
            </span>
            <span className="block font-black text-white drop-shadow-2xl">Artificial</span>
            <span className="block font-light text-white/80 italic text-5xl md:text-6xl lg:text-7xl">que Escala</span>
          </h1>

          {/* Description */}
          <p className="text-lg font-light text-white/70 mb-10 leading-relaxed max-w-2xl">
            Automatize processos, aumente conversões e reduza custos com agentes inteligentes 
            e integrações estratégicas. Experiências visuais impressionantes que respondem 
            a cada movimento do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-6 flex-wrap">
            <button
              onClick={scrollToSolutions}
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:text-primary hover:scale-105 backdrop-blur-sm"
            >
              Ver Soluções
            </button>
            <button
              onClick={scrollToContact}
              className="px-10 py-4 rounded-full bg-gradient-primary text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-glow"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </main>

      {/* Decorative Element - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Pulsing Border Effect with CSS */}
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-40 animate-pulse" />
          <div className="relative w-16 h-16 rounded-full glass border-2 border-primary/30 flex items-center justify-center">
            <Brain className="h-8 w-8 text-primary animate-pulse" />
          </div>

          {/* Rotating Text */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
            style={{ transform: 'scale(1.6)' }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-xs fill-white/60 font-medium">
              <textPath href="#circle" startOffset="0%">
                VICTA AI Solutions • Transformação Digital • IA Empresarial • VICTA •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;