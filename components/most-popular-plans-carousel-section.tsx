"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/animated-title";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlowButton } from "@/components/ui/shiny-button-1";
import { cn } from "@/lib/utils";

export type MostPopularPlan = {
  id: string;
  title: string;
  bestFor: string;
  cohort: string;
  primaryCta: ReactNode;
  pilotSizeDuration: string;
  primaryKpi: string;
  observabilityLabel?: string;
  observability: string[];
  includes: string;
  buttonText: string;
  onButtonClick: () => void;
  extra?: Array<{ label: string; value: ReactNode }>;
};

const ACTIVE_CARD_WIDTH = "w-[450px] sm:w-[510px] lg:w-[630px]";
const INACTIVE_CARD_WIDTH = "w-[520px] sm:w-[600px] lg:w-[680px]";

function PlanCard({ plan, isActive }: { plan: MostPopularPlan; isActive: boolean }) {
  const cardClasses = cn(
    "rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-black overflow-hidden flex flex-col",
    isActive ? "bg-[#83B79F]" : "bg-[#F7F2EA]",
    "transition-[filter,opacity,transform] duration-500",
    isActive && "rounded-t-2xl rounded-b-none shadow-none min-h-[500px] sm:min-h-[540px] lg:min-h-[580px]",
    !isActive && "opacity-60 saturate-0 contrast-90 max-h-[460px] sm:max-h-[500px] lg:max-h-[540px]"
  );

  const observabilityLabel = plan.observabilityLabel ?? "Observability (3-line standard):";

  return (
    <div className={cardClasses}>
      <div className="px-6 pt-6">
        <div className="text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em] font-light border-b border-black/15 pb-4">
          {plan.title}
        </div>
      </div>

      <div className="px-6 pt-5 pb-6 flex-1">
        {isActive ? (
          <div className="flex flex-col h-full">
            <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-black/75 flex-1">
              <div className="text-[14px] text-black/75">
                <span className="text-sm font-semibold text-black">Best for:</span> <span>{plan.bestFor}</span>
              </div>
              <div className="text-[14px] text-black/75">
                <span className="text-sm font-semibold text-black">Cohort:</span> <span>{plan.cohort}</span>
              </div>
              <div className="text-[14px] text-black/75">
                <span className="text-sm font-semibold text-black">Primary CTA:</span>{" "}
                <span className="text-black/80">{plan.primaryCta}</span>
              </div>

              {plan.extra?.map((row) => (
                <div key={row.label} className="text-[14px] text-black/75">
                  <span className="text-sm font-semibold text-black">{row.label}:</span> <span>{row.value}</span>
                </div>
              ))}

              <div className="text-[14px] text-black/75">
                <span className="text-sm font-semibold text-black">Pilot size & duration:</span>{" "}
                <span>{plan.pilotSizeDuration}</span>
              </div>
              <div className="text-[14px] text-black/75">
                <span className="text-sm font-semibold text-black">Primary KPI:</span> <span>{plan.primaryKpi}</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black mb-2">{observabilityLabel}</div>
                <ul className="flex flex-col gap-2 text-black/75">
                  {plan.observability.map((item, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#469A74]" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-[14px] text-black/70">
                <span className="font-semibold text-black">Includes:</span> {plan.includes}
              </div>
            </div>
          </div>
        ) : (
          <div className="border-t border-black/15 pt-4 h-full flex flex-col">
            <div className="space-y-4 flex-1 text-[14px] leading-relaxed text-black/75">
              <div className="text-[14px] text-black/70">
                <span className="font-semibold text-black">Best for:</span> {plan.bestFor}
              </div>
              <div className="text-[14px] text-black/70">
                <span className="font-semibold text-black">Cohort:</span> {plan.cohort}
              </div>
              <div className="text-[14px] text-black/70">
                <span className="font-semibold text-black">Primary CTA:</span>{" "}
                <span className="text-black/75">{plan.primaryCta}</span>
              </div>
              <div className="text-[14px] text-black/70">
                <span className="font-semibold text-black">Pilot size & duration:</span> {plan.pilotSizeDuration}
              </div>
              <div className="text-[14px] text-black/70">
                <span className="font-semibold text-black">Primary KPI:</span> {plan.primaryKpi}
              </div>
              <div>
                <div className="text-sm font-semibold text-black mb-2">{observabilityLabel}</div>
                <ul className="flex flex-col gap-2 text-black/75">
                  {plan.observability.map((item, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#469A74]" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-[14px] text-black/70">
                <span className="font-semibold text-black">Includes:</span> {plan.includes}
              </div>
            </div>
            <div className="mt-auto pt-8 text-[13px] text-black/55">Drag to explore</div>
          </div>
        )}
      </div>
    </div>
  );
}

export function MostPopularPlansCarouselSection({ plans }: { plans: MostPopularPlan[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const wheelAccum = useRef(0);
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!emblaApi) return;
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (absX <= absY) return;
      e.preventDefault();
      wheelAccum.current += e.deltaX;
      if (Math.abs(wheelAccum.current) < 24) return;
      if (wheelAccum.current > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
      wheelAccum.current = 0;
    },
    [emblaApi]
  );

  return (
    <SectionWrapper enableFadeTransition={true} className="container mx-auto px-4 py-20">
      <SectionReveal delay={0.1} direction="up" distance={60}>
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionReveal delay={0} direction="up" distance={40}>
            <div className="text-center space-y-4">
              <AnimatedTitle className="text-3xl md:text-5xl font-bold text-balance">Most Popular Plans</AnimatedTitle>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} direction="up" distance={50}>
            <div className="relative w-screen mx-[calc(50%-50vw)]">
              <div className="rounded-[28px] bg-[#F7F7F4] px-0 py-0 overflow-hidden">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                      background:
                        "radial-gradient(700px 320px at 50% 40%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 60%), radial-gradient(1100px 520px at 50% 60%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 65%)",
                    }}
                  />

                  <div
                    className="overflow-hidden select-none pt-0 pb-0"
                    ref={emblaRef}
                    onWheel={onWheel}
                    aria-label="Most popular plans carousel"
                  >
                    <div className="flex items-start px-0 -mx-5 sm:-mx-7">
                      {plans.map((plan, index) => {
                        const isActive = index === selectedIndex;
                        return (
                          <motion.button
                            key={plan.id}
                            type="button"
                            className={cn(
                              "relative flex-[0_0_auto] text-left focus:outline-none cursor-grab active:cursor-grabbing",
                              "px-5 sm:px-7"
                            )}
                            onClick={() => scrollTo(index)}
                            aria-label={`Select ${plan.title}`}
                            animate={{
                              scale: isActive ? 1 : 0.95,
                              opacity: isActive ? 1 : 0.62,
                              y: isActive ? 0 : 10,
                            }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className={cn(isActive ? ACTIVE_CARD_WIDTH : INACTIVE_CARD_WIDTH)}>
                              <PlanCard plan={plan} isActive={isActive} />
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative z-20 flex justify-center -mt-px pb-0">
                    <div
                      className={cn(
                        ACTIVE_CARD_WIDTH,
                        "bg-[#83B79F] rounded-b-2xl shadow-[0_-18px_50px_rgba(0,0,0,0.22)] px-6 py-5"
                      )}
                    >
                      <div className="flex items-center justify-center">
                        <GlowButton
                          aria-label={plans[selectedIndex]?.buttonText ?? "Book a Pilot Meeting"}
                          onClick={() => plans[selectedIndex]?.onButtonClick()}
                          className="mx-0"
                          width={240}
                        >
                          {plans[selectedIndex]?.buttonText ?? "Book a Pilot Meeting"}
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </SectionWrapper>
  );
}

