import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface GlowCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: 'default' | 'lg';
}

/**
 * High-impact CTA: rotating gradient border + shimmer pass on hover.
 * The button itself is a regular <button>; visual glow is layered around it.
 */
export const GlowCTA = forwardRef<HTMLButtonElement, GlowCTAProps>(
  ({ className, children, asChild, size = 'lg', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const heightClass = size === 'lg' ? 'h-14 px-8 text-base' : 'h-11 px-6 text-sm';

    return (
      <span className="relative inline-flex group/glow">
        {/* Animated halo */}
        <span
          aria-hidden="true"
          className="absolute -inset-[2px] rounded-full opacity-70 blur-md transition-opacity duration-500 group-hover/glow:opacity-100"
          style={{
            background:
              'conic-gradient(from var(--angle, 0deg), hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
            animation: 'border-rotate 4s linear infinite',
          }}
        />
        <Comp
          ref={ref}
          className={cn(
            'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold',
            'bg-primary text-primary-foreground',
            'shadow-[0_0_30px_-10px_hsl(var(--primary))]',
            'transition-all duration-300',
            'hover:scale-[1.03] hover:shadow-[0_0_50px_-8px_hsl(var(--primary))]',
            'active:scale-[0.97]',
            'overflow-hidden',
            heightClass,
            className
          )}
          {...props}
        >
          {/* Shimmer overlay */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/glow:animate-shimmer-cta"
            style={{ backgroundSize: '200% 100%' }}
          />
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </Comp>
      </span>
    );
  }
);
GlowCTA.displayName = 'GlowCTA';
