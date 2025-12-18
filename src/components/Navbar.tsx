import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Presentation } from 'lucide-react';
import victaLogo from '@/assets/victa-logo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['hero', 'solutions', 'differentials', 'clients', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const navItems = [{
    id: 'hero',
    label: 'Home'
  }, {
    id: 'solutions',
    label: 'Soluções'
  }, {
    id: 'differentials',
    label: 'Sobre Nós'
  }, {
    id: 'clients',
    label: 'Clientes'
  }, {
    id: 'contact',
    label: 'Contato'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass glass-hover shadow-glass' : 'bg-transparent'}`}>
      <div className="container px-4 md:px-8 lg:px-[40px] py-2 md:py-[6px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={victaLogo} 
              alt="VICTA AI Solutions" 
              onClick={() => scrollToSection('hero')} 
              className="h-20 md:h-28 lg:h-36 w-auto glow-primary transition-smooth hover:scale-105 cursor-pointer" 
            />
          </div>

          {/* Desktop Pill Navigation */}
          <div className="hidden md:flex items-center">
            <div className="glass rounded-full p-1 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-1">
                {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`
                      relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${activeSection === item.id ? 'bg-gradient-primary text-white shadow-glow' : 'text-foreground/70 hover:text-foreground hover:bg-white/5'}
                    `}>
                    {item.label}
                    {activeSection === item.id && <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-sm" />}
                  </button>)}
              </div>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/servicos"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-white/20 text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300"
            >
              <Presentation className="w-4 h-4" />
              Meu Projeto
            </Link>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-primary hover:opacity-90 transition-smooth text-white font-semibold px-6 py-2 rounded-full shadow-glow hover:scale-105"
            >
              Solicitar Demonstração
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass border-l border-white/10">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium
                      ${activeSection === item.id 
                        ? 'bg-gradient-primary text-white shadow-glow' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/5'}
                    `}
                  >
                    {item.label}
                  </button>
                ))}
                <Link 
                  to="/servicos"
                  className="flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium text-foreground/70 hover:text-foreground hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Presentation className="w-4 h-4" />
                  Meu Projeto
                </Link>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full mt-4 bg-gradient-primary hover:opacity-90 transition-smooth text-white font-semibold px-6 py-3 rounded-full shadow-glow"
                >
                  Solicitar Demonstração
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
};
export default Navbar;