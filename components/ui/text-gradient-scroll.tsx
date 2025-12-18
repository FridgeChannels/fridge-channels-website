"use client";

import React, { createContext, useContext, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type TextOpacityEnum = "none" | "soft" | "medium";
type ViewTypeEnum = "word" | "letter";

type TextGradientScrollType = {
  text: string;
  type?: ViewTypeEnum;
  className?: string;
  textOpacity?: TextOpacityEnum;
};

type LetterType = {
  children: React.ReactNode | string;
  progress: MotionValue<number>;
  range: number[];
};

type WordType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
};

type CharType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
};

type TextGradientScrollContextType = {
  textOpacity?: TextOpacityEnum;
  type?: ViewTypeEnum;
};

const TextGradientScrollContext = createContext<TextGradientScrollContextType>(
  {}
);

function useGradientScroll() {
  const context = useContext(TextGradientScrollContext);
  return context;
}

function TextGradientScroll({
  text,
  className,
  type = "letter",
  textOpacity = "soft",
}: TextGradientScrollType) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Parse text for bold markers (**text**)
  const parseText = (text: string) => {
    const parts: Array<{ text: string; bold: boolean }> = [];
    const regex = /\*\*(.*?)\*\*/g;
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the bold marker
      if (match.index > lastIndex) {
        parts.push({ text: text.substring(lastIndex, match.index), bold: false });
      }
      // Add the bold text
      parts.push({ text: match[1], bold: true });
      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ text: text.substring(lastIndex), bold: false });
    }

    // If no bold markers found, return the whole text as non-bold
    if (parts.length === 0) {
      parts.push({ text, bold: false });
    }

    return parts;
  };

  const textParts = parseText(text);
  const words: Array<{ word: string; bold: boolean }> = [];
  textParts.forEach((part) => {
    const partWords = part.text.split(" ");
    partWords.forEach((word) => {
      if (word.trim()) {
        words.push({ word, bold: part.bold });
      }
    });
  });

  return (
    <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
      <p ref={ref} className={cn("relative flex m-0 flex-wrap", className)}>
        {words.map(({ word, bold }, i) => {
          if (bold) {
            // Bold text: no animation, just display with bold styling
            return (
              <strong key={i} className="relative me-2 mt-2 font-bold">
                {word}
              </strong>
            );
          }
          // Regular text: apply scroll animation
          const start = i / words.length;
          const end = start + 1 / words.length;
          const content = type === "word" ? (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          ) : (
            <Letter key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Letter>
          );
          return <React.Fragment key={i}>{content}</React.Fragment>;
        })}
      </p>
    </TextGradientScrollContext.Provider>
  );
}

export { TextGradientScroll };

const Word = ({ children, progress, range }: WordType) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative me-2 mt-2">
      <span style={{ position: "absolute", opacity: 0.1 }}>{children}</span>
      <motion.span style={{ transition: "all .5s", opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

const Letter = ({ children, progress, range }: LetterType) => {
  if (typeof children === "string") {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className="relative me-2 mt-2">
        {children.split("").map((char: string, i: number) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
};

const Char = ({ children, progress, range }: CharType) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const { textOpacity } = useGradientScroll();

  return (
    <span>
      <span
        className={cn("absolute", {
          "opacity-0": textOpacity == "none",
          "opacity-10": textOpacity == "soft",
          "opacity-30": textOpacity == "medium",
        })}
      >
        {children}
      </span>
      <motion.span
        style={{
          transition: "all .5s",
          opacity: opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
