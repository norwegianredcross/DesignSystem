# AGENTS.md

Shared guidance for AI coding agents working in the Røde Kors Design System repository.

## Repo At A Glance

- React component library built on top of Digdir Designsystemet.
- Storybook is the main documentation and publishing surface.
- `AI_DESIGN_SYSTEM_GUIDE.md` and `metadata.json` are published artifacts used downstream by application templates and agent workflows.

## Non-Negotiables

- Keep the guide and metadata workflow usable for engineers who are not relying on agent tooling.
- Prefer additive changes to the AI context publishing pipeline over risky rewrites of the existing documentation flow.
- Surface terminology drift and policy conflicts instead of silently folding them into unrelated component work.

## Upstream Context Publishing

- `npm run generate-metadata` regenerates component metadata.
- `npm run update-ai-guide-components` updates the checked-in AI guide.
- `npm run generate-ai-context-manifest` emits machine-readable context for downstream refresh workflows.
- `npm run build-storybook` should continue to publish the guide, metadata, and manifest together.

## Skills

- Use `publish-rk-context` when updating the AI context outputs or checking whether the upstream guide flow still looks healthy after repository changes.
