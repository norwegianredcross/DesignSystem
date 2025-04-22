import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Tag, TagProps } from './index'; // Import the main Tag component

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tags are static labels used to categorize elements or communicate status, progress, or process.',
      },
    },
    layout: 'centered', // Center tags for better viewing
  },
  argTypes: {
    // Props directly available on DigDirTagProps
    children: {
      control: 'text',
      description: 'The text content of the tag.',
      defaultValue: 'New',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: [ // Based on the color examples provided
        'neutral', 'success', 'warning', 'danger', 'info',
        'brand1', 'brand2', 'brand3', 'accent' // Added accent as it's usually available
      ],
      description: 'Change the color scheme of the tag.',
      defaultValue: 'neutral', // Defaulting to neutral
    },
  } as ArgTypes<TagProps>,
};

export default meta;

type Story = StoryObj<typeof Tag>;

// --- Basic Example ---
export const Default: Story = {
  args: {
    children: 'Beta',
    'data-color': 'info', // Example color
    'data-size': 'md',
  },
};

// --- Size Variants ---
export const Sizes: Story = {
  render: (args) => (
    // Use args only for potential global controls like data-color if needed
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Tag data-size="sm" data-color={args['data-color']}>sm</Tag>
      <Tag data-size="md" data-color={args['data-color']}>md</Tag>
      <Tag data-size="lg" data-color={args['data-color']}>lg</Tag>
    </div>
  ),
  args: {
    // Pass color from controls, default children are overridden
    'data-color': 'neutral',
  },
  // Disable size control for this specific story as it shows all sizes
  argTypes: {
    'data-size': { control: false },
    children: { control: false }, // Disable children control for this layout story
  },
};

// --- Color Variants ---
export const Colors: Story = {
  render: (args) => (
    // Use args only for potential global controls like data-size if needed
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag data-color="neutral" data-size={args['data-size']}>neutral</Tag>
      <Tag data-color="success" data-size={args['data-size']}>success</Tag>
      <Tag data-color="warning" data-size={args['data-size']}>warning</Tag>
      <Tag data-color="danger" data-size={args['data-size']}>danger</Tag>
      <Tag data-color="info" data-size={args['data-size']}>info</Tag>
      <Tag data-color="brand1" data-size={args['data-size']}>brand1</Tag>
      <Tag data-color="brand2" data-size={args['data-size']}>brand2</Tag>
      <Tag data-color="brand3" data-size={args['data-size']}>brand3</Tag>
      <Tag data-color="accent" data-size={args['data-size']}>accent</Tag>
    </div>
  ),
  args: {
    // Pass size from controls, default children are overridden
    'data-size': 'md',
  },
  // Disable color control for this specific story as it shows multiple colors
  argTypes: {
    'data-color': { control: false },
    children: { control: false }, // Disable children control for this layout story
  },
};
