/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';
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
    // WCAG-gaten er PÅ for Suggestion, men tre axe-regler er unntatt fordi
    // bruddene ligger i Digdir sin EXPERIMENTAL_Suggestion-markup (input med
    // role="combobox"/popovertarget og opsjoner utenfor listbox-forelder) og
    // ikke kan rettes herfra. Alle andre regler (kontrast, navn, fokus …)
    // håndheves fortsatt. Fjern unntakene når Digdir retter komponenten.
    // Registrert som akseptert risiko i TESTING.md.
    a11y: {
      config: {
        rules: [
          { id: 'aria-allowed-role', enabled: false },
          { id: 'aria-required-parent', enabled: false },
          { id: 'aria-valid-attr-value', enabled: false },
        ],
      },
    },
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
      defaultOptions[1]!, // Pre-select 'Oslo'
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

    // onInput carries a FormEvent (Digdir's InputEventHandler); typing it as a
    // ChangeEvent was wrong and TypeScript 5.9 finally rejects the mismatch.
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
      const inputValue = event.currentTarget.value;
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

// The fixture owns the wording and selected-item markup; Digdir may change its defaults.
// Set both aria-label (1.21) and data-sr-clear (1.22's screen-reader text setting).
const clearSelectionLabel = 'Fjern valgt destinasjon';
const renderSelectedDestination = ({ label, value }: StorySuggestionItem) => (
  <span data-testid="selected-destination" data-value={value}>{label}</span>
);

/** Controlled single-select fixture with forwarded selection callbacks. */
const SingleSelectTestRender = (args: SuggestionProps) => {
  // null is an empty controlled selection; undefined switches to uncontrolled.
  const [selected, setSelected] = useState<StorySuggestionItem | null>(null);
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Field>
        <Label>Velg en destinasjon</Label>
        <Suggestion
          {...args}
          selected={selected as any}
          renderSelected={renderSelectedDestination}
          data-sr-clear={clearSelectionLabel}
          onSelectedChange={((item: unknown) => {
            (args.onSelectedChange as any)?.(item);
            if (!Array.isArray(item)) {
              setSelected(item as StorySuggestionItem | null);
            }
          }) as any}
          name="test-destination"
        >
          <Suggestion.Input />
          <Suggestion.Clear aria-label={clearSelectionLabel} />
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
    </form>
  );
};

const MultiSelectTestRender = ({
  controlled = true,
  ...args
}: SuggestionProps & { controlled?: boolean }) => {
  const [selected, setSelected] = useState<StorySuggestionItem[]>([]);
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion
          {...args}
          multiple
          // Both regression modes start empty, regardless of Storybook args.
          defaultSelected={undefined}
          selected={controlled ? selected : undefined}
          renderSelected={renderSelectedDestination}
          data-sr-clear={clearSelectionLabel}
          onSelectedChange={(items: StorySuggestionItem[]) => {
            (args.onSelectedChange as any)?.(items);
            if (controlled) setSelected(items);
          }}
          name="test-multi-destination"
        >
          <Suggestion.Input />
          <Suggestion.Clear aria-label={clearSelectionLabel} />
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
    </form>
  );
};

const findVisibleSuggestionOption = async (canvasElement: HTMLElement, label: string) =>
  await waitFor(() => {
    const option = within(canvasElement).getByRole('option', { name: label });
    expect(option).toBeVisible();
    expect(option).not.toHaveAttribute('aria-disabled', 'true');
    return option;
  });

// Verify rendered and submitted state, not just callbacks.
const expectSuggestionSelection = (canvasElement: HTMLElement, name: string, values: string[]) => {
  const selectedValues = within(canvasElement).queryAllByTestId('selected-destination')
    .map((el) => el.getAttribute('data-value'));
  expect(selectedValues).toEqual(values);
  const form = canvasElement.querySelector('form');
  expect(form).not.toBeNull();
  expect(new FormData(form!).getAll(name)).toEqual(values);
};

