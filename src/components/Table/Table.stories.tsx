// src/components/Table/Table.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { useState, useMemo } from 'react'; // Import useState and useMemo for sorting example
import { expect, within, userEvent } from 'storybook/test';
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
    layout: 'padded', 
  },
  argTypes: {
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
    children: { control: false },
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
  parameters: { a11y: { test: 'todo' } }, // scrollable-region-focusable: scroll container needs keyboard access
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
      const sortableItems = [...sortableData];
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

// --- Fixed Layout Example ---
export const FixedTable: Story = {
  render: (args) => (
    <div style={{ overflowX: 'auto' }}>
      <Table {...args} style={{ tableLayout: 'fixed', width: 600 }}>
        <caption>Fixed Layout Table</caption>
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
      </Table>
    </div>
  ),
  args: {
    'data-size': 'md',
  },
  name: 'Fixed Layout',
};

// --- With Border Example ---
export const WithBorder: Story = {
  render: (args) => (
    <Table {...args}>
      <caption>Table with Border</caption>
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
    </Table>
  ),
  args: {
    border: true,
    'data-size': 'md',
  },
  name: 'With Border',
};

// --- Numbers Right-Aligned Example ---
export const Numbers: Story = {
  render: (args) => (
    <Table {...args}>
      <caption>Numeric Alignment</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Produkt</Table.HeaderCell>
          <Table.HeaderCell scope="col" style={{ textAlign: 'right' }}>Antall</Table.HeaderCell>
          <Table.HeaderCell scope="col" style={{ textAlign: 'right' }}>Sum</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Epler</Table.Cell>
          <Table.Cell style={{ textAlign: 'right' }}>12</Table.Cell>
          <Table.Cell style={{ textAlign: 'right' }}>120,00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bananer</Table.Cell>
          <Table.Cell style={{ textAlign: 'right' }}>3</Table.Cell>
          <Table.Cell style={{ textAlign: 'right' }}>42,00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
  args: {
    'data-size': 'md',
  },
};

// --- INTERACTION TESTS ---

const testActivityData = [
  { id: 1, aktivitet: 'Leksehjelp', by: 'Oslo', frivillige: 12 },
  { id: 2, aktivitet: 'Besøkstjeneste', by: 'Tromsø', frivillige: 24 },
  { id: 3, aktivitet: 'Hjelpekorps', by: 'Bergen', frivillige: 31 },
];

/**
 * Tests sortable headers: clicking a sortable column header toggles aria-sort
 * between ascending and descending and actually reorders the rows. Switching
 * to another sortable column resets the first one, the non-sortable column is
 * unaffected, and sorting is keyboard-operable via the header button.
 */
export const TestSortableColumns: Story = {
  name: 'Test: Sortable Columns',
  render: (args) => {
    type SortKey = 'aktivitet' | 'frivillige';
    type SortDirection = 'ascending' | 'descending';
    const [sortConfig, setSortConfig] = useState<{
      key: SortKey;
      direction: SortDirection;
    } | null>(null);

    const handleSort = (key: SortKey) =>
      setSortConfig((prev) =>
        prev && prev.key === key
          ? {
              key,
              direction:
                prev.direction === 'ascending' ? 'descending' : 'ascending',
            }
          : { key, direction: 'ascending' },
      );

    const sortedData = [...testActivityData];
    if (sortConfig) {
      sortedData.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];
        const compared =
          typeof valA === 'number' && typeof valB === 'number'
            ? valA - valB
            : String(valA).localeCompare(String(valB), 'no');
        return sortConfig.direction === 'ascending' ? compared : -compared;
      });
    }

    return (
      <Table {...args}>
        <caption>Aktiviteter i Røde Kors</caption>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell
              scope="col"
              sort={
                sortConfig?.key === 'aktivitet' ? sortConfig.direction : 'none'
              }
              onClick={() => handleSort('aktivitet')}
            >
              Aktivitet
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">By</Table.HeaderCell>
            <Table.HeaderCell
              scope="col"
              sort={
                sortConfig?.key === 'frivillige' ? sortConfig.direction : 'none'
              }
              onClick={() => handleSort('frivillige')}
            >
              Frivillige
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sortedData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.aktivitet}</Table.Cell>
              <Table.Cell>{row.by}</Table.Cell>
              <Table.Cell>{row.frivillige}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('table', { name: 'Aktiviteter i Røde Kors' });

    const activityHeader = within(table).getByRole('columnheader', {
      name: 'Aktivitet',
    });
    const cityHeader = within(table).getByRole('columnheader', { name: 'By' });
    const volunteersHeader = within(table).getByRole('columnheader', {
      name: 'Frivillige',
    });

    const getBodyRows = () => {
      const [, tbody] = within(table).getAllByRole('rowgroup');
      return within(tbody).getAllByRole('row');
    };
    const firstRowText = (cellIndex: number) =>
      within(getBodyRows()[0]).getAllByRole('cell')[cellIndex].textContent;

    // Initial state: sortable columns expose aria-sort="none", the
    // non-sortable column has no aria-sort and no sort button
    expect(activityHeader).toHaveAttribute('aria-sort', 'none');
    expect(volunteersHeader).toHaveAttribute('aria-sort', 'none');
    expect(cityHeader).not.toHaveAttribute('aria-sort');
    expect(within(cityHeader).queryByRole('button')).not.toBeInTheDocument();

    // Unsorted: rows in data order
    expect(firstRowText(0)).toBe('Leksehjelp');

    // Click "Aktivitet" -> ascending, rows reorder alphabetically
    await userEvent.click(within(activityHeader).getByRole('button'));
    expect(activityHeader).toHaveAttribute('aria-sort', 'ascending');
    expect(firstRowText(0)).toBe('Besøkstjeneste');

    // Click again -> descending, first row changes
    await userEvent.click(within(activityHeader).getByRole('button'));
    expect(activityHeader).toHaveAttribute('aria-sort', 'descending');
    expect(firstRowText(0)).toBe('Leksehjelp');

    // The non-sortable column is unaffected by sorting
    expect(cityHeader).not.toHaveAttribute('aria-sort');

    // Click "Frivillige" -> numeric ascending sort, "Aktivitet" resets
    await userEvent.click(within(volunteersHeader).getByRole('button'));
    expect(volunteersHeader).toHaveAttribute('aria-sort', 'ascending');
    expect(activityHeader).toHaveAttribute('aria-sort', 'none');
    expect(firstRowText(2)).toBe('12');

    // Keyboard: Enter on the focused header button toggles to descending
    within(volunteersHeader).getByRole('button').focus();
    await userEvent.keyboard('{Enter}');
    expect(volunteersHeader).toHaveAttribute('aria-sort', 'descending');
    expect(firstRowText(2)).toBe('31');
    expect(firstRowText(0)).toBe('Hjelpekorps');
  },
};

