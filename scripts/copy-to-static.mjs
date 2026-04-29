import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const projectRoot = path.dirname(__dirname)

const files = [
  { src: 'dist/datta-system.css', dest: 'storybook-static/datta-system.css' },
  { src: 'dist/datta-system-bundle.zip', dest: 'storybook-static/datta-system-bundle.zip' },
]

let errors = 0

files.forEach(({ src, dest }) => {
  const srcPath = path.join(projectRoot, src)
  const destPath = path.join(projectRoot, dest)

  try {
    fs.copyFileSync(srcPath, destPath)
    console.log(`✅ Copiado: ${src.replace(projectRoot, '.')} → ${dest.replace(projectRoot, '.')}`)
  } catch (err) {
    console.error(`❌ Erro ao copiar ${src}: ${err.message}`)
    errors++
  }
})

if (errors > 0) {
  process.exit(1)
}
