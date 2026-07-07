import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Heading } from './index';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Semantic heading level (required)',
    },
    'data-size': {
      control: 'select',
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Visual size, independent of semantic level',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 2,
    children: 'En overskrift',
  },
};

export const AllLevels: Story = {
  render: () => (
    <>
      <Heading level={1} data-size="xl">Nivå 1</Heading>
      <Heading level={2} data-size="lg">Nivå 2</Heading>
      <Heading level={3} data-size="md">Nivå 3</Heading>
      <Heading level={4} data-size="sm">Nivå 4</Heading>
      <Heading level={5} data-size="xs">Nivå 5</Heading>
      <Heading level={6} data-size="2xs">Nivå 6</Heading>
    </>
  ),
};

// --- INTERACTION TESTS ---

export const TestSemanticLevel: Story = {
  name: 'Test: Semantic Level',
  args: {
    level: 2,
    'data-size': 'lg',
    children: 'Semantisk overskrift',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The visual size must not change the semantic level
    const heading = canvas.getByRole('heading', { level: 2, name: 'Semantisk overskrift' });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  },
};
