import { createLayoutShell } from '../components/Padroes/LayoutShell/LayoutShell';
import { createButton } from '../components/Button/Button';
import { createCard } from '../components/Card/Card';

export default {
    title: 'Padrões / Layout Shell',
    parameters: {
        layout: 'fullscreen',
    },
};

const defaultProps = {
    title: 'Cadastro de Pessoas',
    description: 'Gerencie os cadastros de pessoas do sistema.',
    navbarProps: {
        systemName: 'Datta System',
        menuItems: [
            { label: 'Início', active: true },
            { label: 'Administração' },
            { label: 'Ajuda' }
        ]
    },
    sidebarProps: {
        menuItems: [
            { label: 'Dashboard', icon: '📊' },
            {
                label: 'Cadastros',
                icon: '📁',
                active: true,
                children: [
                    { label: 'Pessoas', href: '#', active: true },
                    { label: 'Órgãos', href: '#' }
                ]
            },
            { label: 'Processos', icon: '📄' }
        ]
    },
    breadcrumbProps: {
        items: [
            { label: 'Início', href: '#' },
            { label: 'Cadastros', href: '#' },
            { label: 'Pessoas' }
        ]
    },
    actions: [
        createButton({ label: 'Novo Cadastro', variant: 'primary' })
    ]
};

const Template = (args) => {
    const container = document.createElement('div');
    container.className = 'ds-demo-container';

    // Use Card component for demo content
    const card = createCard({
        title: 'Informações Gerais',
        body: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div style="padding: 16px; background: #f8f9fa; border-radius: 4px;">
          <strong>Total de Cadastros</strong>
          <div style="font-size: 24px; font-weight: bold; color: #2196F3;">1,240</div>
        </div>
        <div style="padding: 16px; background: #f8f9fa; border-radius: 4px;">
          <strong>Aguardando Validação</strong>
          <div style="font-size: 24px; font-weight: bold; color: #FF9800;">45</div>
        </div>
        <div style="padding: 16px; background: #f8f9fa; border-radius: 4px;">
          <strong>Finalizados (Mês)</strong>
          <div style="font-size: 24px; font-weight: bold; color: #4CAF50;">180</div>
        </div>
      </div>
      <div style="margin-top: 24px;">
        <p>Abaixo você pode ver a listagem completa de pessoas vinculadas ao seu perfil de acesso.</p>
        <div style="height: 400px; border: 1px dashed #ced4da; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #adb5bd;">
          [ Placeholder para Tabela ]
        </div>
      </div>
    `,
        footer: createButton({ label: 'Ver Relatório Completo', variant: 'ghost', size: 'sm' })
    });

    container.appendChild(card);

    // Add some dummy space to test scroll
    const spacer = document.createElement('div');
    spacer.style.height = '1000px';
    spacer.style.marginTop = '24px';
    spacer.innerHTML = '<p style="color: #adb5bd; text-align: center;">Continue rolando para testar o scroll exclusivo da área de conteúdo...</p>';
    container.appendChild(spacer);

    const shell = createLayoutShell({ ...args, content: container });

    // Constraint wrapper for Storybook
    const wrapper = document.createElement('div');
    wrapper.style.height = '600px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '1200px';
    wrapper.style.margin = '0 auto';
    wrapper.style.border = '1px solid var(--ds-color-neutral-200)';
    wrapper.style.position = 'relative';
    wrapper.style.overflow = 'hidden';

    // Override absolute layout for the preview simulation
    shell.style.position = 'absolute';
    shell.style.height = '100%';
    shell.style.width = '100%';
    shell.style.top = '0';
    shell.style.left = '0';

    wrapper.appendChild(shell);
    return wrapper;
};

export const Completo = Template.bind({});
Completo.args = {
    ...defaultProps,
};

export const SemSidebar = Template.bind({});
SemSidebar.args = {
    ...defaultProps,
    variant: 'no-sidebar',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
    ...defaultProps,
    variant: 'fullscreen',
};

export const Dashboard = Template.bind({});
Dashboard.args = {
    ...defaultProps,
    title: 'Dashboard de Controle',
    description: 'Visão geral do sistema e indicadores operacionais.',
    actions: [
        createButton({ label: 'Atualizar Dados', variant: 'secondary', size: 'sm' }),
        createButton({ label: 'Exportar PDF', variant: 'primary', size: 'sm' })
    ]
};

export const Detalhe = Template.bind({});
Detalhe.args = {
    ...defaultProps,
    title: 'João da Silva Sauro',
    description: 'CPF: 000.000.000-00 | RG: 00.000.000-0',
    breadcrumbProps: {
        items: [
            { label: 'Início', href: '#' },
            { label: 'Cadastros', href: '#' },
            { label: 'Pessoas', href: '#' },
            { label: 'Detalhes' }
        ]
    },
    actions: [
        createButton({ label: 'Editar Registro', variant: 'secondary', size: 'sm' }),
        createButton({ label: 'Excluir', variant: 'destructive', size: 'sm' })
    ]
};
