import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionSkeletonProps {
  className?: string;
  variant?: 'hero' | 'cards' | 'contact' | 'default';
}

const shimmerTransition = {
  repeat: Infinity,
  duration: 1.5,
  ease: 'easeInOut' as const,
};

const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={cn('relative overflow-hidden rounded-lg bg-muted/30', className)}>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={shimmerTransition}
    />
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="container mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <SkeletonBox className="h-6 w-48" />
          <SkeletonBox className="h-16 w-full" />
          <SkeletonBox className="h-16 w-3/4" />
          <SkeletonBox className="h-6 w-full" />
          <SkeletonBox className="h-6 w-2/3" />
          <div className="flex gap-4 pt-4">
            <SkeletonBox className="h-12 w-48 rounded-full" />
            <SkeletonBox className="h-12 w-40 rounded-full" />
          </div>
        </div>
        <SkeletonBox className="h-80 rounded-2xl" />
      </div>
    </div>
  </div>
);

export const CardsSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className="py-20 px-4">
    <div className="container mx-auto max-w-7xl">
      <div className="text-center mb-16 space-y-4">
        <SkeletonBox className="h-8 w-40 mx-auto rounded-full" />
        <SkeletonBox className="h-12 w-96 mx-auto" />
        <SkeletonBox className="h-6 w-80 mx-auto" />
      </div>
      <div className={`grid md:grid-cols-2 lg:grid-cols-${count} gap-6`}>
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="glass p-6 rounded-xl space-y-4">
              <SkeletonBox className="h-14 w-14 rounded-xl" />
              <SkeletonBox className="h-6 w-3/4" />
              <SkeletonBox className="h-4 w-full" />
              <SkeletonBox className="h-4 w-2/3" />
              <div className="flex gap-2 pt-2">
                <SkeletonBox className="h-6 w-20 rounded-full" />
                <SkeletonBox className="h-6 w-24 rounded-full" />
                <SkeletonBox className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16 space-y-4">
        <SkeletonBox className="h-12 w-72 mx-auto" />
        <SkeletonBox className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="glass p-8 rounded-2xl space-y-6">
          <SkeletonBox className="h-8 w-48" />
          <div className="grid grid-cols-2 gap-4">
            <SkeletonBox className="h-12" />
            <SkeletonBox className="h-12" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SkeletonBox className="h-12" />
            <SkeletonBox className="h-12" />
          </div>
          <SkeletonBox className="h-32" />
          <SkeletonBox className="h-12 rounded-full" />
        </div>
        <div className="space-y-6">
          <div className="glass p-8 rounded-2xl space-y-6">
            <SkeletonBox className="h-8 w-56" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <SkeletonBox className="h-12 w-12 rounded-xl" />
                <div className="space-y-2 flex-1">
                  <SkeletonBox className="h-5 w-24" />
                  <SkeletonBox className="h-4 w-40" />
                </div>
              </div>
            ))}
          </div>
          <SkeletonBox className="h-48 rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
);

export const SectionSkeleton = ({ className, variant = 'default' }: SectionSkeletonProps) => {
  switch (variant) {
    case 'hero':
      return <HeroSkeleton />;
    case 'cards':
      return <CardsSkeleton />;
    case 'contact':
      return <ContactSkeleton />;
    default:
      return (
        <div className={cn('py-20 px-4', className)}>
          <div className="container mx-auto max-w-7xl space-y-8">
            <div className="text-center space-y-4">
              <SkeletonBox className="h-10 w-64 mx-auto" />
              <SkeletonBox className="h-6 w-96 mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <SkeletonBox key={i} className="h-48 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      );
  }
};

export default SectionSkeleton;
