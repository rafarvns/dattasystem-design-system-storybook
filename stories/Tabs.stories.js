import { fn } from '@storybook/test';
import { createTabs } from '../components/Tabs/Tabs';

export default {
  title: 'Componentes Compostos/Tabs',
  render: (args) => {
    return createTabs(args);
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'contained'],
      description: 'Variante visual das abas',
    },
    ariaLabel: { control: 'text', description: 'Label acessível para o grupo de abas' },
    onTabChange: { action: 'onTabChange' },
  },
  args: {
    variant: 'default',
    ariaLabel: 'Detalhes do processo',
    onTabChange: fn(),
    tabs: [
      { id: 'tab-dados', label: 'Dados Gerais', content: '<p>Conteúdo da aba Dados Gerais...</p>' },
      { id: 'tab-documentos', label: 'Documentos', content: '<p>Conteúdo da aba Documentos...</p>', badge: 3 },
      { id: 'tab-historico', label: 'Histórico', content: '<p>Conteúdo da aba Histórico...</p>' },
      { id: 'tab-parecer', label: 'Parecer', content: '<p>Conteúdo da aba Parecer...</p>', disabled: true },
    ],
  },
};

export const Default = {
  args: {},
};

export const Contained = {
  args: {
    variant: 'contained',
  },
};

const folderIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`;
const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
const clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

export const WithIcons = {
  args: {
    tabs: [
      { id: 'tab-1', label: 'Informações', icon: infoIcon, content: '<p>Conteúdo com ícone de informação.</p>' },
      { id: 'tab-2', label: 'Arquivos', icon: folderIcon, content: '<p>Conteúdo com ícone de pasta.</p>' },
      { id: 'tab-3', label: 'Linha do Tempo', icon: clockIcon, content: '<p>Conteúdo com ícone de relógio.</p>' },
    ],
  },
};

export const WithBadges = {
  args: {
    tabs: [
      { id: 'tab-a', label: 'Pendentes', badge: 5, content: '<p>Existem 5 itens pendentes.</p>' },
      { id: 'tab-b', label: 'Concluídos', badge: 12, content: '<p>Existem 12 itens concluídos.</p>' },
      { id: 'tab-c', label: 'Arquivados', badge: 0, content: '<p>Nenhum item arquivado.</p>' },
    ],
  },
};
