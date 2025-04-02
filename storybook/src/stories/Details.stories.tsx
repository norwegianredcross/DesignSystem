import type { Meta, StoryObj } from '@storybook/react';
import { Details, Card } from '@digdir/designsystemet-react';

type DetailsProps = React.ComponentProps<typeof Details> & {
  summary?: string; // Explicitly add the `summary` property if it is not part of the component's props
};

const meta: Meta<DetailsProps> = {
  title: 'Components/Details',
  component: Details,
  tags: ['autodocs'],
  args: {
    summary: 'Click to expand',
    children: 'This is the detailed content.',
  },
  argTypes: {
    summary: {
      control: 'text',
      description: 'The summary text that is always visible.',
    },
    children: {
      control: 'text',
      description: 'The content that is revealed when the details are expanded.',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
    },
    variant: {
      control: 'select',
      options: ['default', 'tinted'],
      description: 'Change the background color of the details.',
    },
    open: {
      control: 'boolean',
      description: 'Controls open-state. Removes automatic control of open-state.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Defaults the details to open if not controlled.',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback function when Details toggles due to click on summary or find-in-page search.',
    },
  },
};

export default meta;
type Story = StoryObj<DetailsProps>;

export const Default: Story = {
  args: {
    summary: 'Click to expand',
    children: (
      <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>Details content</Details.Content>
      </>
    ),
  },
};

export const WithFrame: Story = {
  args: {
    summary: 'Details heading text',
    children: (
      <Card>
        <Details>
          <Details.Summary>Details heading text</Details.Summary>
          <Details.Content>Details content</Details.Content>
        </Details>
      </Card>
    ),
  },
};

export const WithColors: Story = {
  args: {
    summary: 'Details with colors',
    'data-color': 'brand1',
    children: (
      <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>Details content</Details.Content>
      </>
    ),
  },
};

export const Controlled: Story = {
  args: {
    summary: 'Controlled Details',
    open: true,
    children: (
      <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>Details content</Details.Content>
      </>
    ),
  },
};

export const NestedDetails: Story = {
  args: {
    summary: 'Nested Details',
    children: (
      <>
        <Details.Summary>Parent Details</Details.Summary>
        <Details.Content>
          <Details summary="Child Details">
            <Details.Summary>Child Details</Details.Summary>
            <Details.Content>Child Details content</Details.Content>
          </Details>
        </Details.Content>
      </>
    ),
  },
};

export const WithLongText: Story = {
  args: {
    summary: 'This is a very long summary that spans multiple lines to demonstrate how the component handles long text in the summary.',
    children: (
      <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>
          This is a very long content that spans multiple lines to demonstrate how the component handles long text in the content.
        </Details.Content>
      </>
    ),
  },
};
