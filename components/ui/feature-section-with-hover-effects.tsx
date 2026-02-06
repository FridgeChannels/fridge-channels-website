"use client";

import { cn } from "@/lib/utils";
import { Home, Shield, MousePointerClick, BarChart3 } from "lucide-react";

const FEATURES = [
  {
    title: "Highest At-Home Exposure",
    description:
      "Seen 10–20+ times every day—on the door people open most. Your next step lives where attention naturally returns.",
    icon: <Home className="size-6" />,
  },
  {
    title: "Owned, Algorithm-Free Channel",
    description:
      "Owned in the home. On the fridge door. Not rented from a feed. Not competing for the scroll.",
    icon: <Shield className="size-6" />,
  },
  {
    title: "One-Tap Next Steps",
    description:
      "Preview first. Then one tap to the next step. Buy. Donate. Book. Subscribe. Return.",
    icon: <MousePointerClick className="size-6" />,
  },
  {
    title: "Measurable Actions",
    description:
      "Built to track—taps, actions, revenue. So you improve what actually converts.",
    icon: <BarChart3 className="size-6" />,
  },
];

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto px-4">
      {FEATURES.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature border-neutral-200 dark:border-neutral-800 cursor-pointer",
        index < 3 && "lg:border-r border-neutral-200 dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
