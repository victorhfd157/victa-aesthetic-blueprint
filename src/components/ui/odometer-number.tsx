import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OdometerNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

/**
 * L. Odometer-style animated number with per-digit roll.
 * Triggers when scrolled into view (whileInView equivalent).
 * Use ONLY for real numbers — never fake metrics.
 */
export const OdometerNumber = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className,
  decimals = 0,
}: OdometerNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(elapsed / duration, 1);
      const current = from + (value - from) * easeOut(t);
      setDisplay(current.toFixed(decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, decimals]);

  // Render with tabular-nums for stable width + each digit can roll
  const digits = display.split('');

  return (
    <span ref={ref} className={cn('inline-flex items-baseline tabular-nums', className)}>
      {prefix && <span>{prefix}</span>}
      <span className="inline-flex">
        {digits.map((d, i) => (
          <motion.span
            key={`${i}-${d}`}
            className="inline-block"
            initial={{ y: '40%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {d}
          </motion.span>
        ))}
      </span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
