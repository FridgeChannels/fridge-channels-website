"use client";

import { ScrollRevealCard } from "@/components/ui/scroll-reveal-card";

interface CoreMetricCardProps {
  letter: string;
  title: string;
  description: string;
  delay?: number;
}

// Helper function to render text with bold formatting
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

const CoreMetricCard: React.FC<CoreMetricCardProps> = ({ letter, title, description, delay = 0 }) => {
  // Remove the first letter from title since it's already shown in the icon
  const titleWithoutFirstLetter = title.slice(1);
  
  return (
    <ScrollRevealCard delay={delay} className="h-full">
      <div className="group h-full flex flex-col space-y-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
        <div className="flex items-center gap-3">
          <div className="text-3xl md:text-4xl font-medium text-white font-mono">
            {letter}
          </div>
          <h4 className="text-xl md:text-2xl font-medium text-white">
            {titleWithoutFirstLetter}
          </h4>
        </div>
        <p className="text-white/90 leading-relaxed text-base [&_strong]:font-semibold [&_strong]:text-white">
          {renderFormattedText(description)}
        </p>
      </div>
    </ScrollRevealCard>
  );
};

export function CoreMetricsSection() {
  const coreMetrics = [
    {
      letter: "C",
      title: "Channel Owned",
      description: "Turn the fridge door into an offline channel you actually control. Your NFC magnet becomes the default, data-driven entry point into your world at the fridge — no feeds, no algorithms.",
      delay: 0,
    },
    {
      letter: "O",
      title: "Open Rate",
      description: "AI-crafted, 30–120 second fridge-time teasers explain \"why this issue matters now\" and lead naturally to **Open** full issue, creating more chances For creator your work to be read.",
      delay: 1,
    },
    {
      letter: "R",
      title: "Retention",
      description: "Light, context-aware nudges at real fridge moments keep your newsletter visibly \"in use\" during daily life, reducing the quiet \"I never open this… why am I still paying?\" churn.",
      delay: 2,
    },
    {
      letter: "E",
      title: "Earnings per subscriber",
      description: "Only existing paying readers can subscribe to the FC magnet as an add-on. These \"I believe in this, just give me faster access and reminders\" fans pay extra for Fridge Channel Magnet, becoming your highest-signal, higher-ARPU tier on top of the base subscription.",
      delay: 3,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Introduction - styled like untillabs */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
          Building metrics that matter.
        </h3>
        <div className="space-y-4 text-base text-white leading-relaxed [&_strong]:font-semibold">
          <p>
            Fridge Channel is building the most detailed dataset in the world about <strong>how people behave around their fridge</strong>.
          </p>
          <p>
            Using this fridge-time data, our AI turns each paid issue into <strong>scenario-aware, guided teasers</strong> — short prompts at the right moments that pull readers back into your full newsletter.
          </p>
          <p>
            We focus on the four metrics that matter most for paid newsletters:
          </p>
        </div>
      </div>

      {/* Core Metrics Cards */}
      <div className="grid md:grid-cols-2 gap-8 pt-8">
        {coreMetrics.map((metric, index) => (
          <CoreMetricCard
            key={index}
            letter={metric.letter}
            title={metric.title}
            description={metric.description}
            delay={metric.delay}
          />
        ))}
      </div>
    </div>
  );
}

