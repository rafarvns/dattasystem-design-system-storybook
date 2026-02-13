import { createTextarea } from '../components/Textarea/Textarea';

export default {
  title: 'Componentes Base/Textarea',
  render: (args) => {
    return createTextarea(args);
  },
  argTypes: {
    label: { control: 'text', description: 'Label do campo' },
    placeholder: { control: 'text', description: 'Placeholder do campo' },
    helperText: { control: 'text', description: 'Texto auxiliar' },
    error: { control: 'text', description: 'Mensagem de erro' },
    required: { control: 'boolean', description: 'Campo obrigatório' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    readOnly: { control: 'boolean', description: 'Estado somente leitura' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do campo',
    },
    rows: { control: 'number', description: 'Número de linhas iniciais' },
    maxlength: { control: 'number', description: 'Limite máximo de caracteres' },
    resize: {
      control: { type: 'select' },
      options: ['vertical', 'none', 'auto'],
      description: 'Tipo de redimensionamento',
    },
    showCounter: { control: 'boolean', description: 'Exibir contador de caracteres' },
    value: { control: 'text', description: 'Valor inicial' },
  },
  args: {
    label: 'Descrição do Problema',
    placeholder: 'Descreva detalhadamente o ocorrido...',
    helperText: 'Mínimo de 20 caracteres',
    required: true,
    disabled: false,
    readOnly: false,
    size: 'md',
    rows: 4,
    resize: 'vertical',
    showCounter: true,
    maxlength: 500,
  },
};

export const Default = {
  args: {},
};

export const Small = {
  args: {
    size: 'sm',
    label: 'Observações (Pequeno)',
  },
};

export const Large = {
  args: {
    size: 'lg',
    label: 'Justificativa (Grande)',
  },
};

export const WithError = {
  args: {
    error: 'Este campo é obrigatório e deve ser preenchido.',
    value: 'Texto com erro',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    value: 'Conteúdo desabilitado',
  },
};

export const ReadOnly = {
  args: {
    readOnly: true,
    value: 'Conteúdo em modo somente leitura que não pode ser editado pelo usuário.',
  },
};

export const CharacterCounter = {
  args: {
    maxlength: 100,
    showCounter: true,
    value: 'Texto que já ocupa uma boa parte do limite estabelecido para este campo específico.',
  },
};

export const AutoResize = {
  args: {
    resize: 'auto',
    placeholder: 'Este campo cresce automaticamente conforme você digita...',
  },
};
