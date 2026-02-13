import { createSelect } from '../components/Select/Select';

export default {
  title: 'componentes base/Select',
  render: (args) => {
    return createSelect(args);
  },
  argTypes: {
    label: { control: 'text', description: 'Label do campo' },
    placeholder: { control: 'text', description: 'Texto de placeholder' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do select',
    },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    required: { control: 'boolean', description: 'Campo obrigatório' },
    helperText: { control: 'text', description: 'Texto auxiliar' },
    errorText: { control: 'text', description: 'Mensagem de erro' },
    onChange: { action: 'onChange' },
  },
  args: {
    label: 'Estado Civil',
    placeholder: 'Selecione uma opção',
    size: 'md',
    disabled: false,
    required: false,
    options: [
      { value: 'solteiro', label: 'Solteiro(a)' },
      { value: 'casado', label: 'Casado(a)' },
      { value: 'divorciado', label: 'Divorciado(a)' },
      { value: 'viuvo', label: 'Viúvo(a)' },
    ],
  },
};

export const Default = {
  args: {
    label: 'Selecione o Órgão',
  },
};

export const WithHelper = {
  args: {
    label: 'Departamento',
    helperText: 'Selecione o departamento responsável pelo processo.',
  },
};

export const Error = {
  args: {
    label: 'Cidade',
    errorText: 'Selecione uma cidade válida.',
    value: '',
  },
};

export const Required = {
  args: {
    label: 'Escolaridade',
    required: true,
  },
};

export const Disabled = {
  args: {
    label: 'País',
    disabled: true,
    value: 'brasil',
    options: [{ value: 'brasil', label: 'Brasil' }],
  },
};

export const WithGroups = {
  args: {
    label: 'Categoria de Serviço',
    options: [
      {
        group: 'Saúde',
        items: [
          { value: 'consulta', label: 'Consulta Médica' },
          { value: 'exame', label: 'Agendamento de Exame' },
        ],
      },
      {
        group: 'Educação',
        items: [
          { value: 'matricula', label: 'Matrícula Escolar' },
          { value: 'bolsa', label: 'Auxílio Estudantil' },
        ],
      },
    ],
  },
};

export const Small = {
  args: {
    size: 'sm',
    label: 'Filtro Rápido',
  },
};

export const Large = {
  args: {
    size: 'lg',
    label: 'Campo de Destaque',
  },
};
