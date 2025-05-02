// src/components/DateInput/DateInput.tsx
import React, {
  forwardRef,
  InputHTMLAttributes,
  useState,
  useEffect, // Re-added useEffect
  useCallback,
  useRef,
} from "react";
// Use the styles provided (assuming this path is correct and contains the CSS from the prompt)
import styles from "../DateInput/styles.module.css";

// --- Interface remains the same ---
export interface DateInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "prefix"
    | "suffix"
    | "label"
    | "aria-label"
    | "aria-labelledby"
    | "type"
    | "inputMode"
    | "pattern"
    | "maxLength"
    | "value"
    | "defaultValue"
    | "onChange"
  > {
  label?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onSuffixClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string; // Class for the outer fieldset div
  inputWrapperClassName?: string; // Class specifically for the input wrapper div
  inputClassName?: string; // Class specifically for the input element
  "aria-label"?: string;
  "aria-labelledby"?: string;
  description?: React.ReactNode;
  error?: React.ReactNode; // Used for styling and aria-invalid
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => void;
}

// --- Helper functions (format, getDigits, validate) remain the same ---
const formatNorwegianDate = (digits: string): string => {
  const d = digits.slice(0, 2);
  const m = digits.slice(2, 4);
  const y = digits.slice(4, 8);
  if (digits.length > 4) return `${d}.${m}.${y}`;
  if (digits.length > 2) return `${d}.${m}`;
  if (digits.length > 0) return d;
  return "";
};

const getDigits = (value: string | null | undefined): string => {
  return (value || "").replace(/\D/g, "");
};

