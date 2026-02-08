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
import { PilotSection } from "@/components/real-estate/pilot-section";
import { FaqSection } from "@/components/real-estate/faq-section";

function HowItWorksSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section className="py-5 md:py-5 lg:py-5 bg-white" ref={ref}>
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
                            Integrate Close Concierge into your showing workflow—clients get it before final decisions, during uncertainty, or after closing for referrals.
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
                            We turn your FAQ content and next-step CTAs into short, scannable guidance tied to one clear action per tap.
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
                            Every week, review taps and actions. Adjust content and CTAs based on what drives follow-through.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function RealEstatePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-ds-primary selection:text-white">
            <Navigation />

            <main className="flex-1">
                <HeroSection
                    colors={["#c2a36b", "#c2a36be6", "#e8dcc8", "#fff7e0", "#FFFFFF"]}
                    distortion={0.8}
                    swirl={0.6}
                    speed={0.42}
                    offsetX={0.08}
                    veilOpacity="bg-white/10"
                    bottomFadeColor="#FFFFFF"
                    bottomFadeHeight="h-28 sm:h-36"
                    maxWidth="max-w-7xl"
                    className="pt-16 min-h-[700px]"
                >
                    <div className="flex flex-col items-center justify-center text-center min-h-[700px] -translate-y-10">
                        <div className="mx-auto w-full mt-20">
                            <div className="relative mx-auto h-full pt-24 pb-12">
                                <h1 className="text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold text-white text-center max-w-[800px] mx-auto leading-[1.08] tracking-[-0.02em] mb-6">
                                    Close Concierge
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl lg:text-2xl text-center text-white/80 max-w-7xl mx-auto leading-[1.65] mb-6">
                                An AI-powered magnet on your client&apos;s fridge that turns at-home hesitation into next steps—while your team stays focused on deals that matters.
                            </p>
                            <div className="flex items-center justify-center gap-4 mb-16 md:mb-24">
                                <Link href="https://studio.fridgechannels.com">
                                    <ShimmerButton
                                        className="shadow-2xl transition-transform duration-300 hover:scale-110 h-12 px-7"
                                        background="rgba(0, 0, 0, 1)"
                                        shimmerColor="#ffffff"
                                    >
                                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                                            Book a 30-Day Pilot
                                        </span>
                                    </ShimmerButton>
                                </Link>
                            </div>
                            <div className="w-full max-w-6xl mx-auto relative">
                                <div className="relative z-10 p-2 rounded-2xl backdrop-blur-sm shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_12px_24px_-4px_rgba(0,0,0,0.08)] overflow-hidden w-full aspect-[4/3] sm:aspect-[16/9]">
                                    <Image
                                        src="/heropic2.jpeg"
                                        alt="Close Concierge Studio Interface"
                                        fill
                                        className="object-contain object-center rounded-xl"
                                        sizes="(max-width: 1024px) 100vw, 1024px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </HeroSection>

                {/* Hero Metrics Strip */}
                <section className="bg-[#c2a36b] py-12 md:py-14 lg:py-16">
                    <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
                            <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                                <span className="text-3xl md:text-4xl font-bold text-white">50-300+</span>
                                <span className="text-xs font-medium tracking-widest text-white/90 mt-2">TIMES SEEN/MONTH</span>
                                <span className="text-sm text-white/70 mt-1">per household</span>
                            </div>
                            <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                                <span className="text-3xl md:text-4xl font-bold text-white">8-15</span>
                                <span className="text-xs font-medium tracking-widest text-white/90 mt-2">TAPS/MONTH</span>
                                <span className="text-sm text-white/70 mt-1">per household</span>
                            </div>
                            <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                                <span className="text-3xl md:text-4xl font-bold text-white">3 min</span>
                                <span className="text-xs font-medium tracking-widest text-white/90 mt-2">AVG. ENGAGEMENT</span>
                                <span className="text-sm text-white/70 mt-1">per session</span>
                            </div>
                            <div className="py-6 md:py-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                                <span className="text-3xl md:text-4xl font-bold text-white">2.1x</span>
                                <span className="text-xs font-medium tracking-widest text-white/90 mt-2">FASTER DECISION</span>
                                <span className="text-sm text-white/70 mt-1">vs. baseline</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Close Concierge Intro */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="pt-12 md:pt-14 lg:pt-16 pb-0 bg-white">
                        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                            <div className="mb-20">
                                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-ds-text leading-[1.2] tracking-tight">
                                    Close Concierge
                                </h2>
                            </div>
                            {/* Row 1: What it is */}
                            <div className="grid md:grid-cols-[4fr_6fr] gap-12 lg:gap-24 mb-24 items-center">
                                <div>
                                    <h3 className="text-sm font-medium uppercase tracking-widest text-ds-text-secondary mb-3">What it is</h3>
                                    <p className="text-lg text-ds-body leading-relaxed">
                                        A magnet on the fridge door that clients tap with their phone — <span className="font-semibold text-ds-text">no app, no login</span> — so they reach you the moment doubt surfaces, not days later.
                                    </p>
                                </div>
                                <div className="relative h-[300px] md:h-[400px] w-full bg-gray-50 overflow-hidden">
                                    <Image
                                        src="/Phone_tap_to_2k_202602081449.jpeg"
                                        alt="Close Concierge Magnet"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>

                            {/* Row 2: What it drives */}
                            <div className="grid md:grid-cols-[6fr_4fr] gap-12 lg:gap-24 mb-24 items-center">
                                <div className="relative h-[300px] md:h-[400px] w-full bg-gray-50 overflow-hidden order-last md:order-first">
                                    <Image
                                        src="/Please_change_the_2k_202602081505.jpeg"
                                        alt="Assistant Leo Interface"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium uppercase tracking-widest text-ds-text-secondary mb-3">What it drives</h3>
                                    <p className="text-lg text-ds-body leading-relaxed">
                                        Re-engagement. Question resolution. Call booking. Second showing requests. Document submissions — every tap moves clients from hesitation to a clear next step, in days instead of weeks.
                                    </p>
                                </div>
                            </div>

                            {/* Row 3: How you measure */}
                            <div className="grid md:grid-cols-[4fr_6fr] gap-12 lg:gap-24 mb-24 items-center">
                                <div>
                                    <h3 className="text-sm font-medium uppercase tracking-widest text-ds-text-secondary mb-3">How you measure:</h3>
                                    <p className="text-lg text-ds-body leading-relaxed">
                                        Taps per week. Time spent. Actions taken. Follow-up conversion rate — so you see exactly which at-home moments convert, instead of guessing.
                                    </p>
                                </div>
                                <div className="relative h-[300px] md:h-[400px] w-full bg-gray-50 overflow-hidden">
                                    <Image
                                        src="/Please_fill_the_2k_202602081514.jpeg"
                                        alt="Close Concierge Analytics Dashboard"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionTransition>

                {/* How people use it */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="pt-0 pb-5 md:pb-5 lg:pb-5 bg-white">
                        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                            <div className="mb-20">
                                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-ds-text leading-[1.2] tracking-tight">
                                    How people use it
                                </h2>
                                <p className="text-lg md:text-xl text-ds-text-secondary mt-4 max-w-[720px]">
                                    Kitchen moments your clients already have — now working for your deal.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                                {/* Moment 1 */}
                                <div className="group flex flex-col rounded-none border-2 border-transparent overflow-hidden transition-all duration-300 hover:border-4 hover:border-white cursor-pointer">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
                                        <Image
                                            src="/morning.png"
                                            alt="Coffee brewing moment"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="px-6 py-6 transition-colors duration-300 group-hover:bg-[#c2a36b] rounded-none">
                                        <h4 className="text-[28px] font-bold text-ds-text mb-3">Coffee brewing</h4>
                                        <p className="text-base text-ds-body leading-relaxed text-ds-text-secondary">
                                            Browse answers, tap to text agent, book a call — hesitation becomes a conversation before the cup is full.
                                        </p>
                                    </div>
                                </div>
                                {/* Moment 2 */}
                                <div className="group flex flex-col rounded-none border-2 border-transparent overflow-hidden transition-all duration-300 hover:border-4 hover:border-white cursor-pointer">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
                                        <Image
                                            src="/water.png"
                                            alt="Getting water moment"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="px-6 py-6 transition-colors duration-300 group-hover:bg-[#c2a36b] rounded-none">
                                        <h4 className="text-[28px] font-bold text-ds-text mb-3">Getting water</h4>
                                        <p className="text-base text-ds-body leading-relaxed text-ds-text-secondary">
                                            Quick question check, one clear CTA — doubt gets resolved in the time it takes to fill a glass.
                                        </p>
                                    </div>
                                </div>
                                {/* Moment 3 */}
                                <div className="group flex flex-col rounded-none border-2 border-transparent overflow-hidden transition-all duration-300 hover:border-4 hover:border-white cursor-pointer">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
                                        <Image
                                            src="/evening.png"
                                            alt="Microwave timer moment"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="px-6 py-6 transition-colors duration-300 group-hover:bg-[#c2a36b] rounded-none">
                                        <h4 className="text-[28px] font-bold text-ds-text mb-3">Microwave timer</h4>
                                        <p className="text-base text-ds-body leading-relaxed text-ds-text-secondary">
                                            Explore pricing info, request a second showing — idle waiting becomes active deal momentum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionTransition>

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
                <section className="pt-5 md:pt-5 lg:pt-5 pb-5 md:pb-5 lg:pb-5 bg-[#c2a36be6] relative overflow-hidden">
                    <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-16 text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Pilot</h2>
                        <p className="text-base md:text-xl text-white/90 mb-10 leading-[1.65] max-w-2xl mx-auto">
                            If you want to move serious buyers from hesitation to next steps without more chasing, Close Concierge gives you a measurable at-home channel to test in 30 days.
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
                        <p className="text-white/70 text-sm mt-8">

                        </p>
                    </div>
                </section>
            </main >
            <SiteFooter />
        </div >
    );
}
