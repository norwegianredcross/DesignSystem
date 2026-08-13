// Compile-time guard for the data-color contract. `Color` is only a closed
// union while rk-design-tokens' ColorDefinitions augmentation is loaded (see
// src/types.ts) — if that wiring is ever removed, Color silently degrades to
// `string` and dead scopes stop being errors. @ts-expect-error inverts that:
// the moment a dead scope COMPILES, `npm run typecheck` fails.
// This file is never imported, so it exists only for the typecheck gate.
import type { ButtonProps } from '../components/Button';
import type { TagProps } from '../components/Tag';

// @ts-expect-error -- 'accent' is a dead scope: it matches no RK theme scope
export const deadAccent: ButtonProps = { 'data-color': 'accent' };
// @ts-expect-error -- 'main' is a dead scope: it matches no RK theme scope
export const deadMain: TagProps = { 'data-color': 'main' };
export const alive: ButtonProps = { 'data-color': 'primary-color-red' };
