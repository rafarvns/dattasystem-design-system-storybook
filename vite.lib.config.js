import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cp } from 'node:fs/promises'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const fontsCopyPlugin = {
  name: 'copy-fonts',
  async writeBundle() {
    const srcFonts = resolve(__dirname, 'assets/fonts')
    const destFonts = resolve(__dirname, 'dist/fonts')
    try {
      await cp(srcFonts, destFonts, { recursive: true, force: true })
      console.log('✓ Fonts copied successfully')
    } catch (err) {
      console.error('Warning: Could not copy fonts:', err.message)
    }
  },
}

export default defineConfig({
  plugins: [fontsCopyPlugin],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'styles/index.js'),
      formats: ['es'],
      fileName: 'datta-system',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'datta-system.css';
          }
          return 'fonts/[name][extname]';
        },
      },
    },
    cssMinify: true,
  },
})
