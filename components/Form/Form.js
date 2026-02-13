import './Form.css';
import { createButton } from '../Button/Button';
import { createModal } from '../Modal/Modal';

/**
 * Creates a Complete Form component for the Datta System.
 * 
 * @param {Object} props - Properties of the form.
 * @param {Array} props.sections - Configuration of form sections.
 * @param {Function} props.onSubmit - Submission handler.
 * @param {Function} props.onCancel - Cancellation handler.
 * @param {string} props.submitLabel - Text for submit button.
 * @param {string} props.cancelLabel - Text for cancel button.
 * @returns {HTMLFormElement}
 */
export const createForm = ({
    sections = [],
    onSubmit = () => { },
    onCancel = () => { },
    submitLabel = 'Salvar cadastro',
    cancelLabel = 'Cancelar',
}) => {
    const form = document.createElement('form');
    form.className = 'ds-form';
    form.noValidate = true;

    // Track if form is "dirty" (has changes)
    let isDirty = false;
    form.addEventListener('input', () => { isDirty = true; }, { once: true });

    // Error Summary Element
    const errorSummary = document.createElement('div');
    errorSummary.className = 'ds-form__error-summary';
    errorSummary.setAttribute('role', 'alert');
    errorSummary.setAttribute('aria-live', 'polite');
    errorSummary.hidden = true;
    form.appendChild(errorSummary);

    // Render sections
    sections.forEach(section => {
        const fieldset = document.createElement('fieldset');
        fieldset.className = 'ds-form__section';

        if (section.title) {
            const legend = document.createElement('legend');
            legend.className = 'ds-form__section-title';
            legend.innerText = section.title;
            fieldset.appendChild(legend);
        }

        if (section.description) {
            const p = document.createElement('p');
            p.className = 'ds-form__section-description';
            p.innerText = section.description;
            fieldset.appendChild(p);
        }

        const grid = document.createElement('div');
        grid.className = 'ds-form__grid';
        if (section.columns === 3) grid.classList.add('ds-form__grid--3-cols');

        section.fields.forEach(field => {
            const fieldWrapper = document.createElement('div');
            fieldWrapper.className = `ds-form__field ds-form__field--${field.width || 'full'}`;

            const component = field.component;
            fieldWrapper.appendChild(component);
            grid.appendChild(fieldWrapper);

            // Inline validation on blur
            const input = component.querySelector('input, select, textarea');
            if (input) {
                input.addEventListener('blur', () => {
                    validateField(input, field, component);
                });

                // Remove error on input if it was invalid
                input.addEventListener('input', () => {
                    if (input.getAttribute('aria-invalid') === 'true') {
                        validateField(input, field, component);
                    }
                });
            }
        });

        fieldset.appendChild(grid);
        form.appendChild(fieldset);
    });

    // Feedback Message
    const feedback = document.createElement('div');
    feedback.className = 'ds-form__feedback';
    feedback.hidden = true;
    form.appendChild(feedback);

    // Actions
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'ds-form__actions';

    const submitBtn = createButton({
        label: submitLabel,
        variant: 'primary',
        type: 'submit'
    });

    const cancelBtn = createButton({
        label: cancelLabel,
        variant: 'secondary'
    });

    // Cancel logic with Modal
    cancelBtn.addEventListener('click', () => {
        if (isDirty) {
            const modal = createModal({
                title: 'Cancelar alterações?',
                content: document.createTextNode('Tem certeza que deseja sair? As alterações não salvas serão perdidas.'),
                primaryAction: {
                    label: 'Sim, cancelar',
                    variant: 'destructive',
                    onClick: () => {
                        modal.close();
                        onCancel();
                    }
                },
                secondaryAction: {
                    label: 'Continuar editando',
                    onClick: () => modal.close()
                }
            });
            document.body.appendChild(modal);
            modal.open();
        } else {
            onCancel();
        }
    });

    actionsContainer.appendChild(submitBtn);
    actionsContainer.appendChild(cancelBtn);
    form.appendChild(actionsContainer);

    // Validation Helpers
    const validateField = (input, fieldConfig, component) => {
        let isValid = true;
        let errorMsg = '';

        const value = input.value.trim();

        if (input.required && !value && input.type !== 'checkbox') {
            isValid = false;
            errorMsg = fieldConfig.requiredMessage || 'Este campo é obrigatório.';
        } else if (input.type === 'checkbox' && input.required && !input.checked) {
            isValid = false;
            errorMsg = fieldConfig.requiredMessage || 'É necessário aceitar para prosseguir.';
        } else if (fieldConfig.validation) {
            const result = fieldConfig.validation(value);
            if (result !== true) {
                isValid = false;
                errorMsg = typeof result === 'string' ? result : (fieldConfig.errorMessage || 'Valor inválido.');
            }
        }

        updateFieldUI(input, component, isValid, errorMsg);
        return isValid;
    };

    const updateFieldUI = (input, component, isValid, errorMsg) => {
        const errorId = `${input.id}-error`;
        let errorEl = component.querySelector('.input-field__error, .select-field__error, .textarea-field__error, .checkbox__error');

        // Find generic error class or use the one that matches component
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.id = errorId;
            // Get the right class based on container
            const containerClass = component.classList[0]; // e.g. 'input-field'
            errorEl.className = `${containerClass}__error`;
            // Find where to append (usually after the wrapper or input)
            const footer = component.querySelector('.textarea-field__footer, .select-field__wrapper, .input-field__wrapper');
            if (footer) {
                footer.parentNode.insertBefore(errorEl, footer.nextSibling);
            } else {
                component.appendChild(errorEl);
            }
        }

        if (!isValid) {
            input.setAttribute('aria-invalid', 'true');
            input.setAttribute('aria-describedby', errorId);
            component.classList.add(`${component.classList[0]}--error`);
            errorEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${errorMsg}`;
            errorEl.style.display = 'flex';
        } else {
            input.setAttribute('aria-invalid', 'false');
            component.classList.remove(`${component.classList[0]}--error`);
            if (errorEl) errorEl.style.display = 'none';
        }
    };

    const showSuccess = (msg) => {
        feedback.className = 'ds-form__feedback ds-form__feedback--success';
        feedback.innerHTML = `<span class="ds-form__feedback-icon">✓</span><div class="ds-form__feedback-content"><strong>Sucesso!</strong><p>${msg}</p></div>`;
        feedback.hidden = false;
        feedback.scrollIntoView({ behavior: 'smooth' });
    };

    const showError = (msg) => {
        feedback.className = 'ds-form__feedback ds-form__feedback--error';
        feedback.innerHTML = `<span class="ds-form__feedback-icon">✕</span><div class="ds-form__feedback-content"><strong>Erro na submissão</strong><p>${msg}</p></div>`;
        feedback.hidden = false;
        feedback.scrollIntoView({ behavior: 'smooth' });
    };

    const updateErrorSummary = (errors) => {
        if (errors.length === 0) {
            errorSummary.hidden = true;
            return;
        }

        errorSummary.innerHTML = `<h2 class="ds-form__error-summary-title">Corrija os seguintes erros para continuar:</h2>`;
        const list = document.createElement('ul');
        list.className = 'ds-form__error-summary-list';

        errors.forEach(err => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${err.id}`;
            a.innerText = `${err.label}: ${err.message}`;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById(err.id).focus();
            });
            li.appendChild(a);
            list.appendChild(li);
        });

        errorSummary.appendChild(list);
        errorSummary.hidden = false;
        errorSummary.scrollIntoView({ behavior: 'smooth' });
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.hidden = true;
        errorSummary.hidden = true;

        // Validate all fields
        const errors = [];
        sections.forEach(section => {
            section.fields.forEach(field => {
                const input = field.component.querySelector('input, select, textarea');
                if (input) {
                    const isValid = validateField(input, field, field.component);
                    if (!isValid) {
                        const label = field.component.querySelector('.input-field__label, .select-field__label, .textarea-field__label, .checkbox__text')?.innerText.replace('*', '').trim() || field.name;
                        const errorEl = field.component.querySelector('.input-field__error, .select-field__error, .textarea-field__error, .checkbox__error');
                        errors.push({
                            id: input.id,
                            label: label,
                            message: errorEl ? errorEl.innerText : 'Erro no campo'
                        });
                    }
                }
            });
        });

        if (errors.length > 0) {
            updateErrorSummary(errors);
            // Focus first error
            const firstErrorInput = document.getElementById(errors[0].id);
            if (firstErrorInput) firstErrorInput.focus();
            return;
        }

        // Submission starts
        const originalSubmitText = submitBtn.innerText;
        submitBtn.classList.add('btn--loading');
        submitBtn.disabled = true;
        cancelBtn.disabled = true;

        // Simulate API call
        try {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            await onSubmit(data);
            showSuccess('O formulário foi enviado com sucesso.');
            isDirty = false;
        } catch (err) {
            showError(err.message || 'Ocorreu um erro ao processar o formulário. Tente novamente.');
        } finally {
            submitBtn.classList.remove('btn--loading');
            submitBtn.disabled = false;
            cancelBtn.disabled = false;
        }
    });

    return form;
};
