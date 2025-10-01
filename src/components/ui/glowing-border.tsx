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
          className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom left, rgba(172, 92, 255, 0.3) 0%, transparent 70%)`,
            filter: "blur(20px)",
            opacity: isHovered ? 0.7 : 0.4,
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.3) 0%, transparent 70%)`,
            filter: "blur(20px)",
            opacity: isHovered ? 0.7 : 0.4,
            transition: "opacity 0.3s ease",
          }}
        />
        
        {/* Bottom edge glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background: "linear-gradient(90deg, rgba(172, 92, 255, 0.5) 0%, rgba(138, 58, 185, 0.7) 50%, rgba(56, 189, 248, 0.5) 100%)",
            boxShadow: isHovered
              ? "0 0 15px 3px rgba(172, 92, 255, 0.6), 0 0 20px 4px rgba(138, 58, 185, 0.4)"
              : "0 0 10px 2px rgba(172, 92, 255, 0.4), 0 0 15px 3px rgba(138, 58, 185, 0.3)",
            opacity: isHovered ? 1 : 0.7,
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
