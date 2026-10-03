import { handleNextMeetingIntakeRequest } from '@/lib/meeting-intake-route'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  return handleNextMeetingIntakeRequest(request)
}
