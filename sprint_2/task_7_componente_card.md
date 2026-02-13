# Task 7 — Componente Card de Informação

## Descrição

Implementar o componente **Card** do Datta System — container visual para agrupar informações relacionadas. O card é um dos padrões mais utilizados em sistemas governamentais: exibição de dados de processos, resumos de cadastro, painéis informativos e listagens.

> **Referência conceitual:** *"O card é um retângulo de fundo branco sobre a base cinza clara da página, com sombra mínima (quase imperceptível) e borda de 1px em cinza claro. [...] Em 1366×768, dois cards lado a lado cabem confortavelmente com margem adequada."* — DESIGN_SYSTEM_CONCEPT.md, seção 6.

---

## Objetivo

Criar um componente Card reutilizável e flexível, com áreas de header, body e footer opcionais, variantes com/sem ícone, e estrutura que escala verticalmente de forma previsível.

---

## Requisitos

### Estrutura Visual

```
<article class="card">
  <header class="card__header">
    [<span class="card__icon">ícone</span>]
    <h3 class="card__title">Título do Card</h3>
    [<span class="card__badge">Status</span>]
    [<button class="card__action">⋯</button>]
  </header>
  <div class="card__body">
    <!-- Conteúdo livre: textos, pares rótulo-valor, listas, etc. -->
  </div>
  [<footer class="card__footer">
    <!-- Ações: botões, links -->
  </footer>]
</article>
```

### Anatomia

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Container** | `<article>` com fundo, borda e sombra | Sim |
| **Header** | Área superior com título, ícone opcional e ações | Não (mas recomendado) |
| **Ícone** | Ícone outline em azul ao lado do título | Não |
| **Título** | Heading do card (h3 ou h4) | Não |
| **Badge** | Indicador de status (ex: "Ativo", "Pendente") | Não |
| **Ação do header** | Botão de menu/ações (⋯ ou ícone) | Não |
| **Body** | Área principal de conteúdo livre | Sim |
| **Footer** | Área inferior com ações (botões, links) | Não |

### Variantes

| Variante | Descrição |
|----------|-----------|
| **Default** | Card padrão com header + body |
| **Com Footer** | Inclui área de ações na parte inferior |
| **Compacto** | Padding reduzido, ideal para listagens densas |
| **Destaque** | Borda esquerda colorida (azul ou vermelho) para indicar status ou categoria |
| **Clicável** | Card inteiro é interativo (hover, cursor pointer) — para navegação |

### Especificações de Estilo

#### Container
| Propriedade | Valor |
|-------------|-------|
| Fundo | `--color-white` |
| Borda | `1px solid --color-gray-200` |
| Border-radius | `--radius-md` (6px) |
| Sombra | `--shadow-sm` (sutil, quase imperceptível) |
| Padding | `--spacing-4` (16px) em todas as direções |
| Padding (compacto) | `--spacing-3` (12px) |

#### Header
| Propriedade | Valor |
|-------------|-------|
| Display | `flex`, `align-items: center` |
| Gap entre ícone e título | `--spacing-2` |
| Margin-bottom | `--spacing-3` |
| Separador (opcional) | `1px solid --color-gray-100` abaixo do header |

#### Título
| Propriedade | Valor |
|-------------|-------|
| Font size | `--font-size-md` |
| Font weight | `--font-weight-semibold` |
| Cor | `--color-gray-800` |
| Tag HTML | `<h3>` (padrão) ou `<h4>` conforme contexto |

#### Ícone do Header
| Propriedade | Valor |
|-------------|-------|
| Tamanho | 20px |
| Cor | `--color-blue-500` |
| Estilo | Outline, consistente com a biblioteca de ícones |

#### Body
| Propriedade | Valor |
|-------------|-------|
| Font size | `--font-size-base` |
| Cor do texto | `--color-gray-700` |
| Espaçamento interno | Herdado do container |

#### Pares Rótulo-Valor (padrão comum no body)
| Propriedade | Valor |
|-------------|-------|
| Rótulo | `--font-size-xs`, `--font-weight-medium`, `--color-gray-500`, `text-transform: uppercase` |
| Valor | `--font-size-base`, `--font-weight-regular`, `--color-gray-800` |
| Espaçamento entre pares | `--spacing-3` vertical |

