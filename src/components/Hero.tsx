import { ArrowRight, Sparkles, Zap, Bot, Workflow } from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';
import { AuroraMesh } from '@/components/ui/aurora-mesh';
import { GlowCTA } from '@/components/ui/glow-cta';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Spotlight: cursor-follow radial gradient
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    requestAnimationFrame(() => {
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center bg-background"
    >
      {/* B. Aurora mesh background — replaces the busy WavyBackground */}
      <AuroraMesh intensity="normal" />

      <motion.section
        id="hero"
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-32 md:py-24"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-12 xl:col-span-7 text-center lg:text-left">
            {/* E. Eyebrow chip with animated gradient bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative inline-flex items-center justify-center lg:justify-start mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 w-1/3 -inset-x-1/3 animate-eyebrow-bar"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.35), transparent)',
                }}
              />
              <Sparkles
                className="relative h-4 w-4 md:h-5 md:w-5 text-primary mr-2"
                aria-hidden="true"
              />
              <span className="relative text-primary font-medium text-sm tracking-wide">
                Agentes de IA: Portugal e o Mundo
              </span>
            </motion.div>

            {/* A. Giant editorial headline — clamp-based, oversized */}
            <motion.h1
              className="font-display font-bold mb-8 tracking-[-0.04em] leading-[0.95]"
              style={{ fontSize: 'clamp(2.75rem, 9vw, 7rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className="text-white block">Soluções que</span>
              <span className="gradient-text block mt-1 sm:mt-2">
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
              Potencialize seu negócio com agentes de IA autônomos e arquiteturas escaláveis. Do
              conceito à automação total.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* D. CTA with rotating gradient halo + shimmer on hover */}
              <GlowCTA onClick={() => scrollToId('contact')}>
                Iniciar Projeto
                <ArrowRight className="h-5 w-5 transition-transform group-hover/glow:translate-x-1" aria-hidden="true" />
              </GlowCTA>

              <button
                onClick={() => scrollToId('solutions')}
                className="h-14 px-8 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-base rounded-full backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] inline-flex items-center justify-center"
              >
                Explorar Portfólio
              </button>
            </motion.div>
          </div>

          {/* Right Column - Capabilities Card with C. Spotlight cursor-follow */}
          <motion.div
            className="lg:col-span-12 xl:col-span-5 relative mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: visualY }}
          >
            <div className="relative z-10 w-full max-w-md mx-auto">
              {/* Soft glow behind card */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] blur-3xl opacity-60"
                aria-hidden="true"
              />

              <div
                ref={cardRef}
                onMouseMove={handleCardMouseMove}
                className="group/card relative glass border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:border-primary/40 transition-colors duration-500"
              >
                {/* C. Spotlight: cursor-follow radial gradient (only visible on hover) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.18), transparent 45%)',
                  }}
                />

                {/* Subtle corner highlight */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] uppercase tracking-wider text-primary border border-primary/20 font-medium">
                      O que entregamos
                    </span>
                    <span className="text-xs text-white/40 font-mono">v1.0</span>
                  </div>

                  <ul className="space-y-3" role="list">
                    {[
                      {
                        icon: Bot,
                        title: 'Agentes Autônomos',
                        desc: 'IA que executa tarefas de ponta a ponta',
                      },
                      {
                        icon: Workflow,
                        title: 'Automação Total',
                        desc: 'Fluxos integrados aos seus sistemas',
                      },
                      {
                        icon: Zap,
                        title: 'Arquitetura Escalável',
                        desc: 'Cresce com o seu negócio',
                      },
                    ].map(({ icon: Icon, title, desc }) => (
                      <li
                        key={title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-primary/20 transition-colors duration-300"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-medium text-sm leading-tight">{title}</p>
                          <p className="text-white/60 text-xs mt-1 leading-relaxed">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
