import './Breadcrumb.css';

/**
 * Creates the Breadcrumb component
 */
export const createBreadcrumb = ({
  items = [],
  separator = '/',
  maxLevels = 4,
}) => {
  const nav = document.createElement('nav');
  nav.className = 'ds-breadcrumb';
  nav.setAttribute('aria-label', 'Navegação estrutural');

  const list = document.createElement('ol');
  list.className = 'ds-breadcrumb__list';

  let visibleItems = [...items];
  const isTruncated = items.length > maxLevels;

  if (isTruncated) {
    // Keep first and last two
    const first = items[0];
    const lastTwo = items.slice(-2);
    visibleItems = [first, { isEllipsis: true }, ...lastTwo];
  }

  visibleItems.forEach((item, index) => {
    const isLast = index === visibleItems.length - 1;
    const li = document.createElement('li');
    li.className = 'ds-breadcrumb__item';

    if (item.isEllipsis) {
      li.classList.add('ds-breadcrumb__item--ellipsis');
      
      const btn = document.createElement('button');
      btn.className = 'ds-breadcrumb__ellipsis';
      btn.setAttribute('aria-label', 'Mostrar níveis ocultos');
      btn.innerText = '...';
      
      btn.addEventListener('click', () => {
        // Simple expansion logic: re-render with all items
        const expandedBreadcrumb = createBreadcrumb({ items, separator, maxLevels: items.length });
        nav.parentElement.replaceChild(expandedBreadcrumb, nav);
      });

      li.appendChild(btn);
    } else if (isLast) {
      li.classList.add('ds-breadcrumb__item--current');
      li.setAttribute('aria-current', 'page');
      
      const text = document.createElement('span');
      text.className = 'ds-breadcrumb__text';
      text.innerText = item.label;
      li.appendChild(text);
    } else {
      const link = document.createElement('a');
      link.href = item.href || '#';
      link.className = 'ds-breadcrumb__link';
      
      if (item.icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'ds-breadcrumb__icon';
        iconSpan.setAttribute('aria-hidden', 'true');
        iconSpan.innerHTML = item.icon;
        link.appendChild(iconSpan);
      }
      
      const label = document.createTextNode(item.label);
      link.appendChild(label);
      li.appendChild(link);
    }

    list.appendChild(li);

    // Add separator if not last
    if (!isLast) {
      const sep = document.createElement('span');
      sep.className = 'ds-breadcrumb__separator';
      sep.setAttribute('aria-hidden', 'true');
      sep.innerText = separator;
      li.appendChild(sep);
    }
  });

  nav.appendChild(list);
  return nav;
};
