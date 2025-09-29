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
    <section id="differentials" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Resultados que fazem diferença</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 100 empresas já transformaram suas operações conosco. 
            Descubra o que nos torna únicos no mercado de IA empresarial.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 md:mb-2">100+</div>
            <div className="text-sm md:text-base text-muted-foreground">Clientes Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 md:mb-2">95%</div>
            <div className="text-sm md:text-base text-muted-foreground">Taxa de Sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 md:mb-2">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground">Suporte Ativo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 md:mb-2">3x</div>
            <div className="text-sm md:text-base text-muted-foreground">ROI Médio</div>
          </div>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <div
                key={index}
                className="glass glass-hover rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-300 hover:scale-105 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{differential.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            <span className="gradient-text">Como funciona</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Consultoria Gratuita</h4>
              <p className="text-muted-foreground">Diagnóstico inicial com engenheiro de IA.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Escopo e Proposta</h4>
              <p className="text-muted-foreground">Soluções à medida, custos claros e previsíveis.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Início do Projeto</h4>
              <p className="text-muted-foreground">Implementação rápida com ganhos em semanas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;