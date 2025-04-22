import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Select, SelectProps } from './index'; // Import the main Select component
// Import components for context/examples
import { Field, Label, ValidationMessage } from '@digdir/designsystemet-react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select (dropdown list) allows users to choose one option from a static list.',
      },
    },
    // layout: 'centered', // Might need more width depending on content
  },
  argTypes: {
    // Props directly available on DigDirSelectProps
    'aria-invalid': {
      control: 'boolean',
      description: 'Indicates an error state for accessibility',
      defaultValue: false,
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
      description: 'Defines the width of Select',
      defaultValue: 'full',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables element',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      description: 'Defines if the select is readOnly',
      defaultValue: false,
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    // data-color is NOT listed as a prop for Select itself in the docs provided.
    // It likely inherits color from context.
    // 'data-color': { ... },
    // Standard select attributes like value, defaultValue, name, required are passed via {...props}
    value: { control: 'text' },
    defaultValue: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
    id: { control: 'text' }, // Important for label association
    // aria-labelledby is needed if label text is not passed via label prop
    'aria-labelledby': { control: 'text' },
    children: {
      control: false,
      description: 'Must contain Select.Option or Select.OptGroup elements',
    },
  } as ArgTypes<SelectProps>,
};

export default meta;

type Story = StoryObj<typeof Select>;

const mountainOptions = [
  { value: '', label: 'Velg et fjell …' }, // Placeholder option
  { value: 'galdhopiggen', label: 'Galdhøpiggen' },
  { value: 'glittertind', label: 'Glittertind' },
  { value: 'store_skagastolstind', label: 'Store Skagastølstind' },
  { value: 'gaustatoppen', label: 'Gaustatoppen' },
];

const groupedMountainOptions = [
  {
    label: 'Norske fjell',
    options: [
      { value: 'galdhopiggen', label: 'Galdhøpiggen' },
      { value: 'glittertind', label: 'Glittertind' },
      { value: 'gaustatoppen', label: 'Gaustatoppen' },
    ],
  },
  {
    label: 'Utenlandske fjell',
    options: [
      { value: 'everest', label: 'Mount Everest' },
      { value: 'k2', label: 'K2' },
      { value: 'kilimanjaro', label: 'Kilimanjaro' },
    ],
  },
];

// --- Basic Example ---
export const Default: Story = {
  render: (args) => (
    // Use Field and Label for structure and accessibility
    <Field data-size={args['data-size']}>
      <Label id="select-default-label" htmlFor="select-default">
        Velg et fjell
      </Label>
      <Select id="select-default" aria-labelledby="select-default-label" {...args}>
        {mountainOptions.map((opt) => (
          <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>
            {opt.label}
          </Select.Option>
        ))}
      </Select>
    </Field>
  ),
  args: {
    name: 'default-select',
    'data-size': 'md',
    width: 'auto', // Default to auto width for this example
  },
};

// --- Example with Error ---
export const WithError: Story = {
  render: (args) => (
    <Field data-size={args['data-size']}>
      <Label id="select-error-label" htmlFor="select-error">
        Velg et fjell *
      </Label>
      <Select
        id="select-error"
        aria-labelledby="select-error-label"
        aria-describedby="select-error-message" // Link to error message
        required // Mark as required
        {...args} // Spread args, including aria-invalid
      >
        {mountainOptions.map((opt) => (
          <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>
            {opt.label}
          </Select.Option>
        ))}
      </Select>
      {/* Show error message when aria-invalid is true */}
      {args['aria-invalid'] && (
        <ValidationMessage id="select-error-message">
          Du må velge et fjell fra listen.
        </ValidationMessage>
      )}
    </Field>
  ),
  args: {
    name: 'error-select',
    'data-size': 'md',
    'aria-invalid': true, // Set invalid state
    width: 'full',
  },
  name: 'With Error',
};

// --- Example with Grouping ---
export const WithGrouping: Story = {
    render: (args) => (
      <Field data-size={args['data-size']}>
        <Label id="select-grouped-label" htmlFor="select-grouped">
          Velg et fjell
        </Label>
        <Select id="select-grouped" aria-labelledby="select-grouped-label" {...args}>
          <Select.Option value="" disabled>Velg et fjell …</Select.Option>
          {groupedMountainOptions.map((group) => (
            // --- FIX: Use Optgroup (lowercase g) ---
            <Select.Optgroup key={group.label} label={group.label}>
            {/* --- END FIX --- */}
              {group.options.map((opt) => (
                <Select.Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Select.Option>
              ))}
            </Select.Optgroup> // --- FIX: Closing tag also uses lowercase g ---
          ))}
        </Select>
      </Field>
    ),
    args: {
      name: 'grouped-select',
      'data-size': 'md',
      width: 'auto',
      defaultValue: 'everest', // Example default value
    },
    name: 'With Grouping (Optgroup)', // Updated story name slightly for clarity
  };

// --- Disabled Example ---
export const Disabled: Story = {
 render: (args) => (
    <Field data-size={args['data-size']}>
      <Label id="select-disabled-label" htmlFor="select-disabled">
        Utilgjengelig valg
      </Label>
      <Select id="select-disabled" aria-labelledby="select-disabled-label" {...args}>
         <Select.Option value="1">Valgt (Deaktivert)</Select.Option>
         {/* Add other options if needed, they will also be disabled */}
      </Select>
    </Field>
  ),
  args: {
    name: 'disabled-select',
    'data-size': 'md',
    disabled: true,
    value: '1', // Show a selected value in the disabled state
  },
};

// --- ReadOnly Example ---
export const ReadOnly: Story = {
 render: (args) => (
    <Field data-size={args['data-size']}>
      <Label id="select-readonly-label" htmlFor="select-readonly">
        Kun lesbart valg
      </Label>
      <Select id="select-readonly" aria-labelledby="select-readonly-label" {...args}>
         <Select.Option value="galdhopiggen">Galdhøpiggen</Select.Option>
         {/* Only the selected option needs to be present for readOnly */}
      </Select>
    </Field>
  ),
  args: {
    name: 'readonly-select',
    'data-size': 'md',
    readOnly: true,
    value: 'galdhopiggen', // The value that should be displayed
  },
};
