# Task 6 — Testes de Usabilidade com Usuários

## Descrição

Planejar e executar **testes de usabilidade** do Datta System com usuários reais — funcionários públicos e cidadãos — para validar que os componentes, padrões de página e fluxos atendem às necessidades do contexto governamental. Este é o validador final de todos os princípios definidos no `DESIGN_SYSTEM_CONCEPT.md`.

---

## Objetivo

Conduzir testes de usabilidade estruturados que identifiquem problemas de interface, gerem achados acionáveis e resultem em correções aplicadas antes da release v1.0.

---

## Requisitos

### 1. Planejamento dos Testes

#### 1.1 Perfis de Participantes

| Perfil | Quantidade | Descrição | Critérios de Recrutamento |
|--------|-----------|-----------|---------------------------|
| **Funcionário público (atendimento)** | 2–3 | Atendentes de balcão, secretarias, cartórios | Usa sistemas internos diariamente; monitor ≤ 1366×768 |
| **Funcionário público (gestão)** | 1–2 | Coordenadores, supervisores | Usa sistemas para relatórios e aprovações |
| **Cidadão (perfil digital)** | 1–2 | Pessoa com facilidade tecnológica | Usa serviços online regularmente |
| **Cidadão (perfil básico)** | 1–2 | Pessoa com pouca familiaridade digital | Acesso limitado à tecnologia |

**Total mínimo: 5 participantes** | **Ideal: 8 participantes**

#### 1.2 Ambiente de Teste

| Item | Especificação |
|------|--------------|
| **Monitor** | 1366×768 (resolução-alvo do Design System) |
| **Navegador** | Chrome ou Edge (últimas versões) |
| **Dispositivos assistivos** | Leitor de tela (NVDA ou JAWS) disponível para 1–2 sessões |
| **Local** | Sala silenciosa ou videoconferência com compartilhamento de tela |
| **Gravação** | Tela + áudio (com consentimento do participante) |
| **Duração** | 45–60 minutos por sessão |

#### 1.3 Materiais Necessários

- [ ] Termo de consentimento para gravação e uso dos dados.
- [ ] Roteiro de tarefas (detalhado abaixo).
- [ ] Protótipo funcional no Storybook com dados mockados.
- [ ] Formulário de observação para o facilitador.
- [ ] Questionário pós-teste (SUS — System Usability Scale).
- [ ] Planilha de registro de achados.

---

### 2. Roteiro de Tarefas

#### Cenário: Sistema de Cadastro de Cidadãos

Os participantes executarão tarefas em um protótipo funcional que simula um sistema real de cadastro, utilizando os padrões de página implementados nas Tasks 1–4 desta sprint.

#### Tarefa 1 — Navegação e Orientação (5 min)
**Objetivo:** Validar layout shell, navbar, sidebar e breadcrumb.

> *"Você acabou de fazer login no sistema. Precisa encontrar a seção de Cadastro de Pessoas. Navegue até lá."*

**Observar:**
- O participante identifica onde clicar na sidebar?
- Usa a navbar ou a sidebar para navegar?
- Entende o breadcrumb como indicador de localização?
- Consegue colapsar/expandir a sidebar?

**Métricas:**
- Tempo até encontrar a seção.
- Número de cliques/tentativas.
- Erros de navegação.

#### Tarefa 2 — Preencher Formulário (10 min)
**Objetivo:** Validar padrão de formulário completo, validação e feedback.

> *"Cadastre uma nova pessoa no sistema com os dados que vou fornecer."*
> (Fornecer dados com 1 CPF inválido propositalmente)

**Observar:**
- O participante entende os campos obrigatórios?
- Reage ao erro de validação do CPF? Entende a mensagem?
- Completa o formulário sem assistência?
- Entende o feedback de sucesso após submissão?

**Métricas:**
- Tempo de preenchimento.
- Erros de preenchimento.
- Reação à mensagem de erro (leu? entendeu? corrigiu?).

#### Tarefa 3 — Buscar e Filtrar na Listagem (5 min)
**Objetivo:** Validar padrão de página de listagem, filtros e paginação.

> *"Encontre o cadastro de 'Maria Santos' na lista. Se necessário, use os filtros."*

