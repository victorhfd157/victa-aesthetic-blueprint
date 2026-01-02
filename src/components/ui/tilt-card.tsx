import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnable?: boolean;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
  transitionSpeed?: number;
  spotlightColor?: string;
}

export const TiltCard = ({
  children,
  className = '',
  glareEnable = true,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  scale = 1.02,
  transitionSpeed = 400,
  spotlightColor = 'rgba(56, 189, 248, 0.15)',
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -tiltMaxAngleX;
    const rotateYValue = (mouseX / (rect.width / 2)) * tiltMaxAngleY;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    const spotlightX = ((e.clientX - rect.left) / rect.width) * 100;
    const spotlightY = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPosition({ x: spotlightX, y: spotlightY });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
    setSpotlightPosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn('relative overflow-hidden', className)}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovering ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Spotlight overlay */}
      {glareEnable && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${spotlightPosition.x}% ${spotlightPosition.y}%, ${spotlightColor}, transparent 50%)`,
          }}
          animate={{
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};
