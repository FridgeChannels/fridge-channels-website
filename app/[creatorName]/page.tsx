import { LandingPageContent } from "@/components/landing-page-content"
import { getCreatorMedia } from "@/lib/creator-media"
export const revalidate = 0
export const dynamic = "force-dynamic"

interface CreatorPageProps {
  params: Promise<{
    creatorName: string
  }>
}

export default async function CreatorPage({ params }: CreatorPageProps) {
  const { creatorName: rawCreatorName } = await params
  const creatorName = decodeURIComponent(rawCreatorName)
  const media = await getCreatorMedia(creatorName)

  if (!media) {
    return <LandingPageContent creatorName={creatorName} />
  }

  const heroVideoUrl = media.video?.demo_video_url ?? null
  const imageUrls = media.images?.map((image) => image.front_image_url).filter(Boolean) ?? []

  return (
    <LandingPageContent
      heroVideoUrl={heroVideoUrl}
      imageUrls={imageUrls}
      creatorName={creatorName}
    />
  )
}
