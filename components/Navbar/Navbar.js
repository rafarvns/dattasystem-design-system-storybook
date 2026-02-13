import './Navbar.css';
import { createInput } from '../Input/Input';

/**
 * Creates the Navbar component
 */
export const createNavbar = ({
  logoUrl = '',
  systemName = 'Datta System',
  menuItems = [],
  showSearch = true,
  notificationsCount = 0,
  user = { name: 'João Silva', avatarText: 'JS' },
  variant = 'default', // default, simple, institutional
}) => {
  const nav = document.createElement('nav');
  nav.className = 'ds-navbar';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Navegação principal');

  // Skip Link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'ds-skip-link';
  skipLink.innerText = 'Pular para conteúdo';
  nav.appendChild(skipLink);

  const container = document.createElement('div');
  container.className = 'ds-navbar__container';

  // Brand
  const brand = document.createElement('div');
  brand.className = 'ds-navbar__brand';

  const logoLink = document.createElement('a');
  logoLink.href = '/';
  logoLink.className = 'ds-navbar__logo';
  logoLink.setAttribute('aria-label', 'Página inicial');

  if (logoUrl) {
    const img = document.createElement('img');
    img.src = logoUrl;
    img.alt = systemName;
    img.className = 'ds-navbar__logo-img';
    logoLink.appendChild(img);
  }

  const text = document.createElement('span');
  text.className = 'ds-navbar__logo-text';
  text.innerText = systemName;
  logoLink.appendChild(text);

  brand.appendChild(logoLink);
  container.appendChild(brand);

  // Menu
  if (variant !== 'institutional') {
    const menu = document.createElement('ul');
    menu.className = 'ds-navbar__menu';
    menu.setAttribute('role', 'menubar');

    menuItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'ds-navbar__item';
      li.setAttribute('role', 'none');

      if (item.submenu && item.submenu.length > 0) {
        li.classList.add('ds-navbar__item--has-submenu');

        const btn = document.createElement('button');
        btn.className = `ds-navbar__link ${item.active ? 'ds-navbar__link--active' : ''}`;
        btn.setAttribute('role', 'menuitem');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-haspopup', 'true');
        btn.innerHTML = `
          ${item.label}
          <span class="ds-navbar__chevron" aria-hidden="true"></span>
        `;

        const submenu = document.createElement('ul');
        submenu.className = 'ds-navbar__submenu';
        submenu.setAttribute('role', 'menu');

        item.submenu.forEach((subItem) => {
          const subLi = document.createElement('li');
          subLi.setAttribute('role', 'none');

          const subLink = document.createElement('a');
          subLink.href = subItem.href || '#';
          subLink.className = 'ds-navbar__submenu-link';
          subLink.setAttribute('role', 'menuitem');
          subLink.innerText = subItem.label;

          subLi.appendChild(subLink);
          submenu.appendChild(subLi);
        });

        // Toggle Submenu Logic
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = li.classList.contains('ds-navbar__item--open');
          
          // Close all other submenus
          document.querySelectorAll('.ds-navbar__item--open').forEach(el => {
            if (el !== li) {
              el.classList.remove('ds-navbar__item--open');
              el.querySelector('button')?.setAttribute('aria-expanded', 'false');
            }
          });

          li.classList.toggle('ds-navbar__item--open');
          btn.setAttribute('aria-expanded', !isOpen);
        });

        li.appendChild(btn);
        li.appendChild(submenu);
      } else {
        const link = document.createElement('a');
        link.href = item.href || '#';
        link.className = `ds-navbar__link ${item.active ? 'ds-navbar__link--active' : ''}`;
        link.setAttribute('role', 'menuitem');
        if (item.active) link.setAttribute('aria-current', 'page');
        link.innerText = item.label;

        li.appendChild(link);
      }

      menu.appendChild(li);
    });

    container.appendChild(menu);
  } else {
    // Spacer for institutional variant
    const spacer = document.createElement('div');
    spacer.style.flex = '1';
    container.appendChild(spacer);
  }

  // Actions
  const actions = document.createElement('div');
  actions.className = 'ds-navbar__actions';

  // Search
  if (showSearch && variant === 'default') {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'ds-navbar__search';

    const searchInput = createInput({
      type: 'search',
      placeholder: 'Buscar...',
      label: 'Buscar no sistema',
      hideLabel: true,
      size: 'sm',
    });
    searchInput.classList.add('ds-navbar__search-input');
    
    searchContainer.appendChild(searchInput);
    actions.appendChild(searchContainer);
  }

  // Notifications
  if (notificationsCount > 0 && variant === 'default') {
    const notificationBtn = document.createElement('button');
    notificationBtn.className = 'ds-navbar__action-btn';
    notificationBtn.setAttribute('aria-label', `${notificationsCount} notificações`);
    notificationBtn.innerHTML = `
      <span class="ds-navbar__icon">🔔</span>
      <span class="ds-navbar__badge">${notificationsCount}</span>
    `;
    actions.appendChild(notificationBtn);
  }

  // User Menu
  if (user) {
    const userWrapper = document.createElement('div');
    userWrapper.className = 'ds-navbar__user';

    const userBtn = document.createElement('button');
    userBtn.className = 'ds-navbar__user-btn';
    userBtn.setAttribute('aria-expanded', 'false');
    userBtn.setAttribute('aria-haspopup', 'true');

    userBtn.innerHTML = `
      <span class="ds-navbar__avatar">${user.avatarText || 'U'}</span>
      <span class="ds-navbar__user-name">${user.name}</span>
      <span class="ds-navbar__chevron" aria-hidden="true"></span>
    `;

    const userMenu = document.createElement('ul');
    userMenu.className = 'ds-navbar__user-menu';
    userMenu.setAttribute('role', 'menu');

    const menuItems = [
      { label: 'Meu Perfil', href: '#' },
      { label: 'Configurações', href: '#' },
      { type: 'divider' },
      { label: 'Sair', href: '#', danger: true },
    ];

    menuItems.forEach((item) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'none');

      if (item.type === 'divider') {
        li.className = 'ds-navbar__user-menu-divider';
        li.setAttribute('role', 'separator');
      } else {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = `ds-navbar__user-menu-link ${item.danger ? 'ds-navbar__user-menu-link--danger' : ''}`;
        link.setAttribute('role', 'menuitem');
        link.innerText = item.label;
        li.appendChild(link);
      }
      userMenu.appendChild(li);
    });

    // Toggle User Menu Logic
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = userWrapper.classList.contains('ds-navbar__user--open');
      
      // Close all other menus
      document.querySelectorAll('.ds-navbar__item--open, .ds-navbar__user--open').forEach(el => {
        if (el !== userWrapper) {
          el.classList.remove('ds-navbar__item--open', 'ds-navbar__user--open');
          el.querySelector('button')?.setAttribute('aria-expanded', 'false');
        }
      });

      userWrapper.classList.toggle('ds-navbar__user--open');
      userBtn.setAttribute('aria-expanded', !isOpen);
    });

    userWrapper.appendChild(userBtn);
    userWrapper.appendChild(userMenu);
    actions.appendChild(userWrapper);
  }

  container.appendChild(actions);
  nav.appendChild(container);

  // Global click to close submenus
  document.addEventListener('click', () => {
    document.querySelectorAll('.ds-navbar__item--open, .ds-navbar__user--open').forEach(el => {
      el.classList.remove('ds-navbar__item--open', 'ds-navbar__user--open');
      el.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  });

  // Keyboard Navigation
  nav.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.ds-navbar__item--open, .ds-navbar__user--open').forEach(el => {
        el.classList.remove('ds-navbar__item--open', 'ds-navbar__user--open');
        el.querySelector('button')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  return nav;
};
