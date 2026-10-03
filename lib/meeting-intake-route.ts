import { NextResponse } from 'next/server'
import { handleMeetingIntakeRequest } from '@/meeting-intake/server/routes'

type NodeLikeRequest = {
  method: string
  headers: Record<string, string>
  socket: { remoteAddress: string }
  [Symbol.asyncIterator](): AsyncGenerator<Buffer>
}

function requestHeaders(request: Request) {
  return Object.fromEntries(request.headers.entries())
}

/**
 * Reuses the portable meeting-intake handler in Next.js route handlers without
 * exposing the form or Notion credentials to the browser.
 */
export async function handleNextMeetingIntakeRequest(request: Request) {
  const rawBody = request.method === 'GET' || request.method === 'HEAD'
    ? ''
    : await request.text()
  const headers = requestHeaders(request)
  const nodeRequest: NodeLikeRequest = {
    method: request.method,
    headers,
    socket: { remoteAddress: headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown' },
    async *[Symbol.asyncIterator]() {
      if (rawBody) yield Buffer.from(rawBody)
    },
  }

  const responseHeaders = new Headers()
  let status = 200
  let responseBody = ''
  const nodeResponse = {
    setHeader(name: string, value: string) {
      responseHeaders.set(name, value)
    },
    writeHead(nextStatus: number, nextHeaders?: Record<string, string>) {
      status = nextStatus
      for (const [name, value] of Object.entries(nextHeaders || {})) {
        responseHeaders.set(name, value)
      }
    },
    end(body = '') {
      responseBody = String(body)
    },
  }

  const handled = await handleMeetingIntakeRequest(
    nodeRequest,
    nodeResponse,
    new URL(request.url),
  )
  if (!handled) return NextResponse.json({ error: 'Not found.' }, { status: 404 })

  return new NextResponse(responseBody, { status, headers: responseHeaders })
}
