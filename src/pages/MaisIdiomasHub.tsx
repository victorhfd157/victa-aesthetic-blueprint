import { Suspense, lazy } from 'react';
import MaisIdiomasNavbar from '@/components/maisidiomas/MaisIdiomasNavbar';
import MaisIdiomasHero from '@/components/maisidiomas/MaisIdiomasHero';
import { SectionSkeleton, CardsSkeleton } from '@/components/ui/section-skeleton';

import MaisIdiomasMarquee from '@/components/maisidiomas/MaisIdiomasMarquee';

// Lazy load sections below the fold
const MaisIdiomasDifferentials = lazy(() => import('@/components/maisidiomas/MaisIdiomasDifferentials'));
const MaisIdiomasRoleCards = lazy(() => import('@/components/maisidiomas/MaisIdiomasRoleCards'));
const MaisIdiomasCTA = lazy(() => import('@/components/maisidiomas/MaisIdiomasCTA'));
const MaisIdiomasFooter = lazy(() => import('@/components/maisidiomas/MaisIdiomasFooter'));

const MaisIdiomasHub = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <MaisIdiomasNavbar />
            <MaisIdiomasHero />
            <MaisIdiomasMarquee />
            <div className="relative">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2995CC]/5 to-transparent pointer-events-none" />

                <Suspense fallback={<CardsSkeleton count={3} />}>
                    <MaisIdiomasDifferentials />
                </Suspense>

                <Suspense fallback={<CardsSkeleton count={3} />}>
                    <MaisIdiomasRoleCards />
                </Suspense>

                <Suspense fallback={<SectionSkeleton />}>
                    <MaisIdiomasCTA />
                </Suspense>

                <Suspense fallback={<SectionSkeleton />}>
                    <MaisIdiomasFooter />
                </Suspense>
            </div>
        </div>
    );
};

export default MaisIdiomasHub;
