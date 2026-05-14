/**
 * 构建后自检：standalone 与 .next/static 必须同时存在，否则生产会出现
 * 「页面能打开但 _next/static、/homepage/* 全部 404」。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveStandaloneAppDir } from './standalone-app-dir.mjs'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const standaloneRoot = path.join(root, '.next', 'standalone')
const appDir = resolveStandaloneAppDir(standaloneRoot)
const serverJs = path.join(appDir, 'server.js')
const bundledChunks = path.join(appDir, '.next', 'static', 'chunks')
const rootChunks = path.join(root, '.next', 'static', 'chunks')

let failed = false

if (!fs.existsSync(serverJs)) {
  console.error(`[verify-standalone-artifacts] 缺少：${serverJs}`)
  failed = true
}

const chunksDir = fs.existsSync(bundledChunks) ? bundledChunks : rootChunks

if (!fs.existsSync(chunksDir)) {
  console.error(
    `[verify-standalone-artifacts] 缺少：${bundledChunks}（postbuild 后应在 server.js 同层）\n` +
      '（没有 chunks 则线上所有 CSS/JS 会 404）',
  )
  failed = true
} else {
  const entries = fs.readdirSync(chunksDir)
  if (entries.length === 0) {
    console.error('[verify-standalone-artifacts] static/chunks 为空')
    failed = true
  }
}

if (failed) {
  console.error(
    '\n请确认 next.config 中 output 为 "standalone"，且 next build 已成功完成。\n',
  )
  process.exit(1)
}

console.log('[verify-standalone-artifacts] standalone 与 .next/static 检查通过')
