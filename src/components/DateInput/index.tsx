import React, {
  forwardRef,
  InputHTMLAttributes,
  useState,
  useEffect,
  useCallback,
  useId,
  useRef,
} from "react";
import { isValid, parse } from "date-fns";
import styles from "./styles.module.css";
import type { DefaultProps, LabelRequired } from "../../types";
import type { MergeRight } from "../../utilities";
import { useLanguageOptional } from "../../context/LanguageContext";

export type DateInputProps = MergeRight<
  DefaultProps,
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
    /** Ikon som vises til høyre i feltet, f.eks. et kalenderikon. */
    suffixIcon?: React.ReactNode;
    /** Klikk-håndterer for suffiks-knappen. Gjør knappen fokuserbar. */
    onSuffixClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Klasse for den ytre wrapperen. */
    className?: string;
    /** Klasse for input-wrapperen. */
    inputWrapperClassName?: string;
    /** Klasse for selve input-elementet. */
    inputClassName?: string;
    /** Beskrivende hjelpetekst under etiketten. */
    description?: React.ReactNode;
    /** Feilmelding. Styrer også aria-invalid og feilstiler. */
    error?: React.ReactNode;
    value?: string | null;
    defaultValue?: string | null;
    /** Kalles ved endring med hendelsen og den formaterte verdien (dd.mm.åååå). */
    onChange?: (
      event: React.ChangeEvent<HTMLInputElement>,
      formattedValue: string,
    ) => void;
    /**
     * Kalles når gyldigheten endres. `true`/`false` når datoen er komplett
     * (åtte sifre), `false` ved blur med ufullstendig dato, `null` når feltet
     * er tomt eller under utfylling. Umulige datoer (31.02, skuddårsbrudd)
     * gir `false`.
     */
    onValidationChange?: (valid: boolean | null, formattedValue: string) => void;
  } & LabelRequired
>;

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
  return (value || "").replace(/\D/g, "").slice(0, 8);
};

/**
 * Kalendervaliditet for en komplett dato. Ufullstendige datoer er `null`
 * (uavklart); komplette datoer valideres mot ekte kalender via date-fns,
 * slik at 31.02.2024 og 29.02.2023 er ugyldige. Inndata skrives aldri om.
 */
const computeValidity = (digits: string): boolean | null => {
  if (digits.length < 8) return null;
  const parsed = parse(formatNorwegianDate(digits), "dd.MM.yyyy", new Date());
  return isValid(parsed);
};

/**
 * DateInput-komponent for inntasting av datoer i norsk format (dd.mm.åååå).
 * Håndterer automatisk formatering og validering av datoer.
 */
export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (props, ref) => {
    const { t } = useLanguageOptional();

    const {
      label,
      suffixIcon,
      onSuffixClick,
      className,
      inputWrapperClassName,
      inputClassName,
      value: controlledValue,
      defaultValue,
      onChange: onChangeProp,
      onValidationChange,
      readOnly,
      placeholder = "dd.mm.åååå",
      id,
      name,
      required,
      disabled,
      onClick,
      onFocus,
      onBlur,
      autoComplete = "off",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      description,
      error,
      "data-color": dataColor,
      "data-size": dataSize,
      ...rest
    } = props;

    const isControlled = controlledValue !== undefined;
    const internalInputRef = useRef<HTMLInputElement>(null);
    React.useImperativeHandle(
      ref,
      () => internalInputRef.current as HTMLInputElement,
    );

    const lastReportedValidity = useRef<boolean | null>(null);
    const reportValidity = useCallback(
      (valid: boolean | null, formatted: string) => {
        if (valid === lastReportedValidity.current) return;
        lastReportedValidity.current = valid;
        onValidationChange?.(valid, formatted);
      },
      [onValidationChange],
    );

    const getFormattedValue = useCallback(
      (val: string | null | undefined) => formatNorwegianDate(getDigits(val)),
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


    // Endringer håndteres synkront slik at kontrollerte skjema får riktig
    // rundtur-timing, og hendelsen som sendes videre beholder det ekte
    // input-elementet som target (name, id, validity, focus() osv. virker).
    const handleInputChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        const previousFormattedValue = displayValue;

        const currentDigits = getDigits(input.value);
        const formatted = formatNorwegianDate(currentDigits);

        let cursorPos = 0;
        const numDigits = currentDigits.length;
        if (numDigits <= 2) cursorPos = numDigits;
        else if (numDigits <= 4) cursorPos = numDigits + 1;
        else cursorPos = numDigits + 2;
        cursorPos = Math.min(cursorPos, formatted.length);

        setDisplayValue(formatted);
        input.value = formatted;
        input.setSelectionRange(cursorPos, cursorPos);

        if (formatted !== previousFormattedValue || isControlled) {
          onChangeProp?.(event, formatted);
        }

        // Under utfylling rapporteres bare komplett/tom tilstand;
        // ufullstendig dato avgjøres først ved blur.
        const validity = computeValidity(currentDigits);
        if (currentDigits.length === 0 || currentDigits.length === 8) {
          reportValidity(currentDigits.length === 0 ? null : validity, formatted);
        }
      },
      [displayValue, isControlled, onChangeProp, reportValidity],
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        const digits = getDigits(event.target.value);
        if (digits.length === 0) {
          reportValidity(null, "");
        } else if (digits.length < 8) {
          reportValidity(false, formatNorwegianDate(digits));
        } else {
          reportValidity(computeValidity(digits), formatNorwegianDate(digits));
        }
        onBlur?.(event);
      },
      [onBlur, reportValidity],
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
    // Stabile id-er også når konsumenten ikke oppgir id. En ekstern
    // aria-labelledby respekteres som den er og gjenbrukes aldri som id på
    // den interne etiketten.
    const autoId = useId();
    const inputId = id ?? `dateinput${autoId}`;
    const labelId = label && typeof label === 'string' ? `${inputId}-label` : undefined;
    const descriptionId = description ? `${inputId}-desc` : undefined;
    const errorId = error ? `${inputId}-err` : undefined;
    const describedByIds = [descriptionId, errorId].filter(Boolean).join(' ') || undefined;
    const labelledBy = ariaLabelledby ?? labelId;

    return (
      // --- Bruk data-color og data-size på den ytre wrapperen ---
      <div 
        className={fieldsetClasses}
        data-color={dataColor} // <-- Bruk
        data-size={dataSize}   // <-- Bruk
      >
        {label && typeof label === 'string' ? (
          <label id={labelId} htmlFor={inputId}>
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
            id={inputId}
            name={name}
            required={required}
            disabled={disabled}
            onClick={onClick}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={handleBlur}
            autoComplete={autoComplete}
            aria-label={ariaLabel}
            aria-labelledby={labelledBy}
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
