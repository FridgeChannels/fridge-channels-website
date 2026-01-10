"use client";

import { MostPopularPlansCarouselSection, type MostPopularPlan } from "@/components/most-popular-plans-carousel-section";

// Using mockData; dev team will replace with real API hook useFetchPlans()
interface PlanData {
  id: string; // from API
  title: string; // from API
  bestFor: string; // from API
  cohort: string; // from API
  primaryCta: string; // from API
  pilotSizeDuration: string; // from API
  primaryKpi: string; // from API
  observability: string[]; // from API
  includes: string; // from API
  buttonText: string; // from API
  onButtonClick: () => void; // wired by dev team
}

const mockPlans: PlanData[] = [
  {
    id: "monthly-giving-lift",
    title: "Monthly Giving Lift Plan",
    bestFor: "Converting engaged alumni and one-time donors into recurring monthly givers.",
    cohort: "Engaged alumni · one-time donors · lapsed donors (recent)",
    primaryCta: "Start a monthly gift",
    pilotSizeDuration: "5k–10k households · 4–6 weeks",
    primaryKpi: "Monthly donor starts (confirmed)",
    observability: [
      "Track: tap → landing page visits",
      "Track: CTA clicks → monthly-gift start (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes: "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Get a mock for this plan",
    onButtonClick: () => {
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
    },
  },
  {
    id: "annual-fund-renewal",
    title: "Annual Fund Renewal Push Plan",
    bestFor: "Improving annual fund renewal by keeping \"give again this year\" visible at home.",
    cohort: "Prior-year donors · annual fund prospects · broad alumni (as appropriate)",
    primaryCta: "Make an annual fund gift",
    pilotSizeDuration: "5k–10k households · 10–20 weeks",
    primaryKpi: "Gift completions",
    observability: [
      "Track: tap → giving page visits",
      "Track: CTA clicks → donation completion (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes: "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Get a mock for this plan",
    onButtonClick: () => {
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
    },
  },
  {
    id: "donor-stewardship-retention",
    title: "Donor Stewardship & Retention Plan",
    bestFor: "Strengthening donor retention through stewardship touchpoints that reinforce impact and prompt upgrades.",
    cohort: "Current donors · recurring donors · leadership annual donors (broad)",
    primaryCta: "View impact update → upgrade gift / start monthly",
    pilotSizeDuration: "5k–10k households · 6–12 weeks",
    primaryKpi: "Upgrade + monthly starts (aggregate)",
    observability: [
      "Track: tap → impact page visits",
      "Track: CTA clicks → upgrade/monthly start (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes: "content routing (impact + CTA) · production + replacement policy · aggregated measurement summary",
    buttonText: "Get a mock for this plan",
    onButtonClick: () => {
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
    },
  },
];

export function MostPopularPlansSection() {
  const plans: MostPopularPlan[] = mockPlans.map((p) => ({
    id: p.id,
    title: p.title,
    bestFor: p.bestFor,
    cohort: p.cohort,
    primaryCta: p.primaryCta,
    pilotSizeDuration: p.pilotSizeDuration,
    primaryKpi: p.primaryKpi,
    observability: p.observability,
    includes: p.includes,
    buttonText: p.buttonText,
    onButtonClick: p.onButtonClick,
  }));

  return <MostPopularPlansCarouselSection plans={plans} activeCardColor="#5E718F" />;
}
