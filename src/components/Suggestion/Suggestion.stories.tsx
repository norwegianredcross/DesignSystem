/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import {
  Suggestion,
  SuggestionProps,
} from './index';
import { Field } from '../Field'; // Assuming Field is in ../Field
import { Label } from '../Label'; // Assuming Label is in ../Label
import { Spinner } from '../SpinnerLoader'; // Assuming Spinner is in ../SpinnerLoader

// Simple debounce hook
const useDebounceCallback = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};

const meta: Meta<typeof Suggestion> = {
  title: 'Components/Suggestion',
  component: Suggestion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.',
      },
    },
    a11y: { test: 'todo' }, // aria-allowed-role: DigDir EXPERIMENTAL_Suggestion component a11y issue
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allows the user to select multiple items',
      defaultValue: false,
    },
    creatable: {
      control: 'boolean',
      description: 'Allows the user to create new items',
      defaultValue: false,
    },
    filter: {
      control: 'boolean',
      description:
        'Filter options based on input (set to false to show all). A custom filter function can also be provided.',
      defaultValue: true,
    },
    name: {
      control: 'text',
      description: 'The name of the associated form control',
    },
    // Hide complex props from the controls panel
    selected: { table: { disable: true } },
    defaultSelected: { table: { disable: true } },
    onSelectedChange: { table: { disable: true } },
    onBeforeMatch: { table: { disable: true } },
    renderSelected: { table: { disable: true } },
    children: { table: { disable: true } },
  } as ArgTypes<SuggestionProps>,
};

export default meta;

type Story = StoryObj<typeof Suggestion>;

// Renamed this type to avoid collision with the component's internal 'SuggestionItem' type
type StorySuggestionItem = {
  label: string;
  value: string;
  __new__?: boolean;
};

// --- Common Data ---
const defaultOptions: StorySuggestionItem[] = [
  { label: 'Sogndal', value: 'sogndal' },
  { label: 'Oslo', value: 'oslo' },
  { label: 'Bergen', value: 'bergen' },
  { label: 'Trondheim', value: 'trondheim' },
  { label: 'Stavanger', value: 'stavanger' },
];

// --- Default (Single Select) ---
export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>(
      undefined,
    );
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg en destinasjon</Label>
        <Suggestion
          {...args}
          selected={selected as any} // FIX: Cast to 'any' to bypass broken types
          // Fix: Add type guard and cast handler to 'any'
          onSelectedChange={((item: unknown) => {
            if (!Array.isArray(item)) {
              setSelected(item as StorySuggestionItem);
            }
          }) as any}
          name="single-destination"
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map((opt) => (
              <Suggestion.Option
                key={opt.value} // Fix: 'key' is now correctly typed as string
                label={opt.label}
                value={opt.value}
              >
                {opt.label}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: false,
    creatable: false,
  },
};

