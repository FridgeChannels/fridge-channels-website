"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
    target?: string;
    "aria-label"?: string;
    title?: string;
}

export const AnimatedButton = ({
    children = "Get Started",
    onClick,
    className,
    href,
    target,
    ...ariaProps
}: AnimatedButtonProps) => {
    const glowRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const onMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            glow.style.transform = `translate(-${50 - (x - 50) / 5}%, -${50 - (y - 50) / 5}%)`;
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <>
            <style>{`
                @keyframes subtlePulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.6; }
                }
            `}</style>

            <div className={cn("relative inline-flex items-center justify-center group", className)}>
                <div
                    ref={glowRef}
                    className="pointer-events-none absolute w-[200%] h-[200%] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-40"
                    style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "transform 150ms ease-out",
                        animation: "subtlePulse 6s ease-in-out infinite",
                    }}
                />

                {href ? (
                    <a
                        href={href}
                        target={target}
                        role="button"
                        className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
                        {...ariaProps}
                    >
                        {children}
                    </a>
                ) : (
                    <button
                        type="button"
                        onClick={onClick}
                        className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
                        {...ariaProps}
                    >
                        {children}
                    </button>
                )}
            </div>
        </>
    );
};
