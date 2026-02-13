# Task 6 — Componente Radio

## Descrição

Implementar o componente **Radio Button** do Datta System — controle de seleção exclusiva dentro de um grupo de opções. O usuário pode escolher apenas uma opção por grupo. Visualmente consistente com o Checkbox, mas com forma circular para diferenciação imediata.

---

## Objetivo

Criar um componente Radio reutilizável, sempre usado em grupo, com suporte a estados checked e disabled, consumindo exclusivamente Design Tokens e acessível via teclado e leitor de tela.

---

## Requisitos

### Estrutura Visual — Radio Individual

```
<div class="radio">
  <input class="radio__input" type="radio" id="radio-id" name="grupo" value="opcao-1" />
  <label class="radio__label" for="radio-id">
    <span class="radio__circle"></span>
    <span class="radio__text">Texto da opção</span>
  </label>
</div>
```

### Estrutura Visual — Grupo de Radios

```
<fieldset class="radio-group">
  <legend class="radio-group__legend">
    Título do Grupo <span class="radio-group__required">*</span>
  </legend>
  <div class="radio-group__options">
    <!-- radio individuais aqui -->
  </div>
  <span class="radio-group__helper">Texto auxiliar ou mensagem de erro</span>
</fieldset>
```

### Anatomia

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Input** | `<input type="radio">` nativo (visualmente oculto, acessível) | Sim |
| **Circle** | Representação visual do radio (círculo com indicador interno) | Sim |
| **Label/Text** | Texto descritivo ao lado do radio | Sim |
| **Legend** | Título do grupo (em `<fieldset>`) | Sim |
| **Helper Text** | Texto auxiliar abaixo do grupo | Não |
| **Error Message** | Substitui helper em caso de erro | Não |

### Especificações do Circle

| Propriedade | Valor |
|-------------|-------|
| Tamanho externo | 18px × 18px |
| Border-radius | `50%` (círculo perfeito) |
| Borda (default) | 2px solid `--color-gray-400` |
| Fundo (default) | `--color-white` |
| Borda (checked) | `--color-blue-500` |
| Fundo (checked) | `--color-white` |
| Indicador interno (checked) | Círculo de 8px em `--color-blue-500`, centralizado |

### Estados Visuais

| Estado | Circle Borda | Circle Fundo | Indicador | Label |
|--------|-------------|-------------|-----------|-------|
| **Default** | `--color-gray-400` | `--color-white` | — | `--color-gray-800` |
| **Hover** | `--color-blue-400` | `--color-white` | — | — |
| **Focus** | Anel de foco `--color-blue-300` (box-shadow) | — | — | — |
| **Checked** | `--color-blue-500` | `--color-white` | Círculo azul 8px | — |
| **Disabled** | `--color-gray-200` | `--color-gray-100` | cinza (se checked) | `--color-gray-400` |
| **Error (grupo)** | `--color-red-500` | — | — | — |

### Especificações de Estilo

- **Label text:** `--font-family-primary`, `--font-size-base`, `--font-weight-regular`, `--color-gray-800`.
- **Espaçamento circle ↔ label:** `--spacing-2` (8px).
- **Espaçamento entre radios no grupo:** `--spacing-3` (12px) vertical.
- **Legend (grupo):** `--font-size-sm`, `--font-weight-medium`, `--color-gray-700`. Margin-bottom: `--spacing-2`.
- **Helper/Error text:** `--font-size-xs`, mesmos estilos do Input.
- **Transição:** `--transition-fast` para mudança de estado.
- **Cursor:** `pointer` no label e circle; `not-allowed` quando disabled.

### Layout de Grupo

| Disposição | Descrição |
|------------|-----------|
| **Vertical (padrão)** | Opções empilhadas, uma abaixo da outra |
| **Horizontal** | Opções lado a lado (classe `radio-group--horizontal`), espaçamento `--spacing-4` entre itens |

---

## Comportamento

