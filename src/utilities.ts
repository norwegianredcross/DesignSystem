/**
 * Slår sammen to typer, der egenskaper fra T2 (høyre) overskriver egenskaper fra T1 (venstre).
 * Dette brukes for å kombinere grunnleggende egenskaper med komponentspesifikke egenskaper.
 */
export type MergeRight<T1, T2> = Omit<T1, keyof T2> & T2;