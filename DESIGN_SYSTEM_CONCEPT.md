# Datta System: Conceito e Diretrizes

## 1. Visão Geral

**Tagline:** *"Simplicidade que serve. Tecnologia que respeita."*

O Datta System é um Design System criado para dar vida a softwares governamentais que sejam modernos, coesos e performáticos. Sua personalidade é a de um **servidor público digital exemplar**: eficiente, confiável e acessível. Ele não impressiona pelo excesso, mas pela clareza — cada pixel existe com propósito, cada interação é pensada para facilitar o dia a dia de quem atende e de quem é atendido. É um sistema que transmite profissionalismo sem frieza, modernidade sem complexidade, e que respeita o tempo e o contexto de seus usuários.

---

## 2. Princípios de Design

- **1. Clareza Absoluta** – Cada elemento deve comunicar sua função de forma imediata e inequívoca. Hierarquia visual nítida, rótulos diretos e espaçamentos consistentes garantem que o usuário nunca precise adivinhar o próximo passo. Em uma tela 1366×768, não há espaço para ambiguidade.

- **2. Eficiência Respeitosa** – A interface deve reduzir o esforço cognitivo e operacional. Fluxos curtos, ações visíveis e feedback instantâneo respeitam o tempo do funcionário público e do cidadão. Menos cliques, mais resultado.

- **3. Coesão Visual** – Todos os componentes, de um simples botão a um painel complexo, compartilham a mesma linguagem visual. Consistência gera familiaridade, familiaridade gera confiança. Um sistema governamental precisa, acima de tudo, ser confiável.

- **4. Acessibilidade como Padrão** – Não é um recurso extra, é o ponto de partida. Contrastes adequados, textos legíveis, áreas de toque generosas e compatibilidade com leitores de tela são requisitos, não diferenciais. O serviço público é para todos.

- **5. Performance Consciente** – Interfaces leves, otimizadas para hardware modesto e conexões variáveis. Animações sutis e funcionais, nunca decorativas. O sistema deve funcionar tão bem em um monitor 1366×768 de uma repartição quanto em um setup moderno.

---

## 3. Paleta de Cores: Significado e Emoção

### Azul — Confiança e Institucionalidade
O azul é a cor âncora do Datta System. Representa estabilidade, seriedade e confiança — valores essenciais para softwares governamentais. Será usado como **cor primária da interface**: barras de navegação, cabeçalhos, links e elementos de orientação. Variações mais escuras transmitem autoridade; tons mais claros servem como fundos informativos e estados de destaque suave.

- **Azul Escuro:** Navegação principal, cabeçalhos, textos de destaque.
- **Azul Médio:** Botões primários, links, ícones ativos.
- **Azul Claro:** Fundos de alertas informativos, badges, estados de hover.

### Vermelho — Ação e Atenção
O vermelho é usado com intenção e moderação. Representa energia, urgência e importância. No Datta System, ele aparece em **chamadas para ação críticas**, alertas, validações de erro e elementos que exigem atenção imediata. Também pode ser usado como acento institucional, remetendo às cores da bandeira e do governo.

- **Vermelho Vivo:** Botões de ação destrutiva (excluir, cancelar), alertas de erro.
- **Vermelho Suave:** Fundos de mensagens de erro, badges de urgência.
- **Vermelho como Acento:** Detalhes institucionais, ícones de destaque pontual.

### Branco e Neutros — Respiro e Legibilidade
O branco e os tons de cinza formam a base silenciosa da interface. Criam espaço, respiro e garantem que o conteúdo seja o protagonista. Fundos brancos e cinzas claros mantêm a interface limpa e profissional; cinzas médios e escuros estruturam hierarquias e textos secundários.

- **Branco:** Fundo principal, áreas de conteúdo, espaço negativo.
- **Cinza Claro:** Fundos de cards, separadores, áreas secundárias.
- **Cinza Médio:** Textos secundários, placeholders, bordas.
- **Cinza Escuro:** Texto principal do corpo, ícones.

---

## 4. Direção Tipográfica

