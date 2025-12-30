"use client";

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />

      {/* Hero Section - styled like HeroSection component */}
      <section
        id="hero"
        className="relative pt-16 min-h-[700px] overflow-hidden bg-transparent pb-0"
        style={{
          backgroundImage: 'url(/bg-ethics-hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 text-center relative z-10 min-h-[700px] mt-6">
          <div className="mx-auto max-w-5xl" style={{ marginTop: '80px' }}>
            <div className="relative mx-auto h-full pt-24 pb-12 p-6">
              <h1 className="text-center text-2xl md:text-5xl mt-2 text-black">
                Get people to join, get them to stay.
              </h1>
            </div>

            <div className="text-black py-4 mt-8 text-lg md:text-xl">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                FC is a <strong className="font-semibold text-black">household-owned channel</strong> with the <strong className="font-semibold text-black">highest daily-life exposure</strong> Algorithm-free reach + one-tap action—built to drive <strong className="font-semibold text-black">conversion and retention</strong>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4" style={{ marginTop: '40px' }}>
              <Link href="https://calendly.com/billy-fridgechannels/30min" target="_blank">
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 min-w-[227px]"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Run a Pilot
                  </span>
                </ShimmerButton>
              </Link>
              <Link href="#who-we-serve">
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 min-w-[227px]"
                  background="rgba(255, 255, 255, 1)"
                  shimmerColor="#000000"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black lg:text-lg">
                    See Who We Serve
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bullets */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <div>
            <p className="text-base md:text-lg leading-relaxed">
              <strong className="font-semibold text-foreground">Highest Daily-Life Exposure</strong> — your message shows up where habits repeat
            </p>
          </div>
          <div>
            <p className="text-base md:text-lg leading-relaxed">
              <strong className="font-semibold text-foreground">Algorithm-Free Reach</strong> — no feed, no inbox games, no platform risk
            </p>
          </div>
          <div>
            <p className="text-base md:text-lg leading-relaxed">
              <strong className="font-semibold text-foreground">Instant Action Path</strong> — tap → preview → next step
            </p>
          </div>
        </div>
      </div>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">WHO WE SERVE</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              <strong className="font-semibold text-foreground">Built for renewal-driven organizations.</strong>
            </p>
          </div>

          {/* Three Categories */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {/* 1) Subscription Businesses */}
            <Card className="border border-border/30 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90 cursor-pointer h-full">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold">Subscription Businesses</h3>
                  <p className="text-sm text-muted-foreground italic">
                    (SaaS, newsletters, communities, local news, tools)
                  </p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Drive more joins and reduce churn—without relying on platforms.
                </p>
                <Link
                  href="/who-we-serve/subscription-business"
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            {/* 2) Universities */}
            <Card className="border border-border/30 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90 cursor-pointer h-full">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold">Universities</h3>
                  <p className="text-base md:text-lg font-semibold text-foreground">
                    An at-home alumni engagement channel
                  </p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Drive recurring giving and alumni membership renewals.
                </p>
                <Link
                  href="/who-we-serve/university"
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            {/* 3) Nonprofits */}
            <Card className="border border-border/30 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90 cursor-pointer">
              <CardContent className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Nonprofits</h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Grow recurring supporters and improve retention beyond campaigns.
                </p>
                <Link
                  href="/who-we-serve/nonprofit"
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why FC Is A Category Of One Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">WHY FC IS A CATEGORY OF ONE</h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
              FC is the only touchpoint that's <strong className="font-semibold text-foreground">high-frequency</strong>, <strong className="font-semibold text-foreground">algorithm-free</strong>, <strong className="font-semibold text-foreground">one-tap actionable</strong>, and <strong className="font-semibold text-foreground">household-wide</strong>—at the same time.
            </p>
          </div>

          {/* The 5 Dimensions */}
          <div className="space-y-6 pt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-center">The 5 dimensions</h3>

            <div className="max-w-4xl mx-auto space-y-8 text-center">
              {/* 1. Highest Daily-Life Exposure */}
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-bold">
                  1. <strong className="font-semibold text-foreground">Highest Daily-Life Exposure</strong>
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Seen in the most repeated household moments—every day.
                </p>
              </div>

              {/* 2. Algorithm-Free Reach */}
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-bold">
                  2. <strong className="font-semibold text-foreground">Algorithm-Free Reach</strong>
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  No feed. No inbox. No platform dependency.
                </p>
              </div>

              {/* 3. Instant Action Path */}
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-bold">
                  3. <strong className="font-semibold text-foreground">Instant Action Path</strong>
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Attention → preview → action in one tap.
                </p>
              </div>

              {/* 4. Household Multipliers */}
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-bold">
                  4. <strong className="font-semibold text-foreground">Household Multipliers</strong>
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Not one user on one screen—the whole household over time.
                </p>
              </div>

              {/* 5. Persistent, Owned Touchpoint */}
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-bold">
                  5. <strong className="font-semibold text-foreground">Persistent, Owned Touchpoint</strong>
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  The touchpoint stays. The cost doesn't scale with impressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Measure & Move Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">WHAT WE MEASURE & MOVE</h2>
          </div>

          {/* Two Metrics */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 max-w-4xl mx-auto">
            {/* Conversion */}
            <Card className="border border-border/30 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90 h-full">
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold">Conversion</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground flex-grow">
                  Starts after an FC touch: join, start, upgrade.
                </p>
              </CardContent>
            </Card>

            {/* Retention */}
            <Card className="border border-border/30 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90 h-full">
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold">Retention</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground flex-grow">
                  Repeat action over time: renew, stay active, keep supporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pilot Section */}
      <section
        className="w-full py-12 relative"
        style={{
          backgroundImage: 'url(/bg-ethics-hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 space-y-4 relative z-10">
          {/* Section Header */}
          <div className="text-center space-y-1">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">PILOT</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              <strong className="font-semibold text-foreground">A pilot designed to prove lift.</strong>
            </p>
          </div>

          {/* Three Steps */}
          <div className="max-w-4xl mx-auto space-y-3 pt-2 text-center">
            {/* 1. Design */}
            <div>
              <h3 className="text-lg md:text-xl font-bold">
                1. <strong className="font-semibold text-foreground">Design</strong> — pick segment, content format, success metrics
              </h3>
            </div>

            {/* 2. Deploy */}
            <div>
              <h3 className="text-lg md:text-xl font-bold">
                2. <strong className="font-semibold text-foreground">Deploy</strong> — ship magnets to a test group
              </h3>
            </div>

            {/* 3. Measure */}
            <div>
              <h3 className="text-lg md:text-xl font-bold">
                3. <strong className="font-semibold text-foreground">Measure</strong> — track joins + renewal lift
              </h3>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-2">
            <Link href="https://calendly.com/billy-fridgechannels/30min" target="_blank">
              <ShimmerButton
                className="shadow-2xl transition-transform duration-300 hover:scale-110"
                background="rgba(0, 0, 0, 1)"
                shimmerColor="#ffffff"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Start a Pilot
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-center text-muted-foreground">
              © Fridge Channel
            </p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/" className="text-sm hover:underline text-muted-foreground">
                Home
              </Link>
              <Link href="/about-us" className="text-sm hover:underline text-muted-foreground">
                Our Story
              </Link>
              <Link href="/privacy" className="text-sm hover:underline text-muted-foreground">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm hover:underline text-muted-foreground">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
