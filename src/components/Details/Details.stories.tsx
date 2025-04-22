import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Details, DetailsProps } from './index'; // Import the main Details component

const meta: Meta<typeof Details> = {
  title: 'Components/Details',
  component: Details,
  tags: ['autodocs'],
  argTypes: {
    // Props directly available on DigDirDetailsProps
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
    // The 'open' prop controls the state, usually handled internally or via state
    open: {
      control: 'boolean',
      description: 'Controls the open/closed state.',
      defaultValue: false, // Default to closed
    },
    // Children are defined within the story's render/args
    children: {
      control: false,
      description: 'Must contain Details.Summary and Details.Content',
    },
  } as ArgTypes<DetailsProps>,
};

export default meta;

type Story = StoryObj<typeof Details>;

export const DefaultClosed: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hva er Altinn?</Details.Summary>
      <Details.Content>
        Altinn er en internettportal for digital dialog mellom næringslivet,
        privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er
        utviklet og driftet av Altinn-samarbeidet, som består av flere
        offentlige etater.
      </Details.Content>
    </Details>
  ),
  args: {
    // Default state is closed
  },
};

export const DefaultOpen: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hva er formålet med Altinn?</Details.Summary>
      <Details.Content>
        Formålet med Altinn er å effektivisere og forenkle rapportering fra
        næringslivet til det offentlige, samt å gi enklere tilgang til
        offentlig informasjon og tjenester for både bedrifter og privatpersoner.
      </Details.Content>
    </Details>
  ),
  args: {
    open: true, // Start in the open state
  },
};

export const LargeBrand1: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hvilke tjenester tilbyr Altinn?</Details.Summary>
      <Details.Content>
        Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer
        (som MVA-melding, A-melding), tilgang til meldingsboks fra det
        offentlige, registertjenester, samtykketjenester og veiledning.
      </Details.Content>
    </Details>
  ),
  args: {
    'data-size': 'lg',
    'data-color': 'brand1',
    open: false,
  },
};
