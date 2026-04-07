"use client";

import { SectionTransition } from "@/components/ui/section-transition";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const CALENDLY_DEMO =
  "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting";

export function PilotSection() {
  return (
    <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
      <section
        className="pt-20 pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-28 relative bg-[linear-gradient(to_bottom,#EFE6DB_0%,white_10%,white_90%,#EFE6DB_100%)]"
        id="pilot"
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16 text-center">
          <div className="mb-8 md:mb-10">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-ds-text leading-[1.2] tracking-tight">
              Pricing
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-ds-body leading-relaxed text-ds-text-secondary">
            <p>
              The per-unit cost of a{" "}
              <strong className="font-semibold text-ds-text">Presence Asset</strong> is comparable to what most brands already spend on{" "}
              <strong className="font-semibold text-ds-text">
                branded packaging inserts, thank-you cards, or sample kits
              </strong>{" "}
              — but with{" "}
              <strong className="font-semibold text-ds-text">measurable downstream revenue</strong>.
            </p>
            <p>
              Unlike{" "}
              <strong className="font-semibold text-ds-text">one-time inserts</strong> that get discarded, the{" "}
              <strong className="font-semibold text-ds-text">Presence Asset</strong> stays active for months — turning a single fulfillment cost into{" "}
              <strong className="font-semibold text-ds-text">ongoing owned impressions and repeat purchases</strong>.
            </p>
            <p>
              Pricing scales with volume and includes{" "}
              <strong className="font-semibold text-ds-text">setup, content configuration, and analytics</strong>. Pilot programs start at a{" "}
              <strong className="font-semibold text-ds-text">fixed monthly fee</strong> with a{" "}
              <strong className="font-semibold text-ds-text">minimum order of 200 units</strong>.
            </p>
            <p className="font-semibold text-ds-text pt-2">
              Book a demo to get a custom quote based on your order volume and goals.
            </p>
            <div className="flex justify-center pt-2">
              <a
                href={CALENDLY_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2a36b] focus-visible:ring-offset-2 rounded-md"
              >
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-105 h-11 md:h-12 px-6 md:px-8"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white md:text-base">
                    Book a Demo
                  </span>
                </ShimmerButton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
}
