"use client";

import React, { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

export interface GradientCardItem {
  title: string;
  description: string;
}

export interface GradientCardProps {
  title: string;
  description: string;
  items: GradientCardItem[];
  quote?: string;
  variant?: "light" | "dark";
  className?: string;
  /** Optional icon slot – no emoji/icons by default */
  icon?: ReactNode;
  /** When true, card is visually emphasized (scale, shadow, ring) */
  featured?: boolean;
  /** Card background: "dark" (default) or "white" */
  background?: "dark" | "white";
}

const glowColors = {
  dark: {
    shadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
    glowR: "rgba(172, 92, 255, 0.7)",
    glowL: "rgba(56, 189, 248, 0.7)",
    glowC: "rgba(161, 58, 229, 0.7)",
    boxShadowHover: "0 0 20px 4px rgba(172, 92, 255, 0.9), 0 0 30px 6px rgba(138, 58, 185, 0.7), 0 0 40px 8px rgba(56, 189, 248, 0.5)",
    boxShadow: "0 0 15px 3px rgba(172, 92, 255, 0.8), 0 0 25px 5px rgba(138, 58, 185, 0.6), 0 0 35px 7px rgba(56, 189, 248, 0.4)",
  },
  light: {
    shadow: "0 -10px 80px 10px rgba(194, 163, 107, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.4)",
    glowR: "rgba(194, 163, 107, 0.5)",
    glowL: "rgba(194, 163, 107, 0.4)",
    glowC: "rgba(194, 163, 107, 0.5)",
    boxShadowHover: "0 0 20px 4px rgba(194, 163, 107, 0.6), 0 0 30px 6px rgba(194, 163, 107, 0.4)",
    boxShadow: "0 0 15px 3px rgba(194, 163, 107, 0.5), 0 0 25px 5px rgba(194, 163, 107, 0.35)",
  },
};

export function GradientCard({
  title,
  description,
  items,
  quote,
  variant = "dark",
  className,
  icon,
  featured = false,
  background = "dark",
}: GradientCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const colors = glowColors[variant];
  const isLight = variant === "light";
  const isWhiteBg = background === "white";

  const bgBase = isWhiteBg ? "#ffffff" : isLight ? "#1a1d24" : "#0e131f";

  // Text colors
  const textMuted = isWhiteBg
    ? "text-gray-500"
    : isLight ? "text-gray-400" : "text-gray-300";

  const titleCls = isWhiteBg ? "text-gray-900" : "text-white";
  const itemTitleCls = isWhiteBg ? "text-gray-900" : "text-white";
  const quoteCls = isWhiteBg ? "text-gray-800" : "text-white/90";

  // Borders and dividers
  const borderMuted = isWhiteBg
    ? "border-gray-200"
    : isLight ? "border-white/5" : "border-white/10";

  const divideMuted = isWhiteBg
    ? "divide-gray-100"
    : isLight ? "divide-white/5" : "divide-white/10";

  const descBorderCls = isWhiteBg ? "border-gray-300" : "border-white/30";

  // Icon container styles
  const iconContainerCls = isWhiteBg
    ? "bg-gray-50 border-gray-200 text-gray-900"
    : "backdrop-blur-sm bg-white/10 border-white/20 text-white";

  const whiteShadow = "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.08)";
  const whiteFeaturedShadow = "0 12px 40px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1)";

  const featuredShadow = isWhiteBg
    ? (featured ? whiteFeaturedShadow : whiteShadow)
    : featured
      ? (isLight
        ? "0 -16px 120px 16px rgba(194, 163, 107, 0.35), 0 0 40px 4px rgba(194, 163, 107, 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.4)"
        : "0 -16px 120px 16px rgba(78, 99, 255, 0.35), 0 0 40px 4px rgba(172, 92, 255, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.5)")
      : colors.shadow;

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
      className={`relative w-full min-h-[420px] rounded-[32px] overflow-hidden ${featured ? "z-10 ring-2 ring-[#c2a36be6]/60 ring-offset-4 ring-offset-white shadow-2xl" : ""} ${className ?? ""}`}
      style={{
        transformStyle: "preserve-3d",
        backgroundColor: bgBase,
        boxShadow: featuredShadow,
        // Add a subtle border for white cards to define edges better against white bg
        border: isWhiteBg ? "1px solid rgba(0,0,0,0.05)" : "none",
      }}
      initial={{ y: 0, scale: featured ? 1.03 : 1 }}
      animate={{
        y: isHovered ? -8 : 0,
        scale: featured ? (isHovered ? 1.05 : 1.03) : isHovered ? 1.02 : 1,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection - Make more subtle for white bg */}
      <motion.div
        className="absolute inset-0 z-[35] pointer-events-none"
        style={{
          background: isWhiteBg
            ? "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.2) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? (isWhiteBg ? 0.3 : 0.7) : (isWhiteBg ? 0.1 : 0.5),
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Dark gradient bg - Hide on white bg */}
      {!isWhiteBg && (
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(180deg, #000000 0%, #000000 70%)" }}
        />
      )}

      {/* Noise overlay - Keep but maybe lighter for white bg? Keeping consistent for now but lowering opacity for white */}
      <div
        className={`absolute inset-0 mix-blend-overlay z-10 pointer-events-none ${isWhiteBg ? "opacity-10" : "opacity-30"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Smudge texture - Hide on white bg for cleaner look, or extremely subtle */}
      {!isWhiteBg && (
        <div
          className="absolute inset-0 opacity-10 mix-blend-soft-light z-[11] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='smudge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3' seed='5' stitchTiles='stitch'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23smudge)'/%3E%3C/svg%3E")`,
            backdropFilter: "blur(1px)",
          }}
        />
      )}

      {/* Glow bottom - Adjust for white bg to be more subtle or different blend mode */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, ${colors.glowR} -10%, rgba(79, 70, 229, 0) 70%),
            radial-gradient(ellipse at bottom left, ${colors.glowL} -10%, rgba(79, 70, 229, 0) 70%)
          `,
          filter: "blur(40px)",
          mixBlendMode: isWhiteBg ? "multiply" : "normal", // Darken for visibility on white
        }}
        animate={{
          opacity: isHovered ? (isWhiteBg ? 0.15 : 0.9) : (isWhiteBg ? 0.08 : 0.8), // Much lower opacity for white bg
          y: isHovered ? rotation.x * 0.5 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-[21] pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom center, ${colors.glowC} -20%, rgba(79, 70, 229, 0) 60%)`,
          filter: "blur(45px)",
          mixBlendMode: isWhiteBg ? "multiply" : "normal",
        }}
        animate={{
          opacity: isHovered ? (isWhiteBg ? 0.15 : 0.85) : (isWhiteBg ? 0.08 : 0.75),
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Bottom glow border - Subtle on white */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-[25] pointer-events-none"
        style={{
          background: isWhiteBg
            ? "linear-gradient(90deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.0) 100%)"
            : "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        animate={{
          boxShadow: isWhiteBg ? "none" : (isHovered ? colors.boxShadowHover : colors.boxShadow), // No heavy glow box shadow on white
          opacity: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Card content */}
      <div className="relative flex flex-col h-full p-8 md:p-10 z-[40]">
        <div className="flex items-center gap-4 mb-6">
          {icon ? (
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${iconContainerCls}`}>
              {icon}
            </div>
          ) : null}
          <h3 className={`text-2xl md:text-3xl font-bold font-display tracking-tight ${titleCls}`}>
            {title}
          </h3>
        </div>

        <p
          className={`text-lg mb-8 leading-relaxed border-l-2 pl-4 ${descBorderCls} ${textMuted}`}
        >
          {description}
        </p>

        <div
          className={`space-y-0 divide-y ${divideMuted} border-t border-b ${borderMuted} flex-1`}
        >
          {items.map((item, i) => (
            <div key={i} className="py-5 flex flex-col gap-1">
              <h4 className={`text-base font-bold uppercase tracking-wide ${itemTitleCls}`}>
                {item.title}
              </h4>
              <p className={`text-base leading-relaxed ${textMuted}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {quote ? (
          <p className={`text-lg italic font-medium opacity-90 pt-6 mt-4 border-t ${borderMuted} ${quoteCls}`}>
            {quote}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
