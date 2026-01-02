import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  className?: string;
}

export const ScrollProgress = ({ className = '' }: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent z-[100] origin-left',
        className
      )}
      style={{ scaleX }}
    />
  );
};
