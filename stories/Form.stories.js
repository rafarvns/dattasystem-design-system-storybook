import { createForm } from '../components/Form/Form';
import { createInput } from '../components/Input/Input';
import { createSelect } from '../components/Select/Select';
import { createTextarea } from '../components/Textarea/Textarea';
import { createCheckbox, createCheckboxGroup } from '../components/Checkbox/Checkbox';
import { createRadioGroup } from '../components/Radio/Radio';
import { createLayoutShell } from '../components/Padroes/LayoutShell/LayoutShell';

export default {
    title: '📐 Padrões de Página (Sprint 4) / Formulário Completo',
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    const form = createForm(args);

    const shell = createLayoutShell({
        title: args.pageTitle || 'Formulário de Dados',
        description: args.pageDescription || 'Preencha as informações abaixo para continuar.',
        content: form,
        breadcrumbProps: {
            items: [
                { label: 'Início', href: '#' },
                { label: 'Processos', href: '#' },
                { label: 'Cadastro' }
            ]
        }
    });

    // Constraint wrapper for Storybook preview
    const wrapper = document.createElement('div');
    wrapper.style.height = '600px';
    wrapper.style.width = '100%';
    wrapper.style.position = 'relative';
    wrapper.style.overflow = 'hidden';
    wrapper.style.border = '1px solid var(--ds-color-neutral-200)';

    shell.style.position = 'absolute';
    shell.style.height = '100%';
    shell.style.width = '100%';

    wrapper.appendChild(shell);
    return wrapper;
};

export const CadastroCompleto = Template.bind({});
CadastroCompleto.args = {
    submitLabel: 'Salvar cadastro',
    cancelLabel: 'Cancelar',
    onSubmit: async (data) => {
        console.log('Dados do formulário:', data);
        return new Promise(resolve => setTimeout(resolve, 1500));
    },
    sections: [
        {
            title: 'Dados Pessoais',
            description: 'Informações básicas para identificação do cidadão no sistema.',
            fields: [
                {
                    width: 'full',
                    component: createInput({
                        label: 'Nome completo',
                        id: 'nome',
                        placeholder: 'Digite o nome completo conforme documento',
                        required: true,
                        helperText: 'Informe o nome completo conforme documento de identidade.'
                    }),
                    requiredMessage: 'Informe o nome completo conforme documento de identidade.'
                },
                {
                    width: 'half',
                    component: createInput({
                        label: 'CPF',
                        id: 'cpf',
                        placeholder: '000.000.000-00',
                        required: true
                    }),
                    validation: (val) => {
                        const clean = val.replace(/[^\d]/g, '');
                        return clean.length === 11 || 'O CPF informado não parece estar correto. Verifique se possui 11 dígitos.';
                    }
                },
                {
                    width: 'half',
                    component: createInput({
                        label: 'Data de nascimento',
                        id: 'nascimento',
                        type: 'date',
                        required: true
                    }),
                    requiredMessage: 'Informe uma data de nascimento válida.'
                }
            ]
        },
        {
            title: 'Localização',
            fields: [
                {
                    width: 'half',
                    component: createSelect({
                        label: 'Estado',
                        id: 'estado',
                        required: true,
                        options: [
                            { label: 'Acre', value: 'AC' },
                            { label: 'Alagoas', value: 'AL' },
                            { label: 'São Paulo', value: 'SP' },
                            { label: 'Rio de Janeiro', value: 'RJ' }
                        ]
                    }),
                    requiredMessage: 'Selecione uma opção para continuar.'
                },
                {
                    width: 'half',
                    component: createInput({
                        label: 'Cidade',
                        id: 'cidade'
                    })
                }
            ]
        },
        {
            title: 'Preferências e Documentos',
            fields: [
                {
                    width: 'full',
                    component: createRadioGroup({
                        label: 'Tipo de atendimento',
                        name: 'atendimento',
                        options: [
                            { label: 'Presencial', value: 'presencial', id: 'presencial' },
                            { label: 'Online', value: 'online', id: 'online' }
                        ]
                    })
                },
                {
                    width: 'full',
                    component: createCheckboxGroup({
                        legend: 'Documentos apresentados',
                        options: [
                            { label: 'RG', id: 'rg' },
                            { label: 'CPF', id: 'cpf-doc' },
                            { label: 'Comprovante de residência', id: 'residencia' }
                        ]
                    })
                },
                {
                    width: 'full',
                    component: createTextarea({
                        label: 'Observações',
                        id: 'observacoes',
                        maxlength: 500,
                        showCounter: true,
                        rows: 4
                    })
                }
            ]
        },
        {
            fields: [
                {
                    width: 'full',
                    component: createCheckbox({
                        label: 'Li e aceito os termos de uso e a política de privacidade.',
                        id: 'termos',
                        required: true
                    }),
                    requiredMessage: 'É necessário aceitar os termos de uso para prosseguir.'
                }
            ]
        }
    ]
};

export const Login = Template.bind({});
Login.args = {
    submitLabel: 'Entrar',
    onSubmit: async () => new Promise(resolve => setTimeout(resolve, 1000)),
    sections: [
        {
            title: 'Bem-vindo ao Datta System',
            description: 'Informe seus dados para acessar o painel administrativo.',
            fields: [
                {
                    width: 'full',
                    component: createInput({
                        label: 'CPF ou E-mail',
                        id: 'login-user',
                        placeholder: 'Digite seu CPF ou E-mail',
                        required: true
                    })
                },
                {
                    width: 'full',
                    component: createInput({
                        label: 'Senha',
                        id: 'login-pass',
                        type: 'password',
                        required: true
                    })
                }
            ]
        }
    ]
};

export const BuscaFiltro = Template.bind({});
BuscaFiltro.args = {
    submitLabel: 'Buscar',
    cancelLabel: 'Limpar',
    sections: [
        {
            fields: [
                {
                    width: 'half',
                    component: createInput({
                        label: 'Protocolo',
                        id: 'busca-proto',
                        placeholder: '2026.XXXX.XXXX'
                    })
                },
                {
                    width: 'half',
                    component: createSelect({
                        label: 'Situação',
                        id: 'busca-status',
                        options: [
                            { label: 'Pendente', value: 'pending' },
                            { label: 'Concluído', value: 'done' },
                            { label: 'Cancelado', value: 'cancel' }
                        ]
                    })
                }
            ]
        }
    ]
};
