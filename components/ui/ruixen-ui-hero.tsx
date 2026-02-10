"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WaterRippleEffect } from "@/components/ui/water-ripple-effect";
import { cn } from "@/lib/utils";

const HERO_COPY = {
  badge: "AI Revenue Channel",
  headline: "The #1 Fridge-Door Revenue Channel",
  subheadline:
    "An AI revenue touchpoint that moves the next step to the fridge door—seen 10–20+ times at home every day.",
  supportingLine: "Owned in the home. One-tap next steps. Measurable actions.",
  cta: "Book a Demo",
  ctaHref: "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
};

const FEATURES = [
  "Highest daily-life exposure—seen in repeated household moments",
  "Algorithm-free reach—no feed, no inbox, no platform dependency",
  "Instant action path—attention to action in one tap",
  "Persistent, owned touchpoint—stays put, cost doesn't scale with impressions",
];

export function RuixenUiHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}

      id="hero"
      className="relative overflow-hidden w-full flex items-center"
      style={{ height: "calc(56.25vw - 180px)" }}
    >
      {/* Background with parallax - keep existing effect */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        >
          <source src="/homepage/2月10日(2).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F3ED]/80" />
        <WaterRippleEffect intensity={1.2} speed={0.8} />
      </motion.div>

      {/* Ruixen-style gradient overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-70" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={isLoaded ? { opacity: 0.3, scale: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={isLoaded ? { opacity: 0.2, scale: 1, x: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="w-full max-w-7xl mx-auto px-4 pt-16 md:pt-24 pb-20 relative z-10"
      >
        <div className="flex flex-col items-start justify-center gap-8 max-w-7xl mx-auto px-8 md:px-12 lg:px-16" style={{ transform: "translateX(-40px)" }}>
          {/* Text and CTA */}
          <div className="w-full space-y-8 text-left">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight text-black max-w-4xl"
              >
                {HERO_COPY.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl text-black/80 max-w-xl"
              >
                {HERO_COPY.subheadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="text-base md:text-lg text-black/70"
              >
                {HERO_COPY.supportingLine}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex justify-start"
            >
              <Link href={HERO_COPY.ctaHref} target="_blank">
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[240px]"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    {HERO_COPY.cta}
                  </span>
                </ShimmerButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
