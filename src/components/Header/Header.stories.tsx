import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { Header } from './index';
import avatarPlaceholder from '../../assets/images/person2.jpg';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
      viewports: {
        desktop: {
          name: 'Desktop 1366px',
          styles: {
            width: '1366px',
            height: '900px',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
    },
    docs: {
      // Use the MDX file for documentation
      page: null, 
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'compact'],
      description: "Layout density. 'compact' renders a slimmer header: transparent (non-boxed) logo area, no white logo box, reduced height.",
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    'data-color': {
      control: 'select',
      options: ['primary-color-red', 'neutral', 'secondary-color-rust', 'additional-color-ocean'],
      description: 'Theme scope for the header extension (top bar): background uses the scope base color with matching contrast text.',
      defaultValue: 'primary-color-red',
    },
    showUser: {
      control: 'boolean',
      description: 'Show user profile information (avatar/name)',
      defaultValue: true,
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search toggle button',
      defaultValue: true,
    },
    showLogin: {
      control: 'boolean',
      description: 'Show login link',
      defaultValue: true,
    },
    children: {
      control: 'text',
      description: 'Content to display in the expandable menu',
    },
    secondaryLogo: {
      control: 'boolean',
      description: 'Show a secondary logo next to the main logo',
      defaultValue: false,
    },
    secondaryLogoSrc: {
      control: 'text',
      description: 'Source URL for the secondary logo',
    },
    secondaryLogoAlt: {
      control: 'text',
      description: 'Alt text for the secondary logo',
    },
    extensionColor: {
      control: 'select',
      options: ['primary', 'neutral', 'tinted'],
      description: 'Background color variant for the top bar. "tinted" uses a soft pink background.',
    },
    userName: {
      control: 'text',
      description: 'Display name shown next to the avatar. Falls back to "Frodo Baggins" if omitted.',
    },
    userInitials: {
      control: 'text',
      description: 'Initials rendered inside the avatar. Auto-derived from userName if omitted.',
    },
    userAvatarSrc: {
      control: 'text',
      description: 'Avatar image URL. Takes precedence over initials when provided.',
    },
    onUserClick: {
      action: 'user-clicked',
      description: 'Click handler on the user block. When set, the block becomes a keyboard-accessible button.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
  },
};

export const Guest: Story = {
  args: {
    showUser: false,
    showSearch: true,
    showLogin: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuration for a non-authenticated user (Guest). Shows login link instead of user profile.',
      },
    },
  },
};

export const NoSearch: Story = {
  args: {
    showUser: true,
    showSearch: false,
    showLogin: false,
  },
};

export const Mobile: Story = {
  args: {
    showUser: true, // On mobile, name is hidden via CSS, only avatar shown
    showSearch: true,
    showLogin: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const WithSecondaryLogo: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    secondaryLogo: true,
    secondaryLogoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Figma-1-logo.png/640px-Figma-1-logo.png',
    secondaryLogoAlt: 'Figma Logo',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a secondary logo displayed next to the main logo, separated by a divider.',
      },
    },
  },
};

export const WithMenuContent: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    children: (
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--ds-color-text-default)' }}>Design</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--ds-color-text-default)' }}>Komponenter</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--ds-color-text-default)' }}>Kode</a>
      </div>
    ),
  },
};

export const WithRealUser: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Daniel Barlag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pass `userName` and the avatar initials are auto-derived (here: "DB").',
      },
    },
  },
};

export const WithExplicitInitials: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Ola',
    userInitials: 'ON',
  },
  parameters: {
    docs: {
      description: {
        story: 'Override auto-derivation by supplying `userInitials` explicitly.',
      },
    },
  },
};

export const WithAvatarImage: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Kari Hansen',
    userAvatarSrc: avatarPlaceholder,
  },
  parameters: {
    docs: {
      description: {
        story: 'When `userAvatarSrc` is provided, the avatar renders the image instead of initials.',
      },
    },
  },
};

export const ClickableUser: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Daniel Barlag',
    onUserClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'When `onUserClick` is provided, the user block becomes a keyboard-accessible button (role="button", tabIndex=0, Enter/Space activation).',
      },
    },
  },
};

