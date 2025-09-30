import { Star } from 'lucide-react';
const Clients = () => {
  return <section id="clients" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-muted/10 via-background to-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Quem já confia na <span className="gradient-text">VICTA</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Empresas de diversos sectores já transformaram suas operações com as nossas soluções.</p>
        </div>

        {/* Placeholder for Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {[1, 2, 3, 4, 5, 6].map(index => <div key={index} className="glass rounded-xl p-6 flex items-center justify-center h-20 transition-all duration-300 hover:scale-105">
              <div className="text-muted-foreground text-sm font-medium">
                Cliente {index}
              </div>
            </div>)}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl md:rounded-2xl p-6 md:p-10 lg:p-12 text-center shadow-card">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-6 w-6 text-yellow-400 fill-yellow-400" />)}
            </div>
            
            <blockquote className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed italic">
              "A VICTA automatizou o nosso atendimento e reduziu em 40% o tempo médio de resposta. 
              Agora focamos no que realmente importa: crescimento."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JM</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">João Martins</div>
                <div className="text-muted-foreground text-sm">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Clients;