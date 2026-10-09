import React, { useState, useMemo, useCallback, useEffect, useId, useRef, forwardRef } from 'react';
import { Button as DigDirButton } from '@digdir/designsystemet-react';
import {
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval,
  addMonths, subMonths, isSameMonth, isSameDay, isToday, addDays,
  isValid, setDate, getDaysInMonth,
} from 'date-fns';
import { nb, enGB } from 'date-fns/locale';
import type { Locale } from 'date-fns';
import { ChevronLeftIcon } from '../../assets/images/ChevronLeftIcon';
import { ChevronRightIcon } from '../../assets/images/ChevronRightIcon';

import styles from './styles.module.css';
import { nativeCalendar, type CalendarDay } from './nativeCalendar';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import { useLanguageOptional } from '../../context/LanguageContext';

/** Native form mode. The consumer renders the requested month and validates submitted dates. */
export interface ServerCalendar extends Pick<React.InputHTMLAttributes<HTMLInputElement>,
  'required' | 'disabled' | 'aria-invalid' | 'aria-describedby'> {
  /** Displayed month as YYYY-MM, independent of timezone. */
  month: string;
  /** Name of the submitted YYYY-MM-DD value. Use a unique name per calendar in a form. */
  name: string;
  /** Initial selection, also restored by native form reset. */
  defaultValue?: string;
  /** GET endpoint that echoes month and selection. Place the primary submit before the calendar in the form. */
  navigation?: { action: string; monthName?: string };
  /** Associate controls with a form outside the calendar. */
  form?: string;
  /** Optional server-provided YYYY-MM-DD for today's marker. */
  today?: string;
}

export type DatePickerProps = MergeRight<
  React.HTMLAttributes<HTMLDivElement>,
  DefaultProps & {
    /** Måneden kalenderen åpner på når ingen dato er valgt. */
    initialDate?: Date;
    /** Server-rendered calendar with native selection and optional GET navigation. Overrides Date-based display props. */
    serverCalendar?: ServerCalendar;
    /** Valgt dato. Utheves i kalenderen. */
    selectedDate?: Date | null;
    /** Kalles ved valg i callback-modus (uten serverCalendar), med nettleserlokal Date. */
    onDateSelect?: (date: Date) => void;
  }
>;

const generateCalendarDays = (date: Date, locale: Locale): Date[] => {
  const monthStart = startOfMonth(date);
  const startDate = startOfWeek(monthStart, { locale });
  // End at the last week that contains a day of the month (5 or 6 rows).
  // A fixed 42-cell grid rendered an entire extra week of next-month days
  // whenever the month fit in 5 rows.
  const endDate = endOfWeek(endOfMonth(date), { locale });
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
 * serverCalendar bruker native radiofelt og vanlig skjemainnsending.
 * Callback-modus følger ARIA-grid-mønsteret: ett tabstopp, piltaster mellom
 * dager (på tvers av måneder), Home/End til start/slutt av uken og
 * PageUp/PageDown mellom måneder.
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  // Date-based callback mode remains an optional client enhancement. Native form
  // mode has deterministic date-only props and stays intact through hydration.
  return props.serverCalendar || ready ? <Calendar {...props} ref={ref} /> : null;
});

