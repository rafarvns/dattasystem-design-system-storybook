import { createButton } from '../components/Button/Button';

export default {
  title: '🧱 Componentes Base (Sprint 2) / Button',
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    block: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    label: 'Botão Primário',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Botão Secundário',
    variant: 'secondary',
  },
};

export const Destructive = {
  args: {
    label: 'Botão Destrutivo',
    variant: 'destructive',
  },
};

export const Ghost = {
  args: {
    label: 'Botão Ghost',
    variant: 'ghost',
  },
};

export const Small = {
  args: {
    label: 'Botão Pequeno',
    size: 'sm',
  },
};

export const Medium = {
  args: {
    label: 'Botão Médio',
    size: 'md',
  },
};

export const Large = {
  args: {
    label: 'Botão Grande',
    size: 'lg',
  },
};

export const Disabled = {
  args: {
    label: 'Botão Desabilitado',
    disabled: true,
  },
};

export const Loading = {
  args: {
    label: 'Carregando',
    loading: true,
  },
};

export const WithIconLeft = {
  args: {
    label: 'Ícone à Esquerda',
    iconLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
};

export const WithIconRight = {
  args: {
    label: 'Ícone à Direita',
    iconRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
  },
};

export const IconOnly = {
  args: {
    label: 'Pesquisar',
    iconOnly: true,
    iconLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  },
};
