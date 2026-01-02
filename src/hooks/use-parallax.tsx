import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  offset?: number;
  direction?: 'up' | 'down';
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { offset = 50, direction = 'up' } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [offset, -offset] : [-offset, offset]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  );

  return { ref, y, opacity, scale, scrollYProgress };
};

export const useParallaxLayer = (
  scrollYProgress: MotionValue<number>,
  speed: number = 0.5
) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100 * speed]
  );

  return y;
};
