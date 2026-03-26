import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { LiquidEther } from '@/components/ui/liquid-ether';
import { HeroSkeleton, CardsSkeleton, ContactSkeleton, SectionSkeleton } from '@/components/ui/section-skeleton';

// Lazy load sections below the fold
const Solutions = lazy(() => import('@/components/Solutions'));
const Differentials = lazy(() => import('@/components/Differentials'));
const Clients = lazy(() => import('@/components/Clients'));
const CTA = lazy(() => import('@/components/CTA'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>VICTA AI Solutions - Transforme seu negócio com Inteligência Artificial</title>
        <meta name="description" content="Soluções de IA que escalam seu negócio. Automatize processos, aumente conversões e reduza custos com agentes inteligentes e integrações estratégicas." />
        <meta property="og:title" content="VICTA AI Solutions - Transforme seu negócio com IA" />
        <meta property="og:description" content="Automatize processos, aumente conversões e reduza custos com agentes inteligentes." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VICTA AI Solutions",
              "url": "https://victa.ai",
              "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/rF1B2QstAUfuAwPCXFmZDf9t0UF2/uploads/1759176761396-Imagem Gerada Gemini (4).png",
              "description": "Soluções de IA que escalam seu negócio."
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <div className="relative">
        <LiquidEther 
          colors={['#38bdf8', '#818cf8', '#c084fc']} 
          speed={0.5} 
          opacity={0.2}
        />
        <Suspense fallback={<CardsSkeleton count={4} />}>
          <Solutions />
        </Suspense>
        <Suspense fallback={<CardsSkeleton count={4} />}>
          <Differentials />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CTA />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
