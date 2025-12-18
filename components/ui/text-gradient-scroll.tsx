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
  italic?: boolean;
};

type WordType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
  italic?: boolean;
};

type CharType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
  italic?: boolean;
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

  // Parse text for bold markers (**text**) and italic markers (*text*)
  const parseText = (text: string) => {
    const parts: Array<{ text: string; bold: boolean; italic: boolean }> = [];
    // First, find all bold markers (**text**)
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;
    const boldMatches: Array<{ start: number; end: number; text: string }> = [];

    while ((match = boldRegex.exec(text)) !== null) {
      boldMatches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[1],
      });
    }

    // Then, find italic markers (*text*) that are not part of bold markers
    const italicRegex = /\*([^*]+?)\*/g;
    const italicMatches: Array<{ start: number; end: number; text: string }> = [];

    while ((match = italicRegex.exec(text)) !== null) {
      // Check if this italic match overlaps with any bold marker
      const overlapsBold = boldMatches.some(
        (bm) => match.index < bm.end && match.index + match[0].length > bm.start
      );
      if (!overlapsBold) {
        italicMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[1],
        });
      }
    }

    // Combine and sort all matches
    const allMatches = [
      ...boldMatches.map((m) => ({ ...m, type: "bold" as const })),
      ...italicMatches.map((m) => ({ ...m, type: "italic" as const })),
    ].sort((a, b) => a.start - b.start);

    // Build parts array
    let lastIndex = 0;
    for (const match of allMatches) {
      if (match.start > lastIndex) {
        parts.push({ text: text.substring(lastIndex, match.start), bold: false, italic: false });
      }
      parts.push({
        text: match.text,
        bold: match.type === "bold",
        italic: match.type === "italic",
      });
      lastIndex = match.end;
    }

    if (lastIndex < text.length) {
      parts.push({ text: text.substring(lastIndex), bold: false, italic: false });
    }

    if (parts.length === 0) {
      parts.push({ text, bold: false, italic: false });
    }

    return parts;
  };

  const textParts = parseText(text);
  const words: Array<{ word: string; bold: boolean; italic: boolean }> = [];
  textParts.forEach((part) => {
    const partWords = part.text.split(" ");
    partWords.forEach((word) => {
      if (word.trim()) {
        words.push({ word, bold: part.bold, italic: part.italic });
      }
    });
  });

  return (
    <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
      <p ref={ref} className={cn("relative flex m-0 flex-wrap", className)}>
        {words.map(({ word, bold, italic }, i) => {
          if (bold) {
            // Bold text: no animation, just display with bold styling
            return (
              <strong key={i} className="relative me-2 mt-2 font-bold">
                {word}
              </strong>
            );
          }
          if (italic) {
            // Italic text: apply scroll animation with italic styling
            const start = i / words.length;
            const end = start + 1 / words.length;
            const content = type === "word" ? (
              <Word key={i} progress={scrollYProgress} range={[start, end]} italic>
                {word}
              </Word>
            ) : (
              <Letter key={i} progress={scrollYProgress} range={[start, end]} italic>
                {word}
              </Letter>
            );
            return <React.Fragment key={i}>{content}</React.Fragment>;
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

const Word = ({ children, progress, range, italic }: WordType) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative me-2 mt-2">
      <span style={{ position: "absolute", opacity: 0.1 }}>
        {italic ? <em>{children}</em> : children}
      </span>
      <motion.span style={{ transition: "all .5s", opacity: opacity }}>
        {italic ? <em>{children}</em> : children}
      </motion.span>
    </span>
  );
};

const Letter = ({ children, progress, range, italic }: LetterType) => {
  if (typeof children === "string") {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className="relative me-2 mt-2">
        {children.split("").map((char: string, i: number) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]} italic={italic}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
  return null;
};

const Char = ({ children, progress, range, italic }: CharType) => {
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
        {italic ? <em>{children}</em> : children}
      </span>
      <motion.span
        style={{
          transition: "all .5s",
          opacity: opacity,
        }}
      >
        {italic ? <em>{children}</em> : children}
      </motion.span>
    </span>
  );
};
