import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import { Alert } from './index';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    'data-color': {
      control: 'select',
      options: ['info', 'warning', 'success', 'danger'],
      description: 'The visual style of the alert.',
      table: {
        category: 'Appearance',
      },
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the alert.',
      table: {
        category: 'Appearance',
      },
    },
    children: {
      control: 'text',
      description: 'The content of the alert.',
    },
    title: {
      control: 'text',
      description: 'Synlig tittel øverst i varselet.',
    },
    titleLevel: {
      control: 'select',
      options: [undefined, 2, 3, 4, 5, 6],
      description:
        'Semantisk overskriftsnivå for tittelen. Uten nivå rendres tittelen som fremhevet tekst uten overskriftssemantikk.',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  name: 'Informasjon',
  args: {
    'data-color': 'info',
    title: 'Informasjon',
    children:
      'Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen.',
  },
};

export const Suksess: Story = {
  name: 'Suksess',
  args: {
    'data-color': 'success',
    title: 'Gratulerer!',
    children:
      'Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss.',
  },
};

export const Advarsel: Story = {
  name: 'Advarsel',
  args: {
    'data-color': 'warning',
    title: 'Vi har tekniske problemer',
    children:
      'Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene.',
  },
};

export const Feilmelding: Story = {
  name: 'Feilmelding',
  args: {
    'data-color': 'danger',
    title: 'Det har skjedd en feil',
    children:
      'Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere.',
  },
};

export const UtenTittel: Story = {
  name: 'Uten Tittel',
  args: {
    'data-color': 'info',
    children: 'Du har 7 dager igjen på å fullføre søknaden.',
  },
};

export const MedLenke: Story = {
  name: 'Med Lenke',
  args: {
    'data-color': 'warning',
    title: 'Søknadsfristen går ut om 3 dager',
  },
  render: (args) => (
    <Alert {...args}>
      Fristen for å søke opptak til utdanning er 15. april.{' '}
      <a href="#">Søk nå</a>
    </Alert>
  ),
};

export const SmallSize: Story = {
  name: 'Liten størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'sm',
    title: 'Liten alert',
    children: 'Dette er en liten alert.',
  },
};

export const LargeSize: Story = {
  name: 'Stor størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'lg',
    title: 'Stor alert',
    children: 'Dette er en stor alert.',
  },
};

export const TestTitleRendering: Story = {
  name: 'Test: Title Rendering',
  tags: ['!autodocs'],
  args: {
    'data-color': 'info',
    title: 'Viktig informasjon',
    children: 'Selve meldingen.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Tittelen er synlig tekst, men IKKE en overskrift uten titleLevel
    const title = canvas.getByText('Viktig informasjon');
    await expect(title).toBeVisible();
    await expect(canvas.queryByRole('heading')).not.toBeInTheDocument();

    // Tittelen skal ikke lenger lekke som native title-tooltip på rota
    const alertRoot = canvasElement.querySelector('.ds-alert');
    await expect(alertRoot).not.toHaveAttribute('title');
  },
};

export const TestTitleHeadingLevel: Story = {
  name: 'Test: Title Heading Level',
  tags: ['!autodocs'],
  args: {
    'data-color': 'warning',
    title: 'Frist nærmer seg',
    titleLevel: 3,
    children: 'Søknadsfristen er 15. april.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', { level: 3, name: 'Frist nærmer seg' });
    await expect(heading).toBeVisible();
  },
};

export const TestStaticContract: Story = {
  name: 'Test: Static Contract',
  tags: ['!autodocs'],
  args: {
    'data-color': 'danger',
    'data-size': 'lg',
    children: 'Kunne ikke lagre endringene.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByText('Kunne ikke lagre endringene.');

    await expect(message).toHaveClass('ds-alert');
    await expect(message).toHaveAttribute('data-color', 'danger');
    await expect(message).toHaveAttribute('data-size', 'lg');
  },
};
