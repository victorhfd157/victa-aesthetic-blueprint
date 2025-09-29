import { TrendingUp, DollarSign, Zap, BarChart3 } from 'lucide-react';

const differentials = [
  {
    icon: TrendingUp,
    title: 'Mais Conversões',
    description: 'Estratégias orientadas por dados que aumentam taxas de fecho.'
  },
  {
    icon: DollarSign,
    title: 'Menos Custos Operacionais',
    description: 'Redução significativa de tarefas manuais.'
  },
  {
    icon: Zap,
    title: 'Implementação Rápida',
    description: 'Projetos prontos em semanas, não meses.'
  },
  {
    icon: BarChart3,
    title: 'Escalabilidade Real',
    description: 'Cresça sem expandir equipas grandes.'
  }
];

const Differentials = () => {
  return (
    <section id="differentials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Resultados que fazem diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 100 empresas já transformaram suas operações conosco. 
            Descubra o que nos torna únicos no mercado de IA empresarial.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">100+</div>
            <div className="text-foreground/70">Clientes Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">95%</div>
            <div className="text-foreground/70">Taxa de Sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-foreground/70">Suporte Ativo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">3x</div>
            <div className="text-foreground/70">ROI Médio</div>
          </div>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-105 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{differential.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{differential.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Como funciona</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Consultoria Gratuita</h4>
              <p className="text-foreground/70">Diagnóstico inicial com engenheiro de IA.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Escopo e Proposta</h4>
              <p className="text-foreground/70">Soluções à medida, custos claros e previsíveis.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Início do Projeto</h4>
              <p className="text-foreground/70">Implementação rápida com ganhos em semanas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;