// --- Multi-Select ---
export const MultiSelect: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<StorySuggestionItem[]>([
      defaultOptions[1], // Pre-select 'Oslo'
    ]);
    return (
      <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion
          {...args}
          selected={selected as any} // FIX: Cast to 'any' to bypass broken types
          // Fix: Add type guard and cast handler to 'any'
          onSelectedChange={((items: unknown) => {
            if (Array.isArray(items)) {
              setSelected(items as StorySuggestionItem[]);
            }
          }) as any}
          name="multi-destination"
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map((opt) => (
              <Suggestion.Option
                key={opt.value} // Fix: 'key' is now correctly typed as string
                label={opt.label}
                value={opt.value}
              >
                {opt.label}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: true,
  },
  name: 'Multi-Select',
};

// --- Creatable ---
export const Creatable: Story = {
  render: (args) => {
    const [options, setOptions] = useState<StorySuggestionItem[]>(defaultOptions);
    const [selected, setSelected] = useState<StorySuggestionItem[]>([]);

    const handleSelectedChange = (items: StorySuggestionItem[]) => {
      // Check if a new item was created
      const newItem = items.find((item) => (item as any).__new__);
      if (newItem) {
        // Add the new item to the available options list
        const newOption = {
          label: newItem.label,
          value: newItem.value,
        };
        setOptions((prev) => [...prev, newOption]);
      }
      setSelected(items);
    };

    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg eller lag destinasjoner</Label>
        <Suggestion
          {...args}
          selected={selected as any} // FIX: Cast to 'any' to bypass broken types
          // Fix: Add type guard and cast handler to 'any'
          onSelectedChange={((items: unknown) => {
            if (Array.isArray(items)) {
              handleSelectedChange(items as StorySuggestionItem[]);
            }
          }) as any}
          name="creatable-destination"
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>
              Ingen treff (trykk Enter for å lage ny)
            </Suggestion.Empty>
            {options.map((opt) => (
              <Suggestion.Option
                key={opt.value} // Fix: 'key' is now correctly typed as string
                label={opt.label}
                value={opt.value}
              >
                {opt.label}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: true,
    creatable: true,
  },
};

// --- Async Loading ---
export const AsyncLoading: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<string[] | null>(null);
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>();

    const apiCall = async (value: string) => {
      const api = `https://restcountries.com/v2/name/${value}?fields=name`;
      try {
        const response = await fetch(api);
        if (!response.ok) {
          setOptions([]); // Handle HTTP errors
          return;
        }
        const countries = await response.json();
        setOptions(
          Array.isArray(countries) ? countries.map(({ name }) => name) : [],
        );
      } catch (error) {
        console.error('Failed to fetch countries:', error);
        setOptions([]); // Handle fetch errors
      }
    };

    const debounced = useDebounceCallback(apiCall, 500);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setValue(inputValue);
      setOptions(null); // Clear options on new input
      const trimmedValue = inputValue.trim();
      if (!trimmedValue) return;
      debounced(encodeURIComponent(trimmedValue));
    };

    // FIX: Added handler to make component controlled
    const handleSelectedChange = (item: unknown) => {
      if (!Array.isArray(item) && item) {
        const selectedItem = item as StorySuggestionItem;
        setValue(selectedItem.label); // Set input value to the selected item
        setSelected(selectedItem); // Set selected state
        setOptions(null); // Clear options list
      }
    };

    return (
      <Field lang="en">
        <Label>Search for countries (in english)</Label>
        <Suggestion
          {...args}
          selected={selected as any} // FIX: Cast to 'any' to bypass broken types
          onSelectedChange={handleSelectedChange as any} // FIX: Cast handler to 'any'
        >
          <Suggestion.Input onInput={handleInput} value={value} />
          <Suggestion.Clear />
          <Suggestion.List singular="%d country" plural="%d countries">
            {value ? (
              <Suggestion.Empty>
                {options ? (
                  'Ingen treff'
                ) : (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Spinner aria-hidden="true" data-size="sm" /> Laster...
                  </span>
                )}
              </Suggestion.Empty>
            ) : null}
            {options?.map((option) => (
              <Suggestion.Option key={option} label={option} value={option}>
                {option}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    // We set filter to false because we are providing our own list of options
    filter: false,
  },
  name: 'Async Loading',
};

// --- No Filter ---
export const NoFilter: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>(
      undefined,
    );
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg en destinasjon (viser alltid alle)</Label>
        <Suggestion
          {...args}
          selected={selected as any} // FIX: Cast to 'any' to bypass broken types
          // Fix: Add type guard and cast handler to 'any'
          onSelectedChange={((item: unknown) => {
            if (!Array.isArray(item)) {
              setSelected(item as StorySuggestionItem);
            }
          }) as any}
          name="no-filter-destination"
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Listen er tom</Suggestion.Empty>
            {defaultOptions.map((opt) => (
              <Suggestion.Option
                key={opt.value} // Fix: 'key' is now correctly typed as string
                label={opt.label}
                value={opt.value}
              >
                {opt.label}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    filter: false,
  },
  name: 'No Filter',
};

// --- INTERACTION TESTS ---

/**
 * Shared render helper for interaction tests: a controlled single-select
 * Suggestion that forwards selection changes to the onSelectedChange spy
 * provided via args (so the Actions panel still logs them).
 */
const SingleSelectTestRender = (args: SuggestionProps) => {
  const [selected, setSelected] = useState<StorySuggestionItem | undefined>(
    undefined,
  );
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion
        {...args}
        selected={selected as any}
        onSelectedChange={((item: unknown) => {
          (args.onSelectedChange as any)?.(item);
          if (!Array.isArray(item)) {
            setSelected((item ?? undefined) as StorySuggestionItem | undefined);
          }
        }) as any}
        name="test-destination"
      >
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {defaultOptions.map((opt) => (
            <Suggestion.Option key={opt.value} label={opt.label} value={opt.value}>
              {opt.label}
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

/** Wait for the async label/field wiring, then return the combobox input. */
const findSuggestionInput = async (canvas: ReturnType<typeof within>) =>
  await waitFor(() => canvas.getByLabelText('Velg en destinasjon'));

/**
 * Tests combobox ARIA wiring on the input: role, aria-autocomplete,
 * aria-controls pointing at the listbox, and expanded state on focus.
 */
export const TestComboboxAria: Story = {
  name: 'Test: Combobox Aria Attributes',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    const list = canvasElement.querySelector('u-datalist');

    // The u-combobox/u-datalist elements upgrade the plain input to a combobox
    await waitFor(() => {
      expect(input).toHaveAttribute('role', 'combobox');
      expect(input).toHaveAttribute('aria-autocomplete', 'list');
      expect(list).toHaveAttribute('id');
      expect(input).toHaveAttribute('aria-controls', list?.id);
    });
    expect(list).toHaveAttribute('role', 'listbox');

    // Focusing the input opens the suggestion list
    await userEvent.click(input);
    await waitFor(() => {
      expect(list).not.toHaveAttribute('hidden');
    });
    expect(input).toHaveAttribute('aria-expanded', 'true');
  },
};

/**
 * Tests that typing filters the option list to matching entries.
 */
export const TestFilterOnTyping: Story = {
  name: 'Test: Typing Filters Options',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);

    await userEvent.click(input);

    // All five options are available before typing
    const options = Array.from(
      canvasElement.querySelectorAll('u-option:not([data-empty])'),
    );
    expect(options).toHaveLength(defaultOptions.length);
    await waitFor(() => {
      for (const option of options) {
        expect(option).toHaveAttribute('aria-hidden', 'false');
      }
    });

    // Typing narrows the list down to the single match ("Bergen")
    await userEvent.type(input, 'berg');
    await waitFor(() => {
      const bergen = options.find((o) => o.textContent === 'Bergen');
      const oslo = options.find((o) => o.textContent === 'Oslo');
      expect(bergen).toHaveAttribute('aria-hidden', 'false');
      expect(bergen).not.toHaveAttribute('disabled');
      expect(oslo).toHaveAttribute('aria-hidden', 'true');
      expect(oslo).toHaveAttribute('disabled');
    });
  },
};

/**
 * Tests full keyboard flow: type to filter, ArrowDown to move focus into the
 * list, Enter to select. Selection fills the input and fires the callback.
 */
export const TestKeyboardSelection: Story = {
  name: 'Test: Keyboard Selection',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);

    await userEvent.click(input);
    await userEvent.type(input, 'osl');

    // ArrowDown moves focus to the first visible option
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      const focused = canvasElement.ownerDocument.activeElement;
      expect(focused?.textContent).toBe('Oslo');
      expect(focused).toHaveAttribute('role', 'option');
    });

    // Enter selects the focused option
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({
        label: 'Oslo',
        value: 'oslo',
      });
      expect(input).toHaveValue('Oslo');
    });
  },
};

/**
 * Tests selection with the mouse: clicking an option fills the input,
 * fires the callback, and closes the list.
 */
export const TestMouseSelection: Story = {
  name: 'Test: Mouse Selection',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    const list = canvasElement.querySelector('u-datalist');

    await userEvent.click(input);
    await userEvent.type(input, 'trond');

    const trondheim = await waitFor(() => {
      const option = Array.from(
        canvasElement.querySelectorAll('u-option:not([data-empty])'),
      ).find((o) => o.textContent === 'Trondheim');
      expect(option).toHaveAttribute('aria-hidden', 'false');
      return option as HTMLElement;
    });

    await userEvent.click(trondheim);
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({
        label: 'Trondheim',
        value: 'trondheim',
      });
      expect(input).toHaveValue('Trondheim');
      expect(list).toHaveAttribute('hidden');
    });
  },
};

