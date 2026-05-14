/**
 * Next.js standalone 输出默认不包含 public 与 .next/static。
 * 从 .next/standalone 运行 node server.js 时必须复制这两处，否则 CSS、图片等全部 404。
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/output#caveats
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveStandaloneAppDir } from './standalone-app-dir.mjs'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const standalone = path.join(root, '.next', 'standalone')
const appDir = resolveStandaloneAppDir(standalone)
const publicDir = path.join(root, 'public')
const staticDir = path.join(root, '.next', 'static')
const destPublic = path.join(appDir, 'public')
const destStatic = path.join(appDir, '.next', 'static')

if (!fs.existsSync(standalone)) {
  console.warn(
    '[copy-standalone-assets] 跳过：未找到 .next/standalone（未使用 output: standalone 或尚未 build）。',
  )
  process.exit(0)
}

if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, destPublic, { recursive: true })
  console.log(`[copy-standalone-assets] 已复制 public → ${path.relative(root, destPublic)}`)
} else {
  console.warn('[copy-standalone-assets] 未找到 public 目录，跳过')
}

if (fs.existsSync(staticDir)) {
  fs.mkdirSync(path.dirname(destStatic), { recursive: true })
  fs.cpSync(staticDir, destStatic, { recursive: true })
  console.log(
    `[copy-standalone-assets] 已复制 .next/static → ${path.relative(root, destStatic)}`,
  )
} else {
  console.warn('[copy-standalone-assets] 未找到 .next/static，跳过（请先成功执行 next build）')
}
