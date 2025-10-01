import { TrendingUp, DollarSign, Zap, BarChart3 } from 'lucide-react';
import { GlowingBorder } from '@/components/ui/glowing-border';

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
    <section id="differentials" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Resultados que fazem diferença</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 100 empresas já transformaram suas operações conosco. 
            Descubra o que nos torna únicos no mercado de IA empresarial.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-20 px-4">
          <GlowingBorder containerClassName="h-full">
            <div className="text-center glass h-full rounded-xl p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">100+</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Clientes Ativos</div>
            </div>
          </GlowingBorder>
          <GlowingBorder containerClassName="h-full">
            <div className="text-center glass h-full rounded-xl p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">95%</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Taxa de Sucesso</div>
            </div>
          </GlowingBorder>
          <GlowingBorder containerClassName="h-full">
            <div className="text-center glass h-full rounded-xl p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Suporte Ativo</div>
            </div>
          </GlowingBorder>
          <GlowingBorder containerClassName="h-full">
            <div className="text-center glass h-full rounded-xl p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">3x</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">ROI Médio</div>
            </div>
          </GlowingBorder>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <GlowingBorder
                key={index}
                containerClassName="h-full"
                className="h-full"
              >
                <div
                  className="glass h-full rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{differential.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{differential.description}</p>
                    </div>
                  </div>
                </div>
              </GlowingBorder>
            );
          })}
        </div>

        {/* Process Timeline */}
        <div className="mt-16 md:mt-20 lg:mt-24 px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
            <span className="gradient-text">Como funciona</span>
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="text-center glass rounded-xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-glow">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">Consultoria Gratuita</h4>
              <p className="text-sm sm:text-base text-muted-foreground">Diagnóstico inicial com engenheiro de IA.</p>
            </div>
            
            <GlowingBorder containerClassName="h-full">
              <div className="text-center glass h-full rounded-xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-glow">
                  <span className="text-xl sm:text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">Escopo e Proposta</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Soluções à medida, custos claros e previsíveis.</p>
              </div>
            </GlowingBorder>
            
            <GlowingBorder containerClassName="h-full">
              <div className="text-center glass h-full rounded-xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-glow">
                  <span className="text-xl sm:text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">Início do Projeto</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Implementação rápida com ganhos em semanas.</p>
              </div>
            </GlowingBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;