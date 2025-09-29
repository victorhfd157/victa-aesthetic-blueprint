import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <WavyBackground
      className="w-full"
      containerClassName="relative min-h-screen"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      waveWidth={50}
      backgroundFill="hsl(var(--background))"
      blur={10}
      speed="fast"
      waveOpacity={0.5}
    >
      <section id="hero" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="h-6 w-6 text-primary mr-2 animate-pulse" />
              <span className="text-primary font-semibold">Inteligência Artificial Avançada</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Soluções de IA</span>
              <br />
              <span className="text-white">que escalam</span>
              <br />
              <span className="text-white">o seu negócio</span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Automatize processos, aumente conversões e reduza custos com agentes inteligentes 
              e integrações estratégicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:scale-105 hover:shadow-xl group"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={scrollToSolutions}
                variant="outline" 
                size="lg"
                className="glass glass-hover border-primary/30 text-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Conhecer Soluções
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 shadow-glass float-animation">
              <div className="bg-gradient-primary rounded-2xl p-6 text-center">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">95%</div>
                    <div className="text-sm text-white/70">Automação</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">3x</div>
                    <div className="text-sm text-white/70">ROI Médio</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-white/70">Disponibilidade</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">60%</div>
                    <div className="text-sm text-white/70">Redução Custos</div>
                  </div>
                </div>
                <div className="text-white font-semibold">
                  Resultados Comprovados
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WavyBackground>
  );
};

export default Hero;