import { MessageSquare, Bot, Workflow, Link, Sparkles, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TiltCard } from '@/components/ui/tilt-card';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { useRef } from 'react';

const solutions = [
  {
    icon: MessageSquare,
    title: 'Atendentes Virtuais',
    description: 'Chatbots inteligentes que entendem o contexto e respondem como humanos.',
    features: ['Linguagem Natural', 'Multicanal', 'Personalização'],
  },
  {
    icon: Bot,
    title: 'Agentes de IA',
    description: 'Automação de tarefas complexas com agentes que aprendem e evoluem.',
    features: ['Aprendizado Contínuo', 'Integração Total', 'Relatórios'],
  },
  {
    icon: Workflow,
    title: 'Automações',
    description: 'Fluxos de trabalho automatizados que otimizam processos repetitivos.',
    features: ['Sem Código', 'Escalável', 'Monitoramento'],
  },
  {
    icon: Link,
    title: 'Integrações',
    description: 'Conecte sistemas e plataformas para um ecossistema unificado.',
    features: ['APIs Robustas', 'Segurança', 'Tempo Real'],
  },
];

const Solutions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background element */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Nossas Soluções</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Soluções Inteligentes</span>
            <br />
            para cada desafio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias avançadas de IA adaptadas às necessidades específicas do seu negócio.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20 * (index % 2 === 0 ? 1 : -1)]) }}
            >
              <TiltCard className="h-full" tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <GlowingBorder containerClassName="h-full">
                  <div className="glass p-6 rounded-xl h-full flex flex-col group">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <solution.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 flex-grow">
                      {solution.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowingBorder>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlowingBorder>
            <div className="glass p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Desenvolvemos soluções customizadas para desafios únicos. Fale com nosso time.
              </p>
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-glow hover:bg-primary/90 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Falar com Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </GlowingBorder>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
