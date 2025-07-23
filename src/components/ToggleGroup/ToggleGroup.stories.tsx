// src/components/ToggleGroup/ToggleGroup.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupProps } from './index';
import { Button, Divider, Paragraph } from '@digdir/designsystemet-react';
// --- Import Icons ---
import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  EnvelopeClosedIcon,
  DocPencilIcon,
  ArchiveIcon,
  PaperplaneIcon,
} from '@navikt/aksel-icons';
// --- Import Tooltip ---
import { Tooltip } from '../Tooltip'; // Adjust path if necessary

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ToggleGroup allows users to select one option from a set of connected buttons.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default selected item value (uncontrolled mode).',
    },
    name: {
      control: 'text',
      description: 'Form element name for the group.',
      defaultValue: 'toggle-group-story',
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
    value: {
      control: 'text',
      description: 'Selected item value (controlled mode).',
      table: { disable: true },
    },
    onChange: {
      action: 'changed',
      description: 'Callback with selected ToggleGroup.Item value.',
      table: { disable: true },
    },
    children: { control: false },
  } as ArgTypes<ToggleGroupProps>,
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

// --- Example Default ---
export const Default: Story = {
  name: 'Example Default',
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>
    </ToggleGroup>
  ),
  args: {
    defaultValue: 'innboks',
    name: 'folder-toggle',
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Example Icon Only with Tooltip ---
export const IconOnlyWithTooltip: Story = {
  name: 'Example Icon Only with Tooltip',
  render: (args) => (
    <ToggleGroup {...args}>
      <Tooltip content="Venstrestilt">
        <ToggleGroup.Item value="option-1">
          <AlignLeftIcon title="Venstrestilt" fontSize="1.5rem" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Midtstilt">
        <ToggleGroup.Item value="option-2">
          <AlignCenterIcon title="Midtstilt" fontSize="1.5rem" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Høyrestilt">
        <ToggleGroup.Item value="option-3">
          <AlignRightIcon title="Høyrestilt" fontSize="1.5rem" />
        </ToggleGroup.Item>
      </Tooltip>
    </ToggleGroup>
  ),
  args: {
    defaultValue: 'option-1',
    name: 'alignment-icon-toggle',
    'data-size': 'md', // Example size
    'data-color': 'accent', // Example color
  },
};

// --- Example Controlled with Icons and Text ---
export const ControlledWithIcons: Story = {
  name: 'Example Controlled with Icons',
  render: (args) => {
    const [value, setValue] = useState<string>('utkast');
    return (
      <>
        <ToggleGroup
          {...args}
          value={value}
          onChange={setValue}
        >
          <ToggleGroup.Item value="innboks">
            <EnvelopeClosedIcon aria-hidden fontSize="1.5rem" style={{ marginRight: '4px' }}/>
            Innboks
          </ToggleGroup.Item>
          <ToggleGroup.Item value="utkast">
            <DocPencilIcon aria-hidden fontSize="1.5rem" style={{ marginRight: '4px' }}/>
            Utkast
          </ToggleGroup.Item>
          <ToggleGroup.Item value="arkiv">
            <ArchiveIcon aria-hidden fontSize="1.5rem" style={{ marginRight: '4px' }}/>
            Arkiv
          </ToggleGroup.Item>
          <ToggleGroup.Item value="sendt">
            <PaperplaneIcon aria-hidden fontSize="1.5rem" style={{ marginRight: '4px' }}/>
            Sendt
          </ToggleGroup.Item>
        </ToggleGroup>
        <Divider style={{ margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0' }} />
        <Paragraph>Du har valgt: {value}</Paragraph>
        <Button data-size="sm" onClick={() => setValue('arkiv')} style={{ marginTop: 'var(--ds-size-2)' }}>
          Velg Arkiv
        </Button>
      </>
    );
  },
  args: {
    name: 'controlled-folder-toggle-icons',
    'data-size': 'md',
    'data-color': 'brand1',
  },
};

// --- Example Large Size ---
export const LargeSize: Story = {
  name: 'Example Large Size',
  render: (args) => (
     <ToggleGroup {...args}>
      <ToggleGroup.Item value="large1">Large Option 1</ToggleGroup.Item>
      <ToggleGroup.Item value="large2">Large Option 2</ToggleGroup.Item>
    </ToggleGroup>
  ),
  args: {
    defaultValue: 'large1',
    name: 'large-toggle',
    'data-size': 'lg',
    'data-color': 'neutral',
  },
};
