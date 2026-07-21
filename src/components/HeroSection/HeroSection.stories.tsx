import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from 'storybook/test';
import { HeroSection } from './index';

const meta: Meta<typeof HeroSection> = {
  title: 'Components/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    descriptionPosition: {
      control: 'radio',
      options: ['top', 'bottom'],
    },
    layout: {
      control: 'radio',
      options: ['centered', 'bottom-image', 'side-by-side', 'cards'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    title: 'A bold headline that delivers',
    description: 'Go ahead and say just a little more about what you do.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'centered',
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: 'Hero with Background',
    description: 'Eyebrow text to label this content',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    backgroundImage: `${import.meta.env.BASE_URL}herosectionbg.png`,
    descriptionPosition: 'top',
    layout: 'centered',
  },
};

export const DescriptionTop: Story = {
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top',
    layout: 'centered',
  },
};

export const WithBottomImage: Story = {
  args: {
    title: 'Hero with Image Below',
    description: 'This hero section features a prominent image below the call to action buttons.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: `${import.meta.env.BASE_URL}testimg.png`,
    imageAlt: 'Team working together',
    layout: 'bottom-image',
  },
};

export const SideBySide: Story = {
  args: {
    title: 'Side by Side Layout',
    description: 'This layout places the text content on the left and the image on the right, filling the full height of the container.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: `${import.meta.env.BASE_URL}testimg.png`,
    imageAlt: 'Side image',
    layout: 'side-by-side',
  },
};

export const WithCards: Story = {
  parameters: { a11y: { test: 'todo' } }, // color-contrast in HeroSection component
  args: {
    title: 'Hero with Cards',
    description: 'This hero section displays four cards below the main content, creating a grid of visuals.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'cards',
    cards: [
      { imageUrl: `${import.meta.env.BASE_URL}card1.png`, imageAlt: 'Card 1' },
      { imageUrl: `${import.meta.env.BASE_URL}card2.png`, imageAlt: 'Card 2' },
      { imageUrl: `${import.meta.env.BASE_URL}card3.png`, imageAlt: 'Card 3' },
      { imageUrl: `${import.meta.env.BASE_URL}card4.png`, imageAlt: 'Card 4' },
    ],
  },
};

export const NoButtons: Story = {
  args: {
    title: 'Hero Heading',
    description: 'This is a hero section without buttons.',
    layout: 'centered',
  },
};

export const TestContentAndActionsContract: Story = {
  name: 'Test: Content And Actions Contract',
  tags: ['!autodocs'],
  args: {
    title: 'Bli frivillig',
    description: 'Gjør en forskjell der du bor.',
    descriptionPosition: 'top',
    primaryButtonText: 'Finn aktivitet',
    secondaryButtonText: 'Les mer',
    onPrimaryClick: fn(),
    onSecondaryClick: fn(),
    image: `${import.meta.env.BASE_URL}testimg.png`,
    imageAlt: 'Frivillige i aktivitet',
    layout: 'side-by-side',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const section = canvasElement.querySelector('section');
    const heading = canvas.getByRole('heading', { level: 2, name: 'Bli frivillig' });
    const description = canvas.getByText('Gjør en forskjell der du bor.');

    await expect(section).toBeInTheDocument();
    await expect(
      description.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    await expect(canvas.getByRole('img', { name: 'Frivillige i aktivitet' })).toBeVisible();

    await userEvent.click(canvas.getByRole('button', { name: 'Finn aktivitet' }));
    await userEvent.click(canvas.getByRole('button', { name: 'Les mer' }));
    await expect(args.onPrimaryClick).toHaveBeenCalledTimes(1);
    await expect(args.onSecondaryClick).toHaveBeenCalledTimes(1);
  },
};

export const TestCardsAreCappedAtFour: Story = {
  name: 'Test: Cards Are Capped At Four',
  tags: ['!autodocs'],
  parameters: { a11y: { test: 'todo' } },
  args: {
    title: 'Aktiviteter',
    description: 'Finn noe som passer for deg.',
    layout: 'cards',
    cards: Array.from({ length: 5 }, (_, index) => ({
      imageUrl: `${import.meta.env.BASE_URL}card${(index % 4) + 1}.png`,
      imageAlt: `Aktivitet ${index + 1}`,
    })),
  },
  play: async ({ canvasElement }) => {
    const images = within(canvasElement).getAllByRole('img');

    await expect(images).toHaveLength(4);
    await expect(images.map((image) => image.getAttribute('alt'))).toEqual([
      'Aktivitet 1',
      'Aktivitet 2',
      'Aktivitet 3',
      'Aktivitet 4',
    ]);
  },
};
