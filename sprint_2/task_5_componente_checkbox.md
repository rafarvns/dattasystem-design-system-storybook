# Task 5 — Componente Checkbox

## Descrição

Implementar o componente **Checkbox** do Datta System — controle de seleção para opções binárias (sim/não) ou múltipla escolha em listas. Deve ser visualmente coeso com os demais componentes de formulário e acessível via teclado e leitores de tela.

---

## Objetivo

Criar um componente Checkbox reutilizável, com suporte a estados checked, indeterminate e disabled, utilizável individualmente ou em grupos, consumindo exclusivamente Design Tokens.

---

## Requisitos

### Estrutura Visual — Checkbox Individual

```
<div class="checkbox">
  <input class="checkbox__input" type="checkbox" id="check-id" />
  <label class="checkbox__label" for="check-id">
    <span class="checkbox__box"></span>
    <span class="checkbox__text">Texto da opção</span>
  </label>
  <span class="checkbox__helper">Texto auxiliar opcional</span>
</div>
```

### Estrutura Visual — Grupo de Checkboxes

```
<fieldset class="checkbox-group">
  <legend class="checkbox-group__legend">
    Título do Grupo <span class="checkbox-group__required">*</span>
  </legend>
  <div class="checkbox-group__options">
    <!-- checkbox individuais aqui -->
  </div>
  <span class="checkbox-group__helper">Texto auxiliar ou mensagem de erro</span>
</fieldset>
```

### Anatomia

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Input** | `<input type="checkbox">` nativo (visualmente oculto, acessível) | Sim |
| **Box** | Representação visual do checkbox (quadrado com check) | Sim |
| **Label/Text** | Texto descritivo ao lado do checkbox | Sim |
| **Helper Text** | Texto auxiliar abaixo (individual ou grupo) | Não |
| **Error Message** | Substitui helper em caso de erro de validação | Não |
| **Legend** | Título do grupo (em `<fieldset>`) | Sim (em grupos) |

### Especificações do Box

| Propriedade | Valor |
|-------------|-------|
| Tamanho | 18px × 18px |
| Border-radius | `--radius-sm` (3px — levemente arredondado, mas reconhecível como quadrado) |
| Borda (default) | 2px solid `--color-gray-400` |
| Fundo (default) | `--color-white` |
| Fundo (checked) | `--color-blue-500` |
| Borda (checked) | `--color-blue-500` |
| Ícone check | Branco, 12px, estilo stroke (✓) |
| Fundo (indeterminate) | `--color-blue-500` |
| Ícone indeterminate | Traço horizontal branco (—) |

### Estados Visuais

| Estado | Box Borda | Box Fundo | Ícone | Label |
|--------|-----------|-----------|-------|-------|
| **Default** | `--color-gray-400` | `--color-white` | — | `--color-gray-800` |
| **Hover** | `--color-blue-400` | `--color-white` | — | — |
| **Focus** | Anel de foco `--color-blue-300` (box-shadow) | — | — | — |
| **Checked** | `--color-blue-500` | `--color-blue-500` | ✓ branco | — |
| **Indeterminate** | `--color-blue-500` | `--color-blue-500` | — branco | — |
| **Disabled** | `--color-gray-200` | `--color-gray-100` | cinza (se checked) | `--color-gray-400` |
| **Error (grupo)** | `--color-red-500` | — | — | — |

### Especificações de Estilo

- **Label text:** `--font-family-primary`, `--font-size-base`, `--font-weight-regular`, `--color-gray-800`.
- **Espaçamento box ↔ label:** `--spacing-2` (8px).
- **Espaçamento entre checkboxes em grupo:** `--spacing-3` (12px) vertical.
- **Legend (grupo):** `--font-size-sm`, `--font-weight-medium`, `--color-gray-700`. Margin-bottom: `--spacing-2`.
- **Helper/Error text:** `--font-size-xs`, mesmos estilos do Input.
- **Transição:** `--transition-fast` para mudança de estado do box.
- **Cursor:** `pointer` no label e box; `not-allowed` quando disabled.

### Layout de Grupo

| Disposição | Descrição |
|------------|-----------|
| **Vertical (padrão)** | Opções empilhadas, uma abaixo da outra |
| **Horizontal** | Opções lado a lado (classe modificadora `checkbox-group--horizontal`), espaçamento `--spacing-4` entre itens |

---

## Comportamento

### Interação
- Clicar no box **ou no texto da label** alterna o estado (checked/unchecked).
- O estado indeterminate é controlado via JavaScript (`checkbox.indeterminate = true`), usado em cenários de seleção parcial (ex: "selecionar todos").

### Navegação por Teclado
- Focável via `Tab`.
- `Space` alterna o estado (checked/unchecked).
- Em grupos, `Tab` move entre checkboxes individuais.

### Validação (Grupo)
- Erro ativável via classe `checkbox-group--error`.
- Caso de uso: "Selecione pelo menos uma opção".
- Mensagem de erro aparece abaixo do grupo.

### Acessibilidade
- `<input type="checkbox">` nativo é a base — nunca usar `<div>` com `role="checkbox"`.
- O input fica visualmente oculto mas acessível (técnica `sr-only`, não `display: none`).
- `<label>` conectado via `for`/`id`. **Obrigatório.**
- Estado `indeterminate` anunciado por leitores de tela nativamente.
- Grupos usam `<fieldset>` + `<legend>` para contexto semântico.
- `aria-invalid="true"` no grupo em estado de erro.
- `aria-describedby` apontando para helper/error text.
- `aria-required="true"` quando seleção é obrigatória.

---

## Tokens Utilizados

| Categoria | Tokens |
|-----------|--------|
| Cores | `--color-blue-300`, `--color-blue-400`, `--color-blue-500`, `--color-red-500`, `--color-white`, `--color-gray-100`, `--color-gray-200`, `--color-gray-400`, `--color-gray-700`, `--color-gray-800` |
| Tipografia | `--font-family-primary`, `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-weight-regular`, `--font-weight-medium` |
| Espaçamento | `--spacing-1`, `--spacing-2`, `--spacing-3`, `--spacing-4` |
| Forma | `--radius-sm`, `--transition-fast` |

---

## Critérios de Aceite

- [ ] Componente Checkbox implementado com box customizado e label clicável.
- [ ] Estados visuais corretos: default, hover, focus, checked, indeterminate, disabled.
- [ ] Suporte ao estado indeterminate via JavaScript.
- [ ] Grupo de checkboxes com `<fieldset>` + `<legend>`.
- [ ] Layout vertical (padrão) e horizontal disponíveis para grupos.
- [ ] Estado de erro funcional no grupo com mensagem.
- [ ] Input nativo oculto via `sr-only` (acessível, não `display: none`).
- [ ] Clique no label alterna o estado corretamente.
- [ ] Navegação por teclado funcional (Tab, Space).
- [ ] Atributos ARIA corretos no grupo.
- [ ] Transição suave entre estados.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todos os estados e variantes.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Seção 2 (Princípios: Clareza, Acessibilidade)
- `sprint_2/task_2_componente_input.md` — Padrões de acessibilidade e validação

---

## Estimativa

**1 dia**

## Prioridade

**Alta** — Componente essencial para formulários com opções múltiplas.

## Dependências

- Sprint 1 concluída.
- Task 2 (Input) concluída — padrões visuais de formulário estabelecidos.