/** Wait for the async label/field wiring, then return the combobox input. */
// By role, not by label text: since Digdir 1.21 the listbox carries the
// field's label as well, so getByLabelText resolves to two elements.
const findSuggestionInput = async (canvas: ReturnType<typeof within>) =>
  await waitFor(() => canvas.getByRole('combobox', { name: 'Velg en destinasjon' }));

/**
 * Tests combobox ARIA wiring on the input: role, aria-autocomplete,
 * aria-controls pointing at the listbox, and expanded state when opened.
 */
export const TestComboboxAria: Story = {
  name: 'Test: Combobox Aria Attributes',
  render: SingleSelectTestRender,
  args: { onSelectedChange: fn() as any },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Semantics, not Digdir's wiring: the field IS a combobox (that is how
    // findSuggestionInput finds it), it controls a listbox, and opening it
    // is reflected in aria-expanded. Which element carries which attribute,
    // and when the web component upgrades it, is Digdir's business.
    const input = await findSuggestionInput(canvas);
    // Single-select only: in `multiple` mode the hidden <select multiple>
    // is a second listbox, so this lookup would be ambiguous there.
    const list = await canvas.findByRole('listbox', { hidden: true });

    // Native popover state needs real focus/key events in the browser test.
    // Keep the story playable in Storybook, where Vitest's provider is absent.
    const interactions = import.meta.env.MODE === 'test'
      ? (await import('@vitest/browser/context')).userEvent
      : userEvent;
    await interactions.click(input);
    await interactions.keyboard('{ArrowDown}');
    // The web component opens the popover asynchronously; under a full
    // parallel suite run the default 1 s wait is occasionally too short.
    await waitFor(
      () => {
        expect(input).toHaveAttribute('aria-controls', list.id);
        expect(input).toHaveAttribute('aria-expanded', 'true');
        expect(list).toBeVisible();
      },
      { timeout: 4000 },
    );
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

    // Check what users can reach, independent of the tags or hiding attributes.
    await waitFor(() => {
      expect(canvas.getAllByRole('option')).toHaveLength(defaultOptions.length);
      for (const { label } of defaultOptions) {
        expect(canvas.getByRole('option', { name: label })).toBeVisible();
      }
    });

    // Typing narrows the list down to the single match ("Bergen")
    await userEvent.type(input, 'berg');
    await waitFor(() => {
      expect(canvas.getAllByRole('option')).toHaveLength(1);
      expect(canvas.getByRole('option', { name: 'Bergen' })).toBeVisible();
      expect(canvas.queryByRole('option', { name: 'Oslo' })).not.toBeInTheDocument();
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

    // ArrowDown makes the first visible option the active descendant. Focus
    // stays in the combobox (the WAI-ARIA combobox pattern); asserting on
    // document.activeElement was asserting Digdir's pre-1.21 internals.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      const activeId = input.getAttribute('aria-activedescendant');
      expect(activeId).toBeTruthy();
      const active = canvasElement.ownerDocument.getElementById(activeId ?? '');
      expect(active).toHaveAttribute('role', 'option');
      expect(active?.textContent).toBe('Oslo');
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
    const list = await canvas.findByRole('listbox', { hidden: true });

    await userEvent.click(input);
    await userEvent.type(input, 'trond');

    const trondheim = await findVisibleSuggestionOption(canvasElement, 'Trondheim');

    await userEvent.click(trondheim);
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({
        label: 'Trondheim',
        value: 'trondheim',
      });
      expect(input).toHaveValue('Trondheim');
      expect(list).not.toBeVisible();
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
    const list = await canvas.findByRole('listbox', { hidden: true });

    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(list).toBeVisible();
    });

    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(list).not.toBeVisible();
    });
    // Known issue #24: aria-expanded stays "true" on desktop even when the
    // list is closed (upstream u-datalist behavior).
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
      for (const { label } of defaultOptions) {
        expect(canvas.queryByRole('option', { name: label })).not.toBeInTheDocument();
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
    const sogndal = await findVisibleSuggestionOption(canvasElement, 'Sogndal');
    await userEvent.click(sogndal);
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({ label: 'Sogndal', value: 'sogndal' });
      expect(input).toHaveValue('Sogndal');
      expectSuggestionSelection(canvasElement, 'test-destination', ['sogndal']);
    });

    // Find the clear control by its accessible name.
    const clearButton = await canvas.findByRole('button', { name: clearSelectionLabel });
    await userEvent.click(clearButton);

    // The input is emptied and refocused immediately...
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
    expect(input).toHaveFocus();

    // Deselection is committed on blur, not per keystroke.
    await userEvent.tab();
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith(null);
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-destination', []);
    });
    await userEvent.click(input);
    await waitFor(() => {
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-destination', []);
    });
  },
};

