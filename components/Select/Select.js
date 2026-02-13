import './Select.css';

/**
 * Componente Select do Datta System
 */
export const createSelect = ({
  label,
  id = 'select-' + Math.floor(Math.random() * 1000),
  options = [],
  placeholder = 'Selecione uma opção',
  size = 'md',
  helperText,
  errorText,
  required = false,
  disabled = false,
  value = '',
  onChange,
}) => {
  const container = document.createElement('div');
  container.className = `select-field select-field--${size}`;
  if (errorText) container.classList.add('select-field--error');
  if (disabled) container.classList.add('select-field--disabled');

  // Label
  if (label) {
    const labelEl = document.createElement('label');
    labelEl.className = 'select-field__label';
    labelEl.setAttribute('for', id);
    labelEl.innerHTML = label;

    if (required) {
      const asterisco = document.createElement('span');
      asterisco.className = 'select-field__required';
      asterisco.innerText = ' *';
      labelEl.appendChild(asterisco);
    }
    container.appendChild(labelEl);
  }

  // Wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'select-field__wrapper';

  // Select
  const select = document.createElement('select');
  select.className = 'select-field__select';
  select.id = id;
  if (disabled) select.disabled = true;
  if (required) select.setAttribute('aria-required', 'true');
  
  if (errorText) {
    select.setAttribute('aria-invalid', 'true');
    select.setAttribute('aria-describedby', `${id}-error`);
  } else if (helperText) {
    select.setAttribute('aria-describedby', `${id}-helper`);
  }

  // Placeholder option
  if (placeholder) {
    const placeholderOpt = document.createElement('option');
    placeholderOpt.value = '';
    placeholderOpt.disabled = true;
    placeholderOpt.selected = !value;
    placeholderOpt.innerText = placeholder;
    select.appendChild(placeholderOpt);
  }

  // Options
  options.forEach(opt => {
    if (opt.group) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = opt.group;
      opt.items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.label;
        if (item.value === value) option.selected = true;
        optgroup.appendChild(option);
      });
      select.appendChild(optgroup);
    } else {
      const option = document.createElement('option');
      option.value = opt.value;
      option.innerText = opt.label;
      if (opt.value === value) option.selected = true;
      select.appendChild(option);
    }
  });

  if (onChange) {
    select.addEventListener('change', (e) => onChange(e.target.value));
  }

  // Custom Arrow (Chevron)
  const arrow = document.createElement('span');
  arrow.className = 'select-field__arrow';
  arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

  wrapper.appendChild(select);
  wrapper.appendChild(arrow);
  container.appendChild(wrapper);

  // Footer (Helper/Error Text)
  if (errorText || helperText) {
    const footer = document.createElement('span');
    if (errorText) {
      footer.className = 'select-field__error';
      footer.id = `${id}-error`;
      footer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        ${errorText}
      `;
    } else {
      footer.className = 'select-field__helper';
      footer.id = `${id}-helper`;
      footer.innerText = helperText;
    }
    container.appendChild(footer);
  }

  return container;
};
