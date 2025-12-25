"use client";

import Link from "next/link";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface HowItWorksTimelineProps {
  coverImageSrc?: string | null;
}

export function HowItWorksTimeline({ coverImageSrc }: HowItWorksTimelineProps = {}) {
  const data = [
    {
      title: "1. Define a pilot cohort",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We ship AI-powered magnets to a defined user cohort.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Default tracking: <strong className="font-semibold text-foreground">1 magnet = 1 user</strong> in the FC tracking chain.
          </p>
        </div>
      ),
    },
    {
      title: "2. Users generate \"touch evidence\"",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Users scan/tap and consume FridgeChannel value proof previews.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            FC records: <strong className="font-semibold text-foreground">scan / preview events</strong> as touch evidence.
          </p>
        </div>
      ),
    },
    {
      title: "3. We measure incremental outcomes",
      content: (
        <div>
          <ul className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-2 list-disc list-inside">
            <li>
              <strong className="font-semibold text-foreground">Growth (New Paid):</strong> touched user → later becomes paid
            </li>
            <li>
              <strong className="font-semibold text-foreground">Retention (Extended Lifetime):</strong> touched paid user → stays beyond expected renewal cycles
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Monthly invoice with auditable proof",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Two columns + downloadable CSV.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <strong className="font-semibold text-foreground">Every charged item has user-level evidence.</strong>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-muted/30 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">HOW IT WORKS</h2>
      </div>
      <Timeline data={data} />
      
    </div>
  );
}
