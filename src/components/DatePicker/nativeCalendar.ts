/** Calendar dates are civil values, not instants in the browser's timezone. */
export interface CalendarDay {
  value: string;
  label: string;
  number: string;
  inMonth: boolean;
  today: boolean;
  /** Only callback mode supplies a browser-local Date. */
  date?: Date;
}

const parseCivilDate = (value: string | undefined): Date | null => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value) || value.startsWith('0000-')) return null;
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value ? date : null;
};

export function nativeCalendar(month: string, language: 'NO' | 'EN', selectedValue?: string, today?: string) {
  const first = parseCivilDate(`${month}-01`);
  if (!first) throw new Error('DatePicker serverCalendar requires a valid YYYY-MM month (years 0001–9999).');
  const locale = language === 'EN' ? 'en-GB' : 'nb-NO';
  const dayFormat = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const monthFormat = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' });
  const describe = (date: Date): CalendarDay => {
    const value = date.toISOString().split('T')[0]!;
    return { value, label: dayFormat.format(date), number: String(date.getUTCDate()), inMonth: value.slice(0, 7) === month, today: value === today };
  };
  const adjacentMonth = (direction: number) => {
    const date = new Date(first);
    date.setUTCMonth(date.getUTCMonth() + direction);
    return date.getUTCFullYear() < 1 || date.getUTCFullYear() > 9999 ? undefined : date.toISOString().slice(0, 7);
  };
  const last = new Date(first);
  last.setUTCMonth(last.getUTCMonth() + 1, 0);
  const mondayOffset = (first.getUTCDay() + 6) % 7;
  const cellCount = Math.ceil((mondayOffset + last.getUTCDate()) / 7) * 7;
  const weeks: CalendarDay[][] = [];
  for (let index = 0; index < cellCount; index++) {
    const date = new Date(first);
    date.setUTCDate(1 - mondayOffset + index);
    if (index % 7 === 0) weeks.push([]);
    weeks[weeks.length - 1]!.push(describe(date));
  }
  const selection = parseCivilDate(selectedValue);
  return {
    monthLabel: monthFormat.format(first),
    previousMonth: adjacentMonth(-1),
    nextMonth: adjacentMonth(1),
    weeks,
    selection: selection ? describe(selection) : undefined,
  };
}
