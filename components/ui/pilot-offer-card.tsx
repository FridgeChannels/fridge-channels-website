"use client";

import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const UNIT_STEP = 100;
const MIN_MULTIPLIER = 1;
const DEFAULT_PRICE = 2499;

export interface PilotOfferCardProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  price?: number;
  unitStep?: number;
  defaultMultiplier?: number;
  goal?: string;
  hardwareItems?: string[];
  softwareItems?: string[];
  afterDay30Items?: string[];
  pilotOpsNote?: string;
  buttonText?: string;
  onCheckout?: (units: number) => void;
  footerNote?: string;
  className?: string;
}

const DEFAULT_GOAL =
  "Validate membership renewal and donation frequency lift in 30 days.";

const DEFAULT_HARDWARE_ITEMS = [
  "100 Custom Smart Magnets (Yours to keep)",
  "Custom Magnet Design",
  "NFC Enabled",
];

const DEFAULT_SOFTWARE_ITEMS = ["Unlimited AI Credits"];

const DEFAULT_AFTER_DAY_30 = [
  "Premium AI Features: Billed by usage",
  "Real-time Dashboard (views, taps, actions)",
  "Content Setup (4-6 pieces) & Custom CTA URL",
  "Pilot Ops: Bi-weekly reviews & recommendations",
];

const DEFAULT_PILOT_OPS_NOTE =
  "Pilot Ops refers to optimization and iteration support during the 30-day sprint. After Day 30, standard magnet functionality remains active at no extra cost, while AI features transition to a flexible pay-as-you-go model. All plans include standard shipping.";

const DEFAULT_FOOTER = "";

export function PilotOfferCard({
  title = "Choose Your Quantity",
  subtitle = "Select the quantity of smart magnets for your team.",
  showBack = true,
  onBack,
  price = DEFAULT_PRICE,
  unitStep = UNIT_STEP,
  defaultMultiplier = MIN_MULTIPLIER,
  goal = DEFAULT_GOAL,
  hardwareItems = DEFAULT_HARDWARE_ITEMS,
  softwareItems = DEFAULT_SOFTWARE_ITEMS,
  afterDay30Items = DEFAULT_AFTER_DAY_30,
  pilotOpsNote = DEFAULT_PILOT_OPS_NOTE,
  buttonText = "Book  a 30-Day Pilot",
  onCheckout,
  footerNote = DEFAULT_FOOTER,
  className,
}: PilotOfferCardProps) {
  const [multiplier, setMultiplier] = useState(defaultMultiplier);
  const units = multiplier * unitStep;

  // 把传入的 price 视为「默认数量（defaultMultiplier × unitStep）」对应的总价，
  // 当用户调整数量时，按每 unit 单价线性放大/缩小总价。
  const baseUnits = unitStep * defaultMultiplier;
  const pricePerUnit = baseUnits > 0 ? price / baseUnits : 0;
  const totalPrice = Math.round(pricePerUnit * units);

  const hardwareItemsResolved = hardwareItems.map((item, i) =>
    i === 0 ? item.replace(/^\d+/, units.toLocaleString()) : item,
  );

  const handleMultiplierChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const valStr = e.target.value;
    if (valStr === "") {
      setMultiplier(0);
      return;
    }
    const v = parseInt(valStr, 10);
    if (!Number.isFinite(v)) return;
    setMultiplier(Math.max(0, v));
  };

  const handleBlur = () => {
    if (multiplier < MIN_MULTIPLIER) {
      setMultiplier(MIN_MULTIPLIER);
    }
  };

  const isValid = multiplier >= MIN_MULTIPLIER && Number.isInteger(multiplier);

  return (
    <div className={cn("w-full max-w-6xl mx-auto", className)}>
      <div className="mb-6">
        {showBack && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-2 text-slate-500 pl-0 hover:pl-0 hover:text-slate-900 hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500">{subtitle}</p>
        </div>
      </div>

      <Card className="overflow-hidden shadow-lg border-slate-200 py-0">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10 bg-white">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-slate-900">
                  ${(totalPrice || 0).toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500">one-time payment</p>

              <div className="mt-6 space-y-2 pt-4 border-t border-slate-100">
                <label className="text-sm font-medium text-slate-700 block">
                  Custom quantity
                </label>
                <div className="flex items-center gap-3 flex-wrap">
                  <Input
                    type="number"
                    value={multiplier === 0 ? "" : multiplier}
                    min={MIN_MULTIPLIER}
                    step={1}
                    onChange={handleMultiplierChange}
                    onBlur={handleBlur}
                    className="w-24 h-14 text-center text-2xl font-bold border-2 border-slate-300 focus:border-[#C2A36B] focus:ring-[#C2A36B]"
                  />
                  <span className="text-slate-500 whitespace-nowrap">
                    × {unitStep.toLocaleString()} ={" "}
                    <span className="font-bold text-slate-900">
                      {units.toLocaleString()} units
                    </span>
                  </span>
                </div>
                {!isValid && multiplier > 0 && (
                  <p className="text-xs text-red-600">
                    Please enter an integer ≥ {MIN_MULTIPLIER}
                  </p>
                )}
              </div>
            </div>

            <Button
              className="w-full mt-8 bg-[#C2A36B] hover:bg-[#C2A36B]/90 text-white h-12 text-base font-semibold rounded-lg"
              size="lg"
              disabled={!isValid}
              onClick={() => isValid && onCheckout?.(units)}
            >
              {buttonText}
            </Button>
          </div>

          <div className="flex-1 p-6 lg:p-10 bg-slate-50/80 border-t lg:border-t-0 lg:border-l border-slate-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  GOAL
                </h3>
                <p className="text-slate-700">{goal}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  HARDWARE & SETUP
                </h3>
                <ul className="space-y-2">
                  {hardwareItemsResolved.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#C2A36B] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  SOFTWARE & SERVICE
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mt-2">
                  {softwareItems.map((item, i) => {
                    const isUnlimitedAI = item.includes("Unlimited AI");
                    return (
                      <li
                        key={i}
                        className={cn(
                          "flex items-center gap-2",
                          isUnlimitedAI
                            ? "relative p-3 bg-[#C2A36B]/10 rounded-lg border border-[#C2A36B]/30"
                            : "",
                        )}
                      >
                        <Check className="h-4 w-4 text-[#C2A36B] shrink-0" />
                        <span
                          className={cn(
                            "text-sm",
                            isUnlimitedAI
                              ? "text-slate-900 font-bold"
                              : "text-slate-700",
                          )}
                        >
                          {item}
                        </span>
                        {isUnlimitedAI && (
                          <span className="absolute -top-3 -right-2 px-2.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black rounded-full shadow-sm border border-white uppercase tracking-wider z-10">
                            30-Day Pilot
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  {afterDay30Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#C2A36B] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-4 border-t border-slate-200">
                {pilotOpsNote}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {footerNote ? (
        <p className="text-center text-xs text-slate-400 mt-6">{footerNote}</p>
      ) : null}
    </div>
  );
}

