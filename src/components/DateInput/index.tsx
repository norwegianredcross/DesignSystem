import React, { forwardRef, InputHTMLAttributes } from 'react';
import {
} from '@digdir/designsystemet-react';

import styles from './styles.module.css';

export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix' | 'label' | 'aria-label' | 'aria-labelledby'> {
  label?: React.ReactNode; 
  suffixIcon?: React.ReactNode;
  onSuffixClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  inputClassName?: string; 
  'aria-label'?: string;
  'aria-labelledby'?: string;
  description?: React.ReactNode; 
  error?: React.ReactNode; 
}

export const DateInput = forwardRef<
  HTMLInputElement, 
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
      ...rest 
    } = props;

    const wrapperClasses = [
      styles.inputWrapper,
      className,
      error ? styles.inputWrapperError : '', 
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      styles.input, 
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

    const labelElement = label ? (
      typeof label === 'string' ? <label htmlFor={id}>{label}</label> : label
    ) : null;

    return (
      <div className={styles.fieldset}> 
        {labelElement}
        {description && <p className={styles.description}>{description}</p>} {/* Style this class */}
        <div className={wrapperClasses}>
          <input
            ref={ref}
            type="text" 
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
            className={inputClasses} 
            {...rest} 
          />
          {suffixIcon && (
            <button
              type="button"
              className={suffixButtonClasses}
              onClick={onSuffixClick}
              tabIndex={onSuffixClick && !disabled ? 0 : -1} 
              aria-hidden={!onSuffixClick} 
              disabled={disabled}
              aria-label={onSuffixClick ? "Åpne datovelger" : undefined}
            >
              {suffixIcon}
            </button>
          )}
        </div>
        {error && <p className={styles.error}>{error}</p>} 
      </div>
    );
  },
);

DateInput.displayName = 'DateInput';
