// src/components/Skeleton/Skeleton.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
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

// --- Example 1: Basic Rectangle ---
export const BasicRectangle: Story = {
  name: 'Basic Rectangle',
  args: {
    variant: 'rectangle', // Default, but explicit here
    width: 200, // Numbers default to px
    height: 100,
  },
};

// --- Example 2: Variants Side-by-Side ---
export const Variants: Story = {
  name: 'Variants',
  render: () => (
    // Use args only for potential global controls like data-color/size if needed
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <SkeletonLoader variant="circle" width="50px" height="50px" />
      <SkeletonLoader variant="rectangle" width="100px" height="50px" />
      <Paragraph>
        {/* Use characters prop for width='10' */}
        <SkeletonLoader variant="text" characters={10} />
      </Paragraph>
    </div>
  ),
  // No specific args needed here as variants are hardcoded
};

// --- Example 3: Composed Layout ---
export const ComposedLayout: Story = {
  name: 'Composed Layout',
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      {/* Use args for potential global controls */}
      <SkeletonLoader height="150px" /> {/* Image placeholder */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          padding: '5px 0 5px 0',
        }}
      >
        <SkeletonLoader variant="circle" width="30px" height="30px" />
        {/* Wrap Skeleton in Heading to mimic structure */}
        <Heading level={3} data-size="md"> {/* Adjust level/size as needed */}
          <SkeletonLoader variant="text" width="80%" /> {/* Adjust width */}
        </Heading>
      </div>
      {/* Use characters prop for width='140' */}
      <SkeletonLoader variant="text" characters={140} /> {/* Text line */}
    </div>
  ),
  // No specific args needed here as layout is hardcoded
};

// --- Example 4: Sized by Children ---
export const SizedByChildren: Story = {
  name: 'Sized By Children',
  render: (args) => {
    // --- ONLY CHANGE IS HERE ---
    // Destructure only the props relevant and valid for variant="rectangle"
    // from the args passed to the story.
    const { variant, asChild } = args;

    return (
      // Pass only the explicitly destructured props, avoiding the spread {...args}
      // which caused the type conflict with the 'characters' prop.
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
    // --- END OF CHANGE ---
  },
  // Args like width/height are ignored when children are present
  args: {
    variant: 'rectangle',
    // No 'characters' prop defined here
  },
};

// --- Example 5: Mimicking Text Content ---
export const MimickingText: Story = {
  name: 'Mimicking Text Content',
  render: () => (
    // Use args for potential global controls
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* Actual Content Column */}
      <div style={{ flex: '1 1 200px' }}>
        <Heading level={4}>En tittel</Heading>
        <Paragraph data-size="sm">
          Her er en paragraf som går over flere linjer
        </Paragraph>
      </div>
      {/* Skeleton Column */}
      <div style={{ flex: '1 1 200px' }}>
        {/* Mimic Heading size */}
        <Heading level={4}>
          <SkeletonLoader variant="text" width="60%" />
        </Heading>
        {/* Mimic Paragraph size and lines */}
        <Paragraph data-size="sm">
          {/* Use characters prop for width={40} */}
          <SkeletonLoader variant="text" characters={40} />
        </Paragraph>
      </div>
    </div>
  ),
  // No specific args needed here as layout is hardcoded
};

// --- Text Variant with Characters Prop ---
// (This story remains as it was, potentially needing story-specific argTypes
// if you want the 'characters' control enabled)
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
  // argTypes: { ... } // Story-specific argTypes could be added here
};


// --- Example using asChild with Heading ---
// (This story remains as it was)
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

