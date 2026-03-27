import { MessageSquare, Bot, Workflow, Link, Sparkles, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="solutions" className="py-24 md:py-32 relative overflow-hidden bg-background/50" ref={sectionRef}>
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ecossistema Completo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Soluções para <span className="gradient-text">Escalar seu Negócio</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Feature - Large Square (2x2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            aria-label="Agentes Autônomos de IA para Vendas e Operações"
            className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden border border-white/10 bg-glass/50 hover:border-primary/50 transition-colors duration-500"
          >
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                 style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.15), transparent 40%)' }} />
            
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 overflow-hidden">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-display font-medium text-white mb-4">Agentes Autônomos</h3>
                <p className="text-lg text-muted-foreground max-w-md">
                  Nossos agentes de IA não apenas respondem, eles executam. Automação de ponta a ponta para vendas, suporte e operações.
                </p>
              </div>
              <div className="space-y-2 mt-8">
                {['Aprendizado Contínuo', 'Execução de Tarefas', 'Multicanal'].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/80 font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Decorative UI Preview */}
              <div className="absolute right-0 bottom-0 w-1/2 h-3/4 bg-background/80 rounded-tl-3xl border-t border-l border-white/10 p-6 overflow-hidden transform translate-y-4 translate-x-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-4 opacity-50">
                  <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                  <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Feature - Tall (1x2) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            aria-label="Workflows de Automação de Processos Empresariais"
            className="md:col-span-1 md:row-span-2 group relative rounded-3xl overflow-hidden border border-white/10 bg-glass/50 hover:border-secondary/50 transition-colors duration-500 flex flex-col"
          >
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                 style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(129, 140, 248, 0.15), transparent 40%)' }} />
            
            <div className="p-8 flex-shrink-0 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-medium text-white mb-3">Workflows</h3>
              <p className="text-sm text-muted-foreground font-sans">Automatize processos complexos sem escrever uma linha de código.</p>
            </div>

            {/* Animated Diagram */}
            <div className="flex-grow relative mt-4 overflow-hidden relative z-10">
              <div className="absolute inset-x-8 top-0 bottom-8 border-l-2 border-dashed border-white/10 ml-6">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="absolute left-[-5px]" style={{ top: `${i * 33}%` }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            aria-label="Integração de Sistemas e APIs via Inteligência Artificial"
            className="md:col-span-1 group relative rounded-3xl overflow-hidden border border-white/10 bg-glass/50 hover:border-accent/50 transition-colors duration-500 p-8"
          >
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                 style={{ background: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(192, 132, 252, 0.15), transparent 40%)' }} />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Link className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-2">Integrações</h3>
              <p className="text-xs text-muted-foreground font-sans">Conecte-se com +2000 apps via API.</p>
            </div>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onMouseMove={handleMouseMove}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden border border-white/10 bg-glass/50 hover:border-green-500/50 transition-colors duration-500 p-8 flex items-center justify-between"
          >
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                 style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(34, 197, 94, 0.1), transparent 40%)' }} />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-2">Chat Inteligente</h3>
              <p className="text-xs text-muted-foreground font-sans">Suporte 24/7 com NLP avançada.</p>
            </div>
            <div className="hidden sm:block relative z-20">
              <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 active:scale-95 transition-all" onClick={scrollToContact} aria-label="Ver demonstração">
                Ver Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
