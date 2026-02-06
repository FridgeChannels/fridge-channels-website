"use client";

import { cn } from "@/lib/utils";

type CellValue = "full" | "partial" | "empty";

const COLUMNS = [
  "Reach-back tool",
  "Seen dozens of times a day",
  "Quiet | Non-intrusive",
  "Physically owned | algorithm-free",
  "Quiet brand presence",
  "Personalized content to habits",
  "Clear CTA → move people to next action",
] as const;

const ROW_DATA: { tool: string; values: CellValue[] }[] = [
  { tool: "Fridge Channel Touchpoint", values: ["empty", "empty", "empty", "empty", "empty", "empty"] },
  { tool: "Email / Newsletter", values: ["full", "empty", "empty", "full", "partial", "empty"] },
  { tool: "SMS", values: ["full", "full", "partial", "full", "full", "empty"] },
  { tool: "Push notifications", values: ["full", "full", "full", "full", "partial", "empty"] },
  { tool: "Social posts (feed)", values: ["full", "empty", "full", "full", "partial", "partial"] },
  { tool: "Social DMs", values: ["full", "full", "full", "full", "full", "empty"] },
  { tool: "Direct mail", values: ["partial", "empty", "empty", "partial", "full", "partial"] },
  { tool: "Phone calls", values: ["full", "full", "partial", "full", "full", "empty"] },
  { tool: "Flyers / coupons", values: ["full", "empty", "partial", "full", "full", "partial"] },
];

function HalfFilledCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0">
      <circle cx="8" cy="8" r="6.5" stroke="#0f172a" strokeWidth="1.5" fill="none" className="dark:stroke-neutral-100" />
      <path d="M8 1.5 A6.5 6.5 0 0 1 8 14.5 L8 8 L8 1.5 Z" fill="#0f172a" className="dark:fill-neutral-100" />
    </svg>
  );
}

function CellIcon({ value }: { value: CellValue }) {
  if (value === "full") {
    return <span className="text-neutral-800 dark:text-neutral-100 font-medium text-lg">✕</span>;
  }
  if (value === "partial") {
    return <HalfFilledCircle />;
  }
  return <span className="text-neutral-800 dark:text-neutral-100 font-medium text-lg">✓</span>;
}

const COL_WIDTHS = ["12%", "15%", "14%", "18%", "15%", "14%", "12%"]; // Reach-back tool | Seen dozens | Quiet | Physically owned | Quiet brand | Personalized | Clear CTA

export function FcVsCurrentToolsTable() {
  return (
    <div className="w-full">
      <table
        className="w-full border-collapse border border-neutral-200 dark:border-neutral-700 text-sm"
        style={{ backgroundColor: "#F7F4F0", tableLayout: "fixed" }}
      >
        <colgroup>
          {COL_WIDTHS.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        <thead>
          <tr className="bg-neutral-200/50 dark:bg-neutral-700/50">
            {COLUMNS.map((col, i) => (
              <th
                key={col}
                className={cn(
                  "border border-neutral-200 dark:border-neutral-700 px-3 py-3 text-left font-semibold text-neutral-800 dark:text-neutral-100 border-b-2 border-b-neutral-300 dark:border-b-neutral-600 break-words",
                  i > 0 && "text-center"
                )}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROW_DATA.map((row, rowIdx) => (
            <tr
              key={row.tool}
              className={rowIdx === 0 ? "[box-shadow:0_6px_20px_rgba(0,0,0,0.1)]" : undefined}
              style={rowIdx === 0 ? { backgroundColor: "#F7F4F0" } : undefined}
            >
              <td className={cn(
                "border border-neutral-200 dark:border-neutral-700 px-3 py-3 text-neutral-800 dark:text-neutral-100 break-words",
                rowIdx === 0 ? "font-bold" : "font-medium"
              )}>
                {row.tool}
              </td>
              {row.values.map((val, i) => (
                <td
                  key={i}
                  className="border border-neutral-200 dark:border-neutral-700 px-3 py-3 text-center"
                >
                  <span className="inline-flex items-center justify-center">
                    <CellIcon value={val} />
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
