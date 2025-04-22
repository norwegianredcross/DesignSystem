import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Divider, DividerProps } from './index'; // Import the main Divider component
import { Paragraph, Heading } from '@digdir/designsystemet-react'; // For content examples

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
    // Divider typically doesn't have direct props like data-color/data-size
    // It inherits styling from its context or uses predefined CSS variables.
    // Therefore, no specific argTypes are needed here based on the provided description.
  } as ArgTypes<DividerProps>, // Cast might be needed if DividerProps is complex
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

      <Divider {...args} /> {/* Render the divider */}

      <Heading level={3} data-size="xs">
        Section 2 Title
      </Heading>
      <Paragraph>
        This is the second section, clearly separated from the first by the
        divider line above. It uses predefined CSS variables for styling.
      </Paragraph>

      <Divider {...args} /> {/* Another divider */}

      <Paragraph>More content can follow.</Paragraph>
    </div>
  ),
  args: {
    // Divider usually takes no specific args based on the description
  },
};
