"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FadingHeadlineSectionProps {
    /** 主标题文案，支持多行或 ReactNode（可内嵌金色等强调） */
    headline: React.ReactNode;
    /** 副标题（可选），支持 ReactNode */
    subheadline?: React.ReactNode;
    /** 背景类名，默认带对角纹理 */
    className?: string;
}

/**
 * Daylight 风格渐变淡出标题区块
 * 1:1 还原 https://daylightcomputer.com/ 的滚动驱动文字渐隐动效
 * - 右侧文字随滚动从透明渐变到不透明（reveal）
 * - 浅色渐变背景 + 对角纹理
 */
export function FadingHeadlineSection({
    headline,
    subheadline,
    className = "",
}: FadingHeadlineSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.7", "start 0.2"],
    });

    // 滚动时 mask 从 ~55% 展开到 100%，实现「从左侧实色到右侧渐隐」的 reveal
    // Motion useTransform value mapping requires input and output to be same-length arrays (not a function).
    const maskImage = useTransform(
        scrollYProgress,
        [0, 1],
        [
            "linear-gradient(to right, black 0%, black 55%, transparent 55%)",
            "linear-gradient(to right, black 0%, black 100%, transparent 100%)",
        ]
    );

    // #region agent log
    useEffect(() => {
        fetch("http://127.0.0.1:7245/ingest/09344088-d9b5-4f60-944a-dab329f904c6", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                location: "fading-headline-section.tsx:post-useTransform",
                message: "FadingHeadlineSection mounted, useTransform did not throw",
                data: { runId: "post-fix" },
                timestamp: Date.now(),
            }),
        }).catch(() => { });
    }, []);
    // #endregion

    return (
        <section
            ref={ref}
            className={`relative overflow-hidden py-24 md:py-32 lg:py-40 ${className}`}
        >
            {/* 对角纹理背景 */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            115deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.02) 2px,
            rgba(0,0,0,0.02) 4px
          )`,
                }}
            />
            {/* 基础渐变背景 */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to right, #fafaf9 0%, #f5f5f4 50%, #eeeeec 100%)",
                }}
            />

            <div className="relative mx-auto max-w-[1320px] px-8 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    <motion.h2
                        className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] font-medium text-[#1a1a1a] leading-[1.2] tracking-tight"
                        style={{
                            maskImage,
                            WebkitMaskImage: maskImage,
                            maskSize: "100% 100%",
                            WebkitMaskSize: "100% 100%",
                        }}
                    >
                        {headline}
                    </motion.h2>
                    {subheadline && (
                        <motion.p
                            className="mt-6 md:mt-8 text-lg md:text-xl text-ds-text-secondary max-w-2xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {subheadline}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
}
