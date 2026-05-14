import { NextRequest, NextResponse } from 'next/server'
import { supabaseServerClient } from '@/lib/supabase-client'

const ITEMS_PER_PAGE = 10

type ShopCreatorRow = {
  id: string
  name: string
  avatar_url: string | null
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1', 10) || 1

  const supabase = supabaseServerClient()

  if (!supabase) {
    return NextResponse.json({
      tasks: [],
      total: 0,
      page: 1,
      totalPages: 0,
    })
  }

  const from = (page - 1) * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE - 1

  // Get total count
  const { count, error: countError } = await supabase
    .from('shop_creator')
    .select('*', { count: 'exact', head: true })

  if (countError) {
    console.error('Error counting creators from Supabase', countError)
  }

  const total = count || 0
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  // Get paginated data
  const { data, error } = await supabase
    .from('shop_creator')
    .select('id, name, avatar_url')
    .order('created_at', { ascending: true })
    .range(from, to)

  if (error) {
    console.error('Error loading creators from Supabase', error)
    return NextResponse.json({
      tasks: [],
      total,
      page,
      totalPages,
    })
  }

  // Map to task format
  const mapCreatorToTask = (row: ShopCreatorRow) => {
    const logoSource = row.name
    const logoInitial = logoSource.charAt(0).toUpperCase() || '?'

    return {
      id: row.id,
      logo: logoInitial,
      logoImageUrl: row.avatar_url || null,
      creatorName: row.name,
      newsletterName: '—',
      websiteUrl: '#',
    }
  }

  const tasks = (data as ShopCreatorRow[]).map(mapCreatorToTask)

  return NextResponse.json({
    tasks,
    total,
    page,
    totalPages,
  })
}


