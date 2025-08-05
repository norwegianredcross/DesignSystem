import { AlertProps as AlertProps_2 } from './components';
import { AvatarProps as AvatarProps_2 } from './components';
import { Badge } from './components/Badge';
import { BadgePosition } from './components/Badge';
import { BadgePositionProps } from './components/Badge';
import { BadgeProps } from './components/Badge';
import { Breadcrumbs } from './components/Breadcrumbs';
import { BreadcrumbsItem } from './components/Breadcrumbs';
import { BreadcrumbsLink } from './components/Breadcrumbs';
import { BreadcrumbsList } from './components/Breadcrumbs';
import { BreadcrumbsProps } from './components/Breadcrumbs';
import { Buttons } from './components/Buttons';
import { ButtonsProps } from './components/Buttons';
import { Card } from './components/Card';
import { CardBlock } from './components/Card';
import { CardProps } from './components/Card';
import { Checkbox } from './components/Checkbox';
import { CheckboxProps } from './components/Checkbox';
import { Chip } from './components/Chip';
import { ChipButtonProps } from './components/Chip';
import { ChipCheckboxProps } from './components/Chip';
import { ChipRadioProps } from './components/Chip';
import { ChipRemovableProps } from './components/Chip';
import { default as default_2 } from 'react';
import { DetailsContentProps } from '@digdir/designsystemet-react';
import { DetailsProps as DetailsProps_2 } from './components';
import { Dialog } from './components/Dialog';
import { DialogProps } from './components/Dialog';
import { DividerProps as DividerProps_2 } from './components';
import { Dropdown } from './components/Dropdown';
import { DropdownProps } from './components/Dropdown';
import { ErrorSummary } from './components/ErrorSummary';
import { ErrorSummaryProps } from './components/ErrorSummary';
import { Field } from './components/Field';
import { FieldCounter } from './components/Field';
import { FieldCounterProps } from './components/Field';
import { FieldDescription } from './components/Field';
import { FieldDescriptionProps } from './components/Field';
import { FieldProps } from './components/Field';
import { Fieldset } from './components/Fieldset';
import { FieldsetProps } from './components/Fieldset';
import { Input } from './components/Input';
import { InputHTMLAttributes } from 'react';
import { InputProps } from './components/Input';
import { Link } from './components/Link';
import { LinkProps } from './components/Link';
import { List } from './components/List';
import { Pagination } from './components/Pagination';
import { PaginationProps } from './components/Pagination';
import { Popover } from './components/Popover';
import { PopoverProps } from './components/Popover';
import { Radio } from './components/Radio';
import { RadioProps } from './components/Radio';
import { Search } from './components/Search';
import { SearchProps } from './components/Search';
import { Select } from './components/Select';
import { SelectProps } from './components/Select';
import { SkeletonProps as SkeletonProps_2 } from './components';
import { SkipLink } from './components/SkipLink';
import { SkipLinkProps } from './components/SkipLink';
import { SpinnerProps as SpinnerProps_2 } from './components';
import { Switch } from './components/Switch';
import { SwitchProps } from './components/Switch';
import { Table } from './components/Table';
import { TableProps } from './components/Table';
import { Tabs } from './components/Tabs';
import { TabsProps } from './components/Tabs';
import { Tag } from './components/Tag';
import { TagProps } from './components/Tag';
import { Textarea } from './components/Textarea';
import { TextareaProps } from './components/Textarea';
import { TextfieldProps as TextfieldProps_2 } from './components';
import { ToggleGroup } from './components/ToggleGroup';
import { ToggleGroupProps } from './components/ToggleGroup';
import { Tooltip } from './components/Tooltip';
import { TooltipProps } from './components/Tooltip';
import { useCheckboxGroup } from './components/Checkbox';
import { usePagination } from './components/Pagination';
import { useRadioGroup } from './components/Radio';

export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;

export declare interface AlertProps extends AlertProps_2 {
}

export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;

export declare interface AvatarProps extends AvatarProps_2 {
}

export { Badge }

export { BadgePosition }

export { BadgePositionProps }

export { BadgeProps }

export { Breadcrumbs }

export { BreadcrumbsItem }

export { BreadcrumbsLink }

export { BreadcrumbsList }

export { BreadcrumbsProps }

export { Buttons }

export { ButtonsProps }

export { Card }

export { CardBlock }

export { CardProps }

export { Checkbox }

export { CheckboxProps }

export { Chip }

export { ChipButtonProps }

export { ChipCheckboxProps }

export { ChipRadioProps }

export { ChipRemovableProps }

export declare const DateInput: default_2.ForwardRefExoticComponent<DateInputProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix" | "label" | "aria-label" | "aria-labelledby" | "type" | "inputMode" | "pattern" | "maxLength" | "value" | "defaultValue" | "onChange"> {
    label?: default_2.ReactNode;
    suffixIcon?: default_2.ReactNode;
    onSuffixClick?: default_2.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    inputWrapperClassName?: string;
    inputClassName?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    description?: default_2.ReactNode;
    error?: default_2.ReactNode;
    value?: string | null;
    defaultValue?: string | null;
    onChange?: (event: default_2.ChangeEvent<HTMLInputElement>, formattedValue: string) => void;
}

export declare const DatePicker: default_2.FC<DatePickerProps>;

export declare interface DatePickerProps {
    initialDate?: Date;
    selectedDate?: Date | null;
    onDateSelect?: (date: Date) => void;
}

export declare const Details: React.ForwardRefExoticComponent<DetailsProps_2 & React.RefAttributes<HTMLDetailsElement>> & {
    Summary: React.ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    Content: React.ForwardRefExoticComponent<DetailsContentProps & React.RefAttributes<HTMLDivElement>>;
};

export declare type DetailsProps = DetailsProps_2;

export { Dialog }

export { DialogProps }

export declare const Divider: React.ForwardRefExoticComponent<DividerProps_2 & React.RefAttributes<HTMLHRElement>>;

export declare type DividerProps = DividerProps_2;

export { Dropdown }

export { DropdownProps }

export { ErrorSummary }

export { ErrorSummaryProps }

export { Field }

export { FieldCounter }

export { FieldCounterProps }

export { FieldDescription }

export { FieldDescriptionProps }

export { FieldProps }

export { Fieldset }

export { FieldsetProps }

export { Input }

export { InputProps }

export { Link }

export { LinkProps }

export { List }

export { Pagination }

export { PaginationProps }

export { Popover }

export { PopoverProps }

export { Radio }

export { RadioProps }

export { Search }

export { SearchProps }

export { Select }

export { SelectProps }

export declare const SkeletonLoader: React.ForwardRefExoticComponent<SkeletonProps_2 & React.RefAttributes<HTMLSpanElement>>;

export declare type SkeletonProps = SkeletonProps_2;

export { SkipLink }

export { SkipLinkProps }

export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps_2 & React.RefAttributes<SVGSVGElement>>;

export declare type SpinnerProps = SpinnerProps_2;

export { Switch }

export { SwitchProps }

export { Table }

export { TableProps }

export { Tabs }

export { TabsProps }

export { Tag }

export { TagProps }

export { Textarea }

export { TextareaProps }

export declare const Textfield: React.ForwardRefExoticComponent<TextfieldProps_2 & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;

export declare type TextfieldProps = TextfieldProps_2;

export { ToggleGroup }

export { ToggleGroupProps }

export { Tooltip }

export { TooltipProps }

export { useCheckboxGroup }

export { usePagination }

export { useRadioGroup }

export { }
