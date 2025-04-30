// src/components/Breadcrumbs/Breadcrumbs.stories.tsx
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

// --- Example Only Back Button ---
export const OnlyBackButton: Story = {
  name: 'Example Only Back Button', 
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

// --- Example Only Path ---
export const OnlyPath: Story = {
  name: 'Example Only Path', 
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

// --- Example Back Button and Path ---
export const BackAndPath: Story = {
  name: 'Example Back Button and Path', 
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

// --- Example Custom Size and Color ---
export const LargeBrand2: Story = {
  name: 'Example Custom Size and Color', 
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
