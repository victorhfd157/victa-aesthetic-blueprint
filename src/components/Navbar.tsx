import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import victaLogo from '@/assets/victa-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass glass-hover shadow-glass' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={victaLogo} 
              alt="VICTA AI Solutions" 
              className="h-10 w-auto glow-primary transition-smooth hover:scale-105 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-foreground transition-smooth hover:text-primary text-sm font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-foreground/80 hover:text-foreground transition-smooth hover:text-primary text-sm font-medium"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('differentials')}
              className="text-foreground/80 hover:text-foreground transition-smooth hover:text-primary text-sm font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-foreground/80 hover:text-foreground transition-smooth hover:text-primary text-sm font-medium"
            >
              Clientes
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-smooth hover:text-primary text-sm font-medium"
            >
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary hover:opacity-90 transition-smooth text-white font-semibold px-6 py-2 rounded-full shadow-glow hover:scale-105"
          >
            Solicitar Demonstração
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;