/**
 * Hovedinngangspunkt for komponentbiblioteket.
 * Eksporterer alle komponenter og typer.
 */

// Alert
export { Alert } from './components/Alert';
export type { AlertProps } from './components/Alert';

// Avatar
export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

// Badge
export { Badge, BadgePosition } from './components/Badge';
export type { BadgeProps, BadgePositionProps } from './components/Badge';

// Breadcrumbs
export {
  Breadcrumbs,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink,
} from './components/Breadcrumbs';
export type { BreadcrumbsProps } from './components/Breadcrumbs';

// Buttons
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

// Card
export { Card, CardBlock } from './components/Card';
export type { CardProps } from './components/Card';

// Checkbox
export { Checkbox, useCheckboxGroup } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

// Chip
export { Chip } from './components/Chip';
export type {
  ChipRadioProps,
  ChipCheckboxProps,
  ChipRemovableProps,
  ChipButtonProps,
} from './components/Chip';

// DatePicker (Custom component)
export { DatePicker } from './components/DatePicker';
export type { DatePickerProps } from './components/DatePicker';

// DateInput (Custom component)
export { DateInput } from './components/DateInput';
export type { DateInputProps } from './components/DateInput';

// Carousel (Custom component)
export { Carousel } from './components/Carousel';
export type { CarouselProps } from './components/Carousel';

// CrossCorner (Custom component)
export { CrossCorner } from './components/CrossCorner';
export type { CrossCornerProps, CrossCornerPosition, CrossCornerSize } from './components/CrossCorner';

// Details
export { Details } from './components/Details';
export type { DetailsProps } from './components/Details';

// Dialog
export { Dialog } from './components/Dialog';
export type { DialogProps } from './components/Dialog';

// Divider
export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';

// Dropdown
export { Dropdown, DropdownTrigger, DropdownTriggerContext, DropdownHeading, DropdownList, DropdownItem, DropdownButton } from './components/Dropdown';
export type { DropdownProps, DropdownTriggerContextProps, DropdownHeadingProps, DropdownListProps, DropdownItemProps, DropdownButtonProps } from './components/Dropdown';

// ErrorSummary
export { ErrorSummary } from './components/ErrorSummary';
export type { ErrorSummaryProps } from './components/ErrorSummary';

// Field
export { Field, FieldDescription, FieldCounter } from './components/Field';
export type {
  FieldProps,
  FieldDescriptionProps,
  FieldCounterProps,
} from './components/Field';

// Fieldset
export { Fieldset } from './components/Fieldset';
export type { FieldsetProps } from './components/Fieldset';

// Heading
export { Heading } from './components/Heading';
export type { HeadingProps } from './components/Heading';

// Input
export { Input } from './components/Input';
export type { InputProps } from './components/Input';

// Label
export { Label } from './components/Label';
export type { LabelProps } from './components/Label';

// Link
export { Link } from './components/Link';
export type { LinkProps } from './components/Link';

// List
export { List } from './components/List';

// Pagination
export { Pagination, PaginationList, PaginationItem, PaginationButton, usePagination } from './components/Pagination';
export type { PaginationProps, PaginationListProps, PaginationItemProps, PaginationButtonProps } from './components/Pagination';

// Paragraph
export { Paragraph } from './components/Paragraph';
export type { ParagraphProps } from './components/Paragraph';

// Popover
export { Popover } from './components/Popover';
export type { PopoverProps } from './components/Popover';

// Radio
export { Radio, useRadioGroup } from './components/Radio';
export type { RadioProps } from './components/Radio';

// Search
export { Search } from './components/Search';
export type { SearchProps } from './components/Search';

// Select
export { Select } from './components/Select';
export type { SelectProps } from './components/Select';

// SkeletonLoader
export { SkeletonLoader } from './components/SkeletonLoader';
export type { SkeletonProps } from './components/SkeletonLoader';

// SkipLink
export { SkipLink } from './components/SkipLink';
export type { SkipLinkProps } from './components/SkipLink';

// Spinner
export { Spinner } from './components/SpinnerLoader';
export type { SpinnerProps } from './components/SpinnerLoader';

// Suggestion
export { Suggestion } from './components/Suggestion';
export type {
  SuggestionProps,
  SuggestionInputProps,
  SuggestionListProps,
  SuggestionOptionProps,
  SuggestionEmptyProps,
  SuggestionClearProps,
} from './components/Suggestion';

// Switch
export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

// Table
export { Table } from './components/Table';
export type { TableProps } from './components/Table';

// Tabs
export { Tabs } from './components/Tabs';
export type { TabsProps } from './components/Tabs';

// Tag
export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

// Textarea
export { Textarea } from './components/Textarea';
export type { TextareaProps } from './components/Textarea';

// Textfield
export { Textfield } from './components/Textfield';
export type { TextfieldProps } from './components/Textfield';

// ToggleGroup
export { ToggleGroup } from './components/ToggleGroup';
export type { ToggleGroupProps } from './components/ToggleGroup';

// Tooltip
export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

// ValidationMessage
export { ValidationMessage } from './components/ValidationMessage';
export type { ValidationMessageProps } from './components/ValidationMessage';

// Header
export { Header } from './components/Header';
export type { HeaderProps } from './components/Header';

// Footer
export { Footer } from './components/Footer';
export type { FooterProps } from './components/Footer';

// Language
export { LanguageProvider, useLanguage, useLanguageOptional } from './context/LanguageContext';
export type { LanguageContextType, Language } from './context/LanguageContext';
