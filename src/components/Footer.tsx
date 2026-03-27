import { Linkedin, Mail, Phone, Instagram, Twitter, ArrowUp } from 'lucide-react';
import victaLogo from '@/assets/victa-logo.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:info@victaaisolutions.com", label: "Email" },
    { icon: Phone, href: "tel:+351960263588", label: "Telefone" },
    { icon: Linkedin, href: "https://linkedin.com/company/victa-ai", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/victa.ai", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/victa_ai", label: "Twitter" },
  ];

  const quickLinks = [
    { label: "Home", section: "hero" },
    { label: "Soluções", section: "solutions" },
    { label: "Sobre Nós", section: "differentials" },
    { label: "Contato", section: "contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer ref={footerRef} className="bg-background border-t border-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16 max-w-7xl relative z-10"
        style={{ opacity, y }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Logo and Description */}
          <motion.div className="sm:col-span-2 text-center sm:text-left" variants={itemVariants}>
            <motion.div className="flex justify-center sm:justify-start">
              <img
                src={victaLogo}
                alt="VICTA AI Solutions - Soluções de IA Empresarial"
                className="h-10 md:h-12 w-auto mb-4 md:mb-6 glow-primary"
              />
            </motion.div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto sm:mx-0">
              Transformamos negócios através de soluções inteligentes em IA.
              Automatização, conversão e crescimento sustentável para empresas que pensam no futuro.
            </p>
            <div className="flex space-x-3 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 400 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.section}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.section)}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              {[
                { label: "Email", value: "info@victaaisolutions.com" },
                { label: "Telefone", value: "+351 960 263 588" },
                { label: "Localização", value: "Portugal e Global" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-white font-medium">{item.label}:</span><br />
                  <motion.span
                    className="hover:text-primary transition-colors cursor-default"
                    whileHover={{ x: 3 }}
                  >
                    {item.value}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-muted/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} VICTA AI Solutions. Todos os direitos reservados.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end">
            {["Política de Privacidade", "Termos de Uso", "LGPD"].map((text, index) => (
              <motion.a
                key={text}
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {text}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Voltar ao topo"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;