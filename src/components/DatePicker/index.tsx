import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Button as DigDirButton } from '@digdir/designsystemet-react';
import {
  format, startOfMonth, startOfWeek, eachDayOfInterval,
  addMonths, subMonths, isSameMonth, isSameDay, isToday, addDays,
  isValid
} from 'date-fns';
import { nb } from 'date-fns/locale';
import { ChevronLeftIcon } from '../../assets/images/ChevronLeftIcon';
import { ChevronRightIcon } from '../../assets/images/ChevronRightIcon';

import styles from './styles.module.css';
// Import shared types
import type { DefaultProps } from "../../types";
import type { MergeRight } from "../../utilities";
import { useLanguageOptional } from '../../context/LanguageContext';

// --- Grensesnitt Oppdatert ---
export type DatePickerProps = MergeRight<
  DefaultProps, // <-- Lagt til
  {
    initialDate?: Date;
    selectedDate?: Date | null;
    onDateSelect?: (date: Date) => void;
  }
>;

// Hjelpefunksjoner (generateCalendarDays, capitalizeFirstLetter) forblir de samme
const generateCalendarDays = (date: Date): Date[] => {
  const monthStart = startOfMonth(date);
  const startDate = startOfWeek(monthStart, { locale: nb });
  const endDate = addDays(startDate, 41);
  return eachDayOfInterval({ start: startDate, end: endDate });
};

const capitalizeFirstLetter = (string: string): string => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};


/**
 * DatePicker-komponent for å velge en dato fra en kalender.
 */
