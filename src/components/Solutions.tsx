import { Brain, Cog, Zap, BarChart3 } from 'lucide-react';
import { GlowingBorder } from '@/components/ui/glowing-border';

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
    <section id="solutions" className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            <span className="gradient-text">As nossas soluções em IA</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Soluções inteligentes que geram resultados comprovados e transformam a sua operação.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <GlowingBorder
                key={index}
                containerClassName="h-full"
                className="h-full"
              >
                <div
                  className="glass h-full rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02] group shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 md:mb-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-glow">
                      <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{solution.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>

                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-sm md:text-base">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowingBorder>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <GlowingBorder containerClassName="max-w-4xl mx-auto">
            <div className="glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
                Pronto para revolucionar seu negócio?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
                Nossa equipe está pronta para desenvolver a solução perfeita para sua empresa.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-glow hover:scale-105"
              >
                Conversar com Especialista
              </button>
            </div>
          </GlowingBorder>
        </div>
      </div>
    </section>
  );
};

export default Solutions;