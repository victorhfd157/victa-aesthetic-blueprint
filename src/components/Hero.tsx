import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, ChevronDown, Mouse } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Typewriter } from '@/components/ui/typewriter';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
    <div ref={sectionRef}>
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
        <FloatingParticles 
          particleCount={20} 
          colors={['#38bdf8', '#818cf8', '#c084fc', '#22d3ee']} 
        />
        <motion.section 
          id="hero" 
          className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 relative z-10"
          style={{ y, opacity }}
        >
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
            <motion.div 
              className="relative mt-8 lg:mt-0 px-4 sm:px-0"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
            >
              <GlowingBorder containerClassName="w-full">
                <div className="glass rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-glass float-animation">
                <div className="bg-gradient-primary rounded-2xl p-4 sm:p-6 text-center">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:bg-white/20 cursor-default">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        <AnimatedCounter value={95} suffix="%" duration={2} />
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">Automação</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:bg-white/20 cursor-default">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        <AnimatedCounter value={3} suffix="x" duration={1.5} />
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">ROI Médio</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:bg-white/20 cursor-default">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        <AnimatedCounter value={24} suffix="/7" duration={1.5} />
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">Disponibilidade</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:bg-white/20 cursor-default">
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
            </motion.div>
          </div>
        </motion.section>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        >
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mouse className="w-6 h-6 text-primary/70" />
            <motion.div
              className="w-1 h-3 mt-1 rounded-full bg-primary/50"
              animate={{ 
                scaleY: [1, 0.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-primary/50" />
          </motion.div>
          <span className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase">Scroll</span>
        </motion.div>
      </WavyBackground>
    </div>
  );
};

export default Hero;
