# Røde Kors Design System - Komplett Dokumentasjon

Dette dokumentet inneholder all dokumentasjon fra Røde Kors Design System prosjektet, samlet ordrett fra kildene.

---

# README.md

# Røde Kors Design System Component Library (Norwegian Red Cross)

## Live Storybook URL

[https://norwegianredcross.github.io/DesignSystem/storybook/?path=/docs/welcome--docs](https://norwegianredcross.github.io/DesignSystem/storybook/?path=/docs/welcome--docs)

## Overview

Welcome to the Røde Kors Design System! This repository contains a library of reusable UI components built with React, specifically tailored for Norwegian Red Cross digital projects.

It's developed leveraging the foundational components from Digdir's Designsystemet. This approach ensures a unified and recognizable visual identity across all applications for the Norwegian Red Cross. The system is pre-configured with the official Røde Kors brand theme, which is provided via a dedicated design token package.

The primary goal is to ensure brand consistency, improve development efficiency, and maintain high accessibility standards across all Røde Kors applications.

Storybook serves as the interactive documentation and development environment for viewing and testing these components.

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

### 3. Using Components

Once the stylesheets are included, you can start importing and using components in your project. All components you need are available directly from the `rk-designsystem` package.

#### 3.1 Import and Use Røde Kors Design System Components

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

#### 3.2 Example Usage in a Next.js Page

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

---

# README_AI_GUIDE.md

# AI Design System Guide - Quick Start

This repository includes a comprehensive guide for AI assistants to use when working with the Røde Kors Design System and Figma MCP.

## Quick Access

**Direct URL:**
```
https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
```

## Fetching the Guide

### Using curl (macOS/Linux/Git Bash)
```bash
curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
```

### Using PowerShell (Windows)
```powershell
Invoke-WebRequest -Uri "https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md" -OutFile "AI_DESIGN_SYSTEM_GUIDE.md"
```

### Using the provided scripts
```bash
# macOS/Linux
chmod +x fetch-ai-guide.sh
./fetch-ai-guide.sh

# Windows PowerShell
.\fetch-ai-guide.ps1
```

## For AI Assistants

### Claude Code
1. Fetch the guide using curl
2. Reference it in your prompts: "Using AI_DESIGN_SYSTEM_GUIDE.md, implement..."

### Cursor
1. Fetch the guide using curl or the script
2. Reference it in chat: "@AI_DESIGN_SYSTEM_GUIDE.md implement..."
3. Or add to .cursorrules for automatic reference

### .cursorrules Example
```
When working with Figma designs or the Røde Kors Design System:
1. Fetch: curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
2. Reference component metadata: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
3. Use design tokens: https://norwegianredcross.github.io/design-tokens/theme.css
4. Always use existing components from rk-designsystem
5. Never use hardcoded values - always use design tokens (var(--ds-*))
```

## What's Included

- Complete component API reference
- Design tokens documentation
- Figma MCP integration guide
- Component mapping from Figma to code
- Best practices and examples
- Troubleshooting guide

## Related Resources

- **Storybook**: https://norwegianredcross.github.io/DesignSystem/storybook/
- **Component Metadata**: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
- **Design Tokens**: https://norwegianredcross.github.io/design-tokens/theme.css
- **GitHub Repository**: https://github.com/norwegianredcross/DesignSystem

---

# Welcome.mdx (Storybook Welcome Page)

# Røde Kors Design System

#### Gjenbrukbare React‑komponenter basert på Digdirs Designsystemet, forhåndskonfigurert med Røde Kors sitt tema. Målet er enhetlig uttrykk, høy tilgjengelighet og effektiv utvikling.

---

## Kom i gang

### Installasjon

```bash
# npm
npm install rk-designsystem @digdir/designsystemet-css rk-design-tokens

# yarn
yarn add rk-designsystem @digdir/designsystemet-css rk-design-tokens

# pnpm
pnpm add rk-designsystem @digdir/designsystemet-css rk-design-tokens
```

### Inkluder stilark (riktig rekkefølge)

```tsx
// Next.js App Router (src/app/layout.tsx)
import '@digdir/designsystemet-css/index.css';            // 1) Base
import 'rk-design-tokens/design-tokens-build/theme.css';  // 2) Røde Kors tema
```

### Bruke komponenter

```tsx
import { Alert } from 'rk-designsystem';

export function Example() {
  return (
    <Alert variant="info">
      Dette er et varsel fra Røde Kors Design System.
    </Alert>
  );
}
```

---

## Prinsipper

#### Tilgjengelighet, gjenbruk og konsistens. Komponentene følger semantisk HTML, tastaturnavigasjon og design tokens fra temaet.

---

## Tips

- Inkluder alltid base‑CSS før tema‑fila.
- Bruk `data-size` og `data-color` for visuelle varianter.
- Foretrekk kontrollerte mønstre når du trenger programmatisk styring (`value`/`onChange`).

---

## Ikoner (NAV/Aksel)

### Installasjon

```bash
npm install @navikt/aksel-icons
```

### Bruk

```tsx
import { AirplaneIcon } from '@navikt/aksel-icons';
import { Button } from 'rk-designsystem';

<Button>
  <AirplaneIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
  Fly
</Button>
```

#### Tilgjengelighet
- Ikon + tekst: sett `aria-hidden` på ikonet
- Kun ikon: legg `aria-label` på triggeren (knappen), og behold ikonet `aria-hidden`
- Størrelse: bruk `fontSize` eller `style={{ fontSize: '1.25rem' }}`

---

# KOMPONENT-DOKUMENTASJON

---

# Alert

#### `Alert` brukes for å vise viktig informasjon som du ønsker at brukeren skal legge ekstra merke til. Komponenten er visuelt tydelig og designet for å trekke oppmerksomhet uten å være forstyrrende. Teksten i varselet bør være kort, konsis og tydelig.

## Bruk

```tsx
import { Alert } from 'rk-designsystem';

<Alert data-color="info">
  Dette er et varsel som vises for å gi brukeren viktig informasjon.
</Alert>;
```

#### `Alert` brukes til å kommunisere status, advarsler eller viktige hendelser i grensesnittet, uten at brukeren nødvendigvis må gjøre noe. Forskjellen på variantene ligger primært i fargen og det visuelle uttrykket.

## Kodeeksempler

### Informasjon
#### Bruk info når du ønsker å formidle nøytral og nyttig informasjon.

### Suksess
#### Bruk success for å bekrefte at brukeren har fullført en oppgave eller at noe gikk som forventet.

### Advarsel
#### Bruk warning for å varsle brukeren om et potensielt problem eller behov for handling.

### Feilmelding
#### Bruk danger for å informere brukeren om en alvorlig feil eller hindring.

## Ulike mønstre

### Uten tittel
#### Hvis meldingen er kort og kun består av én setning, er det ofte bedre å ikke inkludere `title`‑prop.

### Med lenke
#### Varsler kan også inneholde lenker dersom det hjelper brukeren med å løse en oppgave. Unngå lenker som tar brukeren ut av konteksten med mindre det er nødvendig.

## Størrelser

#### Alert kommer i forskjellige størrelser tilpasset ulike flater.

### Liten størrelse
### Stor størrelse

## Retningslinjer

#### Bruk Alert med omtanke – for mange varsler kan føre til at brukeren slutter å merke seg dem. Et varsel bør alltid ha en klar hensikt og et tydelig språk.

#### Gjør dette

 * Formidl kun viktig informasjon.
 * Bruk korte, forståelige setninger.
 * Sørg for god kontrast mellom tekst og bakgrunn.

#### Unngå dette

*  Flere varsler etter hverandre.
*  Varsler som erstatter vanlig sideinnhold.
*  Varsler for skjemavalidering – bruk komponentens feilmeldingsfelt isteden.

### Tekst

#### En god alert‑tekst bør:

* Fortelle hva som skjedde. - "Kunne ikke koble til konto."
* Forklare hvorfor det skjedde. - "På grunn av tekniske problemer."
* Foreslå løsning. - "Prøv igjen senere."

##### Vær tydelig og bevisst på tone og språk. Unngå tekniske detaljer brukeren ikke trenger.

## Tilgjengelighet

Varsler som oppstår dynamisk må håndteres riktig slik at skjermlesere kan fange dem opp. Dette gjøres ved å bruke live regions med `role="alert"` eller `role="status"`.

For statiske varsler trengs ingen ARIA‑attributter.

For dynamiske varsler skal `role="alert"` ligge på containere som omslutter Alert, ikke på selve komponenten.

## CSS‑variabler

#### Her er tilgjengelige CSS‑variabler for Alert, slik at du kan tilpasse farger og spacing ved behov.

*  `--alert-background-color`
*  `--alert-border-color`
*  `--alert-text-color`
*  `--alert-spacing`
*  `--alert-border-radius`

---

# Avatar

#### `Avatar` brukes for å representere en bruker eller en enhet. Den kan vise et bilde, initialer, eller et standard-ikon som en fallback.

## Bruk

```tsx
import { Avatar } from 'rk-designsystem';

// Med bilde
<Avatar aria-label="Kari Nordmann">
  <img src="/sti/til/bilde.png" alt="" />
</Avatar>

// Med initialer
<Avatar aria-label="Ola Nordmann">ON</Avatar>

// Standard (fallback)
<Avatar aria-label="Ukjent Bruker" />
```

#### Komponenten er designet for å være fleksibel. Den prioriterer `children` (bilde eller initialer) og faller tilbake til et standard person-ikon hvis ingenting er oppgitt.

## Innholdstyper

#### `Avatar` kan fylles på tre måter, avhengig av hvilken informasjon som er tilgjengelig.

### Med bilde
#### Dette er den foretrukne varianten. Et `<img>`-element sendes inn som `children` for å vise brukerens bilde.

### Med initialer
#### Hvis et bilde ikke er tilgjengelig, kan initialer sendes som tekst-`children`. Dette er en god fallback for å fortsatt identifisere brukeren.

### Standard (Fallback)
#### Hvis verken bilde eller initialer er oppgitt, vil komponenten vise et standard person-ikon.

## Varianter

### Form
#### Komponenten er sirkulær som standard. Den kan også gjøres firkantet ved å sette `variant="square"`.

### Størrelser og farger
#### `Avatar` kommer i flere størrelser (`xs` til `lg`) og farger. Disse styres av `data-size` og `data-color` props.

## Retningslinjer

#### Bruk `Avatar` for å bygge gjenkjennelse og personliggjøre et grensesnitt.

#### Gjør dette
 * **Bruk `aria-label`:** Sørg for at alle avatarer har et `aria-label` som identifiserer personen (f.eks. "Ola Nordmann").
 * **Bruk tom `alt`:** Når du bruker et `<img>` inni Avataren, skal det ha `alt=""`. Skjermleseren får navnet fra `aria-label` på selve Avataren.
 * **Bruk initialer:** Bruk initialer som en god, identifiserbar fallback når bilder mangler.

#### Unngå dette
* **Ikke bruk for ikoner:** Ikke bruk `Avatar` for å vise generelle ikoner som ikke representerer en person eller enhet.
* **Ikke bruk interaktive elementer:** En `Avatar` skal ikke være klikkbar i seg selv. Hvis den skal trigge en handling (som å åpne en profil), plasser den inni en `Button` eller en lenke.

## Tilgjengelighet

Tilgjengelighet er kritisk for `Avatar` siden den representerer informasjon visuelt.

* **Alltid `aria-label`:** En `Avatar` må *alltid* ha et `aria-label` som beskriver hvem den representerer (f.eks. `aria-label="Kari Nordmann"`).
* **Tom `alt`-attributt:** Når et `<img>`-element brukes som `children`, **må** det ha en tom `alt=""`. Dette forhindrer at skjermlesere leser innholdet to ganger (én gang fra `alt`-teksten og én gang fra `aria-label`).

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Avatar`, slik at du kan tilpasse farger og størrelser ved behov.

* `--avatar-background-color`
* `--avatar-text-color`
* `--avatar-size`
* `--avatar-font-size`
* `--avatar-border-radius`

---

# Badge

#### `Badge` er en ikke-interaktiv komponent som brukes for å vise status eller antall (f.eks. uleste varsler). Den er designet for å trekke oppmerksomhet til et element uten å være forstyrrende.

## Bruk

```tsx
import { Badge, BadgePosition } from from 'rk-designsystem';

// Standard badge med tall
<Badge count={5} />

// Badge brukt som status-prikk
<Badge data-color="success" />

// Flytende over et annet element
<BadgePosition placement="top-right">
  <Badge count={3} data-color="danger" />
  <InboxIcon />
</BadgePosition>
```

#### `Badge` brukes til å kommunisere status eller antall. `BadgePosition` er en hjelpekomponent som brukes for å plassere en `Badge` flytende over et annet element, typisk et ikon eller en knapp.

## Kodeeksempler

### Med tall
#### Bruk `count` propen for å vise et tall. Dette er vanlig for å vise antall uleste meldinger, varsler eller oppgaver.

### Med maks antall
#### Bruk `maxCount` for å sette et tak på tallet som vises. Tall over dette vil vises som `maxCount+`.

### Kun status
#### Uten `count` propen vil komponenten vises som en liten prikk. Dette er nyttig for å indikere status, som "online" (suksess) eller "feil" (danger).

### Farger og varianter
#### `Badge` støtter `data-color` for å endre farge og `variant` ('base' eller 'tinted') for å endre bakgrunnsstil.

## Ulike mønstre

### Flytende over element
#### Ved å wrappe `Badge` og elementet den skal festes til i en `BadgePosition`, kan du plassere den i et hjørne.

### På ikoner
#### Et svært vanlig bruksområde er å plassere en badge på en ikon-knapp for å vise varsler.

### Plasseringer
#### `BadgePosition` lar deg kontrollere plasseringen med `placement` propen. Du kan velge `top-right`, `top-left`, `bottom-right`, eller `bottom-left`.

## Størrelser

#### Badge kommer i forskjellige størrelser (`sm`, `md`, `lg`) som styres med `data-size`. Standardstørrelsen er `md`.

## Retningslinjer

#### Bruk `Badge` for å trekke oppmerksomhet mot status, varsler eller tall.

#### Gjør dette

 * Bruk for tall som viser antall nye meldinger, varsler eller oppgaver.
 * Bruk som små statusindikatorer (uten tall) for å vise status (f.eks. aktiv, borte, feil).
 * Hold det enkelt. `Badge` skal være en rask, visuell indikator.

#### Unngå dette

* Bruk for tekster. Bruk `Tag` i stedet.
* Bruk for interaktive handlinger. Bruk `Chip` eller `Button` i stedet.
* Overdreven bruk. For mange badges på én side kan virke rotete og miste sin effekt.

### Tekst

#### Denne komponenten er ikke ment for tekst. Hvis du trenger å vise ord eller korte fraser, bør du bruke `Tag`-komponenten i stedet.

## Tilgjengelighet

Når en badge brukes til å kommunisere informasjon, må den informasjonen også være tilgjengelig for skjermlesere.

* **Når den viser antall:** Elementet badgen er festet til bør inkludere antallet i sin tilgjengelige tekst.
    * *Eksempel:* En knapp med en badge som viser "3" bør ha `aria-label="Innboks (3 nye meldinger)"`.
* **Når den viser status:** Badgen bør ha en skjult tekst eller `aria-label` som beskriver statusen.
    * *Eksempel:* En status-prikk bør ha en `span` inni seg med `className="sr-only"` (screenreader-only) som sier "Status: Aktiv".

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Badge`, slik at du kan tilpasse utseendet ved behov.

* `--badge-background-color`
* `--badge-text-color`
* `--badge-font-size`
* `--badge-size`
* `--badge-padding-inline`
* `--badge-border-radius`
* `--badge-position-translate`

---

# Breadcrumbs

#### `Breadcrumbs` er en navigasjonskomponent som viser brukerens posisjon i et nettstedshierarki. Den hjelper brukeren å forstå hvor de er og å navigere tilbake til foreldresider.

## Bruk

```tsx
import {
  Breadcrumbs,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink,
} from '@rk-designsystem';

// Kun sti
<Breadcrumbs aria-label="Du er her:">
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

// Kun tilbake-knapp
<Breadcrumbs>
  <BreadcrumbsLink aria-label="Tilbake til nivå 2" href="/niva-2">
    Nivå 2
  </BreadcrumbsLink>
</Breadcrumbs>

// Responsiv (begge deler)
<Breadcrumbs aria-label="Du er her:">
  <BreadcrumbsLink aria-label="Tilbake til nivå 2" href="/niva-2">
    Nivå 2
  </BreadcrumbsLink>
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
```

#### Komponenten består av en `Breadcrumbs`-container som kan holde en `BreadcrumbsList` (for en full sti) eller en enkel `BreadcrumbsLink` (for en "tilbake"-knapp). Den kan også håndtere begge deler for responsiv oppførsel, hvor "tilbake"-knappen vises på mobil og den fulle stien på større skjermer.

## Kodeeksempler

### Kun sti
#### Viser en fullstendig hierarkisk sti. Dette er standardmønsteret for desktop.

### Kun tilbake-knapp
#### Viser en enkel "tilbake"-lenke. Dette mønsteret kan brukes alene i enkle flyter eller som mobil-fallback.

### Sti og tilbake-knapp (Responsiv)
#### Denne varianten kombinerer de to. `Breadcrumbs`-komponenten vil typisk håndtere logikken for å vise "tilbake"-knappen på smale skjermer og stien på brede skjermer.

## Størrelser og Farger

#### Komponenten støtter `data-size` og `data-color` props for å justere utseendet og tilpasse den til omgivende innhold.

## Retningslinjer

#### `Breadcrumbs` bør brukes når det er tre eller flere nivåer i et hierarki for å hjelpe brukeren med å orientere seg.

#### Gjør dette
 * **Plassering:** Plasser komponenten øverst på siden, under hovednavigasjonen, men over sidetittelen.
 * **Korte titler:** Bruk korte og tydelige titler som samsvarer med sidenavnene eller meny-titlene.
 * **Gjeldende side:** Sørg for at den siste lenken representerer den nåværende siden. Denne er vanligvis ikke klikkbar.

#### Unngå dette
* **Ikke for lineære flyter:** Ikke bruk `Breadcrumbs` for lineær navigasjon (f.eks. en "stepper" i et flertrinnsskjema).
* **Ikke på toppnivå:** Ikke bruk den på sider som er på toppnivå (f.eks. forsiden).

## Tilgjengelighet

En `Breadcrumbs`-komponent er wrappet i et `<nav>`-element og må ha et `aria-label` (f.eks. "Du er her") for å identifisere den som en navigasjons-region for skjermlesere.

* **Gjeldende side:** Det siste elementet i stien representerer den nåværende siden. Hvis det er en lenke (som i våre eksempler), er det god praksis å legge til `aria-current="page"` for å tydelig indikere dette for hjelpeteknologi.
* **Tastaturnavigasjon:** Alle klikkbare lenker i stien må være fullt navigerbare og klikkbare med tastatur.

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Breadcrumbs`.

* `--breadcrumbs-spacing`
* `--breadcrumbs-separator-color`
* `--breadcrumbs-link-color`
* `--breadcrumbs-link-text-decoration`
* `--breadcrumbs-link-color-hover`
* `--breadcrumbs-current-page-color`

---

# Button

#### `Button` brukes for å la brukere utføre handlinger, som å sende inn et skjema, avbryte en prosess, eller bekrefte en handling.

## Bruk

```tsx
import { Button } from 'rk-designsystem';
import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';

// Standard knapp
<Button variant="primary">Lagre endringer</Button>

// Sekundær knapp
<Button variant="secondary">Avbryt</Button>

// Knapp med ikon
<Button variant="tertiary" data-color="danger">
  <TrashIcon aria-hidden />
  Slett
</Button>

// Ikon-knapp (krever aria-label)
<Button icon aria-label="Legg til ny">
  <PlusCircleIcon aria-hidden />
</Button>
```

#### Knappen er den mest grunnleggende interaktive komponenten. Den har flere varianter (`variant`), farger (`data-color`) og størrelser (`data-size`) for å passe ulike kontekster og hierarkier.

## Kodeeksempler

### Varianter
#### Bruk `variant` ('primary', 'secondary', 'tertiary') for å gi knappen riktig visuelt hierarki. `primary` er for den viktigste handlingen, mens `tertiary` er den mest nedtonede.

### Farger
#### Bruk `data-color` for å endre fargetema. `danger` er reservert for destruktive handlinger som brukeren bør tenke seg om to ganger før de utfører.

### Med ikoner
#### Knapper kan inneholde ikoner for å gi visuell kontekst. Ikoner kan plasseres til venstre eller høyre for teksten.

### Kun ikon
#### For kompakte grensesnitt, som i en verktøylinje, kan en knapp kun inneholde et ikon. Disse knappene **må** ha en `aria-label` som beskriver handlingen. Bruk gjerne `Tooltip` i tillegg.

### Laster (Loading)
#### `loading`-propen viser en spinner og deaktiverer knappen. Dette er nyttig for å gi tilbakemelding til brukeren når en handling tar tid.

### Som lenke (As Link)
#### Ved å bruke `asChild`-propen kan knappen rendre som et barn-element, for eksempel en `<a>`-tag. Dette lar deg lage en lenke som ser ut som en knapp.

### Størrelser
#### Knapper støtter `data-size` ('sm', 'md', 'lg') for å tilpasse størrelsen til ulike flater og kontekster.

## Retningslinjer

#### Knapper har en viktig funksjon og er direkte knyttet til en handling.

#### Gjør dette
 * **Vær handlingsorientert:** Knappeteksten bør være kort og beskrive handlingen (f.eks. "Lagre", "Send inn", "Avbryt").
 * **Prioriter:** Bruk `primary` kun for den viktigste handlingen på siden. Ha som regel kun én `primary`-knapp synlig om gangen.
 * **Bruk `danger` med omhu:** Reserver `data-color="danger"` for destruktive handlinger som "Slett" eller "Avslutt".
 * **Bruk `aria-label`:** Alle ikon-knapper **må** ha en `aria-label` som beskriver handlingen.

#### Unngå dette
* **Ikke for navigasjon:** Ikke bruk knapper for ren navigasjon til andre sider. Bruk en standard lenke (`<a>`) for dette (med mindre du bruker `asChild` for å bevisst style en lenke som en knapp).
* **Deaktiverte knapper:** Unngå `disabled`-knapper hvis mulig. Det er ofte bedre å la knappen være aktiv og vise en feilmelding dersom brukeren prøver å utføre handlingen uten å ha fylt ut nødvendig informasjon.
* **Lange tekster:** Ikke bruk lange setninger i knapper. Hold det til 1-3 ord.

## Tilgjengelighet

* **Tekst:** En knapp må alltid ha en tilgjengelig tekst. Hvis den kun inneholder et ikon, må `aria-label` brukes.
* **Ikoner:** Ikoner som brukes *sammen med* synlig tekst (f.eks. `<TrashIcon /> Slett`) skal ha `aria-hidden="true"` for å unngå at skjermlesere leser "Søppel Slett".
* **Loading:** `loading`-propen setter knappen i en `disabled`-tilstand. Dette er en av de få situasjonene hvor `disabled` er anbefalt, da handlingen midlertidig er utilgjengelig.
* **`asChild`:** Når du bruker `asChild` med en `<a>`-tag, sørg for at den oppfører seg som en lenke (navigerer). Hvis den utfører en handling (som en `<button>`), bør den være en `<button>`.

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Button`.

* `--button-background-color`
* `--button-background-color-hover`
* `--button-text-color`
* `--button-border-color`
* `--button-border-color-hover`
* `--button-border-radius`
* `--button-padding-inline`
* `--button-padding-block`
* `--button-font-size`
* `--button-icon-spacing`

---

# Card

#### `Card` er en fleksibel overflate-komponent som grupperer relatert innhold og handlinger. Den brukes til å fremheve informasjon i en avgrenset boks.

## Bruk

```tsx
import { Card, CardBlock } from '@rk-designsystem';

// Standard kort med inndelinger
<Card>
  <CardBlock>
    <h3>Korttittel</h3>
  </CardBlock>
  <CardBlock>
    <p>Dette er innholdet i kortet, plassert i en egen CardBlock.</p>
  </CardBlock>
  <CardBlock>
    <small>Fotnote</small>
  </CardBlock>
</Card>

// Interaktivt kort (som en lenke)
<Card asChild>
  <a href="/sti/til/side">
    <CardBlock>
      <h3>Klikkbar tittel</h3>
      <p>Hele dette kortet er en lenke.</p>
    </CardBlock>
  </a>
</Card>
```

#### `Card`-komponenten fungerer som en container. For å strukturere innhold internt, bruk `CardBlock`-komponenten. Dette sikrer riktig spacing og valgfrie skillelinjer mellom seksjoner.

## Kodeeksempler

### Standardkort
#### Standardkortet har en nøytral bakgrunn og er den vanligste varianten. Innholdet er delt inn med `CardBlock`.

### Farget variant
#### Ved å sette `variant="tinted"` får kortet en svak bakgrunnsfarge basert på `data-color`. Dette kan brukes for å gi kortet en myk visuell prioritet.

### Med bilde
#### `CardBlock` kan brukes til å vise et bilde som fyller hele bredden av kortet uten intern padding.

### Med sammensatt innhold
#### Kort er ment for komposisjon. Du kan enkelt plassere andre komponenter, som knapper og tekst, inni `CardBlock`.

## Ulike mønstre

### Som lenke
#### Ved å bruke `asChild`-propen kan hele kortet gjøres om til ett enkelt klikkbart element, som en `<a>`-tag. Dette er ideelt for "teaser"-kort som lenker til en annen side.

### Som knapp
#### `asChild` kan også brukes til å gjøre kortet om til en `<button>`. Dette er nyttig for å utløse en handling, som å åpne en modal eller legge til et nytt element.

### Kompleks komposisjon
#### Her er et eksempel på et kort som brukes i en applikasjon, og kombinerer skjemafelter, titler og knapper i et komplekst, men ryddig oppsett.

## Retningslinjer

#### Bruk `Card` for å gruppere innhold som hører logisk sammen, og skille det fra annet innhold på siden.

#### Gjør dette
 * **Grupper relatert innhold:** Bruk kort til å samle tekst, bilder og handlinger som omhandler ett enkelt emne.
 * **Bruk `CardBlock`:** Bruk `CardBlock` for å dele opp innhold internt i kortet. Dette gir riktig spacing og skillelinjer.
 * **Bruk `asChild` for interaktivitet:** Hvis *hele* kortet skal være klikkbart, bruk `asChild` for å gjøre det om til en lenke eller knapp.

#### Unngå dette
* **Ikke for alt:** Ikke plasser alt innhold på siden i kort. En side med bare kort kan virke rotete og tung.
 * **Ikke glem `asChild`:** Ikke plasser en lenke inni et kort hvis du forventer at hele kortet skal være klikkbart. Bruk `asChild` for å sikre at hele flaten er én lenke.
* **Ikke for varsler:** Ikke bruk `Card` for å vise viktige systemmeldinger eller feil. Bruk `Alert`-komponenten til det.

## Tilgjengelighet

Når et kort gjøres klikkbart med `asChild`, er det viktig å sikre at det er tilgjengelig.

* **Kort som lenke:** Når kortet er en `<a>`-tag, vil skjermlesere lese opp alt innholdet i kortet som en del av lenketeksten. Sørg for at denne teksten er konsis og beskrivende.
* **Kort som knapp:** Når kortet er en `<button>`, bør det ha en tydelig `aria-label` som beskriver handlingen, spesielt hvis innholdet er komplekst.
* **Bilder:** Hvis et bilde i et klikkbart kort er rent dekorativt, bruk `alt=""`. Hvis det er en del av innholdet, gi det en meningsfylt `alt`-tekst.

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Card`.

* `--card-background-color`
* `--card-border-color`
* `--card-border-radius`
* `--card-padding`
* `--card-block-border-color`

---

# Carousel

#### Et fleksibelt bildegalleri. Du sender inn bildene via `images`‑propen. Piler og prikker er innebygd. Layout og farger følger design tokens.

## Bruk

```tsx
import { Carousel } from 'rk-designsystem';

const images = [
  { src: 'https://.../image-1.jpg', alt: 'Beskrivende alt-tekst 1' },
  { src: 'https://.../image-2.jpg', alt: 'Beskrivende alt-tekst 2' },
  { src: 'https://.../image-3.jpg', alt: 'Beskrivende alt-tekst 3' },
];

// Minimal
<div style={{ width: 900, height: 520 }}>
  <Carousel images={images} />
</div>

// Autoplay
<div style={{ width: 900, height: 520 }}>
  <Carousel images={images} autoPlay autoDelay={4} />
</div>
```

#### Tips
- Sett eksplisitt bredde/høyde på containeren for å styre aspekt og layout.
- For piltaster brukes `Button icon`-stil og NAV-ikoner i tråd med øvrige komponenter.
- Tokens for farger, mellomrom og radii brukes i CSS‑modulen.
- Vil du lese bilder fra Supabase? Se historien "WithSupabase" – den henter bilder og sender dem inn via `images`.

---

# Checkbox

#### `Checkbox` brukes for å la brukere velge ett eller flere uavhengige alternativer fra en liste. For å gruppere relaterte sjekkbokser, bruk `Fieldset`.

## Bruk

```tsx
import { Checkbox, Fieldset } from '@rk-designsystem';

// Enkel sjekkboks
<Checkbox label="Jeg godtar vilkårene" value="terms" />

// Gruppe med sjekkbokser
<Fieldset>
  <Fieldset.Legend>Velg dine interesser</Fieldset.Legend>
  <Checkbox label="Sport" value="sport" />
  <Checkbox label="Musikk" value="music" />
  <Checkbox label="Teknologi" value="tech" />
</Fieldset>
```

#### En `Checkbox` kan stå alene (for eksempel for å godta vilkår) eller grupperes i et `Fieldset`. `useCheckboxGroup` (se "Example Group") er en hook som hjelper med å håndtere state og tilgjengelighet for en gruppe.

## Kodeeksempler

### Med beskrivelse
#### En sjekkboks kan ha en tilhørende `description` for å gi mer kontekst til valget.

### Sjekkboksgruppe
#### For å gruppere relaterte sjekkbokser, bruk `Fieldset` med `Fieldset.Legend`. Dette er kritisk for tilgjengelighet. Denne storyen bruker `useCheckboxGroup`-hooken.

> **Tips:** Prøv `error`-kontrollen i panelet under for å se feilmeldingstilstanden for gruppen.

### "Velg alle" (Indeterminate)
#### En `Checkbox` kan ha en `indeterminate` (ubestemt) tilstand. Dette er vanlig i "Velg alle"-sjekkbokser som styrer en liste, hvor bare noen av elementene i listen er valgt.

### Deaktiverte stater
#### En sjekkboks kan være `disabled` (kan ikke interageres med) eller `readOnly` (kan ikke endres, men kan leses og sendes med skjema).

## Retningslinjer

#### Bruk sjekkbokser når brukere kan velge null, ett, eller flere alternativer.

#### Gjør dette
 * **Bruk `Fieldset` og `Legend`:** Alltid grupper relaterte sjekkbokser i et `<Fieldset>` med en `<Fieldset.Legend>`. Dette knytter spørsmålet til svaralternativene.
 * **Vær tydelig:** `label` for hver sjekkboks skal være kort og tydelig.
 * **Vertikal plassering:** Plasser sjekkbokser vertikalt under hverandre for enklest skanning og lesbarhet.

#### Unngå dette
* **Ikke for enkeltvalg:** Hvis brukeren *kun* kan velge ett alternativ, bruk `Radio`-knapper i stedet.
* **Ikke for av/på:** Hvis valget er å slå en innstilling av eller på, bruk `Switch`-komponenten i stedet.
* **Ikke bruk `disabled`:** Unngå `disabled` sjekkbokser hvis mulig. Det er bedre å ikke vise valget i det hele tatt, eller å forklare hvorfor det ikke er tilgjengelig.

## Tilgjengelighet

* **`Fieldset` og `Legend`:** For at en gruppe sjekkbokser skal være tilgjengelig, **må** den være omsluttet av `<Fieldset>`, og `<Fieldset.Legend>` må beskrive spørsmålet eller kategorien.
* **`label`:** Hver `Checkbox` må ha en tilknyttet `label`.
* **Tastaturnavigasjon:**
    * Bruk <kbd>Tab</kbd> for å flytte fokus til en sjekkboks.
    * Bruk <kbd>Space</kbd> for å velge eller fjerne valget.

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Checkbox`.

* `--checkbox-size`
* `--checkbox-background`
* `--checkbox-border-color`
* `--checkbox-border-radius`
* `--checkbox-checkmark-color`
* `--checkbox-label-color`
* `--checkbox-description-color`
* `--checkbox-focus-ring-color`

---

# Chip

#### `Chip` er en liten, interaktiv komponent som brukes for valg, filtrering eller fjerning av elementer. Den kommer i flere varianter for ulike handlinger.

## Bruk

```tsx
import { Chip } from '@rk-designsystem';

// Som radiovalg (enkeltvalg)
<Chip.Radio name="my-radio" value="1" defaultChecked>
  Valg 1
</Chip.Radio>
<Chip.Radio name="my-radio" value="2">
  Valg 2
</Chip.Radio>

// Som avkrysningsboks (flervalg)
<Chip.Checkbox name="my-checkbox" value="a" defaultChecked>
  Filter A
</Chip.Checkbox>
<Chip.Checkbox name="my-checkbox" value="b">
  Filter B
</Chip.Checkbox>

// Som fjernbar
<Chip.Removable aria-label="Fjern Nynorsk" onClick={() => {}}>
  Nynorsk
</Chip.Removable>

// Som knapp
<Chip.Button onClick={() => {}}>
  Tøm filtre
</Chip.Button>
```

#### Komponenten er bygget som et sammensatt (compound) komponent. Du importerer `Chip` og bruker den varianten du trenger: `Chip.Radio`, `Chip.Checkbox`, `Chip.Removable`, eller `Chip.Button`.

## Kodeeksempler

### Radiovalg
#### `Chip.Radio` fungerer som en `Radio`-knapp. Bruk denne når brukeren kun skal kunne velge ett alternativ fra en gruppe. Alle i gruppen må dele samme `name`.

### Avkrysningsboks
#### `Chip.Checkbox` fungerer som en `Checkbox`. Bruk denne når brukeren skal kunne velge null, ett eller flere alternativer.

### Fjernbar (Removable)
#### `Chip.Removable` brukes for å vise et aktivt filter eller valg som brukeren kan fjerne. Den har en innebygd lukkeknapp.

### Knapp
#### `Chip.Button` fungerer som en standard knapp, men med `Chip`-utseendet. Bruk denne for handlinger, som å utløse et søk eller tømme filtre.

## Retningslinjer

#### Bruk `Chip` for å la brukere filtrere innhold eller gjøre valg på en kompakt måte.

#### Gjør dette
 * **Filtrering:** Bruk for å filtrere lister eller tabeller (f.eks. `Chip.Checkbox`).
 * **Enkeltvalg:** Bruk for å bytte mellom visninger (f.eks. `Chip.Radio`).
 * **Aktive filtre:** Bruk `Chip.Removable` for å vise aktive filtre som kan fjernes.
 * **Plassering:** Plasser chips horisontalt. De kan brytes over flere linjer hvis det er mange.

#### Unngå dette
* **Ikke for status:** Ikke bruk for status eller antall. Bruk `Badge` i stedet.
* **Ikke for statisk info:** Ikke bruk for ikke-interaktive merkelapper. Bruk `Tag` i stedet.
* **Ikke for navigasjon:** Ikke bruk for menyer eller sidet navigasjon.
* **Ikke vertikalt:** Ikke stable chips vertikalt. Bruk `Checkbox` eller `Radio` i stedet.

### Tekst
#### Teksten i en `Chip` bør være så kort som mulig, helst bare ett eller to ord (f.eks. "Nynorsk", "Slett filter").

## Tilgjengelighet

* **`Chip.Radio` / `Chip.Checkbox`:** Disse fungerer som standard skjemafelt og bør grupperes i et `Fieldset` (som `Checkbox` og `Radio`) hvis konteksten ikke er åpenbar.
* **`Chip.Removable`:** Denne knappen **må** ha et godt `aria-label`. For eksempel, en chip med teksten "Norge" bør ha `aria-label="Fjern Norge"`.
* **`Chip.Button`:** Må ha en tydelig tekst som beskriver handlingen.

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Chip`.

* `--chip-background-color`
* `--chip-background-color-hover`
* `--chip-background-color-active`
* `--chip-text-color`
* `--chip-border-color`
* `--chip-border-radius`
* `--chip-padding-inline`
* `--chip-padding-block`
* `--chip-font-size`
* `--chip-icon-spacing`

---

# DateInput

#### `DateInput` er et tekstfelt for datoer, med norsk formatering (`dd.mm.åååå`). Den kan brukes alene eller sammen med `DatePicker` for å gi en komplett datovelger-opplevelse.

## Bruk

```tsx
import { DateInput } from '@rk-designsystem';
import { useState } from 'react';

const MyDateField = () => {
  const [value, setValue] = useState('12.05.2023');

  return (
    <DateInput
      label="Startdato"
      value={value}
      onChange={(e, formattedValue) => setValue(formattedValue)}
      suffixIcon={<CalendarIcon />}
      onSuffixClick={() => console.log('Åpne kalender')}
    />
  );
};
```

DateInput håndterer formatering, validering og tilbakesetting av datoer i sanntid. Komponenten støtter både kontrollerte og ukontrollerte verdier.

## Props

De viktigste prop-ene inkluderer:

| Prop | Type | Beskrivelse |
|------|------|-------------|
| label | React.ReactNode | Etiketten for feltet. Påkrevd for tilgjengelighet (eller bruk aria-label). |
| description | React.ReactNode | Valgfri hjelpetekst som vises under etiketten. |
| error | React.ReactNode | Viser feilmelding og setter aria-invalid. |
| value | string \| null | Kontrollert verdi (dd.mm.yyyy). |
| defaultValue | string \| null | Ukontrollert startverdi. |
| onChange | (event, formattedValue) => void | Kalles ved endring. Tilbyr formatert verdi. |
| suffixIcon | React.ReactNode | Et ikon (ofte en kalender). |
| onSuffixClick | () => void | Klikkfunksjon for suffix-knapp. |
| data-size | 'sm' \| 'md' \| 'lg' | Visuell størrelse. |
| data-color | 'accent' \| 'brand1' \| 'brand2' \| 'brand3' \| 'neutral' | Fargetema. |

## Mønstre

### Kombinert med DatePicker

Når DateInput brukes sammen med DatePicker, håndteres verdien i state slik at tekstfeltet og kalenderen alltid gjenspeiler samme dato.

```tsx
const DateInputCombo = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (_e, formatted) => {
    setInputValue(formatted);
    const parsed = parse(formatted, 'dd.MM.yyyy', new Date());
    if (isValid(parsed)) setSelectedDate(parsed);
  };

  return (
    <>
      <DateInput
        label="Velg dato"
        value={inputValue}
        onChange={handleInputChange}
        suffixIcon={<CalendarIcon />}
      />
      <DatePicker
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
    </>
  );
};
```

## Tilgjengelighet

- En label, aria-label eller aria-labelledby er nødvendig for å unngå advarsler.
- aria-invalid settes når error-prop er aktiv.
- aria-describedby kobler hjelpetekst (description) og feilmelding til input-elementet.
- role="alert" brukes på feilmelding for skjermlesere.

## CSS / Design Tokens

DateInput bruker CSS-moduler (styles.module.css) som refererer til tokens fra designsystemet.

- --ds-color-text-default
- --ds-color-border-default
- --ds-color-danger-border-default
- --ds-color-background-default
- --ds-color-surface-hover
- --ds-opacity-disabled
- --ds-border-radius-md
- --ds-font-size-sm
- --ds-font-weight-medium, osv.

## Retningslinjer

**Gjør dette**
- Bruk DateInput når brukeren skal skrive datoer direkte.
- Bruk placeholder="dd.mm.åååå" som et hjelpetips.
- Gi alltid en label eller aria-label.

**Unngå dette**
- Ikke bruk DateInput alene i situasjoner der en bruker forventer en visuell kalender – kombiner med DatePicker.
- Ikke la komponenten være uten onChange i kontrollerte scenarier.

---

# DatePicker (Calendar)

#### `DatePicker` er den visuelle kalenderkomponenten som lar en bruker velge en dato. Den er designet for å brukes alene eller i kombinasjon med `DateInput`.

## Bruk

```tsx
import { DatePicker } from '@rk-designsystem';
import { useState } from 'react';

