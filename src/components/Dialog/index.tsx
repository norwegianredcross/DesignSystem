import {
  Dialog as DigDirDialog,
  type DialogProps as DigDirDialogProps,
} from '@digdir/designsystemet-react';
import {
  DialogBlock as DigDirDialogBlock,
  type DialogBlockProps as DigDirDialogBlockProps,
  DialogTrigger as DigDirDialogTrigger,
  type DialogTriggerProps as DigDirDialogTriggerProps,
  DialogTriggerContext as DigDirDialogTriggerContext,
  type DialogTriggerContextProps as DigDirDialogTriggerContextProps,
} from '@digdir/designsystemet-react';
import type { WithoutMembers } from '../../utilities';

/**
 * Dialog-komponent for modale vinduer.
 */
export type DialogProps = DigDirDialogProps;
export const Dialog: WithoutMembers<typeof DigDirDialog, 'Trigger' | 'TriggerContext'> & {
  /** @deprecated Removed in Designsystemet 2.0. Use `Button` with `command="show-modal"` and `commandfor` set to the dialog's `id`. */
  Trigger: typeof DigDirDialogTrigger;
  /** @deprecated Removed in Designsystemet 2.0. Use `Button` with `command="show-modal"` and `commandfor` set to the dialog's `id`. */
  TriggerContext: typeof DigDirDialogTriggerContext;
} = DigDirDialog;

// Flat exports: server components can't reach `Dialog.Block` across the client boundary.
export type DialogBlockProps = DigDirDialogBlockProps;
export const DialogBlock: typeof DigDirDialogBlock = DigDirDialogBlock;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `command="show-modal"` and `commandfor` set to the dialog's `id`. */
export type DialogTriggerProps = DigDirDialogTriggerProps;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `command="show-modal"` and `commandfor` set to the dialog's `id`. */
export const DialogTrigger: typeof DigDirDialogTrigger = DigDirDialogTrigger;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `command="show-modal"` and `commandfor` set to the dialog's `id`. */
export type DialogTriggerContextProps = DigDirDialogTriggerContextProps;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `command="show-modal"` and `commandfor` set to the dialog's `id`. */
export const DialogTriggerContext: typeof DigDirDialogTriggerContext = DigDirDialogTriggerContext;
