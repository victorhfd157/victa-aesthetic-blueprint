import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Differentials from '@/components/Differentials';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LiquidEther } from '@/components/ui/liquid-ether';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="relative">
        <LiquidEther 
          colors={['#38bdf8', '#818cf8', '#c084fc']} 
          speed={0.5} 
          opacity={0.2}
        />
        <Solutions />
        <Differentials />
        <Clients />
        <CTA />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