// For å bruke kalenderen, må du håndtere state selv.
const MyCalendar = () => {
  const [selected, setSelected] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selectedDate={selected}
      onDateSelect={setSelected}
      initialDate={new Date()}
    />
  );
}
```

#### Komponenten er en kontrollert kalendervisning. Du må tilby en `selectedDate` (den valgte datoen) og en `onDateSelect`-funksjon for å fange opp når brukeren velger en ny dato.

## Kodeeksempler

### Standardkalender
#### En interaktiv kalender. `initialDate` bestemmer hvilken måned som vises først, og `selectedDate` bestemmer hvilken dag som er markert.

### Med en valgt dato
#### Her er kalenderen rendret med en `selectedDate`-prop som er forhåndsinnstilt.

### Farge og størrelse
#### Siden komponenten nå aksepterer `data-color` og `data-size`, kan den styles for å passe inn i ulike layouter.

## Mønstre

### Kombinert med `DateInput`
#### Dette er det vanligste bruksmønsteret. `DatePicker` vises under eller ved siden av en `DateInput`, og de to komponentene synkroniserer sin state.

## Retningslinjer

#### Bruk `DatePicker` når brukere trenger en visuell måte å velge en dato på, i stedet for å skrive den manuelt.

#### Gjør dette
 * **Synkroniser state:** Sørg for at `DateInput`-verdien og `DatePicker`-valget er synkronisert.
 * **Bruk `initialDate`:** Sett `initialDate` til den valgte datoen (hvis den finnes) slik at kalenderen åpnes på riktig måned.

#### Unngå dette
* **Ikke for tid:** Denne komponenten er kun for å velge dato (dag, måned, år).
* **Ikke uten `onDateSelect`:** Komponenten er ubrukelig med mindre du lytter til `onDateSelect`-hendelsen for å lagre brukerens valg.

## Tilgjengelighet

* **Knapp-roller:** Hver dato i kalenderen er en `<div>` med `role="button"` og `tabIndex={0}` for å være tastatur-navigerbar.
* **Aria-attributter:** `aria-pressed` brukes for den valgte datoen, og `aria-label` gir en fullstendig, lesbar dato (f.eks. "5. november 2025").
* **Navigasjon:** Månedsvelgerne er knapper med `aria-label` (f.eks. "Forrige måned").

## CSS-variabler (fra styles.module.css)

#### Denne komponenten er stylet med CSS-moduler og henter verdier fra design-tokenene.

* `--ds-size-1`, `--ds-size-2`, `--ds-size-3`, `--ds-size-5`, `--ds-size-8`
* `--ds-color-neutral-border-subtle`
* `--ds-border-radius-md`
* `--ds-color-neutral-background-default`
* `--ds-font-family`
* `--ds-color-neutral-text-default`
* `--ds-heading-sm-font-size`, `--ds-heading-sm-font-weight`, etc.
* `--ds-opacity-disabled`
* `--ds-body-xs-font-size`, `--ds-body-xs-font-weight`, etc.
* `--ds-color-neutral-text-subtle`
* `--ds-color-neutral-surface-tinted`
* `--ds-color-neutral-surface-hover`
* `--ds-color-primary-brand-base-active`
* `--ds-color-primary-brand-base-contrast-default`

---

# Details

#### `Details` lar brukeren utvide og skjule innhold i en oversiktlig rad. Den er nyttig for å samle informasjon som ikke trenger å vises hele tiden, og hjelper med å holde grensesnittet ryddig.

## Bruk

```tsx
import { Details } from '@digdir/designsystemet-react';

