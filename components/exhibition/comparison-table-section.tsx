"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const channels = [
  {
    name: "Follow-up after the FC event",
    livesAfter: true,
    quietDaily: true,
    ownedByOrganizer: true,
    canUpdate: true,
    routesToAction: true,
  },
  {
    name: "Email Follow-Up",
    livesAfter: true,
    quietDaily: false,
    ownedByOrganizer: true,
    canUpdate: true,
    routesToAction: true,
  },
  {
    name: "SMS / Push Notifications",
    livesAfter: true,
    quietDaily: false,
    ownedByOrganizer: true,
    canUpdate: true,
    routesToAction: true,
  },
  {
    name: "Event Merchandise",
    livesAfter: false,
    quietDaily: true,
    ownedByOrganizer: true,
    canUpdate: false,
    routesToAction: false,
  },
  {
    name: "Social media posts",
    livesAfter: true,
    quietDaily: false,
    ownedByOrganizer: false,
    canUpdate: true,
    routesToAction: false,
  },
];

const columns = [
  { key: "livesAfter" as const, label: "Post-Event Continuation" },
  { key: "quietDaily" as const, label: "The Calm of Everyday Life" },
  { key: "ownedByOrganizer" as const, label: "Handled by the organizer" },
  { key: "canUpdate" as const, label: "Can be updated over time" },
  { key: "routesToAction" as const, label: "Path to Next Action" },
];

export function ComparisonTableSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-ds-text leading-[1.2] tracking-tight mb-12 md:mb-16">
            FC vs. Standard Post-Event Follow-Up
          </h2>
        </motion.div>

        <motion.div
          className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-ds-border">
                <th className="text-left py-4 pr-4 text-sm font-medium text-ds-text-secondary tracking-wide uppercase" />
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="text-center py-4 px-3 text-xs md:text-sm font-medium text-ds-text-secondary tracking-wide uppercase"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {channels.map((channel, idx) => (
                <tr
                  key={channel.name}
                  className={`border-b border-ds-border/60 transition-colors ${
                    idx === 0
                      ? "bg-[#faf7f2] hover:bg-[#f5f0e8]"
                      : "hover:bg-gray-50/50"
                  }`}
                >
                  <td
                    className={`py-4 pr-4 text-sm md:text-base whitespace-nowrap ${
                      idx === 0 ? "font-semibold text-ds-text" : "text-ds-text-secondary"
                    }`}
                  >
                    {channel.name}
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className="text-center py-4 px-3">
                      {channel[col.key] ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#c2a36b]/15 text-[#c2a36b]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