/**
 * Tests that Escape closes the suggestion list without selecting anything.
 */
export const TestEscapeClosesList: Story = {
  name: 'Test: Escape Closes List',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    const list = canvasElement.querySelector('u-datalist');

    await userEvent.click(input);
    await waitFor(() => {
      expect(list).not.toHaveAttribute('hidden');
    });

    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(list).toHaveAttribute('hidden');
    });
    // KNOWN: aria-expanded stays "true" on desktop even when the list is
    // closed — upstream u-datalist behavior (aria-expanded = !IS_MOBILE || open).
    expect(args.onSelectedChange).not.toHaveBeenCalled();
    expect(input).toHaveValue('');
  },
};

/**
 * Negative test: input with no matches shows the empty state option.
 */
export const TestEmptyState: Story = {
  name: 'Test: Empty State',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);

    await userEvent.click(input);
    await userEvent.type(input, 'finnes-ikke');

    // All options are filtered out — the Empty option is rendered instead
    const empty = await waitFor(() => canvas.getByText('Ingen treff'));
    expect(empty).toBeVisible();
    await waitFor(() => {
      for (const option of canvasElement.querySelectorAll(
        'u-option:not([data-empty])',
      )) {
        expect(option).toHaveAttribute('aria-hidden', 'true');
      }
    });
  },
};

