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
import { FcVsCurrentToolsTable } from "@/components/fc-vs-current-tools-table"
import { SiteFooter } from "@/components/site-footer"
import { SectionTransition } from "@/components/ui/section-transition"

export default function HomePage() {
  const ctaBgUrl = encodeURI("/homepage/homepage底部cta.png");

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
                    /* {
                      title: "Nonprofits",
                      description: "Event attendees → one-time donors → recurring supporters → major donors.",
                      link: "/who-we-serve/nonprofits",
                      linkText: "Learn more →",
                      imageUrl: "/Shrink_the_refrigerator_2k_202602061609.jpeg",
                    }, */
                    {
                      title: "Museums",
                      description: "Event attendees → one-time donors → recurring supporters → major donors.",
                      link: "/who-we-serve/museums",
                      linkText: "Learn more →",
                      imageUrl: "/Shrink_the_refrigerator_2k_202602061609.jpeg",
                    },
                    {
                      title: "Creators & Publishers",
                      description: "Turn casual readers into subscribers. Drive repeat opens and paid upgrades.",
                      link: "/who-we-serve/creators-authors",
                      linkText: "Learn more →",
                      imageUrl: "/homepage/creator-card.png",
                    },
                    {
                      title: "Sports & Entertainment",
                      description: "Keep fans engaged between events. Drive merch sales and ticket renewals.",
                      link: "/who-we-serve/official-merch",
                      linkText: "Learn more →",
                      imageUrl: "/entertainment.jpeg",
                    },
                    {
                      title: "Local Services (Real Estate etc.)",
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
        <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
          <section id="how-it-works" className="py-12 md:py-14 lg:py-16 bg-[#F7F3ED] overflow-hidden">
            <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
              {/* Header Section */}
              <div className="text-center mb-16 md:mb-20 max-w-[800px] mx-auto space-y-4">
                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#333333] leading-[1.2] tracking-tight max-w-[800px] mx-auto">
                  HOW IT WORKS
                </h2>
                <p className="text-[20px] md:text-[24px] text-[#888888] leading-[1.5] font-normal">
                  A simple, repeatable loop from touchpoint to measurable actions.
                </p>
              </div>

              {/* Steps Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto relative">
                {/* Continuous connector line */}
                <div
                  className="hidden md:block absolute top-[14px] h-[2px] bg-[#DDDDDD] z-0"
                  style={{ left: "16.666%", right: "16.666%" }}
                />

                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-7 h-7 rounded-full bg-[#F0F0F0] border border-[#DDDDDD] flex items-center justify-center mb-4 relative z-10">
                    <span className="text-[11px] font-bold text-[#333333]">1</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#333333] mb-4 leading-[1.3]">
                    Send or distribute touchpoints
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                    Mail magnets to your audience, or include them in packages, events, memberships.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-7 h-7 rounded-full bg-[#F0F0F0] border border-[#DDDDDD] flex items-center justify-center mb-4 relative z-10">
                    <span className="text-[11px] font-bold text-[#333333]">2</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#333333] mb-4 leading-[1.3]">
                    Update touchpoints anytime
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                    Update previews, news, offers, or next steps from your dashboard — no reprinting.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-7 h-7 rounded-full bg-[#F0F0F0] border border-[#DDDDDD] flex items-center justify-center mb-4 relative z-10">
                    <span className="text-[11px] font-bold text-[#333333]">3</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#333333] mb-4 leading-[1.3]">
                    Track actions & improve
                  </h3>
                  <div className="space-y-3">
                    <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                      See taps, clicks, and completions across your magnets and touchpoints.
                    </p>
                    <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
                      Adjust content and optimize the loop based on real behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* FC vs. Your Current Tools Section */}
        <section id="fc-vs-current-tools" className="w-full py-20" style={{ backgroundColor: "#F7F4F0" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">FC vs. Your Current Tools</h2>
            <FcVsCurrentToolsTable />
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
              <h2 className="text-3xl md:text-4xl font-bold text-balance text-black drop-shadow-sm">
                Start with a Pilot
              </h2>
              <p className="text-lg md:text-xl text-black/90 drop-shadow-sm">
                See repeat actions. Track conversions. Decide next.
              </p>
              <a href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting" target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[240px]"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Book a 30-Day Pilot
                  </span>
                </ShimmerButton>
              </a>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
