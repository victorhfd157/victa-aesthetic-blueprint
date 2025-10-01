'use client'
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  glowColor?: string;
  borderRadius?: string;
}

export const GlowingBorder = ({
  children,
  className,
  containerClassName,
  glowColor = "rgba(138, 58, 185, 0.8)",
  borderRadius = "1.5rem"
}: GlowingBorderProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn("relative", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius }}
    >
      {/* Glowing border effect */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ borderRadius }}
      >
        {isHovered && (
          <div
            className="absolute w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              filter: "blur(20px)",
              transition: "opacity 0.3s ease",
            }}
          />
        )}
        
        {/* Static corner glows */}
        <div
          className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom left, rgba(172, 92, 255, 0.6) 0%, transparent 70%)`,
            filter: "blur(25px)",
            opacity: isHovered ? 0.9 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.6) 0%, transparent 70%)`,
            filter: "blur(25px)",
            opacity: isHovered ? 0.9 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        />
        
        {/* Bottom edge glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, rgba(172, 92, 255, 0.7) 0%, rgba(138, 58, 185, 0.9) 50%, rgba(56, 189, 248, 0.7) 100%)",
            boxShadow: isHovered
              ? "0 0 20px 4px rgba(172, 92, 255, 0.8), 0 0 30px 6px rgba(138, 58, 185, 0.6)"
              : "0 0 15px 3px rgba(172, 92, 255, 0.6), 0 0 25px 5px rgba(138, 58, 185, 0.4)",
            opacity: isHovered ? 1 : 0.8,
            transition: "all 0.3s ease",
          }}
        />
      </div>

      {/* Content */}
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};
