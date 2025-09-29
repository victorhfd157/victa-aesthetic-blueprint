import { Brain, MessageSquare, Zap, BarChart3, Shield, Cog } from 'lucide-react';

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
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">As nossas soluções em IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções inteligentes que geram resultados comprovados e transformam a sua operação.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-105 group shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{solution.description}</p>
                </div>

                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Pronto para revolucionar seu negócio?
            </h3>
            <p className="text-foreground/80 mb-6 text-lg">
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