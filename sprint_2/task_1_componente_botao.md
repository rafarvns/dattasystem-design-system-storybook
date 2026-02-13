# Task 1 — Componente Button

## Descrição

Implementar o componente **Button** do Datta System — o elemento interativo mais fundamental da interface. O botão deve refletir a personalidade do sistema: direto, confiável e acessível, com hierarquia visual clara entre suas variantes.

> **Referência conceitual:** *"O botão primário do Datta System possui fundo azul médio com texto branco, cantos levemente arredondados (6px) e padding generoso para facilitar o clique."* — DESIGN_SYSTEM_CONCEPT.md, seção 6.

---

## Objetivo

Criar um componente Button reutilizável que consuma Design Tokens, suporte múltiplas variantes e tamanhos, seja acessível por teclado e leitor de tela, e funcione corretamente em 1366×768.

---

## Requisitos

### Variantes

| Variante | Fundo | Texto | Borda | Uso |
|----------|-------|-------|-------|-----|
| **Primary** | `--color-blue-500` | `--color-white` | nenhuma | Ação principal da página (1 por contexto) |
| **Secondary** | `transparent` | `--color-blue-500` | `1px solid --color-blue-500` | Ações secundárias, complementares à primária |
| **Destructive** | `--color-red-500` | `--color-white` | nenhuma | Ações destrutivas: excluir, cancelar, revogar |
| **Ghost** | `transparent` | `--color-blue-500` | nenhuma | Ações terciárias, links estilizados como botão |

### Tamanhos

| Tamanho | Padding (vertical / horizontal) | Font Size | Min Height |
|---------|--------------------------------|-----------|------------|
| **sm** | `--spacing-2` / `--spacing-3` | `--font-size-sm` | 32px |
| **md** | `--spacing-2` / `--spacing-4` | `--font-size-base` | 40px |
| **lg** | `--spacing-3` / `--spacing-6` | `--font-size-md` | 48px |

### Estados Visuais

Cada variante deve ter estilos definidos para os seguintes estados:

| Estado | Comportamento Visual |
|--------|---------------------|
| **Default** | Estilo base da variante |
| **Hover** | Escurecimento sutil do fundo (Primary/Destructive usam tom -600; Secondary/Ghost usam fundo azul com 10% de opacidade) |
| **Focus** | Anel de foco visível (`outline` ou `box-shadow`) com offset, usando `--color-blue-300`. Deve ser perceptível em fundo branco e cinza |
| **Active** | Escurecimento adicional (tom -700), leve redução de escala opcional (`transform: scale(0.98)`) |
| **Disabled** | Opacidade reduzida (`--opacity-disabled`), `cursor: not-allowed`, sem interação de hover/active |
| **Loading** | Texto substituído por spinner/indicador de carregamento, botão desabilitado durante o loading |

### Ícone (Opcional)

- O botão deve suportar um **ícone à esquerda ou à direita** do texto.
- O ícone deve ter tamanho proporcional ao tamanho do botão.
- Espaçamento entre ícone e texto: `--spacing-2`.
- Deve ser possível ter um botão **somente com ícone** (icon-only), com `aria-label` obrigatório.

### Texto e Tipografia

- Fonte: `--font-family-primary` com `--font-weight-semibold`.
- Caixa normal (sentence case), nunca ALL CAPS. Ex: "Salvar cadastro", "Buscar processo".
- `line-height: 1` para alinhamento vertical centralizado.

### Estrutura HTML/CSS

```
<button class="btn btn--{variante} btn--{tamanho}" [disabled] [aria-label]>
  [<span class="btn__icon btn__icon--left">ícone</span>]
  <span class="btn__label">Texto do Botão</span>
  [<span class="btn__icon btn__icon--right">ícone</span>]
</button>
```

- Usar `<button>` nativo (nunca `<div>` ou `<a>` para ações).
- Se necessário renderizar como link, usar `<a>` com `role="button"`.
- Border-radius: `--radius-md` (6px conforme conceito).

---

## Comportamento

### Navegação por Teclado
- Focável via `Tab`.
- Ativável via `Enter` e `Space`.
- Quando disabled, deve ser removido do fluxo de Tab (`tabindex="-1"` ou atributo `disabled` nativo).

### Acessibilidade
- Contraste de texto sobre fundo: **mínimo 4.5:1** (WCAG AA).
- Botões icon-only devem ter `aria-label` descritivo.
- Botões de loading devem ter `aria-busy="true"` e texto alternativo para o spinner.
- Botões destrutivos em contextos críticos devem estar acompanhados de confirmação (diretriz de uso, não do componente em si).

### Responsividade
- Em viewports ≤ 1366px, o botão **md** é o tamanho padrão.
- Botão deve aceitar `width: 100%` quando dentro de containers que exigem (ex: formulários mobile).

---

## Tokens Utilizados

| Categoria | Tokens |
|-----------|--------|
| Cores | `--color-blue-500`, `--color-blue-600`, `--color-blue-700`, `--color-red-500`, `--color-red-600`, `--color-red-700`, `--color-white`, `--color-gray-300` |
| Tipografia | `--font-family-primary`, `--font-size-sm`, `--font-size-base`, `--font-size-md`, `--font-weight-semibold` |
| Espaçamento | `--spacing-2`, `--spacing-3`, `--spacing-4`, `--spacing-6` |
| Forma | `--radius-md`, `--shadow-none`, `--transition-fast` |
| Opacidade | `--opacity-disabled` |

---

## Critérios de Aceite

- [ ] Componente Button implementado com as 4 variantes (primary, secondary, destructive, ghost).
- [ ] 3 tamanhos disponíveis (sm, md, lg) com padding e font-size corretos.
- [ ] Todos os 6 estados visuais (default, hover, focus, active, disabled, loading) funcionam corretamente.
- [ ] Suporte a ícone à esquerda, à direita e icon-only.
- [ ] Texto em sentence case, fonte e peso conforme tokens.
- [ ] Navegação por teclado funciona (Tab, Enter, Space).
- [ ] Contraste WCAG AA atendido em todas as variantes.
- [ ] Botões icon-only possuem `aria-label`.
- [ ] Estado de loading com `aria-busy="true"`.
- [ ] Nenhum valor de cor, tamanho ou espaçamento hardcoded — todos via tokens.
- [ ] Componente renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todas as variantes e estados.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Seção 6 (Botão)
- `sprint_1/task_2_tokens_cores.md` — Paleta de cores
- `sprint_1/task_3_tokens_tipografia.md` — Escala tipográfica
- `sprint_1/task_5_tokens_forma.md` — Border-radius e transições

---

## Estimativa

**2 dias**

## Prioridade

**Alta** — É o componente mais utilizado e serve como referência de padrão para os demais.

## Dependências

- Sprint 1 concluída (tokens de cores, tipografia, espaçamento e forma disponíveis).