export const NeutralColor: Story = {
  args: {
    'data-color': 'neutral',
    showUser: true,
    showSearch: true,
    showLogin: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with neutral background color for the top bar (neutral-base-default).',
      },
    },
  },
};

export const Compact: Story = {
  args: {
    variant: 'compact',
    showUser: false,
    showSearch: true,
    showLogin: false,
    showMenuButton: false,
    showNavItems: true,
    navItems: [
      { label: 'Design', href: 'design' },
      { label: 'Komponenter', href: 'components' },
      { label: 'Kode', href: 'code' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "The `compact` variant: a slimmer, lighter header (transparent logo area, no white logo box, reduced height). Useful for documentation sites, dashboards, or any app wanting a lighter top bar.",
      },
    },
  },
};

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Logo link should be present
    const logoLink = canvas.getByRole('link', { name: /hjem/i });
    expect(logoLink).toBeInTheDocument();

    // Menu button should be present and toggle
    const menuButton = canvas.getByRole('button', { name: /meny/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(menuButton);

    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    // Close menu
    await userEvent.click(menuButton);

    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    // Search button should be present and toggle
    const searchButton = canvas.getByRole('button', { name: /søk/i });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(searchButton);

    await waitFor(() => {
      expect(searchButton).toHaveAttribute('aria-expanded', 'true');
    });
  },
};

export const TestMobileMenuFlow: Story = {
  name: 'Test: Mobile Menu Flow',
  args: {
    // showMenuButton is OFF on purpose: below 850px the Header forces the
    // menu button anyway ((showMenuButton || isMobile) in the component),
    // because the nav links are hidden on small screens. This test locks
    // that mobile-only behavior - it must fail if someone removes the
    // isMobile forcing.
    showMenuButton: false,
    showNavItems: true,
    showUser: false,
    showSearch: false,
    showLogin: false,
    showLanguageSwitch: true,
    navItems: [
      { label: 'Design', href: 'design' },
      { label: 'Komponenter', href: 'components' },
    ],
    children: (
      <nav aria-label="Mobilmeny">
        <a href="#design">Design</a>
      </nav>
    ),
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The 850px matchMedia listener must have kicked in for the forced
    // menu button to exist at all.
    const menuButton = await canvas.findByRole('button', { name: /meny/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open: the slotted menu content renders, and the language switcher
    // moves INTO the overlay (mobile places utilities inside the menu).
    await userEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      expect(canvas.getByRole('navigation', { name: 'Mobilmeny' })).toBeVisible();
      expect(canvas.getByText('Språk')).toBeVisible();
    });

    // Close via the same button; state and label flip back.
    await userEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(canvas.queryByRole('navigation', { name: 'Mobilmeny' })).not.toBeInTheDocument();
    });
  },
};

export const TestEscapeAndFocusReturn: Story = {
  name: 'Test: Escape Closes Overlays And Returns Focus',
  args: {
    showUser: false,
    showSearch: true,
    showLogin: false,
    showMenuButton: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;
    const menuButton = canvas.getByRole('button', { name: /meny/i });
    const searchButton = canvas.getByRole('button', { name: /søk/i });

    // Opening the search moves focus into the search field, so the screen
    // reader lands in the overlay instead of staying on the toggle button.
    await userEvent.click(searchButton);
    await waitFor(() => {
      expect(doc.activeElement).toBe(canvas.getByRole('searchbox', { name: /søk/i }));
    });

    // Escape closes the overlay and hands focus BACK to the button that
    // opened it - without this the browser drops focus to <body> and a
    // keyboard user loses their place.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(searchButton).toHaveAttribute('aria-expanded', 'false');
      expect(doc.activeElement).toBe(searchButton);
    });

    // Same contract for the menu overlay.
    await userEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(doc.activeElement).toBe(menuButton);
    });
  },
};

