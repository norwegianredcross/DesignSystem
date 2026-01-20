import React, {
  forwardRef,
  InputHTMLAttributes,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
// Bruk de angitte stilene
import styles from "./styles.module.css";
// Importer DefaultProps for å få data-color og data-size
import type { DefaultProps } from "../../types";
import type { MergeRight } from "../../utilities";
import { useLanguageOptional } from "../../context/LanguageContext";

// --- Oppdatert grensesnitt ---
export type DateInputProps = MergeRight<
  DefaultProps, // <-- Legg til dette
  Omit<
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
  > & {
    label?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    onSuffixClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string; // Klasse for det ytre fieldset-div
    inputWrapperClassName?: string; // Klasse spesifikt for input-wrapper div
    inputClassName?: string; // Klasse spesifikt for input-elementet
    "aria-label"?: string;
    "aria-labelledby"?: string;
    description?: React.ReactNode;
    error?: React.ReactNode; // Brukes for styling og aria-invalid
    value?: string | null;
    defaultValue?: string | null;
    onChange?: (
      event: React.ChangeEvent<HTMLInputElement>,
      formattedValue: string,
    ) => void;
  }
>;

// --- Hjelpefunksjoner (format, getDigits, validate) ---
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

/**
 * DateInput-komponent for inntasting av datoer i norsk format (dd.mm.åååå).
 * Håndterer automatisk formatering og validering av datoer.
 */
export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (props, ref) => {
    const { t } = useLanguageOptional();

    // Fallback: inject minimal DateInput styles if consumer did not import the CSS bundle.
    useEffect(() => {
      const styleId = 'rk-dateinput-inline-styles';
      if (typeof document === 'undefined') return;
      if (document.getElementById(styleId)) return;
      const css = buildDateInputInlineCss(styles);
      const tag = document.createElement('style');
      tag.id = styleId;
      tag.textContent = css;
      document.head.appendChild(tag);
    }, []);

    const {
      label,
      suffixIcon,
      onSuffixClick,
      className, // For ytre fieldset
      inputWrapperClassName, // For input wrapper div
      inputClassName, // For selve input-elementet
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
      onFocus, // Send ekstern onFocus videre
      onBlur,  // Send ekstern onBlur videre
      autoComplete = "off",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      description,
      error, // Bruk error-prop for styling
      "data-color": dataColor, // <-- Destrukturering
      "data-size": dataSize,   // <-- Destrukturering
      ...rest
    } = props;

    const isControlled = controlledValue !== undefined;
    const internalInputRef = useRef<HTMLInputElement>(null);
    React.useImperativeHandle(
      ref,
      () => internalInputRef.current as HTMLInputElement,
    );

    const getFormattedValue = useCallback(
      (val: string | null | undefined) => {
        const digits = getDigits(val);
        const validatedDigits = validateDigits(digits);
        return formatNorwegianDate(validatedDigits);
      },
      [],
    );

    const [displayValue, setDisplayValue] = useState(() =>
      getFormattedValue(controlledValue ?? defaultValue),
    );

    // Oppdater visningsverdien når kontrollert verdi endres
    useEffect(() => {
      if (isControlled) {
        const formattedPropValue = getFormattedValue(controlledValue);
        if (formattedPropValue !== displayValue) {
          setDisplayValue(formattedPropValue);
          if (
            internalInputRef.current &&
            internalInputRef.current.value !== formattedPropValue
          ) {
            internalInputRef.current.value = formattedPropValue;
          }
        }
      }
    }, [controlledValue, isControlled, displayValue, getFormattedValue]);


    // Håndterer endringer i input-feltet
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

          if (formatted !== previousFormattedValue || isControlled) { // Varsle hvis kontrollert
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
      [displayValue, isControlled, onChangeProp, getFormattedValue],
    );

    const fieldsetClasses = [styles.fieldset, className].filter(Boolean).join(' ');
    
    const wrapperClasses = [
      styles.inputWrapper, 
      inputWrapperClassName, 
      error ? styles.inputWrapperError : '', 
    ].filter(Boolean).join(' ');

    const inputClasses = [
        inputClassName
    ].filter(Boolean).join(' ');

    const suffixButtonClasses = [
        styles.suffixButton, 
        onSuffixClick ? styles.suffixButtonInteractive : '', 
    ].filter(Boolean).join(' ');


    if (!label && !ariaLabel && !ariaLabelledby) {
      console.warn('Advarsel: DateInput-komponenten bør ha label, aria-label, eller aria-labelledby for tilgjengelighet.');
    }
    const labelId = label && typeof label === 'string' ? (ariaLabelledby || `${id}-label`) : undefined;
    const descriptionId = description ? `${id}-desc` : undefined;
    const errorId = error ? `${id}-err` : undefined;
    const describedByIds = [descriptionId, errorId].filter(Boolean).join(' ') || undefined;

    return (
      // --- Bruk data-color og data-size på den ytre wrapperen ---
      <div 
        className={fieldsetClasses}
        data-color={dataColor} // <-- Bruk
        data-size={dataSize}   // <-- Bruk
      >
        {label && typeof label === 'string' ? (
          <label id={labelId} htmlFor={id}>
            {label}
          </label>
        ) : (
          label
        )}

        {description && (
          <p id={descriptionId} className={styles.description}>
            {description}
          </p>
        )}

        <div className={wrapperClasses}>
          <input
            ref={internalInputRef}
            type="text"
            inputMode="numeric"
            pattern="\d{2}\.\d{2}\.\d{4}"
            maxLength={10}
            value={displayValue}
            readOnly={readOnly}
            placeholder={placeholder}
            id={id}
            name={name}
            required={required}
            disabled={disabled}
            onClick={onClick}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete={autoComplete}
            aria-label={ariaLabel}
            aria-labelledby={labelId}
            aria-describedby={describedByIds}
            aria-invalid={!!error}
            className={inputClasses}
            {...rest}
          />
          {suffixIcon && (
            <button
              type="button"
              className={suffixButtonClasses}
              onClick={!disabled ? onSuffixClick : undefined}
              tabIndex={onSuffixClick && !disabled ? 0 : -1}
              aria-hidden={!onSuffixClick}
              disabled={disabled}
              aria-label={onSuffixClick ? t('dateInput.openDatePicker') : undefined}
            >
              {suffixIcon}
            </button>
          )}
        </div>

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

// Build a minimal CSS fallback using the hashed class names from the CSS module.
function buildDateInputInlineCss(s: Record<string, string>): string {
  return `
.${s.fieldset} {
  margin-bottom: var(--ds-spacing-4, 16px);
}
.${s.fieldset} label {
  display: block;
  margin-bottom: var(--ds-spacing-1, 4px);
  font-weight: var(--ds-font-weight-medium, 500);
  color: var(--ds-color-text-default, #2b2b2b);
}
.${s.description} {
  font-size: var(--ds-font-size-sm, 14px);
  color: var(--ds-color-text-subtle, #5d5d5d);
  margin-top: var(--ds-spacing-1, 4px);
  margin-bottom: var(--ds-spacing-2, 8px);
}
.${s.error} {
  font-size: var(--ds-font-size-sm, 14px);
  color: var(--ds-color-danger-text-default, #c30000);
  margin-top: var(--ds-spacing-1, 4px);
}
.${s.inputWrapper} {
  display: flex;
  align-items: stretch;
  width: 100%;
  position: relative;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-default, #797979);
  border-radius: var(--ds-border-radius-md, 4px);
  overflow: hidden;
  transition: border-color 0.1s ease-out, outline 0.1s ease-out;
}
.${s.inputWrapperError} {
  border-color: var(--ds-color-danger-border-default, #c30000);
}
.${s.inputWrapper}:focus-within {
  outline: var(--ds-border-width-focus, 3px) solid var(--ds-color-focus-outer, #2B2B2B);
  outline-offset: var(--ds-focus-outline-offset, 2px);
}
.${s.inputWrapper} input {
  box-sizing: border-box;
  flex-grow: 1;
  width: auto;
  min-width: 0;
  background-color: var(--ds-color-background-default, #fff);
  color: var(--ds-color-text-default, #2b2b2b);
  border: none;
  border-radius: 0;
  outline: none;
  padding: var(--ds-size-2, 8px) var(--ds-size-3, 12px);
  font-family: inherit;
  font-size: inherit;
  appearance: none;
  -webkit-appearance: none;
}
.${s.inputWrapper} input:disabled {
  opacity: var(--ds-opacity-disabled, 0.5);
  cursor: not-allowed;
  background-color: var(--ds-color-neutral-surface-subtle, #f0f0f0);
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
}
.${s.suffixButton} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 var(--ds-size-3, 12px);
  margin: 0;
  border: none;
  border-radius: 0;
  border-left: var(--ds-border-width-default, 1px) solid var(--ds-color-border-default, #797979);
  background-color: var(--ds-color-surface-tinted, #e8e8e8);
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: 1.25rem;
  box-sizing: border-box;
  cursor: default;
  transition: background-color 0.15s ease-out, border-color 0.15s ease-out, color 0.15s ease-out;
}
.${s.suffixButtonInteractive} {
  cursor: pointer;
}
.${s.suffixButtonInteractive}:hover:not(:disabled) {
  color: var(--ds-color-text-default, #2b2b2b);
  background-color: var(--ds-color-surface-hover, #dadada);
}
.${s.suffixButton}:disabled {
  opacity: var(--ds-opacity-disabled, 0.3);
  cursor: not-allowed;
  background-color: var(--ds-color-neutral-surface-tinted, #e8e8e8);
  border-left-color: var(--ds-color-neutral-border-default, #797979);
}
`;
}