import { createClient } from '@supabase/supabase-js'

// 优先使用只在服务器上的环境变量，其次回退到 NEXT_PUBLIC_*（你当前已配置）
const supabaseUrl =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL

// 服务端优先用 service role / 私有 API key，最后才回退到 anon key
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_API_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabaseServerClient = () => {
  if (!supabaseUrl || !serviceRoleKey) {
    console.warn(
      'Supabase credentials not configured. Creator features depending on Supabase will be disabled.',
    )
    return null
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  })
}