A tipografia do Datta System deve equilibrar **modernidade e legibilidade funcional**, considerando que será lida em monitores de resolução limitada (1366×768) durante longas jornadas de trabalho.

### Fonte Principal (UI e Corpo de Texto)
Recomenda-se uma família **sans-serif geométrica ou neo-grotesca** com excelente legibilidade em tamanhos pequenos e boa renderização em telas de baixa resolução.

- **Inter** — Projetada especificamente para telas, com altura-x generosa e formas abertas. Moderna, neutra e altamente legível. Gratuita e open-source.
- **Source Sans Pro** — Criada pela Adobe para interfaces, com personalidade profissional e acolhedora. Boa performance em tamanhos reduzidos.

### Fonte Secundária (Títulos e Destaques)
Para momentos que pedem mais presença — títulos de página, painéis de destaque — pode-se usar a mesma família em peso bold/semibold, ou uma alternativa com mais personalidade:

- **Manrope** — Geométrica moderna com caráter distinto, ideal para títulos que precisam transmitir inovação sem perder a seriedade.
- **IBM Plex Sans** — Combina rigor técnico com toque humano, alinhada ao contexto governamental/tecnológico.

### Diretrizes Gerais
- Priorizar fontes com **variantes de peso amplas** (light a bold) para criar hierarquia sem trocar de família.
- Evitar fontes decorativas, serifadas ou condensadas para textos de interface.
- Garantir que a fonte escolhida tenha **suporte completo a caracteres acentuados** do português brasileiro.

---

## 5. Mood Board Descritivo

Imagine o ambiente visual do Datta System como um **escritório público moderno e bem organizado** — não o estereótipo cinza e burocrático, mas um espaço renovado, funcional e acolhedor.

### Atmosfera Geral
- Fundos predominantemente brancos e cinza muito claro, com amplo espaço negativo.
- Toques de azul institucional que guiam o olhar sem sobrecarregar.
- Vermelho aparecendo pontualmente, como uma sinalização precisa.

### Formas e Geometria
- Cantos levemente arredondados (border-radius sutil, entre 4px e 8px) — modernidade sem infantilidade.
- Linhas retas e grids bem definidos, transmitindo ordem e organização.
- Cards com sombras suaves e discretas (elevação mínima), criando profundidade sem drama.

### Ícones
- Estilo **outline** (traço) com espessura consistente (1.5px–2px).
- Formas simples e reconhecíveis instantaneamente.
- Referências: Phosphor Icons, Lucide, Heroicons (outline).

### Fotografia e Ilustrações
- Se usadas, fotografias devem mostrar **pessoas reais em contextos de trabalho e atendimento público** — diversidade, profissionalismo, humanidade.
- Ilustrações simples e flat, com paleta restrita (azul, vermelho, cinza), para estados vazios, onboarding ou explicações.
- Evitar ilustrações excessivamente lúdicas ou infantis.

### Texturas e Padrões
- Praticamente ausentes. A interface é limpa e plana.
- Se necessário, padrões geométricos sutis em azul claro podem aparecer em headers ou áreas institucionais.

---

## 6. O Conceito em Ação

### Botão
O botão primário do Datta System possui fundo **azul médio** com texto branco, cantos levemente arredondados (6px) e padding generoso para facilitar o clique. Ao passar o mouse, o azul escurece sutilmente — um feedback discreto que confirma a interatividade sem distrair. Botões destrutivos (excluir, cancelar) usam vermelho, mas sempre acompanhados de confirmação. Botões secundários são contornados (outline) em azul, com fundo transparente, mantendo a hierarquia clara. Em todos os casos, o texto é direto e em caixa normal (não ALL CAPS), como "Salvar cadastro" ou "Buscar processo".

### Cartão de Informação
O card é um retângulo de fundo branco sobre a base cinza clara da página, com sombra mínima (quase imperceptível) e borda de 1px em cinza claro. No topo, um título em cinza escuro com peso semibold; abaixo, informações organizadas em pares rótulo-valor com espaçamento consistente. Um ícone outline em azul acompanha o título, reforçando o contexto. O card não tem excesso de informação — se o conteúdo cresce, ele se expande verticalmente de forma previsível. Em 1366×768, dois cards lado a lado cabem confortavelmente com margem adequada.

