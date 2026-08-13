import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Divider, DividerProps } from './index'; 
import { Paragraph, Heading } from '@digdir/designsystemet-react'; 

// 1. Lag en ny type som inkluderer data-attributtene
type ExtendedDividerProps = DividerProps & {
  'data-size'?: 'sm' | 'md' | 'lg';
  'data-color'?: 'primary-color-red' | 'secondary-color-orange' | 'secondary-color-rust' | 'secondary-color-pink' | 'additional-color-ocean' | 'additional-color-jungle' | 'neutral';
};

// 2. Bruk den nye typen i Meta
const meta: Meta<ExtendedDividerProps> = {
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
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size of the divider',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['primary-color-red', 'secondary-color-orange', 'secondary-color-rust', 'secondary-color-pink', 'additional-color-ocean', 'additional-color-jungle', 'neutral'],
      description: 'Changes the color of the divider',
      defaultValue: 'neutral',
    },
  } as ArgTypes<ExtendedDividerProps>, // 3. Bruk den nye typen her
};

export default meta;

// 4. Bruk den nye typen for Story
type Story = StoryObj<ExtendedDividerProps>;

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
    'data-color': 'neutral',
    'data-size': 'md',
  },
};

// --- Colored Example ---
export const Colored: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <Paragraph>Dette er en "secondary-color-rust" skillelinje.</Paragraph>
        <Divider {...args} />
      </div>
      <div>
        <Paragraph>Dette er en "additional-color-ocean" skillelinje.</Paragraph>
        <Divider
          {...args}
          data-color="additional-color-ocean"
        />
      </div>
      <div>
        <Paragraph>Dette er en "lg" skillelinje.</Paragraph>
        <Divider
          {...args}
          data-color={args['data-color']} 
          data-size="lg"
        />
      </div>
    </div>
  ),
  args: {
    'data-color': 'secondary-color-rust', 
    'data-size': 'md',
  },
};

export const TestStaticContract: Story = {
  name: 'Test: Static Contract',
  tags: ['!autodocs'],
  render: (args) => <Divider {...args} />,
  args: {
    'data-color': 'secondary-color-rust',
    'data-size': 'lg',
  },
  play: async ({ canvasElement }) => {
    const divider = canvasElement.querySelector('hr');

    await expect(divider).toBeInTheDocument();
    await expect(divider).toHaveClass('ds-divider');
    await expect(divider).toHaveAttribute('aria-hidden', 'true');
    await expect(divider).toHaveAttribute('data-color', 'secondary-color-rust');
    await expect(divider).toHaveAttribute('data-size', 'lg');
  },
};
