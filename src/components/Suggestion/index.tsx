import {
  forwardRef,
  useCallback,
  type ComponentProps,
  type ComponentRef,
} from 'react';
import {
  EXPERIMENTAL_Suggestion as DigDirSuggestion,
  type SuggestionProps as DigDirSuggestionProps,
} from '@digdir/designsystemet-react';
import { preserveSuggestionQuery } from './preserveSuggestionQuery';

export type SuggestionProps = DigDirSuggestionProps;

export type SuggestionInputProps = ComponentProps<typeof DigDirSuggestion.Input>;
export type SuggestionListProps = ComponentProps<typeof DigDirSuggestion.List>;
export type SuggestionOptionProps = ComponentProps<typeof DigDirSuggestion.Option>;
export type SuggestionEmptyProps = ComponentProps<typeof DigDirSuggestion.Empty>;
export type SuggestionClearProps = ComponentProps<typeof DigDirSuggestion.Clear>;

const SuggestionRoot = forwardRef<
  ComponentRef<typeof DigDirSuggestion>,
  SuggestionProps
>(function SuggestionRoot(props, forwardedRef) {
  const attachRef = useCallback(
    (element: ComponentRef<typeof DigDirSuggestion> | null) => {
      const detachQuery = element ? preserveSuggestionQuery(element) : undefined;
      const detachRef: unknown =
        typeof forwardedRef === 'function' ? forwardedRef(element) : undefined;
      if (forwardedRef && typeof forwardedRef !== 'function') {
        forwardedRef.current = element;
      }

      // Digdir invokes ref cleanup in both supported React versions.
      return () => {
        detachQuery?.();
        if (typeof detachRef === 'function') detachRef();
        else if (typeof forwardedRef === 'function') forwardedRef(null);
        else if (forwardedRef) forwardedRef.current = null;
      };
    },
    [forwardedRef],
  );

  return <DigDirSuggestion {...props} ref={attachRef} />;
});

/** Experimental Digdir Suggestion with query preservation. */
// Keep the peer's public type; inferred types leak a transitive web-package import.
export const Suggestion: typeof DigDirSuggestion = Object.assign(SuggestionRoot, {
  Input: DigDirSuggestion.Input,
  List: DigDirSuggestion.List,
  Option: DigDirSuggestion.Option,
  Empty: DigDirSuggestion.Empty,
  Clear: DigDirSuggestion.Clear,
  Toggle: DigDirSuggestion.Toggle,
});

Suggestion.displayName = 'Suggestion';
