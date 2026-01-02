import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Brain, Cpu, Zap, Code } from 'lucide-react';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { FloatingParticles, GlowingOrbs } from '@/components/ui/floating-particles';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToSolutions = () => {
  document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
};

// Floating icons component
const FloatingIcons = () => {
  const icons = [
    { Icon: Brain, x: '10%', y: '20%', delay: 0 },
    { Icon: Cpu, x: '85%', y: '15%', delay: 0.5 },
    { Icon: Zap, x: '75%', y: '70%', delay: 1 },
    { Icon: Code, x: '15%', y: '75%', delay: 1.5 },
  ];

  return (
    <>
      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20 hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { delay: delay + 0.5, duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon size={48} strokeWidth={1} />
        </motion.div>
      ))}
    </>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background effects */}
      <GlowingOrbs />
      <FloatingParticles particleCount={25} />
      <FloatingIcons />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Soluções de IA para Empresas</span>
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.div>

          {/* Main headline with typewriter */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Transforme</span> sua empresa com{' '}
            <br className="hidden md:block" />
            <Typewriter
              words={['Inteligência Artificial', 'Automação Inteligente', 'Soluções Customizadas', 'Resultados Reais']}
              className="text-primary"
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={3000}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Desenvolvemos soluções de{' '}
            <span className="text-primary font-medium">IA personalizadas</span> que automatizam processos, 
            reduzem custos e potencializam o crescimento do seu negócio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-glow rounded-full"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  Solicitar Demonstração
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToSolutions}
                className="glass border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg group rounded-full"
              >
                <span className="flex items-center gap-2">
                  Conhecer Soluções
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated KPI Cards */}
          <motion.div variants={itemVariants}>
            <GlowingBorder className="inline-block">
              <motion.div 
                className="glass p-6 md:p-8 rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                  {[
                    { value: 100, suffix: '+', label: 'Clientes Ativos' },
                    { value: 95, suffix: '%', label: 'Taxa de Sucesso' },
                    { value: 3, suffix: 'x', label: 'ROI Médio' },
                    { value: 24, suffix: '/7', label: 'Suporte' },
                  ].map((kpi, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                        <AnimatedCounter 
                          value={kpi.value} 
                          suffix={kpi.suffix}
                          duration={2.5}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">{kpi.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </GlowingBorder>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
