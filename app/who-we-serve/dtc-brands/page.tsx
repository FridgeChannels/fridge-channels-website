"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SectionTransition } from "@/components/ui/section-transition";
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PilotSection } from "@/components/dtc-brands/pilot-section";
import { FaqSection } from "@/components/dtc-brands/faq-section";
import { FadingHeadlineSection } from "@/components/real-estate/fading-headline-section";
import { HorizontalScrollSection } from "@/components/ui/horizontal-scroll-section";

function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-5 md:py-5 lg:py-5" ref={ref}>
      <div className="mx-auto max-w-[1320px] px-8 md:px-12 lg:px-20">
        <div className="mb-20">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-ds-text leading-[1.2] tracking-tight">
            How It Works
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-12 lg:gap-16 border-t border-ds-border pt-12 overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
            hidden: {},
          }}
        >
          {/* Step 1 */}
          <motion.div
            className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] cursor-default px-6 py-6 md:px-8 md:py-8 rounded-lg"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 24 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-sm font-medium text-ds-text-secondary mb-6">01</span>
            <h3 className="text-xl font-medium text-ds-text mb-4">Deploy</h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Magnets ship with orders. Simple &quot;tap to connect&quot; instructions.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] cursor-default px-6 py-6 md:px-8 md:py-8 rounded-lg"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 24 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-sm font-medium text-ds-text-secondary mb-6">02</span>
            <h3 className="text-xl font-medium text-ds-text mb-4">Configure</h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Your content becomes bite-sized audio/text. AI learns FAQs, recommendations, reorders.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] cursor-default px-6 py-6 md:px-8 md:py-8 rounded-lg"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 24 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-sm font-medium text-ds-text-secondary mb-6">03</span>
            <h3 className="text-xl font-medium text-ds-text mb-4">Iterate</h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Bi-weekly reviews: adjust content, AI responses, timing based on data.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function DtcBrandsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-ds-primary selection:text-white">
      <Navigation />

      <main className="flex-1">
        {/* Full-background Hero Section */}
        <section className="relative w-full h-screen">
          {/* Background Image */}
          <Image
            src="/dtc/ChatGPT Image Feb 9, 2026, 01_54_55 PM.png"
            alt="HomeLoop Hero"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
            quality={100}
            sizes="100vw"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Content positioned over the image */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center text-left pt-16 px-6 md:pl-24 lg:pl-96 pr-6">
            <motion.div
              className="max-w-[800px]"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.h1
                className="text-[32px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6 drop-shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                HomeLoop
              </motion.h1>
              <motion.p
                className="text-base md:text-xl lg:text-2xl text-white/90 leading-[1.65] mb-8 drop-shadow-md max-w-2xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                An AI-powered magnet on your customer&apos;s fridge. Turns one-time buyers into repeat customers.
              </motion.p>
              <motion.div
                className="flex items-center justify-start gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <Link href="https://studio.fridgechannels.com">
                  <ShimmerButton
                    className="shadow-2xl transition-transform duration-300 hover:scale-110 h-10 md:h-12 px-5 md:px-7"
                    background="rgba(0, 0, 0, 1)"
                    shimmerColor="#ffffff"
                  >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                      Book a Demo
                    </span>
                  </ShimmerButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Bottom fade to white */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40"
            style={{
              background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.2) 80%, rgba(255,255,255,0) 100%)'
            }}
          />
        </section>

        {/* Hero Metrics Strip */}
        <section className="bg-gradient-to-b from-white via-white to-[#EFE6DB] py-12 md:py-14 lg:py-16">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-ds-text/20">
              <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <span className="text-3xl md:text-4xl font-bold text-ds-text">50-300+</span>
                <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2">TIMES SEEN/MONTH</span>
              </div>
              <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <span className="text-3xl md:text-4xl font-bold text-ds-text">5-20</span>
                <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2">TAPS/MONTH</span>
              </div>
              <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <span className="text-3xl md:text-4xl font-bold text-ds-text">2 min</span>
                <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2">AVG. ENGAGEMENT</span>
              </div>
              <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <span className="text-3xl md:text-4xl font-bold text-ds-text">2.3x</span>
                <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2">REPEAT PURCHASE RATE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consolidated Horizontal Experience */}
        <HorizontalScrollSection
          items={[
            // 1. Headline
            {
              id: "headline",
              type: "centered",
              headline: (
                <>
                  An AI-powered magnet in your customer&apos;s home — so your brand stays <span className="text-[#c2a36b] font-semibold">visible every day</span>, not buried in a closet after unboxing, and customers build repeat purchase habits worth <span className="text-[#c2a36b] font-semibold">2-3x LTV</span>.
                </>
              ),

            },
            // 2. What it is (HomeLoop)
            {
              id: "what-it-is",
              type: "split",
              subtitle: "What it is",
              title: "HomeLoop",
              description: (
                <>
                  Branded magnet sent with each order. Lives on the fridge — so your product stays top-of-mind between purchases, not competing with email/SMS fatigue.
                </>
              ),
              imageSrc: "/dtc/whatitis.jpeg",
              imageAlt: "HomeLoop Magnet",
              seamless: true,
              useOriginalAspectRatio: true,
              roundedCorners: true,
            },
            // 3. What it drives
            {
              id: "what-it-drives",
              type: "split",
              subtitle: "What it drives",
              description: "One action per tap. Listen. Ask AI. Browse picks. Redeem offer. Styling tips, product care, new arrivals, or chat with AI — every tap builds a daily touchpoint and a relationship between purchases.",
              imageSrc: "/dtc/CTA-dtc.png",
              imageAlt: "HomeLoop Automated Engagement",
              seamless: true,
              useOriginalAspectRatio: true,
              roundedCorners: true,

            },
            // 4. How you measure
            {
              id: "how-you-measure",
              type: "split",
              subtitle: "How you measure:",
              description: "Every tap, conversation, click, purchase tracked. See what drives engagement and converts — so you know exactly which content and moments drive repeat revenue",
              imageSrc: "/realestate-pics/How you measure.png",
              imageAlt: "HomeLoop Analytics Dashboard",
              useOriginalAspectRatio: true,
              seamless: true,
            },
            {
              id: "how-people-use-it",
              type: "three-cards",
              subtitle: "How people use it",
              description: "Kitchen moments your customers already have — now working for your brand.",
              cards: [
                {
                  title: "Coffee brewing",
                  description: "Browse, tap, buy (tracks: engagement, conversion) — morning attention becomes a purchase before the cup is full.",
                  imageSrc: "/dtc/3dtcbrandcafe- magnet1.jpeg",
                  imageAlt: "Coffee brewing moment",
                },
                {
                  title: "Getting water",
                  description: "Quick check, one CTA (tracks: views, clicks) — curiosity becomes a reorder in the time it takes to fill a glass.",
                  imageSrc: "/dtc/4water-dtcbrand.jpeg",
                  imageAlt: "Getting water moment",
                },
                {
                  title: "Microwave timer",
                  description: "Explore, act (tracks: taps, purchases) — idle waiting becomes a purchase moment.",
                  imageSrc: "/dtc/5dtcbrand-微波炉.jpeg",
                  imageAlt: "Microwave timer moment",
                }
              ]
            },
          ]}
        />

        {/* Big Statement Section - with blended edges */}
        <section
          className="py-24 md:py-32 bg-white relative"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
          }}
        >
          <div className="mx-auto max-w-[1320px] px-8 md:px-12 lg:px-20">
            <h2 className="text-[40px] md:text-[60px] lg:text-[80px] font-medium text-ds-text leading-[1.1] tracking-tight">
              Not software. <br />
              Not ads. <br />
              <span className="text-[#c2a36b]">Not loyalty programs.</span>
            </h2>
          </div>
        </section>

        {/* How It Works - 不用 SectionTransition，避免父级 opacity 冲突；用 useInView 控制步骤动画 */}
        <HowItWorksSection />

        {/* Pilot Section */}
        <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
          <PilotSection />
        </SectionTransition>

        {/* FAQ Section */}
        <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
          <FaqSection />
        </SectionTransition>

        {/* Final CTA */}
        <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-[linear-gradient(to_bottom,#EFE6DB,white_20%,white_80%,#EFE6DB)] relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ds-text mb-6">Start Your Pilot</h2>
            <p className="text-base md:text-xl text-ds-text-secondary mb-10 leading-[1.65] max-w-2xl mx-auto">
              Move customers from <span className="font-semibold text-ds-text">one-time to repeat</span>. Validate in 6 weeks.
            </p>
            <Link href="https://studio.fridgechannels.com" className="inline-flex">
              <ShimmerButton
                className="shadow-2xl transition-transform duration-300 hover:scale-110 h-11 px-8"
                background="rgba(0, 0, 0, 1)"
                shimmerColor="#ffffff"
              >
                <span className="whitespace-pre-wrap text-center text-base font-semibold leading-none tracking-tight text-white">
                  Book a Demo
                </span>
              </ShimmerButton>
            </Link>
            <p className="text-ds-text-secondary/70 text-sm mt-8">
              We provide the mechanism: daily attention → measurable action. You own the brand.
            </p>
          </div>
        </section>
      </main >
      <SiteFooter />
    </div >
  );
}
