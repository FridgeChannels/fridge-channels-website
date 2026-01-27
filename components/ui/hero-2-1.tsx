"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const Hero2 = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative min-h-[900px] overflow-hidden bg-black text-white">
            {/* Gradient background with grain effect */}
            <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 pointer-events-none">
                <div className="h-[20rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-[#c2a36be6] to-gray-900 opacity-60"></div>
                <div className="h-[20rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-gray-800 to-[#c2a36be6] opacity-40"></div>
            </div>

            {/* Noise overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

            {/* Content container */}
            <div className="relative z-10 pt-20">

                {/* Badge */}
                <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
                    <span className="text-sm font-medium text-white">
                        Close Concierge
                    </span>
                    <ArrowRight className="h-4 w-4 text-white" />
                </div>

                {/* Hero section */}
                <div className="container mx-auto mt-12 px-4 text-center">
                    <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl tracking-tight">
                        Close Concierge - <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#faefe4] to-white">An at-home assistant for top real estate teams</span>
                    </h1>
                    <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        Your assistant on the fridge—the most visible place in the home—keeps serious buyers moving to the next step after they leave the showing, and quietly gives your team an edge over other top performers.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="https://studio.fridgechannels.com">
                            <button className="h-14 rounded-full bg-white px-8 text-lg font-bold text-black hover:bg-white/90 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
                                Outfit my team with Close Concierge
                            </button>
                        </Link>
                    </div>

                    <div className="relative mx-auto my-20 w-full max-w-6xl">
                        {/* Glow behind image */}
                        <div className="absolute inset-0 rounded-[3rem] shadow-lg bg-white blur-[8rem] opacity-10 pointer-events-none" />

                        {/* Hero Image */}
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/hero_lifestyle.png"
                                alt="Close Concierge Lifestyle"
                                width={1920}
                                height={1080}
                                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                priority
                            />
                            {/* Gradient overlay on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
