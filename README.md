# Design System Component Library (Norwegian Red Cross)

**Live Storybook URL:** [https://norwegianredcross.github.io/DesignSystem/storybook/](https://norwegianredcross.github.io/DesignSystem/storybook/)

## Overview

This repository contains a library of reusable UI components built with React and Vite, specifically tailored for Norwegian Red Cross digital projects. It leverages components and styling principles from [Digdir's Designsystemet](https://www.designsystemet.no/) while also including custom components to meet specific Red Cross requirements.

The primary goal is to ensure brand consistency, improve development efficiency, and maintain high accessibility standards across applications.

[Storybook](https://norwegianredcross.github.io/DesignSystem/storybook/) serves as the interactive documentation and development environment for viewing and testing these components.

## Features

*   **React Components:** Modern, functional React components.
*   **Vite Tooling:** Fast development and build process powered by Vite.
*   **TypeScript:** Enhanced code quality and maintainability.
*   **Digdir Designsystemet Integration:** Uses foundational components and styles from the national design system.
*   **Custom NRC Components:** Includes components built specifically for Norwegian Red Cross needs.
*   **Storybook:** Provides interactive documentation, visual testing, and component showcasing.
*   **Accessibility:** Built with accessibility (WCAG) considerations.

## Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended, e.g., v18 or v20+)
*   [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/norwegianredcross/DesignSystem.git
    cd DesignSystem
    ```

2.  **Switch to the correct branch:**
    The component library source code lives on the `Storybook-Demo` branch.
    ```bash
    git switch Storybook-Demo
    # Or git checkout Storybook-Demo
    ```
    *(Note: The root of this branch contains the component library project).*

3.  **Install Dependencies:**
    ```bash
    npm install
    # or: yarn install
    # or: pnpm install
    ```

## Available Scripts

In the project directory, you can run several commands:

*   ### `npm run storybook` or `yarn storybook` or `pnpm storybook`

    Runs the Storybook development server locally. Open [http://localhost:6006](http://localhost:6006) (or the specified port) to view the components interactively in your browser. This is the primary way to view and develop components.

*   ### `npm run build-storybook` or `yarn build-storybook` or `pnpm build-storybook`

    Builds the static Storybook site for deployment (outputs to the `storybook-static` directory). This is configured with the correct base path for deployment to GitHub Pages.

*   ### `npm run build` or `yarn build` or `pnpm build`

    Builds the component library itself for production (using `tsc` and `vite build`). The output is typically placed in the `dist` directory. This is used if you intend to publish the library as a package or consume its build artifacts directly.

*   ### `npm run lint` or `yarn lint` or `pnpm lint`

    Runs the ESLint checker to find potential issues in the code.

*   ### `npm run dev` or `yarn dev` or `pnpm dev`

    Runs the Vite development server. This might be configured for library development mode or a minimal test app within the library project.

*   ### `npm run preview` or `yarn preview` or `pnpm preview`

    Locally previews the production build of the *library* (from the `dist` directory), not Storybook.

The Storybook documentation site, showcasing all components and assets, is deployed to GitHub Pages.

*   **Source Branch for Storybook Code:** `Storybook-Demo`
*   **Deployment Target:** `gh-pages` branch, under the `/storybook` subdirectory.


Deployment is typically handled via manual `npx gh-pages` commands or could be automated with GitHub Actions (check `.github/workflows/` on the `main` branch for relevant workflows).

## Consuming This Library

*(Placeholder: This section needs to detail how other projects, like the Next.js demo app on the `main` branch, will consume this component library. Options include:*
    *   *Publishing as an npm package (to npmjs.com or GitHub Packages).*
    *   *Setting up monorepo workspaces (e.g., with npm, yarn, or pnpm) within the `DesignSystem` repository if both the library and consumer apps are to be developed in lockstep.*
    *   *Using local path references (e.g., `file:...`) during development, with a more robust solution for production builds.)*

