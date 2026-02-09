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
                            text: "30-Day Pilot",
                            className: "px-3 py-1 bg-amber-100 border-amber-300/60 text-amber-900 hover:bg-amber-200/80 rounded-full",
                        }}
                        title="Pilot Plan"
                        subtitle="Validate donation frequency lift in 30 days."
                        price={{
                            current: "$4,800 / 30 days",
                        }}
                        benefits={[
                            {
                                text: "50-200 branded magnets",
                                icon: Check,
                            },
                            {
                                text: "Content setup (4-6 pieces)",
                                icon: Check,
                            },
                            {
                                text: "Real-time dashboard",
                                icon: Check,
                            },
                            {
                                text: "Bi-weekly reviews + recommendations",
                                icon: Check,
                            },
                        ]}
                        successMetric="1.5-2x donation frequency in 30 days + 60-day follow-up."
                        features={[
                            {
                                text: "Nonprofits with regular events",
                            },
                            {
                                text: "Struggling to maintain donor engagement",
                            },
                            {
                                text: "Ready to test and iterate",
                            },
                        ]}
                        boundary={{
                            title: "Boundary",
                            content: "We provide the mechanism: event → fridge → visibility → action → measurement. You own the mission, programs, stories.",
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
