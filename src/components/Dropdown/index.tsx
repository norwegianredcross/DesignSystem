import {
  Dropdown as DigDirDropdown,
  DropdownTrigger as DigDirDropdownTrigger,
  DropdownTriggerContext as DigDirDropdownTriggerContext,
  DropdownHeading as DigDirDropdownHeading,
  DropdownList as DigDirDropdownList,
  DropdownItem as DigDirDropdownItem,
  DropdownButton as DigDirDropdownButton,
  type DropdownProps as DigDirDropdownProps,
  type DropdownTriggerContextProps as DigDirDropdownTriggerContextProps,
  type DropdownHeadingProps as DigDirDropdownHeadingProps,
  type DropdownListProps as DigDirDropdownListProps,
  type DropdownItemProps as DigDirDropdownItemProps,
  type DropdownButtonProps as DigDirDropdownButtonProps,
} from '@digdir/designsystemet-react';

/**
 * Dropdown-komponent for menyer.
 * Underkomponenter: DropdownHeading, DropdownList, DropdownItem, DropdownButton
 */
export type DropdownProps = DigDirDropdownProps;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `popovertarget` set to the dropdown's `id`. */
export type DropdownTriggerContextProps = DigDirDropdownTriggerContextProps;
export type DropdownHeadingProps = DigDirDropdownHeadingProps;
export type DropdownListProps = DigDirDropdownListProps;
export type DropdownItemProps = DigDirDropdownItemProps;
export type DropdownButtonProps = DigDirDropdownButtonProps;

export const Dropdown: typeof DigDirDropdown = DigDirDropdown;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `popovertarget` set to the dropdown's `id`. */
export const DropdownTrigger: typeof DigDirDropdownTrigger = DigDirDropdownTrigger;
/** @deprecated Removed in Designsystemet 2.0. Use `Button` with `popovertarget` set to the dropdown's `id`. */
export const DropdownTriggerContext: typeof DigDirDropdownTriggerContext = DigDirDropdownTriggerContext;
export const DropdownHeading: typeof DigDirDropdownHeading = DigDirDropdownHeading;
export const DropdownList: typeof DigDirDropdownList = DigDirDropdownList;
export const DropdownItem: typeof DigDirDropdownItem = DigDirDropdownItem;
export const DropdownButton: typeof DigDirDropdownButton = DigDirDropdownButton;

