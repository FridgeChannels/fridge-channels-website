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
import { ComparisonTableSection } from "@/components/exhibition/comparison-table-section";
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
            How to Get Started
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 md:items-start gap-12 lg:gap-16 border-t border-ds-border pt-12 overflow-hidden"
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
            <h3 className="text-xl font-medium text-ds-text mb-4">
              Step 1 — Deploy &amp; Configure{" "}
              <span className="font-semibold text-[#c2a36b]">(Week 1-2)</span>
            </h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary mb-4">
              Ships as an order insert with every purchase. Simple &quot;tap to connect&quot; instructions — customers are live in seconds.
            </p>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Configure content, AI, education, and CTAs with your customer journey. Your content becomes bite-sized audio/text. AI learns FAQs, recommendations, reorders.
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
            <h3 className="text-xl font-medium text-ds-text mb-4">
              Step 2 — Measure
              <br />
              <span className="font-semibold text-[#c2a36b]">(Week 3-6)</span>
            </h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Track taps, conversations, clicks, purchases, and repeat actions.
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
            <h3 className="text-xl font-medium text-ds-text mb-4">
              Step 3 — Review &amp; Scale{" "}
              <span className="font-semibold text-[#c2a36b]">(Week 6+)</span>
            </h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Improve the loop based on what actually drives return behavior. Bi-weekly reviews: adjust content, AI responses, timing based on data.
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
            src="/dtc/DTC-banner.png"
            alt="Presence Asset Moat Deployment — DTC Brands hero"
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
          <div className="absolute inset-0 z-10 flex flex-col justify-center text-left pt-16 px-6 md:pl-20 lg:pl-52 pr-6">
            <motion.div
              className="max-w-[800px] -translate-x-2 md:-translate-x-4 lg:-translate-x-5"
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
                Presence Asset Moat Deployment
              </motion.h1>
              <motion.p
                className="text-base md:text-xl lg:text-2xl text-white/90 leading-[1.65] mb-8 drop-shadow-md max-w-2xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                Built for repeat purchase and owned customer loops. You win the first order with acquisition. You win the second with presence.
              </motion.p>
              <motion.div
                className="flex items-center justify-start gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <a href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting" target="_blank" rel="noopener noreferrer">
                  <ShimmerButton
                    className="shadow-2xl transition-transform duration-300 hover:scale-110 h-10 md:h-12 px-5 md:px-7"
                    background="rgba(0, 0, 0, 1)"
                    shimmerColor="#ffffff"
                  >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                      Book a Demo
                    </span>
                  </ShimmerButton>
                </a>
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
                  An AI-powered presence asset in your customer&apos;s home — so your brand stays <span className="text-[#c2a36b] font-semibold">visible every day</span>, not buried in a closet after unboxing, and customers build repeat purchase habits worth <span className="text-[#c2a36b] font-semibold">2-3x LTV</span>.
                </>
              ),

            },
            // 2. What it is
            {
              id: "what-it-is",
              type: "split",
              subtitle: "What it is",
              description: (
                <>
                  FC deploys a <strong className="font-semibold text-ds-text">Presence Asset</strong> — a physical touchpoint that lives in the home, gets seen naturally, and routes customers back into your brand. Deployed as a <strong className="font-semibold text-ds-text">branded order insert</strong> — it ships with every purchase, stays visible in the home, and keeps working long after unboxing.
                </>
              ),
              imageSrc: "/dtc/DTC-place.png",
              imageAlt: "Presence Asset — branded order insert in the home",
              seamless: false,
              useOriginalAspectRatio: true,
              roundedCorners: true,
            },
            // 3. What it drives
            {
              id: "what-it-drives",
              type: "split",
              subtitle: "What it drives",
              description: (
                <>
                  Each interaction routes into a clear next step — reorder, browse, redeem, discover, educate, or subscribe. The product is the <strong className="font-semibold text-ds-text">loop</strong>: See → Tap → Act → Return.
                </>
              ),
              imageSrc: "/dtc/DTC-tap.png",
              imageAlt: "Customer loop — See, Tap, Act, Return",
              seamless: false,
              useOriginalAspectRatio: true,
              roundedCorners: true,

            },
            // 4. How you measure
            {
              id: "how-you-measure",
              type: "split",
              subtitle: "How you measure",
              description:
                "Every tap, conversation, click, purchase tracked. See what drives engagement and converts — so you know exactly which content and moments drive repeat revenue.",
              imageSrc: "/realestate-pics/How you measure.png",
              imageAlt: "Engagement and conversion analytics",
              useOriginalAspectRatio: true,
              seamless: true,
            },
            {
              id: "how-people-use-it",
              type: "three-cards",
              subtitle: "How people use it",
              description:
                "Pass the fridge. Tap with phone. Kitchen moments your customers already have — now working for your brand.",
              cards: [
                {
                  title: "Coffee brewing",
                  description:
                    "Browse, tap, buy — morning attention becomes a purchase before the cup is full.",
                  imageSrc: "/dtc/3dtcbrandcafe- magnet1.jpeg",
                  imageAlt: "Coffee brewing moment",
                  imageStyle: { objectPosition: "center bottom", transform: "scale(1.05)" }, // Zoom slightly and align bottom to hide top border
                },
                {
                  title: "Getting water",
                  description:
                    "Quick check, one CTA — curiosity becomes a reorder in the time it takes to fill a glass.",
                  imageSrc: "/dtc/4water-dtcbrand.jpeg",
                  imageAlt: "Getting water moment",
                },
                {
                  title: "Microwave timer",
                  description:
                    "Explore, act — idle waiting becomes a purchase moment.",
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
            <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-medium text-ds-text leading-[1.1] tracking-tight">
              It is <span className="font-semibold text-[#c2a36b]">post-purchase infrastructure</span>
              <br />
              It is the <span className="font-semibold text-[#c2a36b]">Presence Asset Moat</span> — a retention moat built on physical presence
              <br />
              It is a <span className="font-semibold text-[#c2a36b]">brand moat deployed inside everyday life</span>
            </h2>
          </div>
        </section>

        {/* How It Works - 不用 SectionTransition，避免父级 opacity 冲突；用 useInView 控制步骤动画 */}
        <HowItWorksSection />

        {/* Pilot Section (Pricing) */}
        <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
          <PilotSection />
        </SectionTransition>

        {/* Same comparison table as exhibition: FC vs. standard post-event follow-up */}
        <SectionTransition intensity="low" enableFade={true} enableMovement={true}>
          <ComparisonTableSection />
        </SectionTransition>

        {/* FAQ Section */}
        <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
          <FaqSection />
        </SectionTransition>

        {/* Final CTA */}
        <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-[linear-gradient(to_bottom,#EFE6DB,white_20%,white_80%,#EFE6DB)] relative">
          <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-16 text-center relative z-10">
            <h2 className="mx-auto mb-6 max-w-full font-bold leading-tight tracking-tight text-ds-text whitespace-nowrap text-[clamp(0.7rem,2.85vw,2.25rem)]">
              Ready to test Presence Asset Moat Deployment?
            </h2>
            <p className="text-base md:text-xl text-ds-text-secondary mb-10 leading-[1.65] max-w-2xl mx-auto">
              Run a 30-day pilot and see whether post-purchase presence can become a repeat-purchase moat for your brand.
            </p>
            <div className="flex w-full justify-center">
              <a
                href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2a36b] focus-visible:ring-offset-2 rounded-md"
              >
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 h-11 px-8"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-base font-semibold leading-none tracking-tight text-white">
                    Book a Pilot
                  </span>
                </ShimmerButton>
              </a>
            </div>
          </div>
        </section>
      </main >
      <SiteFooter />
    </div >
  );
}
