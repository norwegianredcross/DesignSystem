import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@digdir/designsystemet-react';

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    children: 'Check me',
    checked: false,
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'checked state changed' },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

const InteractiveTemplate = (args: CheckboxProps) => {
  return (
    <Checkbox
      {...args}
      onChange={(e) => args.onChange?.(e.target.checked)}
    >
      {args.children}
    </Checkbox>
  );
};

export const Default: Story = {
  render: InteractiveTemplate,
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  render: InteractiveTemplate,
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLongLabel: Story = {
  render: InteractiveTemplate,
  args: {
    children: 'Dette er en veldig lang etikett for å teste hvordan Checkbox håndterer lange tekster.',
  },
};
