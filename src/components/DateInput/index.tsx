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
    /** Kalles med den ekte input-hendelsen og feltets verdi. Delvise endringer bevares. */
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
 * Validate the displayed date, without joining incomplete day/month/year parts.
 * Partial input stays undecided until blur; full dates use calendar validation.
 */
const computeValidity = (value: string): boolean | null => {
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return value.length < 10 ? null : false;
  return isValid(parse(value, "dd.MM.yyyy", new Date()));
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
      // prepend, NOT appendChild: this copy is a FALLBACK for consumers who never
      // import 'rk-designsystem/styles', and it must lose to the real stylesheet
      // whenever that is present. Appending put it last in <head>, so at equal
      // specificity it beat the bundled sheet for EVERY consumer — silently
      // replacing responsive @media values it does not reproduce with its own
      // desktop base values. Placing it first keeps it a safety net instead.
      document.head.prepend(tag);
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
      readOnly,
      placeholder = "dd.mm.åååå",
      id,
      name,
      form,
      required,
      disabled,
      onClick,
      onFocus,
      onBlur,
      autoComplete = "off",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedBy,
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
      (val: string | null | undefined) =>
        val && /^\d{1,8}$/.test(val) ? formatNorwegianDate(val) : (val ?? ""),
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


    // Reset belongs to the form; honor cancellation and leave controlled values
    // with the consumer. Wait until the browser has performed its native reset.
    useEffect(() => {
      const input = internalInputRef.current;
      const owner = input?.form;
      if (isControlled || !input || !owner) return;
      const handleReset = (event: Event) => {
        queueMicrotask(() => {
          if (internalInputRef.current !== input || !input.isConnected || event.defaultPrevented) return;
          const value = getFormattedValue(defaultValue);
          input.value = value;
          setDisplayValue(value);
          reportValidity(value ? computeValidity(value) : null, value);
        });
      };
      owner.addEventListener('reset', handleReset);
      return () => {
        owner.removeEventListener('reset', handleReset);
      };
    }, [isControlled, form, defaultValue, getFormattedValue, reportValidity]);

    const handleInputChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        const rawValue = input.value;
        const atEnd = input.selectionStart === rawValue.length;
        // Keep formatting for sequential digit entry, but never repartition a
        // middle edit or deletion: "1.06.2025" must not become "10.62.025".
        const appendedDigits = rawValue.startsWith(displayValue)
          ? rawValue.slice(displayValue.length)
          : '';
        const appendToFormattedPrefix =
          atEnd && /^\d+$/.test(appendedDigits) &&
          displayValue === formatNorwegianDate(getDigits(displayValue));
        const completeDigitsInserted =
          atEnd && /^\d{8}$/.test(rawValue) &&
          (event.nativeEvent as InputEvent).inputType?.startsWith('insert');
        const value = appendToFormattedPrefix || completeDigitsInserted
          ? formatNorwegianDate(getDigits(rawValue))
          : rawValue;

        setDisplayValue(value);
        if (value !== rawValue) {
          input.value = value;
          input.setSelectionRange(value.length, value.length);
        }
        if (value !== displayValue || isControlled) {
          onChangeProp?.(event, value);
        }
        reportValidity(computeValidity(value), value);
      },
      [displayValue, isControlled, onChangeProp, reportValidity],
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value;
        reportValidity(value ? (computeValidity(value) ?? false) : null, value);
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


    // Dev-only guidance, same guard as GraphicElement: Vite folds
    // import.meta.env.DEV to false in the library build, so the warning is
    // dead code in consumers' production bundles instead of console noise.
    if (import.meta.env.DEV && !label && !ariaLabel && !ariaLabelledby) {
      console.warn('Advarsel: DateInput-komponenten bør ha label, aria-label, eller aria-labelledby for tilgjengelighet.');
    }
    // Stabile id-er også når konsumenten ikke oppgir id. En ekstern
    // aria-labelledby respekteres som den er og gjenbrukes aldri som id på
    // den interne etiketten.
    const autoId = useId();
    const inputId = id ?? `dateinput${autoId}`;
    // Any label CONTENT gets the association, not only plain strings: a
    // ReactNode label (e.g. text with a "(valgfritt)" hint) used to be
    // rendered bare, leaving the input with no accessible name at all.
    const labelId = label ? `${inputId}-label` : undefined;
    const descriptionId = description ? `${inputId}-desc` : undefined;
    const errorId = error ? `${inputId}-err` : undefined;
    const describedByIds = [...new Set(
      [descriptionId, errorId, ariaDescribedBy].filter(Boolean).join(' ').split(/\s+/).filter(Boolean),
    )].join(' ') || undefined;
    const labelledBy = ariaLabelledby ?? labelId;

    return (
      // --- Bruk data-color og data-size på den ytre wrapperen ---
      <div 
        className={fieldsetClasses}
        data-color={dataColor} // <-- Bruk
        data-size={dataSize}   // <-- Bruk
      >
        {label ? (
          <label id={labelId} htmlFor={inputId}>
            {label}
          </label>
        ) : null}

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
            form={form}
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
              onClick={!disabled && !readOnly ? onSuffixClick : undefined}
              tabIndex={onSuffixClick && !disabled && !readOnly ? 0 : -1}
              aria-hidden={!onSuffixClick}
              disabled={disabled || readOnly}
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
  margin-bottom: var(--ds-size-4, 16px);
}
.${s.fieldset} label {
  display: block;
  margin-bottom: var(--ds-size-1, 4px);
  font-weight: var(--ds-font-weight-medium, 500);
  color: var(--ds-color-neutral-text-default, #2b2b2b);
}
.${s.description} {
  font-size: var(--ds-font-size-2, 14px);
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
  margin-top: var(--ds-size-1, 4px);
  margin-bottom: var(--ds-size-2, 8px);
}
.${s.error} {
  font-size: var(--ds-font-size-2, 14px);
  color: var(--ds-color-danger-text-default, #c30000);
  margin-top: var(--ds-size-1, 4px);
}
.${s.inputWrapper} {
  display: flex;
  align-items: stretch;
  width: 100%;
  position: relative;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-default, #797979);
  border-radius: var(--ds-border-radius-md, 4px);
  overflow: hidden;
  transition: border-color 0.1s ease-out, outline 0.1s ease-out;
}
.${s.inputWrapperError} {
  border-color: var(--ds-color-danger-border-default, #c30000);
}
.${s.inputWrapper}:focus-within {
  outline: var(--ds-border-width-focus, 3px) solid var(--ds-color-focus-outer, #2B2B2B);
  outline-offset: var(--ds-border-width-focus, 2px);
}
.${s.inputWrapper} input {
  box-sizing: border-box;
  flex-grow: 1;
  width: auto;
  min-width: 0;
  background-color: var(--ds-color-neutral-background-default, #fff);
  color: var(--ds-color-neutral-text-default, #2b2b2b);
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
  background-color: var(--ds-color-neutral-surface-tinted, #f0f0f0);
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
  border-left: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-default, #797979);
  background-color: var(--ds-color-neutral-surface-tinted, #e8e8e8);
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
  font-size: 1.25rem;
  box-sizing: border-box;
  cursor: default;
  transition: background-color 0.15s ease-out, border-color 0.15s ease-out, color 0.15s ease-out;
}
.${s.suffixButtonInteractive} {
  cursor: pointer;
}
.${s.suffixButtonInteractive}:hover:not(:disabled) {
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  background-color: var(--ds-color-neutral-surface-hover, #dadada);
}
.${s.suffixButton}:disabled {
  opacity: var(--ds-opacity-disabled, 0.3);
  cursor: not-allowed;
  background-color: var(--ds-color-neutral-surface-tinted, #e8e8e8);
  border-left-color: var(--ds-color-neutral-border-default, #797979);
}
`;
}