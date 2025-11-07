/**
 * Merges two types, with properties from T2 (right) overwriting properties from T1 (left).
 * This is used to combine base props with component-specific props.
 */
export type MergeRight<T1, T2> = Omit<T1, keyof T2> & T2;