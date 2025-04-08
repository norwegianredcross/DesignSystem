# GitHub Pages Deployment Troubleshooting Log

## Issues Encountered

1. **Initial Problem**: 
   - Site showed 404 error after deployment
   - Deployment timestamp wasn't updating

2. **First Fix Attempt**:
   - Added cache clearing to workflow
   - Forced fresh deployment with timestamp
   - *Result*: Still 404 error

3. **Second Issue**:
   - Build files weren't being properly generated
   - Vite command not found in CI environment

4. **Root Cause**:
   - Using `npm ci` which skips devDependencies
   - Direct `vite build` command required global Vite installation

## Solutions Implemented

1. **Workflow Changes**:
   - Changed from `npm ci` to `npm install` to get devDependencies
   - Changed from direct `vite build` to `npm run build` to use local Vite
   - Added robust build directory handling

2. **Why It Works**:
   - `npm install` installs all dependencies including devDependencies
   - `npm run build` uses the locally installed Vite from node_modules
   - The build script is defined in package.json and works consistently

## Final Working Configuration

The deployment now works because:
1. All required build tools are properly installed
2. The build command runs through npm which has access to local dependencies
3. Files are properly copied to the build directory
4. GitHub Pages receives the complete, correct build output

## Future Recommendations

1. Keep the workflow using `npm run build` rather than direct tool commands
2. Consider adding a build verification step
3. Document any future deployment changes in this log

## Latest Fix - 2025-04-08

### Issue
- GitHub Pages showing 404 despite successful deployments
- Missing index.html in gh-pages branch
- Deployment timestamp not updating

### Solution
1. Rebuilt project locally: `npm run build`
2. Force pushed built files to gh-pages branch:
   ```bash
   git push origin `git subtree split --prefix designsystemet-demo/dist main`:gh-pages --force
   ```

### Result
- Site now accessible at https://norwegianredcross.github.io/DesignSystem/
- All components loading correctly
- Deployment timestamp updates properly
