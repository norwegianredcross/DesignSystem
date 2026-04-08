---
name: "publish-rk-context"
description: "Refresh and validate the DesignSystem guide, metadata, and machine-readable manifest that downstream repos consume."
---

# Publish RK Context

Use this skill when the repository changes affect published guidance consumed by downstream application templates or agent workflows.

## Goals

1. Preserve the existing human-usable guide and metadata workflow.
2. Generate machine-readable context that downstream refresh flows can consume safely.
3. Detect terminology drift or output-shape regressions early.

## Default Flow

1. Run:
   ```bash
   npm run generate-metadata
   npm run update-ai-guide-components
   npm run generate-ai-context-manifest
   ```
2. Review the generated outputs:
   - `metadata.json`
   - `AI_DESIGN_SYSTEM_GUIDE.md`
   - `ai-context.manifest.json`
3. If the guide still contains known drift markers or the output shape changed unexpectedly, stop and surface that as review work.
4. When publishing Storybook artifacts, ensure all three files are copied into the published output.

## Guardrails

- Do not reduce the usefulness of the guide flow for non-agent engineers.
- If a more robust refactor turns risky, preserve the existing script path and improve validation around it instead.
- Treat standards drift as review work, not an automatic mass cleanup.
