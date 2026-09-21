import type { Metadata } from "next";
import Homepage from "@/components/pages/homepage";

export const metadata: Metadata = {
  title: "Fridge Channel | Turn every delivered order into next purchase",
  description: "Keep your brand present at home and give customers a one-tap path to what comes next.",
};

export default function HomePage() {
  return <Homepage />;
}
