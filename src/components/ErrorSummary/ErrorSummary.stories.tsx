import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor } from 'storybook/test';
import { ErrorSummary, ErrorSummaryProps } from './index';
import { Textfield } from '@digdir/designsystemet-react';

const meta: Meta<typeof ErrorSummary> = {
  title: 'Components/ErrorSummary',
  component: ErrorSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ErrorSummary provides an overview of errors or omissions that need correction on a page or step.',
      },
    },
  },
  argTypes: {
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    children: {
      control: false,
      description:
        'Must contain ErrorSummary.Heading and ErrorSummary.List with Items/Links',
    },
    heading: { table: { disable: true } },
  } as ArgTypes<ErrorSummaryProps>,
};

export default meta;

type Story = StoryObj<typeof ErrorSummary>;

// --- Basic Example ---
export const Default: Story = {
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Heading>
        For å gå videre må du rette opp følgende feil:
      </ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-1">
            Fødselsdato kan ikke være etter år 2005
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-2">
            Telefonnummer kan kun inneholde siffer
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-3">
            E-post må være gyldig
          </ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
  args: {
    'data-size': 'md',
  },
};

// --- Example simulating context with Textfields ---
export const WithTextFields: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Textfield
        id="textfield-error-1" 
        label="Fornavn"
        error="Fornavn må være minst 2 tegn"
        aria-describedby="errorsummary-heading"
      />
      <Textfield
        id="textfield-error-2" 
        label="Telefon"
        error="Telefonnummer kan kun inneholde siffer"
        aria-describedby="errorsummary-heading"
      />
      <ErrorSummary {...args}>
        <ErrorSummary.Heading id="errorsummary-heading">
          For å gå videre må du rette opp følgende feil:
        </ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#textfield-error-1">
              Fornavn må være minst 2 tegn
            </ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#textfield-error-2">
              Telefonnummer kan kun inneholde siffer
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary>
    </div>
  ),
  args: {
    'data-size': 'md',
  },
};

// --- INTERACTION TESTS ---

/**
 * Tests the semantics the ErrorSummary web component sets up on mount: it
 * receives focus (tabindex="-1" + programmatic focus) so screen readers
 * announce it, and it is labelled by its own heading via aria-labelledby.
 * The errors are exposed as a list of links.
 */
export const TestMountFocusAndSemantics: Story = {
  name: 'Test: Mount Focus And Heading Association',
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Heading>
        For å gå videre må du rette opp følgende feil:
      </ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#felt-fodselsdato">
            Fødselsdato kan ikke være etter år 2005
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#felt-telefon">
            Telefonnummer kan kun inneholde siffer
          </ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summary = canvasElement.querySelector('.ds-error-summary') as HTMLElement;

    // The web component makes itself programmatically focusable and moves
    // focus to the summary when it appears
    await waitFor(() => {
      expect(summary).toHaveAttribute('tabindex', '-1');
      expect(summary).toHaveFocus();
    });

    // The summary is labelled by its own heading
    const heading = canvas.getByRole('heading', {
      level: 2,
      name: 'For å gå videre må du rette opp følgende feil:',
    });
    await waitFor(() => {
      expect(heading).toHaveAttribute('id');
      expect(summary).toHaveAttribute('aria-labelledby', heading.id);
    });

    // Errors are a list of two links
    expect(within(summary).getByRole('list')).toBeInTheDocument();
    const links = within(summary).getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '#felt-fodselsdato');
    expect(links[1]).toHaveAttribute('href', '#felt-telefon');
  },
};

/**
 * Tests the error-correction flow: each summary link points at the id of an
 * actual form field, and activating a link moves focus to that field so the
 * user can fix the error immediately.
 */
export const TestLinksMoveFocusToFields: Story = {
  name: 'Test: Links Move Focus To Fields',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* The ds-error-summary element re-focuses itself when its CSS
          entry animation ends, which races with this test's focus
          assertions. Disable the (0s, visual no-op) animation so focus
          movement is deterministic; mount focus still applies. */}
      <style>{'.ds-error-summary { animation: none !important; }'}</style>
      <Textfield
        id="test-felt-fornavn"
        label="Fornavn"
        error="Fornavn må være minst 2 tegn"
      />
      <Textfield
        id="test-felt-epost"
        label="E-post"
        error="E-post må være gyldig"
      />
      <ErrorSummary {...args}>
        <ErrorSummary.Heading>
          For å gå videre må du rette opp følgende feil:
        </ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#test-felt-fornavn">
              Fornavn må være minst 2 tegn
            </ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#test-felt-epost">
              E-post må være gyldig
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary>
    </div>
  ),
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstNameInput = canvas.getByRole('textbox', { name: 'Fornavn' });
    const emailInput = canvas.getByRole('textbox', { name: 'E-post' });

    // Every summary link resolves to an existing form field in the document
    for (const link of canvas.getAllByRole('link')) {
      const targetId = (link.getAttribute('href') ?? '').slice(1);
      const target = document.getElementById(targetId);
      expect(target).toBeInstanceOf(HTMLInputElement);
    }

    // Activating a link moves focus to the referenced field. Real fragment
    // navigation tears down the vitest browser page, so the click is
    // intercepted and the browser's behavior (focusing the focusable
    // fragment target) is reproduced. The component must not prevent the
    // default itself.
    const activateLink = async (name: string) => {
      const link = canvas.getByRole('link', { name });
      link.addEventListener(
        'click',
        (event) => {
          expect(event.defaultPrevented).toBe(false);
          event.preventDefault();
          const targetId = (link.getAttribute('href') ?? '').slice(1);
          document.getElementById(targetId)?.focus();
        },
        { once: true },
      );
      await userEvent.click(link);
    };

    await activateLink('Fornavn må være minst 2 tegn');
    await waitFor(() => expect(firstNameInput).toHaveFocus());

    // And the other link focuses the other field
    await activateLink('E-post må være gyldig');
    await waitFor(() => expect(emailInput).toHaveFocus());
  },
};
