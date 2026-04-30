import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * K. Custom cursor — minimal dot + expanding ring on interactive hover.
 * Auto-disabled on touch devices and when prefers-reduced-motion.
 */
export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Spring for ring (lags slightly behind dot for premium feel)
  const ringX = useSpring(x, { damping: 25, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(y, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Detect: pointer-fine (mouse) AND no reduced motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || reducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(interactiveSelector)) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(interactiveSelector)) setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Center dot — instant */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] h-1.5 w-1.5 rounded-full bg-primary"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
      />
      {/* Expanding ring — springy */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9998] rounded-full border border-primary/60 transition-[width,height,opacity] duration-200 ease-out"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hovering ? 1 : 0.7,
          backdropFilter: 'invert(1)',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};
