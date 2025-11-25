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
              aria-label={onSuffixClick ? "Åpne datovelger" : undefined}
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