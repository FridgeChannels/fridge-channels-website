import type { SupabaseClient } from '@supabase/supabase-js'

export interface PilotPricingConfig {
  price: number
  unitStep: number
  defaultMultiplier: number
}

export const FALLBACK_UNIT_STEP = 100
export const FALLBACK_MULTIPLIER = 1

export async function fetchPilotPricingConfigWithClient(
  supabase: SupabaseClient,
  solutionSlug: string,
): Promise<PilotPricingConfig | null> {
  const safeSlug = solutionSlug.trim()
  if (!safeSlug) return null

  try {
    // 1) 行业方案：industry_solution，按 studio_entry_route 匹配 URL 中的 solution slug
    const { data: solutions, error: solutionError } = await supabase
      .from('industry_solution')
      .select('id')
      .eq('studio_entry_route', safeSlug)
      .limit(1)

    if (solutionError || !solutions || solutions.length === 0) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          '[pilot-pricing] inventory_solution not found for slug',
          safeSlug,
          solutionError,
        )
      }
      return null
    }

    const solutionId = solutions[0]?.id as number | null
    if (!solutionId) return null

    // 2) 方案：magnet_pricing_plan，按 industry_solution_id + is_active
    const { data: plans, error: planError } = await supabase
      .from('magnet_pricing_plan')
      .select('id, fixed_quantity, min_quantity, quantity_step')
      .eq('industry_solution_id', solutionId)
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .limit(1)

    if (planError || !plans || plans.length === 0) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          '[pilot-pricing] magnet_pricing_plan not found for solution',
          solutionId,
          planError,
        )
      }
      return null
    }

    const plan = plans[0] as {
      id: number
      fixed_quantity: number | null
      min_quantity: number | null
      quantity_step: number | null
    }

    const unitStep =
      (plan.quantity_step && plan.quantity_step > 0
        ? plan.quantity_step
        : FALLBACK_UNIT_STEP) ?? FALLBACK_UNIT_STEP

    const baseQuantity =
      plan.fixed_quantity && plan.fixed_quantity > 0
        ? plan.fixed_quantity
        : plan.min_quantity && plan.min_quantity > 0
          ? plan.min_quantity
          : unitStep

    // 3) 阶梯单价：magnet_pricing_tier，按 plan_id + is_active
    const { data: tiers, error: tierError } = await supabase
      .from('magnet_pricing_tier')
      .select('min_quantity, unit_price_cents')
      .eq('plan_id', plan.id)
      .eq('is_active', true)
      .order('min_quantity', { ascending: true })

    if (tierError || !tiers || tiers.length === 0) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          '[pilot-pricing] magnet_pricing_tier not found for plan',
          plan.id,
          tierError,
        )
      }
      return null
    }

    type Tier = { min_quantity: number | null; unit_price_cents: number | null }
    const activeTiers = tiers as Tier[]

    // 找到 <= baseQuantity 的最佳阶梯，否则用最小阶梯
    let matchedTier: Tier | undefined = activeTiers.find(
      (tier) =>
        tier.min_quantity !== null &&
        tier.min_quantity !== undefined &&
        tier.min_quantity <= baseQuantity,
    )

    if (!matchedTier) {
      matchedTier = activeTiers[0]
    }

    const unitPriceCents =
      matchedTier.unit_price_cents && matchedTier.unit_price_cents > 0
        ? matchedTier.unit_price_cents
        : 0

    if (!unitPriceCents) {
      return null
    }

    const basePrice = (unitPriceCents * baseQuantity) / 100

    const defaultMultiplier =
      baseQuantity > 0 ? Math.max(FALLBACK_MULTIPLIER, Math.round(baseQuantity / unitStep)) : FALLBACK_MULTIPLIER

    return {
      price: Math.round(basePrice),
      unitStep,
      defaultMultiplier,
    }
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[pilot-pricing] Failed to fetch pricing config', err)
    }
    return null
  }
}

