# Task 6 — Reset CSS e Estilos Globais Base

## Descrição

Criar o arquivo de estilos globais do Datta System, incluindo um CSS reset/normalize, a aplicação das variáveis de tokens ao `body` e `html`, a configuração tipográfica base e os estilos fundamentais que todo componente herda.

---

## Objetivo

Garantir que todos os navegadores partam de uma base visual consistente e que os tokens definidos nas Tasks 2–5 estejam ativos e aplicados globalmente.

---

## Requisitos

### 1. CSS Reset / Normalize

Criar ou adotar um reset que:

- Remova margens e paddings padrão de todos os elementos.
- Defina `box-sizing: border-box` globalmente.
- Normalize a renderização de formulários entre navegadores (inputs, buttons, selects).
- Remova estilos de lista padrão (`ul`, `ol`).
- Normalize a renderização de tabelas.
- Defina `line-height` e `font-size` base no `html`.

> **Sugestão:** Usar como base o [Modern CSS Reset de Andy Bell](https://piccalil.li/blog/a-modern-css-reset/) ou similar, adaptando ao contexto do Datta System.

### 2. Estilos Base do `html` e `body`

```css
html {
  font-size: 16px; /* base para rem */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-secondary); /* cinza claro como fundo de página */
}
```

### 3. Estilos Tipográficos Base

Aplicar os presets tipográficos aos elementos HTML:

- `h1` → Usa `--font-family-secondary`, `--font-size-2xl`, `--font-weight-bold`
- `h2` → Usa `--font-family-secondary`, `--font-size-xl`, `--font-weight-bold`
- `h3` → Usa `--font-family-secondary`, `--font-size-lg`, `--font-weight-semibold`
- `h4` → Usa `--font-family-primary`, `--font-size-md`, `--font-weight-semibold`
- `p` → Herda do body (Inter, 16px, regular)
- `small` → Usa `--font-size-sm`
- `a` → Cor `--color-primary`, sem underline por padrão, underline no hover

### 4. Estilos de Foco Global

Garantir acessibilidade com um estilo de foco visível:

```css
:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}
```

> Remover o outline padrão e substituir pelo ring de foco do Design System (azul, 3px, com transparência).

### 5. Utilitários de Acessibilidade

Criar a classe `.sr-only` (screen reader only) para conteúdo visível apenas para leitores de tela:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### 6. Importação dos Tokens

O arquivo global deve importar todos os arquivos de tokens:

```css
@import '../tokens/colors.css';
@import '../tokens/typography.css';
@import '../tokens/spacing.css';
@import '../tokens/shape.css';
```

### 7. Arquivo de Saída

Criar os seguintes arquivos em `styles/`:

- `styles/reset.css` — Reset/normalize CSS
- `styles/global.css` — Estilos base (body, tipografia, foco, utilitários)
- `styles/index.css` — Arquivo principal que importa tokens + reset + global (ponto de entrada único)

---

## Critérios de Aceite

- [ ] Reset CSS criado e funcionando (sem margens/paddings padrão, box-sizing border-box).
- [ ] `html` configurado com font-size 16px e font-smoothing.
- [ ] `body` usando tokens de fonte, cor e background corretos.
- [ ] Headings (h1–h4) estilizados com tokens tipográficos.
- [ ] Links estilizados com cor primária e hover adequado.
- [ ] Estilo de foco global (`:focus-visible`) com shadow-focus aplicado.
- [ ] Classe `.sr-only` disponível.
- [ ] Arquivo `styles/index.css` importa todos os tokens e estilos.
- [ ] Storybook carrega os estilos globais corretamente.
- [ ] Toda a tipografia renderiza com as fontes corretas (Inter para corpo, Manrope para títulos).

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 2 (Princípios), 4 (Tipografia), 5 (Mood Board)
- Tasks 2, 3, 4 e 5 — Tokens que serão consumidos aqui

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta**

## Dependências

- Task 1 (Setup do Projeto) — Storybook e pastas.
- Task 2 (Tokens de Cores) — variáveis de cor.
- Task 3 (Tokens de Tipografia) — variáveis tipográficas e fontes.
- Task 4 (Tokens de Espaçamento) — variáveis de espaçamento.
- Task 5 (Tokens de Forma) — variáveis de sombra, radius, transição.