### Formulário
O formulário é vertical, com campos empilhados e labels posicionados acima dos inputs (nunca dentro como placeholder-only). Os campos têm borda cinza média, fundo branco e cantos levemente arredondados. Ao receber foco, a borda muda para azul — um indicador claro e acessível de onde o usuário está. Erros de validação aparecem abaixo do campo em vermelho suave, com um ícone pequeno e uma mensagem educativa ("Informe um CPF válido com 11 dígitos"). Campos obrigatórios são marcados com asterisco discreto. O botão de submissão fica ao final, alinhado à esquerda, seguindo o fluxo natural de leitura.

---

## 7. Tom de Voz na Interface

O Datta System fala como um **colega de trabalho experiente e solícito**: direto, respeitoso e sempre disposto a ajudar. Nunca é frio ou burocrático demais, mas também não é informal ou brincalhão.

### Diretrizes Gerais
- **Seja direto, mas humano.** Prefira "Nenhum resultado encontrado" a "Ops! Não achamos nada 😅". Prefira "Nenhum resultado encontrado" a "ERRO: QUERY RETORNOU 0 REGISTROS".
- **Use linguagem familiar ao contexto público.** "Processo", "requerimento", "protocolo" — respeite o vocabulário do usuário.
- **Evite jargão técnico.** O cidadão não precisa saber o que é um "timeout". Diga "O sistema demorou para responder. Tente novamente em alguns instantes."

### Mensagens de Erro
- Sempre explique **o que aconteceu** e **o que o usuário pode fazer**.
- Tom educativo, nunca punitivo. ❌ "CPF inválido!" → ✅ "O CPF informado não parece estar correto. Verifique se possui 11 dígitos."
- Para erros de sistema, assuma a responsabilidade: "Tivemos um problema ao processar sua solicitação" (não "Você causou um erro").

### Labels e Rótulos
- Curtos e descritivos: "Nome completo", "Data de nascimento", "Número do processo".
- Evitar abreviações obscuras. Se necessário abreviar, usar tooltip com o nome completo.

### Mensagens de Sucesso
- Confirme a ação realizada: "Cadastro salvo com sucesso" ou "Documento enviado. Protocolo: 2026.0213.001".
- Quando possível, indique o próximo passo: "Cadastro salvo. Agora você pode emitir o comprovante."

### Mensagens de Estado Vazio
- Acolhedoras e orientadoras: "Nenhum processo encontrado. Tente ajustar os filtros ou iniciar uma nova busca."
- Evitar telas completamente vazias sem contexto.

---

## 8. Próximos Passos (Sugestões)

1. **Validação com Stakeholders** — Apresente este documento conceitual para gestores, designers e desenvolvedores-chave. Colete feedback sobre os princípios, o tom de voz e a direção visual antes de avançar.

2. **Definição de Design Tokens** — Com o conceito aprovado, traduza as direções em tokens concretos: códigos hexadecimais das cores (com variações), escala tipográfica (tamanhos, pesos, alturas de linha), espaçamentos (4px, 8px, 12px, 16px...) e breakpoints.

3. **Prototipação de Componentes Base** — Crie protótipos visuais (Figma ou similar) dos componentes descritos na seção 6 (botão, card, formulário), além de inputs, tabelas, modais e navegação.

4. **Teste em Resolução-Alvo** — Valide todos os protótipos em 1366×768 desde o início. Essa restrição deve guiar decisões de layout, tamanho de fonte e densidade de informação.

5. **Documentação Técnica Viva** — Inicie a documentação do Design System em uma ferramenta acessível (Storybook, Docusaurus ou similar), conectando conceito, tokens e componentes codificados.

6. **Teste com Usuários Reais** — Antes de escalar, teste os primeiros componentes e fluxos com funcionários públicos e cidadãos reais. O feedback deles é o validador final de todos os princípios aqui definidos.

7. **Governança e Evolução** — Defina quem mantém o Design System, como contribuir com novos componentes e como versionar mudanças. Um Design System vivo precisa de donos e processos claros.
