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
import type { WithoutMembers } from '../../utilities';

/**
 * Popover-komponent for å vise innhold over annet innhold ved interaksjon.
 */
export type PopoverProps = DigDirPopoverProps;
export const Popover: WithoutMembers<typeof DigDirPopover, 'Trigger' | 'TriggerContext'> & {
  /** @deprecated Will be removed in the next major version. Use a `Button` with `popovertarget` set to the popover's `id` instead. For an inline trigger, use a `<button>` with `data-popover="inline"`. */
  Trigger: typeof DigDirPopoverTrigger;
  /** @deprecated Will be removed in the next major version. Connect a `Button` to the popover with `popovertarget` set to the popover's `id` instead. */
  TriggerContext: typeof DigDirPopoverTriggerContext;
} = DigDirPopover;

// Flat exports: server components can't reach `Popover.Trigger` across the client boundary.
/** @deprecated Will be removed in the next major version. Use a `Button` with `popovertarget` set to the popover's `id` instead. For an inline trigger, use a `<button>` with `data-popover="inline"`. */
export type PopoverTriggerProps = DigDirPopoverTriggerProps;
/** @deprecated Will be removed in the next major version. Use a `Button` with `popovertarget` set to the popover's `id` instead. For an inline trigger, use a `<button>` with `data-popover="inline"`. */
export const PopoverTrigger: typeof DigDirPopoverTrigger = DigDirPopoverTrigger;
/** @deprecated Will be removed in the next major version. Connect a `Button` to the popover with `popovertarget` set to the popover's `id` instead. */
export type PopoverTriggerContextProps = DigDirPopoverTriggerContextProps;
/** @deprecated Will be removed in the next major version. Connect a `Button` to the popover with `popovertarget` set to the popover's `id` instead. */
export const PopoverTriggerContext: typeof DigDirPopoverTriggerContext = DigDirPopoverTriggerContext;
