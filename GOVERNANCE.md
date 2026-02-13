# Governança do Datta System

Este documento define como o projeto é mantido, como as decisões são tomadas e qual a política de evolução do Design System.

## Quem Mantém
O Datta System é um produto compartilhado, mas possui uma **Equipe Core** responsável por garantir a integridade do sistema:
- **Design Lead:** Responsável pela consistência visual e aprovação de novos padrões no Figma.
- **Tech Lead:** Responsável pela arquitetura do código, acessibilidade e qualidade das contribuições.
- **Maintainers:** Desenvolvedores e Designers que revisam Issues e Pull Requests.

## Processo de Mudança

### Evolução Gradual
Mudanças no Design System são tratadas com cuidado para não quebrar a experiência dos usuários nos diversos órgãos que já adotaram a ferramenta.

1. **Descoberta:** Identificação de uma necessidade não coberta pelo DS.
2. **Proposta:** Discussão aberta via Issues ou reunião de design.
3. **Draft:** Protótipo visual e especificação técnica.
4. **Implementação:** Desenvolvimento seguindo o [Guia de Contribuição](./CONTRIBUTING.md).
5. **Release:** Publicação em versão controlada (SemVer).

## Política de Releases
Para garantir estabilidade, seguimos um calendário de atualizações:
- **Atualizações de Segurança e Bugs:** Lançadas imediatamente como versões de `patch`.
- **Novos Componentes:** Lançados quinzenalmente ou mensalmente como versões `minor`.
- **Breaking Changes:** Evitadas ao máximo, mas quando necessárias (ex: mudança profunda na arquitetura de CSS), são lançadas em versões `major` com migração guiada.

## CANAL DE COMUNICAÇÃO
- **Bugs/Sugestões:** Issues do Repositório.
- **Suporte aos Times:** Canal oficial no Slack/Teams ou e-mail: designsystem@datta.gov.br.
- **Reunião de Governança:** Ocorre toda última sexta-feira do mês para revisão do Roadmap.

## Licença
Este sistema é de uso restrito e propriedade governamental, sob licença interna de código compartilhado.
