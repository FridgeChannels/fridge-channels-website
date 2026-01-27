"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureTab {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    iconColor: string;
}

// Using mockData; dev team will replace with real API hook useFetchXxx()
const features: FeatureTab[] = [
    {
        id: "presence",
        title: "At-home Presence",
        subtitle: "Daily presence inside the home",
        description:
            "The real hesitation doesn't happen in front of you — it happens later at home. When questions come up in the kitchen, your presence usually disappears. What if your team was still right there — one tap away?",
        imageSrc: "/magnet远景.jpeg",
        iconColor: "#3B82F6",
    },
    {
        id: "clarity",
        title: "Instant Clarity",
        subtitle: "Less doubt, more confidence",
        description:
            "Buyers don't need more information — they need calm, credible clarity at the exact moment uncertainty creeps in. Close Concierge answers the questions that slow decisions down.",
        imageSrc: "/leo1.jpg",
        iconColor: "#10B981",
    },
    {
        id: "action",
        title: "One-Tap Next Step",
        subtitle: "Turn hesitation into action",
        description:
            "When reaching out feels like effort, even serious buyers delay. Close Concierge gives one obvious next step — text, call, book, request a second showing, share documents.",
        imageSrc: "/cta_button_ui.png",
        iconColor: "#8B5CF6",
    },
    {
        id: "signals",
        title: "Engagement Signals",
        subtitle: "Follow up with precision, not guesses",
        description:
            "Stop relying on \"checking in\" and gut feeling. See real intent signals — taps over time, repeat taps, and which CTA they chose — so you know when and why to follow up.",
        imageSrc: "/analytics_dashboard.png",
        iconColor: "#F59E0B",
    },
];

export function AllInOneSection() {
    const [activeId, setActiveId] = useState(features[0].id);
    const active = features.find((f) => f.id === activeId)!;

    return (
        <section className="relative py-24 md:py-28 lg:py-32 bg-white overflow-hidden">
            <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-ds-text tracking-[-0.02em] leading-[1.2] max-w-[800px] mx-auto">
                        All-in-one at-home assistant to keep deals moving when you're not there
                    </h2>
                </div>

                <div className="relative w-full mx-auto flex flex-col gap-6">
                    {/* Tabs row */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {features.map((f) => {
                            const isActive = activeId === f.id;
                            return (
                                <button
                                    key={f.id}
                                    type="button"
                                    onClick={() => setActiveId(f.id)}
                                    aria-label={`Select ${f.title}`}
                                    className={cn(
                                        "inline-flex items-center gap-2 px-4 py-3 md:px-5 md:py-3 rounded-xl border transition-all duration-200 ease-out",
                                        isActive
                                            ? "bg-white border-ds-border text-ds-text shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                                            : "border-transparent bg-white/60 text-ds-text-secondary hover:bg-white hover:text-ds-text hover:border-ds-border"
                                    )}
                                >
                                    <div
                                        className="h-2 w-2 shrink-0 rotate-45 rounded-sm"
                                        style={{ backgroundColor: f.iconColor }}
                                        aria-hidden
                                    />
                                    <span className="text-sm md:text-base font-medium">{f.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Full-width card: left text (40%), right image (60%), height 2× */}
                    <div className="w-full rounded-2xl border border-ds-border bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
                        <div className="grid grid-cols-[4fr_6fr] min-h-[720px]">
                            {/* Left: text */}
                            <div className="flex flex-col justify-start p-6 md:p-8 lg:p-10 min-w-0">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeId}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-4"
                                    >
                                        <h4 className="text-xl md:text-2xl font-semibold text-ds-text leading-[1.3]">
                                            {active.subtitle}
                                        </h4>
                                        <p className="text-[15px] leading-[1.6] text-ds-body">
                                            {active.description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            {/* Right: image */}
                            <div className="relative min-h-[720px] min-w-0 bg-white">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeId}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={active.imageSrc}
                                            alt={active.title}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 1024px) 100vw, 660px"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
