# Røde Kors Design System Component Library (Norwegian Red Cross)

## Where the code lives

Development happens in Azure DevOps:
[RedCrossNorway / DesignPlatform / DesignSystem](https://dev.azure.com/RedCrossNorway/DesignPlatform/_git/DesignSystem). Pull requests,
work items and releases are handled there.

[github.com/norwegianredcross/DesignSystem](https://github.com/norwegianredcross/DesignSystem)
is a public, read-only copy that follows `main`, so anyone can see, learn
from and adapt the components. Pull requests and issues opened on GitHub are
not picked up; to suggest a change or a new component, contact the design
system team at Norwegian Red Cross.

To build with the design system you need neither this code nor any access:
install [`@norwegianredcross/designsystem`](https://www.npmjs.com/package/@norwegianredcross/designsystem)
and use [Storybook](https://storybook.lunix.cloud/) and the [design portal](https://designsystem.lunix.cloud/).

## Moving to the Norwegian Red Cross npm organization

The packages are moving to organization ownership. Version numbering continues;
the package names change. Updating the old dependencies with `npm update` does
not switch them to the organization scope.

| Previous package | New package | Migration version |
| --- | --- | --- |
| `rk-design-tokens` | [`@norwegianredcross/design-tokens`](https://www.npmjs.com/package/@norwegianredcross/design-tokens) | `1.0.50` |
| `rk-designsystem` | [`@norwegianredcross/designsystem`](https://www.npmjs.com/package/@norwegianredcross/designsystem) | `1.5.x` (normal release numbering continues) |

**Release status:** these instructions are prepared for the migration. Run them
after both scoped versions are available on npm.

```sh
npm view @norwegianredcross/design-tokens@1.0.50 version
npm view @norwegianredcross/designsystem version
npm uninstall rk-designsystem rk-design-tokens
npm install @norwegianredcross/designsystem@^1.5.0
```

If the application imports tokens directly, also run:

```sh
npm install @norwegianredcross/design-tokens@^1.0.50
```

Replace component and style imports throughout the application:

```tsx
import { Button } from '@norwegianredcross/designsystem';
import '@norwegianredcross/designsystem/styles';
```

The combined stylesheet includes Digdir styles, the theme, component styles and
bundled Source Sans 3. Do not also import the token theme into the same application
when using this combined stylesheet. A tokens-only consumer instead uses:

```css
@import '@norwegianredcross/design-tokens/design-tokens-build/theme.css';
```

Other token subpaths, such as `design-tokens-build/konferansesenter.css` and
`design-tokens-build/shadcn-theme.css`, keep their paths under the new package name.
Update package aliases, bundler configuration, dependency automation and any npm
links as well. Commit the dependency and lockfile changes produced by npm; do not
hand-edit lockfile registry URLs or integrity values. Run a clean install, the
application build and its tests, then verify styles and fonts in the browser.
Check the lockfile for old packages still required by other dependencies.
Existing unscoped releases remain separate packages; their history does not move
to the scoped names. This package migration does not implement the separately
reviewed component appearance changes.



## Documentation and development tools

- **Public documentation** belongs in the design portal ([designsystem.lunix.cloud](https://designsystem.lunix.cloud/), code in the `designportal` repository in Azure DevOps). It owns authored component guidance, design direction, guides, tokens documentation and release-note presentation.
- **[Storybook workbench](https://storybook.lunix.cloud/)** is a development and test tool: component states, controls, interaction tests and accessibility checks.

Existing app pages, MDX references and published context URLs remain available until the portal can serve their replacements. Component source comments and generated metadata stay tied to the library; the portal consumes that contract.

### Build ownership

- `npm run build` uses the root `vite.config.ts` to produce the npm package, declarations and styles in `dist/`.
- Storybook and its three browser-test projects share `.storybook/vite.config.ts`, which contains React tooling only. They must not run the package's declaration generator or change its build output.
- `npm run build-storybook` continues publishing the guide, metadata and manifest together for existing consumers. This compatibility endpoint is separate from ownership of authored portal content.
- `npm run build:app` continues building the legacy documentation app until its removal is complete.

## Overview

Welcome to the Røde Kors Design System! This repository contains a library of reusable UI components built with React, specifically tailored for Norwegian Red Cross digital projects.

It's developed leveraging the foundational components from Digdir's Designsystemet. This approach ensures a unified and recognizable visual identity across all applications for the Norwegian Red Cross. The system is pre-configured with the official Røde Kors brand theme, which is provided via a dedicated design token package.

The primary goal is to ensure brand consistency, improve development efficiency, and maintain high accessibility standards across all Røde Kors applications.

## Available Components

`EXPERIMENTAL_AvatarStack` exposes Digdir's experimental avatar stack unchanged, including its types, styling and behaviour. Its API may change. Supply `<li>` children with labelled avatars; prefer a short list and a trailing count. Examples are under **Experimental/AvatarStack** in Storybook.

`EXPERIMENTAL_FileUpload` exposes Digdir’s experimental file-upload container unchanged. Its API may change. Follow Digdir’s `Field`, `Label` and `Field.Description` composition around a native `<input type="file">`. Keep explicit label associations and a `name` for server-rendered forms. `Field` connects descriptions with JavaScript; without scripts the help text remains visible but is not automatically associated with the input. On native inputs, `suppressHydrationWarning` accounts for attributes that `Field` connects before React hydrates. Digdir uses a transparent input overlay: selection and native multipart submission work without JavaScript. The examples add no custom file-selection state or filename display; consumers supply any selected-file feedback. Use `Input type="file"` when the browser’s filename display must work without scripts. Consumers provide the POST endpoint and server validation; the component does not upload files or enforce file limits. Use `disabled`, not `readOnly`, to prevent selection. Examples are under **Experimental/FileUpload** in Storybook.

The design system includes the following components:

| Component | Description |
|-----------|-------------|
| Alert | Display important messages and notifications |
| Avatar | Represent users or entities with images/initials |
| Badge | Show status indicators or counts |
| Breadcrumbs | Navigation showing current location in hierarchy |
| Button | Interactive buttons for actions |
| Card | Container for grouping related content |
| Carousel | Image gallery with navigation |
| Checkbox | Multi-select form inputs |
| Chip | Compact interactive elements for filtering |
| DateInput | Text input for dates with Norwegian formatting |
| DatePicker | Visual calendar for date selection |
| Details | Expandable/collapsible content sections |
| Dialog | Modal and non-modal dialog windows |
| Divider | Visual separator between content |
| Dropdown | Dropdown menus and action lists |
| ErrorSummary | Summary of form validation errors |
| Field | Form field wrapper with label and validation |
| Fieldset | Group related form fields |
| Header | Global application header |
| Input | Basic text input field |
| Link | Navigation links |
| List | Ordered and unordered lists |
| Pagination | Navigate between pages of content |
| Popover | Contextual overlays |
| Radio | Single-select form inputs |
| Search | Search input with button |
| Select | Dropdown selection |
| Skeleton | Loading placeholder |
| SkipLink | Accessibility skip navigation |
| Spinner | Loading indicator |
| Suggestion | Searchable select with autocomplete |
| Switch | Toggle on/off settings |
| Table | Structured data display |
| Tabs | Tabbed content navigation |
| Tag | Static labels for categorization |
| Textarea | Multi-line text input |
| Textfield | Text input with label and validation |
| ToggleGroup | Grouped toggle buttons |
| Tooltip | Hover/focus information overlays |

## Quick Start for Next.js (Recommended)

### 1. Install

```bash
npm install @norwegianredcross/designsystem
```

> Since 1.4.0 the library declares `@digdir/designsystemet-react` and
> `@digdir/designsystemet-css` as peer dependencies (`^1.21.0`) and requires
> React `^18.3.1`. npm 7+ installs peers automatically; with older
> setups install them alongside the package.

### Temporary workaround for Aksel 8.17.1

The `@navikt/aksel-icons@8.17.1` release is missing compiled icon files. If a fresh
install fails to resolve `Airplane.js` (or another icon), add this to the consuming
application's root `package.json`, then run `npm install`:

```json
{
  "overrides": {
    "@navikt/aksel-icons@8.17.1": "^8.16.1 <8.17.1 || ^8.17.2"
  }
}
```

If the application also declares `@navikt/aksel-icons` directly, use the same
allowed range for that dependency to avoid npm's `EOVERRIDE` error.

This also covers Digdir's dependency on the icons. Overrides in a library's own
manifest do not propagate to consuming applications. The replacement range excludes
only `8.17.1` from the supported 8.x range; newer releases remain eligible. Remove the workaround once a fixed
release is available. Our fresh consumer tests use the same temporary exception
and report it in their output; they do not validate the broken release.

### 2. Import Styles

```tsx
// src/app/layout.tsx (App Router)
import '@norwegianredcross/designsystem/styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
```

That one import is everything: Digdir base styles, the Røde Kors theme, the
component CSS and Source Sans 3. The font ships inside the package and Next
copies it into the build, so there is no Google Fonts request and nothing to
configure with `next/font`.

The component stylesheet also includes `src/rk-theme.css`: RK-specific bindings
to existing foundation tokens for Popover, text inputs/Field, Suggestion,
Dropdown, ErrorSummary, Badge dots and ToggleGroup. These bindings follow the
reviewed [Figma Main Kitchen Sink](https://www.figma.com/design/zCMN259qfgUaA5zTAXq5hQ/02.-Components?node-id=17567-9125&m=dev).
They ship through the combined styles import above. Consumers do not need a
separate override file. Digdir still supplies component behaviour; regenerating
the token package keeps its standard structure and does not generate these
component-specific rules.

### 3. Use Components

```tsx
import { Button, Alert } from '@norwegianredcross/designsystem';

export default function Page() {
  return (
    <Alert variant="success">
      Welcome to Røde Kors Design System!
    </Alert>
  );
}
```

---

## Quick Start for Vite/CRA (Simple)

For non-Next.js projects, use the combined styles import:

### 1. Install

```bash
npm install @norwegianredcross/designsystem
```

### 2. Import Styles

```typescript
// main.tsx or index.tsx
import '@norwegianredcross/designsystem/styles';
```

This single import includes base styles, theme, component CSS and Source Sans 3
(shipped with the package, no Google Fonts request).

### 3. Use Components

```tsx
import { Button, Alert } from '@norwegianredcross/designsystem';

function App() {
  return (
    <Alert variant="success">
      Welcome to Røde Kors Design System!
    </Alert>
  );
}
```

---

## Next.js Pages Router

```tsx
// pages/_app.tsx
import '@norwegianredcross/designsystem/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

---

## AI-Assisted Development

For AI assistants (Claude Code, Cursor, etc.) working with this design system, an AI Design System Guide is available:

**Direct URL:**
```
https://storybook.lunix.cloud/AI_DESIGN_SYSTEM_GUIDE.md
```

### Fetching the Guide

```bash
# macOS/Linux/Git Bash
curl -o AI_DESIGN_SYSTEM_GUIDE.md https://storybook.lunix.cloud/AI_DESIGN_SYSTEM_GUIDE.md

# Windows PowerShell
Invoke-WebRequest -Uri "https://storybook.lunix.cloud/AI_DESIGN_SYSTEM_GUIDE.md" -OutFile "AI_DESIGN_SYSTEM_GUIDE.md"
```

### Related Resources

- **Component Metadata**: https://storybook.lunix.cloud/metadata.json
- **AI Context Manifest**: https://storybook.lunix.cloud/ai-context.manifest.json
- **Design Tokens**: https://cdn.jsdelivr.net/npm/@norwegianredcross/design-tokens/design-tokens-build/theme.css
- **Repository**: https://dev.azure.com/RedCrossNorway/DesignPlatform/_git/DesignSystem (public read-only copy: https://github.com/norwegianredcross/DesignSystem)

### Published Context Bundle

The Storybook publish step ships four downstream-facing artifacts together:

- `AI_DESIGN_SYSTEM_GUIDE.md`
- `metadata.json`
- `ai-context.manifest.json`
- `CHANGELOG.md` (rendered as "Hva er nytt" by the documentation site)

The guide remains the main human-readable reference. The manifest is additive and exists so downstream repos can refresh local rules and detect drift without scraping the full guide.

---

# Contributing to the Component Library

This guide provides a set of standards and best practices for creating new components. Following these guidelines ensures that our component library remains consistent, accessible, and easy to maintain.

## Migration notes (1.3.0 / 1.4.0)

The library is pre-production, so breaking changes ship as minor versions
until it has real production consumers. The breaking changes below landed in
1.3.0 unless marked otherwise. (Note: 1.2.5 already contained the
Button prop removals, mislabeled as a patch — 1.2.5 is deprecated.)

- **Peer dependencies (1.4.0):** `@digdir/designsystemet-react` and
  `@digdir/designsystemet-css` (`^1.21.0`) are peers; React `^18.3.1 || ^19`.
  The Digdir floor moved from `~1.13.3` to `^1.21.0`, and the library now
  tracks the newest Digdir 1.x: consumers on 1.13 must upgrade
  (`npm install @digdir/designsystemet-react@^1.21 @digdir/designsystemet-css@^1.21`)
  or npm refuses to resolve the peers. Tooltip triggers keep their own
  accessible name in 1.21 (the tooltip becomes `aria-description`), and
  `ToggleGroup`'s `data-toggle-group` is deprecated in favour of `aria-label`.
- **ESM-only (1.4.0):** the CommonJS/UMD entry is removed, so
  `require('@norwegianredcross/designsystem')` now fails explicitly. It never actually worked:
  the UMD file was parsed as ESM (the package is `"type": "module"`), and the
  underlying Digdir library's own CJS entry is broken as well. Use `import`
  (every bundler and modern Node setup).
- **`import '@norwegianredcross/designsystem/styles'` now delivers everything:** Digdir base,
  the Røde Kors theme, the component CSS and Source Sans 3.
- **Button:** `shape`/`pill` and `soft` props are removed — styling comes
  from the design tokens.
- **CrossCorner is removed:** use `GraphicElement` with `shape="angle"`.
- **Footer:** `showCrossCorners` is renamed `showGraphicElements`.
- **Alert:** `title` renders visibly (previously a native tooltip); pass
  `titleLevel` (2–6) when it should be a real heading.
- **DateInput:** invalid input is no longer silently rewritten (45 stays 45);
  a built-in inline validation message appears on blur (`showValidationMessage`
  to opt out), with `minDate`/`maxDate` (default 1900–2100) and an
  `onValidationChange` callback. A label (or `aria-label`/`aria-labelledby`)
  is required at type level.
- **DatePicker:** days outside the month are disabled for all input methods;
  the calendar is a real ARIA grid with arrow-key navigation.

## Getting Started (for Contributors)

Follow these steps to get the local development environment running. All commands should be run from the root of the project.

```bash
# 1. Install dependencies (npm; the lockfile is package-lock.json)
npm ci

# 2. Build the library
npm run build

# 3. Start Storybook, the component development and test workbench
npm run storybook
```

Node 24 (see `.nvmrc`). The browser tests need Chromium, Firefox and WebKit: `npx playwright install chromium firefox webkit`. On Linux, add `--with-deps` to install their system dependencies.

## Testing

Testing i dette repoet følger Norges Røde Kors' testpolicy og overordnede teststrategi. Se **[TESTING.md](./TESTING.md)** for testplanen: testnivåer, risikobasert prioritering, kriterier for «klar til produksjon», feilhåndtering og rapportering. Kort versjon:

- Stories er testene: hver offentlig komponent har en assertion-bærende kontraktstory i ekte nettleser, og komponenter med brukeradferd har risikobaserte interaksjonstester. Automatisk WCAG-sjekk inngår i begge nivåer (brudd feiler bygget).
- Full regresjon (`npm test`) kjøres på hver pull request og hver push til `main` — ingenting merges eller publiseres utestet.
- Feil meldes som Bug i Azure Boards (DesignPlatform); alvorlighetsgrad og reproduksjonssteg er påkrevd.

## Core Principles

Every component we build should adhere to these core principles:

1.  **Accessibility (A11y):** Components must be usable by everyone, including people with disabilities. This means proper ARIA attributes, keyboard navigation, and semantic HTML.
2.  **Reusability:** Components should be generic enough to be used in multiple contexts without modification.
3.  **Consistency:** Components should follow our established design tokens (colors, spacing, typography) and have a consistent API and structure.
4.  **Documentation:** Public usage guidance belongs in the documentation portal. Every component must also have executable Storybook examples for development and testing; retain existing MDX references until their portal replacements are available.

## When to Create a New Component

Before you start coding, determine what kind of component you need. Most of our needs fall into one of three categories:

1.  **Wrapped Component (Simple):**
    *   **What it is:** A component that directly wraps and re-exports a component from `@digdir/designsystemet-react` with no modifications.
    *   **When to use:** When the base Digdir component meets our needs perfectly, but we want to include it in our own library for a consistent import source.
    *   **Example:** The `Divider` component is a perfect example of this.

2.  **Wrapped Component (with Style Overrides):**
    *   **What it is:** A wrapped Digdir component where we apply custom CSS to tweak its appearance to better match Røde Kors's specific design language.
    *   **When to use:** When a Digdir component is functionally correct but needs visual adjustments (e.g., different icons, border radius, padding).
    *   **Example:** The shared overrides of Digdir classes in `src/rk-theme.css`, such as `.ds-field`, `.ds-popover` and `.ds-suggestion`.

3.  **Custom Component (from Scratch):**
    *   **What it is:** A completely new component built when no existing Digdir component meets our requirements.
    *   **When to use:** For unique UI patterns or functionality not covered by the base library.
    *   **Example:** The `DateInput` component is a custom component with its own state, logic, and styling.

## Component File Structure

To maintain consistency, every new component should follow this file structure. Create a new folder under `src/components/` with the component's `PascalCase` name.

```text
src/
└── components/
    └── MyNewComponent/
        ├── index.tsx                   // The component and its props type
        ├── MyNewComponent.stories.tsx  // Executable examples and interaction tests
        ├── MyNewComponent.mdx          // Storybook docs page
        └── styles.module.css           // Scoped CSS (only for custom components)
```

Export the component and its props type from `src/index.ts`. Stories are the tests (`npm test`); add a `.test.ts` file only for what stories cannot cover, such as progressive enhancement.

## Coding Guidelines

### 1. Component Logic (`index.tsx`)

*   **TypeScript First:** All components must be written in TypeScript. Define a `Props` interface for your component, extending from the base HTML element or Digdir component props if applicable.
*   **Forward Refs:** Always use `React.forwardRef` to allow parent components to get a `ref` to the underlying DOM element.
*   **Accessibility is Mandatory:**
    *   Use semantic HTML (`<button>`, `<label>`, `<nav>`).
    *   Ensure all interactive elements are keyboard-focusable and operable.
    *   Provide `aria-label` for icon-only buttons or elements where the text label is not visible.
    *   Use `aria-invalid`, `aria-describedby`, etc., to communicate state to assistive technologies.
*   **Controlled vs. Uncontrolled:** If your component has state (like an input), it should support both controlled (`value` + `onChange`) and uncontrolled (`defaultValue`) patterns.
*   **Props Naming:** Use `data-*` attributes for styling variants (e.g., `data-size`, `data-color`) to align with the patterns in our existing components.

### 2. Styling (`styles.module.css`)

*   **CSS Modules:** For **custom components**, all styles must be placed in a `styles.module.css` file. This scopes class names locally and prevents global style conflicts.
*   **Design Tokens:** Always use our design system tokens (`var(--ds-...)`) for colors, spacing, fonts, etc. Do not use hardcoded values (e.g., `#FFF`, `16px`).
*   **Overriding Wrapped Components:** Shared overrides of Digdir classes (`.ds-*`) go in `src/rk-theme.css`. Keep the selectors simple so specificity does not grow unnecessarily.

### 3. Workbench stories (`MyNewComponent.stories.tsx`)

Your Storybook file is the executable development and test reference. Keep its examples clear and representative; maintain authored public guidance in the documentation portal.

*   **`meta` Object:** Define the component's title, component reference, and `tags: ['autodocs']` to enable automatic documentation.
*   **`argTypes`:** Document every single prop. Provide a `description`, `control` type (e.g., `select`, `boolean`, `text`), and `options` if applicable. This powers the interactive controls in Storybook.
*   **Create Multiple Stories:** Create a separate story for each key state and variant of your component (e.g., `Default`, `Disabled`, `WithError`, `WithIcon`).

## Contribution Process

### 1. Create a Pull Request (PR)

1.  **Create a Branch:** Pull the latest changes from the `main` branch and create a new feature branch: `git checkout -b feat/my-new-component`.

2.  **Open a Draft PR:** As soon as you start, open a **draft** pull request in Azure DevOps. This prevents duplicate work and allows others to see what you're working on.

3.  **Commit Your Changes:** As you work, make small, logical commits.

4.  **Ready for Review:** When development is complete and all automated checks are passing, mark the PR as "Ready for review" and request a review from the design system maintainers.


## Using NAV/Aksel Icons

This library is designed to work seamlessly with the official icon set from NAV/Aksel. Since 1.4.0, `@navikt/aksel-icons` ships as a regular dependency of `@norwegianredcross/designsystem` — no separate install needed. To use the icons directly in your own code:

### Install (only for direct use in your app)

```bash
# npm
npm install @navikt/aksel-icons

# yarn
yarn add @navikt/aksel-icons

# pnpm
pnpm add @navikt/aksel-icons
```

### Import and usage

Icons are exported as named React components. Import only the icons you need (tree‑shakable):

```tsx
import { AirplaneIcon, NewspaperIcon } from '@navikt/aksel-icons';
import { Button, Tag } from '@norwegianredcross/designsystem';

export function IconsExample() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {/* Icon + text: hide icon from AT */}
      <Button>
        <AirplaneIcon aria-hidden style={{ marginRight: 'var(--ds-size-1)' }} />
        Fly
      </Button>

      {/* Icon inside Tag */}
      <Tag data-color="info">
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <NewspaperIcon aria-hidden style={{ marginRight: 'var(--ds-size-1)' }} />
          Ny
        </span>
      </Tag>
    </div>
  );
}
```

### Accessibility guidance

- Icon + visible text: set `aria-hidden` on the icon so screen readers don't announce it twice.
- Icon‑only triggers (e.g., a button): add a descriptive `aria-label` to the trigger, keep the icon `aria-hidden`.
- Color: icons inherit `currentColor`; use the component's variant/color to control it (e.g., button variants, tag colors).
- Size: set `fontSize` (e.g., `fontSize="1.25rem"`) or inline style (e.g., `style={{ fontSize: '1.25rem' }}`).

### Performance

Use named imports from `@navikt/aksel-icons` to keep bundles small—unused icons are tree‑shaken by modern bundlers.

## Organization package release

The first scoped releases can be published locally by an organization member
with npm 2FA enabled. Publish `@norwegianredcross/design-tokens@1.0.50` first,
then resolve that registry dependency and run the component release checks.
Publish the reviewed component commit with `npm publish --access public`.
The scoped component package starts at the existing `1.5.0` version; subsequent
releases follow the normal patch/minor/major sequence. Existing unscoped tags and
versions must not be replaced. Keep the first scoped release's commit SHA for
traceability.

The release pipeline is `azure-pipelines/release.yml`. It publishes the scoped
package using the secret `NPM_TOKEN` in the `npm-publish` variable group. The
token is a granular access token from the shared npm account
`integration-platform`, limited to the two `@norwegianredcross` packages; Azure
Pipelines cannot be an npm trusted publisher. The old unscoped packages no
longer accept tokens. The normal patch/minor/major version sequence continues.

The migration lockfile resolves `@norwegianredcross/design-tokens@1.0.50` from
the public npm registry. Use `npm ci` for the release checkout, followed by lint,
token checks, typecheck, the full test suite, package and Storybook builds, and
`npm run test:packaging`. Local tarball testing alone does not replace a clean
installation of the registry dependencies.
