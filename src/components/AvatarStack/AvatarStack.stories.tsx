import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Avatar } from '../Avatar';
import { EXPERIMENTAL_AvatarStack } from './index';

const meta = {
  title: 'Experimental/AvatarStack',
  component: EXPERIMENTAL_AvatarStack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Experimental Digdir component. The API may change. Use list items, meaningful names, and a short list plus a count. Essential names must also be available outside a tooltip.',
      },
    },
  },
  argTypes: {
    expandable: {
      description: 'Expand the stack on hover or focus. Fixed keeps the stack width unchanged.',
      control: 'select',
      options: [undefined, true, false, 'fixed'],
    },
    'aria-label': {
      description: 'Accessible name for the list of people.',
      control: 'text',
    },
  },
  args: { 'aria-label': 'Deltakere' },
  render: (args) => (
    <EXPERIMENTAL_AvatarStack {...args}>
      <li>
        <Avatar aria-label="Ola Nordmann">ON</Avatar>
      </li>
      <li>
        <Avatar aria-label="Kari Hansen">KH</Avatar>
      </li>
      <li>
        <Avatar aria-label="Per Olsen">PO</Avatar>
      </li>
      <li>+5 deltakere</li>
    </EXPERIMENTAL_AvatarStack>
  ),
} satisfies Meta<typeof EXPERIMENTAL_AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const list = within(canvasElement).getByRole('list', { name: 'Deltakere' });
    await expect(within(list).getAllByRole('listitem')).toHaveLength(4);
    await expect(within(list).getByRole('img', { name: 'Ola Nordmann' })).toBeVisible();
  },
};

export const Expandable: Story = { args: { expandable: true } };

export const LinkedAvatars: Story = {
  render: (args) => (
    <EXPERIMENTAL_AvatarStack {...args}>
      <li>
        <Avatar asChild aria-label="Ola Nordmann">
          <a href="#ola">ON</a>
        </Avatar>
      </li>
      <li>
        <Avatar asChild aria-label="Kari Hansen">
          <a href="#kari">KH</a>
        </Avatar>
      </li>
    </EXPERIMENTAL_AvatarStack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole('link', { name: 'Ola Nordmann' });
    first.focus();
    await userEvent.tab();
    await expect(canvas.getByRole('link', { name: 'Kari Hansen' })).toHaveFocus();
  },
};
