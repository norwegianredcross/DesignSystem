import type { Meta, StoryObj } from '@storybook/react-vite';
import { createRef } from 'react';
import { Paragraph as DigdirParagraph } from '@digdir/designsystemet-react';
import { expect, within } from 'storybook/test';
import { Paragraph } from './index';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Avsnitt fra Digdir med valgfri skriftvekt og kursiv. Vekt og kursiv kan kombineres med alle størrelser og tekstvarianter. Kursiv er visuell styling; bruk em eller strong når teksten skal ha semantisk betoning. Krever bibliotekets vanlige stilimport, men ikke JavaScript.',
      },
    },
  },
  argTypes: {
    weight: { control: 'select', options: ['regular', 'medium', 'bold'] },
    italic: { control: 'boolean' },
    'data-size': {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Text size',
    },
    variant: {
      control: 'select',
      options: ['default', 'short', 'long'],
      description: 'Variant tuned for short or long-form text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children:
      'Røde Kors hjelper mennesker i sårbare livssituasjoner — lokalt, nasjonalt og internasjonalt.',
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Paragraph data-size="xs">Ekstra liten tekst</Paragraph>
      <Paragraph data-size="sm">Liten tekst</Paragraph>
      <Paragraph data-size="md">Medium tekst</Paragraph>
      <Paragraph data-size="lg">Stor tekst</Paragraph>
      <Paragraph data-size="xl">Ekstra stor tekst</Paragraph>
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

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const variants = ['default', 'short', 'long'] as const;
const weights = { regular: '400', medium: '500', bold: '700' } as const;

export const WeightAndItalic: Story = {
  args: { children: 'Røde Kors er til stede når det trengs.', weight: 'bold', italic: true },
};

export const TestTypographyCombinations: Story = {
  name: 'Test: All Sizes, Variants, Weights and Italic',
  render: () => (
    <>
      {sizes.flatMap((size) =>
        variants.flatMap((variant) =>
          Object.keys(weights).flatMap((weight) =>
            [false, true].map((italic) => (
              <Paragraph
                key={`${size}-${variant}-${weight}-${italic}`}
                data-size={size}
                variant={variant}
                weight={weight as keyof typeof weights}
                italic={italic}
              >
                {`${size}-${variant}-${weight}-${italic}`}
              </Paragraph>
            ))
          )
        )
      )}
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const size of sizes)
      for (const variant of variants) {
        for (const weight of Object.keys(weights) as (keyof typeof weights)[])
          for (const italic of [false, true]) {
            const paragraph = canvas.getByText(`${size}-${variant}-${weight}-${italic}`);
            expect(getComputedStyle(paragraph).fontWeight).toBe(weights[weight]);
            expect(getComputedStyle(paragraph).fontStyle).toBe(italic ? 'italic' : 'normal');
            expect(paragraph).not.toHaveAttribute('weight');
            expect(paragraph).not.toHaveAttribute('italic');
          }
      }
  },
};

const paragraphRef = createRef<HTMLParagraphElement>();
export const TestUpstreamCompatibility: Story = {
  name: 'Test: Defaults, Ref and Child Composition',
  render: () => (
    <>
      {sizes.map((size) => (
        <div key={size}>
          <Paragraph data-size={size}>RK {size}</Paragraph>
          <DigdirParagraph data-size={size}>Digdir {size}</DigdirParagraph>
        </div>
      ))}
      <Paragraph asChild ref={paragraphRef} weight="medium" italic className="consumer-paragraph">
        <p id="composed-paragraph">Sammensatt avsnitt</p>
      </Paragraph>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const size of sizes) {
      const actual = getComputedStyle(canvas.getByText(`RK ${size}`));
      const upstream = getComputedStyle(canvas.getByText(`Digdir ${size}`));
      for (const property of ['fontWeight', 'fontStyle', 'fontSize', 'lineHeight'] as const) {
        expect(actual[property]).toBe(upstream[property]);
      }
    }
    const composed = canvas.getByText('Sammensatt avsnitt');
    expect(paragraphRef.current).toBe(composed);
    expect(composed).toHaveClass('consumer-paragraph', 'ds-paragraph');
    expect(composed).toHaveAttribute('id', 'composed-paragraph');
    expect(getComputedStyle(composed).fontWeight).toBe('500');
    expect(getComputedStyle(composed).fontStyle).toBe('italic');
  },
};
