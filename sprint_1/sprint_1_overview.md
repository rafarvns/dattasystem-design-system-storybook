# Sprint 1 — Fundação: Setup e Design Tokens

## Visão Geral da Sprint

A Sprint 1 é a **base de toda a construção do Datta System**. Antes de criar qualquer componente visual, precisamos estabelecer a infraestrutura do projeto e traduzir o documento conceitual (`DESIGN_SYSTEM_CONCEPT.md`) em **Design Tokens concretos** — os valores técnicos que alimentarão todos os componentes futuros.

Sem essa fundação sólida, cada componente criado nas sprints seguintes seria uma decisão isolada. Os tokens garantem **coesão, consistência e escalabilidade**.

---

## Objetivos

1. **Configurar a estrutura técnica do projeto** — ferramentas, pastas, ambiente de desenvolvimento e documentação viva (Storybook).
2. **Definir todos os Design Tokens fundamentais** — cores, tipografia, espaçamentos, bordas, sombras e breakpoints.
3. **Criar os estilos globais base** — reset CSS, variáveis CSS/SCSS, configuração tipográfica e fontes.
4. **Validar a fundação na resolução-alvo** — garantir que os tokens e estilos base funcionem corretamente em 1366×768.

---

## Metas da Sprint

| # | Meta | Descrição |
|---|------|-----------|
| 1 | Projeto estruturado | Pastas organizadas, Storybook configurado e rodando, dependências instaladas |
| 2 | Tokens de cor definidos | Paleta completa com códigos hex, variáveis CSS e documentação de uso |
| 3 | Tokens tipográficos definidos | Escala de tamanhos, pesos, alturas de linha; fontes carregadas e funcionais |
| 4 | Tokens de espaçamento definidos | Escala de espaçamentos (4px base), grid system para 1366×768 |
| 5 | Tokens de forma definidos | Border-radius, sombras, bordas padronizadas |
| 6 | Estilos globais aplicados | Reset CSS, variáveis globais, tipografia base renderizando corretamente |
| 7 | Validação em 1366×768 | Todos os tokens e estilos verificados na resolução-alvo |

---

## Tarefas da Sprint

| Arquivo | Título | Prioridade |
|---------|--------|------------|
| `task_1_setup_projeto.md` | Setup do Projeto e Ferramentas | Alta |
| `task_2_tokens_cores.md` | Design Tokens — Paleta de Cores | Alta |
| `task_3_tokens_tipografia.md` | Design Tokens — Tipografia | Alta |
| `task_4_tokens_espacamento.md` | Design Tokens — Espaçamento e Grid | Alta |
| `task_5_tokens_forma.md` | Design Tokens — Bordas, Sombras e Cantos | Média |
| `task_6_estilos_globais.md` | Reset CSS e Estilos Globais Base | Alta |
| `task_7_validacao_resolucao.md` | Validação em Resolução 1366×768 | Alta |

---

## Critérios de Conclusão (Definition of Done)

A Sprint 1 estará **concluída** quando:

- [ ] O projeto está configurado com estrutura de pastas definida, dependências instaladas e Storybook rodando localmente.
- [ ] Todas as variáveis de cor estão definidas em arquivo(s) de tokens (CSS Custom Properties e/ou SCSS), com nomes semânticos e documentação de uso.
- [ ] A escala tipográfica está definida (tamanhos, pesos, alturas de linha) e as fontes (Inter, Source Sans Pro, Manrope, IBM Plex Sans) estão carregando corretamente.
- [ ] A escala de espaçamentos está definida com base em múltiplos de 4px e documentada.
- [ ] Os tokens de forma (border-radius, sombras, bordas) estão definidos e documentados.
- [ ] Existe um reset/normalize CSS aplicado globalmente e os estilos base (corpo, tipografia, cores de fundo) estão configurados.
- [ ] Todos os tokens e estilos foram testados e validados visualmente em uma viewport de 1366×768.
- [ ] Toda a documentação dos tokens está acessível via Storybook ou arquivo Markdown.

---

## Dependências

- Nenhuma — esta é a sprint inaugural.

## Duração Estimada

**2 semanas** (10 dias úteis)

---

## Contexto das 4 Sprints (Visão Macro)

| Sprint | Foco | Resumo |
|--------|------|--------|
| **Sprint 1** | 🏗️ Fundação | Setup do projeto, Design Tokens, estilos globais |
| **Sprint 2** | 🧱 Componentes Base | Botão, Input, Textarea, Select, Checkbox, Radio, Card |
| **Sprint 3** | 🏛️ Componentes Compostos | Navegação, Modal, Tabela, Alertas, Tooltip, Breadcrumb |
| **Sprint 4** | 📐 Padrões e Validação | Layouts de página, formulários completos, testes com usuários, documentação final |