**Observar:**
- O participante identifica a barra de filtros?
- Consegue aplicar e limpar filtros?
- Entende a paginação?
- Identifica a contagem de resultados?

**Métricas:**
- Tempo até encontrar o registro.
- Uso correto dos filtros (sim/não).
- Navegação entre páginas.

#### Tarefa 4 — Ações na Tabela (5 min)
**Objetivo:** Validar ações por linha, seleção e confirmação de exclusão.

> *"Visualize os detalhes do cadastro de Maria Santos. Depois, exclua o cadastro de Pedro Oliveira."*

**Observar:**
- O participante encontra os botões de ação na tabela?
- Entende os ícones (visualizar, editar, excluir)?
- Reage ao modal de confirmação de exclusão?
- Lê a mensagem de confirmação?

**Métricas:**
- Identificação dos ícones (sem explicação).
- Reação ao modal de confirmação.
- Sucesso na tarefa.

#### Tarefa 5 — Reação a Estados (3 min)
**Objetivo:** Validar empty states, loading e mensagens de erro.

> *"Faça uma busca por 'XYZABC123' no filtro de nome."* (Resultado: empty state)
> *"O sistema vai simular uma demora no carregamento."* (Resultado: loading/skeleton)

**Observar:**
- O participante entende o empty state? Sabe o que fazer?
- O loading/skeleton tranquiliza ou confunde?
- Lê a mensagem de orientação do empty state?

#### Tarefa 6 — Acessibilidade por Teclado (5 min) — Apenas com 1–2 participantes
**Objetivo:** Validar navegação por teclado em todos os padrões.

> *"Sem usar o mouse, tente navegar pelo menu, preencher um campo e submeter o formulário."*

**Observar:**
- Consegue navegar entre sidebar, conteúdo e formulário com Tab?
- O foco é sempre visível?
- Consegue abrir/fechar submenus e modais com teclado?

---

### 3. Questionário Pós-Teste (SUS)

Após as tarefas, aplicar o **System Usability Scale** (10 perguntas, escala 1–5):

1. Eu acho que gostaria de usar este sistema com frequência.
2. Eu achei o sistema desnecessariamente complexo.
3. Eu achei o sistema fácil de usar.
4. Eu acho que precisaria do apoio de uma pessoa técnica para usar este sistema.
5. Eu achei que as várias funções do sistema estavam bem integradas.
6. Eu achei que havia muita inconsistência neste sistema.
7. Eu imagino que a maioria das pessoas aprenderia a usar este sistema rapidamente.
8. Eu achei o sistema muito complicado de usar.
9. Eu me senti muito confiante usando o sistema.
10. Eu precisei aprender muitas coisas antes de conseguir usar o sistema.

**Score alvo: ≥ 75 pontos** (acima da média = bom) | **Ideal: ≥ 85** (excelente)

---

### 4. Perguntas Abertas (Pós-Teste)

1. "O que mais chamou sua atenção (positiva ou negativamente) na interface?"
2. "Houve algum momento em que você ficou confuso ou não sabia o que fazer?"
3. "As mensagens de erro e orientação foram claras?"
4. "Comparando com o sistema que você usa hoje no trabalho, o que é melhor e o que é pior?"
5. "Tem algo que você mudaria na interface?"

---

### 5. Registro e Análise de Achados

#### 5.1 Template de Registro

| # | Tarefa | Participante | Achado | Severidade | Tipo | Ação Proposta |
|---|--------|-------------|--------|-----------|------|---------------|
| 1 | T2 | P1, P3 | Mensagem de erro do CPF não foi lida; participantes tentaram resubmeter | Alta | Usabilidade | Destacar erro com cor + ícone + scroll automático |
| 2 | T1 | P2 | Não encontrou a sidebar colapsada; não sabia que podia expandir | Média | Descobribilidade | Adicionar tooltip no toggle da sidebar |
| 3 | T4 | P1, P4, P5 | Ícone de "visualizar" (👁) confundido com "editar" | Média | Ícones | Testar ícones alternativos ou adicionar tooltip |

#### 5.2 Classificação de Severidade

| Severidade | Definição | Ação |
|-----------|-----------|------|
| **Crítica** | Impede a conclusão da tarefa | Corrigir antes da release v1.0 |
| **Alta** | Causa confusão significativa ou atraso considerável | Corrigir antes da release v1.0 |
| **Média** | Causa desconforto mas não impede a tarefa | Corrigir se possível; documentar se não |
| **Baixa** | Sugestão de melhoria cosmética ou preferência pessoal | Backlog para versão futura |

