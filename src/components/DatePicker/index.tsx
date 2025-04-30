// src/components/DatePicker/DatePicker.tsx
import React, { useState, useMemo, useCallback, useEffect } from 'react'; // Import useEffect
import { Button as DigDirButton } from '@digdir/designsystemet-react';
import {
  format, startOfMonth, startOfWeek, eachDayOfInterval,
  addMonths, subMonths, isSameMonth, isSameDay, isToday, addDays,
  isValid // Import isValid
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

// Utility functions (generateCalendarDays, capitalizeFirstLetter) remain the same
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


export const DatePicker: React.FC<DatePickerProps> = ({
  initialDate = new Date(),
  selectedDate = null, // Prop for selected date
  onDateSelect,
}) => {
  // Internal state for the currently displayed month
  const [currentMonthDate, setCurrentMonthDate] = useState(
    // Initialize with selectedDate's month if valid, otherwise initialDate's month
    startOfMonth(selectedDate && isValid(selectedDate) ? selectedDate : initialDate),
  );

  // --- NEW useEffect to sync calendar view with selectedDate prop ---
  useEffect(() => {
    // If the selectedDate prop changes and is a valid date...
    if (selectedDate && isValid(selectedDate)) {
      const selectedMonthStart = startOfMonth(selectedDate);
      // ...and it's different from the currently displayed month...
      if (!isSameMonth(selectedMonthStart, currentMonthDate)) {
        // ...update the internal state to navigate the calendar.
        setCurrentMonthDate(selectedMonthStart);
      }
    }
    // Re-run this effect if the selectedDate prop changes
  }, [selectedDate]); // Removed currentMonthDate from deps to avoid potential loops

  // --- Rest of the DatePicker component logic remains the same ---

  const startOfRealCurrentMonth = useMemo(() => startOfMonth(new Date()), []);
  const isPrevMonthDisabled = useMemo(() => {
     return false; // Simplified: Allow going back
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
        onDateSelect(day); // This updates the state in the parent (story)
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
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <span className={styles.monthYear}>{monthYearHeader}</span>
        <div className={styles.navigationButtons}>
          <DigDirButton
            variant="tertiary"
            icon
            onClick={handlePrevMonth}
            aria-label="Forrige måned"
            disabled={isPrevMonthDisabled}
          >
            <ChevronLeftIcon />
          </DigDirButton>
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
          // Highlighting logic uses the selectedDate prop directly
          const isSelectedDay = selectedDate && isValid(selectedDate) && isSameDay(day, selectedDate);
          const isTodayDate = isToday(day);

          const cellClasses = [
            styles.dateCell,
            !isCurrentMonth ? styles.otherMonth : '',
            isSelectedDay ? styles.selectedDate : '', // Highlighting based on prop
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
