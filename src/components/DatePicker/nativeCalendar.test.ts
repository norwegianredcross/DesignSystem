import { describe, expect, it } from 'vitest';
import { nativeCalendar } from './nativeCalendar';

describe('native calendar dates', () => {
  it.each(['UTC', 'Pacific/Apia', 'Pacific/Kiritimati', 'Europe/Oslo', 'America/Los_Angeles'])('keeps all civil dates in %s', zone => {
    const original = process.env.TZ;
    try {
      process.env.TZ = zone;
      const calendar = nativeCalendar('2011-12', 'NO', '2011-12-30');
      const days = calendar.weeks.flat().filter(day => day.inMonth);
      expect(days).toHaveLength(31);
      expect(calendar.selection?.value).toBe('2011-12-30');
      expect(days[29]?.label).toBe('30. desember 2011');
      expect(calendar.previousMonth).toBe('2011-11');
      expect(calendar.nextMonth).toBe('2012-01');
    } finally {
      if (original === undefined) delete process.env.TZ;
      else process.env.TZ = original;
    }
  });
  it.each([['2024-02', 29], ['2025-02', 28], ['2000-02', 29], ['1900-02', 28]] as const)('has the correct number of dates in %s', (month, count) => {
    const days = nativeCalendar(month, 'EN').weeks.flat();
    expect(days.filter(day => day.inMonth)).toHaveLength(count);
    expect(days.length % 7).toBe(0);
  });
  it('rejects impossible months and ignores impossible selections', () => {
    expect(() => nativeCalendar('2024-13', 'NO')).toThrow();
    expect(() => nativeCalendar('0000-01', 'NO')).toThrow();
    expect(nativeCalendar('2025-02', 'NO', '2025-02-29').selection).toBeUndefined();
  });
  it('limits navigation at the supported year boundaries and keeps cell keys unique', () => {
    expect(nativeCalendar('0001-01', 'NO').previousMonth).toBeUndefined();
    const end = nativeCalendar('9999-12', 'NO');
    expect(end.nextMonth).toBeUndefined();
    expect(new Set(end.weeks.flat().map(day => day.value)).size).toBe(end.weeks.flat().length);
  });
});
