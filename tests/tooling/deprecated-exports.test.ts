import path from 'node:path';
import * as digdir from '@digdir/designsystemet-react';
import { describe, expect, it } from 'vitest';
import * as rk from '../../src';
import { checkDeprecatedExports, DEPRECATED } from '../../scripts/deprecated-exports.mjs';

describe('deprecated re-exports', () => {
  it('flags the APIs Digdir deprecated in 1.24, and nothing else, whichever Digdir version is installed', () => {
    const result = checkDeprecatedExports(path.resolve(__dirname, '../..'), './src');
    expect(result).toEqual({ errors: [], missing: [], unexpected: [] });
  });

  it('keeps the deprecated APIs identical to Digdir', () => {
    for (const name of DEPRECATED) {
      expect(rk[name as keyof typeof rk], name).toBe(digdir[name as keyof typeof digdir]);
    }
    expect(rk.Dialog).toBe(digdir.Dialog);
    expect(rk.Dropdown).toBe(digdir.Dropdown);
    expect(rk.Popover).toBe(digdir.Popover);
    expect(rk.Search.Input).toBe(digdir.SearchInput);
    expect(rk.Search.Button).toBe(digdir.SearchButton);
    expect(rk.Search.Clear).toBe(digdir.SearchClear);
    expect(rk.Search.ClearButton).toBe(digdir.SearchClear);
    expect(rk.Dialog.Trigger).toBe(digdir.DialogTrigger);
    expect(rk.Dialog.TriggerContext).toBe(digdir.DialogTriggerContext);
    expect(rk.Dropdown.Trigger).toBe(digdir.DropdownTrigger);
    expect(rk.Dropdown.TriggerContext).toBe(digdir.DropdownTriggerContext);
    expect(rk.Popover.Trigger).toBe(digdir.PopoverTrigger);
    expect(rk.Popover.TriggerContext).toBe(digdir.PopoverTriggerContext);
  });
});
