import { createBreadcrumb } from '../components/Breadcrumb/Breadcrumb';

export default {
  title: 'componentes compostos/Breadcrumb',
  render: (args) => {
    return createBreadcrumb(args);
  },
  argTypes: {
    separator: { control: 'text', description: 'Caractere separador' },
    maxLevels: { control: 'number', description: 'Número máximo de níveis antes de truncar' },
  },
  args: {
    separator: '/',
    maxLevels: 4,
    items: [
      { label: 'Início', href: '/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
      { label: 'Cadastros', href: '/cadastros' },
      { label: 'Pessoas', href: '/cadastros/pessoas' },
      { label: 'Editar — Maria Silva' },
    ],
  },
};

export const Default = {
  args: {
    items: [
      { label: 'Início', href: '/' },
      { label: 'Configurações', href: '/configuracoes' },
      { label: 'Segurança' },
    ],
  },
};

export const WithHomeIcon = {
  args: {
    items: [
      { label: 'Início', href: '/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
      { label: 'Processos', href: '/processos' },
      { label: '2026.0001.0042' },
    ],
  },
};

export const ChevronSeparator = {
  args: {
    separator: '›',
    items: [
      { label: 'Início', href: '/' },
      { label: 'Relatórios', href: '/relatorios' },
      { label: 'Financeiro', href: '/relatorios/financeiro' },
      { label: 'Mensal — Fevereiro 2026' },
    ],
  },
};

export const Truncated = {
  args: {
    maxLevels: 4,
    items: [
      { label: 'Início', href: '/' },
      { label: 'Nível 1', href: '/1' },
      { label: 'Nível 2', href: '/2' },
      { label: 'Nível 3', href: '/3' },
      { label: 'Nível 4', href: '/4' },
      { label: 'Página Atual Longa para Testar Overflow e Truncamento' },
    ],
  },
};
