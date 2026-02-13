import { createCheckbox, createCheckboxGroup } from '../components/Checkbox/Checkbox';

export default {
  title: 'componentes base/Checkbox',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};

export const Default = {
  render: (args) => createCheckbox(args),
  args: {
    label: 'Checkbox Label',
    checked: false,
  },
};

export const Checked = {
  render: (args) => createCheckbox(args),
  args: {
    label: 'Checked Option',
    checked: true,
  },
};

export const Indeterminate = {
  render: (args) => createCheckbox(args),
  args: {
    label: 'Indeterminate Option',
    indeterminate: true,
  },
};

export const Disabled = {
  render: (args) => createCheckbox(args),
  args: {
    label: 'Disabled Option',
    disabled: true,
  },
};

export const DisabledChecked = {
  render: (args) => createCheckbox(args),
  args: {
    label: 'Disabled Checked Option',
    disabled: true,
    checked: true,
  },
};

export const WithHelper = {
  render: (args) => createCheckbox(args),
  args: {
    label: 'Newsletter',
    helperText: 'Receba novidades e atualizações por e-mail.',
  },
};

export const Group = {
  render: (args) => createCheckboxGroup(args),
  argTypes: {
    legend: { control: 'text' },
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    legend: 'Preferências de Comunicação',
    required: true,
    options: [
      { label: 'E-mail', id: 'email', checked: true },
      { label: 'SMS', id: 'sms' },
      { label: 'WhatsApp', id: 'whatsapp' },
    ],
    helperText: 'Selecione pelo menos um canal.',
  },
};

export const HorizontalGroup = {
  render: (args) => createCheckboxGroup(args),
  args: {
    legend: 'Dias da Semana',
    orientation: 'horizontal',
    options: [
      { label: 'Seg', id: 'seg' },
      { label: 'Ter', id: 'ter' },
      { label: 'Qua', id: 'qua' },
      { label: 'Qui', id: 'qui' },
      { label: 'Sex', id: 'sex' },
    ],
  },
};

export const GroupWithError = {
  render: (args) => createCheckboxGroup(args),
  args: {
    legend: 'Termos de Uso',
    error: true,
    options: [
      { label: 'Eu aceito os termos e condições', id: 'terms', required: true },
    ],
    helperText: 'Você deve aceitar os termos para prosseguir.',
  },
};
