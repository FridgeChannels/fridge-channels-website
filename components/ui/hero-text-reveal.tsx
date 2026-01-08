"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Helper function to extract text content from ReactNode
 * Used for word splitting when staggerWords is enabled
 */
function extractText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }
  if (typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join(" ");
  }
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as any).props?.children);
  }
  return "";
}

/**
 * Helper function to split text into words while preserving structure
 */
function splitIntoWords(text: string): string[] {
  // Split by spaces, but keep the spaces for proper rendering
  return text.split(/(\s+)/).filter(Boolean);
}

interface HeroTextRevealProps {
  /**
   * The text content to animate
   * Can be a string or ReactNode for more complex content
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Delay before animation starts (in seconds)
   */
  delay?: number;
  
  /**
   * Vertical translation distance (in pixels)
   * Default: 40px (matches Microsoft AI style)
   */
  translateY?: number;
  
  /**
   * Animation duration (in seconds)
   * Default: 0.7s (matches Microsoft AI style)
   */
  duration?: number;
  
  /**
   * Stagger delay between words (in seconds)
   * Default: 0.05s (50ms, matches Microsoft AI style)
   */
  staggerDelay?: number;
  
  /**
   * Whether to split text into words for stagger effect
   * If false, animates as a single element
   */
  staggerWords?: boolean;
  
  /**
   * Easing function
   * Default: "easeOut" (matches Microsoft AI style)
   */
  ease?: string | number[];
  
  /**
   * Whether animation should play only once
   */
  once?: boolean;
  
  /**
   * Viewport margin for trigger (negative values trigger earlier)
   */
  margin?: string;
}

/**
 * Hero Text Reveal Component
 * 
 * Microsoft AI / Apple / Linear style text reveal animation
 * 
 * Features:
 * - Fades in on scroll into viewport
 * - Moves upward slightly (translateY)
 * - Smooth ease-out transition
 * - Optional word-by-word stagger effect
 * - Plays once by default
 */
export function HeroTextReveal({
  children,
  className,
  delay = 0,
  translateY = 40,
  duration = 0.7,
  staggerDelay = 0.05,
  staggerWords = false,
  ease = "easeOut",
  once = true,
  margin = "-10%",
}: HeroTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin,
  });

  // Extract text for word splitting
  const textContent = useMemo(() => extractText(children), [children]);
  const words = useMemo(() => {
    if (!staggerWords) return [];
    return splitIntoWords(textContent).filter(word => word.trim().length > 0);
  }, [staggerWords, textContent]);

  // If staggerWords is true and we have text content, split into words
  if (staggerWords && words.length > 0 && typeof children === "string") {
    return (
      <motion.div
        ref={ref}
        className={cn("inline-block", className)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                y: translateY,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration,
                  delay: delay + index * staggerDelay,
                  ease,
                },
              },
            }}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Default: animate as a single element
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: translateY,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: translateY,
            }
      }
      transition={{
        duration,
        delay,
        ease,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

