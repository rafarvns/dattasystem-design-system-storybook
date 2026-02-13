import './Textarea.css';

/**
 * Componente Textarea do Datta System
 */
export const createTextarea = ({
  label = 'Label',
  placeholder = '',
  helperText = '',
  error = '',
  required = false,
  disabled = false,
  readOnly = false,
  size = 'md',
  rows = 4,
  maxlength,
  value = '',
  resize = 'vertical',
  showCounter = false,
  id = `textarea-${Math.random().toString(36).substr(2, 9)}`,
}) => {
  const container = document.createElement('div');
  container.className = `textarea-field textarea-field--${size}`;
  if (error) container.classList.add('textarea-field--error');
  if (disabled) container.classList.add('textarea-field--disabled');

  // Label
  const labelElement = document.createElement('label');
  labelElement.className = 'textarea-field__label';
  labelElement.setAttribute('for', id);
  labelElement.textContent = label;

  if (required) {
    const asterisk = document.createElement('span');
    asterisk.className = 'textarea-field__required';
    asterisk.textContent = '*';
    asterisk.setAttribute('aria-hidden', 'true');
    labelElement.appendChild(asterisk);
  }

  container.appendChild(labelElement);

  // Textarea
  const textarea = document.createElement('textarea');
  textarea.className = 'textarea-field__textarea';
  textarea.id = id;
  textarea.placeholder = placeholder;
  textarea.rows = rows;
  textarea.value = value;
  textarea.disabled = disabled;
  if (readOnly) textarea.readOnly = true;
  if (maxlength) textarea.setAttribute('maxlength', maxlength);
  
  // Resize style
  textarea.style.resize = resize === 'auto' ? 'none' : resize;

  // ARIA Attributes
  if (required) textarea.setAttribute('aria-required', 'true');
  if (error) {
    textarea.setAttribute('aria-invalid', 'true');
    textarea.setAttribute('aria-describedby', `${id}-error`);
  } else if (helperText) {
    textarea.setAttribute('aria-describedby', `${id}-helper`);
  }

  container.appendChild(textarea);

  // Footer (Helper + Counter)
  const footer = document.createElement('div');
  footer.className = 'textarea-field__footer';

  // Helper/Error Message
  if (error || helperText) {
    const message = document.createElement('span');
    if (error) {
      message.className = 'textarea-field__error';
      message.id = `${id}-error`;
      message.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        ${error}
      `;
    } else {
      message.className = 'textarea-field__helper';
      message.id = `${id}-helper`;
      message.textContent = helperText;
    }
    footer.appendChild(message);
  }

  // Counter
  if (showCounter && maxlength) {
    const counter = document.createElement('span');
    counter.className = 'textarea-field__counter';
    counter.setAttribute('aria-live', 'polite');
    
    const updateCounter = (val) => {
      const current = val.length;
      counter.textContent = `${current}/${maxlength}`;
      
      if (current >= maxlength * 0.9) {
        counter.classList.add('textarea-field__counter--warning');
      } else {
        counter.classList.remove('textarea-field__counter--warning');
      }
    };

    textarea.addEventListener('input', (e) => updateCounter(e.target.value));
    updateCounter(value);
    footer.appendChild(counter);
  }

  if (footer.children.length > 0) {
    container.appendChild(footer);
  }

  // Auto-resize logic if 'auto' is selected
  if (resize === 'auto') {
    const autoResize = () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    };
    textarea.addEventListener('input', autoResize);
    // Initial call after a small delay to ensure it's rendered or if value is pre-set
    setTimeout(autoResize, 0);
  }

  return container;
};
