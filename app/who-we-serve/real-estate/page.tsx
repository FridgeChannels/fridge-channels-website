"use client";

import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader"
import { SiteFooter } from "@/components/site-footer"
import { HeroTextReveal } from "@/components/ui/hero-text-reveal"
import { AnimatedTitle } from "@/components/ui/animated-title"
import { Timeline } from "@/components/ui/timeline"
import { SectionTransition } from "@/components/ui/section-transition"
import { GradientCard } from "@/components/ui/gradient-card"
import { Check } from "lucide-react"

export default function RealEstatePage() {
    return (
        <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
            <Navigation />

            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection
                    colors={["#c2a36be6", "#ffffff", "#c2a36be6", "#ffffff", "#c2a36be6", "#ffffff"]}
                    distortion={0.8}
                    swirl={0.6}
                    speed={0.42}
                    offsetX={0.08}
                    veilOpacity="bg-transparent"
                    bottomFadeColor="#F7F7F4"
                    maxWidth="max-w-7xl"
                    className="pt-16 min-h-[800px]"
                >
                    <div className="flex flex-col items-center justify-center text-center min-h-[700px] -translate-y-10">
                        <div className="mx-auto w-full mt-20 px-4">
                            <HeroTextReveal
                                translateY={40}
                                duration={0.7}
                                className="text-center text-6xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight text-white mb-6"
                            >
                                Close Concierge
                            </HeroTextReveal>

                            <HeroTextReveal
                                delay={0.2}
                                translateY={30}
                                duration={0.7}
                                className="w-full max-w-4xl mx-auto"
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 mb-8">
                                    An at-home assistant for top real estate teams
                                </h2>
                                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/80 max-w-3xl mx-auto mb-10">
                                    Your assistant on the fridge—the most visible place in the home—keeps serious buyers moving to the next step after they leave the showing, and quietly gives your team an edge over other top performers.
                                </p>
                            </HeroTextReveal>

                            <div className="flex items-center justify-center gap-4 mt-4">
                                <Link href="https://studio.fridgechannels.com">
                                    <ShimmerButton
                                        className="shadow-2xl transition-transform duration-300 hover:scale-110 w-auto px-8 py-3"
                                        background="rgba(0, 0, 0, 1)"
                                        shimmerColor="#ffffff"
                                    >
                                        <span className="whitespace-nowrap text-center text-base font-medium leading-none tracking-tight text-white lg:text-lg">
                                            Outfit my team with Close Concierge
                                        </span>
                                    </ShimmerButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </HeroSection>

                {/* The Gap It Solves */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="py-24 px-4 bg-white">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <AnimatedTitle className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                The Gap It Solves
                            </AnimatedTitle>

                            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-600">
                                <p>
                                    After strong meetings, the real questions show up <strong className="text-gray-900 font-semibold">at home</strong>.
                                </p>
                                <p>
                                    If there is no easy way to reach you, clients hesitate, search online, and delay decisions.
                                </p>
                                <div className="pt-8">
                                    <p className="mb-4">Close Concierge gives them one simple place to go when they are ready:</p>
                                    <p className="text-3xl md:text-4xl font-display font-bold text-[#c2a36be6]">
                                        their fridge → one tap → your concierge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionTransition>

                {/* What Close Concierge Is */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="py-24 px-4 bg-[#F7F7F4]">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div className="space-y-8">
                                    <AnimatedTitle className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                        What Close Concierge Is
                                    </AnimatedTitle>

                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        Close Concierge is an <strong className="text-gray-900">at‑home assistant</strong> that stays at the most visible place in the home: the fridge door.
                                    </p>

                                    <div className="space-y-6">
                                        <p className="text-lg font-medium text-gray-900">When a client taps it with their phone, they get:</p>
                                        <ul className="space-y-4">
                                            {[
                                                "Clear answers to real‑estate questions, any time.",
                                                "Short guidance that reduces hesitation instead of feeding it.",
                                                "One obvious next step: text you, book a call, request a second showing, send documents."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="mt-1.5 min-w-5 min-h-5 rounded-full bg-[#c2a36be6]/10 flex items-center justify-center">
                                                        <Check className="w-3.5 h-3.5 text-[#c2a36be6]" />
                                                    </div>
                                                    <span className="text-lg text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className="text-xl font-medium text-[#c2a36be6] pt-4">
                                        No app to install. No login to remember. Just tap and get help.
                                    </p>
                                </div>
                                <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto rounded-3xl overflow-hidden shadow-2xl">
                                    {/* Using the Step 1 image as a placeholder for the Fridge Context */}
                                    <Image
                                        src="/step1-1.png"
                                        alt="Close Concierge on a fridge"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionTransition>

                {/* Benefits: Clients vs Team */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="py-24 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-6 h-full">
                                <GradientCard
                                    background="white"
                                    variant="light"
                                    title="For Your Clients"
                                    description="A friction-free experience that respects their pace, giving them control without the chase."
                                    items={[
                                        { title: "Instant Recall", description: "Re‑enter the conversation instantly without digging through old texts or emails." },
                                        { title: "Answers on Demand", description: "Clear, simple answers to common questions about pricing, process, and next steps." },
                                        { title: "Private Exploration", description: "They can ask questions privately when they feel uncertain, without pressure." },
                                        { title: "One-Tap Action", description: "A clear path forward: text you, request a showing, or book a call." },
                                    ]}
                                />

                                <GradientCard
                                    background="white"
                                    featured
                                    variant="dark"
                                    title="For Your Team"
                                    description="Automated nurture that feels like high-touch service, working quietly between your meetings."
                                    items={[
                                        { title: "Quiet Presence", description: "Turns daily presence into trust without adding calls to your calendar." },
                                        { title: "Build Momentum", description: "Moves people from \"great meeting\" to \"what next?\" with less chasing." },
                                        { title: "Real Signals", description: "Direct engagement data: taps, activity, and frequency of interest." },
                                        { title: "Data-Driven Focus", description: "Follow up based on real engagement, not just guessing who is interested." },
                                    ]}
                                    quote="It doesn't replace your sales process. It makes the at‑home part of that process move faster."
                                />
                            </div>
                        </div>
                    </section>
                </SectionTransition>

                {/* Workflow */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="py-24 px-4 bg-[#F7F7F4]">
                        <div className="max-w-7xl mx-auto">
                            <AnimatedTitle className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
                                How It Fits Your Workflow
                            </AnimatedTitle>
                            <Timeline
                                data={[
                                    {
                                        title: "1. Right after a serious meeting",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    You hand Close Concierge and say:
                                                </p>
                                                <blockquote className="border-l-4 border-[#c2a36be6] pl-4 my-4 italic text-xl text-gray-800">
                                                    "Put this on your fridge. Any time you have a question or want to move forward, just tap."
                                                </blockquote>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "2. At home",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    They tap the assistant on the fridge, get answers, and see one obvious next step.
                                                </p>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "3. When they're ready",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    They choose to <strong className="font-semibold text-gray-900">text you, book a call, or request a showing</strong>.
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    You see activity and follow up with focus instead of guessing.
                                                </p>
                                            </div>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </section>
                </SectionTransition>

                {/* Final CTA Section */}
                <section id="cta" className="w-full bg-[#c2a36be6] relative z-10 py-24">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto space-y-10">
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                                Bring one current deal. We’ll show you where the at‑home concierge fits between your meetings—and how it can help your team stay one step ahead of other top performers.
                            </p>
                            <div className="flex justify-center items-center gap-4 pt-8">
                                <Link href="https://studio.fridgechannels.com">
                                    <ShimmerButton
                                        className="shadow-2xl transition-transform duration-300 hover:scale-110 w-auto px-8 py-3"
                                        background="rgba(0, 0, 0, 1)"
                                        shimmerColor="#ffffff"
                                    >
                                        <span className="whitespace-nowrap text-center text-base font-medium leading-none tracking-tight text-white lg:text-lg">
                                            Outfit my team with Close Concierge
                                        </span>
                                    </ShimmerButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </div>
    )
}