// Grunnleggende bruk
<Details>
  <Details.Summary>Tittel for seksjonen</Details.Summary>
  <Details.Content>Dette er innholdet som kan utvides.</Details.Content>
</Details>

// Med ramme (i et kort)
import { Details, Card } from '@digdir/designsystemet-react';

<Card>
  <Details>
    <Details.Summary>Detaljer med ramme</Details.Summary>
    <Details.Content>Innholdet vises her når du åpner detaljer.</Details.Content>
  </Details>
</Card>
```

#### `Details` fungerer som et sammenleggbart område. Du kan bruke den alene eller inni andre komponenter som `Card` for å organisere innhold visuelt.

## Kodeeksempler

### Standard
#### Dette er grunnvarianten av `Details`, der brukeren kan klikke på overskriften for å vise innholdet.

### Åpen som standard
#### Du kan starte `Details` i åpen tilstand ved å sette `open: true`.

### Med størrelse og farge
#### Bruk `data-size` og `data-color` for å tilpasse stil etter temaet ditt.

## Retningslinjer

#### Bruk `Details` til å skjule valgfrie eller utfyllende opplysninger.

**Gjør dette**
* **Bruk `Details` for sekundært innhold:** Ideelt for informasjon som er nyttig, men ikke kritisk.
* **Hold overskriften tydelig:** Den skal beskrive hva som skjules bak.
* **Bruk i kontekst:** Legg gjerne inn `Details` i komponenter som `Card` når du vil gruppere flere seksjoner.

**Unngå dette**
* **Skjul aldri hovedinnhold:** Viktige meldinger eller primærinformasjon bør være synlig.
* **Ingen nøsting:** Ikke legg en `Details` inni en annen. Det kan skape forvirring for tastaturnavigasjon og skjermlesere.
* **Unngå vage titler:** «Les mer» eller «Vis mer» gir lite mening uten kontekst.

## Tilgjengelighet

#### `Details` er bygd med fokus på tilgjengelighet og følger HTML `<details>`- og `<summary>`-mønsteret.

* **Tastaturnavigasjon:** Bruk <kbd>Space</kbd> eller <kbd>Enter</kbd> for å åpne og lukke komponenten.
* **Visuell indikator:** Chevron-ikonet står til venstre for å være lettere å se for brukere med begrenset synsfelt.
* **Interaktivitet:** Ikke legg andre interaktive elementer i `Details.Summary`. Hele raden skal være klikkbar.

Safari og Firefox støtter per i dag ikke animert åpning/lukking.

## CSS-variabler

#### Følgende variabler kan brukes for å justere stil på komponenten:

* `--details-background-color`
* `--details-border-color`
* `--details-border-radius`
* `--details-padding`
* `--details-summary-color`

---

# Dialog

`Dialog` lar deg lage modale og ikke-modale dialoger basert på HTML-elementet `dialog`.

## Bruk

```tsx
<Dialog.TriggerContext>
  <Dialog.Trigger>Open Dialog</Dialog.Trigger>
  <Dialog>
    <Dialog.Block>
      <Heading data-size="xs">Header</Heading>
    </Dialog.Block>
    <Dialog.Block>Content</Dialog.Block>
    <Dialog.Block>Footer</Dialog.Block>
  </Dialog>
</Dialog.TriggerContext>
```

Dersom du kun trenger å åpne og lukke dialogen gjennom brukerinteraksjon, kan du bruke `Trigger`-komponenten vår. Om du trenger programmatisk kontroll over åpning og lukking av modalen kan du bruke `open`-propen, eller en `ref` som gir tilgang på HTML-elementets instance-metoder (f.eks. `.show()`, `.showModal()` og `.close()`).

Du bytter mellom modal og ikke-modal dialog ved å bruke `modal`-propen, som er satt til `true` som standard.

En modal `dialog` har innebygd "focus trap", som betyr at brukeren ikke kan navigere med tabulator til annet innhold på siden mens dialogen er åpen.

### Bruk med ekstern trigger

```tsx
const dialogRef = useRef<HTMLDialogElement>(null);

<Button onClick={() => dialogRef.current?.showModal()}>Open Dialog</Button>
<Dialog ref={dialogRef}>
  Content
</Dialog>
```

### Lukk knapp

For å legge til egen lukk knapp, kan du enten bruke `ref` og `Dialog.close()` på en knapp du lager selv, eller legge på `data-command="close"` på en knapp inni dialogen.

```tsx
<Dialog>
  <Dialog.Block>
    <Heading>Header</Heading>
  </Dialog.Block>
  <Dialog.Block>
    <Button data-command="close">Lukk</Button>
  </Dialog.Block>
</Dialog>
```

## Retningslinjer

`Dialog` kan brukes som både **(1) modal** og **(2) ikke-modal**.

### 1 Modal Dialog
En modal `Dialog` er et midlertidig vindu som åpnes over resten av innholdet på nettsiden. Modal `Dialog` fanger brukerens oppmerksomhet og hindrer interaksjon med annet innhold, samtidig som konteksten til nettsiden beholdes.

**Passer til å**
- få brukeren til å fokusere på en spesifikk oppgave
- sikre at brukeren får med seg viktig informasjon
- gi mer informasjon uten at brukeren må forlate hovedinnholdet

**Passer ikke til**
- omfattende eller komplekst innhold som krever langvarig interaksjon
- å gi informasjon uten å avbryte brukerens arbeidsflyt

### 2 Ikke-modal Dialog
En "ikke-modal" `Dialog` lar brukeren fortsatt bruke resten av siden mens dialogen er åpen.

**Passer til å**
- gi brukeren tilgang til informasjon eller handlinger parallelt med resten av innholdet

**Passer ikke til**
- kritiske valg som brukeren må ta stilling til før de kan fortsette
- bekreftelser eller varsler som krever brukerens fulle oppmerksomhet

## Tekst
- Ha en kort og konsis overskrift.
- Unngå mange avsnitt med tekst.
- Sørg for at formålet er tydelig og at all nødvendig informasjon er tilgjelig i modalen.

## Tilgjengelighet

### Tastaturnavigasjon
* <kbd>Esc</kbd> lukker dialogen (fokus returnerer til utløser)

---

# Divider

#### `Divider` brukes for å skape et visuelt skille mellom innhold. Det er en enkel, horisontal linje som hjelper til med å strukturere og tydeliggjøre oppsettet på en side.

## Bruk

#### `Divider` kan brukes mellom seksjoner for å skape et klart visuelt skille.
Bruk den når whitespace alene ikke er nok til å oppnå ønsket avstand eller struktur.

## Kodeeksempler

### Standard
#### Den vanligste varianten har nøytral farge og strekker seg over hele bredden.

### Farget variant
#### `Divider` kan arve farge fra temaet ditt eller settes med data-attributtene `data-color` og `data-size`.

## Retningslinjer

#### Bruk `Divider` til å dele opp og strukturere innhold på en logisk måte.

**Passer når**
* du vil ha tydelig visuell oppdeling mellom seksjoner
* innholdet trenger struktur og rytme for bedre lesbarhet
* whitespace alene ikke skaper nok skille

**Passer ikke når**
* naturlig spacing eller tydelige hoder allerede gir nok visuell separasjon
* du har mange `Divider`-elementer på en side — det kan skape et rotete uttrykk
* du vil bruke linjen kun som pynt uten semantisk betydning

## Tilgjengelighet

#### `Divider` er et dekorativt element som ikke leses opp av skjermlesere.

Bruk den til å indikere en virkelig tematisk inndeling i innholdet — ikke bare for designmessig pynt.

## CSS-variabler

#### Her er tilgjengelige CSS-variabler for `Divider`.

* `--divider-color`
* `--divider-thickness`
* `--divider-width`
* `--divider-margin-block`

---

# Dropdown

#### `Dropdown` er en fleksibel nedtrekkskomponent som bygger videre på nettleserens popover-mekanisme. Den egner seg godt til menyer og handlingslister.

## Bruk

```tsx
import { Dropdown } from 'rk-designsystem';

// med context
<Dropdown.TriggerContext>
  <Dropdown.Trigger>Trigger</Dropdown.Trigger>
  <Dropdown>
    <Dropdown.Heading>Heading</Dropdown.Heading>
    <Dropdown.List>
      <Dropdown.Item>
        <Dropdown.Button>Item</Dropdown.Button>
      </Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
</Dropdown.TriggerContext>

// uten context
<Button popovertarget="my-dropdown">Trigger</Button>
<Dropdown id="my-dropdown">
  <Dropdown.Heading>Heading</Dropdown.Heading>
  <Dropdown.List>
    <Dropdown.Item>
      <Dropdown.Button>Item</Dropdown.Button>
    </Dropdown.Item>
  </Dropdown.List>
</Dropdown>
```

### React og `popovertarget`

Når du ikke bruker `Dropdown.TriggerContext`, må du koble sammen utløser og popover selv. Bruk da attributtet `popovertarget` i små bokstaver.

### Polyfill

`Dropdown` benytter Popover API. Dette er bredt støttet i moderne nettlesere.

## Tilgjengelighet

Popover-API-et følger åpen/lukket-tilstand og fungerer med standard tastaturnavigasjon.

### Tastaturnavigasjon
* <kbd>Enter</kbd> eller <kbd>Space</kbd> åpner/lukker menyen
* <kbd>Enter</kbd> eller <kbd>Space</kbd> aktiverer markert element
* <kbd>Esc</kbd> lukker menyen

---

# ErrorSummary

#### `ErrorSummary` gir en kort, samlet oversikt over feil som må rettes før brukeren kan gå videre.
#### Den hjelper brukeren å forstå hva som mangler og hvor det kan rettes.

## Bruk

`ErrorSummary` settes vanligvis under hovedinnholdet og nær handlingsknapper (f.eks. "Send inn").

```tsx
import { ErrorSummary } from 'rk-designsystem';

<ErrorSummary>
  <ErrorSummary.Heading>
    For å gå videre må du rette opp følgende feil:
  </ErrorSummary.Heading>
  <ErrorSummary.List>
    <ErrorSummary.Item>
      <ErrorSummary.Link href="#some-field-id">Feilmelding</ErrorSummary.Link>
    </ErrorSummary.Item>
  </ErrorSummary.List>
</ErrorSummary>
```

## Retningslinjer

Bruk `ErrorSummary` når du vil presentere en oversikt over feil som hindrer innsending.

**Passer til**
- å gi en tydelig liste over feil som må rettes før innsending
- skjema med mange felt der det er lett å miste oversikten

**Passer ikke til**
- systemvarsler – bruk `Alert`
- informasjonsmeldinger som ikke blokkerer innsending

### Plassering
Vi anbefaler å vise `ErrorSummary` like over Neste/Send inn-knappen.

### Synlighet
Oppsummeringen bør først vises etter at brukeren har forsøkt å sende inn.

## Tilgjengelighet

Når `ErrorSummary` blir synlig anbefales det å flytte fokus til oppsummeringen.

---

# Field

#### `Field` hjelper deg å strukturere skjemainnhold ved å koble sammen ledetekst, beskrivelse, feil og teller på en konsistent og tilgjengelig måte. Bruk `Field` sammen med `Input`, `Textarea` eller `Select`. Merk at `Textfield` allerede inkluderer tilsvarende struktur, og skal ikke ligge inni `Field`.

## Bruk

```tsx
import { Field, Label, Input, ValidationMessage } from 'rk-designsystem';

