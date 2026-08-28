import React, { useState, useMemo, useCallback, useEffect, useId, useRef } from 'react';
import { Button as DigDirButton } from '@digdir/designsystemet-react';
import {
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval,
  addMonths, subMonths, isSameMonth, isSameDay, isToday, addDays,
  isValid, setDate, getDaysInMonth,
} from 'date-fns';
import { nb } from 'date-fns/locale';
import { ChevronLeftIcon } from '../../assets/images/ChevronLeftIcon';
import { ChevronRightIcon } from '../../assets/images/ChevronRightIcon';

import styles from './styles.module.css';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import { useLanguageOptional } from '../../context/LanguageContext';

export type DatePickerProps = MergeRight<
  DefaultProps,
  {
    /** Måneden kalenderen åpner på når ingen dato er valgt. */
    initialDate?: Date;
    /** Valgt dato. Utheves i kalenderen. */
    selectedDate?: Date | null;
    /** Kalles når brukeren velger en dato. */
    onDateSelect?: (date: Date) => void;
  }
>;

const generateCalendarDays = (date: Date): Date[] => {
  const monthStart = startOfMonth(date);
  const startDate = startOfWeek(monthStart, { locale: nb });
  // End at the last week that contains a day of the month (5 or 6 rows).
  // A fixed 42-cell grid rendered an entire extra week of next-month days
  // whenever the month fit in 5 rows.
  const endDate = endOfWeek(endOfMonth(date), { locale: nb });
  return eachDayOfInterval({ start: startDate, end: endDate });
};

const capitalizeFirstLetter = (string: string): string => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/** Flytt en dato inn i angitt måned, avgrenset til månedens siste dag. */
const clampIntoMonth = (day: Date, monthDate: Date): Date => {
  const wanted = Math.min(day.getDate(), getDaysInMonth(monthDate));
  return setDate(startOfMonth(monthDate), wanted);
};

/**
 * DatePicker-komponent for å velge en dato fra en kalender.
 * Kalenderen følger ARIA-grid-mønsteret: ett tabstopp, piltaster mellom
 * dager (på tvers av måneder), Home/End til start/slutt av uken og
 * PageUp/PageDown mellom måneder.
 */
