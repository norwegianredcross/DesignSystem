import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
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
  SuggestionOptionProps,
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

const allCountries: StorySuggestionItem[] = [
  { label: 'Norway', value: 'NO' },
  { label: 'Sweden', value: 'SE' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Finland', value: 'FI' },
  { label: 'Germany', value: 'DE' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'United States', value: 'US' },
  { label: 'France', value: 'FR' },
  { label: 'Spain', value: 'ES' },
  { label: 'Poland', value: 'PL' },
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

