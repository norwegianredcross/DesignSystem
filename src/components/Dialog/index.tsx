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
  /** @deprecated Will be removed in the next major version. Use a `Button` with `command="show-modal"` (or `command="--show-non-modal"`) and `commandfor` set to the dialog's `id` instead. */
  Trigger: typeof DigDirDialogTrigger;
  /** @deprecated Will be removed in the next major version. Connect a `Button` to the dialog with `command="show-modal"` (or `command="--show-non-modal"`) and `commandfor` set to the dialog's `id` instead. */
  TriggerContext: typeof DigDirDialogTriggerContext;
} = DigDirDialog;

// Flat exports: server components can't reach `Dialog.Block` across the client boundary.
export type DialogBlockProps = DigDirDialogBlockProps;
export const DialogBlock: typeof DigDirDialogBlock = DigDirDialogBlock;
/** @deprecated Will be removed in the next major version. Use a `Button` with `command="show-modal"` (or `command="--show-non-modal"`) and `commandfor` set to the dialog's `id` instead. */
export type DialogTriggerProps = DigDirDialogTriggerProps;
/** @deprecated Will be removed in the next major version. Use a `Button` with `command="show-modal"` (or `command="--show-non-modal"`) and `commandfor` set to the dialog's `id` instead. */
export const DialogTrigger: typeof DigDirDialogTrigger = DigDirDialogTrigger;
/** @deprecated Will be removed in the next major version. Connect a `Button` to the dialog with `command="show-modal"` (or `command="--show-non-modal"`) and `commandfor` set to the dialog's `id` instead. */
export type DialogTriggerContextProps = DigDirDialogTriggerContextProps;
/** @deprecated Will be removed in the next major version. Connect a `Button` to the dialog with `command="show-modal"` (or `command="--show-non-modal"`) and `commandfor` set to the dialog's `id` instead. */
export const DialogTriggerContext: typeof DigDirDialogTriggerContext = DigDirDialogTriggerContext;
