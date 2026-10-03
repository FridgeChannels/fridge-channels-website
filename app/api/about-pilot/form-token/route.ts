import { handleNextMeetingIntakeRequest } from '@/lib/meeting-intake-route'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  return handleNextMeetingIntakeRequest(request)
}
