import { createSidebar } from '../components/Compostos/Sidebar/Sidebar';

export default {
    title: 'Componentes Compostos/Sidebar',
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        title: { control: 'text' },
        version: { control: 'text' },
        collapsed: { control: 'boolean' },
    },
};

const Template = (args) => createSidebar(args);

export const Default = Template.bind({});
Default.args = {
    title: 'Menu Principal',
    version: 'Datta System v1.0',
    menuItems: [
        {
            label: 'Dashboard',
            icon: '📊',
            active: true,
            href: '#'
        },
        {
            label: 'Cadastros',
            icon: '📁',
            children: [
                { label: 'Pessoas', href: '#' },
                { label: 'Órgãos', href: '#' },
                { label: 'Unidades', href: '#' }
            ]
        },
        {
            label: 'Processos',
            icon: '📄',
            href: '#'
        },
        {
            label: 'Relatórios',
            icon: '📈',
            href: '#'
        },
        {
            label: 'Configurações',
            icon: '⚙️',
            href: '#'
        }
    ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
    ...Default.args,
    collapsed: true,
};
