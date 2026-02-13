import './Sidebar.css';
import { createTooltip } from '../../Tooltip/Tooltip';

/**
 * Creates the Sidebar component for the Datta System.
 * 
 * @param {Object} props - Properties of the sidebar.
 * @param {string} props.title - Sidebar title.
 * @param {Array} props.menuItems - Array of menu items.
 * @param {string} props.version - Version text for footer.
 * @param {boolean} props.collapsed - Initial collapsed state.
 * @returns {HTMLElement}
 */
export const createSidebar = ({
    title = 'Menu',
    menuItems = [],
    version = 'Datta System v1.0',
    collapsed = false,
}) => {
    const sidebar = document.createElement('aside');
    sidebar.className = 'ds-sidebar';
    if (collapsed) sidebar.classList.add('ds-sidebar--collapsed');
    sidebar.setAttribute('role', 'navigation');
    sidebar.setAttribute('aria-label', 'Menu lateral');

    // Load state from localStorage if available
    const savedState = localStorage.getItem('ds-sidebar-collapsed');
    if (savedState !== null) {
        const isSavedCollapsed = savedState === 'true';
        sidebar.classList.toggle('ds-sidebar--collapsed', isSavedCollapsed);
    }

    // Header
    const header = document.createElement('div');
    header.className = 'ds-sidebar__header';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'ds-sidebar__title';
    titleSpan.innerText = title;
    header.appendChild(titleSpan);

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'ds-sidebar__toggle';
    toggleBtn.setAttribute('aria-label', sidebar.classList.contains('ds-sidebar--collapsed') ? 'Expandir menu' : 'Recolher menu');
    toggleBtn.setAttribute('aria-expanded', !sidebar.classList.contains('ds-sidebar--collapsed'));
    toggleBtn.innerHTML = '<span class="ds-sidebar__toggle-icon" aria-hidden="true">◀</span>';

    toggleBtn.addEventListener('click', () => {
        const isCollapsed = sidebar.classList.toggle('ds-sidebar--collapsed');
        toggleBtn.setAttribute('aria-label', isCollapsed ? 'Expandir menu' : 'Recolher menu');
        toggleBtn.setAttribute('aria-expanded', !isCollapsed);
        localStorage.setItem('ds-sidebar-collapsed', isCollapsed);
    });

    header.appendChild(toggleBtn);
    sidebar.appendChild(header);

    // Nav
    const nav = document.createElement('nav');
    nav.className = 'ds-sidebar__nav';

    const menuList = document.createElement('ul');
    menuList.className = 'ds-sidebar__menu';

    menuItems.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'ds-sidebar__item';
        if (item.children) li.classList.add('ds-sidebar__item--has-children');

        const link = document.createElement(item.children ? 'button' : 'a');
        link.className = 'ds-sidebar__link';
        if (item.active) link.classList.add('ds-sidebar__link--active');

        if (!item.children) {
            link.href = item.href || '#';
            if (item.active) link.setAttribute('aria-current', 'page');
        } else {
            link.setAttribute('aria-expanded', 'false');
        }

        // Icon
        const iconSpan = document.createElement('span');
        iconSpan.className = 'ds-sidebar__icon';
        iconSpan.setAttribute('aria-hidden', 'true');
        iconSpan.innerHTML = item.icon || '○';
        link.appendChild(iconSpan);

        // Text
        const textSpan = document.createElement('span');
        textSpan.className = 'ds-sidebar__text';
        textSpan.innerText = item.label;
        link.appendChild(textSpan);

        // Chevron for items with children
        if (item.children) {
            const chevron = document.createElement('span');
            chevron.className = 'ds-sidebar__chevron';
            chevron.setAttribute('aria-hidden', 'true');
            chevron.innerText = '▸';
            link.appendChild(chevron);

            // Submenu
            const submenuList = document.createElement('ul');
            submenuList.className = 'ds-sidebar__submenu';

            item.children.forEach((child) => {
                const subLi = document.createElement('li');
                subLi.className = 'ds-sidebar__subitem';

                const subLink = document.createElement('a');
                subLink.className = 'ds-sidebar__sublink';
                subLink.href = child.href || '#';
                subLink.innerText = child.label;
                if (child.active) subLink.classList.add('ds-sidebar__sublink--active');

                subLi.appendChild(subLink);
                submenuList.appendChild(subLi);
            });

            li.appendChild(link);
            li.appendChild(submenuList);

            // Toggle submenu interaction
            link.addEventListener('click', (e) => {
                if (sidebar.classList.contains('ds-sidebar--collapsed')) return;

                const isOpen = li.classList.toggle('ds-sidebar__item--open');
                link.setAttribute('aria-expanded', isOpen);
            });
        } else {
            li.appendChild(link);
        }

        // Wrap with tooltip if sidebar is collapsed (implemented via CSS and JS for dynamic state)
        // We append the tooltip trigger but need to manage visibility
        const tooltipWrapper = createTooltip({
            trigger: li,
            text: item.label,
            position: 'right',
            enterDelay: 100,
        });

        // The tooltip should only be active when collapsed
        // We can handle this by adding a class to the tooltip wrapper or manage it in CSS
        tooltipWrapper.classList.add('ds-sidebar-tooltip');

        menuList.appendChild(tooltipWrapper);
    });

    nav.appendChild(menuList);
    sidebar.appendChild(nav);

    // Footer
    const footer = document.createElement('div');
    footer.className = 'ds-sidebar__footer';

    const versionSpan = document.createElement('span');
    versionSpan.className = 'ds-sidebar__version';
    versionSpan.innerText = version;
    footer.appendChild(versionSpan);

    sidebar.appendChild(footer);

    return sidebar;
};
