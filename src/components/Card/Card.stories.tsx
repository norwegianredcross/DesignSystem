// src/components/Card/Card.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React from 'react';
import { Card, CardProps, CardBlock } from './index';
import { Buttons } from '../Buttons';
import {
  Heading,
  Field,
  Label,
  Select,
  Textfield,
  Paragraph,
  Button,
} from '@digdir/designsystemet-react';
import { TrashFillIcon, PlusIcon } from '@navikt/aksel-icons';
import cat1 from '../../assets/images/person.png'; // Adjust path as needed

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'tinted'],
      description: 'Change the background color of the card.',
      defaultValue: 'default',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'neutral',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element (e.g., <a> or <button>)',
      defaultValue: false,
    },
    children: {
      control: false,
      description: 'Card content (ReactNode)',
    },
  } as ArgTypes<CardProps>,
};

export default meta;

type Story = StoryObj<typeof Card>;

// --- Example Default ---
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardBlock>
        <h3>Card Title</h3>
        <p>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this.
        </p>
      </CardBlock>
      <CardBlock>
        <p>Another block of content.</p>
      </CardBlock>
      <CardBlock>
        <small>Footer text</small>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'neutral',
    variant: 'default',
  },
};

// --- Example Tinted ---
export const Tinted: Story = {
  render: (args) => (
    <Card {...args}>
      <CardBlock>
        <h3>Tinted Card</h3>
        <p>This card uses the tinted variant.</p>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'accent',
    variant: 'tinted',
  },
};

// --- Example with Image ---
export const WithImage: Story = {
    name: 'Example with Image',
    render: (args) => (
      <Card {...args} style={{ maxWidth: '300px' }}>
        <CardBlock>
          <img
            // --- Use a placeholder image URL ---
            src="https://picsum.photos/seed/storybook/300/200" // Example: 300x200 placeholder
            // --- End Change ---
            alt="Random placeholder image" // Update alt text
            style={{ width: '100%', display: 'block', aspectRatio: '3 / 2', objectFit: 'cover' }} // Adjusted aspect ratio
          />
        </CardBlock>
        <CardBlock>
          <h3>Card with Image</h3>
          <p>The image uses an online placeholder.</p>
        </CardBlock>
      </Card>
    ),
    args: {
      'data-color': 'neutral',
    },
  };
  

// --- Example as Link ---
export const AsLink: Story = {
  render: (args) => <Card {...args} style={{ maxWidth: '300px' }} />,
  args: {
    asChild: true,
    children: (
      <a href="https://designsystemet.no/">
        <h3>Link Card</h3>
        <p>This entire card is a link.</p>
      </a>
    ),
    'data-color': 'brand1',
    variant: 'tinted',
  },
};

// --- Example as Button ---
export const AsButton: Story = {
  render: (args) => <Card {...args} style={{ maxWidth: '300px' }} />,
  args: {
    asChild: true,
    children: (
      <button type="button" onClick={() => alert('Card clicked!')}>
        <h3>Button Card</h3>
        <p>This entire card is a button.</p>
      </button>
    ),
    'data-color': 'brand2',
  },
};

// --- Example with Composed Content ---
export const ComposedContent: Story = {
  render: (args) => (
    <Card {...args}>
      <CardBlock>
        <h3>Composed Card</h3>
        <p>This card contains other components.</p>
        <div style={{ marginTop: 'var(--ds-spacing-4, 16px)' }}>
          <Buttons variant="primary" data-size="sm">
            Action
          </Buttons>
        </div>
      </CardBlock>
      <CardBlock>
        <small>Footer with more info</small>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'neutral',
    variant: 'tinted',
  },
};

// --- Example Complex Composition ---
export const ComplexComposition: Story = {
  name: 'Example Complex Composition',
  render: (args) => {
    const options = [
      { value: 'leder', label: 'Daglig leder' },
      { value: 'medlem', label: 'Styremedlem' },
      { value: 'ansatt', label: 'Ansatt' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <Card {...args}>
          <CardBlock>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Heading level={3} data-size="xs">Rolle 1</Heading>
              <Button variant="secondary" data-color="danger" data-size="sm">
                <TrashFillIcon aria-hidden />
                Fjern
              </Button>
            </div>
          </CardBlock>
          <CardBlock>
            <Field>
              <Label htmlFor="rolle-select">Velg rolle</Label>
              <Select id="rolle-select">
                {options.map(({ value, label }, index) => (
                  <Select.Option key={index} value={value}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Field>
            <Textfield label="Fødsels- eller d-nummer" />
            <Textfield label="Etternavn" />
          </CardBlock>
          <CardBlock>
            <Button variant="secondary" data-color="accent" data-size="sm">
              Legg til rolle
              <PlusIcon aria-hidden style={{ marginLeft: '4px' }}/>
            </Button>
          </CardBlock>
        </Card>

        <Card data-color="neutral">
          <CardBlock>
            <img src={cat1} alt="katt" style={{ width: '100%', display: 'block' }}/>
          </CardBlock>
          <CardBlock>
            <Heading level={3} data-size="sm">Card Neutral</Heading>
            <Paragraph>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at supposedly
              about this.
            </Paragraph>
          </CardBlock>
        </Card>
      </div>
    );
  },
  args: {
    'data-color': 'accent',
    'data-size': 'md',
    variant: 'default',
  },
  argTypes: {
     asChild: { control: false },
     children: { control: false },
  }
};