### Interação
- Clicar no circle **ou no texto da label** seleciona a opção.
- Selecionar uma opção **desmarca automaticamente** a anterior no mesmo grupo (atributo `name` compartilhado).
- Não é possível desmarcar um radio sem selecionar outro — isso é comportamento nativo e esperado.

### Navegação por Teclado
- `Tab` foca no **grupo** (no radio selecionado, ou no primeiro se nenhum está selecionado).
- `Arrow Up/Left` move para a opção anterior.
- `Arrow Down/Right` move para a próxima opção.
- `Space` seleciona a opção focada (se ainda não estiver selecionada).
- **Roving tabindex:** Apenas o radio focado/selecionado tem `tabindex="0"`, os demais têm `tabindex="-1"`.

### Validação (Grupo)
- Erro ativável via classe `radio-group--error`.
- Caso de uso: "Selecione uma opção".
- Mensagem de erro aparece abaixo do grupo.

### Acessibilidade
- `<input type="radio">` nativo é a base.
- O input fica visualmente oculto mas acessível (técnica `sr-only`).
- `<label>` conectado via `for`/`id`. **Obrigatório.**
- Todos os radios do grupo compartilham o mesmo atributo `name`.
- Grupos usam `<fieldset>` + `<legend>` para contexto semântico.
- `aria-invalid="true"` no fieldset em estado de erro.
- `aria-describedby` apontando para helper/error text.
- `aria-required="true"` quando seleção é obrigatória.

---

## Diferenças em relação ao Checkbox

| Aspecto | Checkbox | Radio |
|---------|----------|-------|
| Forma | Quadrado (border-radius: 3px) | Círculo (border-radius: 50%) |
| Seleção | Múltipla (independente) | Exclusiva (uma por grupo) |
| Indicador checked | ✓ (check mark) | ● (círculo preenchido) |
| Desmarcar | Pode desmarcar individualmente | Só desmarca selecionando outro |
| Navegação por teclado | Tab entre itens | Setas entre itens (roving tabindex) |
| Uso individual | Sim (toggle) | Não (sempre em grupo, mínimo 2) |

---

## Tokens Utilizados

| Categoria | Tokens |
|-----------|--------|
| Cores | `--color-blue-300`, `--color-blue-400`, `--color-blue-500`, `--color-red-500`, `--color-white`, `--color-gray-100`, `--color-gray-200`, `--color-gray-400`, `--color-gray-700`, `--color-gray-800` |
| Tipografia | `--font-family-primary`, `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-weight-regular`, `--font-weight-medium` |
| Espaçamento | `--spacing-1`, `--spacing-2`, `--spacing-3`, `--spacing-4` |
| Forma | `--transition-fast` |

---

## Critérios de Aceite

- [ ] Componente Radio implementado com circle customizado e label clicável.
- [ ] Estados visuais corretos: default, hover, focus, checked, disabled.
- [ ] Seleção exclusiva funciona dentro do grupo (atributo `name`).
- [ ] Grupo de radios com `<fieldset>` + `<legend>`.
- [ ] Layout vertical (padrão) e horizontal disponíveis para grupos.
- [ ] Estado de erro funcional no grupo com mensagem.
- [ ] Input nativo oculto via `sr-only`.
- [ ] Navegação por teclado funcional (Tab para grupo, setas entre opções).
- [ ] Roving tabindex implementado.
- [ ] Atributos ARIA corretos.
- [ ] Diferenciação visual clara em relação ao Checkbox (círculo vs quadrado).
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todos os estados e variantes.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Seção 2 (Princípios: Clareza, Acessibilidade)
- `sprint_2/task_5_componente_checkbox.md` — Padrões visuais compartilhados e diferenças

---

## Estimativa

**1 dia**

## Prioridade

**Alta** — Componente essencial para formulários com seleção exclusiva.

## Dependências

- Sprint 1 concluída.
- Task 5 (Checkbox) concluída — padrões visuais similares estabelecidos.