#### Footer
| Propriedade | Valor |
|-------------|-------|
| Separador | `1px solid --color-gray-100` acima do footer |
| Padding-top | `--spacing-3` |
| Margin-top | `--spacing-3` |
| Alinhamento | `flex`, `justify-content: flex-end`, `gap: --spacing-2` |

#### Variante Destaque (borda lateral)
| Propriedade | Valor |
|-------------|-------|
| Borda esquerda | `4px solid --color-blue-500` (informativo) ou `4px solid --color-red-500` (alerta/urgente) |
| Border-radius esquerdo | `--radius-md` mantido no topo e base |

### Estados (Variante Clicável)

| Estado | Comportamento |
|--------|---------------|
| **Default** | Estilo base |
| **Hover** | Sombra aumenta para `--shadow-md`, borda sutil para `--color-gray-300` |
| **Focus** | Anel de foco `--color-blue-300` (outline/box-shadow) |
| **Active** | Sombra reduz para `--shadow-xs`, leve escurecimento |

---

## Comportamento

### Responsividade e Layout
- **Em 1366×768:** Dois cards lado a lado cabem confortavelmente em um grid de 12 colunas (6+6 ou 8+4).
- **Largura:** O card é fluido (`width: 100%` do container pai), não tem largura fixa.
- **Crescimento vertical:** O card expande verticalmente conforme o conteúdo, sem altura fixa.
- **Overflow:** Conteúdo textual longo usa `word-break: break-word` para evitar overflow horizontal.

### Card Clicável
- O card inteiro responde ao clique (não apenas botões internos).
- Usar `<a>` envolvendo o conteúdo ou técnica de overlay link.
- `cursor: pointer` no hover.
- Se o card clicável contém botões internos, estes devem ter `z-index` superior para funcionar independentemente.

### Acessibilidade
- Usar `<article>` como elemento semântico.
- Título do card deve ser um heading (`<h3>` ou `<h4>`) para navegação por leitores de tela.
- Cards clicáveis devem ter `aria-label` ou texto acessível descrevendo o destino.
- Ações no footer/header devem ser botões focáveis.
- Badge de status deve ter `aria-label` se a cor for o único indicador (ex: "Status: Pendente").

---

## Tokens Utilizados

| Categoria | Tokens |
|-----------|--------|
| Cores | `--color-blue-300`, `--color-blue-500`, `--color-red-500`, `--color-white`, `--color-gray-100`, `--color-gray-200`, `--color-gray-300`, `--color-gray-500`, `--color-gray-700`, `--color-gray-800` |
| Tipografia | `--font-family-primary`, `--font-size-xs`, `--font-size-base`, `--font-size-md`, `--font-weight-regular`, `--font-weight-medium`, `--font-weight-semibold` |
| Espaçamento | `--spacing-2`, `--spacing-3`, `--spacing-4` |
| Forma | `--radius-md`, `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--transition-fast` |

---

## Critérios de Aceite

- [ ] Componente Card implementado com header, body e footer opcionais.
- [ ] Container com fundo branco, borda cinza e sombra sutil conforme conceito.
- [ ] 5 variantes disponíveis: default, com footer, compacto, destaque (borda lateral), clicável.
- [ ] Header suporta ícone, título, badge e ação.
- [ ] Body suporta conteúdo livre e padrão rótulo-valor.
- [ ] Footer com separador e alinhamento de ações à direita.
- [ ] Variante destaque com borda esquerda colorida (azul/vermelho).
- [ ] Variante clicável com hover, focus e cursor pointer.
- [ ] Card é fluido e cresce verticalmente com o conteúdo.
- [ ] Dois cards lado a lado cabem em 1366×768.
- [ ] Semântica HTML correta (`<article>`, headings, botões).
- [ ] Atributos ARIA para cards clicáveis e badges.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todas as variantes.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Seção 6 (Cartão de Informação)
- `sprint_1/task_2_tokens_cores.md` — Paleta de cores
- `sprint_1/task_4_tokens_espacamento.md` — Grid e espaçamentos
- `sprint_1/task_5_tokens_forma.md` — Sombras e border-radius

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta** — Componente fundamental para exibição de dados e painéis informativos.

## Dependências

- Sprint 1 concluída.
- Task 1 (Button) concluída — botões usados no footer do card.
