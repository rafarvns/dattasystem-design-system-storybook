import './Radio.css';

/**
 * Creates an individual Radio component
 */
export const createRadio = ({
  id,
  name,
  value,
  label,
  checked = false,
  disabled = false,
  tabIndex = -1,
  onChange,
}) => {
  const container = document.createElement('div');
  container.className = 'radio';

  const input = document.createElement('input');
  input.type = 'radio';
  input.className = 'radio__input';
  input.id = id;
  input.name = name;
  input.value = value;
  input.checked = checked;
  input.disabled = disabled;
  input.tabIndex = tabIndex;

  if (onChange) {
    input.addEventListener('change', (e) => onChange(e, value));
  }

  const labelElement = document.createElement('label');
  labelElement.className = 'radio__label';
  labelElement.setAttribute('for', id);

  const circle = document.createElement('span');
  circle.className = 'radio__circle';

  const text = document.createElement('span');
  text.className = 'radio__text';
  text.innerText = label;

  labelElement.appendChild(circle);
  labelElement.appendChild(text);

  container.appendChild(input);
  container.appendChild(labelElement);

  return container;
};

/**
 * Creates a Group of Radio buttons
 */
export const createRadioGroup = ({
  name,
  label,
  options = [],
  selectedValue = '',
  orientation = 'vertical',
  required = false,
  error = false,
  helperText = '',
  onChange,
}) => {
  const fieldset = document.createElement('fieldset');
  fieldset.className = `radio-group ${orientation === 'horizontal' ? 'radio-group--horizontal' : ''} ${error ? 'radio-group--error' : ''}`;
  
  if (error) {
    fieldset.setAttribute('aria-invalid', 'true');
  }
  if (required) {
    fieldset.setAttribute('aria-required', 'true');
  }

  // Legend
  const legend = document.createElement('legend');
  legend.className = 'radio-group__legend';
  legend.innerText = label;

  if (required) {
    const requiredIndicator = document.createElement('span');
    requiredIndicator.className = 'radio-group__required';
    requiredIndicator.innerText = '*';
    legend.appendChild(requiredIndicator);
  }

  fieldset.appendChild(legend);

  // Options container
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'radio-group__options';

  // Roving tabindex and arrow navigation logic
  const radioElements = [];
  
  options.forEach((option, index) => {
    const isChecked = option.value === selectedValue;
    const radioId = option.id || `${name}-${option.value}-${Math.floor(Math.random() * 1000)}`;
    
    // Default tabIndex: 0 for checked item or first item if none checked. -1 for others.
    let initialTabIndex = -1;
    if (selectedValue) {
      initialTabIndex = isChecked ? 0 : -1;
    } else {
      initialTabIndex = index === 0 ? 0 : -1;
    }

    const radio = createRadio({
      id: radioId,
      name,
      value: option.value,
      label: option.label,
      checked: isChecked,
      disabled: option.disabled,
      tabIndex: initialTabIndex,
      onChange: (e, val) => {
        updateRovingTabIndex(val);
        if (onChange) onChange(e, val);
      },
    });

    radioElements.push(radio.querySelector('input'));
    optionsContainer.appendChild(radio);
  });

  fieldset.appendChild(optionsContainer);

  // Helper text
  if (helperText) {
    const helper = document.createElement('span');
    helper.className = 'radio-group__helper';
    helper.id = `${name}-helper`;
    helper.innerText = helperText;
    fieldset.appendChild(helper);
    fieldset.setAttribute('aria-describedby', helper.id);
  }

  // Keyboard navigation logic
  const updateRovingTabIndex = (checkedValue) => {
    radioElements.forEach((input) => {
      input.tabIndex = input.value === checkedValue ? 0 : -1;
    });
  };

  fieldset.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    if (active.type !== 'radio' || !optionsContainer.contains(active)) return;

    const currentIndex = radioElements.indexOf(active);
    let nextIndex;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % radioElements.length;
      e.preventDefault();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + radioElements.length) % radioElements.length;
      e.preventDefault();
    }

    if (nextIndex !== undefined) {
      const nextInput = radioElements[nextIndex];
      if (!nextInput.disabled) {
        nextInput.checked = true;
        nextInput.focus();
        updateRovingTabIndex(nextInput.value);
        // Trigger change event manually as focus/checked change doesn't always trigger it for programatic changes
        const event = new Event('change', { bubbles: true });
        nextInput.dispatchEvent(event);
      } else {
        // Skip disabled options? (Simple implementation: just move focus, but browser skips them usually)
        // For now, simple implementation.
      }
    }
  });

  return fieldset;
};
