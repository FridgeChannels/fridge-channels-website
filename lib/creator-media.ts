import { supabaseServerClient } from './supabase-client'

export interface CreatorImage {
  image_id: string
  front_image_url: string
}

export interface CreatorVideo {
  video_id: string
  demo_video_url: string
}

export interface CreatorMediaResult {
  creatorId: string
  images: CreatorImage[]
  video: CreatorVideo | null
}

export async function getCreatorMedia(creatorName: string): Promise<CreatorMediaResult | null> {
  const supabase = supabaseServerClient()

  const { data: creator, error: creatorError } = await supabase
    .from('creator')
    .select('creator_id')
    .eq('creator_name', creatorName)
    .maybeSingle()

  if (creatorError) {
    console.error('Failed to fetch creator', creatorError)
    throw new Error('Failed to load creator data')
  }

  if (!creator) {
    return null
  }

  const { data: images, error: imagesError } = await supabase
    .from('magnet_image')
    .select('image_id, front_image_url')
    .eq('creator_id', creator.creator_id)
    .order('created_at', { ascending: false })

  if (imagesError) {
    console.error('Failed to fetch creator images', imagesError)
    throw new Error('Failed to load creator images')
  }

  const { data: video, error: videoError } = await supabase
    .from('magnet_video')
    .select('video_id, demo_video_url')
    .eq('creator_id', creator.creator_id)
    .maybeSingle()

  if (videoError) {
    console.error('Failed to fetch creator video', videoError)
    throw new Error('Failed to load creator video')
  }

  return {
    creatorId: creator.creator_id,
    images: images ?? [],
    video: video ?? null,
  }
}
