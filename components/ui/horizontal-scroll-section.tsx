"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScrollItem {
    id: string;
    type: 'split' | 'centered' | 'three-cards';
    subtitle?: string;
    title?: string;
    description?: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    headline?: React.ReactNode;
    subheadline?: React.ReactNode;
    useOriginalAspectRatio?: boolean;
    seamless?: boolean; // New property to remove shadow/border
    roundedCorners?: boolean; // New property to force rounded corners even if seamless
    cards?: Array<{ // For 'three-cards' type
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
    }>;
}

interface HorizontalScrollSectionProps {
    items: ScrollItem[];
    className?: string;
    title?: string;
}

export function HorizontalScrollSection({ items, className }: HorizontalScrollSectionProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform scroll progress to horizontal movement
    // We want to move the container to the left as we scroll down
    // The range depends on the number of items. 
    // If we have 3 items, we want to show 1, then 2, then 3.
    // The width of the sliding container will be roughly 300vw (or based on item width).
    // Let's assume each item takes 100vw or a significant portion.
    // Dynamic width based on number of items
    const totalWidth = items.length * 100;
    // We want to move to the left by (items.length - 1) screens
    // The scrollable height is (items.length) * 100vh roughly to give enough time
    // We scroll from 0 to -((totalWidth - 100) / totalWidth)%
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((items.length - 1) / items.length) * 100}%`]);

    return (
        <section ref={targetRef} className={cn("relative", className)} style={{ height: `${items.length * 100}vh` }}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex h-full">
                    {items.map((item) => (
                        <div key={item.id} className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
                            {/* Content Container */}
                            <div className="w-full max-w-[1800px] px-6 md:px-8 lg:px-12 mx-auto h-full relative z-10 flex items-center justify-center">

                                {item.type === 'centered' && (
                                    <div className="max-w-7xl text-center px-4">
                                        {item.headline && (
                                            <h2 className="text-[32px] md:text-[52px] lg:text-[72px] font-bold text-ds-text leading-[1.05] tracking-tight mb-8">
                                                {item.headline}
                                            </h2>
                                        )}
                                        {item.subheadline && (
                                            <p className="text-xl md:text-2xl lg:text-3xl text-ds-text-secondary leading-relaxed max-w-5xl mx-auto">
                                                {item.subheadline}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {item.type === 'split' && (
                                    <div className="grid md:grid-cols-[2.5fr_9.5fr] gap-6 md:gap-10 lg:gap-16 items-center w-full h-full">
                                        {/* Text */}
                                        <div className="flex flex-col justify-center order-2 md:order-1 max-w-xl p-6 md:p-0 relative z-10">
                                            {item.subtitle && (
                                                <h3 className="text-sm font-medium uppercase tracking-widest text-[#c2a36b] mb-4 md:mb-6">
                                                    {item.subtitle}
                                                </h3>
                                            )}
                                            {item.title && (
                                                <h4 className="text-2xl md:text-3xl lg:text-4xl font-light text-ds-text mb-6">
                                                    {item.title}
                                                </h4>
                                            )}
                                            {item.description && (
                                                <div className="text-lg md:text-xl text-ds-body leading-relaxed">
                                                    {item.description}
                                                </div>
                                            )}
                                        </div>

                                        {/* Image - Always 16:9, Maximized */}
                                        <div className="relative w-full order-1 md:order-2 flex items-center justify-center">
                                            <div className={cn(
                                                "relative w-full aspect-video overflow-hidden",
                                                item.roundedCorners ? "rounded-xl" : (item.seamless ? "" : "rounded-3xl shadow-2xl")
                                            )}>
                                                {item.imageSrc && (
                                                    <Image
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt || ""}
                                                        fill
                                                        className={cn(
                                                            "object-cover transition-transform duration-700",
                                                            item.seamless ? "object-contain" : "hover:scale-110 scale-105"
                                                        )}
                                                        sizes="(max-width: 768px) 100vw, 85vw"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {item.type === 'three-cards' && (
                                    <div className="w-full h-full flex flex-col justify-center">
                                        <div className="mb-8 md:mb-12 text-center md:text-left">
                                            {item.subtitle && (
                                                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-ds-text leading-[1.2] tracking-tight">
                                                    {item.subtitle}
                                                </h2>
                                            )}
                                            {item.description && (
                                                <p className="text-lg md:text-xl text-ds-text-secondary mt-4 max-w-[720px]">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                                            {item.cards?.map((card, idx) => (
                                                <div key={idx} className="flex flex-col">
                                                    <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-5 shadow-sm">
                                                        <Image
                                                            src={card.imageSrc}
                                                            alt={card.imageAlt}
                                                            fill
                                                            className="object-cover object-center"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                    </div>
                                                    <div className="text-left">
                                                        <h4 className="text-xl md:text-2xl font-bold text-ds-text mb-2">{card.title}</h4>
                                                        <p className="text-sm md:text-base text-ds-text-secondary leading-relaxed">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// 
// Simplified version for the Real Estate page specifically, if needed to match exact content structure
//