export const DatePicker: React.FC<DatePickerProps> = ({
  initialDate = new Date(),
  selectedDate = null, // Prop for valgt dato
  onDateSelect,
  "data-color": dataColor, // <-- Destrukturert
  "data-size": dataSize,   // <-- Destrukturert
}) => {
  const { t } = useLanguageOptional();

  // Fallback: inject minimal DatePicker styles if consumer did not import the CSS bundle.
  useEffect(() => {
    const styleId = 'rk-datepicker-inline-styles';
    if (typeof document === 'undefined') return;
    if (document.getElementById(styleId)) return;
    const css = buildDatePickerInlineCss(styles);
    const tag = document.createElement('style');
    tag.id = styleId;
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);

  // Intern tilstand for måneden som vises
  const [currentMonthDate, setCurrentMonthDate] = useState(
    startOfMonth(selectedDate && isValid(selectedDate) ? selectedDate : initialDate),
  );

  // --- NY useEffect for å synkronisere kalendervisning med selectedDate prop ---
  useEffect(() => {
    // Hvis selectedDate prop endres og er en gyldig dato...
    if (selectedDate && isValid(selectedDate)) {
      const selectedMonthStart = startOfMonth(selectedDate);
      // ...og den er forskjellig fra måneden som vises...
      if (!isSameMonth(selectedMonthStart, currentMonthDate)) {
        // ...oppdater intern tilstand for å navigere kalenderen.
        setCurrentMonthDate(selectedMonthStart);
      }
    }
    // Kjør denne effekten på nytt hvis selectedDate prop endres
  }, [selectedDate]); // Fjernet currentMonthDate fra avhengigheter for å unngå potensielle løkker

  // --- Resten av DatePicker komponent-logikken forblir den samme ---

  const startOfRealCurrentMonth = useMemo(() => startOfMonth(new Date()), []);
  const isPrevMonthDisabled = useMemo(() => {
      return false; // Forenklet: Tillat å gå tilbake
  }, [currentMonthDate, startOfRealCurrentMonth]);

  const calendarDays = useMemo(
    () => generateCalendarDays(currentMonthDate),
    [currentMonthDate],
  );

  const dayNames = useMemo(() => {
    const firstDayOfWeek = startOfWeek(new Date(), { locale: nb });
    return Array.from({ length: 7 }).map((_, i) => {
    const dayName = format(addDays(firstDayOfWeek, i), 'EEEEEE', { locale: nb });
      return capitalizeFirstLetter(dayName);
    });
  }, []);

  const handlePrevMonth = useCallback(() => {
    if (!isPrevMonthDisabled) {
       setCurrentMonthDate((prevDate) => startOfMonth(subMonths(prevDate, 1)));
    }
  }, [isPrevMonthDisabled]);

  const handleNextMonth = useCallback(() => {
    setCurrentMonthDate((prevDate) => startOfMonth(addMonths(prevDate, 1)));
  }, []);

  const handleDateClick = useCallback(
    (day: Date) => {
      if (onDateSelect) {
        onDateSelect(day); // Dette oppdaterer tilstanden i forelderen (story)
      }
    },
    [onDateSelect],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, day: Date) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleDateClick(day);
      }
    },
    [handleDateClick]
  );

  const monthName = format(currentMonthDate, 'MMMM', { locale: nb });
  const year = format(currentMonthDate, 'yyyy', { locale: nb });
  const monthYearHeader = `${capitalizeFirstLetter(monthName)} ${year}`;

  return (
    <div
      className={styles.calendarContainer}
      data-color={dataColor} // <-- Brukt
      data-size={dataSize}   // <-- Brukt
    >
      <div className={styles.calendarHeader}>
        <span className={styles.monthYear}>{monthYearHeader}</span>
        <div className={styles.navigationButtons}>
          <DigDirButton
            variant="tertiary"
            icon
            onClick={handlePrevMonth}
            aria-label={t('datePicker.previousMonth')}
            disabled={isPrevMonthDisabled}
          >
            <ChevronLeftIcon />
          </DigDirButton>
          <DigDirButton
            variant="tertiary"
            icon
            onClick={handleNextMonth}
            aria-label={t('datePicker.nextMonth')}
          >
            <ChevronRightIcon />
          </DigDirButton>
        </div>
      </div>

      <div className={styles.grid}>
        {dayNames.map((dayName) => (
          <div key={dayName} className={styles.dayNameCell}>
            {dayName}
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {calendarDays.map((day) => {
          const isCurrentMonth = isSameMonth(day, currentMonthDate);
          // Uthevingslogikk bruker selectedDate prop direkte
          const isSelectedDay = selectedDate && isValid(selectedDate) && isSameDay(day, selectedDate);
          const isTodayDate = isToday(day);

          const cellClasses = [
            styles.dateCell,
            !isCurrentMonth ? styles.otherMonth : '',
            isSelectedDay ? styles.selectedDate : '', // Utheving basert på prop
            isTodayDate && !isSelectedDay ? styles.todayDate : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={day.toISOString()}
              className={cellClasses}
              onClick={() => handleDateClick(day)}
              onKeyDown={(e) => handleKeyDown(e, day)}
              role="button"
              tabIndex={0}
              aria-pressed={isSelectedDay ?? false}
              aria-label={format(day, 'PPP', { locale: nb })}
            >
              <span className={styles.dateNumberContainer}>
                {format(day, 'd')}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

DatePicker.displayName = 'DatePicker';

// Build a minimal CSS fallback using the hashed class names from the CSS module.
function buildDatePickerInlineCss(s: Record<string, string>): string {
  return `
.${s.calendarContainer} {
  display: inline-flex;
  padding: var(--ds-size-8, 32px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ds-size-3, 12px);
  border: 1px solid var(--ds-color-border-subtle, #ccc);
  border-radius: var(--ds-border-radius-md, 4px);
  background-color: var(--ds-color-background-default, #fff);
  font-family: var(--ds-font-family, sans-serif);
  color: var(--ds-color-text-default, #2b2b2b);
}
.${s.calendarHeader} {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.${s.monthYear} {
  color: var(--ds-color-text-default, #2b2b2b);
  font-family: var(--ds-font-family, sans-serif);
  font-size: var(--ds-heading-sm-font-size, 1.5rem);
  font-weight: var(--ds-heading-sm-font-weight, 500);
  line-height: var(--ds-heading-sm-line-height, 1.3);
  margin: 0;
}
.${s.navigationButtons} {
  display: flex;
  gap: var(--ds-size-1, 4px);
}
.${s.navigationButtons} > button:disabled svg {
  opacity: var(--ds-opacity-disabled, 0.3);
}
.${s.grid} {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  text-align: center;
}
.${s.dayNameCell} {
  display: flex;
  padding: var(--ds-size-2, 8px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--ds-color-text-default, #2b2b2b);
  text-align: center;
  font-family: var(--ds-font-family, sans-serif);
  font-size: var(--ds-body-xs-font-size, 14px);
  font-weight: var(--ds-font-weight-semibold, 600);
  line-height: var(--ds-body-short-xs-line-height, 1.3);
  box-sizing: border-box;
}
.${s.dateCell} {
  display: flex;
  padding: var(--ds-size-5, 22px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #bcbcbc);
  box-sizing: border-box;
  margin: -0.5px;
  font-family: var(--ds-font-family, sans-serif);
  color: var(--ds-color-text-default, #2b2b2b);
  text-align: center;
  font-size: var(--ds-body-xs-font-size, 14px);
  font-weight: var(--ds-body-xs-font-weight, 400);
  line-height: var(--ds-body-short-xs-line-height, 1.3);
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  user-select: none;
}
.${s.dateNumberContainer} {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: color 0.15s ease-in-out, font-weight 0.15s ease-in-out;
  line-height: 1;
  box-sizing: border-box;
  background-color: transparent;
}
.${s.dateCell}:hover:not(.${s.otherMonth}):not(.${s.disabled}) {
  background-color: var(--ds-color-surface-hover, #eee);
  position: relative;
  z-index: 1;
}
.${s.otherMonth} {
  color: var(--ds-color-text-subtle, #aaa);
  cursor: default;
  pointer-events: none;
  background-color: var(--ds-color-surface-tinted, #e8e8e8);
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #bcbcbc);
  margin: -0.5px;
}
.${s.selectedDate} {
  background-color: var(--ds-color-base-default, #C30000);
  border-color: var(--ds-color-base-default, #C30000);
  color: var(--ds-color-base-contrast-default, #fff);
  position: relative;
  z-index: 1;
}
.${s.selectedDate} .${s.dateNumberContainer} {
  color: var(--ds-color-base-contrast-default, #fff);
  font-weight: var(--ds-font-weight-semibold, 600);
  background-color: transparent;
}
.${s.todayDate} .${s.dateNumberContainer} {
  font-weight: var(--ds-font-weight-semibold, 600);
}
`;
}