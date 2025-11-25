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
export const Suggestion = DigDirSuggestion;

// Sett display name for rot-komponenten
Suggestion.displayName = 'Suggestion';