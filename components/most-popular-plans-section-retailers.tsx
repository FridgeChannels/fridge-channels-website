"use client";

import type { ReactNode } from "react";
import React from "react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimatedTitle } from "@/components/ui/animated-title";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
    HoverSlider,
    HoverSliderImageWrap,
    TextStaggerHover,
    useHoverSliderContext,
} from "@/components/ui/animated-slideshow";
import { motion } from "motion/react";
import { useRef, useState } from "react";

interface PlanData {
  id: string;
  title: string;
  bestFor: string;
  cohort: string;
  primaryCta: ReactNode;
  pilotSizeDuration: string;
  primaryKpi: string;
  observabilityLabel: string;
  observability: string[];
  includes: string;
  buttonText: string;
  onButtonClick: () => void;
}

const retailerPlans: PlanData[] = [
  {
    id: "plan-a-trip-driver",
    title: "Plan A — Trip Driver (Weekly Return)",
    bestFor: "Increasing return trips within 7–14 days.",
    cohort: "Active shoppers · nearby households · lapsed recent",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Get this week's deal / See weekly picks / Map to store
      </strong>
    ),
    pilotSizeDuration: "10k–50k households · 4–6 weeks",
    primaryKpi: "Trip frequency lift / redemption lift (store or region-level)",
    observabilityLabel: "Observability (3-line standard):",
    observability: [
      "Track: tap → landing page visits",
      "Track: CTA clicks → offer views / store directions (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
  {
    id: "plan-b-basket-builder",
    title: "Plan B — Basket Builder (Cross-sell)",
    bestFor: "Growing basket size via curated add-ons and missions.",
    cohort: "Active shoppers · high-frequency shoppers · category buyers",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Add to basket / Build your list / Bundle & save
      </strong>
    ),
    pilotSizeDuration: "10k–50k households · 4–6 weeks",
    primaryKpi: "Items-per-trip / basket size lift (directional)",
    observabilityLabel: "Observability:",
    observability: [
      "Track: tap → landing page visits",
      "Track: CTA clicks → list build / add-to-cart (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
  {
    id: "plan-c-loyalty-activation",
    title: "Plan C — Loyalty Activation (Enroll + Reactivate)",
    bestFor: "Increasing loyalty signups and points activity.",
    cohort: "Non-members · inactive members · low-frequency members",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Join loyalty / Activate points / Scan for rewards
      </strong>
    ),
    pilotSizeDuration: "10k–50k households · 4–6 weeks",
    primaryKpi: "Loyalty enrollments / activations (confirmed where available)",
    observabilityLabel: "Observability:",
    observability: [
      "Track: tap → landing page visits",
      "Track: CTA clicks → join/activate start (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
  {
    id: "plan-d-brand-sponsored",
    title: "Plan D — Brand-Sponsored Category Spotlight (Co-op Ready)",
    bestFor: "Running vendor-funded campaigns that still drive retailer outcomes.",
    cohort: "Category buyers · lapsed category buyers · lookalike households (broad)",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Shop the category / Redeem brand offer / Explore picks
      </strong>
    ),
    pilotSizeDuration: "20k–100k households · 4–6 weeks",
    primaryKpi: "Category lift / redemption lift (store or region-level)",
    observabilityLabel: "Observability:",
    observability: [
      "Track: tap → landing page visits (campaign-level)",
      "Track: CTA clicks → offer views / redemption intent (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "Co-branded creative workflow · CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
];

// White background
const CARD_BACKGROUND = "#FFFFFF";

const clipPathVariants = {
    visible: {
        clipPath: "inset(0% 0% 0% 0% round 20px)",
    },
    hidden: {
        clipPath: "inset(100% 0% 0% 0% round 20px)",
    },
};

interface PlanCardContentProps {
    plan: PlanData;
    index: number;
}

function PlanCardContent({ plan, index }: PlanCardContentProps) {
    const { activeSlide } = useHoverSliderContext();
    const isActive = activeSlide === index;
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    // Handle mouse movement for 3D effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current && isActive) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = -(y / rect.height) * 5;
            const rotateY = (x / rect.width) * 5;
            setRotation({ x: rotateX, y: rotateY });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                "rounded-[20px] overflow-hidden flex flex-col relative",
                "min-h-[500px] sm:min-h-[540px] lg:min-h-[580px]",
                "w-full"
            )}
            style={{
                transformStyle: "preserve-3d",
                backgroundColor: CARD_BACKGROUND,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
            variants={clipPathVariants}
            animate={isActive ? "visible" : "hidden"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {/* Card content */}
            <motion.div
                className="relative flex flex-col h-full p-6 sm:p-8 z-40"
                animate={{
                    rotateX: isHovered && isActive ? -rotation.x * 0.3 : 0,
                    rotateY: isHovered && isActive ? -rotation.y * 0.3 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Title */}
                <motion.h3
                    className="text-2xl sm:text-[26px] md:text-[30px] font-medium text-gray-900 mb-4 sm:mb-6"
                    style={{
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                    }}
                    animate={{
                        textShadow: isHovered && isActive ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
                    }}
                >
                    {plan.title}
                </motion.h3>

                {/* Content */}
                <div className="flex-1 space-y-0 text-sm sm:text-[14px] leading-relaxed text-gray-700">
                    <motion.div
                        className="rounded-lg px-3 py-2 -mx-3 transition-all duration-300 cursor-default"
                        whileHover={{
                            scale: 1.05,
                            x: 4,
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <span className="font-semibold text-gray-900">Best for:</span> <span>{plan.bestFor}</span>
                    </motion.div>
                    <motion.div
                        className="rounded-lg px-3 py-2 -mx-3 transition-all duration-300 cursor-default"
                        whileHover={{
                            scale: 1.05,
                            x: 4,
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <span className="font-semibold text-gray-900">Cohort:</span> <span>{plan.cohort}</span>
                    </motion.div>
                    <motion.div
                        className="rounded-lg px-3 py-2 -mx-3 transition-all duration-300 cursor-default"
                        whileHover={{
                            scale: 1.05,
                            x: 4,
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <span className="font-semibold text-gray-900">Primary CTA:</span>{" "}
                        <span className="text-gray-800">{plan.primaryCta}</span>
                    </motion.div>
                    <motion.div
                        className="rounded-lg px-3 py-2 -mx-3 transition-all duration-300 cursor-default"
                        whileHover={{
                            scale: 1.05,
                            x: 4,
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <span className="font-semibold text-gray-900">Pilot size & duration:</span>{" "}
                        <span>{plan.pilotSizeDuration}</span>
                    </motion.div>
                    <motion.div
                        className="rounded-lg px-3 py-2 -mx-3 transition-all duration-300 cursor-default"
                        whileHover={{
                            scale: 1.05,
                            x: 4,
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <span className="font-semibold text-gray-900">Primary KPI:</span>{" "}
                        <span>{plan.primaryKpi}</span>
                    </motion.div>
                    <motion.div
                        className="rounded-lg px-3 py-2 -mx-3 transition-all duration-300 cursor-default"
                        whileHover={{
                            scale: 1.05,
                            x: 4,
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className="text-sm font-semibold text-gray-900 mb-2">{plan.observabilityLabel}</div>
                        <ul className="flex flex-col gap-2 text-gray-700">
                            {plan.observability.map((item, idx) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <motion.li
                                    key={idx}
                                    className="flex items-start gap-2 rounded-md px-2 py-1 -mx-2"
                                    whileHover={{
                                        x: 4,
                                    }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                >
                                    <span className="mt-0.5 text-gray-900" aria-hidden="true">
                                        ✓
                                    </span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className="rounded-lg px-3 py-2 -mx-3 transition-all duration-300 cursor-default"
                        whileHover={{
                            scale: 1.05,
                            x: 4,
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className="text-sm font-semibold text-gray-900 mb-1">Includes:</div>
                        <div className="text-gray-700">{plan.includes}</div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 sm:mt-8 relative z-10">
                    <div className="flex items-center justify-center">
                        <ShimmerButton
                            aria-label={plan.buttonText}
                            onClick={plan.onButtonClick}
                            className="mx-0 shadow-2xl"
                            background="rgba(0, 0, 0, 1)"
                            shimmerColor="#ffffff"
                        >
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                                {plan.buttonText}
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function MostPopularPlansSectionRetailers() {
    const plans = retailerPlans;

    return (
        <SectionWrapper enableFadeTransition={true} className="container mx-auto px-4 py-20">
            <SectionReveal delay={0.1} direction="up" distance={60}>
                <div className="max-w-7xl mx-auto space-y-12">
                    <SectionReveal delay={0} direction="up" distance={40}>
                        <div className="text-center space-y-4">
                            <AnimatedTitle className="text-3xl md:text-5xl font-bold text-balance">
                                Most Popular Plans
                            </AnimatedTitle>
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.2} direction="up" distance={50}>
                        <HoverSlider className="min-h-[600px] place-content-center p-6 md:px-12 bg-[#F7F7F4] text-[#3d3929]">
                            <h3 className="mb-6 text-[rgb(201, 100, 66)] text-xs font-medium capitalize tracking-wide text-[#c96442]">
                                / our plans
                            </h3>
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-evenly gap-6 md:gap-12">
                                <div className="flex flex-col space-y-2 md:space-y-4 w-full md:w-auto">
                                    {plans.map((plan, index) => (
                                        <TextStaggerHover
                                            key={plan.id}
                                            index={index}
                                            className="cursor-pointer text-3xl md:text-4xl font-bold uppercase tracking-tighter"
                                            text={plan.title}
                                        />
                                    ))}
                                </div>
                                <HoverSliderImageWrap className="w-full max-w-2xl min-h-[580px]">
                                    {plans.map((plan, index) => (
                                        <PlanCardContent key={plan.id} plan={plan} index={index} />
                                    ))}
                                </HoverSliderImageWrap>
                            </div>
                        </HoverSlider>
                    </SectionReveal>
                </div>
            </SectionReveal>
        </SectionWrapper>
    );
}
