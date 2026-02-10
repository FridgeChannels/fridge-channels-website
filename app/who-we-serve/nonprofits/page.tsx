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
import { PilotSection } from "@/components/nonprofits/pilot-section";
import { FaqSection } from "@/components/nonprofits/faq-section";
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
                            Magnets ship before your event. Hand out at check-in or with thank-you notes.
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
                            Your stories become bite-sized content. Each ends with one CTA.
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
                            Bi-weekly reviews: adjust content based on what drives engagement.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function RealEstatePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-ds-primary selection:text-white">
            <Navigation />

            <main className="flex-1">
                {/* Full-background Hero Section */}
                <section className="relative w-full h-screen">
                    {/* Background Image */}
                    <Image
                        src="/nonprofit/Make_the_main_2k_202602091613.jpeg"
                        alt="Close Concierge Hero"
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
                                CommunityLoop
                            </motion.h1>
                            <motion.p
                                className="text-base md:text-xl lg:text-2xl text-white/90 leading-[1.65] mb-8 drop-shadow-md max-w-2xl"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                            >
                                An AI-powered magnet handed out at events. Supporters stick it on their fridge. Move from one-time attendees to repeat donors.
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
                                            Book a 30-Day Pilot
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
                                <span className="text-3xl md:text-4xl font-bold text-ds-text">6-8</span>
                                <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2">TAPS/MONTH</span>
                            </div>
                            <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                                <span className="text-3xl md:text-4xl font-bold text-ds-text">3.8 min</span>
                                <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2">AVG. ENGAGEMENT</span>
                            </div>
                            <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                                <span className="text-3xl md:text-4xl font-bold text-ds-text">2.1x</span>
                                <span className="text-xs font-medium tracking-widest text-ds-text-secondary mt-2">DONATION FREQUENCY</span>
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
                                    An AI-powered magnet in your supporter&apos;s home — so your organization stays <span className="text-[#c2a36b] font-semibold">visible every day</span> after the event, not buried in an inbox next to spam, and supporters build giving habits worth <span className="text-[#c2a36b] font-semibold">3-5x lifetime value</span>.
                                </>
                            ),

                        },
                        // 2. What it is
                        {
                            id: "what-it-is",
                            type: "split",
                            subtitle: "What it is",
                            title: "CommunityLoop",
                            description: (
                                <>
                                    Magnet handed out at events. Lives on the fridge — so your mission stays top-of-mind between campaigns, not lost in the gap where donors forget why they cared.
                                </>
                            ),
                            imageSrc: "/nonprofit/whatitis.jpeg",
                            imageAlt: "CommunityLoop Magnet",
                            seamless: true,
                            useOriginalAspectRatio: true,
                            roundedCorners: true,
                        },
                        // 3. What it drives
                        {
                            id: "what-it-drives",
                            type: "split",
                            subtitle: "What it drives",
                            description: "One action per tap. Donate. Volunteer. RSVP. Share. Stories, impact updates, volunteer opportunities — every tap builds a connection that keeps supporters engaged between events.",
                            imageSrc: "/nonprofit/1NONProfitCTA.png",
                            imageAlt: "CommunityLoop Engagement",
                            seamless: true,
                            useOriginalAspectRatio: true,
                            roundedCorners: true,

                        },
                        // 4. How you measure
                        {
                            id: "how-you-measure",
                            type: "split",
                            subtitle: "How you measure:",
                            description: "Every tap, view, action tracked. See what resonates and converts — so you know exactly which stories and moments drive repeat giving.",
                            imageSrc: "/realestate-pics/How you measure.png",
                            imageAlt: "CommunityLoop Analytics",
                            useOriginalAspectRatio: true,
                            seamless: true,
                        },
                        {
                            id: "how-people-use-it",
                            type: "three-cards",
                            subtitle: "How people use it",
                            description: "Pass the fridge. Tap when curious. Kitchen moments your supporters already have — now working for your mission.",
                            cards: [
                                {
                                    title: "Coffee brewing (30 sec)",
                                    description: "Browse, tap, donate (tracks: engagement, conversion) — morning curiosity becomes a donation before the cup is full.",
                                    imageSrc: "/nonprofit/咖啡3-nonprofits.jpeg",
                                    imageAlt: "Coffee brewing moment",
                                },
                                {
                                    title: "Getting water",
                                    description: "Quick check, one CTA (tracks: views, clicks) — a glance becomes an RSVP in the time it takes to fill a glass.",
                                    imageSrc: "/nonprofit/4-water-nonprofit.jpeg",
                                    imageAlt: "Getting water moment",
                                },
                                {
                                    title: "Microwave timer",
                                    description: "Explore, act (tracks: taps, actions) — idle waiting becomes a volunteer sign-up.",
                                    imageSrc: "/nonprofit/微波炉-5-nonprofits.jpeg",
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
                            Not an email list. <br />
                            Not social media. <br />
                            <span className="text-[#c2a36b]">Not a CRM.</span>
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
                            Move attendees from <strong>one-time to repeat donors</strong>. Validate in 30 days.
                        </p>
                        <Link href="https://studio.fridgechannels.com" className="inline-flex">
                            <ShimmerButton
                                className="shadow-2xl transition-transform duration-300 hover:scale-110 h-11 px-8"
                                background="rgba(0, 0, 0, 1)"
                                shimmerColor="#ffffff"
                            >
                                <span className="whitespace-pre-wrap text-center text-base font-semibold leading-none tracking-tight text-white">
                                    Book a 30-Day Pilot
                                </span>
                            </ShimmerButton>
                        </Link>
                        <p className="text-ds-text-secondary/70 text-sm mt-8">
                            We provide the mechanism: event → fridge → action → measurement. You own the mission.
                        </p>
                    </div>
                </section>
            </main >
            <SiteFooter />
        </div >
    );
}
