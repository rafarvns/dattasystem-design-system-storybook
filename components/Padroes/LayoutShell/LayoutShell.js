import './LayoutShell.css';
import { createNavbar } from '../../Navbar/Navbar';
import { createSidebar } from '../../Compostos/Sidebar/Sidebar';
import { createBreadcrumb } from '../../Breadcrumb/Breadcrumb';

/**
 * Creates the Layout Shell component for the Datta System.
 * 
 * @param {Object} props - Properties of the layout shell.
 * @param {Object} props.navbarProps - Props for the Navbar component.
 * @param {Object} props.sidebarProps - Props for the Sidebar component.
 * @param {Object} props.breadcrumbProps - Props for the Breadcrumb component.
 * @param {string} props.title - Page title.
 * @param {string} props.description - Page description.
 * @param {Array} props.actions - Array of action buttons (HTMLElements).
 * @param {HTMLElement} props.content - Main content element.
 * @param {string} props.variant - 'default', 'no-sidebar', 'fullscreen'.
 * @param {string} props.footerText - Footer copyright text.
 * @param {string} props.version - App version text.
 * @returns {HTMLElement}
 */
export const createLayoutShell = ({
    navbarProps = {},
    sidebarProps = {},
    breadcrumbProps = { items: [{ label: 'Início', href: '#' }] },
    title = 'Título da Página',
    description = '',
    actions = [],
    content = document.createElement('div'),
    variant = 'default',
    footerText = '© 2026 Datta System — Todos os direitos reservados',
    version = 'Versão 1.0.0',
}) => {
    const app = document.createElement('div');
    app.className = `ds-app ds-app--${variant}`;

    // Skip Link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'ds-skip-link';
    skipLink.innerText = 'Pular para o conteúdo principal';
    app.appendChild(skipLink);

    // Navbar
    const navbar = createNavbar(navbarProps);
    app.appendChild(navbar);

    // Body Container
    const appBody = document.createElement('div');
    appBody.className = 'ds-app__body';

    // Sidebar
    if (variant !== 'no-sidebar' && variant !== 'fullscreen') {
        const sidebar = createSidebar(sidebarProps);
        appBody.appendChild(sidebar);
    }

    // Main Content Area
    const main = document.createElement('main');
    main.className = 'ds-main';
    main.id = 'main-content';

    // Page Header
    const pageHeader = document.createElement('header');
    pageHeader.className = 'ds-page-header';

    // Breadcrumb in Page Header
    if (breadcrumbProps && breadcrumbProps.items) {
        const breadcrumbContainer = document.createElement('div');
        breadcrumbContainer.className = 'ds-page-header__breadcrumb';
        const breadcrumb = createBreadcrumb(breadcrumbProps);
        breadcrumbContainer.appendChild(breadcrumb);
        pageHeader.appendChild(breadcrumbContainer);
    }

    const headerContainer = document.createElement('div');
    headerContainer.className = 'ds-page-header__container';

    const headerContent = document.createElement('div');
    headerContent.className = 'ds-page-header__content';

    const h1 = document.createElement('h1');
    h1.className = 'ds-page-header__title';
    h1.innerText = title;
    headerContent.appendChild(h1);

    if (description) {
        const p = document.createElement('p');
        p.className = 'ds-page-header__description';
        p.innerText = description;
        headerContent.appendChild(p);
    }

    headerContainer.appendChild(headerContent);

    // Actions
    if (actions && actions.length > 0) {
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'ds-page-header__actions';
        actions.forEach(action => actionsContainer.appendChild(action));
        headerContainer.appendChild(actionsContainer);
    }

    pageHeader.appendChild(headerContainer);
    main.appendChild(pageHeader);

    // Page Content
    const contentSection = document.createElement('section');
    contentSection.className = 'ds-content';
    contentSection.appendChild(content);
    main.appendChild(contentSection);

    appBody.appendChild(main);
    app.appendChild(appBody);

    // Footer
    const footer = document.createElement('footer');
    footer.className = 'ds-footer';
    footer.setAttribute('role', 'contentinfo');

    const footerContainer = document.createElement('div');
    footerContainer.className = 'ds-footer__container';

    const footerSpan = document.createElement('span');
    footerSpan.className = 'ds-footer__text';
    footerSpan.innerText = footerText;
    footerContainer.appendChild(footerSpan);

    const versionSpan = document.createElement('span');
    versionSpan.className = 'ds-footer__version';
    versionSpan.innerText = version;
    footerContainer.appendChild(versionSpan);

    footer.appendChild(footerContainer);
    app.appendChild(footer);

    return app;
};
