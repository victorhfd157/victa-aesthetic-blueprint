'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GradientCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export const GradientCard = ({ icon: Icon, title, description, features, index }: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden h-full"
      style={{
        transformStyle: "preserve-3d",
        backgroundColor: "hsl(var(--card))",
        minHeight: "450px",
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: { delay: index * 0.1, duration: 0.5 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Dark background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background)) 70%)",
        }}
        animate={{
          z: -1
        }}
      />

      {/* Noise texture */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        animate={{
          z: -0.5
        }}
      />

      {/* Gradient glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, hsl(var(--primary) / 0.7) -10%, transparent 70%),
            radial-gradient(ellipse at bottom left, hsl(var(--secondary) / 0.7) -10%, transparent 70%)
          `,
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Central glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
        style={{
          background: `radial-gradient(circle at bottom center, hsl(var(--accent) / 0.7) -20%, transparent 60%)`,
          filter: "blur(45px)",
        }}
        animate={{
          opacity: isHovered ? 0.85 : 0.75,
          y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
          z: 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
        style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 20px 4px hsl(var(--primary) / 0.9), 0 0 30px 6px hsl(var(--secondary) / 0.7)`
            : `0 0 15px 3px hsl(var(--primary) / 0.8), 0 0 25px 5px hsl(var(--secondary) / 0.6)`,
          opacity: isHovered ? 1 : 0.9,
          z: 0.5
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative flex flex-col h-full p-8 z-40"
        animate={{
          z: 2
        }}
      >
        {/* Icon circle */}
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-primary"
          style={{
            position: "relative",
            overflow: "hidden"
          }}
          initial={{ filter: "blur(3px)", opacity: 0.7 }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            boxShadow: isHovered
              ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2)"
              : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15)",
            z: isHovered ? 10 : 5,
            y: isHovered ? -2 : 0,
            rotateX: isHovered ? -rotation.x * 0.5 : 0,
            rotateY: isHovered ? -rotation.y * 0.5 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="mb-auto"
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-3"
            style={{
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
              filter: "blur(0px)",
              opacity: 1,
              transition: { duration: 1.2, delay: 0.2 }
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-sm mb-6 text-muted-foreground leading-relaxed"
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
              filter: "blur(0px)",
              opacity: 0.85,
              transition: { duration: 1.2, delay: 0.4 }
            }}
          >
            {description}
          </motion.p>

          {/* Features list */}
          <motion.div 
            className="space-y-2"
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              transition: { duration: 1.2, delay: 0.6 }
            }}
          >
            {features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
