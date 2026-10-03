import Link from 'next/link'
import { AmazonMeetingForm } from '@/meeting-intake/client/AmazonMeetingForm'

export default function AsinSampleRequestPage() {
  return (
    <main className="asin-intake-page">
      <Link aria-label="Back to ASIN+" className="asin-back" href="/asin-plus">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
      <AmazonMeetingForm />
    </main>
  )
}