<Field>
  <Label>Kort beskrivelse</Label>
  <Field.Description>Beskrivende hjelptekst</Field.Description>
  <Input />
  <ValidationMessage>Feilmelding</ValidationMessage>
</Field>
```

## Retningslinjer

`Field` kobler automatisk sammen `Label`, `Field.Description`, `ValidationMessage` og `Field.Counter` med feltet via riktige ARIA-attributter.

**Passer til**
- å sikre at beskrivelse, feilmelding og teller er riktig koblet til et felt

**Passer ikke til**
- å gruppere flere felt semantisk – bruk heller `Fieldset`

### Plassering
For innstillinger og brytere kan du bruke `position="end"` slik at handlingen plasseres visuelt til høyre for `Label`.

---

# Fieldset

#### `Fieldset` brukes til å gruppere og navngi felt som naturlig hører sammen, som for eksempel datofelt eller adressefelter. Dette gjør skjemaer mer oversiktlige og forbedrer tilgjengeligheten.

## Bruk

```tsx
import { Fieldset, Field, Label, Textfield, Textarea } from 'rk-designsystem';

<form>
  <Fieldset>
    <Fieldset.Legend>Kontaktinformasjon</Fieldset.Legend>
    <Fieldset.Description>Fyll ut feltene under</Fieldset.Description>

    <Field>
      <Label htmlFor="email">E‑post</Label>
      <Textfield id="email" />
    </Field>

    <Field>
      <Label htmlFor="message">Melding</Label>
      <Textarea id="message" rows={3} />
    </Field>
  </Fieldset>
</form>
```

## Retningslinjer

Når du bruker `Fieldset`, start med en tydelig `Fieldset.Legend` som beskriver hva gruppen inneholder.

**Passer til**
- å gruppere flere relaterte `Radio`- eller `Checkbox`‑valg
- å dele skjema i meningsfulle seksjoner

**Passer ikke til**
- å samle elementer som ikke er del av et skjema

## Tekst

Unngå å duplisere samme ordlyd i både `label` og `legend`. Hold teksten kort og konsis.

## Tilgjengelighet

Bruk alltid en `legend` for å gi skjermlesere nødvendig kontekst.

---

# Input

#### `Input` er et grunnleggende skjemafelt for innsamling av brukerdata. Bruk den når du trenger enkel, fleksibel kontroll over oppsett og validering.

#### Se også `Textfield`, som kombinerer `Label`, beskrivelse og validering for deg.

## Retningslinjer

Se retningslinjer for `Textfield` for anbefalt plassering av ledetekst og beskrivelse.

Når ledetekst skjules visuelt (for eksempel i tabeller), må den fortsatt være tilgjengelig for skjermlesere via `aria-label` eller `aria-labelledby`.

## Tilgjengelighet

Koble alltid feltet med en `Label` ved hjelp av `htmlFor`/`id` eller `aria-labelledby`. Ved feiltilstand, sett `aria-invalid` og koble feilmeldingen via `aria-describedby` om mulig.

---

# Link

#### `Link` er klikkbar tekst eller grafikk for navigasjon, basert på `<a>`. Bruk den for å sende brukeren til dokumenter, sider eller seksjoner – internt eller eksternt.

## Bruk

```tsx
import { Link } from 'rk-designsystem';

<Link href="https://designsystemet.no/">Gå til designsystemet</Link>
```

## Kodeeksempler

### I tekst
Lenker brukes ofte som en del av brødtekst.

### Med ikon
Plasser ikon foran teksten. Skjul ikonet for skjermleser med `aria-hidden`.

### Ekstern lenke

## Retningslinjer

Unngå overbruk av lenker – det kan gjøre navigasjon uoversiktlig.

**Passer til**
- å navigere til en annen side eller et annet sted i applikasjonen
- å peke til eksternt innhold
- å laste ned en fil

**Passer ikke til**
- å utføre handlinger som ikke er navigasjon (bruk `Button` i stedet)

### Åpne i ny fane
Som hovedregel bør lenker åpnes i samme fane/vindu for forutsigbarhet.

## Tekst

Skriv beskrivende lenketekster som tydelig forteller hva brukeren kan forvente når de klikker.

## Tilgjengelighet

`Link` fungerer som en semantisk `<a>`. Fokusmarkering vises rundt lenken, og besøkte lenker kan ha egen farge.

---

# List

#### `List` brukes for å strukturere innhold som punktlister eller nummererte steg, slik at informasjon blir enkel å skumme og forstå.

## Bruk

Listen kan være usortert eller sortert. Bruk `List.Unordered` for kulepunkter og `List.Ordered` når rekkefølge betyr noe.

```tsx
import { List } from 'rk-designsystem';

<List.Unordered>
  <List.Item>Første punkt</List.Item>
  <List.Item>Andre punkt</List.Item>
</List.Unordered>
```

## Retningslinjer

Bruk sortert liste når rekkefølge eller prioritet er viktig. Bruk usortert liste når du vil oppsummere punkter uten rangering. Unngå svært lange lister.

**Passer til**
- å gi rask oversikt i lengre tekster
- å liste kriterier
- å vise steg i en prosess

**Passer ikke til**
- å presentere lange avsnitt
- å sammenligne flere datasett (bruk tabell)

## Tilgjengelighet

### Lister som navigasjon
Hvis listen brukes til navigasjon, pakk den inn i et `<nav aria-label="...">`.

```tsx
<nav aria-label="Snarveier">
  <List.Unordered>
    <List.Item>…</List.Item>
  </List.Unordered>
</nav>
```

---

# Pagination

#### `Pagination` er en liste med kontroller som lar brukeren navigere mellom flere sider med innhold.

## Bruk

`Pagination` er kontrollert. Det betyr at aktiv side styres utenfra.

```tsx
import { Pagination } from 'rk-designsystem';

<Pagination aria-label="Sidenavigering">
  <Pagination.List>
    <Pagination.Item>
      <Pagination.Button aria-label="Forrige side">Forrige</Pagination.Button>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Button aria-label="Side 1">1</Pagination.Button>
    </Pagination.Item>
    <Pagination.Item /> {/* ellipse */}
    <Pagination.Item>
      <Pagination.Button aria-label="Side 10">10</Pagination.Button>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Button aria-label="Neste side">Neste</Pagination.Button>
    </Pagination.Item>
  </Pagination.List>
</Pagination>
```

## Retningslinjer

Bruk `Pagination` når innhold må deles opp i sider.

**Passer til**
- å navigere mellom relaterte innholdssider
- å dele store datamengder i håndterbare sider

**Passer ikke til**
- stegvis utfylling av skjema (bruk stegindikator)
- å vise fremdrift

## Tekst

Bruk de faste ordene «Forrige» og «Neste».

---

# Popover

#### `Popover` vises over annet innhold og er forankret til et utløser‑element. Bruk den til tilleggsinformasjon eller enkle interaksjoner uten å forlate siden.

## Bruk

```tsx
import { Popover } from 'rk-designsystem';

// med context
<Popover.TriggerContext>
  <Popover.Trigger>Trigger</Popover.Trigger>
  <Popover>Content</Popover>
</Popover.TriggerContext>

// uten context med egen trigger
<Button popovertarget="my-popover">Trigger</Button>
<Popover id="my-popover">Content</Popover>
```

## Retningslinjer

Bruk `Popover` for kontekstuell hjelp eller korte handlinger som ikke krever sideskifte.

**Passer til**
- utdypende forklaringer som trenger mer plass enn en `Tooltip`
- kontekstspesifikk hjelp som åpnes/lukkes ved behov

**Passer ikke til**
- rene beskrivelser av symboler eller snarveier (bruk `Tooltip`)
- navigasjon/valg av alternativer (vurder `Dropdown`)
- innhold som skal vises på `hover`

## Tilgjengelighet

### Tastaturnavigasjon
* <kbd>Enter</kbd> / <kbd>Space</kbd> åpner/lukker
* <kbd>Esc</kbd> lukker

---

# Radio

#### `Radio` lar brukeren velge ett av flere alternativer. Bruk én `Radio` per valg, og grupper dem med samme `name`.

## Bruk

Bruk `Fieldset` for å gruppere relaterte alternativer.

```tsx
import { Radio, Fieldset } from 'rk-designsystem';

<Fieldset>
  <Fieldset.Legend>Er du over 18 år?</Fieldset.Legend>
  <Radio value="ja" label="Ja" name="alternativ" />
  <Radio value="nei" label="Nei" name="alternativ" />
</Fieldset>
```

## Retningslinjer

Bruk `Radio` når brukeren skal velge kun ett alternativ. Trenger de å velge flere, bruk `Checkbox`. Unngå flere enn ~7 alternativer i samme gruppe.

### Sortering og plassering
- Sorter som hovedregel alfabetisk.
- Plasser vanligvis alternativene vertikalt.

## Tekst

En gruppe bør ha en tydelig `legend`. Hvert alternativ skal ha en kort og konsis `label`.

## Tilgjengelighet

Sørg for god avstand mellom alternativene. Tastaturnavigasjon:
- Piltaster flytter mellom valg
- <kbd>Space</kbd> velger markert alternativ
- <kbd>Tab</kbd> flytter fokus til/fra gruppen

---

# Search

#### `Search` lar brukere finne innhold raskt gjennom et søkefelt – med eller uten knapp.

## Bruk

```tsx
import { Search } from 'rk-designsystem';

<Search>
  <Search.Input aria-label="Søk" />
  <Search.Clear />
  <Search.Button />
</Search>
```

## Retningslinjer

Velg bredde på søkefeltet ut fra typiske søk.

**Passer til:**
* Å hjelpe brukere å finne relevant informasjon raskt.
* Når brukerne skriver nøkkelord eller setninger.

**Passer ikke til:**
* Når innholdet er lett å navigere uten søk.
* Som erstatning for god navigasjon.

## Tekst

Bruk placeholder med varsomhet. Gi heller beskrivelse via `Label` eller hjelpetekst.

## Tilgjengelighet

### Tastaturinteraksjon
* <kbd>Esc</kbd> tømmer feltet.
* <kbd>Tab</kbd> navigerer mellom input, clear og knapp.
* <kbd>Enter</kbd> sender inn når fokus er i input.

---

# Select

#### `Select` er en nedtrekksliste for å velge ett alternativ fra en statisk liste.

## Bruk

```tsx
import { Select, Field, Label } from 'rk-designsystem';

<Field>
  <Label>Ta et valg</Label>
  <Select>
    <Select.Option value="1">Alternativ 1</Select.Option>
    <Select.Option value="2">Alternativ 2</Select.Option>
    <Select.Option value="3">Alternativ 3</Select.Option>
  </Select>
</Field>
```

## Retningslinjer

Bruk `select` når det er mange (omtrent 7 eller flere) alternativer. Ved færre valg er `Radio` ofte enklere.

**Passer til**
* å velge ett alternativ

**Passer ikke til**
* navigasjon mellom sider eller seksjoner
* å velge flere alternativer

## Tekst

`Select` skal alltid ha en tydelig ledetekst.

## Tilgjengelighet

### Tastaturnavigasjon
* <kbd>Space</kbd> åpner listen
* <kbd>Enter</kbd> velger
* <kbd>↓</kbd>/<kbd>↑</kbd> markerer neste/forrige
* <kbd>Home</kbd>/<kbd>End</kbd> første/siste
* Bokstaver/tegn hopper til første matchende alternativ

---

# Skeleton

#### `Skeleton` brukes for å indikere at innhold er i ferd med å lastes inn. I stedet for en ren spinner gir skeleton et visuelt hint om hvordan det ferdige innholdet vil se ut.

## Bruk

`Skeleton` har tre varianter: `rectangle`, `circle` og `text`.

Du kan bygge opp komponenter og seksjoner ved å kombinere flere skeletons slik at layouten etterligner innholdet som lastes.

## Retningslinjer

Bruk `Skeleton` når du vil forberede brukeren på hvordan innholdet kommer til å se ut, og når ventetiden er merkbar.

**Passer til**
- å indikere at innhold lastes
- å vise formen på kommende innhold
- opplevelser der ventetid er > 1 sekund

**Passer ikke**
- når brukeren venter på en blokkende handling – bruk da `Spinner`

## Tilgjengelighet

Når brukeren har `prefers-reduced-motion: reduce` reduseres animasjonen.

---

# SkipLink

#### `SkipLink` hjelper tastaturbrukere å hoppe direkte til hovedinnholdet og forbi repeterende elementer.

## Bruk

`SkipLink` bør være blant de første tabbable elementene på siden.

```tsx
import { SkipLink } from 'rk-designsystem';

<SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>

<main id="main-content" tabIndex={-1}>
  Region som kan motta fokus fra skiplink.
</main>
```

## Retningslinjer

Når man navigerer med tastatur, skal det være mulig å hoppe forbi navigasjon og toppinnhold. Plasser `SkipLink` som første fokuserbare element.

## Tekst

Bruk en tydelig og enkel tekst, som «Hopp til hovedinnhold».

## Tilgjengelighet

`SkipLink` er vanligvis skjult frem til den får fokus via Tab.

---

# Spinner

#### `Spinner` brukes for å indikere at noe lastes eller at en handling pågår, og at brukeren må vente før de kan fortsette.

## Retningslinjer

Formålet med `Spinner` er å bekrefte at systemet jobber videre, og redusere usikkerhet for brukeren.

**Passer til**
- å indikere at systemet jobber og brukeren må vente
- lokale handlinger (skjemainnsending, oppdatering av tabell)
- tilfeller der ventetid kan være > 1 sekund

**Passer ikke**
- å indikere lasting av strukturen på en side – bruk `Skeleton` i stedet
- svært korte ventetider (< 1 sekund)

## Tekst

Vurder å vise forklarende tekst sammen med `Spinner` (eller sett `aria-label`).

## Tilgjengelighet

Når brukeren har `prefers-reduced-motion: reduce`, bør animasjonen reduseres.

---

# Suggestion

#### Søkbar "select" med støtte for enkeltvalg og flervalg. Bruk når `Select` ikke strekker til.

## Bruk

```tsx
import { Suggestion } from 'rk-designsystem';

<Suggestion>
  <Suggestion.Input />
  <Suggestion.Clear />
  <Suggestion.List>
    <Suggestion.Empty>Tomt</Suggestion.Empty>
    <Suggestion.Option label="Sogndal" value="sogndal">Sogndal</Suggestion.Option>
    <Suggestion.Option label="Oslo" value="oslo">Oslo</Suggestion.Option>
  </Suggestion.List>
</Suggestion>
```

## Eksempler

### Flervalg
Bruk `multiple` for å tillate flere valg.

### Filter
Filter er på som standard og matcher på input‑tekst.

### Asynkrone data
Håndter lasting selv ved å vise tilstand i `Suggestion.Empty`.

### Creatable
Tillat at brukeren oppretter nye valg når de ikke finnes i listen.

---

# Switch

`Switch` lar brukeren slå en innstilling av/på. Den skal alltid ha en fornuftig starttilstand.

## Bruk

```tsx
import { Switch } from 'rk-designsystem';

<Switch label="Mørk modus" value="dark" />
```

## Retningslinjer

`Switch` brukes for umiddelbare innstillinger (ikke i skjema som må sendes inn). Den representerer kun to tilstander.

**Passer til**
- å aktivere/deaktivere funksjoner/tilstander direkte
- slå varsler av/på

**Passer ikke til**
- valg i skjema (bruk `Checkbox`/`Radio`)
- situasjoner som krever lagring før endring trer i kraft
- å bytte mellom innholdskategorier – vurder `ToggleGroup`

## Tekst

Hold label kort og beskriv funksjonen (ikke tilstanden).

## Tilgjengelighet

Komponenten bruker `role="switch"` via underliggende input.

### Tastaturnavigasjon
* <kbd>Space</kbd> slår av/på

---

# Table

#### `Table` viser strukturert informasjon i rader og kolonner, og gjør det enklere å skanne og sammenligne data.

## Bruk

```tsx
import { Table } from 'rk-designsystem';

<Table>
  <caption>Table caption</caption>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Header 1</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Cell 1</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Foot>
    <Table.Row>
      <Table.HeaderCell>Footer 1</Table.HeaderCell>
    </Table.Row>
  </Table.Foot>
</Table>
```

### Tabelltittel
Bruk `caption` til å beskrive tabellen kort.

### Celle‑overskrifter
Bruk `Table.HeaderCell` for rad/kolonneoverskrifter. Sett `scope="col"` eller `scope="row"` for bedre skjermleserstøtte.

## Retningslinjer

Bruk `Table` for strukturert data som skal sammenlignes raskt.

**Gjør dette**
- Venstrejuster tekst; høyrejuster tall.
- Bruk `Table.HeaderCell` i overskriftceller.
- Vurder meny for sekundære radhandlinger.

**Unngå dette**
- Vise store datamengder på mobil uten tilpasning.
- Bruke tabell til layout.

## Tekst

Hold celleinnhold kort og konsist.

## Tilgjengelighet

- Bruk `Table.HeaderCell` med korrekt `scope`.
- Legg alltid til `caption`.
- Unngå sammenslåtte celler og flere interaktive elementer i samme celle.
- Test tastaturnavigasjon for sortering og fokus.

---

# Tabs

#### `Tabs` lar brukeren navigere mellom relaterte deler av innhold der én del vises om gangen.

## Bruk

```tsx
import { Tabs } from 'rk-designsystem';

<Tabs defaultValue="value1">
  <Tabs.List>
    <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
    <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
    <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="value1">content 1</Tabs.Panel>
  <Tabs.Panel value="value2">content 2</Tabs.Panel>
  <Tabs.Panel value="value3">content 3</Tabs.Panel>
</Tabs>
```

## Retningslinjer

Bruk `Tabs` for å strukturere relatert innhold i tydelige seksjoner uten nytt sideskift.

**Passer til å**
* strukturere innhold på samme side
* gjøre navigasjonen enklere når ikke alt må vises samtidig

**Passer ikke til å**
* gi umiddelbar oversikt (tabs skjuler innhold)
* sammenligne informasjon på tvers av seksjoner
* steg‑for‑steg‑prosesser eller hovednavigasjon

### Beste praksis
* Begrens antall tabs.
* Bruk korte, presise navn.
* Plasser det viktigste først.
* Unngå deaktiverte tabs.
* Hold tabs på én linje for god skannbarhet.

## Tilgjengelighet

`Tabs` støtter tastaturnavigasjon. Hver tab skal ha en unik tittel.

### Tastaturnavigasjon
* <kbd>Tab</kbd> flytter fokus til neste interaktive element
* <kbd>→</kbd> neste tab
* <kbd>←</kbd> forrige tab
* <kbd>Home</kbd> første tab
* <kbd>End</kbd> siste tab
* <kbd>Enter</kbd> eller <kbd>Space</kbd> aktiverer valgt tab

---

# Tag

#### `Tag` er en statisk merkelapp som kan brukes for å kategorisere innhold eller formidle status/prosess. Den er ikke klikkbar.

## Bruk

```tsx
import { Tag } from 'rk-designsystem';