const validateDigits = (digits: string): string => {
  let validated = digits;
  if (validated.length >= 2) {
    const dayNum = parseInt(validated.substring(0, 2), 10);
    if (!isNaN(dayNum) && dayNum > 31) validated = "31" + validated.substring(2);
  }
  if (validated.length >= 4) {
    const monthNum = parseInt(validated.substring(2, 4), 10);
    if (!isNaN(monthNum) && monthNum > 12) validated = validated.substring(0, 2) + "12" + validated.substring(4);
  }
  return validated.slice(0, 8);
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (props, ref) => {
    const {
      label,
      suffixIcon,
      onSuffixClick,
      className, // For outer fieldset
      inputWrapperClassName, // For input wrapper div
      inputClassName, // For the actual input element
      value: controlledValue,
      defaultValue,
      onChange: onChangeProp,
      readOnly,
      placeholder = "dd.mm.åååå",
      id,
      name,
      required,
      disabled,
      onClick,
      onFocus, // Pass external onFocus
      onBlur,  // Pass external onBlur
      autoComplete = "off",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      description,
      error, // Use error prop for styling
      ...rest
    } = props;

    const isControlled = controlledValue !== undefined; // Re-added
    const internalInputRef = useRef<HTMLInputElement>(null);
    React.useImperativeHandle(
      ref,
      () => internalInputRef.current as HTMLInputElement,
    );

    // Helper to get formatted value, used in state init and effect
    const getFormattedValue = useCallback(
      (val: string | null | undefined) => {
        const digits = getDigits(val);
        const validatedDigits = validateDigits(digits);
        return formatNorwegianDate(validatedDigits);
      },
      [],
    );

    // Initialize state based on prop/default once
    const [displayValue, setDisplayValue] = useState(() =>
      getFormattedValue(controlledValue ?? defaultValue),
    );

    // --- useEffect for controlled prop sync RE-ADDED ---
    useEffect(() => {
      if (isControlled) {
        const formattedPropValue = getFormattedValue(controlledValue);
        // Update only if the formatted prop value differs from the current display state
        if (formattedPropValue !== displayValue) {
          setDisplayValue(formattedPropValue);
          // If the input element's value somehow diverged, sync it too
          if (
            internalInputRef.current &&
            internalInputRef.current.value !== formattedPropValue
          ) {
            internalInputRef.current.value = formattedPropValue;
          }
        }
      }
      // Rerun ONLY when the external controlledValue changes or control status changes.
      // Include displayValue to ensure comparison is up-to-date
    }, [controlledValue, isControlled, displayValue, getFormattedValue]);


    const handleInputChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        const currentValueInInput = input.value;
        const previousFormattedValue = displayValue;

        const currentDigits = getDigits(currentValueInInput).slice(0, 8);
        const validatedDigits = validateDigits(currentDigits);
        const formatted = formatNorwegianDate(validatedDigits);

        let cursorPos = 0;
        const numDigits = validatedDigits.length;
        if (numDigits <= 2) cursorPos = numDigits;
        else if (numDigits <= 4) cursorPos = numDigits + 1;
        else cursorPos = numDigits + 2;
        cursorPos = Math.min(cursorPos, formatted.length);

        requestAnimationFrame(() => {
          if (!internalInputRef.current) return;
          setDisplayValue(formatted);
          internalInputRef.current.value = formatted;
          internalInputRef.current.setSelectionRange(cursorPos, cursorPos);

          if (formatted !== previousFormattedValue || isControlled) { // Notify if controlled
            if (onChangeProp) {
              const syntheticEvent = {
                ...event,
                target: { ...input, value: formatted },
              } as React.ChangeEvent<HTMLInputElement>;
              onChangeProp(syntheticEvent, formatted);
            }
          }
        });
      },
      [displayValue, isControlled, onChangeProp, getFormattedValue], // Added isControlled and getFormattedValue
    );

    // --- Class Name Logic using InputField styles ---
    const fieldsetClasses = [styles.fieldset, className].filter(Boolean).join(' ');

    // Wrapper class - applies error state styling from InputField CSS
    const wrapperClasses = [
      styles.inputWrapper, // Base style from InputField CSS
      inputWrapperClassName, // Allow external override/extension
      error ? styles.inputWrapperError : '', // Apply error class based on prop
      // Add disabled class if your CSS defines one for the wrapper
      // disabled ? styles.inputWrapperDisabled : '',
    ].filter(Boolean).join(' ');

    // Input element class (may not be strictly needed if CSS targets .inputWrapper input)
    const inputClasses = [
        // styles.input, // This class might not exist in InputField/styles.module.css
        inputClassName // Allow external override/extension
    ].filter(Boolean).join(' ');

    // Suffix button class using InputField styles
    const suffixButtonClasses = [
        styles.suffixButton, // Base style from InputField CSS
        onSuffixClick ? styles.suffixButtonInteractive : '', // Add interactive class if clickable
        // Add disabled class if your CSS defines one for the button
        // disabled ? styles.suffixButtonDisabled : '',
    ].filter(Boolean).join(' ');


    // --- ARIA attribute setup ---
    if (!label && !ariaLabel && !ariaLabelledby) {
      console.warn('Warning: DateInput component should have a label, aria-label, or aria-labelledby for accessibility.');
    }
    const labelId = label && typeof label === 'string' ? (ariaLabelledby || `${id}-label`) : undefined;
    const descriptionId = description ? `${id}-desc` : undefined;
    const errorId = error ? `${id}-err` : undefined;
    const describedByIds = [descriptionId, errorId].filter(Boolean).join(' ') || undefined;

    return (
      // Use the fieldset structure and classes from InputField CSS
      <div className={fieldsetClasses}>
        {label && typeof label === 'string' ? (
          <label id={labelId} htmlFor={id}>
            {label}
          </label>
        ) : (
          label // Render custom label node directly
        )}

        {description && (
          <p id={descriptionId} className={styles.description}> {/* Use description class */}
            {description}
          </p>
        )}

        {/* This wrapper gets the border, focus, error styles from InputField CSS */}
        <div className={wrapperClasses}>
          <input
            ref={internalInputRef}
            type="text"
            inputMode="numeric"
            pattern="\d{2}\.\d{2}\.\d{4}"
            maxLength={10}
            value={displayValue} // Driven by state
            readOnly={readOnly}
            placeholder={placeholder}
            id={id}
            name={name}
            required={required}
            disabled={disabled} // Input disabled state is handled by CSS selector input:disabled
            onClick={onClick}
            onChange={handleInputChange}
            onFocus={onFocus} // Pass through external handler
            onBlur={onBlur}   // Pass through external handler
            autoComplete={autoComplete}
            aria-label={ariaLabel}
            aria-labelledby={labelId} // Use calculated labelId
            aria-describedby={describedByIds} // Use combined describedby IDs
            aria-invalid={!!error} // Set aria-invalid based on error prop
            className={inputClasses} // Apply specific input class if needed
            {...rest}
          />
          {suffixIcon && (
            <button
              type="button"
              className={suffixButtonClasses} // Use suffixButton classes
              onClick={!disabled ? onSuffixClick : undefined} // Disable click handler too
              tabIndex={onSuffixClick && !disabled ? 0 : -1}
              aria-hidden={!onSuffixClick}
              disabled={disabled} // Apply disabled attribute
              aria-label={onSuffixClick ? "Åpne datovelger" : undefined}
            >
              {suffixIcon}
            </button>
          )}
        </div>

        {/* Error message - use error class from InputField CSS */}
        {error && (
          <p id={errorId} className={styles.error} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

DateInput.displayName = 'DateInput';
