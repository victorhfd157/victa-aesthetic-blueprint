import { Linkedin, Mail, Phone, Instagram, Twitter } from 'lucide-react';
import victaLogo from '@/assets/victa-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-muted/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={victaLogo} 
              alt="VICTA AI Solutions" 
              className="h-12 w-auto mb-6 glow-primary"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Transformamos negócios através de soluções inteligentes em IA. 
              Automatização, conversão e crescimento sustentável para empresas que pensam no futuro.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:info@victa.ai" 
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-glow"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
              <a 
                href="tel:+5511999999999" 
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-glow"
              >
                <Phone className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com/company/victa-ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-glow"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/victa.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-glow"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://twitter.com/victa_ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-glow"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('differentials')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <span className="text-white font-medium">Email:</span><br />
                info@victa.ai
              </li>
              <li className="text-muted-foreground">
                <span className="text-white font-medium">Telefone:</span><br />
                +55 (11) 9 9999-9999
              </li>
              <li className="text-muted-foreground">
                <span className="text-white font-medium">Localização:</span><br />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} VICTA AI Solutions. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;