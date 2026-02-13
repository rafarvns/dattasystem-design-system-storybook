# Task 2 — Componente Input

## Descrição

Implementar o componente **Input** (campo de texto) do Datta System. É o elemento de formulário mais utilizado e deve seguir as diretrizes do conceito: labels acima dos campos, borda que muda para azul ao receber foco, e mensagens de erro educativas em vermelho.

> **Referência conceitual:** *"Os campos têm borda cinza média, fundo branco e cantos levemente arredondados. Ao receber foco, a borda muda para azul — um indicador claro e acessível de onde o usuário está."* — DESIGN_SYSTEM_CONCEPT.md, seção 6.

---

## Objetivo

Criar um componente Input reutilizável com label, helper text, estados de erro e validação visual, consumindo exclusivamente Design Tokens e sendo acessível via teclado e leitor de tela.

---

## Requisitos

### Estrutura Visual

O componente Input é composto por até 5 elementos:

```
<div class="input-field">
  <label class="input-field__label" for="campo-id">
    Label do Campo <span class="input-field__required">*</span>
  </label>
  <div class="input-field__wrapper">
    [<span class="input-field__icon input-field__icon--left">ícone</span>]
    <input class="input-field__input" type="text" id="campo-id" placeholder="..." />
    [<span class="input-field__icon input-field__icon--right">ícone</span>]
  </div>
  <span class="input-field__helper">Texto auxiliar ou mensagem de erro</span>
</div>
```

### Anatomia

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Label** | Texto descritivo acima do campo. Sempre visível, nunca substituído pelo placeholder | Sim |
| **Input** | Campo de entrada nativo `<input>` | Sim |
| **Placeholder** | Texto de exemplo dentro do campo, em cinza médio. Desaparece ao digitar | Não |
| **Helper Text** | Texto auxiliar abaixo do campo (dica ou instrução) | Não |
| **Error Message** | Substitui o helper text quando há erro. Inclui ícone de alerta | Não |
| **Ícone** | Posicionado à esquerda ou direita dentro do campo | Não |
| **Indicador de obrigatório** | Asterisco (*) ao lado da label | Não |

### Tipos de Input Suportados

| Tipo | `type=""` | Observação |
|------|-----------|------------|
| Texto | `text` | Padrão |
| Email | `email` | Validação nativa do navegador |
| Senha | `password` | Com botão toggle para mostrar/ocultar |
| Número | `number` | Com setas nativas ou customizadas |
| Busca | `search` | Com ícone de lupa à esquerda |
| Telefone | `tel` | Máscara opcional |

### Tamanhos

| Tamanho | Altura do Input | Font Size | Padding Interno |
|---------|----------------|-----------|-----------------|
| **sm** | 32px | `--font-size-sm` | `--spacing-2` / `--spacing-3` |
| **md** | 40px | `--font-size-base` | `--spacing-2` / `--spacing-3` |
| **lg** | 48px | `--font-size-md` | `--spacing-3` / `--spacing-4` |

### Estados Visuais

| Estado | Borda | Fundo | Label | Helper/Error |
|--------|-------|-------|-------|--------------|
| **Default** | `--color-gray-300` | `--color-white` | `--color-gray-700` | `--color-gray-500` (helper) |
| **Hover** | `--color-gray-400` | `--color-white` | — | — |
| **Focus** | `--color-blue-500` (2px) | `--color-white` | — | — |
| **Filled** | `--color-gray-300` | `--color-white` | — | — |
| **Error** | `--color-red-500` | `--color-white` | — | `--color-red-500` + ícone |
| **Disabled** | `--color-gray-200` | `--color-gray-100` | `--color-gray-400` | `--color-gray-400` |
| **Read-only** | `--color-gray-200` | `--color-gray-50` | — | — |

### Especificações de Estilo

- **Label:** `--font-size-sm`, `--font-weight-medium`, `--color-gray-700`. Margin-bottom: `--spacing-1`.
- **Input:** `--font-size-base`, `--font-weight-regular`, border-radius `--radius-md`.
- **Placeholder:** `--color-gray-400`, mesmo font-size do input.
- **Helper text:** `--font-size-xs`, `--color-gray-500`. Margin-top: `--spacing-1`.
- **Error text:** `--font-size-xs`, `--color-red-500`, `--font-weight-medium`. Com ícone de 14px à esquerda.
- **Asterisco obrigatório:** `--color-red-500`, sem tooltip (o asterisco é convenção conhecida).

---

## Comportamento

### Navegação por Teclado
- Focável via `Tab`.
- `Tab` move para o próximo campo; `Shift+Tab` volta.
- Em campos de senha, o botão toggle de visibilidade é focável separadamente.

### Validação
- A validação visual (estado de erro) deve ser ativável via classe CSS (`input-field--error`).
- A mensagem de erro substitui o helper text (não empilha).
- A validação pode ocorrer `onBlur` ou em tempo real — a lógica de quando validar é responsabilidade da aplicação, não do componente.

### Acessibilidade
- `<label>` conectado ao `<input>` via `for`/`id`. **Obrigatório.**
- Campos com erro: `aria-invalid="true"` e `aria-describedby` apontando para a mensagem de erro.
- Campos obrigatórios: `aria-required="true"` (além do asterisco visual).
- Campos disabled: atributo `disabled` nativo.
- Campos read-only: atributo `readonly` nativo.
- Ícones dentro do campo são decorativos (`aria-hidden="true"`).

---

## Tokens Utilizados

| Categoria | Tokens |
|-----------|--------|
| Cores | `--color-blue-500`, `--color-red-500`, `--color-white`, `--color-gray-50`, `--color-gray-100`, `--color-gray-200`, `--color-gray-300`, `--color-gray-400`, `--color-gray-500`, `--color-gray-700` |
| Tipografia | `--font-family-primary`, `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-size-md`, `--font-weight-regular`, `--font-weight-medium` |
| Espaçamento | `--spacing-1`, `--spacing-2`, `--spacing-3`, `--spacing-4` |
| Forma | `--radius-md`, `--transition-fast` |

---

## Critérios de Aceite

- [ ] Componente Input implementado com label, placeholder, helper text e error message.
- [ ] Label sempre visível acima do campo (nunca como placeholder-only).
- [ ] 3 tamanhos disponíveis (sm, md, lg).
- [ ] Todos os estados visuais funcionam: default, hover, focus, filled, error, disabled, read-only.
- [ ] Borda muda para azul no foco conforme conceito.
- [ ] Mensagens de erro em vermelho com ícone, substituindo o helper text.
- [ ] Suporte a ícone à esquerda e/ou à direita.
- [ ] Campo de senha com toggle de visibilidade.
- [ ] Asterisco de campo obrigatório funcional.
- [ ] Atributos ARIA corretos: `aria-invalid`, `aria-describedby`, `aria-required`.
- [ ] `<label>` conectado via `for`/`id`.
- [ ] Navegação por teclado funcional.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todos os estados e variantes.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Seção 6 (Formulário)
- `sprint_1/task_2_tokens_cores.md` — Paleta de cores
- `sprint_1/task_3_tokens_tipografia.md` — Escala tipográfica
- `sprint_1/task_4_tokens_espacamento.md` — Espaçamentos
- `sprint_1/task_5_tokens_forma.md` — Border-radius e transições

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta** — Componente essencial para todos os formulários do sistema.

## Dependências

- Sprint 1 concluída.
- Task 1 (Button) concluída — para reutilizar padrões de estados e classes.
