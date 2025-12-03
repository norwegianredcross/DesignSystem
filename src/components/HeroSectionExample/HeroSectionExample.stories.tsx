import type { Meta, StoryObj } from '@storybook/react';
import { HeroSectionExample } from './index';

const meta: Meta<typeof HeroSectionExample> = {
  title: 'Components/HeroSectionExample',
  component: HeroSectionExample,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    descriptionPosition: {
      control: 'radio',
      options: ['top', 'bottom'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSectionExample>;

export const Default: Story = {
  args: {
    title: 'A bold headline that delivers',
    description: 'Go ahead and say just a little more about what you do.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: 'Hero with Background',
    description: 'Eyebrow text to label this content',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    backgroundImage: '/herosectionbg.png.png',
    descriptionPosition: 'top',
  },
};

export const DescriptionTop: Story = {
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top',
  },
};

