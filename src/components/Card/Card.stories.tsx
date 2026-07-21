// src/components/Card/Card.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { Card, CardProps, CardBlock } from './index';
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
          <Button variant="primary" data-size="sm">
            Action
          </Button>
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

// --- INTERACTION TESTS ---

/**
 * Tests the clickable card rendered as a button via asChild: the card element
 * IS the button (role button, ds-card styling), it is reachable with Tab, and
 * Enter, Space and mouse click all fire the click handler.
 */
export const TestCardAsButton: Story = {
  name: 'Test: Card As Button Keyboard Operable',
  render: (args) => (
    <Card {...args} style={{ maxWidth: '320px' }}>
      <button type="button">
        <h3>Meld deg som frivillig</h3>
        <p>Bli med på en aktivitet i din lokalforening.</p>
      </button>
    </Card>
  ),
  args: {
    asChild: true,
    'data-color': 'brand2',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // asChild merges the Card onto the button: one element with both roles
    const cardButton = canvas.getByRole('button', {
      name: /Meld deg som frivillig/,
    });
    expect(cardButton).toHaveClass('ds-card');
    expect(cardButton.tagName).toBe('BUTTON');

    // Keyboard-reachable via Tab
    await userEvent.tab();
    expect(cardButton).toHaveFocus();

    // Enter and Space activate the card
    await userEvent.keyboard('{Enter}');
    expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.keyboard(' ');
    expect(args.onClick).toHaveBeenCalledTimes(2);

    // Mouse click works too
    await userEvent.click(cardButton);
    expect(args.onClick).toHaveBeenCalledTimes(3);
  },
};

/**
 * Tests the click-delegation behavior for cards with a heading link: the card
 * marks itself with data-clickdelegatefor pointing at the heading link, a
 * click anywhere on non-interactive card content forwards to the link, while
 * clicks on nested interactive elements (a button) are NOT delegated.
 */
export const TestCardClickDelegation: StoryObj<{
  onNavigate: () => void;
  onReadMore: () => void;
}> = {
  name: 'Test: Card Click Delegates To Heading Link',
  render: (args) => (
    <Card style={{ maxWidth: '320px' }} data-color="neutral">
      <CardBlock>
        <h3>
          <a
            href="#gi-et-bidrag"
            onClick={(event) => {
              event.preventDefault();
              args.onNavigate?.();
            }}
          >
            Gi et bidrag
          </a>
        </h3>
        <Paragraph>Din støtte gjør at vi kan hjelpe flere mennesker i nød.</Paragraph>
      </CardBlock>
      <CardBlock>
        <Button
          variant="secondary"
          data-size="sm"
          onClick={() => args.onReadMore?.()}
        >
          Les mer
        </Button>
      </CardBlock>
    </Card>
  ),
  args: {
    onNavigate: fn(),
    onReadMore: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const card = canvasElement.querySelector('.ds-card') as HTMLElement;
    const link = canvas.getByRole('link', { name: 'Gi et bidrag' });

    // The card wires itself to the heading link
    await waitFor(() => {
      expect(link).toHaveAttribute('id');
      expect(card).toHaveAttribute('data-clickdelegatefor', link.id);
    });

    // Clicking non-interactive content anywhere in the card activates the link
    await userEvent.click(canvas.getByText(/Din støtte gjør at vi kan hjelpe/));
    expect(args.onNavigate).toHaveBeenCalledTimes(1);
    expect(args.onReadMore).not.toHaveBeenCalled();

    // Clicking a nested interactive element is NOT delegated to the link
    await userEvent.click(canvas.getByRole('button', { name: 'Les mer' }));
    expect(args.onReadMore).toHaveBeenCalledTimes(1);
    expect(args.onNavigate).toHaveBeenCalledTimes(1);

    // Clicking the link itself still works normally
    await userEvent.click(link);
    expect(args.onNavigate).toHaveBeenCalledTimes(2);
  },
};

/**
 * Tests that a static (non-interactive) card stays non-focusable and role-less
 * while its CardBlock composition renders as separate blocks with the content
 * intact.
 */
export const TestStaticCardStructure: Story = {
  name: 'Test: Static Card Structure',
  render: (args) => (
    <Card {...args} style={{ maxWidth: '320px' }}>
      <CardBlock>
        <h3>Om Røde Kors</h3>
        <p>Røde Kors er en frivillig, medlemsstyrt organisasjon.</p>
      </CardBlock>
      <CardBlock>
        <p>Vi er til stede i lokalsamfunn over hele landet.</p>
      </CardBlock>
      <CardBlock>
        <small>Sist oppdatert 2026</small>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'neutral',
    variant: 'tinted',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvasElement.querySelector('.ds-card') as HTMLElement;

    // A static card has no interactive semantics
    expect(card).not.toHaveAttribute('tabindex');
    expect(card).not.toHaveAttribute('role');
    // No heading link -> no click delegation either
    expect(card).not.toHaveAttribute('data-clickdelegatefor');

    // Tab does not land on the card (nothing in it is focusable)
    await userEvent.tab();
    expect(card).not.toHaveFocus();
    expect(card.contains(document.activeElement)).toBe(false);

    // CardBlock composition: three separate blocks with their content
    const blocks = card.querySelectorAll(':scope > .ds-card__block');
    expect(blocks).toHaveLength(3);
    expect(canvas.getByRole('heading', { level: 3, name: 'Om Røde Kors' })).toBeVisible();
    expect(canvas.getByText(/til stede i lokalsamfunn/)).toBeVisible();
    expect(canvas.getByText('Sist oppdatert 2026')).toBeVisible();
  },
};
