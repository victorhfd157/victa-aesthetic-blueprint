import { TrendingUp, DollarSign, Zap, Scale, MessageCircle, FileText, Rocket, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TiltCard } from '@/components/ui/tilt-card';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useRef } from 'react';

const differentials = [
  { icon: TrendingUp, title: 'Mais Conversões', description: 'Aumente suas vendas em até 40% com atendimento inteligente 24/7.' },
  { icon: DollarSign, title: 'Menos Custos', description: 'Reduza custos de operação em até 60% automatizando processos.' },
  { icon: Zap, title: 'Implementação Rápida', description: 'Soluções prontas em semanas, não meses.' },
  { icon: Scale, title: 'Escalabilidade Real', description: 'Cresça sem limites. Nossa infraestrutura escala com você.' },
];

const stats = [
  { value: 100, suffix: '+', label: 'Clientes Ativos' },
  { value: 95, suffix: '%', label: 'Taxa de Sucesso' },
  { value: 3, suffix: 'x', label: 'ROI Médio' },
  { value: 60, suffix: '%', label: 'Redução de Custos' },
];

const steps = [
  { icon: MessageCircle, step: '01', title: 'Consultoria Gratuita', description: 'Entendemos seus desafios.' },
  { icon: FileText, step: '02', title: 'Escopo e Proposta', description: 'Definimos a solução ideal.' },
  { icon: Rocket, step: '03', title: 'Início do Projeto', description: 'Implementamos com acompanhamento.' },
];

const Differentials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="differentials" className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 text-sm text-secondary mb-6" whileHover={{ scale: 1.05 }}>
              <Award className="w-4 h-4" />
              <span>Resultados Comprovados</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Consultoria em IA com <br />
              <span className="gradient-text">Alcance Global</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground pb-4"
          >
            Nossa abordagem orientada a dados garante que cada implementação de IA gere valor tangível.
            Não vendemos apenas tecnologia, entregamos transformação.
          </motion.div>
        </div>

        {/* Stats Grid - Large & Bold */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass border-white/5 p-6 md:p-8 rounded-2xl text-center hover:border-white/20 transition-colors duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-sm md:text-base font-medium text-white/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Immersive Differentials Cards */}
        <div className="space-y-32">
          {/* Section 1: Process */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-12 text-center">Jornada de Transformação</h3>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 z-0" />

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative z-10"
                >
                  <div className="w-full aspect-[4/5] glass rounded-3xl border border-white/10 p-8 flex flex-col items-center text-center group hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">
                    <div className="w-32 h-32 absolute -top-16 -right-16 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />

                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-2xl font-bold font-display text-white mb-8 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                      {step.step}
                    </div>

                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:text-white group-hover:bg-primary transition-all duration-500">
                      <step.icon className="w-10 h-10" aria-hidden="true" />
                    </div>

                    <h4 className="text-2xl font-display font-bold mb-4">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                    <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-xs font-bold tracking-widest uppercase text-primary">Saiba Mais</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
