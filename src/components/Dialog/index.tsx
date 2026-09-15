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

/**
 * Dialog-komponent for modale vinduer.
 */
export type DialogProps = DigDirDialogProps;
export const Dialog: typeof DigDirDialog = DigDirDialog;

// Flat exports of the compound's members, in addition to `Dialog.*`. A server
// component cannot reach `Dialog.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type DialogBlockProps = DigDirDialogBlockProps;
export const DialogBlock: typeof DigDirDialogBlock = DigDirDialogBlock;
export type DialogTriggerProps = DigDirDialogTriggerProps;
export const DialogTrigger: typeof DigDirDialogTrigger = DigDirDialogTrigger;
export type DialogTriggerContextProps = DigDirDialogTriggerContextProps;
export const DialogTriggerContext: typeof DigDirDialogTriggerContext = DigDirDialogTriggerContext;
