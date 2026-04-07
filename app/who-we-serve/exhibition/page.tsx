"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SectionTransition } from "@/components/ui/section-transition";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ComparisonTableSection } from "@/components/exhibition/comparison-table-section";
import { HorizontalScrollSection } from "@/components/ui/horizontal-scroll-section";

function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-[1320px] px-8 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-20">
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
            <h3 className="text-xl font-medium text-ds-text mb-4">Distribute</h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Distribute FridgeChannel tiles via VIP gift packs, speaker gifts, organizer/buyer gift packs, membership mailings, or post-event follow-up packages. Include simple &quot;tap-to-connect&quot; instructions.
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
              Turn your event into short updates. Include event highlights, speaker clips, replay links, industry resources, sponsor information, member updates, and registration reminders. Each update ends with a call-to-action (CTA)—register for the next event, renew your membership, explore sponsor offers, or access exclusive content.
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
            <h3 className="text-xl font-medium text-ds-text mb-4">Measure</h3>
            <p className="text-ds-body leading-relaxed text-ds-text-secondary">
              Conduct an evaluation every two weeks: Adjust your content mix, posting schedule, and calls to action based on engagement and feedback data.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ExhibitionPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-ds-primary selection:text-white">
      <Navigation />

      <main className="flex-1">
        {/* Full-background Hero Section */}
        <section className="relative w-full h-screen">
          {/* Background Image - Using a generic exhibition/audience picture if available, fallback to beautiful abstract */}
          <Image
            src="/doc/exhibition/situationhero5.png"
            alt="Exhibition Hero"
            fill
            className="object-cover"
            style={{ objectPosition: "top center" }}
            quality={100}
            sizes="100vw"
            priority
            onError={(e) => {
              // Fallback if image doesn't exist yet
              e.currentTarget.src = "/realestate-pics/bg-hero.jpg";
            }}
          />
          
          {/* Dark Overlay for Text Readability - Reduced to 20% */}
          <div className="absolute inset-0 bg-black/20 z-[1]" />

          {/* Content positioned over the image */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-end text-right pt-32 md:pt-48 lg:pt-56 pl-6 pr-6 md:pr-10 lg:pr-16 xl:pr-24">
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
                className="text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-4 drop-shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                AttendeeLoop
              </motion.h1>
              <motion.h2
                className="text-xl md:text-3xl lg:text-4xl text-white/95 leading-[1.3] font-medium mb-8 drop-shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                An AI-powered post-event engagement tool designed specifically for trade show and conference organizers. It keeps that attention alive after people go home.
              </motion.h2>
              <motion.div
                className="flex items-center justify-end gap-4"
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
                      Schedule a Demo
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
                        <span className="text-3xl md:text-4xl font-bold text-ds-text">70-80%</span>
                        <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2 uppercase">VIEW-THROUGH RATE</span>
                    </div>
                    <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                        <span className="text-3xl md:text-4xl font-bold text-ds-text">10-15</span>
                        <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2 uppercase">CLICKS/MONTH</span>
                    </div>
                    <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                        <span className="text-3xl md:text-4xl font-bold text-ds-text">3-5 min</span>
                        <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2 uppercase">AVG. ENGAGEMENT</span>
                    </div>
                    <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                        <span className="text-3xl md:text-4xl font-bold text-ds-text">2x</span>
                        <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2 uppercase">REGISTRATION CONVERSION</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Consolidated Horizontal Experience */}
        <HorizontalScrollSection
          items={[
            // 0. Headline
            {
              id: "headline",
              type: "centered",
              headline: (
                <span className="block text-[26px] md:text-[36px] lg:text-[44px] leading-snug tracking-normal">
                  An exhibition branded magnet that <span className="text-[#c2a36b] font-semibold">lives on your attendee&apos;s fridge</span> — <span className="text-[#c2a36b] font-semibold">so your event stays visible every day</span>, not buried in follow-up emails or social feeds where it goes out of sight and out of mind, and attendees stay engaged with <span className="text-[#c2a36b] font-semibold">70–80% view-through rate + 2x registration conversion</span>.
                </span>
              ),
            },
            // 1. What it is
            {
              id: "what-it-is",
              type: "split",
              subtitle: "What it is",
              title: "A magnet featuring the exhibition's brand logo.",
              description: (
                <>
                  Distributed via <strong className="text-ds-text font-semibold">VIP gift bags, speaker gifts, organizer buyer kits, or post-event mailings</strong>. It sticks to the refrigerator door—ensuring attendees see <strong className="text-ds-text font-semibold">daily reminders of the event</strong>, rather than follow-up emails they&apos;ll never open or giveaways that get thrown away.
                </>
              ),
              imageSrc: "/doc/exhibition/Gemini_Generated_Image_spapwnspapwnspap.png",
              imageAlt: "Exhibition Magnet",
              seamless: true,
            },
            // 2. What it drives
            {
              id: "what-it-drives",
              type: "split",
              subtitle: "What it drives",
              title: "Every tap triggers an action.",
              description: (
                <>
                  <strong className="text-ds-text font-semibold">Extend the event&apos;s momentum.</strong> Watch session highlights. Promote the next event. Access member content. Explore sponsor offers. Browse industry resources—each tap <strong className="text-ds-text font-semibold">cultivates a habit</strong>, transforming one-time attendees into <strong className="text-ds-text font-semibold">repeat visitors and active members</strong>.
                </>
              ),
              imageSrc: "/doc/exhibition/未来科技触手可及.png",
              imageAlt: "Exhibition Action",
              seamless: true,
            },
            // 3. How you measure
            {
              id: "how-you-measure",
              type: "split",
              subtitle: "How you measure",
              title: "Track every click, replay, registration, and interaction.",
              description: (
                <>
                  Understand <strong className="text-ds-text font-semibold">what keeps attendees engaged</strong> between events, and what drives <strong className="text-ds-text font-semibold">re-registration, membership renewals, and sponsor conversions</strong>—thereby pinpointing exactly which content and moments <strong className="text-ds-text font-semibold">bring people back to the event</strong>.
                </>
              ),
              imageSrc: "/realestate-pics/How you measure.png",
              imageAlt: "Analytics Dashboard",
              seamless: true,
            },
            // 4. How people use it
            {
              id: "how-people-use-it",
              type: "three-cards",
              subtitle: "How people use it",
              description: "As attendees walk past the fridge, curiosity prompts a quick tap on the screen. Those idle moments in the kitchen—which attendees experience anyway—are now creating value for your event and community.",
              cards: [
                {
                  title: "Morning Coffee (30 seconds)",
                  description: "Browse event highlights, watch presentation clips, check industry updates (Tracking metrics: Engagement, Replays)—Before the coffee cup is even full, morning curiosity turns into an opportunity for re-engagement.",
                  imageSrc: "/doc/exhibition/morning_ex.png",
                  imageAlt: "Morning Coffee",
                },
                {
                  title: "Planning for the Next Quarter",
                  description: "Review past events, view the upcoming agenda, register early (Tracking Metrics: Registrations, Clicks) — Planning moments turn into confirmed returns.",
                  imageSrc: "/coffee-moment.png",
                  imageAlt: "Planning for Next Quarter",
                },
                {
                  title: "Microwave timer",
                  description: "Explore sponsor offers, member benefits, and chapter updates (Tracking metrics: clicks, conversions) — A moment of boredom turns into a membership renewal or sponsor follow-up.",
                  imageSrc: "/evening.png",
                  imageAlt: "Microwave timer",
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
          <div className="mx-auto max-w-full px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-[15px] min-[400px]:text-[17px] sm:text-[22px] md:text-[32px] lg:text-[42px] xl:text-[54px] whitespace-nowrap font-medium text-ds-text leading-[1.8] md:leading-[1.5] tracking-tight flex flex-col justify-center items-center w-full">
              <span className="block mb-3 md:mb-5">A presence asset</span>
              <span className="block mb-3 md:mb-5">A touchpoint into daily life</span>
              <span className="block">A platform for updated content and follow-up actions</span>
            </h2>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorksSection />
        
        {/* Comparison Table Section */}
        <SectionTransition intensity="low" enableFade={true} enableMovement={true}>
          <ComparisonTableSection />
        </SectionTransition>

        {/* Final CTA */}
        <section id="pilot" className="pt-16 pb-16 md:pt-20 md:pb-20 bg-[linear-gradient(to_bottom,#EFE6DB,white_20%,white_80%,#EFE6DB)] relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ds-text mb-6">Start with a pilot</h2>
            <p className="text-base md:text-xl text-ds-text-secondary mb-10 leading-[1.65] max-w-2xl mx-auto">
              Start with <span className="font-semibold text-ds-text">one event edition</span> and one clear return path.
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
                    Start a Pilot
                  </span>
                </ShimmerButton>
              </a>
            </div>
            <p className="text-ds-text-secondary/70 text-sm mt-8 font-medium">
              Start with one event. Prove the return path. Then scale across editions.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
