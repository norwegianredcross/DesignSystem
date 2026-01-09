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

