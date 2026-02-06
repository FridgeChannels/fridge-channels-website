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
      className="relative overflow-hidden"
    >
      {/* Background with parallax - keep existing effect */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/bg-ethics-hero.webp)" }}
        />
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left - Text and CTA */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight text-black"
              >
                {HERO_COPY.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl text-black/80 max-w-xl mx-auto lg:mx-0"
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
              className="flex justify-center lg:justify-start"
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

          {/* Right - Feature card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full bg-[#F7F3ED]/90 backdrop-blur-sm border border-black/10 rounded-2xl p-6 shadow-lg mx-auto lg:mx-0">
              <div className="aspect-video relative overflow-hidden rounded-lg border border-black/10 mb-6 bg-black/5">
                <Image
                  src="/fridge_magnet_mockup.png"
                  alt="Fridge Channel display"
                  width={640}
                  height={360}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <ul className="space-y-4">
                {FEATURES.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="text-black shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-base text-black/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
