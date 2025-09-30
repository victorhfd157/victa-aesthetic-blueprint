import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import natachaLogo from '@/assets/clients/natacha.png';
import tecfilLogo from '@/assets/clients/tecfil.png';
import wittelLogo from '@/assets/clients/wittel.png';
import parada021Logo from '@/assets/clients/parada021.png';

const testimonials = [
  {
    id: 1,
    text: "A VICTA automatizou o nosso atendimento e reduziu em 40% o tempo médio de resposta. Agora focamos no que realmente importa: crescimento.",
    author: "João Martins",
    role: "CEO, TechCorp",
    initials: "JM",
    rating: 5
  },
  {
    id: 2,
    text: "Implementamos a solução de IA da VICTA e conseguimos processar 300% mais pedidos com a mesma equipa. A eficiência é impressionante!",
    author: "Maria Silva",
    role: "Diretora de Operações, LogiFlow",
    initials: "MS",
    rating: 5
  },
  {
    id: 3,
    text: "O chatbot inteligente da VICTA transformou a nossa experiência do cliente. Reduzimos reclamações em 60% e aumentamos a satisfação drasticamente.",
    author: "Carlos Pereira",
    role: "Gerente de Atendimento, ServicePro",
    initials: "CP",
    rating: 5
  },
  {
    id: 4,
    text: "A automação de processos da VICTA nos permitiu escalar sem contratar mais pessoas. ROI de 400% no primeiro ano!",
    author: "Ana Costa",
    role: "CFO, FinanceHub",
    initials: "AC",
    rating: 5
  },
  {
    id: 5,
    text: "Com a VICTA, nossos agentes podem focar em casos complexos enquanto a IA resolve 80% das questões básicas. Produtividade nunca foi tão alta.",
    author: "Pedro Santos",
    role: "Head de Tecnologia, Digital Plus",
    initials: "PS",
    rating: 5
  }
];

const clientLogos = [
  { name: "Natacha", logo: natachaLogo },
  { name: "Tecfil", logo: tecfilLogo },
  { name: "Wittel", logo: wittelLogo },
  { name: "Parada 021", logo: parada021Logo },
  { name: "Natacha", logo: natachaLogo },
  { name: "Tecfil", logo: tecfilLogo },
  { name: "Wittel", logo: wittelLogo },
  { name: "Parada 021", logo: parada021Logo },
];

const Clients = () => {
  return (
    <section id="clients" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-muted/10 via-background to-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Quem já confia na <span className="gradient-text">VICTA</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empresas de diversos sectores já transformaram suas operações com as nossas soluções.
          </p>
        </div>

        {/* Client Logos - Infinite Scroll */}
        <div className="relative overflow-hidden mb-16 md:mb-20">
          <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 mx-8 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-70"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 max-w-full object-contain transition-opacity duration-300"
                  onError={(e) => console.error('Erro ao carregar imagem:', client.name, e)}
                  onLoad={() => console.log('Imagem carregada:', client.name)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="glass rounded-xl md:rounded-2xl p-6 md:p-10 lg:p-12 text-center shadow-card transition-all duration-500">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.initials}</span>
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold">{testimonial.author}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 md:-left-12 glass border-white/20 text-white hover:bg-white/10" />
            <CarouselNext className="right-4 md:-right-12 glass border-white/20 text-white hover:bg-white/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Clients;