# Changelog

Todas as alterações notáveis no **Datta System** serão documentadas neste arquivo. O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-02-13 — Release Inicial "Fundação e Estrutura"

Esta é a primeira release oficial do Datta System, contemplando toda a base visual, componentes essenciais e padrões de página para sistemas complexos.

### 🏗️ Fundação (Design Tokens)
- **Cores:** Implementação da paleta institucional (Azul Datta), sinalização (Feedback) e Neutros equilibrados.
- **Tipografia:** Definida hierarquia usando **Inter** e **Manrope**.
- **Espaçamento:** Escala baseada em 4px para máxima precisão de layout.
- **Formas:** Sistema de bordas, raios e sombras estruturadas.

### 🧱 Componentes Base
- **Button:** Botões com 4 variantes, 3 tamanhos e suporte a ícones.
- **Input & Textarea:** Campos de texto com validação visual (sucesso/erro).
- **Select, Checkbox & Radio:** Seletores nativos estilizados.
- **Card:** Container estrutural para informações e dados.

### 🏛️ Componentes Compostos
- **Navbar:** Navegação superior completa com busca e menu de usuário.
- **Modal:** Diálogos com controle de foco e overlay de proteção.
- **Table:** Tabelas robustas com cabeçalho fixo e ordenação.
- **Alert:** Sistema de feedback de ações persistentes ou dismissíveis.
- **Breadcrumb, Tabs & Pagination:** Componentes essenciais de navegação estrutural.
- **Tooltip:** Auxiliares de informação contextual.

### 📐 Padrões de Página
- **Layout Shell:** Arquitetura central da aplicação com sidebar colapsável.
- **Formulário de Cadastro:** Padrão de grid e fluxo para entrada de dados densa.
- **Página de Listagem:** Padrão oficial para buscas, filtros e gestão de itens.
- **Estados de Página:** Sistema completo de Empty States, Páginas de Erro e Skeletons/Loading.

### 🎨 Tematização
- Estrutura em camadas que permite a adoção por múltiplos órgãos (Secretaria de Saúde, Tribunal de Justiça, etc.) apenas trocando variáveis CSS.

### ♿ Acessibilidade
- Conformidade total com **WCAG 2.1 AA** em todos os componentes.
- Navegação por teclado testada e validada.
- Suporte nativo a leitores de tela via atributos ARIA.

### 📖 Documentação
- Estacionamento completo no Storybook v1.0.
- Guia de Início Rápido, Contribuição e Governança incluídos.
