import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import victaLogo from '@/assets/victa-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'solutions', label: 'Soluções' },
    { id: 'differentials', label: 'Sobre Nós' },
    { id: 'clients', label: 'Clientes' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass glass-hover shadow-glass' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={victaLogo} 
              alt="VICTA AI Solutions" 
              className="h-12 w-auto glow-primary transition-smooth hover:scale-105 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Pill Navigation */}
          <div className="hidden md:flex items-center">
            <div className="glass rounded-full p-1 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${activeSection === item.id 
                        ? 'bg-gradient-primary text-white shadow-glow' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                      }
                    `}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary hover:opacity-90 transition-smooth text-white font-semibold px-6 py-2 rounded-full shadow-glow hover:scale-105"
          >
            Solicitar Demonstração
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;