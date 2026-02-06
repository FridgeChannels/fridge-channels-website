 "use client";

import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "motion/react";
import {
  HoverSlider,
  HoverSliderImageWrap,
  TextStaggerHover,
  useHoverSliderContext,
  clipPathVariants,
} from "@/components/ui/animated-slideshow";
import type { PlanData } from "@/components/most-popular-plans-section-chains-franchises";

interface HeroMetric {
  label: string;
  value: string;
}

interface MomentItem {
  title: string;
  description: string;
}

interface StepItem {
  step: string;
  title: string;
  description: string;
}

interface PilotBenefit {
  label: string;
}

interface PricingFitItem {
  label: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const dtcAssistantPlans: PlanData[] = [
  {
    id: "what-it-is",
    title: "What it is",
    bestFor: "Branded magnet sent with each order. Lives on the fridge.",
    cohort: "",
    primaryCta: "",
    distributionOwner: "",
    pilotSizeDuration: "",
    primaryKpi: "",
    observability: [],
    includes: "",
    launchReadiness: "",
    buttonText: "",
    // Dev team can wire a real handler if needed
    onButtonClick: () => {},
  },
  {
    id: "how-people-use-it",
    title: "How people use it",
    bestFor:
      "Pass the fridge. Tap with phone. Get styling tips, product care, new arrivals, or chat with AI.",
    cohort: "",
    primaryCta: "",
    distributionOwner: "",
    pilotSizeDuration: "",
    primaryKpi: "",
    observability: [],
    includes: "",
    launchReadiness: "",
    onButtonClick: () => {},
    buttonText: "",
  },
  {
    id: "what-it-drives",
    title: "What it drives",
    bestFor:
      "One action per tap. Listen. Ask AI. Browse picks. Redeem offer.",
    cohort: "",
    primaryCta: "",
    distributionOwner: "",
    pilotSizeDuration: "",
    primaryKpi: "",
    observability: [],
    includes: "",
    launchReadiness: "",
    onButtonClick: () => {},
    buttonText: "",
  },
  {
    id: "how-you-measure",
    title: "How you measure",
    bestFor:
      "Every tap, conversation, click, purchase tracked. See what drives engagement and converts.",
    cohort: "",
    primaryCta: "",
    distributionOwner: "",
    pilotSizeDuration: "",
    primaryKpi: "",
    observability: [],
    includes: "",
    launchReadiness: "",
    onButtonClick: () => {},
    buttonText: "",
  },
];

interface DtcAssistantCardProps {
  plan: PlanData;
  index: number;
}

const DtcAssistantCard: React.FC<DtcAssistantCardProps> = ({ plan, index }) => {
  const { activeSlide } = useHoverSliderContext();
  const isActive = activeSlide === index;

  return (
    <motion.div
      className="rounded-[20px] overflow-hidden flex flex-col relative min-h-[260px] w-full bg-white border border-black/5 shadow-md"
      style={{ transformStyle: "preserve-3d" }}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      variants={clipPathVariants}
      animate={isActive ? "visible" : "hidden"}
    >
      <div className="relative flex flex-col h-full p-6 sm:p-8 z-10 space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          {plan.title}
        </h3>
        <p className="text-sm md:text-base text-gray-700">{plan.bestFor}</p>
      </div>
    </motion.div>
  );
};

const heroMetrics: HeroMetric[] = [
  { label: "Times seen / month", value: "5–20" },
  { label: "Taps / month", value: "12" },
  { label: "Avg. engagement", value: "20 sec–2 min" },
  { label: "Repeat purchase rate", value: "2.3x" },
];

const momentItems: MomentItem[] = [
  {
    title: "Morning coffee",
    description:
      "Tap for outfit inspiration or product pairing (tracks: taps, listen time).",
  },
  {
    title: "Evening wind-down",
    description:
      "Chat with AI about upcoming needs or reorder timing (tracks: conversation length, clicks).",
  },
  {
    title: "Weekend planning",
    description:
      "Browse exclusive drops or redeem fridge-only offers (tracks: store visits, conversion).",
  },
];

const howItWorksSteps: StepItem[] = [
  {
    step: "Step 1 — Deploy",
    title: "Put magnets into your fulfillment flow.",
    description:
      "Each customer gets a branded magnet with their order, plus a simple “tap to connect” instruction.",
  },
  {
    step: "Step 2 — Configure",
    title: "Turn your content into daily touchpoints.",
    description:
      "Your product content, styling guides, and brand voice become bite-sized audio/text. AI assistant is configured for FAQs, recommendations, and reorder conversations.",
  },
  {
    step: "Step 3 — Iterate",
    title: "Every 2 weeks, tune for performance.",
    description:
      "Review tap rates, engagement time, store clicks, and conversion. Adjust content themes, AI responses, and CTA timing.",
  },
];

const pilotBenefits: PilotBenefit[] = [
  { label: "Branded magnet design + production (200 units)" },
  { label: "Content configuration (10–15 pieces)" },
  { label: "AI assistant setup and training" },
  { label: "Real-time engagement dashboard" },
  { label: "3 bi-weekly review sessions" },
  { label: "Post-pilot recommendation report" },
];

const pricingFor: PricingFitItem[] = [
  { label: "DTC brands with 500+ monthly orders" },
  { label: "Existing content to repurpose" },
  { label: "Ready to test 6 weeks and review data" },
];

const pricingNotFor: PricingFitItem[] = [
  { label: "No product-market fit yet" },
  { label: "Expecting guaranteed ROI without iteration" },
  { label: "Uncomfortable with AI customer conversations" },
];

const faqItems: FaqItem[] = [
  {
    question: "Will customers tap HomeLoop Assistant daily?",
    answer:
      "Not daily for all. But 2–3 taps/week beats email (20% open rate). Customers who tap 8+ times in the first 2 weeks tend to develop a checking habit.",
  },
  {
    question: "Does AI handle customer service?",
    answer:
      "Common questions and order status, yes. Complex issues escalate to your team. Handoff is configured during setup.",
  },
  {
    question: "What content performs best?",
    answer:
      "Short audio styling tips (30–60 sec) and AI-generated personalized recommendations from purchase history. You’ll test variants during the pilot.",
  },
  {
    question: "Does it feel like spam?",
    answer:
      "Customers control when they tap. There are no push notifications. Content is opt-in by behavior, and you can set interaction pacing if needed.",
  },
  {
    question: "Can we A/B test?",
    answer:
      "Yes. The pilot includes configuration flexibility. You can test content themes, CTA timing, and offer structures.",
  },
  {
    question: "What happens after the pilot?",
    answer:
      "You get a detailed report with recommendations: continue, scale, adjust, or pause. There’s no long-term commitment required.",
  },
  {
    question: "What technical integration is needed?",
    answer:
      "Minimal. You track clicks to your store and pass UTM parameters for attribution. Purchases can be matched via email or by integrating Shopify/WooCommerce for closed-loop reporting.",
  },
];

export default function DTBrandsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section
          id="dtc-hero"
          className="container mx-auto px-4 pt-32 pb-16 lg:pt-40"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                For DTC brands
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance text-[#171717]">
                HomeLoop Assistant
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                An AI-powered magnet on your customer&apos;s fridge. Turns daily
                moments into purchase habits. One-time buyers become repeat
                customers.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 mt-4">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-gray-200 bg-white/70 px-4 py-3 shadow-sm flex flex-col gap-1"
                  >
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {metric.label}
                    </span>
                    <span className="text-base md:text-lg font-semibold text-gray-900">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F4] transition-colors cursor-pointer"
                >
                  Book a Demo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-sm rounded-3xl bg-white shadow-xl border border-black/5 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-[#FFEDD5] via-[#F97316]/40 to-[#FED7AA] flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-800 px-6 text-center">
                    Branded AI-powered magnet on the fridge door, always within
                    reach of your customer&apos;s daily routines.
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Weekly taps
                      </p>
                      <p className="text-xl font-semibold text-gray-900">
                        32
                        <span className="ml-1 text-xs font-normal text-emerald-600">
                          +68%
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Repeat purchase rate
                      </p>
                      <p className="text-xl font-semibold text-gray-900">
                        2.3x
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3 space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Today&apos;s moment
                    </p>
                    <p className="text-sm text-gray-800">
                      “Grab a coffee? Tap for a 30-second styling tip using
                      what&apos;s already in your closet.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Gap */}
        <section className="bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                  One-time buyer → Repeat customer
                </h2>
                <p className="text-sm md:text-base font-medium text-gray-800">
                  Why it&apos;s stuck:
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F9F7F3] px-5 py-6 md:px-8 md:py-8 space-y-4">
                <p className="text-sm md:text-base text-gray-900">
                  <span className="font-semibold">
                    Attention disappears after unboxing.
                  </span>{" "}
                  Product goes in the closet. Customer forgets to reorder.
                </p>
                <p className="text-sm md:text-base text-gray-900">
                  <span className="font-semibold">Email/SMS fatigue.</span>{" "}
                  Messages get ignored. Top-of-mind dies.
                </p>
                <p className="text-sm md:text-base text-gray-900">
                  <span className="font-semibold">No daily touchpoint.</span>{" "}
                  No relationship between purchases.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 md:px-6 md:py-5">
                <p className="text-sm md:text-base text-amber-900">
                  <span className="font-semibold">What it&apos;s worth:</span>{" "}
                  Repeat customers = 2–3x LTV.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HomeLoop Assistant definition */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                HomeLoop Assistant
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Not software. Not ads. Not loyalty programs. A physical AI
                touchpoint in your customer&apos;s home.
              </p>
            </div>

            <HoverSlider className="min-h-[600px] place-content-center p-6 md:px-12 bg-[#F7F7F4] text-[#3d3929]">
              <h3 className="mb-6 text-[#c96442] text-xs font-medium capitalize tracking-wide">
                / our plans
              </h3>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-evenly gap-6 md:gap-12">
                <div className="flex flex-col space-y-2 md:space-y-4 w-full md:w-auto">
                  {dtcAssistantPlans.map((plan, index) => {
                    const displayTitle = `${index + 1}. ${plan.title}`;
                    return (
                      <TextStaggerHover
                        key={plan.id}
                        index={index}
                        className="cursor-pointer text-3xl md:text-4xl font-bold tracking-tight"
                        text={displayTitle}
                      />
                    );
                  })}
                </div>
                <HoverSliderImageWrap className="w-full max-w-2xl min-h-[260px] md:min-h-[320px]">
                  {dtcAssistantPlans.map((plan, index) => (
                    <DtcAssistantCard key={plan.id} plan={plan} index={index} />
                  ))}
                </HoverSliderImageWrap>
              </div>
            </HoverSlider>
          </div>
        </section>

        {/* Moments */}
        <section className="bg-[#F3EFE7] border-y border-gray-200">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                  Moments on the fridge door
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  Daily micro-moments that quietly add up to repeat purchases.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {momentItems.map((moment) => (
                  <div
                    key={moment.title}
                    className="rounded-2xl bg-white/80 border border-gray-200 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  >
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                      {moment.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {moment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-3 text-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                How it works
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                A simple three-step loop from first magnet to measurable habit
                lift.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {howItWorksSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot */}
        <section className="bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                  6-week pilot
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  Goal: validate repeat purchase lift in 6 weeks.
                </p>
              </div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900">
                    You get:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-800">
                    {pilotBenefits.map((benefit) => (
                      <li key={benefit.label} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <span>{benefit.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-900 mb-1">
                      Success metric
                    </p>
                    <p className="text-sm text-emerald-900">
                      Baseline repeat purchase rate →{" "}
                      <span className="font-semibold">1.5–2x improvement</span>{" "}
                      in the pilot cohort, measured at 6 weeks from delivery.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Boundary
                    </p>
                    <p className="text-sm text-gray-700">
                      We provide the daily attention loop—the touchpoint
                      mechanism from tap → content → CTA → measurement. We don&apos;t
                      control product quality, pricing, or brand appeal. You own
                      those conversion factors.
                    </p>
                    <p className="text-xs text-gray-600">
                      Data: see Trust Center for what we track and how.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="rounded-3xl border border-gray-200 bg-white px-6 py-6 md:px-8 md:py-8 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  6-week pilot
                </p>
                <p className="mt-1 text-2xl md:text-3xl font-semibold text-gray-900">
                  $4,800
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Includes: magnet design + 200 units, content configuration,
                  AI setup, dashboard, 3 reviews, and a final report.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F4] transition-colors cursor-pointer"
                >
                  Book a Demo
                </a>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm md:text-base font-semibold text-gray-900 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F4] transition-colors cursor-pointer"
                >
                  Start Pilot Application
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  For:
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  {pricingFor.map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Not for:
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  {pricingNotFor.map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="bg-[#F3F1EC] border-y border-gray-200"
        >
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
                  FAQ
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  Common questions DTC teams ask when they consider putting AI
                  on the fridge door.
                </p>
              </div>

              <div className="space-y-3">
                {faqItems.map((item, index) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-gray-200 bg-white px-5 py-4 open:bg-white/90"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm md:text-base font-semibold text-gray-900">
                      <span>{item.question}</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-xs text-gray-600 transition-transform duration-200 group-open:rotate-180">
                        +
                      </span>
                    </summary>
                    <div className="mt-3 text-sm text-gray-700">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto rounded-3xl bg-black text-white px-6 py-10 md:px-10 md:py-12 shadow-xl">
            <div className="space-y-4 md:space-y-5">
              <h2 className="text-2xl md:text-4xl font-semibold text-balance">
                Move DTC customers from one-time buyers to repeat purchasers.
              </h2>
              <p className="text-sm md:text-base text-white/80">
                Validate that daily touchpoints on the fridge increase repeat
                purchase rates. Six weeks, tightly scoped, with measurable
                lift—or clear learnings.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-black shadow-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors cursor-pointer"
                >
                  Book a Demo
                </a>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors cursor-pointer"
                >
                  Start Pilot Application
                </button>
              </div>
              <p className="pt-4 text-xs md:text-sm text-white/70">
                We don&apos;t replace your content strategy, product, or pricing.
                We provide the daily touchpoint mechanism—turning attention into
                measurable action. You bring the brand customers want to return
                to.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

