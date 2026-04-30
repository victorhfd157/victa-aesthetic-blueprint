import { cn } from '@/lib/utils';

interface AuroraMeshProps {
  className?: string;
  intensity?: 'subtle' | 'normal' | 'strong';
}

/**
 * Aurora UI mesh background — large flowing radial gradients with slow animation.
 * Premium SaaS atmospheric effect (Linear, Vercel, Stripe style).
 * Respects prefers-reduced-motion via global CSS reset.
 */
export const AuroraMesh = ({ className, intensity = 'normal' }: AuroraMeshProps) => {
  const opacity = intensity === 'subtle' ? 0.35 : intensity === 'strong' ? 0.7 : 0.5;

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      style={{ opacity }}
    >
      {/* Layer 1 - cyan blob top-left */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[60vw] w-[60vw] rounded-full blur-[100px] animate-aurora-1"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.55), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Layer 2 - violet blob bottom-right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[55vw] w-[55vw] rounded-full blur-[100px] animate-aurora-2"
        style={{
          background:
            'radial-gradient(circle at 70% 70%, hsl(var(--secondary) / 0.5), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Layer 3 - blue accent center */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[45vw] w-[45vw] rounded-full blur-[120px] animate-aurora-3"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, hsl(217 91% 60% / 0.35), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Subtle grain to avoid banding */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")',
        }}
      />
    </div>
  );
};
