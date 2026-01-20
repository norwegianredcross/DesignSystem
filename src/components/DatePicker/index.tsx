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