export const DatePicker: React.FC<DatePickerProps> = ({
  initialDate = new Date(),
  selectedDate = null,
  onDateSelect,
  'data-color': dataColor,
  'data-size': dataSize,
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
    // prepend, NOT appendChild: this copy is a FALLBACK for consumers who never
    // import 'rk-designsystem/styles', and it must lose to the real stylesheet
    // whenever that is present. Appending put it last in <head>, so at equal
    // specificity it beat the bundled sheet for EVERY consumer — silently
    // replacing responsive @media values it does not reproduce with its own
    // desktop base values. Placing it first keeps it a safety net instead.
    document.head.prepend(tag);
  }, []);

  const [currentMonthDate, setCurrentMonthDate] = useState(
    startOfMonth(selectedDate && isValid(selectedDate) ? selectedDate : initialDate),
  );

  // Roving tabindex: cellen for denne datoen er gridets ene tabstopp.
  const [focusedDate, setFocusedDate] = useState<Date>(() =>
    selectedDate && isValid(selectedDate) ? selectedDate : initialDate,
  );
  const gridRef = useRef<HTMLDivElement>(null);
  const shouldFocusCell = useRef(false);

  // Synkroniser visning og fokus når selectedDate-propen endres
  useEffect(() => {
    if (selectedDate && isValid(selectedDate)) {
      setFocusedDate(selectedDate);
      const selectedMonthStart = startOfMonth(selectedDate);
      setCurrentMonthDate((prev) =>
        isSameMonth(selectedMonthStart, prev) ? prev : selectedMonthStart,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  // Flytt DOM-fokus til riktig celle etter tastaturnavigasjon
  useEffect(() => {
    if (!shouldFocusCell.current) return;
    shouldFocusCell.current = false;
    const cell = gridRef.current?.querySelector<HTMLElement>(
      `[data-date="${format(focusedDate, 'yyyy-MM-dd')}"]`,
    );
    cell?.focus();
  }, [focusedDate, currentMonthDate]);

  const calendarDays = useMemo(
    () => generateCalendarDays(currentMonthDate),
    [currentMonthDate],
  );

  const calendarWeeks = useMemo(() => {
    const weeks: Date[][] = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      weeks.push(calendarDays.slice(i, i + 7));
    }
    return weeks;
  }, [calendarDays]);

  const dayNames = useMemo(() => {
    const firstDayOfWeek = startOfWeek(new Date(), { locale: nb });
    return Array.from({ length: 7 }).map((_, i) => {
      const dayName = format(addDays(firstDayOfWeek, i), 'EEEEEE', { locale: nb });
      return capitalizeFirstLetter(dayName);
    });
  }, []);

  const handlePrevMonth = useCallback(() => {
    setCurrentMonthDate((prevDate) => {
      const next = startOfMonth(subMonths(prevDate, 1));
      setFocusedDate((prevFocus) => clampIntoMonth(prevFocus, next));
      return next;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentMonthDate((prevDate) => {
      const next = startOfMonth(addMonths(prevDate, 1));
      setFocusedDate((prevFocus) => clampIntoMonth(prevFocus, next));
      return next;
    });
  }, []);

  const handleDateClick = useCallback(
    (day: Date) => {
      setFocusedDate(day);
      onDateSelect?.(day);
    },
    [onDateSelect],
  );

  // Flytt fokus (og om nødvendig visningsmåned) til en ny dato
  const moveFocus = useCallback((target: Date) => {
    shouldFocusCell.current = true;
    setFocusedDate(target);
    setCurrentMonthDate((prev) =>
      isSameMonth(target, prev) ? prev : startOfMonth(target),
    );
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, day: Date) => {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          handleDateClick(day);
          return;
        case 'ArrowLeft':
          event.preventDefault();
          moveFocus(addDays(day, -1));
          return;
        case 'ArrowRight':
          event.preventDefault();
          moveFocus(addDays(day, 1));
          return;
        case 'ArrowUp':
          event.preventDefault();
          moveFocus(addDays(day, -7));
          return;
        case 'ArrowDown':
          event.preventDefault();
          moveFocus(addDays(day, 7));
          return;
        case 'Home':
          event.preventDefault();
          moveFocus(startOfWeek(day, { locale: nb }));
          return;
        case 'End':
          event.preventDefault();
          moveFocus(endOfWeek(day, { locale: nb }));
          return;
        case 'PageUp':
          event.preventDefault();
          moveFocus(clampIntoMonth(day, subMonths(day, 1)));
          return;
        case 'PageDown':
          event.preventDefault();
          moveFocus(clampIntoMonth(day, addMonths(day, 1)));
          return;
      }
    },
    [handleDateClick, moveFocus],
  );

  const monthName = format(currentMonthDate, 'MMMM', { locale: nb });
  const year = format(currentMonthDate, 'yyyy', { locale: nb });
  const monthYearHeader = `${capitalizeFirstLetter(monthName)} ${year}`;
  const headerId = useId();

  // Fokusdatoen må alltid finnes i gridet som celle med tabIndex 0
  const focusableDate = isSameMonth(focusedDate, currentMonthDate)
    ? focusedDate
    : clampIntoMonth(focusedDate, currentMonthDate);

  return (
    <div
      className={styles.calendarContainer}
      data-color={dataColor}
      data-size={dataSize}
    >
      <div className={styles.calendarHeader}>
        <span className={styles.monthYear} id={headerId} aria-live="polite">
          {monthYearHeader}
        </span>
        <div className={styles.navigationButtons}>
          <DigDirButton
            variant="tertiary"
            icon
            onClick={handlePrevMonth}
            aria-label={t('datePicker.previousMonth')}
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

      <div role="grid" aria-labelledby={headerId} className={styles.gridWrapper} ref={gridRef}>
        <div role="row" className={styles.gridRow}>
          {dayNames.map((dayName) => (
            <div key={dayName} role="columnheader" className={styles.dayNameCell}>
              {dayName}
            </div>
          ))}
        </div>

        {calendarWeeks.map((week) => (
          <div role="row" className={styles.gridRow} key={week[0].toISOString()}>
            {week.map((day) => {
              const isCurrentMonth = isSameMonth(day, currentMonthDate);
              const isSelectedDay =
                selectedDate && isValid(selectedDate) && isSameDay(day, selectedDate);
              const isTodayDate = isToday(day);
              const isFocusable = isCurrentMonth && isSameDay(day, focusableDate);

              const cellClasses = [
                styles.dateCell,
                !isCurrentMonth ? styles.otherMonth : '',
                isSelectedDay ? styles.selectedDate : '',
                isTodayDate && !isSelectedDay ? styles.todayDate : '',
              ]
                .filter(Boolean)
                .join(' ');

              // Dager utenfor måneden er deaktivert i alle modaliteter:
              // ikke klikkbare, ikke fokuserbare, annonsert som deaktivert.
              return (
                <div
                  key={day.toISOString()}
                  role="gridcell"
                  className={cellClasses}
                  data-date={format(day, 'yyyy-MM-dd')}
                  onClick={isCurrentMonth ? () => handleDateClick(day) : undefined}
                  onKeyDown={isCurrentMonth ? (e) => handleKeyDown(e, day) : undefined}
                  tabIndex={isCurrentMonth ? (isFocusable ? 0 : -1) : undefined}
                  aria-selected={isCurrentMonth ? Boolean(isSelectedDay) : undefined}
                  aria-disabled={!isCurrentMonth || undefined}
                  aria-current={isTodayDate ? 'date' : undefined}
                  aria-label={format(day, 'PPP', { locale: nb })}
                >
                  <span className={styles.dateNumberContainer}>
                    {format(day, 'd')}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
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
  max-width: 100%;
  box-sizing: border-box;
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
.${s.gridWrapper} {
  width: 100%;
  overflow: hidden;
}
.${s.gridRow} {
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
  min-width: 0;
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
  min-width: 0;
}
.${s.dateCell}:focus-visible {
  outline: var(--ds-border-width-focus, 3px) solid var(--ds-color-focus-outer, #2b2b2b);
  outline-offset: calc(-1 * var(--ds-border-width-focus, 3px));
  position: relative;
  z-index: 2;
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
  /* Neutral-scoped tokens on purpose: under the red color scope the
     scope-relative tints turn pink, which emphasized the outside days
     instead of muting them. */
  color: var(--ds-color-neutral-text-subtle, #aaa);
  cursor: default;
  pointer-events: none;
  background-color: var(--ds-color-neutral-surface-tinted, #e8e8e8);
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-neutral-border-subtle, #bcbcbc);
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
@media (max-width: 480px) {
  .${s.calendarContainer} {
    padding: var(--ds-size-4, 16px);
    gap: var(--ds-size-2, 8px);
    width: 100%;
  }
  .${s.monthYear} {
    font-size: var(--ds-heading-xs-font-size, 1.125rem);
  }
  .${s.dayNameCell} {
    padding: var(--ds-size-1, 4px);
    font-size: var(--ds-font-size-1, 12px);
  }
  .${s.dateCell} {
    padding: var(--ds-size-2, 8px);
    font-size: var(--ds-font-size-1, 12px);
  }
  .${s.dateNumberContainer} {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 360px) {
  .${s.calendarContainer} {
    padding: var(--ds-size-2, 8px);
  }
  .${s.dayNameCell} {
    padding: 2px;
    font-size: 10px;
  }
  .${s.dateCell} {
    padding: var(--ds-size-1, 4px);
    font-size: 11px;
  }
  .${s.dateNumberContainer} {
    width: 16px;
    height: 16px;
  }
}
`;
}
