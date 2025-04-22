import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import {
  Breadcrumbs,
  BreadcrumbsProps,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink,
} from './index';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'Sets the screen reader label for the Breadcrumbs area',
      defaultValue: 'Du er her',
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
      defaultValue: 'accent',
    },
  } as ArgTypes<BreadcrumbsProps>,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

// Only back button
export const OnlyBackButton: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
    </Breadcrumbs>
  ),
  args: {
    'aria-label': 'Du er her:',
  },
};

// Only path
export const OnlyPath: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
  args: {
    'aria-label': 'Du er her:',
  },
};

// Both back button and path (back on mobile, path on desktop)
export const BackAndPath: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
  args: {
    'aria-label': 'Du er her:',
  },
};

// Custom size and color
export const LargeBrand2: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
  args: {
    'aria-label': 'Du er her:',
    'data-size': 'lg',
    'data-color': 'brand2',
  },
};
