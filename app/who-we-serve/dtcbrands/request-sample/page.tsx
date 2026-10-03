import Link from 'next/link'
import { DtcMeetingForm } from '@/meeting-intake/client/DtcMeetingForm'

export default function DtcSampleRequestPage() {
  return (
    <main className="fc-intake-page">
      <section className="fc-intake footer-slide">
        <div className="wrap">
          <Link
            aria-label="Back to DTC brands"
            className="fc-back"
            href="/who-we-serve/dtcbrands"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <DtcMeetingForm />
        </div>
      </section>
    </main>
  )
}
