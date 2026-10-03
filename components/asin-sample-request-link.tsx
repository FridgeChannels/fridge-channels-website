'use client'

import { useEffect, useState } from 'react'

const ASIN_SAMPLE_REQUEST_PATH = '/asin-plus/request-sample'

function requestUrl() {
  const params = new URLSearchParams(window.location.search)
  const magnetSn = params.get('sn') || params.get('id')
  return magnetSn
    ? `${ASIN_SAMPLE_REQUEST_PATH}?sn=${encodeURIComponent(magnetSn)}`
    : ASIN_SAMPLE_REQUEST_PATH
}

export function AsinSampleRequestLink({ children, className }: {
  children: React.ReactNode
  className: string
}) {
  const [href, setHref] = useState(ASIN_SAMPLE_REQUEST_PATH)

  useEffect(() => setHref(requestUrl()), [])

  return (
    <a className={className} href={href} onClick={() => window.location.assign(href)}>
      {children}
    </a>
  )
}
