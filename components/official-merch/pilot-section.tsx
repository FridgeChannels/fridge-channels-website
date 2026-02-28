"use client";

import { useEffect, useState } from "react";
import { SectionTransition } from "@/components/ui/section-transition";
import { PilotOfferCard } from "@/components/ui/pilot-offer-card";
import { buildCheckoutUrl } from "@/lib/studio";
import type { PilotPricingConfig } from "@/lib/pilot-pricing";

const SOLUTION_SLUG = "official-merch";

export function PilotSection() {
  const [pricing, setPricing] = useState<PilotPricingConfig | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadPricing = async () => {
      try {
        const res = await fetch(`/api/pilot-pricing/${SOLUTION_SLUG}`);
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && data?.config) {
          setPricing(data.config as PilotPricingConfig);
        }
      } catch {
        // 静默失败，不展示价格
      }
    };

    void loadPricing();

    return () => {
      cancelled = true;
    };
  }, []);

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

          {pricing ? (
            <PilotOfferCard
              title="Pilot Setup"
              subtitle="Validate repeat purchase lift in 6 weeks."
              showBack={false}
              price={pricing.price}
              unitStep={pricing.unitStep}
              defaultMultiplier={pricing.defaultMultiplier}
              buttonText="Book a 30-Day Pilot"
              onCheckout={(units) => {
                window.open(buildCheckoutUrl(SOLUTION_SLUG, units), "_blank");
                // eslint-disable-next-line no-console
                console.log("Official merch pilot units selected:", units);
              }}
            />
          ) : (
            <p className="text-ds-text-secondary">
              Pricing will be configured soon. Please contact us for details.
            </p>
          )}
        </div>
      </section>
    </SectionTransition>
  );
}


