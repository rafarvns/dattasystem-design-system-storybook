import { createNavbar } from '../components/Navbar/Navbar';

export default {
  title: 'componentes compostos/Navbar',
  render: (args) => {
    // Add margin to see the fixed navbar in the preview
    const wrapper = document.createElement('div');
    wrapper.style.paddingTop = '80px';
    wrapper.appendChild(createNavbar(args));
    return wrapper;
  },
  argTypes: {
    systemName: { control: 'text' },
    notificationsCount: { control: 'number' },
    showSearch: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'simple', 'institutional'],
    },
  },
  args: {
    systemName: 'Datta System',
    notificationsCount: 3,
    showSearch: true,
    variant: 'default',
    menuItems: [
      { label: 'Início', href: '#', active: true },
      { label: 'Processos', href: '#' },
      {
        label: 'Cadastros',
        submenu: [
          { label: 'Pessoas', href: '#' },
          { label: 'Órgãos', href: '#' },
          { label: 'Unidades', href: '#' },
        ],
      },
      { label: 'Relatórios', href: '#' },
    ],
    user: { name: 'João Silva', avatarText: 'JS' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    variant: 'default',
  },
};

export const Simple = {
  args: {
    variant: 'simple',
    showSearch: false,
    notificationsCount: 0,
  },
};

export const Institutional = {
  args: {
    variant: 'institutional',
    systemName: 'Secretaria de Fazenda',
    user: { name: 'Maria Souza', avatarText: 'MS' },
  },
};

export const LongMenu = {
  args: {
    menuItems: [
      { label: 'Início', href: '#', active: true },
      { label: 'Gerenciamento de Documentos', href: '#' },
      { label: 'Processos Administrativos', href: '#' },
      { label: 'Recursos Humanos', href: '#' },
      { label: 'Finanças e Orçamento', href: '#' },
      { label: 'Configurações do Sistema', href: '#' },
    ],
  },
};
