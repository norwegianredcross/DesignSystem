// src/components/SkipLink/SkipLink.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { SkipLink, SkipLinkProps } from './index'; // Import the main SkipLink component

const meta: Meta<typeof SkipLink> = {
  title: 'Components/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SkipLink allows keyboard users to bypass navigation and jump directly to the main content.',
      },
    },
    // Add a note about how to view the SkipLink
    notes: 'To see the SkipLink, click inside the Story canvas and press the Tab key.',
    // Use padded layout to give some space around the elements
    layout: 'padded',
  },
  argTypes: {
    // Props directly available on DigDirSkipLinkProps
    children: {
      control: 'text',
      description: 'The content to display inside the skiplink.',
      defaultValue: 'Hopp til hovedinnhold',
    },
    href: {
      control: 'text',
      description: 'Href of the element ID to skip to (e.g., #main-content).',
      defaultValue: '#main-content-story', // Use a unique ID for the story
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'neutral',
    },
  } as ArgTypes<SkipLinkProps>,
};

export default meta;

type Story = StoryObj<typeof SkipLink>;

// --- Basic Example (Matching Docs) ---
export const Default: Story = {
  render: (args) => (
    <>
      {/* Render the SkipLink using args */}
      <SkipLink {...args} />

      {/* Render the target main element */}
      <main
        id={args.href?.substring(1)} // Extract ID from href arg
        tabIndex={-1} // Make the target focusable programmatically
        style={{
          padding: '2rem',
          marginTop: '1rem', // Add some space below potential SkipLink position
          border: '1px dashed #ccc', // Visual indicator for the target area
          outline: 'none', // Remove default focus outline on main
        }}
      >
        Region som kan motta fokus fra skiplink. (ID: {args.href})
        <br />
        (Click here and press Tab to see the SkipLink)
      </main>
    </>
  ),
  args: {
    // Default args matching the example
    children: 'Hopp til hovedinnhold',
    href: '#main-content-story', // Use the default href from argTypes
    'data-size': 'md',
    'data-color': 'accent',
  },
};
