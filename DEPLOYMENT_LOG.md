# Deployment Log

## 2025-04-09: Fixed Storybook Deployment Issues

### Issues Fixed
1. **404 Errors**: Fixed asset path issues causing 404 errors
2. **Permissions Policy Warning**: Added proper headers to resolve interest-cohort warnings
3. **Cache Busting**: Implemented cache-busting hashes for all assets
4. **Routing**: Added proper SPA routing support with 404.html fallback
5. **Base Path**: Corrected base path configuration for GitHub Pages

### Technical Changes
1. Updated Vite configuration to use correct base path:
   ```js
   base: '/DesignSystem/storybook/',
   ```

2. Added cache-busting for assets in Vite config:
   ```js
   rollupOptions: {
     output: {
       manualChunks: undefined,
       assetFileNames: 'assets/[name]-[hash][extname]',
       chunkFileNames: 'assets/[name]-[hash].js',
       entryFileNames: 'assets/[name]-[hash].js'
     }
   }
   ```

3. Fixed asset paths in HTML files to use absolute URLs:
   - Updated all relative paths (`./`) to absolute paths (`/DesignSystem/storybook/`)
   - Added proper `<base>` tags to HTML files

4. Added SPA routing support with 404.html fallback for client-side routing

5. Created redirect from root to Storybook for better user experience

### Deployment Process
1. Built Storybook with corrected configuration
2. Synced to gh-pages directory
3. Force pushed to gh-pages branch
4. Verified deployment at https://norwegianredcross.github.io/DesignSystem/storybook/

## Next Steps
- Consider adding automated deployment workflow
- Add more components to the design system
- Improve documentation
