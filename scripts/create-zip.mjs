import archiver from 'archiver'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const projectRoot = path.dirname(__dirname)

const readmeContent = `# Datta System CSS Bundle

Este bundle contém os estilos CSS compilados do Datta System Design System v1.0.

## 📦 Conteúdo

- **datta-system.css** — CSS compilado com todos os tokens de design (cores, tipografia, espaçamento, formas) e estilos globais
- **fonts/** — Arquivos de fontes necessários (Inter, Manrope, Source Sans Pro, IBM Plex Sans)

## 🚀 Como usar

### 1. Copie os arquivos para seu projeto

\`\`\`
seu-projeto/
├── css/
│   └── datta-system.css
├── fonts/
│   ├── Inter-Light.otf
│   ├── Inter-Regular.otf
│   └── ... (outras fontes)
└── index.html
\`\`\`

### 2. Importe o CSS no seu HTML

\`\`\`html
<link rel="stylesheet" href="css/datta-system.css">
\`\`\`

### 3. Use as classes e tokens CSS

Os tokens estão disponíveis como variáveis CSS:

\`\`\`css
/* Cores */
body {
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
}

/* Espaçamento */
button {
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
}

/* Tipografia */
h1 {
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
}
\`\`\`

## 📚 Documentação Completa

Para a documentação completa, componentes e exemplos de uso, visite o Storybook:
https://datta-system.github.io/

## 🎨 Temas

O design system suporta múltiplos temas. Para aplicar um tema diferente, adicione o atributo \`data-theme\` ao elemento raiz:

\`\`\`html
<html data-theme="secretaria-saude">
  <!-- seu conteúdo -->
</html>
\`\`\`

Temas disponíveis:
- \`default\` — Azul Aço (padrão)
- \`secretaria-saude\` — Verde (saúde)
- \`tribunal-justica\` — Roxo (judiciário)

## 🔤 Famílias de Fontes

O bundle inclui 4 famílias de fontes:

- **Inter** — Fonte primária para corpo de texto e UI
- **Manrope** — Fonte secundária para headings
- **Source Sans Pro** — Fallback
- **IBM Plex Sans** — Suporte multilíngue

## 💬 Suporte

Para dúvidas ou sugestões:
- Email: designsystem@datta.gov.br
- GitHub: https://github.com/

## 📄 Licença

Datta System © 2026. Licença restrita a órgãos públicos.
`

const zipPath = path.join(projectRoot, 'dist', 'datta-system-bundle.zip')
const cssPath = path.join(projectRoot, 'dist', 'datta-system.css')
const fontsPath = path.join(projectRoot, 'dist', 'fonts')

// Verificar se os arquivos de entrada existem
if (!fs.existsSync(cssPath)) {
  console.error('❌ Erro: dist/datta-system.css não encontrado. Execute `npm run build-css` primeiro.')
  process.exit(1)
}

if (!fs.existsSync(fontsPath)) {
  console.error('❌ Erro: dist/fonts/ não encontrada. Execute `npm run build-css` primeiro.')
  process.exit(1)
}

// Criar arquivo ZIP
const output = fs.createWriteStream(zipPath)
const archive = archiver('zip', { zlib: { level: 9 } })

archive.on('error', (err) => {
  console.error('❌ Erro ao criar ZIP:', err)
  process.exit(1)
})

output.on('close', () => {
  console.log(`✅ Bundle criado com sucesso: ${zipPath} (${(archive.pointer() / 1024).toFixed(2)} KB)`)
})

archive.pipe(output)

// Adicionar arquivos ao ZIP
archive.file(cssPath, { name: 'datta-system.css' })
archive.directory(fontsPath, 'fonts')
archive.append(readmeContent, { name: 'README.md' })

// Finalizar o ZIP
await archive.finalize()
