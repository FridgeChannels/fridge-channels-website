"use client";

import { Check, ExternalLink } from "lucide-react";
import { SinglePricingCard } from "@/components/ui/single-pricing-card";
import { SectionTransition } from "@/components/ui/section-transition";

export function PilotSection() {
  return (
    <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
      <section
        className="py-20 md:py-24 lg:py-32 relative bg-[linear-gradient(to_bottom,#EFE6DB_0%,white_10%,white_90%,#EFE6DB_100%)]"
        id="pilot"
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
          <div className="mb-8">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-ds-text leading-[1.2] tracking-tight">
              Pricing
            </h2>
          </div>

          <SinglePricingCard
            badge={{
              text: "30-Day Pilot",
              className: "px-3 py-1 bg-amber-100 border-amber-300/60 text-amber-900 hover:bg-amber-200/80 rounded-full",
            }}
            title="Pilot Plan"
            subtitle="Validate whether at-home engagement moves clients from showing to decision faster than follow-up alone."
            price={{
              current: "$2,400",
            }}
            benefits={[
              {
                text: "Deployment package for 100 Close Concierge",
                icon: Check,
              },
              {
                text: "Content configuration (FAQ + CTAs)",
                icon: Check,
              },
              {
                text: "Activity dashboard (taps, engagement, actions)",
                icon: Check,
              },
              {
                text: "Weekly review recommendations",
                icon: Check,
              },
            ]}
            successMetric="Baseline response time → 40% faster next-step action in 30 days"
            features={[
              {
                text: "Top-performing teams with serious buyers who need momentum",
              },
              {
                text: "Agents who want data on client engagement, not guesses",
              },
              {
                text: "Teams willing to test one new channel for 30 days",
              },
            ]}
            boundary={{
              title: "Boundary",
              content: "We provide the mechanism—touchpoint, content structure, and measurement. You own the deals, pricing strategy, and client relationships. We don't replace your sales process; we make the at-home part measurable.",
            }}
            featuresIcon={Check}
            featuresTitle="For"
            primaryButton={{
              text: "Book a 30-Day Pilot",
              href: "https://studio.fridgechannels.com",
            }}
            secondaryButton={{
              text: "Data: See Trust Center",
              icon: ExternalLink,
              href: "/trust",
            }}
            testimonials={[]}
            animationEnabled={true}
            maxWidth="max-w-6xl"
            cardClassName="border-ds-border"
          />
        </div>
      </section>
    </SectionTransition>
  );
}
