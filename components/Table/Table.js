import './Table.css';
import { createButton } from '../Button/Button';
import { createCheckbox } from '../Checkbox/Checkbox';

/**
 * Creates the Table component
 */
export const createTable = ({
  caption = '',
  columns = [], // { label, key, sortable, type }
  data = [],
  density = 'default', // compact, default, comfortable
  stickyHeader = false,
  selectable = false,
  onSort = () => {},
  onSelectRow = () => {},
  onSelectAll = () => {},
  actions = [], // { label, onClick, variant }
}) => {
  const wrapper = document.createElement('div');
  wrapper.className = `ds-table-wrapper ${stickyHeader ? 'ds-table-wrapper--sticky' : ''}`;

  const table = document.createElement('table');
  table.className = `ds-table ds-table--${density}`;
  table.setAttribute('role', 'grid');

  if (caption) {
    const captionEl = document.createElement('caption');
    captionEl.className = 'ds-table__caption';
    captionEl.innerText = caption;
    table.appendChild(captionEl);
  }

  // Head
  const thead = document.createElement('thead');
  thead.className = 'ds-table__head';
  const headRow = document.createElement('tr');
  headRow.className = 'ds-table__row';

  // Checkbox for selection (Head)
  if (selectable) {
    const th = document.createElement('th');
    th.className = 'ds-table__th ds-table__th--selectable';
    th.setAttribute('scope', 'col');
    
    const checkbox = createCheckbox({
      id: `table-select-all-${Math.floor(Math.random() * 1000)}`,
      onChange: (e) => onSelectAll(e.target.checked)
    });
    th.appendChild(checkbox);
    headRow.appendChild(th);
  }

  columns.forEach((col) => {
    const th = document.createElement('th');
    th.className = 'ds-table__th';
    th.setAttribute('scope', 'col');
    
    if (col.sortable) {
      th.classList.add('ds-table__th--sortable');
      th.setAttribute('aria-sort', col.sortOrder || 'none'); // ascending, descending, none

      const btn = document.createElement('button');
      btn.className = 'ds-table__sort-btn';
      
      let sortIcon = '⇅';
      if (col.sortOrder === 'ascending') sortIcon = '▲';
      if (col.sortOrder === 'descending') sortIcon = '▼';

      btn.innerHTML = `
        ${col.label}
        <span class="ds-table__sort-icon" aria-hidden="true">${sortIcon}</span>
      `;

      btn.onclick = () => {
        const nextOrder = col.sortOrder === 'ascending' ? 'descending' : col.sortOrder === 'descending' ? 'none' : 'ascending';
        onSort(col.key, nextOrder);
      };

      th.appendChild(btn);
    } else {
      th.innerText = col.label;
    }

    headRow.appendChild(th);
  });

  // Actions column (Head)
  if (actions.length > 0) {
    const thActions = document.createElement('th');
    thActions.className = 'ds-table__th ds-table__th--actions';
    thActions.setAttribute('scope', 'col');
    thActions.innerText = 'Ações';
    headRow.appendChild(thActions);
  }

  thead.appendChild(headRow);
  table.appendChild(thead);

  // Body
  const tbody = document.createElement('tbody');
  tbody.className = 'ds-table__body';

  if (data.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.className = 'ds-table__row';
    const emptyTd = document.createElement('td');
    emptyTd.className = 'ds-table__td ds-table__empty';
    emptyTd.setAttribute('colspan', columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0));
    emptyTd.innerText = 'Nenhum registro encontrado. Tente ajustar os filtros ou realizar uma nova busca.';
    emptyRow.appendChild(emptyTd);
    tbody.appendChild(emptyRow);
  } else {
    data.forEach((row, rowIndex) => {
      const tr = document.createElement('tr');
      tr.className = 'ds-table__row';
      if (row.selected) tr.classList.add('ds-table__row--selected');

      // Checkbox for selection (Body)
      if (selectable) {
        const td = document.createElement('td');
        td.className = 'ds-table__td ds-table__td--selectable';
        
        const checkbox = createCheckbox({
          id: `table-select-${rowIndex}-${Math.floor(Math.random() * 1000)}`,
          checked: row.selected,
          onChange: (e) => onSelectRow(row, e.target.checked)
        });
        td.appendChild(checkbox);
        tr.appendChild(td);
      }

      columns.forEach((col) => {
        const td = document.createElement('td');
        td.className = 'ds-table__td';
        
        const value = row[col.key];
        
        if (col.render && typeof col.render === 'function') {
          const renderedContent = col.render(value, row);
          if (typeof renderedContent === 'string') {
            td.innerHTML = renderedContent;
          } else if (renderedContent instanceof HTMLElement) {
            td.appendChild(renderedContent);
          }
        } else {
          td.innerText = value !== undefined ? value : '';
        }

        tr.appendChild(td);
      });

      // Actions (Body)
      if (actions.length > 0) {
        const tdActions = document.createElement('td');
        tdActions.className = 'ds-table__td ds-table__td--actions';
        
        actions.forEach(action => {
          const btn = createButton({
            label: action.label,
            variant: action.variant || 'ghost',
            size: 'sm',
            onClick: () => action.onClick(row)
          });
          tdActions.appendChild(btn);
        });
        
        tr.appendChild(tdActions);
      }

      tbody.appendChild(tr);
    });
  }

  table.appendChild(tbody);
  wrapper.appendChild(table);

  // Scroll indicator logic
  setTimeout(() => {
    if (wrapper.scrollWidth > wrapper.clientWidth) {
      wrapper.classList.add('ds-table-wrapper--has-scroll');
    }
  }, 0);

  return wrapper;
};
