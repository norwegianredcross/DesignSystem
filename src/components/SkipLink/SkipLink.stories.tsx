// src/components/SkipLink/SkipLink.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { SkipLink, SkipLinkProps } from './index'; 

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
    notes: 'To see the SkipLink, click inside the Story canvas and press the Tab key.',
    layout: 'padded',
  },
  argTypes: {

    children: {
      control: 'text',
      description: 'The content to display inside the skiplink.',
      defaultValue: 'Hopp til hovedinnhold',
    },
    href: {
      control: 'text',
      description: 'Href of the element ID to skip to (e.g., #main-content).',
      defaultValue: '#main-content-story', 
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

// --- Basic Example ---
export const Default: Story = {
  render: (args) => (
    <>
      <SkipLink {...args} />
      <main
        id={args.href?.substring(1)} 
        tabIndex={-1} 
        style={{
          padding: '2rem',
          marginTop: '1rem', 
          border: '1px dashed #ccc', 
          outline: 'none', 
        }}
      >
        Region som kan motta fokus fra skiplink. (ID: {args.href})
        <br />
        (Click here and press Tab to see the SkipLink)
      </main>
    </>
  ),
  args: {

    children: 'Hopp til hovedinnhold',
    href: '#main-content-story', 
    'data-size': 'md',
    'data-color': 'accent',
  },
};