<Tag>Beta</Tag>
```

## Retningslinjer

Bruk korte, lett forståelige etiketter for rask skanning. `Tag` egner seg til å vise metadata som kategori eller status.

**Passer til**
- å kategorisere innhold
- å vise status eller tilstand

**Passer ikke til**
- lenker (bruk `Link`)
- handlinger (bruk `Button`)
- filtrering (bruk `Chip`)

### Plassering
Plasser `Tag` typisk etter tittel/navn på elementet.

## Tekst

- Hold teksten kort; helst ett ord, maks to ved behov.
- Bruk gjenkjennelige ord og begreper.
- Vis flere tags som liste for bedre skjermleseropplevelse.

## Tilgjengelighet

Når flere tags vises sammen, bruk en semantisk liste.

---

# Textarea

#### `Textarea` brukes når brukeren skal kunne skrive inn tekst over flere linjer.

## Bruk

`Textarea` er en native komponent som ofte kombineres med `Field` for beskrivelse, validering eller prefiks/suffiks. `Textfield` med `multiline` er som regel å foretrekke.

```tsx
import { Textarea, Label } from 'rk-designsystem';

<Label htmlFor="my-textarea">Label</Label>
<Textarea id="my-textarea" rows={5} />
```

## Retningslinjer

Bruk `Textarea` når det forventes lengre fritekst.

**Passer til**
- fritekstsvar med flere linjer
- åpne felt uten forhåndsdefinerte alternativer

**Passer ikke til**
- korte svar (navn, e‑post, telefon) – bruk `Input`
- strengt strukturerte data (f.eks. fødselsnummer, dato)

### Størrelse og tilpasning
- Sett `rows` etter forventet tekstmengde.
- La feltet kunne utvide seg når brukeren skriver.
- Begrens bredde til 50–75 tegn for god lesbarhet.

---

# Textfield

#### `Textfield` gir brukere muligheten til å skrive fritekst eller tall.

## Bruk

`Textfield` er bygd på `Field` og kan rendre som `Input` eller `Textarea` via `multiline`. Ikke pakk `Textfield` inn i `Field` – det er allerede inkludert.

```tsx
import { Textfield } from 'rk-designsystem';

<Textfield label="Navn" />
```

## Retningslinjer

Bruk `Input` for korte svar og `Textarea` for lengre fritekst. Unngå `placeholder` som instruks. Tilpass bredde etter forventet innhold.

### Inndata
Velg passende `type` og bruk `autocomplete` der formål finnes i WCAG‑listen. For rene tallfelt, foretrekk `type="text"` med `inputmode="numeric"` over `type="number"`.

## Tekst

Alltid label. Hold den kort (helst én linje), og unngå kolon.

## Tilgjengelighet

Unngå deaktivert (`disabled`) der det er mulig; vis heller tekst eller bruk `readOnly`. Prefiks/suffiks er dekorative og må suppleres av en beskrivende label.

---

# ToggleGroup

#### `ToggleGroup` samler relaterte valg i en gruppe knapper der kun ett valg kan være aktivt om gangen.

## Bruk

Plasser helst innholdet som styres rett etter `ToggleGroup` i DOM-en.

```tsx
import { ToggleGroup } from 'rk-designsystem';

<ToggleGroup defaultValue="value1">
  <ToggleGroup.Item value="value1">Option 1</ToggleGroup.Item>
  <ToggleGroup.Item value="value2">Option 2</ToggleGroup.Item>
  <ToggleGroup.Item value="value3">Option 3</ToggleGroup.Item>
</ToggleGroup>
```

## Retningslinjer

Bruk `ToggleGroup` når valget har direkte og synlig effekt i grensesnittet.

**Passer til**
- filtrering i lister/tabeller
- bytte mellom visninger (f.eks. tabell/graf)
- innstillinger som påvirker visningen umiddelbart

**Passer ikke**
- når det er for mange valg til at de får plass i bredden
- når valgene har lange tekster (vurder `Tabs` eller `Radio`)

## Tekst

Gi gruppen en forklarende ledetekst. Skriv korte, tydelige tekster for hvert valg. Ved ikon‑kun, bruk `Tooltip` for forklaring.

## Tilgjengelighet

`ToggleGroup` har tydelig fokusindikator og bruker roving tabindex.

### Tastaturinteraksjon
- <kbd>Tab</kbd> flytter fokus til aktiv knapp
- <kbd>Shift</kbd>+<kbd>Tab</kbd> går ut av gruppen
- <kbd>Space</kbd>/<kbd>Enter</kbd> aktiverer valgt knapp
- <kbd>←</kbd>/<kbd>↑</kbd> forrige knapp
- <kbd>→</kbd>/<kbd>↓</kbd> neste knapp

---

# Tooltip

#### `Tooltip` viser kort informasjon ved hover eller fokus, typisk for å forklare et symbol eller gi sekundære detaljer.

## Bruk

Du kan sende inn en streng eller et element som trigger.

```tsx
import { Tooltip } from 'rk-designsystem';

// streng – rendrer <span>
<Tooltip content="Vises i tooltip">
  Trigger
</Tooltip>

// element – rendrer ditt element
<Tooltip content="Vises i tooltip">
  <Button>Trigger</Button>
</Tooltip>
```

### Polyfill
`Tooltip` benytter Popover‑attributtet. For eldre nettlesere kan du vurdere en polyfill.

## Retningslinjer

Bruk `Tooltip` til kort, ikke‑kritisk informasjon. Viktig innhold bør stå i brødtekst eller hjelpetekst på siden.

**Passer til**
* å forklare symboler
* å beskrive en knapphandling
* å vise tastatursnarveier

**Passer ikke til**
* lange forklaringer eller skjult innhold
* meldinger/advarsler
* lenker eller interaktive elementer
* tekst som allerede er synlig

Hvis du trenger rikere innhold, vurder `Popover`.

## Tilgjengelighet

Tooltip vises ved hover og ved fokus med tastatur. På berøringsenheter kan `Tooltip` være mindre egnet.

---

# Header

#### Den globale toppteksten for applikasjonen. Header håndterer navigasjon, brukersesjon, søk og menyer.

## Bruk

Header-komponenten er ment å ligge øverst i applikasjonen og være vedvarende på tvers av sider. Den tilpasser seg automatisk mobil og desktop.

### Grunnleggende oppsett

```tsx
import { Header } from 'rk-designsystem';

const MyApp = () => {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Header
        activePage={page}
        setPage={setPage}
        showUser={true}
        showSearch={true}
        showLogin={false}
      >
        {/* Innholdet i den utvidbare menyen */}
        <nav>
          <a href="#" onClick={() => setPage('home')}>Hjem</a>
          <a href="#" onClick={() => setPage('about')}>Om oss</a>
        </nav>
      </Header>

      <main>
        {/* Sideinnhold */}
      </main>
    </div>
  );
};
```

### Varianter

#### Gjest (Ikke innlogget)
Viser "Logg inn" i stedet for brukerprofil.

```tsx
<Header showUser={false} showLogin={true} />
```

#### Uten søk
Skjuler søkeknappen hvis applikasjonen ikke har globalt søk.

```tsx
<Header showSearch={false} />
```

#### Sekundær logo
Viser en ekstra logo ved siden av hovedlogoen.

```tsx
<Header
  secondaryLogo={true}
  secondaryLogoSrc="https://..."
  secondaryLogoAlt="Partner Logo"
/>
```

### Meny-innhold (Slots)
Headeren har en `children`-prop som rendres inne i den utvidbare menyen.

```tsx
<Header>
  <div style={{ padding: '2rem' }}>
    <h2>Min Meny</h2>
    <ul>
      <li>Lenke 1</li>
      <li>Lenke 2</li>
    </ul>
  </div>
