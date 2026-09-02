// The docs' component catalogue, in its own module so the page file only
// exports the page component (React Fast Refresh needs that) while
// src/utils/catalogue.test.ts can still verify the list against the
// library's real inventory - a component missing here fails the build
// instead of silently missing from the documentation site.
export const catalogueComponents = [
    'Alert', 'Avatar', 'Badge', 'Breadcrumbs', 'Button', 'Card', 'Carousel', 'Checkbox', 'Chip',
    'DateInput', 'DatePicker', 'Details', 'Dialog', 'Divider', 'Donor', 'Dropdown', 'ErrorSummary',
    'Field', 'Fieldset', 'Footer', 'GraphicElement', 'Header', 'Heading', 'Input', 'Label', 'Link',
    'List', 'Pagination', 'Paragraph', 'Popover', 'Radio', 'Search', 'Select', 'SkeletonLoader',
    'SkipLink', 'SpinnerLoader', 'Suggestion', 'Switch', 'Table', 'Tabs', 'Tag', 'Textarea',
    'Textfield', 'ToggleGroup', 'Tooltip', 'ValidationMessage'
];
