"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SectionTransition } from "@/components/ui/section-transition";
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Shield, Zap, MessageSquare, Monitor, Hand, Smartphone, BarChart3 } from "lucide-react";
import { AllInOneSection } from "@/components/ui/all-in-one-section";
import { Marquee } from "@/components/ui/3d-testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const solutionCards = [
    { title: "Before they commit", text: "Keep momentum alive after the showing when decisions aren't final.", icon: Shield },
    { title: "During uncertainty", text: "Answer questions when hesitation quietly builds at home.", icon: MessageSquare },
    { title: "After closing", text: "Stay present for referrals — without awkward follow-ups.", icon: Zap },
];

const testimonials = [
    {
        name: 'Sarah Chen',
        username: '@sarahsells',
        body: 'Close Concierge helped us close 3 deals this month that would have gone cold.',
        img: 'https://randomuser.me/api/portraits/women/32.jpg',
        country: '🇺🇸 Los Angeles',
    },
    {
        name: 'Marcus Johnson',
        username: '@marcusrealty',
        body: 'Our clients love having Leo on their fridge. It keeps us top of mind.',
        img: 'https://randomuser.me/api/portraits/men/51.jpg',
        country: '🇺🇸 Miami',
    },
    {
        name: 'Emily Rodriguez',
        username: '@emilyproperties',
        body: 'The engagement data is gold. I know exactly when to follow up.',
        img: 'https://randomuser.me/api/portraits/women/68.jpg',
        country: '🇺🇸 Austin',
    },
    {
        name: 'David Park',
        username: '@davidhomes',
        body: 'Game changer for luxury listings. Buyers appreciate the premium touch.',
        img: 'https://randomuser.me/api/portraits/men/33.jpg',
        country: '🇺🇸 San Francisco',
    },
    {
        name: 'Jessica Williams',
        username: '@jessicarealestate',
        body: 'My conversion rate doubled since using Close Concierge.',
        img: 'https://randomuser.me/api/portraits/women/53.jpg',
        country: '🇺🇸 Seattle',
    },
    {
        name: 'Michael Torres',
        username: '@miketorres',
        body: 'Clients actually use it! The questions they ask through Leo are so valuable.',
        img: 'https://randomuser.me/api/portraits/men/22.jpg',
        country: '🇺🇸 Denver',
    },
    {
        name: 'Amanda Lee',
        username: '@amandalee',
        body: 'Perfect for our high-end clientele. Professional and elegant.',
        img: 'https://randomuser.me/api/portraits/women/45.jpg',
        country: '🇺🇸 New York',
    },
    {
        name: 'Robert Martinez',
        username: '@robertsells',
        body: 'The magnet stays on the fridge for months. Best marketing investment.',
        img: 'https://randomuser.me/api/portraits/men/61.jpg',
        country: '🇺🇸 Chicago',
    },
    {
        name: 'Lisa Anderson',
        username: '@lisahomes',
        body: 'Our team productivity increased 40% with automated engagement.',
        img: 'https://randomuser.me/api/portraits/women/85.jpg',
        country: '🇺🇸 Boston',
    },
];

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
                                <h1 className="text-[32px] md:text-[44px] lg:text-[56px] xl:text-[64px] font-bold text-white text-center max-w-[800px] mx-auto leading-[1.08] tracking-[-0.02em] mb-6">
                                    Close Concierge —<br />
                                    An at-home assistant for<br />
                                    top real estate teams
                                </h1>
                            </div>
                            <p className="text-base md:text-lg text-center text-white/80 max-w-[680px] mx-auto leading-[1.65] mb-10">
                                Your assistant on the fridge—the most visible place in the home—keeps serious buyers moving to the next step after they leave the showing.
                            </p>
                            <div className="flex items-center justify-center gap-4 mb-16 md:mb-24">
                                <Link href="https://studio.fridgechannels.com">
                                    <ShimmerButton
                                        className="shadow-2xl transition-transform duration-300 hover:scale-110 h-12 px-7"
                                        background="rgba(0, 0, 0, 1)"
                                        shimmerColor="#ffffff"
                                    >
                                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                                            Outfit my team with Close Concierge
                                        </span>
                                    </ShimmerButton>
                                </Link>
                            </div>
                            <div className="w-full max-w-6xl mx-auto relative">
                                <div className="relative z-10 p-2 rounded-2xl backdrop-blur-sm shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_12px_24px_-4px_rgba(0,0,0,0.08)] overflow-hidden w-full aspect-[4/3] sm:aspect-[16/9]">
                                    <Image
                                        src="/hero pic.png"
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

                {/* Engagement System - Dark panels (ref: Atlas-style) */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="py-24 md:py-28 lg:py-32 bg-white">
                        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                            <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20 space-y-3">
                                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-ds-text leading-[1.2] tracking-tight max-w-[800px] mx-auto">
                                    Close Concierge is an at-home engagement system designed for high-intent moments
                                </h2>
                                <p className="text-base md:text-lg text-ds-body leading-[1.65]">
                                    What you really buy is a simple two-part system:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                {/* Panel 1: The Magnet */}
                                <div className="flex flex-col items-center text-center rounded-2xl border border-ds-border bg-white pt-6 md:pt-8 lg:pt-10 px-6 md:px-8 lg:px-10 pb-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                                    <span className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-ds-text-secondary mb-3">
                                        Part1
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-ds-text mb-4">
                                        The Magnet
                                    </h3>
                                    <p className="text-sm md:text-base text-ds-body leading-[1.6] max-w-md mb-8">
                                        A premium, giftable object that earns permanent placement in the home.
                                    </p>
                                    <div className="w-full overflow-hidden flex justify-center">
                                        <div className="w-2/3">
                                            <Image
                                                src="/magnet916.jpeg"
                                                alt="The Magnet on fridge"
                                                width={960}
                                                height={720}
                                                className="w-full h-auto object-contain object-center"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Panel 2: Leo */}
                                <div className="flex flex-col items-center text-center rounded-2xl border border-ds-border bg-white pt-6 md:pt-8 lg:pt-10 px-6 md:px-8 lg:px-10 pb-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                                    <span className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-ds-text-secondary mb-3">
                                        Part2
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-ds-text mb-4">
                                        Assistant Leo
                                    </h3>
                                    <p className="text-sm md:text-base text-ds-body leading-[1.6] max-w-md mb-8">
                                        What clients experience: calm clarity, trusted guidance, and only one obvious next step.
                                    </p>
                                    <div className="w-full overflow-hidden flex justify-center">
                                        <div className="w-2/3">
                                            <Image
                                                src="/leo2.jpg"
                                                alt="Leo App"
                                                width={960}
                                                height={720}
                                                className="w-full h-auto object-contain object-center"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionTransition>

                {/* How it fits your workflow */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="py-24 md:py-28 lg:py-32 bg-[#F8F8F8] overflow-hidden">
                        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                            {/* Header Section */}
                            <div className="text-center mb-16 md:mb-20 max-w-[800px] mx-auto space-y-4">
                                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#333333] leading-[1.2] tracking-tight max-w-[800px] mx-auto">
                                    How it fits your workflow
                                </h2>
                                <p className="text-[20px] md:text-[24px] text-[#888888] leading-[1.5] font-normal">
                                    A seamless process that keeps you present when you can't be there personally.
                                </p>
                            </div>

                            {/* Steps Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto relative">
                                {/* Continuous connector line - spans from badge 1 center to badge 3 center */}
                                <div className="hidden md:block absolute top-[14px] h-[2px] bg-[#DDDDDD] z-0" style={{ left: '16.666%', right: '16.666%' }} />

                                {/* Step 1 */}
                                <div className="flex flex-col items-center text-center relative">
                                    <div className="w-7 h-7 rounded-full bg-[#F0F0F0] border border-[#DDDDDD] flex items-center justify-center mb-4 relative z-10">
                                        <span className="text-[11px] font-bold text-[#333333]">1</span>
                                    </div>
                                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#333333] mb-4 leading-[1.3]">
                                        3 Distribution Moments
                                    </h3>
                                    <div className="space-y-4 text-left">
                                        <div>
                                            <h4 className="text-[16px] md:text-[17px] font-semibold text-[#333333] mb-1 flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Before they commit</span>
                                            </h4>
                                            <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                                                Keep momentum alive after the showing when decisions aren't final.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-[16px] md:text-[17px] font-semibold text-[#333333] mb-1 flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>During uncertainty</span>
                                            </h4>
                                            <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                                                Answer questions when hesitation quietly builds at home.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-[16px] md:text-[17px] font-semibold text-[#333333] mb-1 flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>After closing</span>
                                            </h4>
                                            <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                                                Stay present for referrals — without awkward follow-ups.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex flex-col items-center text-center relative">
                                    <div className="w-7 h-7 rounded-full bg-[#F0F0F0] border border-[#DDDDDD] flex items-center justify-center mb-4 relative z-10">
                                        <span className="text-[11px] font-bold text-[#333333]">2</span>
                                    </div>
                                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#333333] mb-4 leading-[1.3]">
                                        At home
                                    </h3>
                                    <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                                        They tap the assistant on the fridge, get answers, and see one obvious next step.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-center text-center relative">
                                    <div className="w-7 h-7 rounded-full bg-[#F0F0F0] border border-[#DDDDDD] flex items-center justify-center mb-4 relative z-10">
                                        <span className="text-[11px] font-bold text-[#333333]">3</span>
                                    </div>
                                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#333333] mb-4 leading-[1.3]">
                                        When they're ready
                                    </h3>
                                    <div className="space-y-3">
                                        <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                                            They choose to text you, book a call, or request a showing.
                                        </p>
                                        <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                                            You see activity and follow up with focus instead of guessing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionTransition>

                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <AllInOneSection />
                </SectionTransition>

                {/* Testimonials Section - 3D Marquee */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <section className="py-24 md:py-28 lg:py-32 bg-white">
                        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                            <div className="text-center mb-16 md:mb-20 max-w-[800px] mx-auto">
                                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-ds-text leading-[1.2] tracking-tight max-w-[800px] mx-auto mb-4">
                                    Trusted by top real estate teams
                                </h2>
                                <p className="text-base md:text-lg text-ds-body leading-[1.65]">
                                    See what agents are saying about Close Concierge
                                </p>
                            </div>

                            <div className="rounded-lg relative flex h-96 w-full max-w-[800px] mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
                                <div
                                    className="flex flex-row items-center gap-4"
                                    style={{
                                        transform:
                                            'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
                                    }}
                                >
                                    {/* Vertical Marquee (downwards) */}
                                    <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                                        {testimonials.map((review) => (
                                            <Card key={review.username} className="w-50">
                                                <CardContent>
                                                    <div className="flex items-center gap-2.5">
                                                        <Avatar className="size-9">
                                                            <AvatarImage src={review.img} alt={review.name} />
                                                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex flex-col">
                                                            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                                                                {review.name} <span className="text-xs">{review.country}</span>
                                                            </figcaption>
                                                            <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                                        </div>
                                                    </div>
                                                    <blockquote className="mt-3 text-sm text-secondary-foreground">{review.body}</blockquote>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Marquee>
                                    {/* Vertical Marquee (upwards) */}
                                    <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                                        {testimonials.map((review) => (
                                            <Card key={review.username} className="w-50">
                                                <CardContent>
                                                    <div className="flex items-center gap-2.5">
                                                        <Avatar className="size-9">
                                                            <AvatarImage src={review.img} alt={review.name} />
                                                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex flex-col">
                                                            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                                                                {review.name} <span className="text-xs">{review.country}</span>
                                                            </figcaption>
                                                            <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                                        </div>
                                                    </div>
                                                    <blockquote className="mt-3 text-sm text-secondary-foreground">{review.body}</blockquote>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Marquee>
                                    {/* Vertical Marquee (downwards) */}
                                    <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                                        {testimonials.map((review) => (
                                            <Card key={review.username} className="w-50">
                                                <CardContent>
                                                    <div className="flex items-center gap-2.5">
                                                        <Avatar className="size-9">
                                                            <AvatarImage src={review.img} alt={review.name} />
                                                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex flex-col">
                                                            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                                                                {review.name} <span className="text-xs">{review.country}</span>
                                                            </figcaption>
                                                            <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                                        </div>
                                                    </div>
                                                    <blockquote className="mt-3 text-sm text-secondary-foreground">{review.body}</blockquote>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Marquee>
                                    {/* Vertical Marquee (upwards) */}
                                    <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                                        {testimonials.map((review) => (
                                            <Card key={review.username} className="w-50">
                                                <CardContent>
                                                    <div className="flex items-center gap-2.5">
                                                        <Avatar className="size-9">
                                                            <AvatarImage src={review.img} alt={review.name} />
                                                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex flex-col">
                                                            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                                                                {review.name} <span className="text-xs">{review.country}</span>
                                                            </figcaption>
                                                            <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                                        </div>
                                                    </div>
                                                    <blockquote className="mt-3 text-sm text-secondary-foreground">{review.body}</blockquote>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Marquee>
                                    {/* Gradient overlays for vertical marquee */}
                                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SectionTransition>

                {/* Final CTA */}
                <section className="py-20 md:py-24 lg:py-28 bg-[#c2a36be6] relative overflow-hidden">
                    <div className="mx-auto max-w-3xl px-5 md:px-8 lg:px-16 text-center relative z-10">
                        <p className="text-base md:text-lg text-ds-body mb-10 leading-[1.65] max-w-2xl mx-auto">
                            Bring one current deal. We'll show you where the at‑home concierge fits between your meetings—and how it can help your team stay one step ahead of other top performers.
                        </p>
                        <Link href="https://studio.fridgechannels.com" className="inline-flex">
                            <ShimmerButton
                                className="shadow-2xl transition-transform duration-300 hover:scale-110 h-12 px-7"
                                background="rgba(0, 0, 0, 1)"
                                shimmerColor="#ffffff"
                            >
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                                    Outfit my team with Close Concierge
                                </span>
                            </ShimmerButton>
                        </Link>
                    </div>
                </section>
            </main >
            <SiteFooter />
        </div >
    );
}
