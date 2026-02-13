import './Input.css';

/**
 * Componente de Input do Datta System
 */
export const createInput = ({
  label = 'Label',
  hideLabel = false,
  type = 'text',
  placeholder = '',
  helperText = '',
  errorMessage = '',
  id = `input-${Math.random().toString(36).substr(2, 9)}`,
  size = 'md',
  required = false,
  disabled = false,
  readOnly = false,
  iconLeft = null,
  iconRight = null,
  value = '',
} = {}) => {
  const container = document.createElement('div');
  container.className = `input-field input-field--${size}`;
  
  if (hideLabel) container.classList.add('input-field--no-label');
  if (disabled) container.classList.add('input-field--disabled');
  if (errorMessage) container.classList.add('input-field--error');
  if (iconLeft) container.classList.add('input-field--with-icon-left');
  if (iconRight || type === 'password') container.classList.add('input-field--with-icon-right');

  // Label
  const labelElement = document.createElement('label');
  labelElement.className = 'input-field__label';
  labelElement.setAttribute('for', id);
  labelElement.textContent = label;

  if (required) {
    const asterisk = document.createElement('span');
    asterisk.className = 'input-field__required';
    asterisk.textContent = '*';
    asterisk.setAttribute('aria-hidden', 'true');
    labelElement.appendChild(asterisk);
  }

  container.appendChild(labelElement);

  // Wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'input-field__wrapper';

  // Icon Left
  if (iconLeft) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'input-field__icon input-field__icon--left';
    iconSpan.innerHTML = iconLeft;
    iconSpan.setAttribute('aria-hidden', 'true');
    wrapper.appendChild(iconSpan);
  }

  // Input
  const input = document.createElement('input');
  input.className = 'input-field__input';
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  input.disabled = disabled;
  input.readOnly = readOnly;
  input.value = value;

  if (required) input.setAttribute('aria-required', 'true');
  if (errorMessage) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', `${id}-error`);
  } else if (helperText) {
    input.setAttribute('aria-describedby', `${id}-helper`);
  }

  wrapper.appendChild(input);

  // Icon Right / Password Toggle
  if (type === 'password') {
    const toggle = document.createElement('button');
    toggle.className = 'input-field__password-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Mostrar senha');
    toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    
    toggle.onclick = () => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      toggle.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
      toggle.innerHTML = isPassword 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    };
    wrapper.appendChild(toggle);
  } else if (iconRight) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'input-field__icon input-field__icon--right';
    iconSpan.innerHTML = iconRight;
    iconSpan.setAttribute('aria-hidden', 'true');
    wrapper.appendChild(iconSpan);
  }

  container.appendChild(wrapper);

  // Helper / Error message
  if (errorMessage) {
    const error = document.createElement('span');
    error.className = 'input-field__error';
    error.id = `${id}-error`;
    error.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${errorMessage}`;
    container.appendChild(error);
  } else if (helperText) {
    const helper = document.createElement('span');
    helper.className = 'input-field__helper';
    helper.id = `${id}-helper`;
    helper.textContent = helperText;
    container.appendChild(helper);
  }

  return container;
};
