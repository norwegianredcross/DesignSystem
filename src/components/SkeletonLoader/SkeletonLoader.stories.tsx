// src/components/Skeleton/Skeleton.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { SkeletonLoader, SkeletonProps } from './index'; // Import the main Skeleton component
// Import components for context/examples
import { Heading, Paragraph, Button } from '@digdir/designsystemet-react';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Components/Skeleton',
  component: SkeletonLoader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Skeleton indicates loading content, mimicking the shape of the content.',
      },
    },
  },
  argTypes: {
    // Props directly available on DigDirSkeletonProps
    width: {
      control: 'text',
      description: 'The width of the component (e.g., "100px", "50%", 200)',
    },
    height: {
      control: 'text',
      description: 'The height of the component (e.g., "100px", "2em", 100)',
    },
    variant: {
      control: 'select',
      options: ['rectangle', 'circle', 'text'],
      description: 'The shape variant',
      defaultValue: 'rectangle',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    characters: {
      control: 'number',
      description: 'Sets width based on character count (for text variant)',
      if: { arg: 'variant', eq: 'text' },
    },
    children: {
      control: false,
      description: 'Optional children for sizing or composition',
    },
  } as ArgTypes<SkeletonProps>,
};

export default meta;

type Story = StoryObj<typeof SkeletonLoader>;

// --- Basic Rectangle ---
export const BasicRectangle: Story = {
  name: 'Basic Rectangle',
  args: {
    variant: 'rectangle',
    width: 200,
    height: 100,
  },
};

// --- Variants Side-by-Side ---
export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <SkeletonLoader variant="circle" width="50px" height="50px" />
      <SkeletonLoader variant="rectangle" width="100px" height="50px" />
      <Paragraph>
        <SkeletonLoader variant="text" characters={10} />
      </Paragraph>
    </div>
  ),
};

// --- Composed Layout ---
export const ComposedLayout: Story = {
  name: 'Composed Layout',
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <SkeletonLoader height="150px" /> 
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          padding: '5px 0 5px 0',
        }}
      >
        <SkeletonLoader variant="circle" width="30px" height="30px" />
        <Heading level={3} data-size="md"> 
          <SkeletonLoader variant="text" width="80%" /> 
        </Heading>
      </div>
      <SkeletonLoader variant="text" characters={140} /> 
    </div>
  ),
};

// --- Example 4: Sized by Children ---
export const SizedByChildren: Story = {
  name: 'Sized By Children',
  render: (args) => {
    const { variant, asChild } = args;

    return (
      <SkeletonLoader variant={variant} asChild={asChild}>
        {/* Content inside determines size */}
        <Paragraph>
          Her er en tekst som blir sendt inn som barn av en Skeleton.
        </Paragraph>
        <Paragraph>
          Se hvordan Skeleton da dekker den samlede bredden og høyden til barna.
        </Paragraph>
        <Button>Knapp</Button>
      </SkeletonLoader>
    );
  },

  args: {
    variant: 'rectangle',
  },
};

// --- Mimicking Text Content ---
export const MimickingText: Story = {
  name: 'Mimicking Text Content',
  render: () => (
    
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: '1 1 200px' }}>
        <Heading level={4}>En tittel</Heading>
        <Paragraph data-size="sm">
          Her er en paragraf som går over flere linjer
        </Paragraph>
      </div>
      <div style={{ flex: '1 1 200px' }}>
        {/* Mimic Heading size */}
        <Heading level={4}>
          <SkeletonLoader variant="text" width="60%" />
        </Heading>
        <Paragraph data-size="sm">
          <SkeletonLoader variant="text" characters={40} />
        </Paragraph>
      </div>
    </div>
  ),
};

// --- Text Variant with Characters Prop ---
export const TextWithCharacters: Story = {
  name: 'Text (Characters Prop)',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Paragraph>Mimicking text lines using `characters` prop:</Paragraph>
      <SkeletonLoader {...args} variant="text" characters={args.characters || 20} />
      <SkeletonLoader {...args} variant="text" characters={args.characters ? args.characters + 15 : 35} />
      <SkeletonLoader {...args} variant="text" characters={args.characters ? args.characters + 10 : 30} />
    </div>
  ),
  args: {
    variant: 'text',
    characters: 25,
  },
};


// --- Example using asChild with Heading ---
export const AsChildHeading: Story = {
 render: (args) => (
    <SkeletonLoader {...args}>
      <Heading level={2} data-size="lg">Placeholder Heading</Heading>
    </SkeletonLoader>
  ),
  args: {
    asChild: true,
  },
  name: 'As Child (Heading)',
};

