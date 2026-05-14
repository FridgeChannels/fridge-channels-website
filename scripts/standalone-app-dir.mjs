/**
 * Next 可能把 standalone 打在：
 *   .next/standalone/server.js
 * 或
 *   .next/standalone/<子目录>/server.js
 * 静态资源（public、.next/static）必须与 server.js 同一层，否则线上全站 404。
 */
import fs from 'node:fs'
import path from 'node:path'

const SKIP = new Set(['node_modules', 'public', '.next'])

export function resolveStandaloneAppDir(standaloneRoot) {
  const direct = path.join(standaloneRoot, 'server.js')
  if (fs.existsSync(direct)) return standaloneRoot

  if (!fs.existsSync(standaloneRoot)) return standaloneRoot

  for (const name of fs.readdirSync(standaloneRoot)) {
    if (SKIP.has(name)) continue
    const p = path.join(standaloneRoot, name)
    let st
    try {
      st = fs.statSync(p)
    } catch {
      continue
    }
    if (!st.isDirectory()) continue
    if (fs.existsSync(path.join(p, 'server.js'))) return p
  }

  return standaloneRoot
}
