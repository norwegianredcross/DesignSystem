import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Divider, DividerProps } from './index'; 
import { Paragraph, Heading } from '@digdir/designsystemet-react'; 

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Divider is used to create a visual separation between content. It renders a simple horizontal line.',
      },
    },
  },
  argTypes: {
  } as ArgTypes<DividerProps>, 
};

export default meta;

type Story = StoryObj<typeof Divider>;

// --- Basic Example ---
export const Default: Story = {
  render: (args) => (
    <div>
      <Heading level={3} data-size="xs">
        Section 1 Title
      </Heading>
      <Paragraph>
        This is the first section of content. Dividers help visually separate
        distinct blocks of information, improving readability and structure.
      </Paragraph>

      <Divider {...args} /> 

      <Heading level={3} data-size="xs">
        Section 2 Title
      </Heading>
      <Paragraph>
        This is the second section, clearly separated from the first by the
        divider line above. It uses predefined CSS variables for styling.
      </Paragraph>

      <Divider {...args} /> 

      <Paragraph>More content can follow.</Paragraph>
    </div>
  ),
  args: {
  },
};
