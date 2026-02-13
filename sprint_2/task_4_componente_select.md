# Task 4 — Componente Select

## Descrição

Implementar o componente **Select** (dropdown) do Datta System — campo de seleção para escolha entre opções predefinidas. Segue os mesmos padrões visuais do Input e Textarea, garantindo consistência visual em formulários.

---

## Objetivo

Criar um componente Select reutilizável com label, placeholder, helper text, estados de erro, e acessibilidade completa via teclado e leitor de tela.

---

## Requisitos

### Estrutura Visual

```
<div class="select-field">
  <label class="select-field__label" for="campo-id">
    Label do Campo <span class="select-field__required">*</span>
  </label>
  <div class="select-field__wrapper">
    <select class="select-field__select" id="campo-id">
      <option value="" disabled selected>Selecione uma opção</option>
      <option value="1">Opção 1</option>
      <option value="2">Opção 2</option>
    </select>
    <span class="select-field__arrow">▼</span>
  </div>
  <span class="select-field__helper">Texto auxiliar ou mensagem de erro</span>
</div>
```

### Anatomia

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Label** | Texto descritivo acima do campo | Sim |
| **Select** | Elemento nativo `<select>` | Sim |
| **Placeholder** | Primeira opção desabilitada ("Selecione uma opção") | Sim |
| **Seta indicadora** | Ícone chevron à direita indicando dropdown | Sim |
| **Helper Text** | Dica ou instrução abaixo do campo | Não |
| **Error Message** | Substitui helper text em caso de erro | Não |
| **Indicador de obrigatório** | Asterisco (*) ao lado da label | Não |

### Variantes

| Variante | Descrição |
|----------|-----------|
| **Single Select** | Seleção de uma única opção (padrão) |
| **Com agrupamento** | Opções organizadas em `<optgroup>` com labels de grupo |

### Tamanhos

Consistente com Input e Textarea:

| Tamanho | Altura | Font Size | Padding Interno |
|---------|--------|-----------|-----------------|
| **sm** | 32px | `--font-size-sm` | `--spacing-2` / `--spacing-3` |
| **md** | 40px | `--font-size-base` | `--spacing-2` / `--spacing-3` |
| **lg** | 48px | `--font-size-md` | `--spacing-3` / `--spacing-4` |

### Estados Visuais

| Estado | Borda | Fundo | Texto |
|--------|-------|-------|-------|
| **Default** | `--color-gray-300` | `--color-white` | `--color-gray-800` |
| **Placeholder visível** | `--color-gray-300` | `--color-white` | `--color-gray-400` |
| **Hover** | `--color-gray-400` | `--color-white` | — |
| **Focus** | `--color-blue-500` (2px) | `--color-white` | — |
| **Error** | `--color-red-500` | `--color-white` | — |
| **Disabled** | `--color-gray-200` | `--color-gray-100` | `--color-gray-400` |

### Especificações de Estilo

- **Label:** `--font-size-sm`, `--font-weight-medium`, `--color-gray-700`. Margin-bottom: `--spacing-1`.
- **Select:** `--font-family-primary`, `--font-size-base`, border-radius `--radius-md`.
- **Seta (chevron):** Ícone de 16px em `--color-gray-500`. Posicionado absolutamente à direita com `--spacing-3` de margem. Rotaciona 180° quando aberto (se customizado).
- **Aparência nativa:** Remover `appearance: none` e customizar a seta. Manter o dropdown nativo do navegador para consistência e acessibilidade.
- **Helper/Error text:** Mesmos estilos do componente Input.
- **Placeholder:** Texto da primeira opção em `--color-gray-400`, `font-style: normal`.
- **Padding direito extra:** Garantir espaço para a seta (mínimo `--spacing-8` à direita).

---

## Comportamento

### Interação
- Clicar no select abre o dropdown nativo do navegador.
- A opção selecionada aparece no campo com cor normal (`--color-gray-800`).
- Quando nenhuma opção está selecionada, o placeholder é exibido em cinza.

### Navegação por Teclado
- Focável via `Tab`.
- `Space` ou `Enter` abre o dropdown.
- `Arrow Up/Down` navega entre opções.
- `Home/End` vai para primeira/última opção.
- Digitação rápida de letras busca opção correspondente (comportamento nativo).

### Validação
- Estado de erro ativável via classe CSS (`select-field--error`).
- Mensagem de erro substitui helper text.
- Lógica de validação é responsabilidade da aplicação.

### Acessibilidade
- `<label>` conectado ao `<select>` via `for`/`id`. **Obrigatório.**
- `aria-invalid="true"` em estado de erro.
- `aria-describedby` apontando para helper/error text.
- `aria-required="true"` para campos obrigatórios.
- Manter o dropdown **nativo** do navegador — não substituir por dropdown customizado. O select nativo é mais acessível e funciona melhor com leitores de tela.
- `<optgroup label="...">` para opções agrupadas.

---

## Tokens Utilizados

| Categoria | Tokens |
|-----------|--------|
| Cores | `--color-blue-500`, `--color-red-500`, `--color-white`, `--color-gray-100`, `--color-gray-200`, `--color-gray-300`, `--color-gray-400`, `--color-gray-500`, `--color-gray-700`, `--color-gray-800` |
| Tipografia | `--font-family-primary`, `--font-size-sm`, `--font-size-base`, `--font-size-md`, `--font-weight-regular`, `--font-weight-medium` |
| Espaçamento | `--spacing-1`, `--spacing-2`, `--spacing-3`, `--spacing-4`, `--spacing-8` |
| Forma | `--radius-md`, `--transition-fast` |

---

## Critérios de Aceite

- [ ] Componente Select implementado com label, placeholder, helper text e error message.
- [ ] Label sempre visível acima do campo.
- [ ] 3 tamanhos disponíveis (sm, md, lg).
- [ ] Todos os estados visuais funcionam: default, placeholder, hover, focus, error, disabled.
- [ ] Borda muda para azul no foco.
- [ ] Seta/chevron customizada visível à direita.
- [ ] Suporte a `<optgroup>` para opções agrupadas.
- [ ] Placeholder ("Selecione uma opção") exibido em cinza quando nenhuma opção está selecionada.
- [ ] Mensagens de erro em vermelho substituindo helper text.
- [ ] Dropdown nativo do navegador mantido (não customizado).
- [ ] Atributos ARIA corretos: `aria-invalid`, `aria-describedby`, `aria-required`.
- [ ] `<label>` conectado via `for`/`id`.
- [ ] Navegação por teclado funcional (Tab, Space, Enter, setas).
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todos os estados e variantes.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Seção 6 (Formulário)
- `sprint_2/task_2_componente_input.md` — Padrões visuais compartilhados

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta** — Componente essencial para formulários com campos de seleção.

## Dependências

- Sprint 1 concluída.
- Task 2 (Input) concluída — reutiliza padrões visuais e de acessibilidade.
