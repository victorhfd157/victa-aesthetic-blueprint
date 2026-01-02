import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Typewriter } from '@/components/ui/typewriter';
const Hero = () => {
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

  return (
    <WavyBackground
      className="w-full"
      containerClassName="relative min-h-screen"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      waveWidth={50}
      backgroundFill="hsl(var(--background))"
      blur={10}
      speed="fast"
      waveOpacity={0.5}
    >
      <section id="hero" className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4 md:mb-6">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 animate-pulse" />
              <span className="text-primary font-semibold text-sm sm:text-base">Inteligência Artificial Avançada</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="gradient-text">Soluções de IA</span>
              <br />
              <span className="text-white">que geram </span>
              <Typewriter
                words={['Resultados', 'Automação', 'Crescimento', 'Inovação', 'Eficiência']}
                className="text-primary"
                typingSpeed={80}
                deletingSpeed={50}
                delayBetweenWords={2500}
              />
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Automatize processos, aumente conversões e reduza custos com agentes inteligentes 
              e integrações estratégicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-glow hover:scale-105 hover:shadow-xl group w-full sm:w-auto"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={scrollToSolutions}
                variant="outline" 
                size="lg"
                className="glass glass-hover border-primary/30 text-white hover:text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Conhecer Soluções
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
            <GlowingBorder containerClassName="w-full">
              <div className="glass rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-glass float-animation">
              <div className="bg-gradient-primary rounded-2xl p-4 sm:p-6 text-center">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      <AnimatedCounter value={95} suffix="%" duration={2} />
                    </div>
                    <div className="text-xs sm:text-sm text-white/70">Automação</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      <AnimatedCounter value={3} suffix="x" duration={1.5} />
                    </div>
                    <div className="text-xs sm:text-sm text-white/70">ROI Médio</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      <AnimatedCounter value={24} suffix="/7" duration={1.5} />
                    </div>
                    <div className="text-xs sm:text-sm text-white/70">Disponibilidade</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      <AnimatedCounter value={60} suffix="%" duration={2} />
                    </div>
                    <div className="text-xs sm:text-sm text-white/70">Redução Custos</div>
                  </div>
                </div>
                <div className="text-sm sm:text-base text-white font-semibold">
                  Resultados Comprovados
                </div>
              </div>
              </div>
            </GlowingBorder>
          </div>
        </div>
      </section>
    </WavyBackground>
  );
};

export default Hero;
