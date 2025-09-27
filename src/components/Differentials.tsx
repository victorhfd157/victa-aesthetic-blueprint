import { Target, Clock, Users, TrendingUp } from 'lucide-react';

const differentials = [
  {
    icon: Target,
    title: 'Precisão Cirúrgica',
    description: 'Soluções desenvolvidas especificamente para seu negócio, garantindo máxima eficácia.'
  },
  {
    icon: Clock,
    title: 'Implementação Rápida',
    description: 'Do projeto à produção em semanas, não meses. Resultados visíveis desde o primeiro dia.'
  },
  {
    icon: Users,
    title: 'Suporte Especializado',
    description: 'Equipe dedicada de especialistas em IA disponível para otimizar continuamente seus resultados.'
  },
  {
    icon: TrendingUp,
    title: 'ROI Comprovado',
    description: 'Nossos clientes veem em média 3x de retorno sobre investimento nos primeiros 6 meses.'
  }
];

const Differentials = () => {
  return (
    <section id="differentials" className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">VICTA?</span>
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
            <div className="text-muted-foreground">Clientes Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">95%</div>
            <div className="text-muted-foreground">Taxa de Sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Suporte Ativo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">3x</div>
            <div className="text-muted-foreground">ROI Médio</div>
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
                    <h3 className="text-xl font-bold text-white mb-3">{differential.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
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
              <h4 className="text-xl font-semibold text-white mb-3">Análise Detalhada</h4>
              <p className="text-muted-foreground">Mapeamos seus processos atuais e identificamos oportunidades de automação com maior impacto.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Desenvolvimento Ágil</h4>
              <p className="text-muted-foreground">Criamos e implementamos soluções personalizadas usando metodologias ágeis para entregas rápidas.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Otimização Contínua</h4>
              <p className="text-muted-foreground">Monitoramos performance e otimizamos constantemente para maximizar seus resultados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;