export const TestThemeSwitchSync: Story = {
  name: 'Test: Theme Switch Follows Page Scheme',
  args: {
    showUser: false,
    showSearch: false,
    showLogin: false,
    showHeaderExtension: true,
    showModeToggle: true,
  },
  decorators: [
    (Story) => {
      // Simulate a page that is ALREADY dark before the Header mounts -
      // the scenario where the hardcoded 'light' initial state desynced
      // the switch and made the first toggle a visual no-op.
      document.documentElement.setAttribute('data-color-scheme', 'dark');
      return <Story />;
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    try {
      const toggle = canvas.getByRole('switch');

      // The switch reads the real scheme: page is dark, so it starts ON.
      expect(toggle).toBeChecked();

      // First toggle now actually changes the page (dark -> light).
      await userEvent.click(toggle);
      await waitFor(() => {
        expect(document.documentElement.getAttribute('data-color-scheme')).toBe('light');
        expect(toggle).not.toBeChecked();
      });
    } finally {
      document.documentElement.removeAttribute('data-color-scheme');
    }
  },
};

export const TestUserClick: Story = {
  name: 'Test: User block click',
  args: {
    showUser: true,
    showSearch: false,
    showLogin: false,
    userName: 'Ola Nordmann',
    onUserClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Name renders and initials derive to "ON"
    // DigDir Avatar exposes initials via data-initials (CSS pseudo-element), not text content.
    expect(canvas.getByText('Ola Nordmann')).toBeInTheDocument();
    expect(canvas.getByLabelText('Ola Nordmann')).toHaveAttribute('data-initials', 'ON');

    // Block is a keyboard-accessible button
    const userBlock = canvas.getByRole('button', { name: /Ola Nordmann/i });
    expect(userBlock).toHaveAttribute('tabIndex', '0');

    await userEvent.click(userBlock);
    await waitFor(() => {
      expect(args.onUserClick).toHaveBeenCalledTimes(1);
    });

    userBlock.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    expect(args.onUserClick).toHaveBeenCalledTimes(3);
  },
};

export const TestMenuSearchAndResultFlow: Story = {
  name: 'Test: Menu, Search And Result Flow',
  args: {
    showUser: false,
    showLogin: false,
    showSearch: true,
    showMenuButton: true,
    setPage: fn(),
    children: (
      <nav aria-label="Utvidet meny">
        <a href="#aktiviteter">Aktiviteter</a>
      </nav>
    ),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: /meny/i });
    const searchButton = canvas.getByRole('button', { name: /søk/i });

    await userEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      expect(canvas.getByRole('navigation', { name: 'Utvidet meny' })).toBeVisible();
    });

    await userEvent.click(searchButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(searchButton).toHaveAttribute('aria-expanded', 'true');
      expect(canvas.queryByRole('navigation', { name: 'Utvidet meny' })).not.toBeInTheDocument();
    });

    const input = canvas.getByRole('searchbox', { name: /søk/i });
    await userEvent.type(input, 'Dialog');
    const result = await canvas.findByRole('button', { name: 'Dialog' });
    await userEvent.click(result);

    expect(args.setPage).toHaveBeenCalledTimes(1);
    // Deep link: a component suggestion navigates to that component's spot
    // in the catalogue, not the catalogue root.
    expect(args.setPage).toHaveBeenCalledWith('components/dialog');
    await waitFor(() => {
      expect(searchButton).toHaveAttribute('aria-expanded', 'false');
      expect(canvas.queryByRole('searchbox', { name: /søk/i })).not.toBeInTheDocument();
    });
  },
};

export const TestSearchSuggestionAnnouncement: Story = {
  name: 'Test: Search Suggestions Announced',
  args: {
    showUser: false,
    showLogin: false,
    showSearch: true,
    showMenuButton: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /søk/i }));
    const input = await canvas.findByRole('searchbox', { name: /søk/i });

    // The suggestion list is visual-only; the role="status" live region is
    // what a screen reader hears. Typing must update its text with the
    // number of suggestions...
    await userEvent.type(input, 'Ta');
    await waitFor(() => {
      expect(canvas.getByRole('status')).toHaveTextContent(/forslag/);
    });

    // ...and a query without matches announces the no-results message.
    await userEvent.clear(input);
    await userEvent.type(input, 'xyzxyz');
    await waitFor(() => {
      expect(canvas.getByRole('status')).toHaveTextContent(/xyzxyz/);
    });
  },
};

