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
                        title="Pilot"
                        subtitle="Validate repeat purchase lift in 6 weeks."
                        price={{
                            current: "$4,800 / 6 weeks",
                        }}
                        benefits={[
                            {
                                text: "200 branded magnets",
                                icon: Check,
                            },
                            {
                                text: "Content setup (10-15 pieces)",
                                icon: Check,
                            },
                            {
                                text: "AI assistant training",
                                icon: Check,
                            },
                            {
                                text: "Real-time dashboard",
                                icon: Check,
                            },
                            {
                                text: "3 reviews + final report",
                                icon: Check,
                            },
                        ]}
                        successMetric="1.5-2x repeat purchase rate improvement in 6 weeks."
                        features={[
                            {
                                text: "DTC brands with 500+ monthly orders",
                            },
                            {
                                text: "Existing content to repurpose",
                            },
                            {
                                text: "Ready to test and iterate",
                            },
                        ]}
                        boundary={{
                            title: "Boundary",
                            content: "We provide the mechanism: tap → content → action → measurement. You own product quality, pricing, brand appeal.",
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
