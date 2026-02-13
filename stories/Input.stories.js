import { createInput } from '../components/Input/Input';

export default {
  title: 'Componentes Base/Input',
  render: (args) => createInput(args),
  argTypes: {
    label: { control: 'text', description: 'Rótulo do campo' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'search'],
      description: 'Tipo de input',
    },
    placeholder: { control: 'text', description: 'Texto de exemplo' },
    helperText: { control: 'text', description: 'Texto auxiliar' },
    errorMessage: { control: 'text', description: 'Mensagem de erro' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do campo',
    },
    required: { control: 'boolean', description: 'Campo obrigatório' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    readOnly: { control: 'boolean', description: 'Estado somente leitura' },
    value: { control: 'text', description: 'Valor inicial' },
  },
  args: {
    label: 'Nome Completo',
    type: 'text',
    placeholder: 'Ex: João da Silva',
    helperText: 'Informe seu nome conforme consta no documento',
    size: 'md',
    required: false,
    disabled: false,
    readOnly: false,
  },
};

export const Default = {};

export const Small = {
  args: {
    size: 'sm',
    label: 'Campo Pequeno',
  },
};

export const Large = {
  args: {
    size: 'lg',
    label: 'Campo Grande',
  },
};

export const Required = {
  args: {
    required: true,
  },
};

export const Password = {
  args: {
    type: 'password',
    label: 'Senha',
    placeholder: 'Digite sua senha',
    helperText: 'A senha deve conter no mínimo 8 caracteres',
  },
};

export const Error = {
  args: {
    label: 'E-mail',
    type: 'email',
    value: 'email-invalido',
    errorMessage: 'Por favor, informe um e-mail válido.',
  },
};

export const Disabled = {
  args: {
    label: 'Campo Desabilitado',
    disabled: true,
    value: 'Valor bloqueado',
  },
};

export const ReadOnly = {
  args: {
    label: 'Campo Somente Leitura',
    readOnly: true,
    value: 'Apenas para visualização',
  },
};

const userIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;

export const WithIconLeft = {
  args: {
    label: 'Usuário',
    iconLeft: userIcon,
  },
};

export const Search = {
  args: {
    label: 'Buscar Processo',
    type: 'search',
    placeholder: 'Número do protocolo...',
    iconLeft: searchIcon,
  },
};
