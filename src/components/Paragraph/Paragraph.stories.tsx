import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Paragraph } from './index';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    'data-size': {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Text size',
    },
    variant: {
      control: 'select',
      options: ['default', 'long'],
      description: 'Variant tuned for short or long-form text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'Røde Kors hjelper mennesker i sårbare livssituasjoner — lokalt, nasjonalt og internasjonalt.',
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Paragraph data-size="xs">Ekstra liten tekst</Paragraph>
      <Paragraph data-size="sm">Liten tekst</Paragraph>
      <Paragraph data-size="md">Medium tekst</Paragraph>
      <Paragraph data-size="lg">Stor tekst</Paragraph>
    </>
  ),
};

// --- INTERACTION TESTS ---

export const TestRendersText: Story = {
  name: 'Test: Renders Text',
  args: {
    children: 'Avsnittstekst',
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const paragraph = canvas.getByText('Avsnittstekst');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  },
};
