import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Differentials from '@/components/Differentials';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
