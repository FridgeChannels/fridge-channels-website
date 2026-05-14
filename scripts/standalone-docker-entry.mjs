/**
 * Docker 镜像内 WORKDIR=/app，内容为 next standalone 整包 COPY。
 * 支持 server.js 在 /app 或 /app/<子目录>/，与本地 run-standalone 行为一致。
 */
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveStandaloneAppDir } from './standalone-app-dir.mjs'

const installRoot = path.dirname(fileURLToPath(import.meta.url))
const appDir = resolveStandaloneAppDir(installRoot)
const serverJs = path.join(appDir, 'server.js')

if (!fs.existsSync(serverJs)) {
  console.error(`[docker-entry] 未找到 ${serverJs}`)
  process.exit(1)
}

const child = spawn(process.execPath, ['server.js'], {
  cwd: appDir,
  stdio: 'inherit',
  env: process.env,
})

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  process.exit(code ?? 0)
})
