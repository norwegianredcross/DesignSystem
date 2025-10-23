import { type ComponentProps } from 'react';
import {
  EXPERIMENTAL_Suggestion as DigDirSuggestion,
  type SuggestionProps as DigDirSuggestionProps,
} from '@digdir/designsystemet-react';

// --- Prop Types ---

// Export the root component props
export type SuggestionProps = DigDirSuggestionProps;

// Export props for all sub-components
export type SuggestionInputProps = ComponentProps<typeof DigDirSuggestion.Input>;
export type SuggestionListProps = ComponentProps<typeof DigDirSuggestion.List>;
export type SuggestionOptionProps = ComponentProps<typeof DigDirSuggestion.Option>;
export type SuggestionEmptyProps = ComponentProps<typeof DigDirSuggestion.Empty>;
export type SuggestionClearProps = ComponentProps<typeof DigDirSuggestion.Clear>;

// --- Component Export ---

// Export the entire compound component (root + sub-components)
export const Suggestion = DigDirSuggestion;

// Set the display name for the root component
Suggestion.displayName = 'Suggestion';