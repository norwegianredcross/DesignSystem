// .storybook/main.ts

import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

// Definer den forventede formen på options-objektet som sendes til viteFinal,
// spesifikt configType-egenskapen.
interface ViteFinalOptions {
  configType?: 'DEVELOPMENT' | 'PRODUCTION';
}

const config: StorybookConfig = {
  // ====================================================================
  // == SEKSJON 1: DIN PROSJEKTS STORYBOOK-KONFIGURASJON ==
  // == DU MÅ OPPDATERE DISSE FOR Å MATCHE DIN PROSJEKTSTRUKTUR OG BEHOV ==
  // ====================================================================
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)', // Eksempel: hvis historiene dine er i src
    '../src/components/**/*.mdx', // Eksempel
  ],
  addons: [
    '@storybook/addon-onboarding', // Fra din package.json
    '@storybook/addon-essentials', // Inkluderer mange vanlige addons
    '@storybook/addon-links',      // For lenking mellom historier
    '@storybook/addon-interactions', // For play-funksjoner
    // Legg til andre addons du bruker fra din package.json devDependencies, for eksempel:
    // '@chromatic-com/storybook',
    // '@storybook/experimental-addon-test',
  ],

  // ====================================================================
  // == SEKSJON 2: RAMMEVERK-KONFIGURASJON ==
  // ====================================================================
  framework: {
    name: '@storybook/react-vite', // Dette matcher din package.json
    options: {},
  },

  // ====================================================================
  // == SEKSJON 3: DOKUMENTASJONS-KONFIGURASJON (Valgfri men vanlig) ==
  // ====================================================================
 
  // ====================================================================
  // == SEKSJON 4: STATISKE RESSURSER (Valgfritt) ==
  // ====================================================================
  // staticDirs: ['../public'], // Eksempel: hvis du har statiske ressurser for Storybook

  // ====================================================================
  // == SEKSJON 5: VITE-KONFIGURASJON OVERSTYRING FOR PRODUKSJON BASE PATH ==
  // ====================================================================
  async viteFinal(
    viteInlineConfig: InlineConfig, // Omdøpt for klarhet
    options: ViteFinalOptions // Bruk grensesnittet definert ovenfor
  ): Promise<InlineConfig> {
    if (options.configType === 'PRODUCTION') {
      // Dette er den offentlige stien hvor Storybook vil leve på GitHub Pages
      const publicDeployPath = '/DesignSystem/storybook/'; // Korrigert deployment-sti
      console.log(
        `Anvender PRODUKSJON base path for Storybook Vite build: ${publicDeployPath}`
      );
      if (viteInlineConfig) { // Sikre at viteInlineConfig-objektet eksisterer
        viteInlineConfig.base = publicDeployPath;
      }
    }
    // Returner den modifiserte Vite-konfigurasjonen.
    return viteInlineConfig;
  },
};

export default config;
