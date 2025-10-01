import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="glass rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 text-center max-w-5xl mx-auto shadow-card">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="gradient-text">Pronto para crescer com IA?</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Transforme processos, reduza custos e conquiste novos resultados com a VICTA.
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-glow hover:scale-105 hover:shadow-xl group w-full sm:w-auto"
          >
            Solicitar Demonstração
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;