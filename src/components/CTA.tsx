import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <motion.div style={{ y }}>
          <GlowingBorder containerClassName="max-w-5xl mx-auto rounded-3xl p-[1px]">
            <div className="relative glass rounded-3xl p-12 md:p-20 text-center overflow-hidden hover:bg-glass/80 transition-colors duration-500 group">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shimmer" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight leading-[0.9]">
                  <span className="block text-white">Pronto para</span>
                  <span className="gradient-text">Transformar o Futuro?</span>
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Não fique para trás na revolução da IA. Agende uma consultoria estratégica e descubra o potencial inexplorado do seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-[0_0_40px_-10px_hsl(var(--primary))] hover:shadow-[0_0_60px_-10px_hsl(var(--primary))] hover:scale-105 transition-all duration-300 group"
                  >
                    Iniciar Agora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <span className="text-sm text-muted-foreground">
                    Sem compromisso. Resultados reais.
                  </span>
                </div>
              </motion.div>
            </div>
          </GlowingBorder>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;