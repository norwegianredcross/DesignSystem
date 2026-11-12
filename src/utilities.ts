/**
 * Slår sammen to typer, der egenskaper fra T2 (høyre) overskriver egenskaper fra T1 (venstre).
 * Dette brukes for å kombinere grunnleggende egenskaper med komponentspesifikke egenskaper.
 */
export type MergeRight<T1, T2> = Omit<T1, keyof T2> & T2;

// Redeclare deprecated members instead of intersecting them: TypeScript only
// flags a member when every declaration of it is tagged.
export type WithoutMembers<C extends (props: never) => unknown, K extends keyof C> = ((
  props: Parameters<C>[0]
) => ReturnType<C>) &
  Omit<C, K>;