export const TestSearchSubmit: Story = {
  name: 'Test: Search Submit With Enter',
  args: {
    showUser: false,
    showLogin: false,
    showSearch: true,
    showMenuButton: false,
    setPage: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /søk/i }));
    const input = await canvas.findByRole('searchbox', { name: /søk/i });

    // Substring matching: "picker" is not a title PREFIX, but must still
    // suggest DatePicker (previously startsWith found nothing).
    await userEvent.type(input, 'picker');
    expect(await canvas.findByRole('button', { name: 'DatePicker' })).toBeVisible();

    // Enter runs the full search: navigates to the search page with the
    // encoded query and closes the overlay (previously a no-op).
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.setPage).toHaveBeenCalledWith('search/picker');
      expect(canvas.queryByRole('searchbox', { name: /søk/i })).not.toBeInTheDocument();
    });
  },
};

export const TestNavigationCallbacks: Story = {
  name: 'Test: Navigation Callbacks',
  args: {
    showUser: false,
    showSearch: false,
    showMenuButton: false,
    showNavItems: true,
    navItems: [
      { label: 'Komponenter', href: 'components' },
      { label: 'Design', href: 'design' },
    ],
    setPage: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('link', { name: 'Komponenter' }));
    expect(args.setPage).toHaveBeenLastCalledWith('components');

    await userEvent.click(canvas.getByRole('link', { name: /hjem/i }));
    expect(args.setPage).toHaveBeenLastCalledWith('home');
    expect(args.setPage).toHaveBeenCalledTimes(2);
  },
};

