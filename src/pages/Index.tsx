import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Differentials from '@/components/Differentials';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AuroraBackground } from '@/components/ui/aurora-background';

const Index = () => {
  return (
    <AuroraBackground className="!h-auto !min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Solutions />
        <Differentials />
        <Clients />
        <CTA />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default Index;
