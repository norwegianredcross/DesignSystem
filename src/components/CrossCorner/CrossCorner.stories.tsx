import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { CrossCorner, CrossCornerProps } from './index';

const meta: Meta<typeof CrossCorner> = {
  title: 'Components/CrossCorner',
  component: CrossCorner,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Which corner the graphic points to.',
      table: {
        defaultValue: { summary: 'top-left' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the graphic. sm: 48px, md: 68px, lg: 96px.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Color variant using design system tokens.',
      table: {
        defaultValue: { summary: 'accent (Røde Kors red)' },
      },
    },
    'aria-hidden': {
      control: 'boolean',
      description: 'Whether the graphic is hidden from assistive technologies.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the graphic (if not purely decorative).',
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name.',
    },
  } as ArgTypes<CrossCornerProps>,
  parameters: {
    docs: {
      description: {
        component:
          'Decorative L-shaped brand graphic element used as a visual accent across Røde Kors web projects. The shape forms part of the cross pattern and can be positioned in any corner orientation.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CrossCorner>;

// --- Default ---
export const Default: Story = {
  name: 'Default',
  args: {
    position: 'top-left',
    size: 'md',
  },
};

// --- All Positions ---
export const AllPositions: Story = {
  name: 'All Positions',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner position="top-left" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>top-left</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner position="top-right" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>top-right</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner position="bottom-right" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>bottom-right</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner position="bottom-left" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>bottom-left</p>
      </div>
    </div>
  ),
};

// --- All Sizes ---
export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner size="sm" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>sm (48px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner size="md" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>md (68px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner size="lg" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>lg (96px)</p>
      </div>
    </div>
  ),
};

// --- Color Variants ---
export const ColorVariants: Story = {
  name: 'Color Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner data-color="accent" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>accent</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner data-color="brand1" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>brand1</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner data-color="brand2" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>brand2</p>
      </div>
      <div style={{ textAlign: 'center', backgroundColor: '#1E2B3C', padding: '16px', borderRadius: '8px' }}>
        <CrossCorner data-color="brand3" />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#fff' }}>brand3</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CrossCorner data-color="neutral" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>neutral</p>
      </div>
    </div>
  ),
};

// --- Usage Example: Corner Accents ---
export const CornerAccents: Story = {
  name: 'Usage: Corner Accents',
  render: () => (
    <div
      style={{
        position: 'relative',
        width: '400px',
        height: '250px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <CrossCorner position="top-left" size="sm" />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <CrossCorner position="top-right" size="sm" />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
        <CrossCorner position="bottom-left" size="sm" />
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <CrossCorner position="bottom-right" size="sm" />
      </div>
      <p style={{ color: '#666' }}>Content with corner accents</p>
    </div>
  ),
};

// --- Small Size ---
export const Small: Story = {
  name: 'Size: Small',
  args: {
    size: 'sm',
  },
};

// --- Large Size ---
export const Large: Story = {
  name: 'Size: Large',
  args: {
    size: 'lg',
  },
};

// --- Top Right Position ---
export const TopRight: Story = {
  name: 'Position: Top Right',
  args: {
    position: 'top-right',
  },
};

// --- Bottom Left Position ---
export const BottomLeft: Story = {
  name: 'Position: Bottom Left',
  args: {
    position: 'bottom-left',
  },
};

// --- Bottom Right Position ---
export const BottomRight: Story = {
  name: 'Position: Bottom Right',
  args: {
    position: 'bottom-right',
  },
};