/**
 * Tests the clear button: after a selection it empties the input,
 * deselects the item (callback receives null), and refocuses the input.
 */
export const TestClearSelection: Story = {
  name: 'Test: Clear Selection',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);

    // Select "Sogndal" first
    await userEvent.click(input);
    await userEvent.type(input, 'sogn');
    const sogndal = await waitFor(() => {
      const option = Array.from(
        canvasElement.querySelectorAll('u-option:not([data-empty])'),
      ).find((o) => o.textContent === 'Sogndal');
      expect(option).toHaveAttribute('aria-hidden', 'false');
      return option as HTMLElement;
    });
    await userEvent.click(sogndal);
    await waitFor(() => {
      expect(input).toHaveValue('Sogndal');
    });

    // Clear the selection via the clear button
    const clearButton = await waitFor(() => {
      const el = canvasElement.querySelector<HTMLElement>('del[aria-label="Tøm"]');
      expect(el).toBeTruthy();
      return el as HTMLElement;
    });
    await userEvent.click(clearButton);

    // The input is emptied and refocused immediately...
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
    expect(input).toHaveFocus();

    // ...while the deselection itself is committed when the field is left
    // (u-combobox dispatches the change on blur/Enter, not per keystroke)
    await userEvent.tab();
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith(null);
      expect(input).toHaveValue('');
    });
  },
};

/**
 * Tests multi-select: each chosen option is added to the selection,
 * the callback receives the accumulated array, and selected items are
 * rendered as removable chips.
 */
export const TestMultiSelect: Story = {
  name: 'Test: Multi-Select Interaction',
  render: (args) => {
    const [selected, setSelected] = useState<StorySuggestionItem[]>([]);
    return (
      <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion
          {...args}
          selected={selected as any}
          onSelectedChange={((items: unknown) => {
            (args.onSelectedChange as any)?.(items);
            if (Array.isArray(items)) {
              setSelected(items as StorySuggestionItem[]);
            }
          }) as any}
          name="test-multi-destination"
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map((opt) => (
              <Suggestion.Option key={opt.value} label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: true,
    onSelectedChange: fn() as any,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Velg destinasjoner'));

    const clickOption = async (label: string) => {
      await userEvent.click(input);
      const option = await waitFor(() => {
        const el = Array.from(
          canvasElement.querySelectorAll('u-option:not([data-empty])'),
        ).find((o) => o.textContent === label);
        expect(el).toHaveAttribute('aria-hidden', 'false');
        return el as HTMLElement;
      });
      await userEvent.click(option);
    };

    await clickOption('Oslo');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([
        { label: 'Oslo', value: 'oslo' },
      ]);
    });

    await clickOption('Bergen');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([
        { label: 'Oslo', value: 'oslo' },
        { label: 'Bergen', value: 'bergen' },
      ]);
    });

    // Selected items are rendered as chips (data elements marked selected)
    await waitFor(() => {
      const chips = canvasElement.querySelectorAll('data[aria-selected="true"]');
      expect(chips).toHaveLength(2);
    });
  },
};
