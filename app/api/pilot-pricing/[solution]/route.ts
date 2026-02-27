import { NextResponse } from 'next/server'
import { supabaseServerClient } from '@/lib/supabase-client'
import {
  fetchPilotPricingConfigWithClient,
  type PilotPricingConfig,
} from '@/lib/pilot-pricing'

type Params = {
  params: Promise<{
    solution: string
  }>
}

export async function GET(_req: Request, { params }: Params) {
  const { solution } = await params
  const solutionSlug = solution?.trim()

  if (!solutionSlug) {
    return NextResponse.json({ error: 'Missing solution slug' }, { status: 400 })
  }

  const supabase = supabaseServerClient()
  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase not configured' },
      { status: 500 },
    )
  }

  const config = await fetchPilotPricingConfigWithClient(supabase, solutionSlug)

  if (!config) {
    return NextResponse.json(
      { error: 'Pricing config not found', config: null as PilotPricingConfig | null },
      { status: 404 },
    )
  }

  return NextResponse.json({
    config,
  })
}