#### 5.3 Relatório de Usabilidade

O relatório final deve conter:

```markdown
# Relatório de Testes de Usabilidade — Datta System v1.0

## Resumo Executivo
- Total de participantes: X
- Score SUS médio: XX pontos
- Achados críticos: X | Altos: X | Médios: X | Baixos: X

## Metodologia
- Perfis de participantes
- Ambiente de teste
- Tarefas executadas

## Achados por Severidade

### Críticos
(lista)

### Altos
(lista)

### Médios
(lista)

### Baixos
(lista)

## Métricas de Tarefas
| Tarefa | Taxa de Sucesso | Tempo Médio | Erros Médios |
|--------|----------------|-------------|-------------|

## Score SUS
- Média: XX
- Mínimo: XX
- Máximo: XX

## Correções Aplicadas
(lista do que foi corrigido durante a sprint)

## Itens para Backlog
(lista do que será corrigido em versões futuras)

## Conclusão e Recomendações
```

---

### 6. Correções Pós-Teste

#### Processo

```
1. Consolidar todos os achados no template de registro
2. Classificar severidade (Crítica, Alta, Média, Baixa)
3. Priorizar correções:
   - Crítica + Alta → Corrigir imediatamente (sprint atual)
   - Média → Avaliar esforço; corrigir se < 2h cada
   - Baixa → Adicionar ao backlog
4. Implementar correções
5. Validar correções (se possível, com 1 participante)
6. Documentar todas as mudanças no relatório
```

#### Estimativa de Correções
- **Reserva de 0.5 dia** para correções críticas e altas.
- Correções médias e baixas entram no backlog se excederem a reserva.

---

## Cronograma de Execução

| Dia | Atividade |
|-----|-----------|
| **Dia 1 (manhã)** | Preparação: roteiro, protótipo, recrutamento final |
| **Dia 1 (tarde)** | Sessões 1–3 (45min cada + 15min intervalo) |
| **Dia 2 (manhã)** | Sessões 4–5 (ou 4–8 se 8 participantes) |
| **Dia 2 (tarde)** | Análise de achados, classificação, relatório |
| **Dia 2 (fim)** | Implementação de correções críticas/altas |

---

## Critérios de Aceite

- [ ] Mínimo de 5 participantes testados (incluindo pelo menos 1 de cada perfil definido).
- [ ] Roteiro de 6 tarefas executado com todos os participantes.
- [ ] Questionário SUS aplicado e score calculado.
- [ ] Perguntas abertas realizadas e respostas registradas.
- [ ] Todos os achados registrados no template com severidade classificada.
- [ ] Score SUS médio ≥ 75 pontos.
- [ ] Relatório de usabilidade completo e entregue.
- [ ] Todas as correções de severidade **Crítica** implementadas.
- [ ] Todas as correções de severidade **Alta** implementadas (ou justificativa documentada).
- [ ] Itens **Médios** e **Baixos** não corrigidos adicionados ao backlog.
- [ ] Pelo menos 1 sessão incluiu navegação por teclado (Tarefa 6).
- [ ] Termo de consentimento assinado por todos os participantes.
- [ ] Gravações salvas e organizadas por participante.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 8 (Teste com Usuários Reais)
- [System Usability Scale (SUS)](https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html)
- [Nielsen Norman Group — Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/)
- [Sprint 4 — Task 1 (Layout)](task_1_layout_pagina.md) — Protótipo de teste
- [Sprint 4 — Task 2 (Formulário)](task_2_formulario_completo.md) — Protótipo de teste
- [Sprint 4 — Task 3 (Listagem)](task_3_pagina_listagem.md) — Protótipo de teste

---

## Estimativa

**2 dias** (1 dia de testes + 1 dia de análise e correções)

## Prioridade

**Alta** — Validação com usuários reais é o validador final do Design System.

## Dependências

- Sprint 4 — Tasks 1–4 concluídas (layout, formulário, listagem, estados de página).
- Protótipo funcional no Storybook com dados mockados.
- Participantes recrutados e agendados.
