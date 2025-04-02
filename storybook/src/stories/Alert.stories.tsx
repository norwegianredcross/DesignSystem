import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@digdir/designsystemet-react';

type AlertProps = React.ComponentProps<typeof Alert>;

const meta: Meta<AlertProps> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    children: 'This is an alert message.',
    'data-color': 'info',
  },
  argTypes: {
    'data-color': {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<AlertProps>;

export const Info: Story = {
  args: {
    'data-color': 'info',
  },
};

export const Success: Story = {
  args: {
    'data-color': 'success',
  },
};

export const Warning: Story = {
  args: {
    'data-color': 'warning',
  },
};

export const Danger: Story = {
  args: {
    'data-color': 'danger',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'Dette er en veldig lang melding som går over flere linjer for å vise hvordan Alert håndterer lange tekster.',
    'data-color': 'info',
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <>
        Dette er en melding med handlinger.{' '}
        <a href="#" style={{ textDecoration: 'underline' }}>
          Les mer
        </a>
      </>
    ),
    'data-color': 'info',
  },
};
