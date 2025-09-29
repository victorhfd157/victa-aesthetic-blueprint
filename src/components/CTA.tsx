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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto shadow-card">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Pronto para crescer com IA?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme processos, reduza custos e conquiste novos resultados com a VICTA.
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold px-12 py-4 rounded-full shadow-glow hover:scale-105 hover:shadow-xl group"
          >
            Solicitar Demonstração
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;