</Header>
```

## Tilgjengelighet (A11y)
- **ARIA-labels:** Alle knapper har beskrivende `aria-label` attributter.
- **Tastaturnavigasjon:** Menyer og søk kan åpnes og lukkes med tastatur.
- **Fokus-styring:** Fokus holdes innenfor menyen når den er åpen.

---

# AI_DESIGN_SYSTEM_GUIDE.md

Se egen fil `AI_DESIGN_SYSTEM_GUIDE.md` for komplett AI-guide inkludert:
- For AI Assistants: How to Use This Guide
- CRITICAL: Before Writing Any Code - Checklist
- Common AI Mistakes to Avoid
- Overview
- Design System Architecture
- Available Components (Full API Reference)
- Design Tokens (Complete List)
- Figma MCP Integration
- Workflow: Figma to Code
- Best Practices
- Component Mapping Guide
- Troubleshooting
- Additional Resources
- Quick Reference

---

# Webapplikasjon Innhold (Norsk)

Dette er alt tekstinnhold som vises i webapplikasjonen på norsk.

## Header (Navigasjon)

- **Nattmodus** - Modus for mørkt tema
- **Bytt tema** - Knapp for å bytte mellom lys og mørk modus
- **Språk:** - Språkvalg
- **Søk** - Søkefunksjon
- **Søk etter innhold...** - Søkefelt placeholder
- **Lukk søk** - Lukk søkefeltet
- **Åpne søk** - Åpne søkefeltet
- **Tøm søk** - Tøm søkefeltet
- **Lukk** - Lukk
- **Meny** - Meny
- **Lukk meny** - Lukk menyen
- **Åpne meny** - Åpne menyen
- **Logg inn** - Logg inn
- **Støtt oss** - Støtt oss knapp
- **Forslag til søk** - Søkeforslag
- **Vis alle resultater** - Vis alle søkeresultater
- **Ingen treff funnet for** - Ingen resultater melding
- **Velg språk** - Språkvalg
- **Norges Røde Kors Hjem** - Aria-label for hjem-lenke

### Navigasjonslenker
- Design
- Komponenter
- Kode
- Tokens
- Vårt arbeid
- Bli frivillig
- Kurs og opplæring

---

## Hjemmeside

### Hero-seksjon
**Røde Kors Designsystem**

Felles komponentbibliotek og retningslinjer for design og utvikling av digitale løsninger i Røde Kors.

**Søk i komponenter** - Hovedknapp

### Utforsk systemet (Bento-navigasjon)

#### Komponenter
Bibliotek med ferdige React-komponenter.

#### Design
Farger, typografi og prinsipper.

#### Kode
Dokumentasjon, arbeidsflyt og MCP.

#### Tokens
Design tokens, farger og spacing.

### Verdier-seksjon

#### Universell utforming
Innebygd tilgjengelighet som standard. Vi følger WCAG 2.1-kravene strengt.
**Les retningslinjene**

#### Konsistent merkevare
Design tokens sikrer at Røde Kors sin visuelle profil ivaretas på alle flater.
**Se farger**

#### Effektiv utvikling
Spar tid med ferdige komponenter. Fokuser på funksjonalitet, ikke CSS.
**Utforsk komponenter**

### Hurtighandlinger

#### Hopp rett inn

**Start i kode**
Se oppsett, tokens og eksempler.
*Åpne kode*

**Designguiden**
Farger, typografi og prinsipper.
*Åpne design*

**Komponentbibliotek**
Utforsk og gjenbruk ferdige komponenter.
*Åpne komponenter*

### Nyttig akkurat nå
- Oppdaterte designtokens
- Source Sans 3 inkludert
- Nye komponentvarianter
- Se alle oppdateringer

### Visuelle elementer (kort-demonstrasjon)
- Profil
- Navn Navnesen
- Frivillig
- Lagre
- Godkjent
- Avvist
- Mørk modus
- Viktig melding
- Husk å oppdatere retningslinjene...
- Alle
- Aktive
- Varsler
- Status

---

## Komponentsiden

### Komponenter

Designsystemet inneholder grunnleggende komponenter som kan settes sammen på mange ulike måter og i forskjellige mønstre.

**Søk etter komponent...** - Søkefelt placeholder
**Søk i komponenter** - Aria-label for søk
**Ingen komponenter funnet for** - Ingen resultater melding

---

## Kodesiden

### Sidenavigasjon
- Oversikt
- Arbeidsflyt
- Struktur
- Bidra
- Startside
- Kom i gang
- Styling
- Designtokens
- Fonter
- Bruk av ikoner
- Fra Figma til Kode (MCP)
- Introduksjon
- Cursor
- Claude Code
- Komponent Kreasjon
- Metadata filer
- Utviklerguide
- AI Guide for Assistanter

### Oversikt

#### Røde Kors Designsystem

Velkommen til Røde Kors Designsystem! Dette repositoriet inneholder et bibliotek med gjenbrukbare UI-komponenter bygget med React, skreddersydd for Norges Røde Kors sine digitale prosjekter.

Det er utviklet ved å utnytte grunnkomponentene fra Digdirs Designsystemet. Denne tilnærmingen sikrer en helhetlig og gjenkjennelig visuell identitet på tvers av alle applikasjoner for Røde Kors. Systemet er forhåndskonfigurert med det offisielle Røde Kors-temaet, som leveres via en dedikert designtoken-pakke.

Hovedmålet er å sikre merkevarekonsistens, forbedre utviklingseffektiviteten og opprettholde høye standarder for tilgjengelighet i alle Røde Kors-applikasjoner.

Storybook fungerer som den interaktive dokumentasjonen og utviklingsmiljøet for å vise og teste disse komponentene.

**Kom i gang**
Installasjon, oppsett og retningslinjer for utviklere.

**Designtokens**
Lær hvordan du bruker designtokens og fonter.

**Arbeidsflyt**
Lær hvordan du bruker MCP-verktøy for å hente komponenter direkte fra Figma.

### Kom i gang

For å ta i bruk Røde Kors Designsystem i din Next.js (eller annen React) applikasjon:

#### 1. Installasjon

Installer de nødvendige npm-pakkene for prosjektet ditt. Du trenger tre pakker: selve komponentbiblioteket (rk-designsystem), grunnstilene fra Digdir, og Røde Kors-temapakken (rk-design-tokens).

**Gå til GitHub Repository**

**Merk:** Du trenger ikke å installere @digdir/designsystemet-react separat, da alle nødvendige komponenter er inkludert i rk-designsystem-pakken.

#### 2. Inkludering av stiler (CSS)

For at komponentene skal styles riktig, må du importere stilarkene på øverste nivå i applikasjonen din, for eksempel i layout.tsx (for Next.js App Router) eller _app.tsx (for Next.js Pages Router).

**Viktig rekkefølge:** Det er avgjørende at grunnstilarket (@digdir/designsystemet-css) lastes før Røde Kors-temafilen (rk-design-tokens). Dette sikrer at vårt temas tokens overstyrer standardverdiene korrekt.

**Eksempel for Next.js (App Router - src/app/layout.tsx):**

**Eksempel for Next.js (Pages Router - pages/_app.tsx):**

#### 3. Bruk av komponenter

Når stilarkene er inkludert, kan du begynne å importere og bruke komponenter i prosjektet ditt. Alle komponenter du trenger er tilgjengelige direkte fra rk-designsystem-pakken.

**3.1 Importer og bruk Røde Kors Designsystem-komponenter**

**3.2 Eksempel på bruk i en Next.js-side**

Utseendet til alle komponenter styres fullt ut av pakken rk-design-tokens. For å motta visuelle oppdateringer til merkevaretemaet (som en ny primærfarge), oppdaterer du ganske enkelt pakken til siste versjon.

### Røde Kors Designtokens

Dette repositoriet er den sentrale kilden for alle designtokens (farger, typografi, avstander osv.) for Norges Røde Kors sine digitale produkter. Det fungerer som en sannhetskilde (single source of truth) som automatisk distribuerer stilendringer til alle tilkoblede prosjekter.

#### Hvordan ta i bruk tokens

For å bruke designtokens i ditt prosjekt, må du installere og konfigurere temapakken.

**1. Installasjon**

**2. Importer CSS**

I din applikasjons rot-layout (f.eks. layout.tsx), importer grunnstilarket før Røde Kors-temafilen.

#### Hvordan legge til fonten

#### Automatisert arbeidsflyt for Designtokens (End-to-End)

Denne arbeidsflyten etablerer en helautomatisert pipeline som kobler designprosessen vår direkte til live produksjonsapplikasjoner. Når en designer oppdaterer stilen i Figma, bygger, versjonerer og publiserer dette systemet automatisk en ny stilpakke til npm. Deretter varsles Vercel-prosjektene våre, som oppdaterer seg selv og redeployer med de nye stilene.

**Fase 1: En Designer gjør en endring (Publisist)**
1. Design i Figma: En designer gjør en endring på en farge, font eller annen designtoken.
2. Push til GitHub: Ved bruk av Token Studio-pluginet pusher designeren endringene. Dette committer automatisk de oppdaterte JSON-filene til main-branchen.
3. Trigge Publisher Workflow: Denne pushen trigger umiddelbart GitHub Action definert i .github/workflows/publish.yml.
4. Bygg & Commit Artefakter: Workflowen kjører npm run build for å generere CSS fra JSON-filene og committer resultatene.
5. Versjonering & Release: Workflowen kjører npm version patch for å øke versjonsnummeret, lage en release-commit, og tagge den.
6. Publiser til npm: Til slutt publiserer workflowen den nye versjonen av pakken til npm-registeret.

**Fase 2: Varsling av applikasjoner (Signalet)**

Send et Dispatch-signal: Etter en vellykket publisering, sender workflowen et repository_dispatch-signal til konsumentprosjekter som rk-designsystem for å varsle om den nye versjonen.

**Fase 3: Automatisk oppdatering og redeploy (Konsumentene)**
1. Trigge Consumer Workflow: Dispatch-signalet starter en "Update"-workflow i konsumentprosjektene.
2. Oppdater Avhengigheter: Workflowen kjører npm update rk-design-tokens for å hente den siste versjonen.
3. Commit & Push Oppdateringen: Workflowen committer den oppdaterte package-lock.json-filen.
4. Vercel Auto-Deploys: Vercels Git-integrasjon oppdager den nye commiten og starter automatisk en ny deployment.

### Fonter

Røde Kors Designsystem bruker fonten Source Sans 3. For at typografien skal vises korrekt i applikasjonen din, må denne fonten lastes inn.

#### Hvordan legge til fonten

Du kan inkludere fonten ved å legge til følgende linjer i <head>-elementet i din HTML eller i rot-layouten din.

#### Etter lasting

Når fonten er lastet, vil CSS-variablene fra rk-design-tokens automatisk ta den i bruk (--ds-font-family).

#### Eksempel for Next.js

For Next.js App Router, legg til fonten i layout.tsx.

For Next.js Pages Router, legg til fonten i _app.tsx eller _document.tsx.

#### CSS-variabler

Etter at fonten er lastet, bruker designsystemet automatisk CSS-variabelen --ds-font-family som er definert i rk-design-tokens pakken. Du trenger ikke å spesifisere fonten manuelt i komponentene dine.

### Bruk av Ikoner

Dette biblioteket er designet for å fungere sømløst med det offisielle ikonsettet fra NAV/Aksel.

#### Installasjon

#### Import og bruk

Ikoner eksporteres som navngitte React-komponenter. Importer kun de ikonene du trenger (tree‑shakable).

#### Tilgjengelighetsguide
- Ikon + synlig tekst: sett aria-hidden på ikonet slik at skjermlesere ikke leser det opp to ganger.
- Ikon-kun triggere (f.eks. en knapp): legg til en beskrivende aria-label på triggeren, behold ikonet aria-hidden.
- Farge: ikoner arver currentColor; bruk komponentens variant/farge for å styre det (f.eks. knappevarianter, tag-farger).
- Størrelse: sett fontSize (f.eks. fontSize="1.25rem") eller inline style (f.eks. style="{ fontSize: '1.25rem' }").

#### Ytelse

Bruk navngitte importer fra @navikt/aksel-icons for å holde pakkestørrelsen nede – ubrukte ikoner fjernes (tree-shaken) av moderne bundlere.

### Bidra til Biblioteket

Denne guiden gir et sett med standarder og beste praksis for å lage nye komponenter. Å følge disse retningslinjene sikrer at komponentbiblioteket vårt forblir konsistent, tilgjengelig og enkelt å vedlikeholde.

#### Kom i gang (for bidragsytere)

Følg disse stegene for å kjøre det lokale utviklingsmiljøet. Alle kommandoer skal kjøres fra roten av prosjektet.

#### Kjerneprinsipper

Hver komponent vi bygger bør følge disse kjerneprinsippene:

- **Tilgjengelighet (A11y):** Komponenter må kunne brukes av alle, inkludert personer med nedsatt funksjonsevne. Dette betyr korrekte ARIA-attributter, tastaturnavigasjon og semantisk HTML.
- **Gjenbrukbarhet:** Komponenter bør være generiske nok til å brukes i flere kontekster uten modifikasjon.
- **Konsistens:** Komponenter skal følge våre etablerte designtokens (farger, avstander, typografi) og ha et konsistent API og struktur.
- **Dokumentasjon:** Hver komponent må dokumenteres i Storybook for å gjøre den oppdagbar og enkel å bruke for andre utviklere.

#### Når skal man lage en ny komponent

Før du begynner å kode, avgjør hvilken type komponent du trenger. De fleste av våre behov faller inn i en av tre kategorier:

**Wrapped Component (Enkel):**
- Hva det er: En komponent som direkte wrapper og re-eksporterer en komponent fra @digdir/designsystemet-react uten modifikasjoner.
- Når den skal brukes: Når den grunnleggende Digdir-komponenten dekker behovene våre perfekt, men vi ønsker å inkludere den i vårt eget bibliotek for en konsistent importkilde.
- Eksempel: Buttons-komponenten er et perfekt eksempel på dette.

**Wrapped Component (med stiloverstyringer):**
- Hva det er: En wrappet Digdir-komponent hvor vi bruker tilpasset CSS for å justere utseendet slik at det passer bedre til Røde Kors sitt spesifikke designspråk.
- Når den skal brukes: Når en Digdir-komponent er funksjonelt korrekt, men trenger visuelle justeringer (f.eks. andre ikoner, border-radius, padding).
- Eksempel: Alert-komponenten, som bruker composes i CSS for å arve grunnstiler og deretter påføre egne overstyringer.

**Custom Component (fra bunnen):**
- Hva det er: En helt ny komponent bygget når ingen eksisterende Digdir-komponent dekker kravene våre.
- Når den skal brukes: For unike UI-mønstre eller funksjonalitet som ikke dekkes av grunnbiblioteket.
- Eksempel: DateInput-komponenten er en tilpasset komponent med egen tilstand, logikk og styling.

#### Filstruktur for komponenter

For å opprettholde konsistens, bør hver ny komponent følge denne filstrukturen. Lag en ny mappe under src/components/ med komponentens PascalCase-navn.

#### Retningslinjer for koding

**1. Komponentlogikk (MyNewComponent.tsx)**

- TypeScript først: Alle komponenter må skrives i TypeScript. Definer et Props-interface for komponenten din, som utvider fra grunnleggende HTML-element eller Digdir-komponentprops hvis aktuelt.
- Forward Refs: Bruk alltid React.forwardRef for å tillate foreldrekomponenter å få en ref til det underliggende DOM-elementet.
- Tilgjengelighet er obligatorisk:
  - Bruk semantisk HTML (<button>, <label>, <nav>).
  - Sørg for at alle interaktive elementer kan fokuseres og betjenes med tastatur.
  - Gi aria-label for knapper som kun har ikon eller elementer hvor tekstetiketten ikke er synlig.
  - Bruk aria-invalid, aria-describedby, osv., for å kommunisere tilstand til hjelpemidler.
- Controlled vs. Uncontrolled: Hvis komponenten din har tilstand (som en input), bør den støtte både kontrollerte (value + onChange) og ukontrollerte (defaultValue) mønstre.
- Props-navngiving: Bruk data-* attributter for stylingvarianter (f.eks. data-size, data-color) for å samkjøre med mønstrene i våre eksisterende komponenter.

**2. Styling (styles.module.css)**

- CSS Modules: For tilpassede komponenter må alle stiler plasseres i en styles.module.css-fil. Dette scoper klassenavn lokalt og forhindrer globale stilkonflikter.
- Designtokens: Bruk alltid våre designtokens (var(--ds-...)) for farger, avstander, fonter, osv. Ikke bruk hardkodede verdier (f.eks. #FFF, 16px).
- Overstyring av Wrapped Components: For wrapped components, bruk en standard CSS-fil. Bruk @layer og composes nøkkelord for å utvide grunnleggende Digdir-stiler uten å øke CSS-spesifisiteten unødvendig.

**3. Dokumentasjon (MyNewComponent.stories.tsx)**

- Din Storybook-fil er den offisielle dokumentasjonen. Den må være tydelig og omfattende.
- meta Object: Definer komponentens tittel, komponentreferanse, og tags: ['autodocs'] for å aktivere automatisk dokumentasjon.
- argTypes: Dokumenter hver enkelt prop. Gi en beskrivelse, kontrolltype (f.eks. select, boolean, text), og alternativer hvis aktuelt. Dette driver de interaktive kontrollene i Storybook.
- Lag flere Stories: Lag en egen story for hver nøkkeltilstand og variant av komponenten din (f.eks. Default, Disabled, WithError, WithIcon).

#### Bidragsprosess

**Opprett en Pull Request (PR):**

1. Opprett en Branch: Pull de siste endringene fra main-branchen og opprett en ny feature-branch: git checkout -b feat/min-nye-komponent.
2. Åpne en Draft PR: Så snart du starter, åpne en draft pull request på GitHub. Dette forhindrer dobbeltarbeid og lar andre se hva du jobber med.
3. Commit endringene dine: Mens du jobber, lag små, logiske commits.
4. Klar for gjennomgang: Når utviklingen er ferdig og alle automatiserte sjekker passerer, merk PR-en som "Ready for review" og be om en gjennomgang fra designsystem-forvalterne.

### Arbeidsflyt: Fra Figma til Kode med MCP

#### Introduksjon til MCP og Arbeidsflyt

Denne guiden beskriver hvordan vi bruker Model Context Protocol (MCP) for å koble Figma direkte til utviklingsmiljøet. Dette gjør det mulig å hente designspesifikasjoner, tokens og strukturer automatisk, validert mot vårt designsystem.

#### Hva er MCP?

Model Context Protocol (MCP) er en åpen standard som lar AI-assistenter kommunisere direkte med eksterne datakilder og verktøy. I vår kontekst bruker vi MCP til å koble Figma-designfiler direkte til utviklingsmiljøet vårt.

Dette betyr at når du gir AI-en en Figma-lenke, kan den automatisk:
- Lese designspesifikasjoner direkte fra Figma
- Hente eksakte farger, spacing, typografi og andre design tokens
- Forstå komponentstrukturen og hierarkiet
- Generere kode som matcher designet nøyaktig

#### Hvorfor bruke MCP?

Tradisjonelt har utviklere måttet manuelt konvertere design til kode, noe som kan være tidkrevende og feilutsatt. Med MCP får vi:

- **Nøyaktighet:** AI-en leser designet direkte fra kilde, så ingen informasjon går tapt i oversettelsen.
- **Hastighet:** Automatisk konvertering fra design til kode sparer timer med manuelt arbeid.
- **Konsistens:** Alle design tokens og komponenter brukes konsekvent, validert mot designsystemet vårt.
- **Effektivitet:** Mindre tid på repetitivt arbeid, mer tid på å løse faktiske problemer.

#### Hvordan fungerer det?

Prosessen er enkel og følger disse stegene:

**Steg-for-steg oversikt**

**1. Oppsett (kun én gang)**
Du setter opp en lokal MCP-server som kobler Figma til AI-assistenten din. Dette krever en Figma Access Token og litt konfigurasjon.

**2. Hent AI Design System Guide**
Du laster ned en spesiallaget guide som inneholder all informasjon om komponenter, tokens og beste praksis. Dette gir AI-en full kontekst om designsystemet vårt.

**3. Kopier Figma-lenke**
I Figma markerer du den delen av designet du vil implementere og kopierer lenken til den spesifikke komponenten eller rammen.

**4. Gi instruksjoner til AI-en**
Du gir AI-en Figma-lenken sammen med instruksjoner om hva du vil lage. AI-en bruker MCP til å lese designet og genererer kode basert på designsystemet vårt.

**5. Review og juster**
AI-en genererer kode som du kan gjennomgå, teste og justere etter behov. Koden følger automatisk design tokens og komponenter fra designsystemet.

#### Neste steg

Nå som du forstår grunnleggende om MCP og arbeidsflyten, kan du velge mellom:
- Cursor workflow - for brukere av Cursor IDE
- Claude Code workflow - for brukere av Claude Code

#### Del 1: Oppsett av Figma MCP Server

Dette gjøres kun én gang for å aktivere integrasjonen i Cursor/Windsurf.

For at AI-en skal kunne "lese" Figma-filene, må vi sette opp en lokal kobling.

**1. Hent Figma Access Token**
1. Gå til Figma -> Settings -> Personal Access Tokens.
2. Klikk Generate new token.
3. Navn: F.eks. "Cursor MCP".
4. Scopes: Velg File content: Read og File metadata: Read.
5. Kopier tokenet (du får ikke se det igjen).

**2. Konfigurer i Cursor**
1. Åpne innstillinger i Cursor (Ctrl/Cmd + ,).
2. Gå til Features -> MCP.
3. Klikk + Add New MCP Server.
4. Fyll inn følgende:
   - Type: command
   - Name: figma
   - Command: npx -y @modelcontextprotocol/server-figma
5. Legg til Environment Variable (viktig!):
   - Key: FIGMA_ACCESS_TOKEN
   - Value: [Lim inn tokenet du kopierte i steg 1]
6. Når lyset ved siden av "figma" blir grønt, er verktøyet klart til bruk.

#### Del 2: Daglig Arbeidsflyt

**Steg 0: Indeksering av Dokumentasjon**

Gjør dette én gang per prosjekt for å gi AI-en full oversikt over designsystemet.

For at Cursor skal forstå våre spesifikke tokens, komponentnavn og retningslinjer, må vi la den lese gjennom dokumentasjonen på forhånd.

1. Åpne Chat i Cursor (Cmd + L / Ctrl + L).
2. Skriv @Docs i tekstfeltet og velg "Add new doc" fra menyen som dukker opp.
3. Lim inn URL-en til hovedsiden for dokumentasjonen: https://norwegianredcross.github.io/DesignSystem/
4. Gi den et navn som er lett å huske, f.eks. RødeKors.
5. Trykk Confirm.

**Hva skjer nå?**

Cursor vil automatisk "crawle" (lese) gjennom hovedsiden og alle undersider. Den lagrer informasjonen i en lokal database. Dette gjør at du senere kan referere til @RødeKors i chatten, og AI-en vil umiddelbart vite alle fargekoder, spacing-variabler og komponent-regler uten at du trenger å lime inn tekst manuelt. NB: Dette gjelder når du refererer til @RødeKors i chatten. Hvis du bruker .cursorrules, trenger du ikke å legge ved @RødeKors manuelt.

**Steg 0.5: Hent AI Design System Guide**

Før du begynner å konvertere Figma-design til kode, må du hente AI Design System Guide. Denne guiden inneholder komplett dokumentasjon om alle komponenter, design tokens, og beste praksis som AI-assistenten trenger for å produsere korrekt kode.

**Hvorfor bruke curl?**

curl er den anbefalte metoden fordi:
- Filen lastes ned lokalt - AI-assistenten har alltid tilgang til den uten internett
- Raskere referanse - Ingen behov for å laste ned på nytt ved hver prompt
- Fungerer offline - Etter nedlasting kan du jobbe uten internettforbindelse
- Konsistent kontekst - AI-en leser samme versjon av guiden hver gang
- Enklere referanse - Bare bruk filnavnet (@AI_DESIGN_SYSTEM_GUIDE.md) i stedet for lange URL-er

**For Claude Code:**

I Claude Code kan du hente guiden direkte i terminalen eller be Claude om å gjøre det:

*Metode 1: Hent via terminal*
1. Åpne terminalen i Claude Code
2. Kjør denne kommandoen: `curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md`
3. Verifiser at filen er lastet ned: `ls -la AI_DESIGN_SYSTEM_GUIDE.md`

*Metode 2: Be Claude om å hente den*
Du kan også be Claude Code direkte: "Please fetch the AI Design System Guide from https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md"

Merk: Dette laster ned filen lokalt, akkurat som curl-kommandoen.

**Steg 0.6: Be Claude om å lese guiden og sette opp prosjektet**

Før du begynner å konvertere Figma-design til kode, må du be Claude om å lese gjennom AI Design System Guide og verifisere at prosjektet er satt opp korrekt i henhold til guiden. Dette sikrer at alle nødvendige pakker, CSS-imports og font-oppsett er på plass før konvertering.

1. Be Claude om å lese AI Design System Guide
2. Be Claude om å verifisere CSS-imports
3. Be Claude om å verifisere font-oppsett
4. Be Claude om å verifisere pakke-installasjon
5. Be Claude om å verifisere prosjektstruktur

**Ferdig prompt å kopiere:**

```
Les gjennom AI_DESIGN_SYSTEM_GUIDE.md filen og verifiser at prosjektet mitt er satt opp korrekt i henhold til guiden. Sjekk spesifikt:

1. At CSS-filene er importert i riktig rekkefølge (base styles først, deretter theme)
2. At Source Sans 3 font er konfigurert korrekt (se Font Setup-seksjonen)
3. At alle nødvendige pakker er installert (rk-designsystem, @digdir/designsystemet-css, rk-design-tokens)
4. At prosjektstrukturen matcher anbefalingene i guiden

Gi meg en oversikt over hva som er korrekt satt opp og hva som eventuelt må fikses.
```

Du trenger ikke gjøre dette manuelt - be Claude om å gjøre det. Dette steget sikrer at prosjektet er riktig konfigurert før du begynner å konvertere Figma-design.

**Bruk av guiden i Claude:**

Etter at guiden er lastet ned, referer til den i dine prompts:
"Using the AI_DESIGN_SYSTEM_GUIDE.md file and this Figma link [paste link], create a React component..."

**Sette opp Figma MCP i Claude Code:**

For å aktivere Claude Code til å lese Figma-design direkte, må du legge til Figma MCP-serveren.

1. Åpne Claude Code terminal
2. Kjør: `claude mcp add --transport sse figma http://127.0.0.1:3845/sse`
3. Start Figma MCP-serveren: `npx -y @modelcontextprotocol/server-figma`
4. Sett miljøvariabel: `export FIGMA_ACCESS_TOKEN=your_token_here`

**Bruke Figma MCP i Claude:**

"Using this Figma design [paste Figma link], create a React component following the design system guidelines from AI_DESIGN_SYSTEM_GUIDE.md"

MCP-serveren lar Claude automatisk lese Figma node-egenskaper, dimensjoner og design tokens.

**For Cursor:**

*Metode 1: Hent via terminal*
1. Åpne terminalen i Cursor (Ctrl + ` eller Cmd + `)
2. Kjør: `curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md`

*Metode 2: Referer direkte i chat*
`@AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md`

*Metode 3: Via .cursorrules (Anbefalt)*
Legg til instruksjonen om å hente guiden i .cursorrules filen.

**Hvorfor trenger jeg denne guiden?**

AI Design System Guide inneholder:
- Komplett liste over alle tilgjengelige komponenter med props og eksempler
- Alle design tokens (farger, spacing, typografi, etc.) med korrekte CSS-variabler
- Komponentmapping fra Figma-elementer til React-komponenter
- Beste praksis for tilgjengelighet, TypeScript, og CSS Modules
- Troubleshooting-guide for vanlige problemer

**Steg 1: Hent presis lenke i Figma**

For best resultat bør du isolere seksjonen du jobber med.
1. Marker rammen (Frame), komponenten eller gruppen du vil implementere.
2. Høyreklikk og velg Copy link to selection (Snarvei: Ctrl + L).
3. NB: Bruk denne funksjonen fremfor å kopiere URL-en fra nettleseren.

**Steg 2: Gi kontekst (To metoder)**

For at AI-en skal følge designsystemet vårt, må den vite hvor reglene finnes.

*Alternativ A: Manuell kontekst (Raskt og enkelt)*

Bruk dette for engangstilfeller. I Composer (Chat): Skriv @ og lim inn URL-ene til dokumentasjonen:
- @https://norwegianredcross.github.io/design-tokens/theme.css
- @https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json

*Alternativ B: Automatisert med .cursorrules (Anbefalt)*

Opprett en .cursorrules fil i prosjektets rotmappe med denne konteksten:

