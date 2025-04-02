import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@digdir/designsystemet-react';

type TableProps = React.ComponentProps<typeof Table>;

const meta: Meta<TableProps> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'striped'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<TableProps>;

const Template = (args: TableProps) => (
  <Table {...args}>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell>Header 1</Table.HeaderCell>
        <Table.HeaderCell>Header 2</Table.HeaderCell>
        <Table.HeaderCell>Header 3</Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Row 1, Cell 1 - Sample Text</Table.Cell>
        <Table.Cell>Row 1, Cell 2 - Sample Text</Table.Cell>
        <Table.Cell>Row 1, Cell 3 - Sample Text</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Row 2, Cell 1 - Sample Text</Table.Cell>
        <Table.Cell>Row 2, Cell 2 - Sample Text</Table.Cell>
        <Table.Cell>Row 2, Cell 3 - Sample Text</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const Default: Story = {
  render: Template,
  args: {
    variant: 'default',
    size: 'md',
  },
};

export const Striped: Story = {
  render: Template,
  args: {
    variant: 'striped',
    size: 'md',
  },
};

export const Small: Story = {
  render: Template,
  args: {
    variant: 'default',
    size: 'sm',
  },
};

export const Large: Story = {
  render: Template,
  args: {
    variant: 'default',
    size: 'lg',
  },
};