const Calendar = forwardRef<HTMLDivElement, DatePickerProps>(({
  initialDate = new Date(),
  serverCalendar,
  selectedDate = null,
  onDateSelect,
  'data-color': dataColor,
  'data-size': dataSize,
  className,
  ...rest
}, ref) => {
  const { t, language } = useLanguageOptional();
  // Month names, weekday headers and the cells' accessible names follow the
  // active UI language; nb was hardcoded, so an English page still read
  // "15. januar 2025" to screen readers. en-GB keeps Monday as first day.
  const locale = language === 'EN' ? enGB : nb;

  const native = serverCalendar
    ? nativeCalendar(serverCalendar.month, language, serverCalendar.defaultValue, serverCalendar.today)
    : undefined;
  if (serverCalendar && !serverCalendar.name.trim()) {
    throw new Error('DatePicker serverCalendar requires a non-empty field name.');
  }
  const fieldProps = serverCalendar && {
    name: serverCalendar.name, form: serverCalendar.form,
    required: serverCalendar.required, disabled: serverCalendar.disabled,
    'aria-invalid': serverCalendar['aria-invalid'],
    'aria-describedby': serverCalendar['aria-describedby'],
  };
  const initialFocus = selectedDate && isValid(selectedDate)
    ? selectedDate
    : isValid(initialDate) ? initialDate : new Date();
  const [currentMonthDate, setCurrentMonthDate] = useState(() => startOfMonth(initialFocus));


  // Roving tabindex: cellen for denne datoen er gridets ene tabstopp.
  const [focusedDate, setFocusedDate] = useState<Date>(initialFocus);
  const gridRef = useRef<HTMLTableElement>(null);
  const shouldFocusCell = useRef(false);

  // Synkroniser visning og fokus når selectedDate-propen endres
  useEffect(() => {
    if (!serverCalendar && selectedDate && isValid(selectedDate)) {
      setFocusedDate(selectedDate);
      const selectedMonthStart = startOfMonth(selectedDate);
      setCurrentMonthDate((prev) =>
        isSameMonth(selectedMonthStart, prev) ? prev : selectedMonthStart,
      );
    }
  }, [selectedDate, serverCalendar]);

  // Flytt DOM-fokus til riktig celle etter tastaturnavigasjon
  useEffect(() => {
    if (!shouldFocusCell.current) return;
    shouldFocusCell.current = false;
    const cell = gridRef.current?.querySelector<HTMLElement>(
      `[data-date="${format(focusedDate, 'yyyy-MM-dd')}"]`,
    );
    cell?.focus();
  }, [focusedDate, currentMonthDate]);

  const calendarWeeks = useMemo(() => {
    if (native) return native.weeks;
    const days = generateCalendarDays(currentMonthDate, locale);
    const weeks: CalendarDay[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7).map(date => ({
        date, value: format(date, 'yyyy-MM-dd'), label: format(date, 'PPP', {locale}),
        number: format(date, 'd'), inMonth: isSameMonth(date, currentMonthDate), today: isToday(date),
      })));
    }
    return weeks;
  }, [native, currentMonthDate, locale]);

  const dayNames = useMemo(() => {
    const firstDayOfWeek = startOfWeek(new Date(2024, 0, 1), { locale });
    return Array.from({ length: 7 }).map((_, i) => {
      const dayName = format(addDays(firstDayOfWeek, i), 'EEEEEE', { locale });
      return { short: capitalizeFirstLetter(dayName), full: format(addDays(firstDayOfWeek, i), 'EEEE', { locale }) };
    });
    // Recomputed on language change - with [] the headers stayed Norwegian
    // while the heading and cell names switched.
  }, [locale]);

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
    (event: React.KeyboardEvent<HTMLTableCellElement>, day: Date) => {
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
          moveFocus(startOfWeek(day, { locale }));
          return;
        case 'End':
          event.preventDefault();
          moveFocus(endOfWeek(day, { locale }));
          return;
        case 'PageUp':
          event.preventDefault();
          moveFocus(clampIntoMonth(day, subMonths(day, event.shiftKey ? 12 : 1)));
          return;
        case 'PageDown':
          event.preventDefault();
          moveFocus(clampIntoMonth(day, addMonths(day, event.shiftKey ? 12 : 1)));
          return;
      }
    },
    [handleDateClick, moveFocus, locale],
  );

  const monthName = format(currentMonthDate, 'MMMM', { locale });
  const year = format(currentMonthDate, 'yyyy', { locale });
  const monthYearHeader = native ? capitalizeFirstLetter(native.monthLabel) : `${capitalizeFirstLetter(monthName)} ${year}`;
  const headerId = useId();

  // Fokusdatoen må alltid finnes i gridet som celle med tabIndex 0
  const focusableDate = isSameMonth(focusedDate, currentMonthDate)
    ? focusedDate
    : clampIntoMonth(focusedDate, currentMonthDate);

  return (
    <div
      {...rest}
      ref={ref}
      className={[styles.calendarContainer, className].filter(Boolean).join(' ')}
      data-color={dataColor}
      data-size={dataSize}
    >
      <div className={styles.calendarHeader}>
        <span className={styles.monthYear} id={headerId} aria-live="polite">
          {monthYearHeader}
        </span>
        {(!serverCalendar || serverCalendar.navigation) && <div className={styles.navigationButtons}>
          {([-1, 1] as const).map(direction => (
            <DigDirButton key={direction} variant="tertiary" icon
              type={serverCalendar ? 'submit' : 'button'}
              form={serverCalendar?.form}
              formAction={serverCalendar?.navigation?.action}
              formMethod={serverCalendar ? 'get' : undefined}
              formNoValidate={serverCalendar ? true : undefined}
              name={serverCalendar ? (serverCalendar.navigation?.monthName ?? 'month') : undefined}
              value={native ? (direction < 0 ? native.previousMonth : native.nextMonth) : undefined}
              disabled={serverCalendar?.disabled || (native ? !(direction < 0 ? native.previousMonth : native.nextMonth) : false)}
              onClick={serverCalendar ? undefined : direction < 0 ? handlePrevMonth : handleNextMonth}
              aria-label={t(direction < 0 ? 'datePicker.previousMonth' : 'datePicker.nextMonth')}
            >
              {direction < 0 ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </DigDirButton>
          ))}
        </div>}
      </div>

      <div className={styles.calendarViewport}>
      <table role={serverCalendar ? undefined : "grid"} aria-labelledby={headerId} className={styles.gridWrapper} ref={gridRef}>
        <thead><tr className={styles.gridRow}>
          {dayNames.map((dayName) => (
            <th key={dayName.full} scope="col" aria-label={dayName.full} className={styles.dayNameCell}>
              {dayName.short}
            </th>
          ))}
        </tr></thead>

        <tbody>{calendarWeeks.map((week, weekIndex) => (
          <tr className={styles.gridRow} key={week[0]?.value ?? weekIndex}>
            {week.map((day) => {
              const isCurrentMonth = day.inMonth;
              const date = day.date;
              const isSelectedDay =
                date && selectedDate && isValid(selectedDate) && isSameDay(date, selectedDate);
              const isTodayDate = day.today;
              const isFocusable = date && isCurrentMonth && isSameDay(date, focusableDate);

              const cellClasses = [
                styles.dateCell,
                !isCurrentMonth ? styles.otherMonth : '',
                isSelectedDay ? styles.selectedDate : '',
                isTodayDate && !isSelectedDay ? styles.todayDate : '',
              ]
                .filter(Boolean)
                .join(' ');

              // Adjacent-month dates are informational; only this month has selectable controls.
              return (
                <td
                  key={day.value}
                  role={serverCalendar ? undefined : "gridcell"}
                  className={cellClasses}
                  data-date={day.value}
                  onClick={date && isCurrentMonth ? () => handleDateClick(date) : undefined}
                  onKeyDown={date && isCurrentMonth ? (e) => handleKeyDown(e, date) : undefined}
                  tabIndex={!serverCalendar && isCurrentMonth ? (isFocusable ? 0 : -1) : undefined}
                  aria-selected={!serverCalendar && isCurrentMonth ? Boolean(isSelectedDay) : undefined}
                  aria-disabled={!serverCalendar && !isCurrentMonth || undefined}
                  aria-current={isTodayDate ? 'date' : undefined}
                  aria-label={serverCalendar ? undefined : day.label}
                >
                  {serverCalendar && isCurrentMonth ? <label className={styles.nativeDay}>
                    <input type="radio" {...fieldProps}
                      value={day.value}
                      defaultChecked={native?.selection?.value === day.value}
                      aria-label={day.label} />
                    <span className={styles.dateNumberContainer}>{day.number}</span>
                  </label> : <span className={styles.dateNumberContainer}>{day.number}</span>}
                </td>
              );
            })}
          </tr>
        ))}</tbody>
      </table>
      </div>
      {native?.selection && !native.selection.inMonth && (
        <label>
          <input type="radio" {...fieldProps} value={native.selection.value} defaultChecked />
          {native.selection.label}
        </label>
      )}
    </div>
  );
});

Calendar.displayName = 'Calendar';
DatePicker.displayName = 'DatePicker';