```
You are an expert Frontend Developer implementing designs from Figma.

ALWAYS follow these rules:
1. **AI Guide:** First, fetch the AI Design System Guide: curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
2. **Documentation:** Refer to the indexed design system documentation (@RødeKors) and AI_DESIGN_SYSTEM_GUIDE.md for component usage, patterns, and guidelines.
3. **Metadata:** Use component metadata from: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
4. **Tokens:** Always use CSS variables/tokens defined in: https://norwegianredcross.github.io/design-tokens/theme.css (e.g., var(--spacing-md)).
5. **Figma MCP:** When a Figma link is provided, use the `figma` tool to inspect node properties.
```

**Steg 3: Prompt**

Gi en instruks som kobler designet mot kodebasen:

"Using the design at this Figma link and the context from the provided documentation/rules:

Create a React component for this section.

Strictly use tokens found in the documentation (colors, spacing) - no magic numbers.

Map design elements to our existing components where possible (e.g. Buttons, Headings)."

**Steg 4: Generering og Review**

AI-en bruker MCP til å lese nodedataene og genererer et kodeforslag.

Review:
- Sjekk "Diff View" i Cursor.
- Er tokens brukt riktig? (f.eks. var(--spacing-md)).
- Er semantikken god?

Apply: Trykk "Apply" for å legge koden inn i filen din.

**Tips for suksess**
- Lagre Docs som favoritter: I Cursor under "Docs"-fanen kan du indeksere norwegianredcross.github.io/.... Da kan du bruke @RødeKors som en snarvei.
- Missing Auto Layout? Hvis Figma-noden mangler Auto Layout, nevn i prompten: "Infer layout logic based on visual proximity if Auto Layout is missing."

### Metadata-filer

For å holde oversikt over komponentene og deres kobling til Figma, bruker vi metadata-filer.

#### Hva inneholder de?

Metadata-filene (som `metadata.json`) er ryggraden i dokumentasjonen vår. De definerer nøyaktig hvilke props hver komponent støtter, datatyper, standardverdier og beskrivelser.

- componentName: Navnet på komponenten (f.eks. "Button").
- importPath: Hvor komponenten importeres fra (f.eks. "rk-designsystem").
- props: En liste over alle tilgjengelige props, inkludert:
  - name: Navnet på proppen (f.eks. "variant", "disabled").
  - type: Datatypen (f.eks. "boolean", "enum", "string").
  - description: Forklaring av hva proppen gjør.
  - defaultValue: Standardverdien hvis proppen ikke settes.
  - required: Om proppen er påkrevd eller valgfri.

#### Hvordan bruke dem?

Når du oppretter en ny komponent, bør du også oppdatere metadata-filen slik at automatiske verktøy og dokumentasjonssider kan finne og vise riktig informasjon.

### Komponent Kreasjon med MCP og Design Tokens

Vi bruker Model Context Protocol (MCP) og AI-assistanse for å oversette Figma-design direkte til produksjonsklare React-komponenter.

#### Prosess

Når du sender en prompt, håndterer Figma MCP følgende steg automatisk:

**1. Identifisering og Metadata**
- Identifiser kilden: MCP leser URL-en og finner Node-ID for komponenten i Figma.
- Hent dimensjoner: MCP henter automatisk informasjon om nodens størrelse, struktur og posisjonering.

**2. Henting av Design Context og Kodeutkast**
- Generer utkast: MCP analyserer Figma-noden og genererer et førsteutkast til React-kode.
- Automatisk gjenkjenning: Verktøyet identifiserer om designet inneholder elementer som allerede finnes i biblioteket.
- Rensing: Systemet filtrerer bort unødvendige wrappers og absolutte stier.

**3. Token-Mapping og Variabel-definisjoner**
- Analyser tokens: MCP analyserer automatisk hvilke design-tokens som er brukt i Figma-filen.
- Mapping til CSS: Den oversetter Figma-verdier til våre definerte CSS-variabler.
- Figma: "color/main/base-default": "#d52b1e" → CSS: var(--ds-color-primary-color-red-base-default)
- Typografi: Font-definisjoner oversettes automatisk til korrekte typografi-klasser.

**4. Automatisk Kobling mot Eksisterende Komponenter**
- Verifisering: Figma MCP sjekker designet opp mot metadata.json og repositoryet vårt.
- Implementasjon: Dette sikrer at koden automatisk tar i bruk rk-designsystem sine komponenter.

**5. Struktur og Ferdigstilling**

Resultat: Basert på analysen produserer AI-en:
- `index.ts` (Eksport)
- `[KomponentNavn].tsx` (Logikk, prop-definisjoner)
- `[KomponentNavn].module.css` (Styling basert på tokens)
- `[KomponentNavn].stories.tsx` (Dokumentasjon og varianter)

#### Automatisering vs. Manuell Kvalitetssikring

Selv om MCP-verktøyene automatiserer mye, er det ikke en 100% sømløs overføring. Den genererte koden fungerer som et solid fundament, men en utvikler må alltid se over, kvalitetssikre og tilpasse logikken.

Verktøyene fjerner det repetitive manuelle arbeidet, slik at utvikleren kan fokusere på funksjonalitet, tilgjengelighet og edge-cases.

#### Fordeler med denne flyten
- **Presisjon:** Automatisk uthenting av variabler forhindrer "magiske tall" og hardkodede hex-koder.
- **Gjenbruk:** Automatisk sjekk mot eksisterende komponenter hindrer duplisering av kode.
- **Effektivitet:** Du trenger kun å gi en URL og en intensjon; MCP håndterer de tekniske oppslagene.
- **Vedlikehold:** Koblingen mot `theme.css` og `metadata.json` gjør at komponentene tåler oppdateringer.

---

## Designsiden

### Sidenavigasjon

**For Designere**
- Kom i gang
- Farger
- Bidra med design

**Designelementer**
- Design Tokens
- Skygger
- Størrelse og avstander
- Typografi

**Underseksjoner**
- Figma tilkobling
- Oppstart
- Lage ett nytt komponent
- Praktiske eksempler
- Token Studio
- Sette opp ditt eget fargesystem
- Designsystemets temagenerator
- Bruk fargene du har generert
- Foreslå nytt design eller forbedringer
- Hva er design tokens
- Design tokens i Figma
- Navnestruktur
- Oversikt og forklaringer av farger
- Farge-tokens
- Bruk av skygger i designet
- Skygge-tokens
- Komponentstørrelser
- Størrelse-tokens
- Font-family
- Typografi-tokens

### Design i Røde Kors

Velkommen til designdokumentasjonen.

**Kom i gang** - Gå til guide
**Farger** - Se farger

### Hva er design tokens

"Design Tokens" styrer hvordan komponentene skal se ut i forhold til farger, typografi, størrelser, avstander, former osv. Design tokens sørger vi for at både designere og utviklere arbeider etter de samme reglene og retningslinjene.

Noen av variablene er lagt opp til å være tema-baserte, det vil si at de tar utgangspunkt i din merkevare med de fargene og preferansene du selv velger. Vi jobber med en tema-bygger som skal gjøre det enklere for deg å tilpasse stilene.

Design Tokens er fleksible variabler som kan benyttes uavhengig av teknologi eller designverktøy.

### Design tokens i Figma

Vi bruker Figma-pluginen "Tokens Studio", da denne lar oss administrere flere stiler og egenskaper enn Figma i seg selv kan.

Pluginen har som mål å være W3C-kompatibel og retter seg etter standarden som etableres av W3C Design Tokens Community Group. Tokens-verdiene er dermed ikke låst til et verktøy - JSON-filen kan flyttes til andre verktøy dersom det skulle bli aktuelt.

#### Flere sett og themes

Bruk av variabler og tokens gjør det mulig å ha ett designsystem med ulike identiteter. Vi kan lage en komponent i Figma kun èn gang og style den mange ganger - Med et klikk kan vi slå på et annet theme som for eksempel aktiverer en annen fargepalett eller et annet sett med størrelser. Ved å dele tokens inn i både sets og themes, kan vi tilby avanserte former for gjenbruk.

*Videoen over viser at når settet for "Tilsynet" slås på, overstyres både fargene som er i bruk i filen og stilene som er tilgjengelig i høyremargen byttes ut.*

### Navnestruktur

Fargesystemet består av globale farger som refererer til hva fargen er (eks. red-1) og et semantisk nivå som beskriver hva fargen skal brukes til (eks. Text.Danger).

#### Navnestruktur

Fargene i Designsystemet er strukturert med en semantisk betydning. Dette betyr at de er definert etter funksjon og bruk, ikke bare etter hvordan de ser ut. Det gjør det lettere å velge riktig farge fordi du slipper å vurdere selve fargetonen og kan fokusere på hva fargen skal formidle i stedet.

Fargenavnene i Designsystemet er delt opp i 3 ledd: Navn på fargeskala, gruppe (bruksområde) og variant. Disse leddene beskriver hvordan fargene er bygget opp og hvordan de skal brukes.

**Navn:** Det første leddet og navnet på fargeskalaen. Som standard kommer Designsystemet med fargeskalaene Success, Danger, Warning, Info og Neutral. Flere skalaer kan legges til ved hjelp av Temabyggeren.

**Gruppe:** Hver fargeskala er delt inn i gruppene Background, Surface, Border, Text og Base. Disse gruppene beskriver bruksområdene til fargene. Text-gruppen skal for eksempel brukes på tekst og ikoner.

**Variant:** Inne i hver gruppe finnes det varianter som beskriver hvordan fargene ser ut eller skal brukes. Tinted betyr for eksempel at fargen har et hint av farge i seg, mens Hover betyr at fargen er tenkt brukt for en interaktiv tilstand.

### Oversikt og forklaring av farger

Hver fargeskala består av totalt 16 farger, utformet for å dekke ulike behov i designet.

| Navn | Bruksområde |
|------|-------------|
| Background-default | Standard bakgrunnsfarge |
| Background-tinted | Bakgrunn med et hint av farge i seg |
| Surface-default | Standardfarge for overflater / komponenter |
| Surface-tinted | Overflater / komponenter med et hint av farge i seg |
| Surface-hover | Hover-farge til overflater / komponenter |
| Surface-active | Active-farge til overflater / komponenter |
| Border-subtle | Border-farge med lav kontrast til dekorativ bruk (skillelinjer) |
| Border-default | Standard border-farge til skjemakomponenter og meningsbærende elementer |
| Border-strong | Border-farge med høy kontrast for ekstra synlighet |
| Text-subtle | Tekst- og ikonfarge med lavere kontrast |
| Text-default | Tekst- og ikonfarge med høy kontrast og god synlighet |
| Base-default | Standardfarge for solide bakgrunner |
| Base-hover | Hover-farge for solide bakgrunner |
| Base-active | Active-farge for solide bakgrunner |
| Base-contrast-subtle | Farge med god kontrast mot Base-default |
| Base-contrast-default | Farge med god kontrast mot Base-default og Base-hover |

#### Background

Background-fargene brukes for å fargelegge store flater og er ofte det bakerste laget på en nettside. Det er vanlig å bruke disse fargene på body-elementet.

- **Background-default** er den lyseste og mest nøytrale bakgrunnsfargen
- **Background-tinted** får et hint av farge i seg og kan brukes for å skape variasjon i bakgrunnslaget

#### Surface

Surface-fargene brukes til å fargelegge elementer som ligger over background-fargene, som for eksempel paneler eller kort (cards). Disse fargene fungerer som forgrunnsfarger og bidrar til å skape dybde i designet ved å skille elementer fra bakgrunnen. I mørk modus blir disse fire fargene gradvis lysere, med Surface-active som den lyseste.

- **Surface-default** er helt hvit i lys modus og brukes som standard bakgrunnsfarge på elementer.
- **Surface-tinted** får et hint av farge i seg og kan brukes for å skille elementer fra bakgrunnen.
- **Surface-hover** kan brukes til hover-tilstander for elementer eller til å skape visuelle hierarkier.
- **Surface-active** kan brukes til active-tilstander for elementer eller til å forsterke hierarkiet.

#### Border

Border-fargene brukes for å fargelegge rammer (strokes) til elementer.

- **Border-subtle** har lav kontrast mot background- og surface-fargene og bør kun brukes til dekorative formål.
- **Border-default** brukes på skjemakomponenter eller på andre meningsbærende rammer. Fargen har god kontrast (over 3:1) mot alle background-fargene, Surface-default og Surface-tinted.
- **Border-strong** har god kontrast (over 3:1) mot alle background- og surface-fargene og kan brukes på rammer for å gjøre elementer ekstra synlige.

#### Text

Text-fargene brukes på tekst og ikoner.

- **Text-subtle** er en lys tekstfarge som kan brukes for å skape variasjon i typografien eller for å indikere hierarkiske nivåer av viktighet. Fargen har god kontrast (4.5:1) mot alle background-fargene, Surface-default og Surface-tinted.
- **Text-default** er en tekstfarge med høy kontrast, optimal for lesbarhet. Den bør brukes på hovedinnholdet og den primære teksten på en side. Fargen har god kontrast (4.5:1) mot alle background- og surface-fargene.

#### Base

Base-fargene brukes for å fargelegge solide bakgrunner, som for eksempel knapper og andre interaktive elementer. Fargene bidrar til å lede oppmerksomheten mot viktige designelementer og etablere et visuelt hierarki.

Base-hover og Base-active fargene genereres ut fra lysheten eller mørkheten til Base-default fargen for å skape jevne visuelle overganger mellom tilstandene.

- **Base-default** kan brukes for å fargelegge solide bakgrunner til elementer. Fargen (hex-koden) som blir valgt i temabyggeren blir plassert under Base-default.
- **Base-hover** kan brukes til hover-tilstander for solide elementer.
- **Base-active** kan brukes til active-tilstander for solide elementer.
- **Base-contrast-subtle** har god kontrast (4.5:1) mot Base-default fargen og kan trygt brukes som tekst-farge mot denne.
- **Base-contrast-default** har god kontrast (4.5:1) mot Base-default og Base-hover fargene, og kan trygt brukes som en tekst-farge mot disse.

### Farge-tokens

Fargene under er eksempler fra et tilfeldig tema. Bruk temabyggeren for å generere dine egne farger og navn.

*Et tilfeldig generert fargesystem fra Designsystemet.no*
*Et tilfeldig generert fargesystem fra Designsystemet.no, mørkt modus*

### Bruk av skygger i designet

Skygger bør brukes bevisst og konsistent da de uttrykker at noe ligger over noe annet i løsningen.

Skygger kan hjelpe svaksynte til å identifisere komponenter. Bruk av skygger og konturer gjør det enklere og raskere å finne en komponent når du skanner sider. (Research: Material Design)

#### Styrker

Vi har ulike styrker på skyggene, fra xsmall til xlarge. De ulike styrkene brukes for å antyde høyden til overflaten. Overflater i høyere høyder har større skygger, mens de på lavere høyder bør ha mindre skygger. Skygger skal skape et hierarki slik at det som ligger over eller under noe annet kommer tydeligere frem.

### Skygge-tokens

#### Tokens

Pass på at du har lys modus aktivert for å se skyggene. Skygger er ikke ment for bruk i mørk modus, da de er basert på mørkere fargetoner. For å skape hierarki og kontrast i mørk modus er det bedre å benytte andre virkemidler som for eksempel lyse kanter.

#### Eksempel

Popover er en komponent som legger seg over annet innhold. Dette tydeliggjøres ved bruk av en medium skygge.

*Popover komponentet dekker over the andre innholdet.*

### Komponentstørrelser

De fleste komponentene i designsystemet finnes i tre anbefalte størrelser: Small, Medium og Large (sm, md, lg). Disse er utviklet for å tilpasse seg ulike behov på tvers av skjermstørrelser og bruksområder.

#### Small

Small er ideell for kompakte grensesnitt der plassutnyttelse er viktig, som på mobile enheter, ekspertverktøy eller administrasjonsgrensesnitt. Det er anbefalt å bruke denne størrelsen på nettsider med en basefont på 16px.

#### Medium

Medium fungerer som standard for de fleste vanlige bruksområder, og er anbefalt å bruke sammen med en basefont på 18px. Størrelsen gir en god balanse mellom lesbarhet og plassutnyttelse og egner seg spesielt godt for desktop-grensesnitt og større visningsflater.

#### Large

Large gir økt lesbarhet og tydelighet. Den kan brukes i desktop-grensesnitt eller når synlighet og tilgjengelighet er viktig. Det er anbefalt å bruke størrelsen sammen med en basefont på 21px.

*Mange av medium-komponentene har en fast høyde på 48px.*

Komponenter innenfor en bestemt størrelse er designet for å fungere sammen. For eksempel har mange medium-komponenter en høyde på 48px og en basefont på 18px, noe som sikrer en harmonisk visuell balanse når de plasseres ved siden av hverandre.

For å opprettholde et helhetlig og oversiktlig design anbefales det å bruke faste størrelser innenfor en gitt nettside eller kontekst. Mange ulike kombinasjoner av størrelser kan føre til et rotete og uoversiktlig design.

I enkelte tilfeller kan komponenter i ulike størrelser kombineres for å skape bedre visuelle hierarkier og brukervennlighet.

### Størrelse-tokens

#### Tokens

Pass på at du har lys modus aktivert for å se skyggene.

#### Eksempel

Popover er en komponent som legger seg over annet innhold.

### Font-family

For å presentere tekst på korrekt måte er det laget stiler som har ulike kombinasjoner av størrelse, fontvekt og linjehøyde. Det er også laget et sett med typografi-komponenter som innkapsler disse stilene, slik at de enkelt kan brukes i ulike sammenhenger. Beskrivelse av hvordan typografi-komponenter brukes finner du i komponentartikkelen Typography.

### Typografi-tokens

Innhold kommer snart.

### Kom i gang med designsystemet (Figma)

Denne veiledningen hjelper deg med å komme i gang med å designe ved hjelp av det delte designsystemet i Figma. Du får en innføring i hvordan du bruker komponenter, tokens og stiler fra det sentrale biblioteket.

#### Forutsetninger

Før du starter trenger du:
- **Figma** - En aktiv Figma-konto (gratis eller betalt)
- **Access** - Tilgang til Røde Kors sitt Figma-bibliotek (kontakt teamansvarlig hvis du mangler tilgang)

#### Opprett eller åpne en arbeidsfil

Opprett en ny Figma-fil, eller åpne en eksisterende prosjektfil hvor du skal ta i bruk designsystemet.

#### Aktiver designsystemets biblioteker

1. Gå til Assets-panelet i Figma
2. Klikk på bok-ikonet (📚) øverst til høyre for å åpne Team Library
3. Slå på følgende biblioteker:
   - Designsystem – komponenter
   - Aksel ikonbibliotek

#### Sett inn komponenter fra biblioteket

