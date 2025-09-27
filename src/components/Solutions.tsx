import { Brain, MessageSquare, Zap, BarChart3, Shield, Cog } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'Agentes Inteligentes',
    description: 'Chatbots avançados com IA conversacional para atendimento 24/7 e automação de vendas.',
    features: ['Processamento Natural', 'Aprendizado Contínuo', 'Integração Multi-canal']
  },
  {
    icon: MessageSquare,
    title: 'Automação de Conversas',
    description: 'Sistemas que qualificam leads, agendam reuniões e nutrem prospects automaticamente.',
    features: ['Qualificação de Leads', 'Agendamento Automático', 'Follow-up Inteligente']
  },
  {
    icon: Zap,
    title: 'Integração de Sistemas',
    description: 'Conectamos suas ferramentas existentes para criar fluxos de trabalho inteligentes.',
    features: ['APIs Personalizadas', 'Sincronização Automática', 'Fluxos Otimizados']
  },
  {
    icon: BarChart3,
    title: 'Analytics Preditiva',
    description: 'Dashboards inteligentes que antecipam tendências e otimizam decisões estratégicas.',
    features: ['Previsões Precisas', 'Insights Acionáveis', 'Relatórios Automáticos']
  },
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Proteção de dados com criptografia e compliance total com LGPD e regulamentações.',
    features: ['LGPD Compliant', 'Criptografia End-to-End', 'Auditoria Completa']
  },
  {
    icon: Cog,
    title: 'Personalização Total',
    description: 'Soluções sob medida que se adaptam perfeitamente aos processos do seu negócio.',
    features: ['Desenvolvimento Custom', 'Treinamento Específico', 'Suporte Dedicado']
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Nossas Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforme sua operação com inteligência artificial personalizada para cada etapa 
            do seu processo de negócio.
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
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>

                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
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