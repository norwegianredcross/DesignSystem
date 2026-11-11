import {
  Popover as DigDirPopover,
  type PopoverProps as DigDirPopoverProps,
} from '@digdir/designsystemet-react';
import {
  PopoverTrigger as DigDirPopoverTrigger,
  type PopoverTriggerProps as DigDirPopoverTriggerProps,
  PopoverTriggerContext as DigDirPopoverTriggerContext,
  type PopoverTriggerContextProps as DigDirPopoverTriggerContextProps,
} from '@digdir/designsystemet-react';

/**
 * Popover-komponent for å vise innhold over annet innhold ved interaksjon.
 */
export type PopoverProps = DigDirPopoverProps;
export const Popover: typeof DigDirPopover = DigDirPopover;

// Flat exports: server components can't reach `Popover.Trigger` across the client boundary.
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `popovertarget` set to the popover's `id`. */
export type PopoverTriggerProps = DigDirPopoverTriggerProps;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `popovertarget` set to the popover's `id`. */
export const PopoverTrigger: typeof DigDirPopoverTrigger = DigDirPopoverTrigger;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `popovertarget` set to the popover's `id`. */
export type PopoverTriggerContextProps = DigDirPopoverTriggerContextProps;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `popovertarget` set to the popover's `id`. */
export const PopoverTriggerContext: typeof DigDirPopoverTriggerContext = DigDirPopoverTriggerContext;
