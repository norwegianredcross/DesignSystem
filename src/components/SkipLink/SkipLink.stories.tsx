// src/components/SkipLink/SkipLink.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor } from 'storybook/test';
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

// --- INTERACTION TESTS ---

/**
 * Tests the whole purpose of the SkipLink: it is visually hidden (clipped to
 * 1x1 px) but still first in the tab order, it becomes visible when it
 * receives keyboard focus, and activating it moves focus to the main-content
 * target so keyboard users can bypass the navigation.
 */
export const TestFocusAndActivation: Story = {
  name: 'Test: Focus Reveal And Activation',
  render: (args) => (
    <>
      <SkipLink {...args} />
      <nav aria-label="Hovedmeny">
        <a href="#unused-1">Aktiviteter</a> <a href="#unused-2">Om oss</a>
      </nav>
      <main
        id="test-hovedinnhold"
        tabIndex={-1}
        style={{ padding: '2rem', border: '1px dashed #ccc', outline: 'none' }}
      >
        Hovedinnholdet på siden.
      </main>
    </>
  ),
  args: {
    children: 'Hopp til hovedinnhold',
    href: '#test-hovedinnhold',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The link is in the accessibility tree with its accessible name and
    // points at the main-content target, even while visually hidden
    const skipLink = canvas.getByRole('link', { name: 'Hopp til hovedinnhold' });
    expect(skipLink).toHaveAttribute('href', '#test-hovedinnhold');

    // Visually hidden until focused: clipped to a 1px box
    expect(skipLink.offsetWidth).toBeLessThanOrEqual(1);
    expect(skipLink.offsetHeight).toBeLessThanOrEqual(1);

    // First Tab press lands on the skip link, before the nav links
    await userEvent.tab();
    expect(skipLink).toHaveFocus();

    // Once focused it is revealed
    await waitFor(() => expect(skipLink.offsetWidth).toBeGreaterThan(1));
    expect(skipLink.offsetHeight).toBeGreaterThan(1);

    // The link resolves to an existing, programmatically focusable target
    const main = canvas.getByText('Hovedinnholdet på siden.');
    const target = document.getElementById(
      (skipLink.getAttribute('href') ?? '').slice(1),
    );
    expect(target).toBe(main);
    expect(main.tabIndex).toBe(-1);

    // Activating the link moves focus to the main-content target.
    // Real fragment navigation tears down the vitest browser page, so the
    // click is intercepted and the browser's behavior (focusing the fragment
    // target) is reproduced. The component must not prevent the default.
    skipLink.addEventListener(
      'click',
      (event) => {
        expect(event.defaultPrevented).toBe(false);
        event.preventDefault();
        main.focus();
      },
      { once: true },
    );
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(main).toHaveFocus());

    // When focus leaves the link it collapses back to visually hidden
    expect(skipLink.offsetWidth).toBeLessThanOrEqual(1);
  },
};
