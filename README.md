# Røde Kors Design System Component Library (Norwegian Red Cross)

## Live Documentation URL

[https://norwegianredcross.github.io/DesignSystem/#](https://norwegianredcross.github.io/DesignSystem/#)

## Overview

Welcome to the Røde Kors Design System! This repository contains a library of reusable UI components built with React, specifically tailored for Norwegian Red Cross digital projects.

It's developed leveraging the foundational components from Digdir's Designsystemet. This approach ensures a unified and recognizable visual identity across all applications for the Norwegian Red Cross. The system is pre-configured with the official Røde Kors brand theme, which is provided via a dedicated design token package.

The primary goal is to ensure brand consistency, improve development efficiency, and maintain high accessibility standards across all Røde Kors applications.

## Available Components

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

## Consuming This Library (For Application Developers)

To use the Røde Kors Design System in your Next.js (or any React) application:

### 1. Installation

Install the necessary npm packages for your project. You will need three packages: the component library itself (`rk-designsystem`), the base styles from Digdir, and the Røde Kors theme package (`rk-design-tokens`).

```bash
# npm
npm install rk-designsystem @digdir/designsystemet-css rk-design-tokens

# yarn
yarn add rk-designsystem @digdir/designsystemet-css rk-design-tokens

# pnpm
pnpm add rk-designsystem @digdir/designsystemet-css rk-design-tokens
```

**Note:** You do not need to install `@digdir/designsystemet-react` separately, as all required components are included within the `rk-designsystem` package.

### 2. Including Styles (CSS)

For the components to be styled correctly, you must import the stylesheets at the highest level of your application, for instance, in your `layout.tsx` (for Next.js App Router) or `_app.tsx` (for Next.js Pages Router).

**Crucial Order:** It's vital that the base stylesheet (`@digdir/designsystemet-css`) is loaded **before** the Røde Kors theme file (`rk-design-tokens`). This ensures our theme's tokens can correctly override the default values.

#### Example for Next.js (App Router - `src/app/layout.tsx`):

```tsx
import './globals.css'; // Your own global styles (if any)
import '@digdir/designsystemet-css/index.css'; // Base stylesheet for components
import 'rk-design-tokens/design-tokens-build/theme.css'; // Røde Kors theme

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### Example for Next.js (Pages Router - `pages/_app.tsx`):

```tsx
import '../styles/globals.css'; // Your own global styles (if any)
import '@digdir/designsystemet-css/index.css'; // Base stylesheet for components
import 'rk-design-tokens/design-tokens-build/theme.css'; // Røde Kors theme
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### 3. Adding the Font

The design system uses **Source Sans 3** font. Add the following to your HTML `<head>` or root layout:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
```

#### For Next.js (App Router - `src/app/layout.tsx`):

```tsx
import './globals.css';
import '@digdir/designsystemet-css/index.css';
import 'rk-design-tokens/design-tokens-build/theme.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

The CSS variable `--ds-font-family` from `rk-design-tokens` will automatically use this font.

### 4. Using Components

Once the stylesheets are included, you can start importing and using components in your project. All components you need are available directly from the `rk-designsystem` package.

#### 4.1 Import and Use Røde Kors Design System Components

Import components directly from the `rk-designsystem` package:

```tsx
import { Alert } from 'rk-designsystem'; // Import necessary components

function MyComponent() {
  return (
    <>
      <Alert variant="info" onClose={() => console.log('Alert closed!')}>
        This is an informational message from the Red Cross Design System.
      </Alert>
    </>
  );
}
```

#### 4.2 Example Usage in a Next.js Page

Here's an example of how to use multiple Alert components from the Røde Kors Design System within a Next.js page/component:

```tsx
'use client'; // Remember 'use client' for interactive components in App Router

import React from 'react';
import { Alert } from 'rk-designsystem'; // Import the components you need

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Røde Kors Design System Example
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        {/* Røde Kors Design System Alerts */}
        <Alert variant="success">
          <p>
            Welcome! This message is styled with the official Røde Kors theme.
          </p>
        </Alert>

        <Alert variant="warning" className="mt-4">
          <p>
            Important information using the official Røde Kors theme.
          </p>
        </Alert>
      </section>

      {/* More Røde Kors components can be added here as needed */}
    </div>
  );
}
```

The appearance of all components is fully controlled by the `rk-design-tokens` package. To receive any visual updates to the brand theme (like a new primary color), simply update the package to its latest version:

```bash
npm update rk-design-tokens
```

---

## AI-Assisted Development

For AI assistants (Claude Code, Cursor, etc.) working with this design system, an AI Design System Guide is available:

**Direct URL:**
```
https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
```

### Fetching the Guide

```bash
# macOS/Linux/Git Bash
curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md

# Windows PowerShell
Invoke-WebRequest -Uri "https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md" -OutFile "AI_DESIGN_SYSTEM_GUIDE.md"
```

### Related Resources

- **Component Metadata**: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
- **Design Tokens**: https://norwegianredcross.github.io/design-tokens/theme.css
- **GitHub Repository**: https://github.com/norwegianredcross/DesignSystem

---

# Contributing to the Component Library

This guide provides a set of standards and best practices for creating new components. Following these guidelines ensures that our component library remains consistent, accessible, and easy to maintain.

## Getting Started (for Contributors)

Follow these steps to get the local development environment running. All commands should be run from the root of the project.

```bash
# 1. Install dependencies
pnpm i

# 2. Build all packages
pnpm build

# 3. Start the local Storybook server
pnpm storybook
```

## Core Principles

Every component we build should adhere to these core principles:

1.  **Accessibility (A11y):** Components must be usable by everyone, including people with disabilities. This means proper ARIA attributes, keyboard navigation, and semantic HTML.
2.  **Reusability:** Components should be generic enough to be used in multiple contexts without modification.
3.  **Consistency:** Components should follow our established design tokens (colors, spacing, typography) and have a consistent API and structure.
4.  **Documentation:** Every component must be documented in Storybook to make it discoverable and easy for other developers to use.

## When to Create a New Component

Before you start coding, determine what kind of component you need. Most of our needs fall into one of three categories:

1.  **Wrapped Component (Simple):**
    *   **What it is:** A component that directly wraps and re-exports a component from `@digdir/designsystemet-react` with no modifications.
    *   **When to use:** When the base Digdir component meets our needs perfectly, but we want to include it in our own library for a consistent import source.
    *   **Example:** The `Buttons` component is a perfect example of this.

2.  **Wrapped Component (with Style Overrides):**
    *   **What it is:** A wrapped Digdir component where we apply custom CSS to tweak its appearance to better match Røde Kors's specific design language.
    *   **When to use:** When a Digdir component is functionally correct but needs visual adjustments (e.g., different icons, border radius, padding).
    *   **Example:** The `Alert` component, which uses `composes` in its CSS to inherit base styles and then applies its own overrides.

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
        ├── index.ts                 // Public API - exports the component and props
        ├── MyNewComponent.tsx       // The React component logic and JSX
        ├── MyNewComponent.stories.tsx // Storybook stories for documentation
        ├── styles.module.css        // Scoped CSS (only for custom components)
        └── MyNewComponent.test.tsx  // (Optional but Recommended) Unit tests
```

## Coding Guidelines

### 1. Component Logic (`MyNewComponent.tsx`)

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
*   **Overriding Wrapped Components:** For **wrapped components**, use a standard CSS file. Use the `@layer` and `composes` keywords to extend base Digdir styles without increasing CSS specificity unnecessarily.

### 3. Documentation (`MyNewComponent.stories.tsx`)

Your Storybook file is the official documentation. It must be clear and comprehensive.

*   **`meta` Object:** Define the component's title, component reference, and `tags: ['autodocs']` to enable automatic documentation.
*   **`argTypes`:** Document every single prop. Provide a `description`, `control` type (e.g., `select`, `boolean`, `text`), and `options` if applicable. This powers the interactive controls in Storybook.
*   **Create Multiple Stories:** Create a separate story for each key state and variant of your component (e.g., `Default`, `Disabled`, `WithError`, `WithIcon`).

## Contribution Process

### 1. Create a Pull Request (PR)

1.  **Create a Branch:** Pull the latest changes from the `main` branch and create a new feature branch: `git checkout -b feat/my-new-component`.

2.  **Open a Draft PR:** As soon as you start, open a **draft** pull request on GitHub. This prevents duplicate work and allows others to see what you're working on.

3.  **Commit Your Changes:** As you work, make small, logical commits.

4.  **Ready for Review:** When development is complete and all automated checks are passing, mark the PR as "Ready for review" and request a review from the design system maintainers.


## Using NAV/Aksel Icons

This library is designed to work seamlessly with the official icon set from NAV/Aksel.

### Install

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
import { Button, Tag } from 'rk-designsystem';

export function IconsExample() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {/* Icon + text: hide icon from AT */}
      <Button>
        <AirplaneIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
        Fly
      </Button>

      {/* Icon inside Tag */}
      <Tag data-color="info">
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <NewspaperIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
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
