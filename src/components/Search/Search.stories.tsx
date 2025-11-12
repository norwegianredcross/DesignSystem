import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { useState } from 'react'; 
import { Search, SearchProps } from './index'; 
import { Label, Field } from '@digdir/designsystemet-react';

type SearchStoryProps = SearchProps & {
  placeholder?: string;
  label?: string;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
  showClearButton?: boolean;
  showSearchButton?: boolean;
};

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Search allows users to find content using keywords. It consists of an input field, optionally with clear and search buttons.',
      },
    },
  },
  argTypes: {
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'neutral',
    },
    children: { control: false }, 


    placeholder: {
      control: 'text',
      description: 'Placeholder text for the Search.Input field',
      defaultValue: 'Søk...',
      table: { category: 'Story Controls' },
    },
    label: {
      control: 'text',
      description: 'External label text (used with Label component)',
      table: { category: 'Story Controls' },
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Variant for the Search.Button',
      defaultValue: 'primary',
      table: { category: 'Story Controls' },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show the Search.Clear button',
      defaultValue: true,
      table: { category: 'Story Controls' },
    },
    showSearchButton: {
      control: 'boolean',
      description: 'Show the Search.Button',
      defaultValue: true,
      table: { category: 'Story Controls' },
    },
  } as ArgTypes<SearchStoryProps>, 
};

export default meta;


type Story = StoryObj<SearchStoryProps>;

// --- Default Example ---
export const Default: Story = {
  render: (args) => (
    <Search data-size={args['data-size']} data-color={args['data-color']}>
      <Search.Input aria-label="Søk" placeholder={args.placeholder} />
      {/* Use boolean flags for conditional rendering */}
      {args.showClearButton && <Search.Clear />}
      {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}
    </Search>
  ),
  args: {
    placeholder: 'Søk her...',
    buttonVariant: 'primary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Without Search Button (Icon in Input) ---
export const WithoutButton: Story = {
  render: (args) => (
    <Search data-size={args['data-size']} data-color={args['data-color']}>
      <Search.Input aria-label="Søk" placeholder={args.placeholder} />
      {args.showClearButton && <Search.Clear />}
    </Search>
  ),
  args: {
    placeholder: 'Søk med ikon...',
    showClearButton: true,
    showSearchButton: false, 
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Without Button',
};

// --- With External Label ---
export const WithLabel: Story = {
  render: (args) => (
    <Field data-size={args['data-size']} data-color={args['data-color']}>
      <Label id="search-with-label-label" htmlFor="search-with-label">{args.label}</Label>
      <Search>
        <Search.Input
          id="search-with-label"
          aria-labelledby="search-with-label-label"
          placeholder={args.placeholder}
        />
        {args.showClearButton && <Search.Clear />}
        {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}
      </Search>
    </Field>
  ),
  args: {
    label: 'Søk etter katter',
    placeholder: 'f.eks. Norsk skogkatt',
    buttonVariant: 'secondary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'With Label',
};


// --- Controlled Example ---
export const Controlled: Story = {
  render: (args) => {
    const [searchValue, setSearchValue] = useState('Jeg vil ha Pizza');
    return (
      <div style={{ width: '300px' }}>
        <Search data-size={args['data-size']} data-color={args['data-color']}>
          <Search.Input
            aria-label="Kontrollert søk"
            placeholder={args.placeholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {args.showClearButton && <Search.Clear onClick={() => setSearchValue('')} />}
          {args.showSearchButton && <Search.Button variant={args.buttonVariant} onClick={() => alert(`Searching for: ${searchValue}`)} />}
        </Search>
        <p style={{ marginTop: '8px', fontSize: '0.8em' }}>
          Du har skrevet inn: {searchValue}
        </p>
      </div>
    );
  },
  args: {
    placeholder: 'Skriv her...',
    buttonVariant: 'primary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Example within a Form ---
export const WithinForm: Story = {
 render: (args) => {
    const [submittedValue, setSubmittedValue] = useState('');
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          setSubmittedValue(formData.get('search-term') as string);
        }}
        style={{ width: '300px' }}
      >
        <Search data-size={args['data-size']} data-color={args['data-color']}>
          <Search.Input
            aria-label="Skjemasøk"
            placeholder={args.placeholder}
            name="search-term"
          />
          {args.showClearButton && <Search.Clear />}
          {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}
        </Search>
        {submittedValue && (
          <p style={{ marginTop: '8px', fontSize: '0.8em' }}>
            Submitted value: {submittedValue}
          </p>
        )}
      </form>
    );
  },
  args: {
    placeholder: 'Søk i skjema...',
    buttonVariant: 'primary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Within Form',
};

// --- Variants (Primary / Secondary / Tertiary) ---
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: 320 }}>
      <Search data-size={args['data-size']} data-color={args['data-color']}>
        <Search.Input aria-label="Søk" placeholder="Primær knapp" />
        <Search.Clear />
        <Search.Button variant="primary" />
      </Search>
      <Search data-size={args['data-size']} data-color={args['data-color']}>
        <Search.Input aria-label="Søk" placeholder="Sekundær knapp" />
        <Search.Clear />
        <Search.Button variant="secondary" />
      </Search>
      <Search data-size={args['data-size']} data-color={args['data-color']}>
        <Search.Input aria-label="Søk" placeholder="Tertiær knapp" />
        <Search.Clear />
        <Search.Button variant="tertiary" />
      </Search>
    </div>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
};