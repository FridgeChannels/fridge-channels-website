import type { Metadata } from "next";
import AsinPlusLanding from "@/components/pages/asin-plus-landing";

export const metadata: Metadata = {
  title: "ASIN+ | Fridge Channel",
  description: "A persistent, attributable brand entry point in the customer's home.",
};

export default function AsinPlusPage() {
  return <AsinPlusLanding />;
}