/**
 * Tests structural table semantics: the caption names the table, header cells
 * are exposed as columnheaders with scope="col", head/body/foot are rowgroups,
 * and rows/cells are exposed with the expected roles and content.
 */
export const TestTableSemantics: Story = {
  name: 'Test: Table Semantics',
  render: (args) => (
    <Table {...args}>
      <caption>Medlemsoversikt</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
          <Table.HeaderCell scope="col">Lokalforening</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Kari Nordmann</Table.Cell>
          <Table.Cell>Oslo Røde Kors</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ola Nordmann</Table.Cell>
          <Table.Cell>Bergen Røde Kors</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>Totalt</Table.Cell>
          <Table.Cell>2 medlemmer</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  ),
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Caption gives the table its accessible name
    const table = canvas.getByRole('table', { name: 'Medlemsoversikt' });

    // thead, tbody and tfoot are all exposed as rowgroups
    const rowGroups = within(table).getAllByRole('rowgroup');
    expect(rowGroups).toHaveLength(3);

    // Column headers with scope="col"
    const headers = within(table).getAllByRole('columnheader');
    expect(headers).toHaveLength(2);
    for (const header of headers) {
      expect(header).toHaveAttribute('scope', 'col');
    }

    // 1 header row + 2 body rows + 1 footer row
    expect(within(table).getAllByRole('row')).toHaveLength(4);

    // Body cells are exposed as cells with their content
    expect(
      within(table).getByRole('cell', { name: 'Kari Nordmann' }),
    ).toBeInTheDocument();
    expect(
      within(table).getByRole('cell', { name: 'Bergen Røde Kors' }),
    ).toBeInTheDocument();
  },
};