import React, { useEffect, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { format, isValid, parse } from 'date-fns';
import { DateInput } from '../../src/components/DateInput';
import { DatePicker } from '../../src/components/DatePicker';

// This fixture exports SSR/hydration entry points, not a Fast Refresh module.
// eslint-disable-next-line react-refresh/only-export-components
function Consumer({ month = '2024-02', appointment = '2024-02-15' }: { month?: string; appointment?: string }) {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState<Date | null>(null);
  useEffect(() => { document.body.dataset.hydrated = 'true'; }, []);
  return <>
    <section aria-label="Server calendar">
      <form action="/submit" method="get">
        <button type="submit">Confirm appointment</button>
        <DatePicker data-testid="native-calendar-resize" serverCalendar={{ month, name: 'appointment', defaultValue: appointment,
          navigation: { action: '/calendar.html' } }} />
        <label>Required reference <input required defaultValue="reference" /></label>
        <button type="reset">Reset appointment</button>
      </form>
    </section>
    <section aria-label="Required calendar">
      <form id="required-calendar-form" action="/submit" method="get">
        <button type="submit">Submit required date</button>
        <button type="reset">Reset required date</button>
      </form>
      <div role="group" aria-labelledby="appointment-legend">
        <p id="appointment-legend">Appointment date</p>
        <p id="date-help">Choose an available date (required).</p>
        <p id="date-error">Choose a different appointment date.</p>
        <DatePicker id="required-calendar" data-testid="required-calendar" serverCalendar={{
          month, name: 'requiredDate', form: 'required-calendar-form', required: true,
          'aria-invalid': true, 'aria-describedby': 'date-help date-error',
        }} />
      </div>
    </section>
    <form action="/submit" method="get">
      <DateInput label="Date" name="date" required value={value} onChange={(_, next) => {
        setValue(next);
        const date = parse(next, 'dd.MM.yyyy', new Date());
        setSelected(/^\d{2}\.\d{2}\.\d{4}$/.test(next) && isValid(date) ? date : null);
      }} />
      <div style={{ width: 320, maxWidth: '100%' }}>
        <DatePicker data-testid="enhanced-calendar-resize" initialDate={new Date('2024-02-15T12:00:00Z')} selectedDate={selected}
          onDateSelect={date => { setSelected(date); setValue(format(date, 'dd.MM.yyyy')); }} />
      </div>
      <button type="submit">Submit date</button>
    </form>
    <section aria-label="Month boundary">
      <DatePicker initialDate={new Date('2026-10-01T00:30:00Z')} selectedDate={new Date('2026-10-01T00:30:00Z')} />
    </section>
    <section aria-label="Default date"><DatePicker /></section>
    <section aria-label="Invalid dates"><DatePicker initialDate={new Date(NaN)} selectedDate={new Date(NaN)} /></section>
    <section aria-label="Calendar action">
      <DateInput label="With calendar action" suffixIcon={<span>Calendar</span>} onSuffixClick={() => {}} />
    </section>
  </>;
}
export const renderDates = (month?: string, appointment?: string) => <Consumer month={month} appointment={appointment} />;
export const hydrateDates = (month?: string, appointment?: string) => hydrateRoot(document.getElementById('root')!, renderDates(month, appointment));
