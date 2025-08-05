# Røde Kors Design System Component Library (Norwegian Red Cross)

## Live Storybook URL

https://norwegianredcross.github.io/DesignSystem/storybook/

## Overview

Welcome to the Røde Kors Design System! This repository contains a library of reusable UI components built with React, specifically tailored for Norwegian Red Cross digital projects.

It's developed leveraging the foundational components and styling principles from Digdir's Designsystemet. This approach ensures a unified and recognizable visual identity across all applications for the Norwegian Red Cross. The system provides flexibility to adapt the appearance with Red Cross's own brand via Digdir Designsystemet's theme builder.

The primary goal is to ensure brand consistency, improve development efficiency, and maintain high accessibility standards across all Røde Kors applications.

Storybook serves as the interactive documentation and development environment for viewing and testing these components.

## Consuming This Library (For Application Developers)

To use the Røde Kors Design System in your Next.js (or any React) application:

### 1. Installation

Install the necessary npm packages for your project:

```bash
npm install rk-designsystem @digdir/designsystemet-css
# or
yarn add rk-designsystem @digdir/designsystemet-css
# or
pnpm add rk-designsystem @digdir/designsystemet-css
```

**Note:** You do not need to install `@digdir/designsystemet-react` separately, as all required components are included within the `rk-designsystem` package.

### 2. Including Styles (CSS)

For all components to display with the correct Røde Kors styling, you must include the global stylesheets in your application. The best place to do this is at the highest level of your application, for instance, in your `layout.tsx` (for Next.js App Router) or `_app.tsx` (for Next.js Pages Router).

**Crucial Order:** It's vital that the base stylesheet (`@digdir/designsystemet-css/index.css`) is loaded *before* your own brand-specific design tokens (`../../design-tokens-build/brand-1.css`). This ensures your tokens can override default values as intended, and all components adopt the Røde Kors brand.

Røde Kors Design System does **NOT** require a separate CSS import, as it utilizes the shared styles defined by `@digdir/designsystemet-css` and your `brand-1.css` file.

#### Example for Next.js (App Router - `src/app/layout.tsx`):

```tsx
import './globals.css'; // Your own global styles (if any)
import '@digdir/designsystemet-css/index.css'; // Base stylesheet for components
import '../../design-tokens-build/brand-1.css'; // YOUR brand-specific design tokens (Important for overrides!)

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
import '../../design-tokens-build/brand-1.css'; // YOUR brand-specific design tokens (Important for overrides!)
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
import { Alert } = 'rk-designsystem'; // Import the components you need

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
            Welcome! This message is from the Red Cross Design System.
          </p>
        </Alert>

        <Alert variant="warning" className="mt-4">
          <p>
            Important information using Red Cross Design System styles.
          </p>
        </Alert>
      </section>

      {/* More Røde Kors components can be added here as needed */}
    </div>
  );
}
```

### 4. Theming and Customization

The appearance of the Røde Kors Design System is fully controlled via design tokens. These tokens are defined and customized using Digdir Designsystemet's theme builder, which generates the `../../design-tokens-build/brand-1.css` file. Any changes made in the theme builder will be reflected across all Røde Kors Design System components, as they share the same styling foundation and variables defined in this file.