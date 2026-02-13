import './EmptyState.css';
import { createButton } from '../Button/Button';

/**
 * Creates an Empty State component for the Datta System.
 * 
 * @param {Object} props - Properties of the empty state.
 * @param {string} props.title - Title text.
 * @param {string} props.description - Description text.
 * @param {string} props.icon - SVG markup or icon name.
 * @param {Array} props.actions - Array of action configurations { label, variant, onClick }.
 * @returns {HTMLElement}
 */
export const createEmptyState = ({
    title = 'Nenhum dado encontrado',
    description = 'Não há informações para exibir no momento.',
    icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ds-empty-state__icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    actions = []
}) => {
    const container = document.createElement('div');
    container.className = 'ds-empty-state';
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', 'polite');

    // Illustration
    const illustration = document.createElement('div');
    illustration.className = 'ds-empty-state__illustration';
    illustration.setAttribute('aria-hidden', 'true');
    illustration.innerHTML = icon;
    container.appendChild(illustration);

    // Title
    const titleEl = document.createElement('h2');
    titleEl.className = 'ds-empty-state__title';
    titleEl.innerText = title;
    container.appendChild(titleEl);

    // Description
    const descriptionEl = document.createElement('p');
    descriptionEl.className = 'ds-empty-state__description';
    descriptionEl.innerText = description;
    container.appendChild(descriptionEl);

    // Actions
    if (actions.length > 0) {
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'ds-empty-state__actions';

        actions.forEach(action => {
            const btn = createButton({
                label: action.label,
                variant: action.variant || 'secondary',
                onClick: action.onClick
            });
            actionsContainer.appendChild(btn);
        });

        container.appendChild(actionsContainer);
    }

    return container;
};
