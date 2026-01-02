import { TrendingUp, DollarSign, Zap, Scale, MessageCircle, FileText, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from '@/components/ui/tilt-card';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { AnimatedCounter } from '@/components/ui/animated-counter';

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
  return (
    <section id="differentials" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary mb-6" whileHover={{ scale: 1.05 }}>
            <Award className="w-4 h-4" />
            <span>Por que nos escolher</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6"><span className="gradient-text">Resultados</span> que Importam</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Nossos clientes alcançam resultados excepcionais com nossas soluções de IA.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <GlowingBorder>
                  <div className="glass p-6 md:p-8 rounded-xl text-center">
                    <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                  </div>
                </GlowingBorder>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentials.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <TiltCard className="h-full" tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <GlowingBorder containerClassName="h-full">
                  <div className="glass p-6 rounded-xl h-full group">
                    <motion.div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors" whileHover={{ scale: 1.1, rotate: 5 }}>
                      <item.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </GlowingBorder>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12"><span className="gradient-text">Como funciona</span></h3>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -translate-y-1/2 z-0" />
            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
                <TiltCard tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <GlowingBorder>
                    <div className="glass p-6 md:p-8 rounded-xl relative z-10 group">
                      <motion.div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow" whileHover={{ scale: 1.1 }}>
                        {step.step}
                      </motion.div>
                      <motion.div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors" whileHover={{ scale: 1.1 }}>
                        <step.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </GlowingBorder>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;