export const TestLogoPanelGeometry: Story = {
  name: 'Test: Logo Panel Covers Exactly The Inner Row',
  parameters: {
    // Two headers side by side is a measurement harness, not a page: the
    // duplicate-banner rules fire on the arrangement itself, not on either
    // Header. Every other axe rule stays on.
    a11y: {
      config: {
        rules: [
          { id: 'landmark-no-duplicate-banner', enabled: false },
          { id: 'landmark-unique', enabled: false },
        ],
      },
    },
  },
  render: () => (
    <>
      <div data-testid="plain">
        <Header showUser={false} showSearch={false} showLogin={false} />
      </div>
      <div data-testid="extended">
        <Header
          showUser={false}
          showSearch={false}
          showLogin={false}
          showHeaderExtension
          showModeToggle
        />
      </div>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Below the mobile breakpoint the slab is display:none — nothing to measure.
    if (window.innerWidth <= 850) return;

    const inner = 119; // .headerInner min-height

    // Measured, not hardcoded: the bar's height is a CSS custom property, and
    // a test that restates the number cannot notice the two drifting apart.
    const barHeight = (testId: string) => {
      const bar = canvas.getByTestId(testId).querySelector('[class*="headerExtension"]');
      return bar ? bar.getBoundingClientRect().height : 0;
    };

    // Measuring alone is not enough: `height: var(--typo)` is invalid at
    // computed-value time, so the bar would silently fall back to auto and
    // every measured assertion below would still agree with itself. Pin that
    // the property resolves and that the bar is actually sized by it.
    const extensionHeight = getComputedStyle(
      canvas.getByTestId('extended').querySelector('header') as HTMLElement,
    )
      .getPropertyValue('--rk-header-extension-height')
      .trim();
    expect(extensionHeight, '--rk-header-extension-height must resolve').toMatch(/^\d+px$/);
    expect(barHeight('extended')).toBeCloseTo(Number.parseFloat(extensionHeight), 0);

    // The white slab that continues the logo panel out to the viewport edge
    // is a ::before on the header. It must cover the inner row EXACTLY: drift
    // is invisible against a light page but hangs a white rectangle into a
    // dark one (the bug this guards — the slab was offset by the extension
    // bar's 44px even when no extension rendered). Computed top/height are
    // the only observables a pseudo-element gives us.
    const measure = (testId: string) => {
      const header = canvas.getByTestId(testId).querySelector('header');
      expect(header).not.toBeNull();
      const el = header as HTMLElement;
      const slab = getComputedStyle(el, '::before');
      const top = Number.parseFloat(slab.top);
      const height = Number.parseFloat(slab.height);
      return { headerHeight: el.getBoundingClientRect().height, top, height, bottom: top + height };
    };

    const assertGeometry = (source: string) => {
      // No extension: the inner row starts at the top of the header, so the
      // slab must too — and end flush with the header, not below it.
      const plain = measure('plain');
      expect(barHeight('plain'), source).toBe(0);
      expect(plain.headerHeight, source).toBeCloseTo(inner, 0);
      expect(plain.top, source).toBeCloseTo(0, 0);
      expect(plain.height, source).toBeCloseTo(inner, 0);
      expect(plain.bottom, source).toBeCloseTo(plain.headerHeight, 0);

      // With the extension bar, the slab starts below it and still ends flush.
      const extended = measure('extended');
      const bar = barHeight('extended');
      expect(bar, source).toBeGreaterThan(0);
      expect(extended.headerHeight, source).toBeCloseTo(inner + bar, 0);
      expect(extended.top, source).toBeCloseTo(bar, 0);
      expect(extended.height, source).toBeCloseTo(inner, 0);
      expect(extended.bottom, source).toBeCloseTo(extended.headerHeight, 0);
    };

    // Header ships its styles TWICE: the bundled stylesheet and the
    // runtime-injected fallback. The fallback is prepended so the bundled
    // sheet wins wherever it declares something, but a consumer who never
    // imports 'rk-designsystem/styles' sees the fallback alone — so each of
    // the three resulting states has to hold on its own.
    //
    // Sheets are toggled via CSSStyleSheet.disabled rather than by detaching
    // the <style> node: re-appending would move it to the end of <head> and
    // permanently change cascade order for every later story in this file.
    const injectedNode = document.getElementById('rk-header-inline-styles');
    expect(injectedNode).not.toBeNull();
    const injectedSheet = [...document.styleSheets].find((sheet) => sheet.ownerNode === injectedNode);
    expect(injectedSheet, 'injected stylesheet not found').toBeDefined();
    const bundledSheets = [...document.styleSheets].filter((sheet) => sheet !== injectedSheet);

    /**
     * Disables `sheets` for the duration of `body`. Only sheets that were
     * ENABLED are touched, so a sheet another story left disabled is not
     * silently switched back on, and the restore covers a mid-run throw.
     */
    const withDisabled = (sheets: CSSStyleSheet[], body: () => void) => {
      const toggled: CSSStyleSheet[] = [];
      try {
        for (const sheet of sheets) {
          if (sheet.disabled) continue;
          sheet.disabled = true;
          toggled.push(sheet);
        }
        body();
      } finally {
        for (const sheet of toggled) sheet.disabled = false;
      }
    };

    // 1. As a hydrated consumer sees it: both sheets, injected copy winning.
    assertGeometry('runtime-injected fallback');

    // 2. As the server-rendered first paint looks: bundled sheet alone.
    withDisabled([injectedSheet as CSSStyleSheet], () => assertGeometry('bundled stylesheet'));

    // 3. The genuine fallback — a consumer that never imports
    //    rk-designsystem/styles, so ONLY the injected copy applies. The slab is
    //    an absolutely positioned ::before at z-index 0, and a positioned box
    //    paints after ordinary in-flow content, so the inner row must be lifted
    //    into its own stack level or the opaque slab covers the logo outright.
    withDisabled(bundledSheets, () => {
      const inner = canvas.getByTestId('plain').querySelector('[class*="headerInner"]') as HTMLElement;
      const rowStyle = getComputedStyle(inner);
      const slabStyle = getComputedStyle(
        canvas.getByTestId('plain').querySelector('header') as HTMLElement,
        '::before',
      );
      expect(rowStyle.position, 'fallback-only: inner row must be positioned').toBe('relative');
      expect(
        Number.parseInt(rowStyle.zIndex, 10),
        'fallback-only: inner row must out-paint the slab',
      ).toBeGreaterThan(Number.parseInt(slabStyle.zIndex, 10) || 0);

      // Re-run the geometry here too. Checking it only with both sheets loaded
      // lets the bundled copy supply anything the injected copy forgot — drop
      // --rk-header-extension-height from buildInlineCss alone and every other
      // assertion in this file still passes, while a real inline-only consumer
      // gets an invalid var() and an auto-sized bar.
      assertGeometry('inline-only fallback');
      const fallbackProperty = getComputedStyle(
        canvas.getByTestId('extended').querySelector('header') as HTMLElement,
      )
        .getPropertyValue('--rk-header-extension-height')
        .trim();
      expect(fallbackProperty, 'inline-only: --rk-header-extension-height must resolve').toMatch(
        /^\d+px$/,
      );
      expect(barHeight('extended'), 'inline-only: bar must be sized by the property').toBeCloseTo(
        Number.parseFloat(fallbackProperty),
        0,
      );
    });
  },
};

