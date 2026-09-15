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

// Flat exports of the compound's members, in addition to `Popover.*`. A server
// component cannot reach `Popover.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type PopoverTriggerProps = DigDirPopoverTriggerProps;
export const PopoverTrigger: typeof DigDirPopoverTrigger = DigDirPopoverTrigger;
export type PopoverTriggerContextProps = DigDirPopoverTriggerContextProps;
export const PopoverTriggerContext: typeof DigDirPopoverTriggerContext = DigDirPopoverTriggerContext;
