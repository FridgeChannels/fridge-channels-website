"use client";

import { SectionTransition } from "@/components/ui/section-transition";
import { PilotOfferCard } from "@/components/ui/pilot-offer-card";
import { buildCheckoutUrl } from "@/lib/studio";

const SOLUTION_SLUG = "nonprofits";

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

          <PilotOfferCard
            title="Pilot Setup"
            subtitle="Validate donation frequency lift in 30 days."
            showBack={false}
            price={4800}
            unitStep={50}
            defaultMultiplier={2}
            goal="Validate donation frequency lift in 30 days."
            hardwareItems={[
              "100 branded magnets (yours to keep)",
              "Custom magnet design",
            ]}
            softwareItems={[
              "Content setup (4–6 pieces)",
              "Real-time dashboard (views, taps, actions)",
              "Pilot Ops for 30 days: bi-weekly reviews + recommendations",
            ]}
            afterDay30Items={[
              "Keep using the magnet experience",
              "AI features are billed by usage (pay-as-you-go)",
            ]}
            pilotOpsNote="Pilot Ops refers to optimization + iteration support during the 30-day sprint. AI usage is measured and billed after the pilot."
            buttonText="Book a 30-Day Pilot"
            onCheckout={(units) => {
              window.open(buildCheckoutUrl(SOLUTION_SLUG, units), "_blank");
              // eslint-disable-next-line no-console
              console.log("Nonprofits pilot units selected:", units);
            }}
          />
        </div>
      </section>
    </SectionTransition>
  );
}