export const TestCompactWordmarkContrast: Story = {
  name: 'Test: Compact Wordmark Stays Legible In Dark Mode',
  args: { variant: 'compact', showUser: false, showSearch: false, showLogin: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Set the scheme HERE rather than in a decorator: themeDecorator writes
    // data-color-scheme in a useEffect during render and would overwrite it.
    // play runs after that effect, so this is the value that survives.
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    try {
      await waitFor(() => {
        const header = canvas.getByRole('banner');
        expect(getComputedStyle(header).backgroundColor).not.toBe('rgb(255, 255, 255)');
      });
      const header = canvas.getByRole('banner');
      const svg = header.querySelector('svg') as SVGElement;
      expect(svg, 'wordmark svg not found').not.toBeNull();

      const parse = (colour: string) => colour.match(/[\d.]+/g)!.slice(0, 3).map(Number);
      // WCAG relative luminance, then the standard contrast ratio.
      const luminance = ([r, g, b]: number[]) => {
        const f = (c: number) => {
          const v = c / 255;
          return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        };
        return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
      };
      const ratio = (a: number[], b: number[]) => {
        const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
        return (hi + 0.05) / (lo + 0.05);
      };

      const ink = getComputedStyle(svg).color;
      const backdrop = getComputedStyle(header).backgroundColor;
      const contrast = ratio(parse(ink), parse(backdrop));

      // Compact drops the white logo panel, so the wordmark sits straight on
      // the header. 3:1 is the WCAG AA floor for non-text graphics; the
      // hardcoded #1e1e1e fill scored about 1.02 against the dark header.
      expect(contrast, `compact dark: wordmark ${ink} on ${backdrop} is ${contrast.toFixed(2)}:1`).toBeGreaterThan(3);
    } finally {
      document.documentElement.removeAttribute('data-color-scheme');
    }
  },
};

export const TestCompactIsActuallyShorter: Story = {
  name: 'Test: Compact Is Shorter Than Default',
  render: () => (
    <>
      <div data-testid="default-variant">
        <Header showUser={false} showSearch={false} showLogin={false} />
      </div>
      <div data-testid="compact-variant">
        <Header variant="compact" showUser={false} showSearch={false} showLogin={false} />
      </div>
    </>
  ),
  parameters: {
    // Two headers side by side is a measurement harness, not a page.
    a11y: {
      config: {
        rules: [
          { id: 'landmark-no-duplicate-banner', enabled: false },
          { id: 'landmark-unique', enabled: false },
        ],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    if (window.innerWidth <= 850) return; // compact rules are desktop-only

    const height = (testId: string) =>
      (canvas.getByTestId(testId).querySelector('header') as HTMLElement).getBoundingClientRect()
        .height;

    const standard = height('default-variant');
    const compact = height('compact-variant');

    // The variant declares min-height 72px on its inner row. That was
    // unreachable while .logoWrapper stayed a fixed 119px, so compact rendered
    // at exactly the default's height and the prop did nothing.
    expect(standard, 'default header').toBeCloseTo(119, 0);
    expect(compact, `compact header is ${compact}px`).toBeCloseTo(72, 0);
  },
};
