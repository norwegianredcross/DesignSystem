import React, { forwardRef, InputHTMLAttributes } from 'react';
import {
  // Removed Textfield and TextfieldProps import from digdir/designsystemet-react
} from '@digdir/designsystemet-react';

import styles from './styles.module.css';

// Define props based on standard HTML input attributes + custom ones
export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix' | 'label' | 'aria-label' | 'aria-labelledby'> {
  label?: React.ReactNode; // Using React.ReactNode for more flexibility
  suffixIcon?: React.ReactNode;
  onSuffixClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  inputClassName?: string; // Keep this for applying classes directly to the input
  'aria-label'?: string;
  'aria-labelledby'?: string;
  description?: React.ReactNode; // Added description based on common form field patterns
  error?: React.ReactNode; // Added error for displaying validation messages
}

export const DateInput = forwardRef<
  HTMLInputElement, // Changed ref type to HTMLInputElement
  DateInputProps
>(
  (
    props,
    ref,
  ) => {
    const {
      label,
      suffixIcon,
      onSuffixClick,
      className,
      inputClassName,
      value,
      readOnly,
      placeholder,
      id,
      name,
      required,
      disabled,
      onClick,
      onChange,
      onFocus,
      onBlur,
      autoComplete,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      description,
      error,
      ...rest // Capture any other standard input attributes
    } = props;

    const wrapperClasses = [
      styles.inputWrapper,
      className,
      error ? styles.inputWrapperError : '', // Add error class to wrapper
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      styles.input, // Apply the new input style
      inputClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const suffixButtonClasses = [
      styles.suffixButton,
      onSuffixClick ? styles.suffixButtonInteractive : '',
    ]
      .filter(Boolean)
      .join(' ');

    if (!label && !ariaLabel && !ariaLabelledby) {
      console.warn('Warning: DateInput component should have a label, aria-label, or aria-labelledby for accessibility.');
    }

    // Render a label if provided
    const labelElement = label ? (
      typeof label === 'string' ? <label htmlFor={id}>{label}</label> : label
    ) : null;

    return (
      <div className={styles.fieldset}> {/* Optional: Add a fieldset-like wrapper for label/description/error */}
        {labelElement}
        {description && <p className={styles.description}>{description}</p>} {/* Style this class */}
        <div className={wrapperClasses}>
          <input
            ref={ref}
            type="text" // Assuming text input for date string
            value={value}
            readOnly={readOnly}
            placeholder={placeholder}
            id={id}
            name={name}
            required={required}
            disabled={disabled}
            onClick={onClick}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete={autoComplete}
            aria-label={ariaLabel}
            className={inputClasses} // Apply input-specific classes
            {...rest} // Spread any other input attributes
          />
          {suffixIcon && (
            <button
              type="button"
              className={suffixButtonClasses}
              onClick={onSuffixClick}
              tabIndex={onSuffixClick && !disabled ? 0 : -1} // Make button focusable only when interactive and not disabled
              aria-hidden={!onSuffixClick} // Hide from screen readers if not interactive
              disabled={disabled}
              aria-label={onSuffixClick ? "Åpne datovelger" : undefined}
            >
              {suffixIcon}
            </button>
          )}
        </div>
        {error && <p className={styles.error}>{error}</p>} {/* Style this class */}
      </div>
    );
  },
);

DateInput.displayName = 'DateInput';