/** Verify accumulated selections, chips, and submitted values. */
export const TestMultiSelect: Story = {
  name: 'Test: Multi-Select Interaction',
  render: (args) => <MultiSelectTestRender {...args} />,
  args: {
    multiple: true,
    onSelectedChange: fn() as any,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByRole('combobox', { name: 'Velg destinasjoner' }));

    const clickOption = async (label: string) => {
      await userEvent.click(input);
      await userEvent.click(await findVisibleSuggestionOption(canvasElement, label));
    };

    await clickOption('Oslo');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([
        { label: 'Oslo', value: 'oslo' },
      ]);
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo']);
    });

    await clickOption('Bergen');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([
        { label: 'Oslo', value: 'oslo' },
        { label: 'Bergen', value: 'bergen' },
      ]);
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo', 'bergen']);
    });
  },
};

export const TestMultiSelectPreservesQuery: Story = {
  name: 'Test: Multi-Select Preserves Typed Query',
  render: (args) => <MultiSelectTestRender {...args} />,
  args: { multiple: true, onSelectedChange: fn() as any },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByRole('combobox', { name: 'Velg destinasjoner' }));
    await userEvent.click(input);
    await userEvent.type(input, 'o');
    await userEvent.click(await findVisibleSuggestionOption(canvasElement, 'Oslo'));
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{ label: 'Oslo', value: 'oslo' }]);
      expect(input).toHaveValue('o');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo']);
    });

    // Preserve the query, not the chosen option's value; another match stays usable.
    await userEvent.click(input);
    await userEvent.click(await findVisibleSuggestionOption(canvasElement, 'Trondheim'));
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([
        { label: 'Oslo', value: 'oslo' },
        { label: 'Trondheim', value: 'trondheim' },
      ]);
      expect(input).toHaveValue('o');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo', 'trondheim']);
    });
  },
};

export const TestUncontrolledMultiSelect: Story = {
  name: 'Test: Uncontrolled Multi-Select Mouse and Keyboard',
  render: (args) => <MultiSelectTestRender {...args} controlled={false} />,
  args: { multiple: true, onSelectedChange: fn() as any },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByRole('combobox', { name: 'Velg destinasjoner' }));
    await userEvent.click(input);
    await userEvent.click(await findVisibleSuggestionOption(canvasElement, 'Oslo'));
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{ label: 'Oslo', value: 'oslo' }]);
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo']);
    });

    await userEvent.type(input, 'berg');
    await findVisibleSuggestionOption(canvasElement, 'Bergen');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      const activeId = input.getAttribute('aria-activedescendant');
      expect(activeId).toBeTruthy();
      const active = canvasElement.ownerDocument.getElementById(activeId ?? '');
      expect(active).toHaveAttribute('role', 'option');
      expect(active?.textContent).toBe('Bergen');
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([
        { label: 'Oslo', value: 'oslo' },
        { label: 'Bergen', value: 'bergen' },
      ]);
      expect(input).toHaveValue('berg');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo', 'bergen']);
    });
  },
};
