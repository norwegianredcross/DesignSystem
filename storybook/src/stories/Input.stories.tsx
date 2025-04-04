import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@digdir/designsystemet-react';

type InputProps = React.ComponentProps<typeof Input>;

const meta: Meta<InputProps> = {
  title: 'Komponenter/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};