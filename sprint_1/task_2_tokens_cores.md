# Task 2 — Design Tokens: Paleta de Cores

## Descrição

Definir a paleta de cores completa do Datta System, traduzindo as direções conceituais em **códigos hexadecimais concretos**, variáveis CSS e documentação de uso. Cada cor deve ter variações (claro, médio, escuro) e um nome semântico que indique seu propósito na interface.

---

## Objetivo

Ter todas as cores do Design System definidas como tokens reutilizáveis, documentadas e prontas para consumo por componentes.

---

## Requisitos

### 1. Paleta Primária — Azul (Confiança e Institucionalidade)

Definir **no mínimo 5 variações** de azul:

| Token | Uso Pretendido | Exemplo de Contexto |
|-------|----------------|---------------------|
| `--color-blue-900` | Azul muito escuro | Textos de destaque em headers |
| `--color-blue-700` | Azul escuro | Navegação principal, cabeçalhos |
| `--color-blue-500` | Azul médio (primário) | Botões primários, links, ícones ativos |
| `--color-blue-300` | Azul claro | Estados de hover, badges |
| `--color-blue-100` | Azul muito claro | Fundos de alertas informativos |
| `--color-blue-50` | Azul quase branco | Fundos sutis, áreas de destaque leve |

> **Diretriz do conceito:** "Variações mais escuras transmitem autoridade; tons mais claros servem como fundos informativos e estados de destaque suave."

### 2. Paleta de Ação — Vermelho (Ação e Atenção)

Definir **no mínimo 4 variações** de vermelho:

| Token | Uso Pretendido | Exemplo de Contexto |
|-------|----------------|---------------------|
| `--color-red-700` | Vermelho escuro | Hover em botões destrutivos |
| `--color-red-500` | Vermelho vivo | Botões de ação destrutiva, alertas de erro |
| `--color-red-300` | Vermelho suave | Fundos de mensagens de erro |
| `--color-red-100` | Vermelho muito claro | Fundos sutis de validação |
| `--color-red-50` | Vermelho quase branco | Fundo de campos com erro |

> **Diretriz do conceito:** "O vermelho é usado com intenção e moderação."

### 3. Paleta Neutra — Branco e Cinzas (Respiro e Legibilidade)

Definir **no mínimo 7 variações** de neutros:

| Token | Uso Pretendido | Exemplo de Contexto |
|-------|----------------|---------------------|
| `--color-white` | Branco puro | Fundo principal, texto em botões escuros |
| `--color-gray-50` | Cinza quase branco | Fundo de página |
| `--color-gray-100` | Cinza muito claro | Fundos de cards, áreas secundárias |
| `--color-gray-200` | Cinza claro | Separadores, bordas leves |
| `--color-gray-400` | Cinza médio | Placeholders, textos desabilitados |
| `--color-gray-600` | Cinza escuro | Textos secundários, ícones |
| `--color-gray-800` | Cinza muito escuro | Texto principal do corpo |
| `--color-gray-900` | Quase preto | Títulos, textos de máximo destaque |

### 4. Cores Semânticas (Aliases)

Criar aliases semânticos que mapeiam para as cores base:

```css
/* Ação Primária */
--color-primary: var(--color-blue-500);
--color-primary-hover: var(--color-blue-700);
--color-primary-light: var(--color-blue-100);

/* Perigo / Erro */
--color-danger: var(--color-red-500);
--color-danger-hover: var(--color-red-700);
--color-danger-light: var(--color-red-100);

/* Sucesso */
--color-success: [definir verde adequado];
--color-success-light: [definir verde claro];

/* Alerta / Aviso */
--color-warning: [definir amarelo/âmbar adequado];
--color-warning-light: [definir amarelo claro];

/* Texto */
--color-text-primary: var(--color-gray-800);
--color-text-secondary: var(--color-gray-600);
--color-text-placeholder: var(--color-gray-400);
--color-text-inverse: var(--color-white);

/* Fundos */
--color-bg-primary: var(--color-white);
--color-bg-secondary: var(--color-gray-50);
--color-bg-card: var(--color-white);

/* Bordas */
--color-border-default: var(--color-gray-200);
--color-border-focus: var(--color-blue-500);
--color-border-error: var(--color-red-500);
```

### 5. Arquivo de Tokens

Criar o arquivo `tokens/colors.css` (e/ou `tokens/colors.scss`) contendo:

- Todas as variáveis definidas acima no `:root`.
- Comentários organizando por seção (Azul, Vermelho, Neutros, Semânticos).

### 6. Acessibilidade

- Garantir que as combinações de cor atendam **WCAG 2.1 AA**:
  - Texto normal: contraste mínimo de **4.5:1**
  - Texto grande / elementos UI: contraste mínimo de **3:1**
- Documentar as combinações válidas (ex: "Texto `gray-800` sobre fundo `white` = contraste X:1 ✅").

---

## Entregáveis

1. Arquivo `tokens/colors.css` com todas as variáveis.
2. Documentação (Markdown ou Story no Storybook) mostrando:
   - Cada cor com seu hex, nome do token e uso pretendido.
   - Resultados dos testes de contraste.

---

## Critérios de Aceite

- [ ] Todas as variações de azul (mínimo 6) definidas com valores hex.
- [ ] Todas as variações de vermelho (mínimo 5) definidas com valores hex.
- [ ] Todas as variações de neutros (mínimo 8) definidas com valores hex.
- [ ] Cores semânticas (aliases) criadas e mapeadas.
- [ ] Cores de sucesso e alerta definidas (mesmo que fora da paleta base, são necessárias para feedback).
- [ ] Contrastes verificados para as combinações mais comuns (texto/fundo).
- [ ] Arquivo `tokens/colors.css` criado e importável.
- [ ] Documentação visual das cores acessível.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 3 (Paleta de Cores: Significado e Emoção)
- [WCAG 2.1 — Requisitos de Contraste](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta**

## Dependências

- Task 1 (Setup do Projeto) — precisa da estrutura de pastas e do Storybook configurado.
