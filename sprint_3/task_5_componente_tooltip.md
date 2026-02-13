# Task 5 — Componente Tooltip

## Descrição

Implementar o componente **Tooltip** do Datta System — balão informativo flutuante que exibe texto auxiliar ao passar o mouse ou focar em um elemento. Tooltips são usados para fornecer contexto adicional sem poluir a interface, especialmente útil para ícones, abreviações e campos que precisam de explicação breve.

---

## Objetivo

Criar um componente Tooltip acessível, leve e posicionável em 4 direções (top, right, bottom, left), com trigger por hover e focus, delay configurável e integração com leitores de tela.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<!-- Elemento trigger com tooltip -->
<div class="ds-tooltip-wrapper">
  <button class="ds-btn ds-btn--ghost" aria-describedby="tooltip-1">
    🖨️
  </button>
  <div class="ds-tooltip ds-tooltip--top" id="tooltip-1" role="tooltip">
    <span class="ds-tooltip__text">Imprimir documento</span>
    <span class="ds-tooltip__arrow" aria-hidden="true"></span>
  </div>
</div>
```

### 2. Anatomia do Componente

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Wrapper** | Container que agrupa trigger + tooltip | Sim |
| **Trigger** | Elemento que ativa o tooltip (botão, ícone, texto) | Sim |
| **Tooltip** | Balão flutuante com o texto | Sim |
| **Text** | Conteúdo textual do tooltip | Sim |
| **Arrow** | Seta/triângulo apontando para o trigger | Sim |

### 3. Posições

| Posição | Classe | Descrição |
|---------|--------|-----------|
| **Top** | `ds-tooltip--top` | Tooltip acima do trigger (padrão) |
| **Right** | `ds-tooltip--right` | Tooltip à direita do trigger |
| **Bottom** | `ds-tooltip--bottom` | Tooltip abaixo do trigger |
| **Left** | `ds-tooltip--left` | Tooltip à esquerda do trigger |

- A seta (arrow) aponta sempre na direção do trigger.
- Se o tooltip ultrapassar a viewport, reposicionar automaticamente para o lado oposto (flip).

### 4. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo | `--ds-color-neutral-900` | Cinza muito escuro (quase preto) |
| Texto | `--ds-color-neutral-white` | Branco |
| Fonte | `--ds-font-size-xs` | `12px` |
| Peso | `--ds-font-weight-regular` | `400` |
| Padding | `--ds-spacing-4` `--ds-spacing-8` | `4px` vertical / `8px` horizontal |
| Border-radius | `--ds-radius-sm` | `4px` |
| Sombra | `--ds-shadow-sm` | Sombra sutil |
| Max-width | — | `240px` |
| Z-index | `--ds-z-tooltip` | `1100` |
| Seta tamanho | — | `6px` (triângulo CSS) |
| Transição | `--ds-transition-fast` | `150ms ease` |
| Delay de entrada | — | `300ms` (configurável) |
| Delay de saída | — | `100ms` |

### 5. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Hidden** | Tooltip invisível (`opacity: 0`, `visibility: hidden`, `pointer-events: none`) |
| **Appearing** | Tooltip aparecendo: `opacity 0→1` + leve deslocamento na direção oposta à posição. Duração: `150ms` após delay |
| **Visible** | Tooltip totalmente visível e posicionado |
| **Disappearing** | Tooltip desaparecendo: `opacity 1→0`. Duração: `100ms` |

### 6. Comportamento

#### Triggers
- **Hover:** Tooltip aparece ao hover no trigger após delay de entrada (300ms). Desaparece ao sair com delay de saída (100ms).
- **Focus:** Tooltip aparece ao focar no trigger (Tab). Desaparece ao perder o foco.
- **Hover no tooltip:** Mover o mouse para o tooltip mantém ele visível (o tooltip não desaparece enquanto o mouse estiver sobre ele).

#### Delays
- **Delay de entrada:** Evita tooltips piscando ao mover o mouse rapidamente. Padrão: `300ms`.
- **Delay de saída:** Permite mover o mouse do trigger para o tooltip. Padrão: `100ms`.
- Ambos configuráveis.

#### Posicionamento
- Tooltip centralizado em relação ao trigger na direção perpendicular.
- Gap de `8px` entre o trigger e o tooltip.
- Se não houver espaço na direção configurada, reposicionar automaticamente (flip para lado oposto).
- Manter dentro da viewport (collision detection).

#### Conteúdo
- **Apenas texto.** Tooltips não devem conter conteúdo interativo (links, botões).
- Texto curto e direto — máximo de 2 linhas (~80 caracteres).
- Para conteúdo mais complexo, usar Popover (componente futuro) ao invés de Tooltip.

### 7. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Role | `role="tooltip"` no elemento tooltip |
| Associação | `aria-describedby` no trigger apontando para o `id` do tooltip |
| Visibilidade SR | O texto do tooltip é lido pelo leitor de tela ao focar no trigger |
| Não interativo | Tooltip não contém elementos focáveis |
| Escape | `Esc` fecha o tooltip (quando aberto por focus) |
| Contraste | Texto branco sobre fundo escuro ≥ 4.5:1 |
| Motion | Respeitar `prefers-reduced-motion` — sem animação se ativado |

### 8. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Foca no trigger → tooltip aparece |
| `Shift + Tab` | Sai do trigger → tooltip desaparece |
| `Esc` | Fecha o tooltip sem mover o foco |

---

## Variantes

### 1. Tooltip Simples
Texto puro sobre fundo escuro. Uso padrão para ícones e abreviações.

### 2. Tooltip com Atalho
Texto + indicação de atalho de teclado. Ex: "Salvar (Ctrl+S)". O atalho aparece em fonte menor ou com `<kbd>` estilizado.

---

## Critérios de Aceite

- [ ] Componente Tooltip implementado com estrutura BEM conforme especificação.
- [ ] 4 posições funcionais: top, right, bottom, left.
- [ ] Seta (arrow) apontando corretamente para o trigger em todas as posições.
- [ ] Trigger por hover com delay de entrada (300ms) e saída (100ms).
- [ ] Trigger por focus (Tab) funcional.
- [ ] Hover sobre o tooltip mantém ele visível.
- [ ] Flip automático quando não há espaço na viewport.
- [ ] `role="tooltip"` e `aria-describedby` implementados.
- [ ] `Esc` fecha o tooltip quando aberto por focus.
- [ ] Animação de entrada/saída suave.
- [ ] Respeita `prefers-reduced-motion`.
- [ ] Max-width de 240px com quebra de texto.
- [ ] Contraste WCAG AA (texto branco sobre fundo escuro).
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todas as posições e variantes.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 2 (Princípio de Clareza Absoluta)
- [WAI-ARIA Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

---

## Estimativa

**1 dia**

## Prioridade

**Média** — Componente de suporte que melhora a usabilidade, mas não bloqueia funcionalidades.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento, sombras)
- (Nenhuma dependência direta de componentes da Sprint 2)
