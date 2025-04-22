import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { ErrorSummary, ErrorSummaryProps } from './index'; // Import the main ErrorSummary component
import { Textfield } from '@digdir/designsystemet-react'; // For context example

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
    // Props directly available on DigDirErrorSummaryProps based on docs
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    // Note: data-color is NOT listed as a prop for ErrorSummary itself in the docs provided.
    // It seems to inherently use danger colors.
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
    // heading prop is handled by ErrorSummary.Heading sub-component
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
    // Default args for this story
    'data-size': 'md',
  },
};

// --- Example simulating context with Textfields ---
export const WithTextFields: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Textfield
        id="textfield-error-1" // ID matches href in ErrorSummary.Link
        label="Fornavn"
        error="Fornavn må være minst 2 tegn"
        aria-describedby="errorsummary-heading" // Optional: Link field error to summary heading
      />
      <Textfield
        id="textfield-error-2" // ID matches href in ErrorSummary.Link
        label="Telefon"
        error="Telefonnummer kan kun inneholde siffer"
        aria-describedby="errorsummary-heading"
      />

      {/* Render the ErrorSummary - typically shown only on submit */}
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
