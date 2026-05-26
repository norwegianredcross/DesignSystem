import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { Tag, TagProps } from './index'; 

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
    layout: 'centered', 
  },
  argTypes: {
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
      options: [
        'neutral', 'success', 'warning', 'danger', 'info',
        'brand1', 'brand2', 'brand3', 'accent', 'main'
      ],
      description: 'Change the color scheme of the tag.',
      defaultValue: 'neutral',
    },
    shape: {
      control: 'radio',
      options: ['squared', 'rounded'],
      description: '"rounded" uses --ds-border-radius-xl (12px), matching the Activity-Card style in Figma.',
      defaultValue: 'squared',
    },
  } as ArgTypes<TagProps>,
};

export default meta;

type Story = StoryObj<typeof Tag>;

// --- Basic Example ---
export const Default: Story = {
  args: {
    children: 'Beta',
    'data-color': 'info',
    'data-size': 'md',
  },
};

// --- Size Variants ---
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Tag data-size="sm" data-color={args['data-color']}>sm</Tag>
      <Tag data-size="md" data-color={args['data-color']}>md</Tag>
      <Tag data-size="lg" data-color={args['data-color']}>lg</Tag>
    </div>
  ),
  args: {
    'data-color': 'neutral',
  },
  argTypes: {
    'data-size': { control: false },
    children: { control: false }, 
  },
};

// --- Color Variants ---
export const Colors: Story = {
  render: (args) => (
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
    'data-size': 'md',
  },
  argTypes: {
    'data-color': { control: false },
    children: { control: false }, 
  },
};

// --- Rounded shape (Activity-Card style) ---
export const Rounded: Story = {
  args: {
    children: 'Behov',
    'data-color': 'main',
    shape: 'rounded',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tinted-pink rounded tag used inside the Figma Activity Card (node 231:4732). `shape="rounded"` sets border-radius to `--ds-border-radius-xl` (12px); `data-color="main"` resolves the tinted surface to the red ramp.',
      },
    },
  },
};

// --- Activity-card example: two rounded tags side by side ---
export const ActivityCardTags: Story = {
  name: 'Activity card tags',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Tag shape="rounded" data-color="info">Behov</Tag>
      <Tag shape="rounded" data-color="main">Categori</Tag>
    </div>
  ),
  argTypes: {
    'data-color': { control: false },
    'data-size': { control: false },
    shape: { control: false },
    children: { control: false },
  },
};

// --- With Icon ---
export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Tag data-size={args['data-size']} data-color={args['data-color']}>
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span aria-hidden style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', marginRight: 6 }} />
          <span>Med ikon</span>
        </span>
      </Tag>
    </div>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'accent',
  },
  name: 'With Icon',
};