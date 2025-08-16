# Røde Kors Design System Component Library (Norwegian Red Cross)

## Live Storybook URL

[https://norwegianredcross.github.io/DesignSystem/storybook/](https://norwegianredcross.github.io/DesignSystem/storybook/)

## Overview

Welcome to the Røde Kors Design System! This repository containgits a library of reusable UI components built with React, specifically tailored for Norwegian Red Cross digital projects.

It's developed leveraging the foundational components and styling principles from Digdir's Designsystemet. This approach ensures a unified and recognizable visual identity across all applications for the Norwegian Red Cross. The system provides flexibility to adapt the appearance with Red Cross's own brand via Digdir Designsystemet's theme builder.

The primary goal is to ensure brand consistency, improve development efficiency, and maintain high accessibility standards across all Røde Kors applications.

Storybook serves as the interactive documentation and development environment for viewing and testing these components.

## Consuming This Library (For Application Developers)

To use the Røde Kors Design System in your Next.js (or any React) application:

### 1. Installation

Install the necessary npm packages for your project:

```bash
# npm
npm install rk-designsystem @digdir/designsystemet-css

# yarn
yarn add rk-designsystem @digdir/designsystemet-css

# pnpm
pnpm add rk-designsystem @digdir/designsystemet-css
```

**Note:** You do not need to install `@digdir/designsystemet-react` separately, as all required components are included within the `rk-designsystem` package.

### 2. Including Styles (CSS)

For the components to be styled correctly, you must first generate your own theme file using the Digdir CLI and then import it into your application.

#### 2.1 Generate Your Theme

This component library is unstyled by default. You must create your own brand-specific CSS file using the official **Digdir Designsystemet Theme Builder CLI**.

**Step 1: Configure Your Theme**

Use the theme builder tool at **[https://theme.designsystemet.no/en/](https://theme.designsystemet.no/en/)** to generate a command-line snippet. This command creates the necessary design token configuration files in your project.

Give your theme a name and customize the colors and properties to match your brand. Then, copy the generated command and run it in your project's root directory.

*Example Command (for macOS/Linux):*
```bash
npx @digdir/designsystemet@latest tokens create \
--main-colors "accent:#0062BA" \
--neutral-color "#1E2B3C" \
--support-colors "brand1:#F45F63" "brand2:#E5AA20" "brand3:#1E98F5" \
--border-radius 4 \
--theme "my-brand"
```

*Example Command (for Windows):*
```bash
npx @digdir/designsystemet@latest tokens create ^
--main-colors "accent:#0062BA" ^
--neutral-color "#1E2B3C" ^
--support-colors "brand1:#F45F63" "brand2:#E5AA20" "brand3:#1E98F5" ^
--border-radius 4 ^
--theme "my-brand"
```

**Step 2: Build the CSS File**

After running the `create` command, you will have a new `design-tokens` folder in your project. Now, run the `build` command to convert these tokens into a usable CSS file.

```bash
npx @digdir/designsystemet@latest tokens build
```

This will generate a CSS file, typically located at `design-tokens/css/my-brand.css`. This is the file you will import into your application.

#### 2.2 Import Stylesheets into Your App

Once you have your theme file, import the stylesheets at the highest level of your application, for instance, in your `layout.tsx` (for Next.js App Router) or `_app.tsx` (for Next.js Pages Router).

**Crucial Order:** It's vital that the base stylesheet (`@digdir/designsystemet-css/index.css`) is loaded **before** your brand-specific theme file (`design-tokens/css/my-brand.css`). This ensures your theme's tokens can correctly override the default values.

#### Example for Next.js (App Router - `src/app/layout.tsx`):

```tsx
import './globals.css'; // Your own global styles (if any)
import '@digdir/designsystemet-css/index.css'; // Base stylesheet for components
import '../../design-tokens/css/my-brand.css'; // Your generated brand theme

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
import '../design-tokens/css/my-brand.css'; // Your generated brand theme
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
            Welcome! This message is styled with your custom brand theme.
          </p>
        </Alert>

        <Alert variant="warning" className="mt-4">
          <p>
            Important information using your custom brand theme.
          </p>
        </Alert>
      </section>

      {/* More Røde Kors components can be added here as needed */}
    </div>
  );
}
```

The appearance of all components is fully controlled by the design tokens you generated. To make any visual changes to your application's theme (like changing the primary color), simply re-run the `tokens create` and `tokens build` commands with your updated values. Your changes will be reflected across all components throughout your application.