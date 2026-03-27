import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <div ref={sectionRef} className="relative overflow-hidden">
      <WavyBackground
        className="w-full"
        containerClassName="relative min-h-screen flex items-center"
        colors={["#06b6d4", "#8b5cf6", "#ec4899", "#d946ef", "#3b82f6"]}
        waveWidth={60}
        backgroundFill="hsl(var(--background))"
        blur={8}
        speed="fast"
        waveOpacity={0.4}
      >
        <FloatingParticles
          particleCount={25}
          colors={['#06b6d4', '#d946ef', '#3b82f6']}
        />

        <motion.section
          id="hero"
          className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
          style={{ y, opacity }}
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content (7 cols) */}
            <div className="lg:col-span-12 xl:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center lg:justify-start mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 animate-pulse" />
                <span className="text-primary font-medium text-sm tracking-wide">Agentes de IA: Portugal e o Mundo</span>
              </motion.div>

              <motion.h1 
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <span className="text-white block">Soluções que</span>
                <span className="gradient-text block mt-2">
                  <Typewriter
                    words={['Automatizam', 'Escalam', 'Otimizam', 'Inovam']}
                    className="gradient-text"
                    cursorClassName="bg-primary"
                    typingSpeed={80}
                    deletingSpeed={50}
                    delayBetweenWords={2500}
                  />
                </span>
              </motion.h1>

              <motion.p 
                className="font-sans text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Potencialize seu negócio com agentes de IA autônomos e arquiteturas escaláveis.
                Do conceito à automação total.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-full shadow-[0_0_30px_-10px_hsl(var(--primary))] hover:shadow-[0_0_50px_-10px_hsl(var(--primary))] transition-all duration-300 hover:scale-105 active:scale-95 group"
                >
                  Iniciar Projeto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  onClick={scrollToSolutions}
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-base rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Explorar Portfólio
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Holographic Visual (5 cols) */}
            <motion.div
              className="lg:col-span-12 xl:col-span-5 relative mt-12 lg:mt-0 perspective-1000"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: -5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
            >
              {/* Glass Prism Card */}
              <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[2rem] blur-3xl opacity-50 animate-pulse" />

                <div className="relative h-full bg-glass border border-white/10 rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-50">
                    <div className="w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider text-white/50 border border-white/5">
                        System Status: Online
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-white/60 text-sm">Eficiência</span>
                          <span className="text-primary font-mono text-xl font-bold">
                            <AnimatedCounter value={98.5} suffix="%" duration={2.5} />
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "98.5%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
                          <span className="text-white/60 text-xs block mb-1">Processos/min</span>
                          <span className="text-white font-display text-2xl font-bold">
                            <AnimatedCounter value={1250} suffix="+" duration={2} />
                          </span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
                          <span className="text-white/60 text-xs block mb-1">ROI Est.</span>
                          <span className="text-white font-display text-2xl font-bold">
                            <AnimatedCounter value={340} suffix="%" duration={2} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] text-white/50 z-${10 - i}`}>
                            AI
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-white/40 font-mono">
                        Active Agents
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section >
      </WavyBackground >
    </div >
  );
};

export default Hero;
