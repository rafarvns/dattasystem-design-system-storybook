import './Tabs.css';

/**
 * Creates the Tabs component
 */
export const createTabs = ({
  tabs = [], // { id, label, icon, badge, content, disabled, active }
  ariaLabel = 'Conteúdo em abas',
  variant = 'default', // default, contained
  onTabChange = () => {},
}) => {
  const container = document.createElement('div');
  container.className = `ds-tabs ${variant === 'contained' ? 'ds-tabs--contained' : ''}`;

  const tabList = document.createElement('div');
  tabList.className = 'ds-tabs__list';
  tabList.setAttribute('role', 'tablist');
  tabList.setAttribute('aria-label', ariaLabel);

  const panels = [];
  const tabButtons = [];

  tabs.forEach((tab, index) => {
    const isActive = tab.active || (tabs.every(t => !t.active) && index === 0);
    const tabId = tab.id || `tab-${index}-${Math.floor(Math.random() * 1000)}`;
    const panelId = `panel-${tabId}`;

    // Tab Button
    const button = document.createElement('button');
    button.className = `ds-tabs__tab ${isActive ? 'ds-tabs__tab--active' : ''}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('id', tabId);
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    button.setAttribute('aria-controls', panelId);
    button.setAttribute('tabindex', isActive ? '0' : '-1');
    if (tab.disabled) {
      button.setAttribute('disabled', 'true');
      button.setAttribute('aria-disabled', 'true');
    }

    // Icon
    if (tab.icon) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'ds-tabs__icon';
      iconSpan.innerHTML = tab.icon;
      iconSpan.setAttribute('aria-hidden', 'true');
      button.appendChild(iconSpan);
    }

    // Label
    const labelSpan = document.createElement('span');
    labelSpan.innerText = tab.label;
    button.appendChild(labelSpan);

    // Badge
    if (tab.badge !== undefined) {
      const badgeSpan = document.createElement('span');
      badgeSpan.className = 'ds-tabs__badge';
      badgeSpan.innerText = tab.badge;
      button.appendChild(badgeSpan);
    }

    tabList.appendChild(button);
    tabButtons.push(button);

    // Tab Panel
    const panel = document.createElement('div');
    panel.className = `ds-tabs__panel ${isActive ? 'ds-tabs__panel--active' : ''}`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('id', panelId);
    panel.setAttribute('aria-labelledby', tabId);
    panel.setAttribute('tabindex', '0');
    if (!isActive) {
      panel.setAttribute('hidden', 'true');
    }

    if (typeof tab.content === 'string') {
      panel.innerHTML = tab.content;
    } else if (tab.content instanceof HTMLElement) {
      panel.appendChild(tab.content);
    }

    panels.push(panel);
  });

  container.appendChild(tabList);
  panels.forEach(p => container.appendChild(p));

  // Logic: Switch Tab
  const switchTab = (newTab) => {
    if (newTab.disabled || newTab.classList.contains('ds-tabs__tab--active')) return;

    tabButtons.forEach((btn, i) => {
      const active = btn === newTab;
      btn.classList.toggle('ds-tabs__tab--active', active);
      btn.setAttribute('aria-selected', active);
      btn.setAttribute('tabindex', active ? '0' : '-1');
      
      panels[i].classList.toggle('ds-tabs__panel--active', active);
      if (active) {
        panels[i].removeAttribute('hidden');
      } else {
        panels[i].setAttribute('hidden', 'true');
      }
    });

    onTabChange(newTab.id);
  };

  // Events: Click
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn));
  });

  // Events: Keyboard Navigation (Arrows)
  tabList.addEventListener('keydown', (e) => {
    const activeIndex = tabButtons.indexOf(document.activeElement);
    if (activeIndex === -1) return;

    let nextIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (activeIndex + 1) % tabButtons.length;
      while (tabButtons[nextIndex].disabled) {
        nextIndex = (nextIndex + 1) % tabButtons.length;
      }
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (activeIndex - 1 + tabButtons.length) % tabButtons.length;
      while (tabButtons[nextIndex].disabled) {
        nextIndex = (nextIndex - 1 + tabButtons.length) % tabButtons.length;
      }
      e.preventDefault();
    } else if (e.key === 'Home') {
      nextIndex = 0;
      while (tabButtons[nextIndex].disabled) nextIndex++;
      e.preventDefault();
    } else if (e.key === 'End') {
      nextIndex = tabButtons.length - 1;
      while (tabButtons[nextIndex].disabled) nextIndex--;
      e.preventDefault();
    }

    if (nextIndex !== undefined) {
      tabButtons[nextIndex].focus();
    }
  });

  return container;
};
