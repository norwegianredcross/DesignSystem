// src/components/DatePicker/DatePicker.tsx
import React, { useState, useMemo, useCallback } from 'react';
import { Button as DigDirButton } from '@digdir/designsystemet-react';
import {
  format,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isToday,
  addDays,
} from 'date-fns';
import { nb } from 'date-fns/locale';

import { ChevronLeftIcon } from '../../assets/images/ChevronLeftIcon';
import { ChevronRightIcon } from '../../assets/images/ChevronRightIcon';

import styles from './styles.module.css';

export interface DatePickerProps {
  initialDate?: Date;
  selectedDate?: Date | null;
  onDateSelect?: (date: Date) => void;
}

const generateCalendarDays = (date: Date): Date[] => {
  const monthStart = startOfMonth(date);
  const startDate = startOfWeek(monthStart, { locale: nb });
  const endDate = addDays(startDate, 34);
  return eachDayOfInterval({ start: startDate, end: endDate });
};

const capitalizeFirstLetter = (string: string): string => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const DatePicker: React.FC<DatePickerProps> = ({
  initialDate = new Date(),
  selectedDate = null,
  onDateSelect,
}) => {
  const [currentMonthDate, setCurrentMonthDate] = useState(
    startOfMonth(initialDate),
  );

  // --- Calculate if Prev Month should be disabled ---
  const startOfRealCurrentMonth = useMemo(() => startOfMonth(new Date()), []);
  const isPrevMonthDisabled = useMemo(() => {
    // Disable if the currently displayed month is the same as or before the actual current month
    return currentMonthDate <= startOfRealCurrentMonth;
    // Or using isSameMonth for exact match:
    // return isSameMonth(currentMonthDate, startOfRealCurrentMonth);
  }, [currentMonthDate, startOfRealCurrentMonth]);
  // --- End Calculation ---


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
    // Only update if not disabled
    if (!isPrevMonthDisabled) {
       setCurrentMonthDate((prevDate) => startOfMonth(subMonths(prevDate, 1)));
    }
  }, [isPrevMonthDisabled]); // Add dependency

  const handleNextMonth = useCallback(() => {
    setCurrentMonthDate((prevDate) => startOfMonth(addMonths(prevDate, 1)));
  }, []);

  const handleDateClick = useCallback(
    (day: Date, isCurrent: boolean) => {
      if (isCurrent && onDateSelect) {
        onDateSelect(day);
      }
    },
    [onDateSelect],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, day: Date, isCurrent: boolean) => {
      if (isCurrent && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        handleDateClick(day, isCurrent);
      }
    },
    [handleDateClick]
  );

  const monthName = format(currentMonthDate, 'MMMM', { locale: nb });
  const year = format(currentMonthDate, 'yyyy', { locale: nb });
  const monthYearHeader = `${capitalizeFirstLetter(monthName)} ${year}`;

  return (
    <div className={styles.calendarContainer}>
      {/* Header */}
      <div className={styles.calendarHeader}>
        <span className={styles.monthYear}>{monthYearHeader}</span>
        <div className={styles.navigationButtons}>
          {/* --- Add disabled prop --- */}
          <DigDirButton
            variant="tertiary"
            icon
            onClick={handlePrevMonth}
            aria-label="Forrige måned"
            disabled={isPrevMonthDisabled} // Pass the disabled state
          >
            <ChevronLeftIcon />
          </DigDirButton>
          {/* --- End Add --- */}
          <DigDirButton
            variant="tertiary"
            icon
            onClick={handleNextMonth}
            aria-label="Neste måned"
          >
            <ChevronRightIcon />
          </DigDirButton>
        </div>
      </div>

      {/* Day Names */}
      <div className={styles.grid}>
        {dayNames.map((dayName) => (
          <div key={dayName} className={styles.dayNameCell}>
            {dayName}
          </div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className={styles.grid}>
        {calendarDays.map((day) => {
          const isCurrent = isSameMonth(day, currentMonthDate);
          const isSelectedRaw = selectedDate && isSameDay(day, selectedDate);
          const isTodayDate = isToday(day);

          const cellClasses = [
            styles.dateCell,
            !isCurrent ? styles.otherMonth : '',
            isSelectedRaw ? styles.selectedDate : '',
            isTodayDate && !isSelectedRaw ? styles.todayDate : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={day.toISOString()}
              className={cellClasses}
              onClick={() => handleDateClick(day, isCurrent)}
              onKeyDown={(e) => handleKeyDown(e, day, isCurrent)}
              role="button"
              tabIndex={isCurrent ? 0 : -1}
              aria-pressed={isSelectedRaw ?? false}
              aria-disabled={!isCurrent}
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