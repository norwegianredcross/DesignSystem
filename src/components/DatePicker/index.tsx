// src/components/DatePicker/DatePicker.tsx
import React, { useState, useMemo, useCallback } from 'react';
import { Button as DigDirButton } from '@digdir/designsystemet-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isToday,
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
  const monthEnd = endOfMonth(date);
  const startDate = startOfWeek(monthStart, { locale: nb });
  const endDate = endOfWeek(monthEnd, { locale: nb });
  return eachDayOfInterval({ start: startDate, end: endDate });
};

export const DatePicker: React.FC<DatePickerProps> = ({
  initialDate = new Date(),
  selectedDate = null,
  onDateSelect,
}) => {
  const [currentMonthDate, setCurrentMonthDate] = useState(
    startOfMonth(initialDate),
  );

  const calendarDays = useMemo(
    () => generateCalendarDays(currentMonthDate),
    [currentMonthDate],
  );

  const dayNames = useMemo(() => {
    const firstDayOfWeek = startOfWeek(new Date(), { locale: nb });
    return Array.from({ length: 7 }).map((_, i) =>
      format(addMonths(firstDayOfWeek, i), 'EEEEEE', { locale: nb }),
    );
  }, []);

  const handlePrevMonth = useCallback(() => {
    setCurrentMonthDate((prevDate) => startOfMonth(subMonths(prevDate, 1)));
  }, []);

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


  const monthYearHeader = format(currentMonthDate, 'MMMM yyyy', { locale: nb });

  return (
    <div className={styles.calendarContainer}>
      {/* Header */}
      <div className={styles.calendarHeader}>
        <span className={styles.monthYear}>{monthYearHeader}</span>
        <div className={styles.navigationButtons}>
          <DigDirButton variant="tertiary" icon onClick={handlePrevMonth} aria-label="Forrige måned">
            <ChevronLeftIcon />
          </DigDirButton>
          <DigDirButton variant="tertiary" icon onClick={handleNextMonth} aria-label="Neste måned">
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
          // Calculate isSelected - this can be boolean OR null
          const isSelectedRaw = selectedDate && isSameDay(day, selectedDate);
          const isTodayDate = isToday(day);

          const cellClasses = [
            styles.dateCell,
            !isCurrent ? styles.otherMonth : '',
             // Use the raw value here for styling
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
              // --- FIX HERE: Convert null to false ---
              aria-pressed={isSelectedRaw ?? false}
              // --- END FIX ---
              aria-disabled={!isCurrent}
              aria-label={format(day, 'PPP', { locale: nb })}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

DatePicker.displayName = 'DatePicker';
