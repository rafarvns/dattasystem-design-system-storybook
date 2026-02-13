import './Pagination.css';
import { createSelect } from '../Select/Select';

/**
 * Creates the Pagination component
 */
export const createPagination = ({
  totalItems = 0,
  itemsPerPage = 10,
  currentPage = 1,
  showInfo = true,
  showPerPage = false,
  variant = 'default', // default, simple, compact
  onPageChange = () => {},
  onItemsPerPageChange = () => {},
} = {}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const current = Math.min(Math.max(1, currentPage), totalPages);

  const nav = document.createElement('nav');
  nav.className = `ds-pagination ds-pagination--${variant}`;
  nav.setAttribute('aria-label', 'Paginação de resultados');

  // Left Section: Info and/or Per Page
  const leftSection = document.createElement('div');
  leftSection.className = 'ds-pagination__left';
  leftSection.style.display = 'flex';
  leftSection.style.alignItems = 'center';
  leftSection.style.gap = 'var(--spacing-4)';

  if (showInfo && variant !== 'compact') {
    const info = document.createElement('div');
    info.className = 'ds-pagination__info';
    
    const start = totalItems === 0 ? 0 : (current - 1) * itemsPerPage + 1;
    const end = Math.min(current * itemsPerPage, totalItems);
    
    info.innerHTML = `Mostrando <strong>${start}–${end}</strong> de <strong>${totalItems}</strong> resultados`;
    leftSection.appendChild(info);
  }

  if (showPerPage && variant !== 'compact' && variant !== 'simple') {
    const perPageContainer = document.createElement('div');
    perPageContainer.className = 'ds-pagination__per-page';
    
    const label = document.createElement('label');
    label.className = 'ds-pagination__per-page-label';
    const selectId = `per-page-${Math.floor(Math.random() * 1000)}`;
    label.setAttribute('for', selectId);
    label.innerText = 'Itens por página:';
    
    const select = createSelect({
      id: selectId,
      size: 'sm',
      value: itemsPerPage.toString(),
      options: [
        { label: '10', value: '10' },
        { label: '20', value: '20' },
        { label: '50', value: '50' },
        { label: '100', value: '100' },
      ],
      onChange: (val) => onItemsPerPageChange(parseInt(val, 10)),
    });
    
    perPageContainer.appendChild(label);
    perPageContainer.appendChild(select);
    leftSection.appendChild(perPageContainer);
  }

  if (leftSection.childNodes.length > 0) {
    nav.appendChild(leftSection);
  }

  // Right Section: Controls
  const controls = document.createElement('div');
  controls.className = 'ds-pagination__controls';

  const list = document.createElement('ul');
  list.className = 'ds-pagination__list';

  // Helper function to create a button
  const createBtn = (label, page, isActive = false, isDisabled = false, isPrev = false, isNext = false) => {
    const li = document.createElement('li');
    li.className = 'ds-pagination__item';

    const btn = document.createElement('button');
    btn.className = 'ds-pagination__btn';
    if (isActive) btn.classList.add('ds-pagination__btn--active');
    if (isPrev) btn.classList.add('ds-pagination__btn--prev');
    if (isNext) btn.classList.add('ds-pagination__btn--next');
    
    btn.disabled = isDisabled;
    if (isActive) btn.setAttribute('aria-current', 'page');
    
    let ariaLabel = `Página ${page}`;
    if (isPrev) ariaLabel = 'Página anterior';
    if (isNext) ariaLabel = 'Próxima página';
    btn.setAttribute('aria-label', ariaLabel);

    if (isPrev) {
      btn.innerHTML = `<span aria-hidden="true">←</span> <span class="ds-pagination__btn-text">Anterior</span>`;
    } else if (isNext) {
      btn.innerHTML = `<span class="ds-pagination__btn-text">Próximo</span> <span aria-hidden="true">→</span>`;
    } else {
      btn.innerText = label;
    }

    if (!isDisabled && !isActive) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        onPageChange(page);
      });
    }

    li.appendChild(btn);
    return li;
  };

  const createEllipsis = () => {
    const li = document.createElement('li');
    li.className = 'ds-pagination__item ds-pagination__item--ellipsis';
    li.setAttribute('aria-hidden', 'true');
    li.innerHTML = `<span class="ds-pagination__ellipsis">...</span>`;
    return li;
  };

  // Previous Button
  list.appendChild(createBtn('Anterior', current - 1, false, current === 1, true, false));

  // Numeric Buttons (Smart Truncation)
  if (variant !== 'simple') {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Logic from requirements
      // Always show first and last
      // Case 1: Near beginning (current <= 4)
      if (current <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } 
      // Case 2: Near end (current >= totalPages - 3)
      else if (current >= totalPages - 3) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      }
      // Case 3: Middle
      else {
        pages.push(1);
        pages.push('ellipsis');
        pages.push(current - 1);
        pages.push(current);
        pages.push(current + 1);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    pages.forEach(p => {
      if (p === 'ellipsis') {
        list.appendChild(createEllipsis());
      } else {
        list.appendChild(createBtn(p.toString(), p, p === current));
      }
    });
  }

  // Next Button
  list.appendChild(createBtn('Próximo', current + 1, false, current === totalPages, false, true));

  controls.appendChild(list);
  nav.appendChild(controls);

  return nav;
};