1. Gå til Assets-panelet
2. Bruk søkefeltet for å finne komponenter raskt
3. Dra komponenten inn i artboardet
4. 🔄 Tilpass komponentene ved å bruke props og varianter i høyrepanelet

#### Tips og god praksis

Unngå å "detache" komponenter. For å sikre gjenbruk og fremtidige oppdateringer, skal du ikke detach'e komponenter. Bruk heller varianter og egenskaper (props) for å tilpasse utseende og funksjon.

### Oppstart: Oppsett av arbeidsområde

#### Trinn 1: Start med en ny frame

Opprett en ny frame i Figma med ønsket størrelse. I dette tilfellet bruker vi 1728px i bredde.

#### Trinn 2: Legg til autolayout

Legg til autolayout på framen.

#### Trinn 3: Legg til tokens på framen

Legg til følgende tokens:
- Spacing: 0
- Padding left right: 0
- Padding top bottom: 0
- Background color: color/main/background-default

#### Trinn 4: Legg til heading og footer

Legg til header og footer fra komponenter biblioteket. Sørg for at Auto Layout retning er satt til vertikal.

#### Trinn 5: Lage en seksjon

Lag en ny frame som du kaller "section".

#### Trinn 6: Legge til autolayout

Legg til autolayout på den nye seksjonen.

#### Trinn 7: Legge til seksjon i hovedframe

Legg til seksjonen i hovedframen og sørg for at seksjonen er satt til "fill container".

#### Trinn 8: Legge til tokens (side-marginer og bakgrunnsfarge)

Velg seksjonen og legg til følgende tokens:
- Spacing: size/6
- Padding left right: size/30
- Padding top bottom: size/22
- Background color: color/main/background-default

Dette sørger for at siden din er koblet mot tokensene i koden og gjør det lettere for utviklere å utvikle det du designer da disse er lenket via GitHub.

#### Trinn 9: Test seksjonen

Legg til ett komponent fra biblioteket. I vårt tilfelle bruker vi card komponenten.

#### Trinn 10: Lag en nested layout

Legg til flere kort og sett de sammen ved hjelp av en auto layout. For å gjøre dette enkelt velg alle kortene og trykk shift + a.

#### Trinn 11: Set opp nested layout

Velg alle kortene i seksjonen og sørg for at disse er satt til fill container. Dette gjør vi for at kortene skal ta like mye plass og holde seg innen for rammene til den nestede layouten.

#### Trinn 12: Legg til spacing tokens

Gå ett hakk ut og velg containeren til kortene. Sørg for at spacing er satt til size/6.

#### Trinn 13: Legg til spacing i seksjon

Legg til spacing mellom kort containeren og headingen ved å velge seksjonen og tilføye en spacing på size/6.

#### Trinn 14: gjenbruk

Dupliser seksjonen og gjør deg kjent med hvordan auto-layout og tokensene fungerer. Under ser du hvordan jeg enkelt laget en tabell ved å erstatte kortene med en tablecolumn komponent og satte spacing til size/0.

### Lage nye komponenter

Denne siden forklarer hvordan man bygger nye komponenter i designsystemet. Målet er å sikre at komponentene er konsistente, skalerbare, tilgjengelige og enkle å bruke både i design og utvikling.

#### Tokens som grunnlag

Alle komponenter skal bygges med tokens. Tokens er de grunnleggende verdiene i systemet og gjør det mulig å oppdatere eller tilpasse design uten å endre hver enkelt komponent.

- **Autolayout:** Bruk alltid Autolayout i Figma. Det gir produksjonsklare filer og speiler hvordan kode er strukturert.
- **Størrelsestokens:** Bruk tokens for spacing, padding og dimensjoner. Unngå manuelle verdier.
- **Semantiske tokens:** Benytt semantiske tokens for farger, typografi og spacing. Dette sikrer støtte for lys og mørk modus, ulike størrelser og temaer – og gjør komponentene direkte koblet til kode.

#### Bygging med atomisk design

Komponenter settes sammen hierarkisk etter atomisk design:

- **Atomer:** de minste byggeklossene (f.eks. knapp, ikon, inputfelt).
- **Molekyler:** sammensatte atomer (f.eks. søkefelt = input + knapp).
- **Organismer:** større helheter laget av molekyler (f.eks. skjema eller navigasjon).

Dette prinsippet gjør komponentene modulære og gjenbrukbare.

#### Eksempel Kalender Modul

**Trinn 1: Begynn på atomisk nivå**

Se for deg atomene som trengs når du lager en kalender:
- **Tekst:** Måned/år (f.eks. "August 2025"), Ukedagsnavn (man, tir, ons …), Dato-nummer (1, 2, 3 …)
- **Ikoner:** Piltaster for navigasjon (forrige/neste måned), Eventuelt ikon for «dagens dato» eller «reset»
- **Knapper:** Navigasjonsknapper (forrige/neste måned), Dato-knapp (hver dato er en interaktiv knapp)

Vi vet at vi allerede har icon-button så den kan vi enkelt hente ut fra komponent biblioteket.

**Trinn 2: Start med å bygge ut atomene dine**

I vårt tilfelle vil vi trenge ett celle komponent som viser ukedagene og dato-nummer i en mnd. Her kan vi bruke samme atom for ukedagsnavn og dato-nummer.

Vi lager to elementer som vi kaller "cell" og legger til autolayout og appellerer token verdiene.

**Trinn 3: Lag variantene du trenger**

**Trinn 4: Sett sammen molekylet**

**Trinn 5: Bygg ut organismen**

Her legger vi sammen molekylene til en tabell.

**Trinn 6: Legg til riktig states**

**Trinn 7: Gjør ferdig organismen med eksisterende elementer**

**Trinn 8: Bygg ut med flere varianter hvis det gir mening**

#### Varianter og tilstander

Alle komponenter skal ha definerte varianter og interaksjonstilstander:

- Bruk Figma Variants i stedet for duplisering.
- Minimumstilstander: default, hover, pressed, disabled, focus. Litt ut fra kontekst.
- Opprett en ny variant når det gjelder en tilpasning av samme komponent, og en ny komponent kun når funksjonen er unik.

#### Tilgjengelighet

Tilgjengelighet skal alltid ivaretas:

- Følg WCAG-kontrastkrav (minimum 4.5:1 for tekst).
- Interaktive flater skal ha minst 44 × 44 px treffflate.
- Fokustilstand skal alltid være synlig, også uten hover.

#### Responsivitet

Komponenter skal fungere på tvers av skjermstørrelser og layouts:

- Bruk størrelsestokens for spacing og dimensjoner.
- Støtt små, mellomstore og store layoutvarianter.
- Sørg for at komponenter brytes eller stackes logisk i mindre formater.

#### Gjenbruk i kontekst

En komponent skal alltid kunne brukes i ulike sammenhenger. Vis derfor eksempler i dokumentasjonen, som:
- knapp i et skjema
- kort i et grid
- inputfelt i en dialogboks

### Praktiske eksempler

#### Eksempel 1: Påmeldingsskjema

**Trinn 1:** Opprett en ny frame i Figma med ønsket størrelse. Bruk design tokens for å sette framefargen hvis nødvendig (f.eks. background-default).

**Trinn 2:** Bruk komponenten Heading for å legge til en overskrift, som "Meld deg på vårt arrangement". Juster størrelsen med size-modusen, om nødvendig.

**Trinn 3:** Sett inn to Text Input-komponenter. Den første for "Fullt navn" og den andre for "E-postadresse". Sørg for å bruke placeholder-modusen for instruksjoner i tekstfeltene.

**Trinn 4:** Bruk komponenten Multisuggestion for å la brukeren velge mellom forskjellige arrangementer. Legg til nødvendige alternativer i dropdown-menyen.

**Trinn 5:** Sett inn en Button-komponent og tilpass fargen ved å bruke color-modusen hvis knappen skal skille seg ut. Legg til ikon hvis ønskelig.

**Obs!** Bruk color og sizetokens i framems rundt komponentene for å sikre at alle moduser fungerer som de skal.

#### Eksempel 2: Artikkelside

**Trinn 1:** Start med å lage en ny vertikal frame i Figma med ønsket bredde (f.eks. 8- eller 12-kolonne grid). Sett bakgrunnsfargen ved hjelp av design tokens.

**Trinn 2:** Bruk Heading-komponenten for å legge til tittelen på artikkelen. Juster størrelsen med size-modus (f.eks. heading-xl eller heading-lg).

**Trinn 3:** Bruk Text-komponenten i body-large-stil for å skrive en kort ingress som oppsummerer artikkelen.

**Trinn 4:** Bruk Text-komponenter i body-default eller body-large for å bygge ut brødteksten. Del opp teksten i tydelige avsnitt og legg inn mellomtitler med Heading-komponenten.

**Trinn 5:** Bruk Image-komponenten for å plassere et illustrasjons- eller artikkelbilde midtstilt i teksten. (Foreløpig har vi ingen Image-komponent så vi bruker en frame i stedet)

**Trinn 6:** Bruk Link-komponenten der det er behov for hyperkoblinger til relaterte artikler, dokumenter eller eksterne kilder.

**Trinn 7:** Bruk Card-komponenter i et grid-layout for å vise relaterte artikler. Hver kort bør inneholde bilde, tittel og en "Les mer"-lenke.

#### Eksempel 3: Planleggings verktøy

**Trinn 1-11:** Detaljert veiledning for å lage en aktivitetskalender med søkefunksjon, aktivitetskort, kalendervisning, "Legg til i kalender"-funksjon og sosiale delingsmuligheter.

### Kom i gang med Token Studio og GitHub-synkronisering

Denne veiledningen viser hvordan du kobler Token Studio i Figma til et GitHub-repositorium for å holde design tokens synkronisert på tvers av teamet.

#### Forutsetninger

- **Figma** - En Figma-konto med Professional-plan eller høyere
- **Token Studio** - En Token Studio-konto med Premium-abonnement

#### Generer en GitHub Fine-grained access token

1. Gå til: Github → Settings → Developer settings → Personal access tokens → Tokens (fine-grained)
2. Klikk på Generate new token
3. Fyll ut: Navn (f.eks. Red Cross Token), Utløpsdato (sett som ønsket)
4. Klikk Generate token og kopier den trygt

#### Konfigurer GitHub-sync i Token Studio

1. Åpne Token Studio-pluginen i Figma
2. Gå til: Settings → Sync providers → Add new → GitHub
3. Fyll inn:
   - Name: f.eks. Red Cross Tokens
   - Personal Access Token: lim inn tokenet fra GitHub
   - Repository: norwegianredcross/DesignSystem
   - Branch: main
   - Token Storage Location: design-tokens
4. Repository access: velg All repositories eller spesifikt repo
5. Repository permissions → Contents: velg Read & Write

#### Utfør første synkronisering

Etter at du har lagret innstillingene, vil pluginen vise en modal:
- Hvis repoet er tomt → velg Push
- Hvis tokens allerede finnes → velg Pull

#### Løpende arbeidsflyt: Push og Pull

- **Push** når du gjør endringer i tokens i Figma
- **Pull** for å hente oppdateringer fra GitHub til Figma

#### Tips og god praksis

- Oppbevar tokenen sikkert – ikke lim den inn i offentlige dokumenter.
- Dokumenter innstillingene dine for enklere oppsett senere.
- Synk ofte for å sikre konsistens mellom design og utvikling.

### Sette opp ditt eget fargesystem

Med et gjennomtenkt fargesystem kan vi sikre at tekst alltid har god nok kontrast mot våre bakgrunnsfarger og at det finnes nok ulike farger for alle tilstander.

En profilveileder inneholder ofte kun et sett med primærfarger og sekundærfarger i et par forskjellige fargetoner. Å lage et digitalt produkt kun med disse fargene alene er vanskelig. For å kunne sikre riktig kontrast og korrekte farger for ulike tilstander, er vi avhengig av å definere flere variasjoner av profilfargene. Bare button komponenten består av 6 ulike blåfarger.

Fargesystemet er strukturert for å støtte multibranding og ulike modes (darkmode, contrastmode, etc.), og samtidig ivareta kontrastkrav. Vi har latt oss inspirere av USWDS sine "magic numbers" for å sikre tilgjengelige fargekombinasjoner fra hvilken som helst fargepalett. Vi har også blitt inspirert av Radix sitt fargesystem med tydelige intensjoner for de ulike fargene.

### Designsystemets temagenerator

For å generere en skala som fungerer kan du bruke Designsystemets temagenerator. Det eneste du trenger å gjøre er å lime inn hex-koden til merkevarens accent-farge og øvrige profil-farger.

https://theme.designsystemet.no/no

Temageneratoren er basert på et fargesystem sørger for at både brand-farger ivaretas og kontrastkrav sikres gjennom de lineære fargene som genereres ut fra brand-fargen.

**Eksempler:**
- Text-default har alltid god nok kontrast mot alle background og surface farger.
- Text-subtle har alltid god nok kontrast mot alle background-farger og surface-default.

Dette vil gjelde uansett hva du har valgt som base-farge.

Base-default-fargen vil alltid være den samme som fargen du har valgt. Du må derfor selv passe på at fargen du velger oppfyller kontrastkravene. Designsystemets temagenerator vil informere deg om eventuelle kontrastbrudd.

### Bruk fargene du har generert

Når du har generert skalaene, kan du bruke de nye fargekodene i Designsystemet, slik at alle komponenter følger din profil.

### Foreslå nytt design eller forbedringer

Vi setter pris på at du hjelper oss å forbedre komponenter og design i Figma. De beste løsningene kommer gjennom samarbeid.

#### Ny Komponent

Ønsker du å foreslå en ny komponent setter vi pris på om den blir registrert i Github.

Når en ny komponent blir foreslått må vi vurdere om den er verdifull nok til å være en del av designsystemet. Vi ønsker ikke å ende opp med hundrevis av komponenter med små forskjeller.

For nye komponenter som tas inn må vi:
1. Identifisere og utforske liknende behov hos andre produktteam og virksomheter. Hvor mange produkter/etater vil ha bruk for den?
2. Vurdere problemet komponenten skal løse og verdien dette gir.
3. Tenke på om den kan lages fleksibel og gjenbrukbar nok.
4. Tenke på om den er i tråd med designprinsippene og om den passer inn i helheten

#### Registrere feil eller mangler på en komponent i Figma

Har du funnet en svakhet med noen av de eksisterende komponentene i Figma, setter vi pris på om du enten legger igjen en kommentar i Figma sammen med den aktuelle komponenten, eller at du oppretter en bug-report i Github som forklarer feilen, eventuelt en feature-request som forklarer ønsket tilleggsfunksjonalitet.

- https://github.com/norwegianredcross/DesignSystem
- https://github.com/norwegianredcross/DesignSystem/issues

---

## Footer

### Snarveier
- Tilbudene
- Bli frivillig
- Vårt arbeid
- Om Røde Kors
- Støtt arbeidet
- Kontakt oss

### Kontaktinformasjon
- Besøks adresse
- Organisasjonsnummer
- E-post

### Juridisk
- Personvern
- For presse
- Regler for innkjøp
- Varsling/Misconduct

**Rødekors** - Copyright

---

## Komponentoversettelser

### Karusell
- Laster bilde
- Forrige bilde
- Neste bilde
- Bildeposisjon
- Gå til bilde

### Datovelger
- Forrige måned
- Neste måned

### Dato-input
- Åpne datovelger

---

# Webapplikasjon Innhold (English)

This is all text content displayed in the web application in English.

## Header (Navigation)

- **Dark Mode** - Dark theme mode
- **Toggle theme** - Button to switch between light and dark mode
- **Language:** - Language selection
- **Search** - Search function
- **Search content...** - Search field placeholder
- **Close search** - Close search field
- **Open search** - Open search field
- **Clear search** - Clear search field
- **Close** - Close
- **Menu** - Menu
- **Close menu** - Close menu
- **Open menu** - Open menu
- **Log in** - Log in
- **Support us** - Support us button
- **Search suggestions** - Search suggestions
- **View all results** - View all search results
- **No results found for** - No results message
- **Select language** - Language selection
- **Norwegian Red Cross Home** - Aria-label for home link

### Navigation Links
- Design
- Components
- Code
- Tokens
- Our Work
- Volunteer
- Courses & Training

---

## Home Page

### Hero Section
**Red Cross Design System**

Common component library and guidelines for design and development of digital solutions in Red Cross.

**Search components** - Main button

### Explore the System (Bento Navigation)

#### Components
Library with ready-made React components.

#### Design
Colors, typography, and principles.

#### Code
Documentation, workflow, and MCP.

#### Tokens
Design tokens, colors, and spacing.

### Values Section

#### Universal Design
Built-in accessibility by default. We strictly follow WCAG 2.1 requirements.
**Read guidelines**

#### Consistent Brand
Design tokens ensure the Red Cross visual profile is maintained across all surfaces.
**See colors**

#### Efficient Development
Save time with ready-made components. Focus on functionality, not CSS.
**Explore components**

### Quick Actions

#### Jump in fast

**Start in code**
See setup, tokens, and examples.
*Open code*

**Design guide**
Colors, typography, and principles.
*Open design*

**Component library**
Explore and reuse ready-made components.
*Open components*

### Useful right now
- Updated design tokens
- Source Sans 3 included
- New component variants
- See all updates

### Visual elements (card demonstration)
- Profile
- Name Namerson
- Volunteer
- Save
- Approved
- Rejected
- Dark mode
- Important message
- Remember to update the guidelines...
- All
- Active
- Alerts
- Status

---

## Components Page

### Components

The design system contains fundamental components that can be combined in many different ways and in different patterns.

**Search for component...** - Search field placeholder
**Search components** - Aria-label for search
**No components found for** - No results message

---

## Code Page

(Full English translation of all Code page content - installation guides, MCP workflows, contribution guidelines, metadata files documentation, component creation process)

---

## Design Page

(Full English translation of all Design page content - design tokens, color structure, shadows, sizes, typography, Figma integration, Token Studio setup, practical examples)

---

## Footer

### Shortcuts
- Services
- Become a volunteer
- Our Work
- About Red Cross
- Support the work
- Contact us

### Contact Information
- Visiting address
- Organization number
- Email

### Legal
- Privacy
- For press
- Procurement rules
- Whistleblowing/Misconduct

**Red Cross** - Copyright

---

## Component Translations

### Carousel
- Loading image
- Previous image
- Next image
- Image position
- Go to image

### Date Picker
- Previous month
- Next month

### Date Input
- Open date picker

---

*Denne filen ble generert automatisk og inneholder all dokumentasjon fra Røde Kors Design System prosjektet.*
