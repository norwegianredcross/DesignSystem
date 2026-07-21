// src/components/Breadcrumbs/Breadcrumbs.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, waitFor } from 'storybook/test';
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

// --- INTERACTION TESTS ---

/**
 * Tests the breadcrumb trail semantics set up by the ds-breadcrumbs element:
 * it becomes a navigation landmark named by aria-label, the trail is an
 * ordered list of links with real hrefs, and only the last (current) link is
 * marked with aria-current="page".
 */
export const TestPathSemantics: Story = {
  name: 'Test: Path Semantics And Current Page',
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/">Forsiden</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter">Aktiviteter</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter/besokstjenesten">
            Besøkstjenesten
          </BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
  args: {
    'aria-label': 'Du er her:',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The custom element upgrades itself to a named navigation landmark
    const nav = await waitFor(() =>
      canvas.getByRole('navigation', { name: 'Du er her:' }),
    );

    // The trail is an ordered list of three items
    const list = within(nav).getByRole('list');
    expect(list.tagName).toBe('OL');
    expect(within(list).getAllByRole('listitem')).toHaveLength(3);

    // Each crumb is a real link with its href
    const home = canvas.getByRole('link', { name: 'Forsiden' });
    const activities = canvas.getByRole('link', { name: 'Aktiviteter' });
    const current = canvas.getByRole('link', { name: 'Besøkstjenesten' });
    expect(home).toHaveAttribute('href', '/');
    expect(activities).toHaveAttribute('href', '/aktiviteter');
    expect(current).toHaveAttribute('href', '/aktiviteter/besokstjenesten');

    // Only the last link is marked as the current page
    await waitFor(() => expect(current).toHaveAttribute('aria-current', 'page'));
    expect(home).not.toHaveAttribute('aria-current');
    expect(activities).not.toHaveAttribute('aria-current');
  },
};

/**
 * Tests the combined variant with a back button in front of the trail. The
 * design is responsive: on viewports >= 650px the trail list is shown and the
 * back link is hidden with CSS; below 650px it is the other way around. The
 * tests run on a desktop viewport, so the back link is present in the DOM
 * (with aria-label and href intact) but not visible, and aria-current lands
 * on the last trail link - never on the back link.
 */
export const TestBackButtonAndPath: Story = {
  name: 'Test: Back Button And Path',
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til aktiviteter" href="/aktiviteter">
        Aktiviteter
      </BreadcrumbsLink>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/">Forsiden</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter">Aktiviteter</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter/leksehjelp">
            Leksehjelp
          </BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
  args: {
    'aria-label': 'Du er her:',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Landmark is present since the trail list is rendered
    await waitFor(() =>
      expect(
        canvas.getByRole('navigation', { name: 'Du er her:' }),
      ).toBeInTheDocument(),
    );

    // The back link keeps its aria-label and href, but is CSS-hidden on
    // desktop viewports where the full trail is shown instead
    const backLink = canvasElement.querySelector(
      '.ds-breadcrumbs > a',
    ) as HTMLAnchorElement;
    expect(backLink).toHaveAttribute('aria-label', 'Tilbake til aktiviteter');
    expect(backLink).toHaveAttribute('href', '/aktiviteter');
    expect(backLink).not.toBeVisible();

    // aria-current lands on the last trail link, never on the back link
    const current = canvas.getByRole('link', { name: 'Leksehjelp' });
    await waitFor(() => expect(current).toHaveAttribute('aria-current', 'page'));
    expect(backLink).not.toHaveAttribute('aria-current');
  },
};

/**
 * Tests the back-button-only variant: with no trail list, the ds-breadcrumbs
 * element intentionally does NOT expose a navigation landmark (upstream
 * behavior in designsystemet-web) - only the named back link itself remains.
 */
export const TestBackButtonOnly: Story = {
  name: 'Test: Back Button Only Variant',
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til aktiviteter" href="/aktiviteter">
        Aktiviteter
      </BreadcrumbsLink>
    </Breadcrumbs>
  ),
  args: {
    'aria-label': 'Du er her:',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The back link is accessible with name and href
    const backLink = canvas.getByRole('link', { name: 'Tilbake til aktiviteter' });
    expect(backLink).toHaveAttribute('href', '/aktiviteter');
    expect(backLink).not.toHaveAttribute('aria-current');

    // Without a trail list, ds-breadcrumbs removes the navigation role and
    // aria-label from the wrapper (upstream designsystemet-web behavior:
    // a lone back button is not announced as a nav landmark)
    const wrapper = canvasElement.querySelector('.ds-breadcrumbs') as HTMLElement;
    await waitFor(() => expect(wrapper).not.toHaveAttribute('role'));
    expect(canvas.queryByRole('navigation')).not.toBeInTheDocument();
  },
};
