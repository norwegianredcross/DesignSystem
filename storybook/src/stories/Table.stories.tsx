import React from 'react';
import { Meta, Story } from '@storybook/react';
// Replace with the actual path to your Table component
import { Table } from '@digdir/designsystemet-react';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'striped'], // Ensure these variants exist
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'], // Ensure these sizes exist
    },
  },
} as Meta;

const Template: Story = (args) => (
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

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'md',
};

export const Striped = Template.bind({});
Striped.args = {
  variant: 'striped',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
};
