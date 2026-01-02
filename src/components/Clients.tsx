import { Star, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { motion } from 'framer-motion';
import { TiltCard } from '@/components/ui/tilt-card';
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
    <section id="clients" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-muted/10 via-background to-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-4 h-4" />
            <span>Clientes Satisfeitos</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Quem já confia na <span className="gradient-text">VICTA</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empresas de diversos sectores já transformaram suas operações com as nossas soluções.
          </p>
        </motion.div>

        {/* Client Logos - Infinite Scroll with fade edges */}
        <motion.div 
          className="relative overflow-hidden mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40 h-20 mx-8 flex items-center justify-center"
                whileHover={{ scale: 1.15, opacity: 1 }}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}>
                  <TiltCard tiltMaxAngleX={3} tiltMaxAngleY={3}>
                    <GlowingBorder containerClassName="h-full" className="h-full">
                      <div className="glass h-full rounded-xl md:rounded-2xl p-6 md:p-10 lg:p-12 text-center shadow-card">
                        {/* Stars with animation */}
                        <motion.div 
                          className="flex justify-center mb-6 gap-1"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, rotate: -180 }}
                              whileInView={{ opacity: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.1 * i }}
                            >
                              <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground mb-6 md:mb-8 leading-relaxed italic">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div className="flex items-center justify-center space-x-4">
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <span className="text-primary-foreground font-bold">{testimonial.initials}</span>
                          </motion.div>
                          <div className="text-left">
                            <div className="text-foreground font-semibold">{testimonial.author}</div>
                            <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </GlowingBorder>
                  </TiltCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 md:-left-12 glass border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all" />
            <CarouselNext className="right-4 md:-right-12 glass border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
