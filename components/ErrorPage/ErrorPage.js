import './ErrorPage.css';
import { createButton } from '../Button/Button';
import { createNavbar } from '../Navbar/Navbar';

/**
 * Creates an Error Page component for the Datta System.
 * 
 * @param {Object} props - Properties of the error page.
 * @param {string} props.code - Error code (e.g., '404').
 * @param {string} props.title - Title text.
 * @param {string} props.description - Description text.
 * @param {Array} props.actions - Array of action configurations.
 * @param {boolean} props.withNavbar - Whether to include the navbar.
 * @returns {HTMLElement}
 */
export const createErrorPage = ({
    code = '404',
    title = 'Página não encontrada',
    description = 'A página que você procura não existe ou foi movida.',
    actions = [],
    withNavbar = true
}) => {
    const page = document.createElement('div');

    if (withNavbar) {
        const navbar = createNavbar({
            systemName: 'Datta System',
            menuItems: [
                { label: 'Início', href: '/' },
                { label: 'Ajuda', href: '#' }
            ]
        });
        page.appendChild(navbar);
    }

    const content = document.createElement('div');
    content.className = 'ds-error-page';

    const container = document.createElement('div');
    container.className = 'ds-error-page__container';

    // Code/Illustration
    const illustration = document.createElement('div');
    illustration.className = 'ds-error-page__illustration';
    illustration.setAttribute('aria-hidden', 'true');

    const codeSpan = document.createElement('span');
    codeSpan.className = 'ds-error-page__code';
    codeSpan.innerText = code;
    illustration.appendChild(codeSpan);
    container.appendChild(illustration);

    // Title
    const h1 = document.createElement('h1');
    h1.className = 'ds-error-page__title';
    h1.innerText = title;
    container.appendChild(h1);

    // Description
    const p = document.createElement('p');
    p.className = 'ds-error-page__description';
    p.innerText = description;
    container.appendChild(p);

    // Actions
    if (actions.length > 0) {
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'ds-error-page__actions';

        actions.forEach(action => {
            const btn = createButton({
                label: action.label,
                variant: action.variant || 'secondary',
                onClick: action.onClick
            });
            // If action is a link, we might need to handle it or use an 'a' tag styled as button
            // For simplicity here, we assume buttons or handle navigation in onClick
            actionsContainer.appendChild(btn);
        });

        container.appendChild(actionsContainer);
    } else {
        // Default actions if none provided
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'ds-error-page__actions';

        const homeBtn = createButton({
            label: 'Voltar para o início',
            variant: 'primary',
            onClick: () => { window.location.href = '/'; }
        });
        actionsContainer.appendChild(homeBtn);

        const backBtn = createButton({
            label: 'Voltar à página anterior',
            variant: 'secondary',
            onClick: () => { history.back(); }
        });
        actionsContainer.appendChild(backBtn);

        container.appendChild(actionsContainer);
    }

    // Help Section
    const help = document.createElement('div');
    help.className = 'ds-error-page__help';
    help.innerHTML = `
    <p>Se o problema persistir, entre em contato com o suporte:
      <a href="mailto:suporte@sistema.gov.br" class="ds-link">suporte@sistema.gov.br</a>
    </p>
  `;
    container.appendChild(help);

    content.appendChild(container);
    page.appendChild(content);

    return page;
};
