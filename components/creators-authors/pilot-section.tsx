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
                            text: "8-Week Pilot",
                            className: "px-3 py-1 bg-amber-100 border-amber-300/60 text-amber-900 hover:bg-amber-200/80 rounded-full",
                        }}
                        title="Pilot Plan"
                        subtitle="Validate churn reduction, upgrade lift, and book/product sales in 8 weeks."
                        price={{
                            current: "$4,800 / 8 weeks",
                        }}
                        benefits={[
                            {
                                text: "200-300 branded ReaderLoop magnets",
                                icon: Check,
                            },
                            {
                                text: "Content setup (12-20 pieces)",
                                icon: Check,
                            },
                            {
                                text: "Real-time dashboard",
                                icon: Check,
                            },
                            {
                                text: "4 reviews + final report",
                                icon: Check,
                            },
                        ]}
                        successMetric="40-60% churn reduction + 1.5-2x upgrade rate + measurable book/product sales lift in 8 weeks"
                        features={[
                            {
                                text: "Creators/publishers with paid subscriptions",
                            },
                            {
                                text: "High churn despite quality content",
                            },
                            {
                                text: "Ready to test daily engagement touchpoint",
                            },
                        ]}
                        boundary={{
                            title: "Boundary",
                            content: "We provide the mechanism: fridge → daily visibility → engagement → measurement. You own the content quality, pricing, community.",
                        }}
                        featuresIcon={Check}
                        featuresTitle="For"
                        primaryButton={{
                            text: "Book a Demo",
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
