# Design System Demo Application (Norwegian Red Cross)

**Live Demo URL:** [https://norwegianredcross.github.io/DesignSystem](https://norwegianredcross.github.io/DesignSystem)


## Overview

This is a [Next.js](https://nextjs.org/) application serving as a practical demonstration of how to consume and utilize the Norwegian Red Cross component library. The component library itself resides on the `Storybook-Demo` branch within this same repository.

This demo application showcases:
*   Integrating components from the library.
*   Applying Norwegian Red Cross brand guidelines using **Design Tokens**.
*   Styling components effectively using **CSS Modules**.

It includes example pages (Home and a Reference/Demo page) to illustrate component usage in a realistic application context.

## Key Features

*   **Next.js Framework:** Built with the App Router for modern React development.
*   **Component Library Consumption:** Demonstrates how to import and use components from the shared library.
*   **Design Tokens:** Utilizes predefined design tokens (colors, spacing, typography, etc.) for consistent styling.
*   **CSS Modules:** Employs CSS Modules for locally scoped, maintainable component styles.
*   **Example Pages:** Includes practical examples on Home and Reference pages.
*   **Static Export:** Configured for static export suitable for deployment on platforms like GitHub Pages.

## Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended, e.g., v18 or v20+)
*   [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/norwegianredcross/DesignSystem.git
    cd DesignSystem
    ```

2.  **Ensure you are on the main branch:**
    This branch contains the Next.js demo application.
    ```bash
    git switch main
    # Or git checkout main
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    # or: yarn install
    # or: pnpm install
    ```
    *(Note: See the "Consuming the Component Library" section regarding the `componentlibrary` dependency setup).*

## Running Locally

To start the development server:

```bash
npm run dev
# or: yarn dev
# or: pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) (or the specified port) in your browser to see the application.

## Available Scripts

*   `npm run dev`: Starts the Next.js development server.
*   `npm run build`: Builds the application for production (creates a static export in the `out/` directory).
*   `npm run start`: Starts the Next.js production server (requires a build first, less relevant for static export).
*   `npm run lint`: Runs ESLint to check for code quality issues.

## Consuming the Component Library

This demo application currently consumes the component library via a local file path reference in `package.json`:
```json
"componentlibrary": "file:../../componentlibrary/componentlibrary-0.1.0.tgz"