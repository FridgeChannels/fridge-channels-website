"use client";

import { Check, ExternalLink } from "lucide-react";
import { SinglePricingCard } from "@/components/ui/single-pricing-card";
import { SectionTransition } from "@/components/ui/section-transition";

export function PilotSection() {
  return (
    <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
      <section
        className="pt-20 pb-0 md:pt-24 md:pb-0 lg:pt-32 lg:pb-0 relative bg-[linear-gradient(to_bottom,#EFE6DB_0%,white_10%,white_90%,#EFE6DB_100%)]"
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
              text: "Pilot Plan",
              className: "px-3 py-1 bg-amber-100 border-amber-300/60 text-amber-900 hover:bg-amber-200/80 rounded-full",
            }}
            title="Pilot Setup"
            subtitle="Validate whether at-home engagement moves clients from showing → decision faster than follow-up alone."
            price={{
              current: "$2,400  ",
            }}
            pricingDescription={
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-950 font-medium">
                Includes deployment package for 100 Close Concierge, <span className="block mt-1 text-lg font-bold text-amber-700">plus 30 days of Pilot Ops.</span>
              </div>
            }
            benefitsTitle="What’s included"
            benefits={[
              {
                text: <strong>Deployment package for 100 Close Concierge (yours to keep)</strong>,
                icon: Check,
              },
              {
                text: <strong>Pilot Ops for 30 days: weekly reviews + recommendations</strong>,
                icon: Check,
              },
              {
                text: "Content configuration (FAQ + CTAs)      ",
                icon: Check,
              },
              {
                text: "Activity dashboard (taps, engagement, actions)",
                icon: Check,
              },

            ]}
            features={[
              {
                text: "Keep using the Close Concierge experience",
              },
              {
                text: "AI features are billed by usage (pay-as-you-go)",
              },
            ]}
            boundary={{
              title: "",
              content: "Pilot Ops refers to optimization + iteration support during the 30-day sprint. AI usage is measured and billed after the pilot.",
            }}
            featuresIcon={Check}
            featuresTitle="After day 30"
            primaryButton={{
              text: "Book a 30-Day Pilot",
              href: "https://studio.fridgechannels.com",
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
