# Sprint 3 — Componentes Compostos: Estrutura e Interação

## Visão Geral da Sprint

A Sprint 3 eleva o Datta System ao nível de **composição e interação avançada**. Com os Design Tokens (Sprint 1) e os componentes atômicos (Sprint 2) já estabelecidos, esta sprint foca em construir os **componentes compostos** — aqueles que combinam múltiplos elementos base para criar estruturas mais complexas de interface.

Estes componentes são os responsáveis pela **navegação, organização de dados, feedback ao usuário e orientação contextual** dentro das aplicações governamentais. Sem eles, os componentes base seriam blocos isolados; com eles, formam interfaces completas e funcionais.

O foco permanece em **acessibilidade (WCAG AA), performance em 1366×768 e documentação completa no Storybook**.

---

## Objetivos

1. **Implementar 8 componentes compostos do Design System** — Navbar, Modal, Table, Alert, Tooltip, Breadcrumb, Tabs e Pagination.
2. **Garantir composição correta com componentes base** — cada componente composto deve reutilizar Button, Input, Card e outros da Sprint 2.
3. **Implementar padrões de interação avançados** — navegação por teclado complexa, gerenciamento de foco, trapping de foco em modais, ARIA roles e live regions.
4. **Documentar cada componente no Storybook** — com variantes, estados, exemplos de composição e diretrizes de uso.
5. **Validar todos os componentes em 1366×768** — garantir que tabelas, modais e navegação funcionem na resolução-alvo.

---

## Metas da Sprint

| # | Meta | Descrição |
|---|------|-----------|
| 1 | Componente Navbar funcional | Barra de navegação principal com logo, menu, busca e ações do usuário |
| 2 | Componente Modal funcional | Dialog modal com header/body/footer, focus trap, fechamento por Esc e overlay |
| 3 | Componente Table funcional | Tabela de dados com ordenação, cabeçalho fixo, responsividade horizontal e zebra striping |
| 4 | Componente Alert funcional | Alertas de feedback com 4 variantes (info, success, warning, error), dismissível |
| 5 | Componente Tooltip funcional | Tooltip informativo com 4 posições, trigger por hover/focus, delay configurável |
| 6 | Componente Breadcrumb funcional | Trilha de navegação com separadores, item atual não-clicável, truncamento |
| 7 | Componente Tabs funcional | Abas de conteúdo com navegação por setas, ativação manual, painel associado |
| 8 | Componente Pagination funcional | Paginação de dados com navegação por páginas, anterior/próximo, indicador de página atual |
| 9 | Storybook completo | Todos os 8 componentes documentados com stories, variantes e guia de uso |

---

## Tarefas da Sprint

| Arquivo | Título | Prioridade | Estimativa |
|---------|--------|------------|------------|
| `task_1_componente_navbar.md` | Componente Navbar (Navegação Principal) | Alta | 2 dias |
| `task_2_componente_modal.md` | Componente Modal / Dialog | Alta | 2 dias |
| `task_3_componente_tabela.md` | Componente Table (Tabela de Dados) | Alta | 2.5 dias |
| `task_4_componente_alert.md` | Componente Alert (Alertas e Feedback) | Alta | 1 dia |
| `task_5_componente_tooltip.md` | Componente Tooltip | Média | 1 dia |
| `task_6_componente_breadcrumb.md` | Componente Breadcrumb | Média | 0.5 dia |
| `task_7_componente_tabs.md` | Componente Tabs (Abas) | Alta | 1.5 dias |
| `task_8_componente_paginacao.md` | Componente Pagination (Paginação) | Alta | 1 dia |
| `task_9_documentacao_storybook.md` | Documentação e Validação no Storybook | Média | 1.5 dias |

**Estimativa total: 13 dias úteis (~2.5 semanas)**

---

## Critérios de Conclusão (Definition of Done)

A Sprint 3 estará **concluída** quando:

- [ ] Os 8 componentes compostos (Navbar, Modal, Table, Alert, Tooltip, Breadcrumb, Tabs, Pagination) estão implementados e funcionais.
- [ ] Cada componente composto reutiliza componentes base da Sprint 2 (Button, Input, etc.) quando aplicável.
- [ ] Cada componente consome exclusivamente Design Tokens da Sprint 1 (nenhum valor hardcoded).
- [ ] Todos os estados visuais e de interação estão implementados conforme especificado em cada task.
- [ ] O Modal implementa focus trap corretamente (foco não escapa para fora do modal).
- [ ] A Table funciona com scroll horizontal em 1366×768 quando necessário.
- [ ] Cada componente é totalmente navegável por teclado (Tab, Enter, Escape, Arrow keys conforme aplicável).
- [ ] Contrastes de cor atendem WCAG AA (mínimo 4.5:1 para texto, 3:1 para elementos gráficos).
- [ ] Atributos ARIA adequados estão implementados (`role`, `aria-label`, `aria-expanded`, `aria-live`, etc.).
- [ ] Todos os componentes renderizam corretamente em viewport 1366×768.
- [ ] Cada componente tem stories no Storybook cobrindo todas as variantes e estados.
- [ ] A documentação no Storybook inclui guia de uso, exemplos de composição e boas práticas.

---

## Dependências

- **Sprint 1 concluída** — Tokens de cores, tipografia, espaçamento, bordas/sombras e estilos globais.
- **Sprint 2 concluída** — Componentes base (Button, Input, Card, etc.) implementados e disponíveis para composição.

## Duração Estimada

**2.5 semanas** (13 dias úteis)

---

## Contexto das 4 Sprints (Visão Macro)

| Sprint | Foco | Resumo | Status |
|--------|------|--------|--------|
| **Sprint 1** | 🏗️ Fundação | Setup do projeto, Design Tokens, estilos globais | ✅ Concluída |
| **Sprint 2** | 🧱 Componentes Base | Botão, Input, Textarea, Select, Checkbox, Radio, Card | ✅ Concluída |
| **Sprint 3** | 🏛️ Componentes Compostos | Navbar, Modal, Tabela, Alert, Tooltip, Breadcrumb, Tabs, Pagination | 🔄 Atual |
| **Sprint 4** | 📐 Padrões e Validação | Layouts de página, formulários completos, testes com usuários, documentação final | ⏳ Próxima |
