import { type ComponentProps } from 'react';
import {
  EXPERIMENTAL_Suggestion as DigDirSuggestion,
  type SuggestionProps as DigDirSuggestionProps,
} from '@digdir/designsystemet-react';

// --- Prop Types ---

// Eksporter props for rot-komponenten
export type SuggestionProps = DigDirSuggestionProps;

// Eksporter props for alle underkomponenter
export type SuggestionInputProps = ComponentProps<typeof DigDirSuggestion.Input>;
export type SuggestionListProps = ComponentProps<typeof DigDirSuggestion.List>;
export type SuggestionOptionProps = ComponentProps<typeof DigDirSuggestion.Option>;
export type SuggestionEmptyProps = ComponentProps<typeof DigDirSuggestion.Empty>;
export type SuggestionClearProps = ComponentProps<typeof DigDirSuggestion.Clear>;

// --- Komponent Eksport ---

/**
 * Suggestion-komponent for autofullfør/søkeforslag.
 * Merk: Dette er en eksperimentell komponent fra DigDir.
 */
// The explicit `typeof DigDirSuggestion` annotation matters for the published
// types: without it, TypeScript expands the inferred type and the generated
// d.ts ends up importing DSSuggestionElement from '@digdir/designsystemet-web',
// a transitive package consumers don't have a guaranteed resolution path to.
// With the annotation, the d.ts just references the peer's exported name.
export const Suggestion: typeof DigDirSuggestion = DigDirSuggestion;

// Sett display name for rot-komponenten
Suggestion.displayName = 'Suggestion';