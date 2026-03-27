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
        <title>VICTA AI Solutions | Automação e Inteligência Artificial Empresarial</title>
        <meta name="description" content="Líder em Agentes de IA e Automação Empresarial. Transformamos negócios com soluções escaláveis, chatbots inteligentes e inovação digital sob medida." />
        <meta name="keywords" content="inteligência artificial, automação empresarial, agentes de IA, chatbots personalizados, transformação digital, VICTA AI" />
        <link rel="canonical" href="https://victaaisolutions.com/" />
        <meta property="og:title" content="VICTA AI Solutions - IA de Próxima Geração" />
        <meta property="og:description" content="Potencialize seu negócio com agentes de IA autônomos e arquiteturas escaláveis." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "VICTA AI Solutions",
              "alternateName": ["VICTA AI", "VICTA"],
              "url": "https://victaaisolutions.com"
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VICTA AI Solutions",
              "url": "https://victaaisolutions.com",
              "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/rF1B2QstAUfuAwPCXFmZDf9t0UF2/uploads/1759176761396-Imagem Gerada Gemini (4).png",
              "description": "Soluções de Inteligência Artificial que escalam negócios através de automação inteligente.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Portugal"
              },
              "sameAs": [
                "https://linkedin.com/company/victa-ai",
                "https://instagram.com/victa.ai",
                "https://twitter.com/victa_ai"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+351-960-263-588",
                "contactType": "customer service",
                "email": "info@victaaisolutions.com"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Agentes Autônomos de IA",
                  "description": "Desenvolvimento de agentes que executam tarefas complexas."
                },
                {
                  "@type": "Service",
                  "name": "Automação de Workflows",
                  "description": "Otimização de processos repetitivos sem código."
                }
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Em quanto tempo verei resultados?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Em até 30 dias, na maioria dos projetos. Implementamos soluções que geram impacto imediato, com melhorias contínuas ao longo do tempo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Preciso de equipa de tecnologia interna?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não, a VICTA trata da implementação e suporte. Nossa equipe especializada cuida de todo o processo técnico, desde o desenvolvimento até a manutenção."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais sectores podem usar as soluções da VICTA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Retalho, serviços, financeiro, saúde e muito mais. Nossas soluções são adaptáveis a qualquer sector que busque automatização e eficiência."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Qual é o investimento necessário?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O investimento varia conforme a complexidade e escopo do projeto. Oferecemos soluções escaláveis que se adequam ao orçamento e necessidades da sua empresa."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como garantem a segurança dos dados?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Utilizamos protocolos de segurança avançados, criptografia end-to-end e compliance total com LGPD. Seus dados estão sempre protegidos e seguros."
                  }
                }
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Início",
                  "item": "https://victaaisolutions.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Soluções",
                  "item": "https://victaaisolutions.com/#solutions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Diferenciais",
                  "item": "https://victaaisolutions.com/#differentials"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contato",
                  "item": "https://victaaisolutions.com/#contact"
                }
              ]
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
