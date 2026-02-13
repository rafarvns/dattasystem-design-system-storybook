# Sprint 2 — Componentes Base: Os Blocos Fundamentais

## Visão Geral da Sprint

A Sprint 2 transforma os **Design Tokens definidos na Sprint 1** em componentes visuais concretos e reutilizáveis. Estes são os blocos fundamentais do Datta System — os elementos atômicos que serão combinados em todas as interfaces futuras.

Cada componente será construído consumindo exclusivamente os tokens (cores, tipografia, espaçamentos, bordas, sombras) já estabelecidos, garantindo **coesão automática** e facilitando futuras atualizações globais.

O foco desta sprint é entregar componentes **acessíveis, responsivos à resolução 1366×768 e documentados no Storybook**.

---

## Objetivos

1. **Implementar os 7 componentes base do Design System** — Button, Input, Textarea, Select, Checkbox, Radio e Card.
2. **Garantir todos os estados visuais** — default, hover, focus, active, disabled e error (quando aplicável).
3. **Assegurar acessibilidade (WCAG AA)** — contrastes, labels, navegação por teclado, atributos ARIA.
4. **Documentar cada componente no Storybook** — com variantes, estados, props e diretrizes de uso.
5. **Validar todos os componentes em 1366×768** — tamanhos, espaçamentos e legibilidade na resolução-alvo.

---

## Metas da Sprint

| # | Meta | Descrição |
|---|------|-----------|
| 1 | Componente Button funcional | Variantes primary, secondary, destructive e ghost; tamanhos sm, md, lg; todos os estados; ícone opcional |
| 2 | Componente Input funcional | Text input com label, placeholder, helper text, estados de erro e disabled |
| 3 | Componente Textarea funcional | Campo de texto multilinha com contagem de caracteres opcional e mesmos estados do Input |
| 4 | Componente Select funcional | Dropdown com label, placeholder, opções, estados de erro e disabled |
| 5 | Componente Checkbox funcional | Checkbox com label, estados checked, indeterminate, disabled; suporte a grupo |
| 6 | Componente Radio funcional | Radio button com label, estados checked e disabled; suporte a grupo |
| 7 | Componente Card funcional | Card de informação com header, body e footer opcionais; variantes com/sem ícone |
| 8 | Storybook completo | Todos os 7 componentes documentados com stories, variantes e guia de uso |

---

## Tarefas da Sprint

| Arquivo | Título | Prioridade | Estimativa |
|---------|--------|------------|------------|
| `task_1_componente_botao.md` | Componente Button | Alta | 2 dias |
| `task_2_componente_input.md` | Componente Input | Alta | 1.5 dias |
| `task_3_componente_textarea.md` | Componente Textarea | Alta | 1 dia |
| `task_4_componente_select.md` | Componente Select | Alta | 1.5 dias |
| `task_5_componente_checkbox.md` | Componente Checkbox | Alta | 1 dia |
| `task_6_componente_radio.md` | Componente Radio | Alta | 1 dia |
| `task_7_componente_card.md` | Componente Card de Informação | Alta | 1.5 dias |
| `task_8_documentacao_storybook.md` | Documentação e Validação no Storybook | Média | 1.5 dias |

**Estimativa total: 11 dias úteis (~2 semanas)**

---

## Critérios de Conclusão (Definition of Done)

A Sprint 2 estará **concluída** quando:

- [ ] Os 7 componentes (Button, Input, Textarea, Select, Checkbox, Radio, Card) estão implementados e funcionais.
- [ ] Cada componente consome exclusivamente Design Tokens da Sprint 1 (nenhum valor hardcoded de cor, tamanho ou espaçamento).
- [ ] Todos os estados visuais (default, hover, focus, active, disabled, error) estão implementados e visualmente corretos.
- [ ] Cada componente é navegável por teclado (Tab, Enter, Space, Arrow keys conforme aplicável).
- [ ] Contrastes de cor atendem WCAG AA (mínimo 4.5:1 para texto, 3:1 para elementos gráficos).
- [ ] Cada componente possui label acessível (`<label>`, `aria-label` ou `aria-labelledby`).
- [ ] Todos os componentes renderizam corretamente em viewport 1366×768.
- [ ] Cada componente tem stories no Storybook cobrindo todas as variantes e estados.
- [ ] A documentação no Storybook inclui guia de uso (quando usar, quando não usar, props disponíveis).

---

## Dependências

- **Sprint 1 concluída** — Tokens de cores, tipografia, espaçamento, bordas/sombras e estilos globais devem estar definidos e acessíveis.

## Duração Estimada

**2 semanas** (11 dias úteis)

---

## Contexto das 4 Sprints (Visão Macro)

| Sprint | Foco | Resumo | Status |
|--------|------|--------|--------|
| **Sprint 1** | 🏗️ Fundação | Setup do projeto, Design Tokens, estilos globais | ✅ Concluída |
| **Sprint 2** | 🧱 Componentes Base | Botão, Input, Textarea, Select, Checkbox, Radio, Card | 🔄 Atual |
| **Sprint 3** | 🏛️ Componentes Compostos | Navegação, Modal, Tabela, Alertas, Tooltip, Breadcrumb | ⏳ Próxima |
| **Sprint 4** | 📐 Padrões e Validação | Layouts de página, formulários completos, testes com usuários, documentação final | ⏳ Futura |
