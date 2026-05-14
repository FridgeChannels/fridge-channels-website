/**
 * 在 .next/standalone 目录下启动 server.js（Next 官方推荐方式，相对路径才能正确解析）。
 * 若未构建或 standalone 未生成，给出明确提示。
 */
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const standaloneDir = path.join(root, '.next', 'standalone')
const serverJs = path.join(standaloneDir, 'server.js')

if (!fs.existsSync(serverJs)) {
  console.error(
    `[start:standalone] 未找到：${serverJs}\n\n` +
      '可能原因：\n' +
      '1. 尚未在本目录执行 npm run build，或构建失败（未生成 standalone）。\n' +
      '2. 当前工作目录不是项目根目录（应包含 package.json 与 next.config）。\n' +
      '3. 在服务器上只拷贝了 public 等目录，没有拷贝完整的 .next/standalone（其中必须有 server.js）。\n\n' +
      '在「项目根」执行：npm run build，再执行：npm run start:standalone\n',
  )
  process.exit(1)
}

const child = spawn(process.execPath, ['server.js'], {
  cwd: standaloneDir,
  stdio: 'inherit',
  env: process.env,
})

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  process.exit(code ?? 0)
})
