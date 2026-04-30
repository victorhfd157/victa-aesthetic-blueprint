import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Presentation, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import victaLogo from '@/assets/victa-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'solutions', 'differentials', 'clients', 'faq', 'contact'];
    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      setIsScrolled(window.scrollY > 20);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleScroll = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'solutions', label: 'Soluções' },
    { id: 'differentials', label: 'Diferenciais' },
    { id: 'clients', label: 'Clientes' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <>
      <ScrollProgress />
      <motion.nav
        aria-label="Navegação principal"
        className={`fixed z-50 transition-all duration-500 ${isScrolled ? 'top-4 left-4 right-4 glass border border-glass-border shadow-glass py-2 rounded-2xl mx-auto max-w-7xl' : 'top-0 left-0 right-0 bg-transparent py-6'}`}
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.button onClick={() => scrollToSection('hero')} className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
              <img 
                src={victaLogo} 
                alt="VICTA AI Solutions - Agentes Inteligentes e Automação" 
                title="VICTA AI Solutions"
                className="h-12 md:h-16 w-auto" 
                loading="eager"
                width="150"
                height="64"
              />
              <span className="text-xl font-display font-bold gradient-text hidden sm:block">VICTA AI</span>
            </motion.button>

            <div className="hidden lg:flex items-center">
              <div className="glass rounded-full px-2 py-2 border border-glass-border">
                <div className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === item.id ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >
                      {activeSection === item.id && (
                        <motion.div layoutId="activeSection" className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/servicos" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-primary/20 text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all">
                <Presentation className="w-4 h-4" /> Meu Projeto
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-glow group">
                  <span className="flex items-center gap-2">Solicitar Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </Button>
              </motion.div>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Abrir menu de navegação" className="hover:bg-primary/10"><Menu className="h-6 w-6" aria-hidden="true" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass border-l border-glass-border w-80">
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                      className={`text-left px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-primary/10 text-primary border border-primary/20' : 'text-foreground/70 hover:text-foreground hover:bg-primary/5'}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="border-t border-glass-border my-4" />
                  <Link to="/servicos" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-primary/5">
                    <Presentation className="w-4 h-4" /> Meu Projeto
                  </Link>
                  <Button onClick={() => scrollToSection('contact')} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow mt-2">
                    Solicitar Demonstração
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
