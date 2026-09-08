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
export { Chip, ChipButton, ChipCheckbox, ChipRadio, ChipRemovable } from './components/Chip';
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

// GraphicElement (Custom component) - grafiske elementer avledet av korset
export { GraphicElement } from './components/GraphicElement';
export type {
  GraphicElementProps,
  GraphicElementShape,
  GraphicElementIsoShape,
  GraphicElementVariant,
  GraphicElementPosition,
  GraphicElementSize,
} from './components/GraphicElement';

// Details
export { Details, DetailsContent, DetailsSummary } from './components/Details';
export type { DetailsProps, DetailsContentProps, DetailsSummaryProps } from './components/Details';

// Dialog
export { Dialog, DialogBlock, DialogTrigger, DialogTriggerContext } from './components/Dialog';
export type { DialogProps, DialogBlockProps, DialogTriggerProps, DialogTriggerContextProps } from './components/Dialog';

// Divider
export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';

// Dropdown
export { Dropdown, DropdownTrigger, DropdownTriggerContext, DropdownHeading, DropdownList, DropdownItem, DropdownButton } from './components/Dropdown';
export type { DropdownProps, DropdownTriggerContextProps, DropdownHeadingProps, DropdownListProps, DropdownItemProps, DropdownButtonProps } from './components/Dropdown';

// ErrorSummary
export { ErrorSummary, ErrorSummaryHeading, ErrorSummaryItem, ErrorSummaryLink, ErrorSummaryList } from './components/ErrorSummary';
export type { ErrorSummaryProps, ErrorSummaryHeadingProps, ErrorSummaryItemProps, ErrorSummaryLinkProps, ErrorSummaryListProps } from './components/ErrorSummary';

// Field
export { Field, FieldDescription, FieldCounter, FieldAffix, FieldAffixes } from './components/Field';
export type { FieldAffixProps, FieldAffixesProps } from './components/Field';
export type {
  FieldProps,
  FieldDescriptionProps,
  FieldCounterProps,
} from './components/Field';

// Fieldset
export { Fieldset, FieldsetDescription, FieldsetLegend } from './components/Fieldset';
export type { FieldsetProps, FieldsetDescriptionProps, FieldsetLegendProps } from './components/Fieldset';

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
export { List, ListItem, ListOrdered, ListUnordered } from './components/List';
export type { ListItemProps, ListOrderedProps, ListUnorderedProps } from './components/List';

// Pagination
export { Pagination, PaginationList, PaginationItem, PaginationButton, usePagination } from './components/Pagination';
export type { PaginationProps, PaginationListProps, PaginationItemProps, PaginationButtonProps } from './components/Pagination';

// Paragraph
export { Paragraph } from './components/Paragraph';
export type { ParagraphProps } from './components/Paragraph';

// Popover
export { Popover, PopoverTrigger, PopoverTriggerContext } from './components/Popover';
export type { PopoverProps, PopoverTriggerProps, PopoverTriggerContextProps } from './components/Popover';

// Radio
export { Radio, useRadioGroup } from './components/Radio';
export type { RadioProps } from './components/Radio';

// Search
export { Search, SearchButton, SearchClear, SearchInput } from './components/Search';
export type { SearchProps, SearchButtonProps, SearchClearProps, SearchInputProps } from './components/Search';

// Select
export { Select, SelectOptgroup, SelectOption } from './components/Select';
export type { SelectProps, SelectOptgroupProps, SelectOptionProps } from './components/Select';

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
export { Table, TableBody, TableCell, TableFoot, TableHead, TableHeaderCell, TableRow } from './components/Table';
export type { TableProps, TableBodyProps, TableCellProps, TableFootProps, TableHeadProps, TableHeaderCellProps, TableRowProps } from './components/Table';

// Tabs
export { Tabs, TabsList, TabsPanel, TabsTab } from './components/Tabs';
export type { TabsProps, TabsListProps, TabsPanelProps, TabsTabProps } from './components/Tabs';

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
export { ToggleGroup, ToggleGroupItem } from './components/ToggleGroup';
export type { ToggleGroupProps, ToggleGroupItemProps } from './components/ToggleGroup';

// Tooltip
export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

// ValidationMessage
export { ValidationMessage } from './components/ValidationMessage';
export type { ValidationMessageProps } from './components/ValidationMessage';

// Header
export { Header } from './components/Header';
export type { HeaderProps, HeaderSearchItem } from './components/Header';

// Footer
export { Footer } from './components/Footer';
export type { FooterProps } from './components/Footer';

// Donor (Custom component)
export { Donor } from './components/Donor';
export type { DonorProps, DonorAmount } from './components/Donor';

// Language
export { LanguageProvider, useLanguage, useLanguageOptional } from './context/LanguageContext';
export type { LanguageContextType, Language } from './context/LanguageContext';
