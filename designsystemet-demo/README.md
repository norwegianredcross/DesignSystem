# Designsystemet Demo

This showcase demonstrates components from the Digdir Designsystemet with theme switching capabilities.

## Features

- Component showcase with multiple categories
- Light/dark mode toggle
- Brand theme switching (brand-1/brand-2)
- Responsive layout

## Theme Switching

The application supports switching between two brand themes:

1. **Brand 1** - Default theme
2. **Brand 2** - Alternate theme

### How to Use Theme Switching

1. Click the "Switch Theme" button in the top-right corner
2. The theme will toggle between brand-1 and brand-2
3. The current theme is indicated on the button

### Development Notes

- Theme stylesheets are loaded from `/public/design-tokens-build/`
- Theme state is managed in `showcase-page.tsx`
- Console logs show theme loading/unloading for debugging

## Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open in browser:
```bash
open http://localhost:3000
