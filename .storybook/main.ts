import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import type { PropItem } from 'react-docgen-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',
    '../src/**/*.chromatic.@(ts|tsx)',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
  ],

  staticDirs: ['../public'],

  framework: {
    name: '@storybook/react-vite',
    options: { strictMode: true },
  },

  viteFinal: (cfg) =>
    mergeConfig(
      cfg,
      defineConfig({
        resolve: {
          alias: {
            '@story-utils': path.resolve(__dirname, '../src/story-utils'),
            '@assets': path.resolve(__dirname, '../assets'),
          },
        },
      }),
    ),

  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop: PropItem) => {
        const keep =
          prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
        return keep && prop.name !== 'popovertarget';
      },
    },
  },

  docs: {},

  managerHead: (head) => `
    ${head}
    <!-- Preconnect to font providers -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Load Source Sans 3 -->
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Load Typekit (optional backup/additional weights) -->
    <link rel="stylesheet" href="https://use.typekit.net/vmx5jgv.css"> 

    <style>
      /* RESET */
      body {
        background-color: #f4f4f4; 
        overflow-x: hidden;
        /* Force vertical scrollbar to match main app behavior and prevent layout shifts */
        overflow-y: scroll; 
        margin: 0 !important;
        padding: 0 !important;
        font-family: "Source Sans 3", sans-serif;
        font-feature-settings: "cv05" 1;
        -webkit-font-smoothing: antialiased;
      }

      /* TOKENS */
      :root {
        --ds-color-base-default: #D52B1E;
        --ds-color-base-hover: #b12419;
        --ds-color-base-active: #8e1d14;
        --ds-color-base-contrast-default: #ffffff;
        
        --ds-border-width-default: 1px;
        --ds-border-radius-default: 4px;
        --ds-border-width-focus: 3px;
        --ds-color-focus-inner: #ffffff;
        --ds-color-focus-outer: #0067c5;
        
        --ds-size-2: 8px;
        --ds-size-4: 16px;
        --ds-size-6: 24px;
        --ds-size-12: 48px;
        
        --ds-font-weight-medium: 500;
        --ds-line-height-sm: 1.5;
        --ds-opacity-disabled: 0.3;
        
        --ds-font-size-6: 24px; /* Approx 1.5rem */
        --ds-color-neutral-text-default: #2b2b2b;
        --ds-color-neutral-border-subtle: #e0e0e0; /* Define divider color */
        
        /* Shadow vars needed for button focus */
        --dsc-focus-boxShadow: 0 0 0 var(--ds-border-width-focus) var(--ds-color-focus-inner);
        --dsc-focus-outline: var(--ds-color-focus-outer) solid var(--ds-border-width-focus);
      }

      /* BUTTON COMPONENT CSS */
      .ds-button{--dsc-button-background--active:var(--ds-color-base-active);--dsc-button-background--hover:var(--ds-color-base-hover);--dsc-button-background:var(--ds-color-base-default);--dsc-button-color:var(--ds-color-base-contrast-default);--dsc-button-color--hover:var(--ds-color-base-contrast-default);--dsc-button-border-width:var(--ds-border-width-default);--dsc-button-border-style:solid;--dsc-button-border-color:transparent;--dsc-button-gap:var(--ds-size-2);--dsc-button-padding:var(--ds-size-2) var(--ds-size-4);--dsc-button-size:var(--ds-size-12);align-items:center;background:var(--dsc-button-background);border-color:var(--dsc-button-border-color);border-radius:var(--ds-border-radius-default);border-style:var(--dsc-button-border-style);border-width:var(--dsc-button-border-width);box-sizing:border-box;color:var(--dsc-button-color);cursor:pointer;font-family:inherit;font-weight:var(--ds-font-weight-medium);gap:var(--dsc-button-gap);height:-moz-fit-content;height:fit-content;justify-content:center;line-height:var(--ds-line-height-sm);min-height:var(--dsc-button-size);min-width:var(--dsc-button-size);outline:none;padding:var(--dsc-button-padding);-webkit-print-color-adjust:exact;print-color-adjust:exact;text-align:inherit;text-decoration:none}.ds-button:focus-visible{box-shadow:var(--_ds--focus,var(--dsc-focus-boxShadow));outline:var(--_ds--focus,var(--dsc-focus-outline));outline-offset:var(--_ds--focus,var(--ds-border-width-focus))}.ds-button:focus-visible *{--_ds--focus: }.ds-button:not([data-size]){font-size:inherit}.ds-button :where(img,svg){flex-shrink:0;font-size:24px}.ds-button:focus-visible{position:relative}.ds-button:where(:not([hidden])){display:flex}
      @media (hover:hover) and (pointer:fine){.ds-button:where(:not(:disabled,[aria-disabled=true],[aria-busy=true])):hover{background:var(--dsc-button-background--hover);color:var(--dsc-button-color--hover)}.ds-button:where(:not(:disabled,[aria-disabled=true],[aria-busy=true])):active{background:var(--dsc-button-background--active)}}

      /* MENU CUSTOM CLASSES */
      ._menuButton_1jp6u_107 {
          display: flex;
          align-items: center;
      }
      ._buttonText_1jp6u_102 {
          display: inline-block;
          margin-left: var(--ds-size-2);
      }
      
      /* Icon wrapper fixes to prevent shifting */
      .menu-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0; /* Eliminate text height influence */
      }
      
      .header-menu-nav {
        display: flex;
        flex-direction: column;
        gap: var(--ds-size-6);
        margin-top: var(--ds-size-4);
      }
      
      .header-menu-link {
        font-size: var(--ds-font-size-6);
        font-weight: var(--ds-font-weight-medium);
        color: var(--ds-color-neutral-text-default);
        text-decoration: none;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        text-align: left;
        transition: color .2s ease;
        font-family: inherit;
      }
      
      .header-menu-link:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
      }

      /* Secondary Logo & Divider Styles */
      .sb-header-logo-wrapper {
        display: flex;
        align-items: center;
        gap: var(--ds-size-4);
      }
      
      .sb-header-divider {
        width: 1px;
        height: 40px;
        background-color: var(--ds-color-neutral-border-subtle);
      }
      
      .sb-secondary-logo {
        height: 24px;
        width: auto;
        display: block;
      }

      /* LAYOUT OVERRIDES */
      .css-17kqctq {
        width: 100% !important;
        max-width: 1364px !important; /* Updated to match HeaderInner max-width */
        margin: 0 auto !important;
        position: relative !important;
        top: 100px !important; /* Increased spacing from 80px to 100px */
        height: calc(100vh - 100px) !important;
        background-color: white;
        box-shadow: none !important;
        border: none !important;
        display: grid !important;
        grid-template-columns: 240px 1fr !important;
        grid-template-rows: 1fr !important;
      }
      .sidebar-header { display: none !important; }
      .css-v51glt { position: relative !important; height: 100% !important; border-right: 1px solid #eee; }
      .css-g9eqoe { position: relative !important; height: 100% !important; }
    </style>
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const header = document.createElement('div');
        header.id = 'custom-header-wrapper';
        header.style.cssText = "position: fixed; top: 0; left: -17px; width: calc(100% + 17px); height: auto; min-height: 80px; z-index: 1000; background-color: #ffffff; border-bottom: 1px solid #e0e0e0; display: block; unicode-bidi: isolate;";
        
        header.innerHTML = \`
            <div style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: auto;
                min-height: 80px;
                width: 100%;
                max-width: 1364px;
                margin: 0 auto;
                padding: 16px 24px;
                box-sizing: border-box;
                gap: 24px;
            ">
                <!-- Logo Section with Secondary Logo -->
                <div class="sb-header-logo-wrapper">
                    <a href="/" aria-label="Norges Røde Kors Hjem" style="
                        display: block;
                        height: 74px;
                        width: auto;
                        text-decoration: none;
                        color: inherit;
                        flex-shrink: 0;
                        cursor: pointer;
                    ">
                        <img src="./logo-red-cross.svg" alt="" style="height: 100%; width: auto; display: block;" />
                    </a>
                    
                    <div class="sb-header-divider"></div>
                    <img src="./designsystemlogofinal.svg" alt="Designsystem Logo" class="sb-secondary-logo" />
                </div>
                
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    flex-shrink: 0;
                ">
                    <button class="ds-button _menuButton_1jp6u_107" data-variant="primary" type="button" data-color="main" data-size="md" aria-expanded="false" aria-label="Åpne meny" id="sb-custom-menu-btn">
                        <!-- Icon Wrapper -->
                        <span id="sb-menu-icon-open" class="menu-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" focusable="false" role="img" aria-hidden="true">
                                <path fill="currentColor" fill-rule="evenodd" d="M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m0 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75m.75 5.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span id="sb-menu-icon-close" class="menu-icon-wrapper" style="display: none;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" focusable="false" role="img" aria-hidden="true">
                                <path fill="currentColor" fill-rule="evenodd" d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span class="_buttonText_1jp6u_102" id="sb-menu-text">Meny</span>
                    </button>
                </div>
            </div>
            
            <!-- Menu Dropdown -->
            <div id="sb-custom-menu-dropdown" style="
                display: none; 
                position: absolute; 
                top: 100%; 
                left: 0; 
                width: 100%; 
                background-color: #ffffff; 
                border-bottom: 1px solid #e0e0e0; 
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); 
                padding: 40px 0; 
                z-index: 999;
            ">
                <div style="
                    max-width: 1200px; 
                    margin: 0 auto; 
                    padding: 0 24px; 
                ">
                     <nav class="header-menu-nav" aria-label="Hovedmeny">
                        <a href="../" class="header-menu-link">Design</a>
                        <a href="./" class="header-menu-link">Komponenter</a>
                        <a href="../code" class="header-menu-link">Kode</a>
                     </nav>
                </div>
            </div>
        \`;
        
        document.body.insertBefore(header, document.body.firstChild);

        // Toggle Logic
        const btn = document.getElementById('sb-custom-menu-btn');
        const dropdown = document.getElementById('sb-custom-menu-dropdown');
        const iconOpen = document.getElementById('sb-menu-icon-open');
        const iconClose = document.getElementById('sb-menu-icon-close');
        const text = document.getElementById('sb-menu-text');

        if(btn && dropdown) {
            btn.addEventListener('click', () => {
                const isOpen = dropdown.style.display === 'block';
                
                if(isOpen) {
                    dropdown.style.display = 'none';
                    iconOpen.style.display = 'flex'; // Use flex for icon wrapper
                    iconClose.style.display = 'none';
                    text.textContent = 'Meny';
                    btn.setAttribute('aria-expanded', 'false');
                    btn.setAttribute('aria-label', 'Åpne meny');
                } else {
                    dropdown.style.display = 'block';
                    iconOpen.style.display = 'none';
                    iconClose.style.display = 'flex'; // Use flex for icon wrapper
                    text.textContent = 'Lukk';
                    btn.setAttribute('aria-expanded', 'true');
                    btn.setAttribute('aria-label', 'Lukk meny');
                }
            });
        }
      });
    </script>
  `,
};

export default config;
