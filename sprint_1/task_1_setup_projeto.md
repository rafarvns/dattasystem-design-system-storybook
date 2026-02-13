# Task 1 — Setup do Projeto e Ferramentas

## Descrição

Configurar toda a estrutura base do projeto do Design System Datta, incluindo organização de pastas, instalação de dependências e configuração do Storybook como ferramenta de documentação e visualização de componentes.

---

## Objetivo

Ter o projeto pronto para desenvolvimento, com ambiente funcional, estrutura de pastas definida e Storybook rodando localmente.

---

## Requisitos

### 1. Estrutura de Pastas

Criar a seguinte estrutura dentro do projeto:

```
datta_system_desing_system_v1/
├── assets/
│   └── fonts/              # (já existente — Inter, Source Sans Pro, Manrope, IBM Plex Sans)
├── tokens/                 # Arquivos de Design Tokens (cores, tipografia, espaçamento, etc.)
├── styles/                 # Estilos globais (reset, variáveis, base)
├── components/             # Componentes do Design System (sprints futuras)
├── stories/                # Stories do Storybook para documentação
├── docs/                   # Documentação adicional em Markdown
├── sprint_1/               # (já existente — documentação da sprint)
├── DESIGN_SYSTEM_CONCEPT.md
├── package.json
└── index.js
```

### 2. Dependências

Instalar e configurar:

- **Storybook** (última versão estável) — para documentação viva e visualização de tokens/componentes.
- **SCSS/Sass** (se a equipe optar por pré-processador) — para variáveis, mixins e organização dos tokens.
- Qualquer bundler necessário (Vite, Webpack via Storybook, etc.).

### 3. Configuração do Storybook

- Inicializar o Storybook no projeto.
- Criar uma story introdutória (`Introduction.stories.mdx` ou similar) com:
  - Nome do Design System: **Datta System**
  - Tagline: *"Simplicidade que serve. Tecnologia que respeita."*
  - Link para o `DESIGN_SYSTEM_CONCEPT.md`
- Verificar que o Storybook roda sem erros com `npm run storybook`.

### 4. Configuração de Fontes

- Verificar que os arquivos de fonte em `assets/fonts/` estão acessíveis.
- Criar um arquivo `styles/fonts.css` (ou `.scss`) com os `@font-face` para:
  - **Inter** (Regular, Medium, SemiBold, Bold)
  - **Source Sans Pro** (Regular, SemiBold, Bold)
  - **Manrope** (Regular, Medium, SemiBold, Bold)
  - **IBM Plex Sans** (Regular, Medium, SemiBold, Bold)
- Testar que as fontes renderizam corretamente no Storybook.

---

## Critérios de Aceite

- [ ] Estrutura de pastas criada conforme especificação.
- [ ] Dependências instaladas sem erros.
- [ ] Storybook roda localmente (`npm run storybook`) sem erros.
- [ ] Story introdutória visível com nome e tagline do Datta System.
- [ ] Arquivo de `@font-face` criado com todas as 4 famílias tipográficas.
- [ ] Fontes renderizam corretamente em uma página de teste no Storybook.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 4 (Direção Tipográfica) e 8 (Próximos Passos)
- [Storybook Docs](https://storybook.js.org/docs)

---

## Estimativa

**2 dias**

## Prioridade

**Alta** — Bloqueante para todas as demais tarefas.
