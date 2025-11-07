import type { Meta, StoryObj } from '@storybook/react';
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
      description: 'The title of the alert.',
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