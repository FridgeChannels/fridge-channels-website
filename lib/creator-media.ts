import { supabaseServerClient } from './supabase-client'

export type CreatorImageType = 'normal' | 'cover' | null

export interface CreatorImage {
  image_id: string
  front_image_url: string
  type: CreatorImageType
}

export interface CreatorVideo {
  video_id: string
  demo_video_url: string
}

export interface CreatorMediaResult {
  creatorId: string
  coverImage: CreatorImage | null
  normalImages: CreatorImage[]
  video: CreatorVideo | null
}

export async function getCreatorMedia(creatorName: string): Promise<CreatorMediaResult | null> {
  const supabase = supabaseServerClient()

  // If Supabase is not configured, return null to use default content
  if (!supabase) {
    return null
  }

  const { data: creator, error: creatorError } = await supabase
    .from('creator')
    .select('creator_id')
    .eq('handle', creatorName)
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
    .select('image_id, front_image_url, type')
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

  const coverImage = images?.find((image) => image.type === 'cover') ?? null
  const normalImages =
    images?.filter((image) => image.type === 'normal').slice(0, 3) ?? []

  return {
    creatorId: creator.creator_id,
    coverImage,
    normalImages,
    video: video ?? null,
  }
}
