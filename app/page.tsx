"use client";

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { WhoWeServeCards } from "@/components/ui/who-we-serve-cards"
import { SectionReveal } from "@/components/ui/section-reveal"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { RuixenUiHero } from "@/components/ui/ruixen-ui-hero"
import { Timeline } from "@/components/ui/timeline"
import { ImageMask } from "@/components/ui/image-mask"
import { FcVsCurrentToolsTable } from "@/components/fc-vs-current-tools-table"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const ctaBgUrl = encodeURI("/截屏2026-01-08 19.34.38.png");

  return (
    <div className="min-h-screen bg-[#F7F3ED] relative overflow-x-hidden flex flex-col">
      <Navigation />

      <main className="flex-1">
      <RuixenUiHero />

      {/* How FC Drives Revenue Section */}
      <SectionWrapper id="how-fc-drives-revenue" enableFadeTransition={true} className="container mx-auto px-4 py-20">
        <SectionReveal delay={0.1} direction="up" distance={60}>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <SectionReveal delay={0} direction="up" distance={40}>
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">HOW FC DRIVES REVENUE</h2>
              </div>
            </SectionReveal>

            {/* The 4 Feature Cards */}
            <SectionReveal delay={0.2} direction="up" distance={50}>
              <FeaturesSectionWithHoverEffects />
            </SectionReveal>
          </div>
        </SectionReveal>
      </SectionWrapper>

      {/* Who We Serve Section */}
      <SectionWrapper id="who-we-serve" enableFadeTransition={true} className="container mx-auto px-4 py-20">
        <SectionReveal delay={0.1} direction="up" distance={60}>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <SectionReveal delay={0} direction="up" distance={40}>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">WHO WE SERVE</h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  <strong className="font-semibold text-foreground">Choose your industry—see how the fridge door drives your key actions:</strong>
                </p>
              </div>
            </SectionReveal>

            {/* Categories */}
            <SectionReveal delay={0.2} direction="up" distance={50}>
              <WhoWeServeCards
                cards={[
                  {
                    title: "DTC Brands",
                    description: "Move one-time buyers to repeat customers. Turn daily attention into next purchases.",
                    link: "/who-we-serve/dtc-brands",
                    linkText: "Learn more →",
                    imageUrl: "/dtcbrand.jpeg",
                  },
                  {
                    title: "Nonprofits",
                    description: "Event attendees → one-time donors → recurring supporters → major donors. Daily visibility builds trust and keeps your mission top-of-mind.",
                    link: "/who-we-serve/nonprofits",
                    linkText: "Learn more →",
                    imageUrl: "/Shrink_the_refrigerator_2k_202602061609.jpeg",
                  },
                  {
                    title: "Creators & Publishers",
                    description: "Turn casual readers into subscribers. Drive repeat opens and paid upgrades.",
                    link: "/creator-shortlist",
                    linkText: "Learn more →",
                    imageUrl: "/creator.jpeg",
                  },
                  {
                    title: "Sports & Entertainment (Official Merch)",
                    description: "Keep fans engaged between events. Drive merch sales and ticket renewals.",
                    link: "/contact",
                    linkText: "Learn more →",
                    imageUrl: "/entertainment.jpeg",
                  },
                  {
                    title: "Local Services (Real Estate and more)",
                    description: "Move leads to appointments. Drive referrals and repeat bookings.",
                    link: "/who-we-serve/real-estate",
                    linkText: "Learn more →",
                    imageUrl: "/reality.jpeg",
                  },
                ]}
              />
            </SectionReveal>
          </div>
        </SectionReveal>
      </SectionWrapper>

      {/* How It Works Section */}
      <section id="how-it-works">
        <div className="w-full bg-muted/30 dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">HOW IT WORKS</h2>
          </div>
          <Timeline
            data={[
              {
                title: "1. Send or Distribute Touchpoints",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Mail magnets to your audience. Or include them in packages, events, memberships.
                    </p>
                  </div>
                ),
              },
              {
                title: "2. Update Touchpoints Anytime",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Update previews, news, offers, or next steps from your dashboard—no reprinting.
                    </p>
                  </div>
                ),
              },
              {
                title: "3. Track Actions & Improve",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      See taps, clicks, completions. Adjust content. Optimize the loop.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* FC vs. Your Current Tools Section */}
      <section id="fc-vs-current-tools" className="w-full py-20" style={{ backgroundColor: "#F7F4F0" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">FC vs. Your Current Tools</h2>
          <FcVsCurrentToolsTable />
        </div>
      </section>

      {/* Image Mask Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <ImageMask />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="w-full py-12 relative overflow-hidden"
        style={{
          backgroundImage: `url('${ctaBgUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-white drop-shadow-sm">
              Start with a Pilot
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-sm">
              See repeat actions. Track conversions. Decide next.
            </p>
            <Link href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting" target="_blank">
              <ShimmerButton
                className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[240px]"
                background="rgba(0, 0, 0, 1)"
                shimmerColor="#ffffff"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Book a 30-Day Pilot
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  )
}
