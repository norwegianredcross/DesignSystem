import React, { useEffect, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { format, isValid, parse } from 'date-fns';
import { DateInput } from '../../src/components/DateInput';
import { DatePicker } from '../../src/components/DatePicker';

// This fixture exports SSR/hydration entry points, not a Fast Refresh module.
// eslint-disable-next-line react-refresh/only-export-components
function Consumer() {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState<Date | null>(null);
  useEffect(() => { document.body.dataset.hydrated = 'true'; }, []);
  return <>
    <form action="/submit" method="get">
      <DateInput label="Date" name="date" required value={value} onChange={(_, next) => {
        setValue(next);
        const date = parse(next, 'dd.MM.yyyy', new Date());
        setSelected(/^\d{2}\.\d{2}\.\d{4}$/.test(next) && isValid(date) ? date : null);
      }} />
      <div style={{ width: 320, maxWidth: '100%' }}>
        <DatePicker initialDate={new Date('2024-02-15T12:00:00Z')} selectedDate={selected}
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
export const renderDates = () => <Consumer />;
export const hydrateDates = () => hydrateRoot(document.getElementById('root')!, renderDates());
