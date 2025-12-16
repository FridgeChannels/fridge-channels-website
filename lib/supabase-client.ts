import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabaseServerClient = () => {
  if (!supabaseUrl || !serviceRoleKey) {
    console.warn('Supabase credentials not configured. Creator media features will be disabled.')
    return null
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  })
}
