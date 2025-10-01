import { Brain, MessageSquare, Zap, BarChart3, Shield, Cog } from 'lucide-react';
import { GradientCard } from '@/components/ui/gradient-card';

const solutions = [
  {
    icon: Brain,
    title: 'Agentes de IA Personalizados',
    description: 'Automatizam vendas e atendimento, gerando mais leads qualificados.',
    features: ['Aumenta conversão em até 40%', 'Qualificação automática de leads', 'Atendimento 24/7 inteligente']
  },
  {
    icon: Cog,
    title: 'Sistemas Inteligentes',
    description: 'Eliminam processos manuais e reduzem até 70% do tempo operacional.',
    features: ['Redução drástica de tarefas manuais', 'Fluxos automatizados', 'Integração total com sistemas existentes']
  },
  {
    icon: Zap,
    title: 'Integrações Estratégicas',
    description: 'Unificam operações e centralizam dados para maior eficiência.',
    features: ['Centralização de dados', 'Operações unificadas', 'Maior eficiência operacional']
  },
  {
    icon: BarChart3,
    title: 'Automação de Marketing e Vendas',
    description: 'Funis otimizados, campanhas mais precisas e maior ROI.',
    features: ['Funis de venda automatizados', 'Campanhas precisas por IA', 'ROI comprovadamente maior']
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">As nossas soluções em IA</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções inteligentes que geram resultados comprovados e transformam a sua operação.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <GradientCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para revolucionar seu negócio?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Nossa equipe está pronta para desenvolver a solução perfeita para sua empresa.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105"
            >
              Conversar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;