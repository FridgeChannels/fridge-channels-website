"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", className = "", children, ...props }, ref) => {
        const base =
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer h-12 px-6 text-[15px] active:scale-[0.98]";
        const variants = {
            primary:
                "bg-ds-primary text-white hover:bg-ds-primary-hover shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
            secondary:
                "border border-ds-border bg-white text-ds-text hover:bg-[#F9FAFB]",
        };
        return (
            <button
                ref={ref}
                className={`${base} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export const HeroSaaS = React.memo(() => {
    return (
        <section
            className="relative min-h-[90vh] flex flex-col items-center justify-start bg-white overflow-hidden font-sans"
            style={{ animation: "heroFadeIn 0.5s ease-out" }}
        >
            <style>{`
                @keyframes heroFadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="flex flex-col items-center w-full max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
                <h1
                    className="text-[32px] md:text-[44px] lg:text-[56px] xl:text-[64px] font-bold text-ds-text text-center max-w-[800px] mx-auto leading-[1.08] tracking-[-0.02em] mb-6"
                >
                    Close Concierge —<br />
                    An at-home assistant for<br />
                    top real estate teams
                </h1>

                <p className="text-base md:text-lg text-center text-ds-body max-w-[680px] leading-[1.65] mb-10">
                    Your assistant on the fridge—the most visible place in the home—keeps serious buyers moving to the next step after they leave the showing.
                </p>

                <div className="flex items-center gap-4 relative z-10 mb-16 md:mb-24">
                    <Link href="https://studio.fridgechannels.com">
                        <Button type="button" variant="primary" className="rounded-xl px-7">
                            Outfit my team with Close Concierge
                        </Button>
                    </Link>
                </div>

                <div className="w-full max-w-5xl relative">
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-ds-primary opacity-[0.06] blur-[80px] rounded-full pointer-events-none"
                        aria-hidden
                    />
                    <div className="relative z-10 p-2 rounded-2xl bg-white border border-ds-border shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_12px_24px_-4px_rgba(0,0,0,0.08)] overflow-hidden h-[400px] w-full">
                        <Image
                            src="/studio_interface.png"
                            alt="Close Concierge Studio Interface"
                            fill
                            className="object-cover object-center rounded-xl"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});

HeroSaaS.displayName = "HeroSaaS";
