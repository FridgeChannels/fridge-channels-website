const FALLBACK_STUDIO_URL = "http://localhost:3000";

export const STUDIO_BASE_URL =
  process.env.NEXT_PUBLIC_FC_STUDIO_URL ||
  process.env.FC_STUDIO_URL ||
  FALLBACK_STUDIO_URL;

export function buildCheckoutUrl(solution: string, quantity: number) {
  const safeQuantity = Number.isFinite(quantity) && quantity > 0 ? quantity : 0;
  const safeSolution = solution || "unknown";

  const url = new URL(
    "/onboarding/checkout",
    STUDIO_BASE_URL.endsWith("/")
      ? STUDIO_BASE_URL
      : `${STUDIO_BASE_URL}/`,
  );

  url.searchParams.set("solution", safeSolution);
  url.searchParams.set("quantity", String(safeQuantity));

  return url.toString();
}

