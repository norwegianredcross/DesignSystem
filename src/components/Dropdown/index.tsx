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
 * Underkomponenter: DropdownTrigger, DropdownTriggerContext, DropdownHeading, DropdownList, DropdownItem, DropdownButton
 */
export type DropdownProps = DigDirDropdownProps;
export type DropdownTriggerContextProps = DigDirDropdownTriggerContextProps;
export type DropdownHeadingProps = DigDirDropdownHeadingProps;
export type DropdownListProps = DigDirDropdownListProps;
export type DropdownItemProps = DigDirDropdownItemProps;
export type DropdownButtonProps = DigDirDropdownButtonProps;

export const Dropdown: typeof DigDirDropdown = DigDirDropdown;
export const DropdownTrigger: typeof DigDirDropdownTrigger = DigDirDropdownTrigger;
export const DropdownTriggerContext: typeof DigDirDropdownTriggerContext = DigDirDropdownTriggerContext;
export const DropdownHeading: typeof DigDirDropdownHeading = DigDirDropdownHeading;
export const DropdownList: typeof DigDirDropdownList = DigDirDropdownList;
export const DropdownItem: typeof DigDirDropdownItem = DigDirDropdownItem;
export const DropdownButton: typeof DigDirDropdownButton = DigDirDropdownButton;

