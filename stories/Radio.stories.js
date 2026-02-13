import { fn } from '@storybook/test';
import { createRadioGroup } from '../components/Radio/Radio';

export default {
  title: 'Componentes Base/Radio',
  render: (args) => {
    return createRadioGroup(args);
  },
  argTypes: {
    label: { control: 'text', description: 'Título do grupo' },
    name: { control: 'text', description: 'Atributo name compartilhado' },
    selectedValue: { control: 'text', description: 'Valor selecionado' },
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      description: 'Disposição das opções',
    },
    required: { control: 'boolean', description: 'Campo obrigatório' },
    error: { control: 'boolean', description: 'Estado de erro' },
    helperText: { control: 'text', description: 'Texto auxiliar ou de erro' },
    onChange: { action: 'onChange' },
  },
  args: {
    label: 'Selecione uma opção',
    name: `radio-group-${Math.floor(Math.random() * 10000)}`,
    selectedValue: 'opcao-1',
    orientation: 'vertical',
    required: false,
    error: false,
    helperText: 'Escolha a melhor alternativa para o seu caso.',
    options: [
      { label: 'Opção 1', value: 'opcao-1' },
      { label: 'Opção 2', value: 'opcao-2' },
      { label: 'Opção 3', value: 'opcao-3' },
    ],
    onChange: fn(),
  },
};

export const Default = {
  args: {
    selectedValue: '',
  },
};

export const Horizontal = {
  args: {
    orientation: 'horizontal',
  },
};

export const WithSelectedValue = {
  args: {
    selectedValue: 'opcao-2',
  },
};

export const Required = {
  args: {
    required: true,
  },
};

export const DisabledOption = {
  args: {
    options: [
      { label: 'Opção Ativa', value: 'ativa' },
      { label: 'Opção Desabilitada', value: 'disabled', disabled: true },
      { label: 'Opção Selecionada e Desabilitada', value: 'selected-disabled', disabled: true },
    ],
    selectedValue: 'selected-disabled',
  },
};

export const Error = {
  args: {
    error: true,
    helperText: 'É necessário selecionar uma opção para prosseguir.',
  },
};
