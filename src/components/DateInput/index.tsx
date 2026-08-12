import React, {
  forwardRef,
  InputHTMLAttributes,
  useState,
  useEffect,
  useCallback,
  useId,
  useRef,
} from "react";
import { format, isValid, parse } from "date-fns";
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
     * og datoer utenfor min-/maksgrensene gir `false`.
     */
    onValidationChange?: (valid: boolean | null, formattedValue: string) => void;
    /** Tidligste gyldige dato. Standard: 01.01.1900. */
    minDate?: Date;
    /** Seneste gyldige dato. Standard: 31.12.2100. */
    maxDate?: Date;
    /**
     * Om komponenten selv skal vise en feilmelding under feltet når en
     * ugyldig eller ufullstendig dato forlates. En eksplisitt `error`-prop
     * overstyrer alltid den innebygde meldingen. Standard: true.
     */
    showValidationMessage?: boolean;
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

const DEFAULT_MIN_DATE = new Date(1900, 0, 1);
const DEFAULT_MAX_DATE = new Date(2100, 11, 31);

type ValidationResult = "valid" | "invalid" | "out-of-range" | null;

/**
 * Kalendervaliditet for en komplett dato. Ufullstendige datoer er `null`
 * (uavklart); komplette datoer valideres mot ekte kalender via date-fns,
 * slik at 31.02.2024 og 29.02.2023 er ugyldige, og deretter mot
 * min-/maksgrensene. Inndata skrives aldri om.
 */
const computeValidity = (digits: string, minDate: Date, maxDate: Date): ValidationResult => {
  if (digits.length < 8) return null;
  const parsed = parse(formatNorwegianDate(digits), "dd.MM.yyyy", new Date());
  if (!isValid(parsed)) return "invalid";
  if (parsed < minDate || parsed > maxDate) return "out-of-range";
  return "valid";
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
      className,
      inputWrapperClassName,
      inputClassName,
      value: controlledValue,
      defaultValue,
      onChange: onChangeProp,
      onValidationChange,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
      showValidationMessage = true,
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

    // Innebygd feilmelding: settes ved blur, fjernes mens brukeren redigerer.
    const [internalError, setInternalError] = useState<string | null>(null);
    const validationMessageFor = useCallback(
      (result: ValidationResult, incomplete: boolean): string | null => {
        if (incomplete) return t('dateInput.errorIncomplete');
        if (result === 'invalid') return t('dateInput.errorInvalid');
        if (result === 'out-of-range') {
          return t('dateInput.errorRange')
            .replace('{min}', format(minDate, 'dd.MM.yyyy'))
            .replace('{max}', format(maxDate, 'dd.MM.yyyy'));
        }
        return null;
      },
      [t, minDate, maxDate],
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

        // Mens brukeren redigerer vises ingen feilmelding; endelig vurdering
        // skjer ved blur. Komplett/tom tilstand rapporteres fortløpende.
        setInternalError(null);
        const validity = computeValidity(currentDigits, minDate, maxDate);
        if (currentDigits.length === 0 || currentDigits.length === 8) {
          reportValidity(currentDigits.length === 0 ? null : validity === 'valid', formatted);
        }
      },
      [displayValue, isControlled, onChangeProp, reportValidity, minDate, maxDate],
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        const digits = getDigits(event.target.value);
        const formatted = formatNorwegianDate(digits);
        if (digits.length === 0) {
          reportValidity(null, "");
          setInternalError(null);
        } else if (digits.length < 8) {
          reportValidity(false, formatted);
          setInternalError(validationMessageFor(null, true));
        } else {
          const result = computeValidity(digits, minDate, maxDate);
          reportValidity(result === 'valid', formatted);
          setInternalError(validationMessageFor(result, false));
        }
        onBlur?.(event);
      },
      [onBlur, reportValidity, validationMessageFor, minDate, maxDate],
    );

    // Konsumentens error-prop overstyrer alltid den innebygde meldingen
    const shownError = error ?? (showValidationMessage ? internalError : null);

    const fieldsetClasses = [styles.fieldset, className].filter(Boolean).join(' ');

    const wrapperClasses = [
      styles.inputWrapper,
      inputWrapperClassName,
      shownError ? styles.inputWrapperError : '',
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
    const errorId = shownError ? `${inputId}-err` : undefined;
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
            aria-invalid={!!shownError}
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

        {shownError && (
          <p id={errorId} className={styles.error} role="alert">
            {shownError}
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