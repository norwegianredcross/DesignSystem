// src/components/Table/Table.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { useState, useMemo } from 'react'; // Import useState and useMemo for sorting example
import { Table, TableProps } from './index'; // Import the main Table component
// Import components for context/examples
import { Checkbox, Textfield } from '@digdir/designsystemet-react';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Table organizes and displays data in rows and columns for easy scanning and comparison.',
      },
    },
    layout: 'padded', // Allow table to take up space
  },
  argTypes: {
    // Props directly available on DigDirTableProps
    zebra: {
      control: 'boolean',
      description: 'Will give the table zebra striping',
      defaultValue: false,
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Will make the table header sticky',
      defaultValue: false,
    },
    border: {
      control: 'boolean',
      description: 'Will give the table a rounded border',
      defaultValue: false,
    },
    hover: {
      control: 'boolean',
      description: 'Will give the table a hover effect on rows',
      defaultValue: false,
    },
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
    // Children are defined within the story's render/args
    children: { control: false },
    // caption is handled via <caption> tag
    caption: { table: { disable: true } },
  } as ArgTypes<TableProps>,
};

export default meta;

type Story = StoryObj<typeof Table>;

const simpleData = [
  { id: 1, col1: 'Cell 1', col2: 'Cell 2', col3: 'Cell 3' },
  { id: 2, col1: 'Cell 4', col2: 'Cell 5', col3: 'Cell 6' },
  { id: 3, col1: 'Cell 7', col2: 'Cell 8', col3: 'Cell 9' },
];

const sortableData = [
  { id: 1, name: 'Lise Nordmann', email: 'lise@nordmann.no', phone: '22345678' },
  { id: 2, name: 'Kari Nordmann', email: 'kari@nordmann.no', phone: '87654321' },
  { id: 3, name: 'Ola Nordmann', email: 'ola@nordmann.no', phone: '32345678' },
  { id: 4, name: 'Per Nordmann', email: 'per@nordmann.no', phone: '12345678' },
];

// --- Basic Example ---
export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <caption>Table caption</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>
          <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>
          <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {simpleData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.col1}</Table.Cell>
            <Table.Cell>{row.col2}</Table.Cell>
            <Table.Cell>{row.col3}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>Footer 1</Table.Cell>
          <Table.Cell>Footer 2</Table.Cell>
          <Table.Cell>Footer 3</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Zebra Striping ---
export const ZebraStriped: Story = {
  render: (args) => (
    <Table {...args}>
      <caption>Zebra Striped Table</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>
          <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {simpleData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.col1}</Table.Cell>
            <Table.Cell>{row.col2}</Table.Cell>
          </Table.Row>
        ))}
         <Table.Row>
            <Table.Cell>Cell 10</Table.Cell>
            <Table.Cell>Cell 11</Table.Cell>
          </Table.Row>
      </Table.Body>
    </Table>
  ),
  args: {
    zebra: true, // Enable zebra striping
    'data-size': 'md',
  },
  name: 'Zebra Striping',
};

// --- Sticky Header ---
export const StickyHeader: Story = {
  render: (args) => (
    // Need a container with fixed height to demonstrate sticky
    <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc' }}>
      <Table {...args}>
        <caption>Sticky Header Table (Scroll Down)</caption>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>
            <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>
            <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {/* Repeat data for scrolling */}
          {[...simpleData, ...simpleData, ...simpleData, ...simpleData].map((row, index) => (
            <Table.Row key={`${row.id}-${index}`}>
              <Table.Cell>Cell {(index * 3) + 1}</Table.Cell>
              <Table.Cell>Cell {(index * 3) + 2}</Table.Cell>
              <Table.Cell>Cell {(index * 3) + 3}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
  args: {
    stickyHeader: true, // Enable sticky header
    'data-size': 'md',
  },
  name: 'Sticky Header',
};

// --- With Form Elements ---
export const WithFormElements: Story = {
  render: (args) => (
    <Table {...args}>
       <caption>Table with Form Elements</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Select</Table.HeaderCell>
          <Table.HeaderCell scope="col">Name</Table.HeaderCell>
          <Table.HeaderCell scope="col">Input</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {simpleData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>
              <Checkbox aria-label={`Select row ${row.id}`} />
            </Table.Cell>
            <Table.Cell>{row.col1}</Table.Cell>
            <Table.Cell>
              <Textfield aria-label={`Input for ${row.col1}`} size={10} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
  args: {
    'data-size': 'sm', // Smaller size often better with form elements
  },
  name: 'With Form Elements',
};

// --- Sortable Example ---
export const Sortable: Story = {
  render: (args) => {
    type SortDirection = 'ascending' | 'descending' | 'none';
    type SortKey = keyof typeof sortableData[0] | null | string;

    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection }>({ key: 'name', direction: 'ascending' });

    const sortedData = useMemo(() => {
      let sortableItems = [...sortableData];
      if (sortConfig.key !== null && sortConfig.direction !== 'none') {
        sortableItems.sort((a, b) => {
          const valA = a[sortConfig.key as keyof typeof a];
          const valB = b[sortConfig.key as keyof typeof b];
          if (valA < valB) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (valA > valB) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [sortableData, sortConfig]); // Corrected dependency

    const handleSort = (key: SortKey) => {
      let direction: SortDirection = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
        direction = 'none';
        key = null;
      }
      setSortConfig({ key, direction });
    };

    return (
      <Table {...args}>
        <caption>Sortable Table</caption>
        <Table.Head>
          <Table.Row>
            {/* Use onClick directly on HeaderCell */}
            <Table.HeaderCell
              sort={sortConfig.key === 'name' ? sortConfig.direction : 'none'}
              onClick={() => handleSort('name')}
              scope="col"
              style={{ cursor: 'pointer' }}
            >
              Navn
            </Table.HeaderCell>
            <Table.HeaderCell
              sort={sortConfig.key === 'email' ? sortConfig.direction : 'none'}
              onClick={() => handleSort('email')}
              scope="col"
              style={{ cursor: 'pointer' }}
            >
              Epost
            </Table.HeaderCell>
            <Table.HeaderCell
              sort={sortConfig.key === 'phone' ? sortConfig.direction : 'none'}
              onClick={() => handleSort('phone')}
              scope="col"
              style={{ cursor: 'pointer' }}
            >
              Telefon
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sortedData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.phone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
  args: {
    'data-size': 'md',
    hover: true,
  },
};
