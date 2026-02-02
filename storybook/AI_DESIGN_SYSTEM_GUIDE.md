  # AI Guide: Using Røde Kors Design System with Figma MCP

  ## Table of Contents
  1. [For AI Assistants: How to Use This Guide](#for-ai-assistants-how-to-use-this-guide)
  2. [Overview](#overview)
  3. [Design System Architecture](#design-system-architecture)
  4. [Available Components](#available-components)
  5. [Design Tokens](#design-tokens)
  6. [Figma MCP Integration](#figma-mcp-integration)
  7. [Workflow: Figma to Code](#workflow-figma-to-code)
  8. [Best Practices](#best-practices)
  9. [Component Mapping Guide](#component-mapping-guide)

  ---

  ## For AI Assistants: How to Use This Guide

  This guide is designed to be fetched and used by AI assistants (Claude Code, Cursor, etc.) when working with the Røde Kors Design System and Figma MCP. Here's how to access and use it:

  ### CRITICAL: Before Writing Any Code - Checklist

  **STOP! Before implementing ANY visual element, you MUST check:**

  1. ☐ **Is there a design system component for this?**
     - Check the [Available Components](#available-components) section
     - Common components: `Card`, `Button`, `Heading`, `Link`, `Alert`, `Tag`, `Badge`, `Textfield`, `Select`, `Checkbox`, `Radio`, `Switch`
     - If you see something that looks like a card, button, heading, link, alert, tag, badge, form field, or list in Figma - there IS a component for it!

  2. ☐ **Am I using design system components instead of custom HTML?**
     - ✅ Use `<Card>` with `<CardBlock>` NOT `<div className="card">`
     - ✅ Use `<Button variant="primary">` NOT `<button className="btn">`
     - ✅ Use `<Heading level={1} data-size="xl">` NOT `<h1>` or `<h2>`
     - ✅ Use `<Link>` NOT `<a className="link">`
     - ✅ Use `<Alert data-color="info">` NOT `<div className="alert">`
     - ✅ Use `<Tag>` NOT `<span className="tag">`
     - ✅ Use `<Textfield>` NOT `<input>` with custom styling
     - ✅ Use `<List.Unordered>` and `<List.Item>` NOT `<ul>` and `<li>` with custom styles

  3. ☐ **Am I configuring components via props, NOT styling them?**
     - ✅ Use `data-size="sm" | "md" | "lg"` prop
     - ✅ Use `data-color="accent" | "neutral" | "danger" | etc.` prop
     - ✅ Use `variant="primary" | "secondary" | "tertiary"` prop
     - ✅ Use `level={1 | 2 | 3 | 4 | 5 | 6}` prop for Heading
     - ❌ **NEVER** add `className` or `style` props to design system components
     - ❌ **NEVER** wrap components in styled divs to change their appearance

  4. ☐ **Am I using CSS Modules ONLY for layout containers?**
     - ✅ Layout grids, flex wrappers, section containers
     - ✅ Custom components you create yourself
     - ✅ Composition/layout logic
     - ❌ **NOT** for styling design system components
     - ❌ **NOT** for overriding component styles

  5. ☐ **Am I using `--ds-size-*` tokens (NOT `--ds-spacing-*`)?**
     - There are **NO** `--ds-spacing-*` tokens - they don't exist!
     - Always use `--ds-size-*` for spacing (e.g., `var(--ds-size-4)`)
     - Available size tokens: `--ds-size-0` through `--ds-size-15`, plus `--ds-size-18`, `--ds-size-22`, `--ds-size-26`, `--ds-size-30`
     - Check the [Design Tokens](#design-tokens) section for complete list

  6. ☐ **Am I using design tokens instead of hardcoded values?**
     - ✅ Use `var(--ds-color-neutral-background-default)` NOT `#ffffff` or `#FFF`
     - ✅ Use `var(--ds-size-4)` NOT `16px` or `1rem`
     - ✅ Use `var(--ds-border-radius-md)` NOT `8px` or `0.5rem`
     - ✅ Use `var(--ds-shadow-md)` NOT custom shadow definitions
     - Check the [Design Tokens](#design-tokens) section for all available tokens

  7. ☐ **Have I checked the [Component Mapping Guide](#component-mapping-guide)?**
     - Map Figma elements to the correct design system components
     - Use the mapping table to find the right component
     - Verify props match the Figma design specifications

  8. ☐ **Am I following accessibility best practices?**
     - Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
     - Add ARIA labels for icon-only buttons
     - Use proper heading hierarchy (`<Heading level={1}>` for main title, `level={2}>` for sections, etc.)
     - Ensure keyboard navigation works
     - Include focus indicators

  9. ☐ **Am I using the design system Header and Footer?**
     - ✅ **ALWAYS** use `<Header>` from `rk-designsystem` for page headers
     - ✅ **ALWAYS** use `<Footer>` from `rk-designsystem` for page footers
     - ❌ **NEVER** create custom header or footer components
     - ❌ **NEVER** recreate header/footer layouts from Figma manually
     - The `<Header>` and `<Footer>` components are pre-built with all Røde Kors branding, responsive behavior, and accessibility features
     - Configure them via props (see [Layout Components](#layout-components) section)

  ### Common AI Mistakes to Avoid

  **These are frequent errors - double-check you're not making them:**

  | ❌ Mistake | ✅ Correct Approach |
  |-----------|---------------------|
  | Creating custom card divs with CSS | Use `<Card>` and `<CardBlock>` components |
  | Using `--ds-spacing-*` tokens | Use `--ds-size-*` tokens (spacing tokens don't exist) |
  | Adding `className` or `style` to design system components | Use `data-size`, `data-color`, `variant`, `level` props |
  | Hardcoding colors like `#FFF`, `#000`, `#D52B1E` | Use `var(--ds-color-neutral-background-default)`, `var(--ds-color-primary-color-red-base-default)`, etc. |
  | Hardcoding sizes like `16px`, `1rem`, `24px` | Use `var(--ds-size-4)`, `var(--ds-size-6)`, etc. |
  | Creating custom buttons with styling | Use `<Button variant="primary" data-size="md">` |
  | Using `<h1>`, `<h2>` directly | Use `<Heading level={1}>`, `<Heading level={2}>` with optional `data-size` |
  | Creating custom link styles | Use `<Link>` component with `data-size` and `data-color` props |
  | Creating custom form inputs | Use `<Textfield>`, `<Select>`, `<Checkbox>`, `<Radio>`, `<Switch>` |
  | Creating custom alert/banner divs | Use `<Alert data-color="info|success|warning|danger">` |
  | Creating custom tag/badge spans | Use `<Tag>` or `<Badge>` components |
  | Using CSS Modules to style components | Use CSS Modules ONLY for layout containers |
  | Wrapping components in styled divs | Configure components via props, trust the design system |
  | Not checking Available Components first | Always check [Available Components](#available-components) before creating custom code |

  **Remember:** If you see something that looks like a card, button, heading, link, alert, tag, badge, form field, list, table, or any common UI element in the Figma design - there is almost certainly a design system component for it. Check the [Available Components](#available-components) section FIRST before writing any custom code!

  ### Fetching the Guide

  **Using curl (Claude Code, Cursor, or any terminal):**
  ```bash
  curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
  ```

  **Direct URL for reference:**
  ```
  https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
  ```

  ### When to Use This Guide

  Use this guide when:
  1. **Converting Figma designs to code** - Reference component mappings and design tokens
  2. **Setting up Figma MCP** - Follow the integration steps
  3. **Implementing components** - Check available components and their props
  4. **Using design tokens** - Find the correct CSS custom properties
  5. **Following best practices** - Ensure code quality and accessibility

  ### Quick Reference Commands

  **For Claude Code:**
  ```bash
  # Fetch the guide
  curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md

  # Then reference it in your prompts:
  # "Using the AI_DESIGN_SYSTEM_GUIDE.md file, implement..."
  ```

  **For Cursor:**
  ```bash
  # Fetch the guide
  curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md

  # Or reference directly in chat:
  # "@AI_DESIGN_SYSTEM_GUIDE.md implement a component based on this Figma design..."
  ```

  **For .cursorrules:**
  Add this to your `.cursorrules` file:
  ```
  When working with Figma designs or the Røde Kors Design System:
  1. Fetch the AI guide: curl -o AI_DESIGN_SYSTEM_GUIDE.md https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md
  2. Reference component metadata: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
  3. Use design tokens from: https://norwegianredcross.github.io/design-tokens/theme.css
  4. Always use existing components from rk-designsystem when possible
  5. Never use hardcoded values - always use design tokens (var(--ds-*))
  ```

  ### Integration with Figma MCP Workflow

  When using Figma MCP with this guide:

  1. **Fetch the guide** at the start of your session
  2. **Reference component mappings** when converting Figma elements to React components
  3. **Use design tokens** from the guide instead of hardcoded values
  4. **Follow the workflow** outlined in the "Workflow: Figma to Code" section

  ### Key Sections for AI Assistants

  - **Component Mapping Guide** - Maps Figma elements to React components
  - **Design Tokens** - Complete list of available CSS custom properties
  - **Available Components** - Full API reference with props and examples
  - **Best Practices** - Code quality and accessibility guidelines

  ---

  ## Overview

  The **Røde Kors Design System** (Norwegian Red Cross) is a React component library built on top of Digdir's Designsystemet. It provides pre-configured components with the official Røde Kors brand theme through design tokens.

  ### Key Resources
  - **Storybook**: https://norwegianredcross.github.io/DesignSystem/storybook/
  - **Design Tokens CSS**: https://norwegianredcross.github.io/design-tokens/theme.css
  - **Component Metadata**: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
  - **Package Name**: `rk-designsystem`

  ### Installation (Simplified)

  ```bash
  npm install rk-designsystem
  ```

  ### Import Styles (One Import - Includes Font!)

  Add this single import to your entry file (`layout.tsx`, `_app.tsx`, or `main.tsx`):

  ```tsx
  import 'rk-designsystem/styles';
  ```

  **That's it!** This single import includes:
  - Base component styles from Digdir
  - Røde Kors theme (colors, spacing, etc.)
  - Source Sans 3 font (loaded automatically via Google Fonts)

  ### Complete Next.js Example (App Router) - Recommended

  For Next.js projects, use `next/font` for optimal performance (no layout shift, local hosting):

  ```tsx
  // src/app/layout.tsx
  import '@digdir/designsystemet-css/index.css';
  import 'rk-design-tokens/design-tokens-build/theme.css';
  import { Source_Sans_3 } from "next/font/google";

  const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
  });

  export const metadata = {
    title: "Your App Title",
    description: "Your app description",
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="no">
        <body className={sourceSans3.className}>{children}</body>
      </html>
    );
  }
  ```

  **Important:** Use `className`, NOT `variable`. The `variable` option only creates a CSS custom property without actually applying the font.

  ### Complete Next.js Example (Pages Router)

  ```tsx
  // pages/_app.tsx
  import '@digdir/designsystemet-css/index.css';
  import 'rk-design-tokens/design-tokens-build/theme.css';
  import { Source_Sans_3 } from "next/font/google";
  import type { AppProps } from 'next/app';

  const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
  });

  export default function App({ Component, pageProps }: AppProps) {
    return (
      <main className={sourceSans3.className}>
        <Component {...pageProps} />
      </main>
    );
  }
  ```

  ### Alternative: Simple Import (Non-Next.js or Quick Setup)

  For Vite, Create React App, or quick prototyping, use the combined styles import:

  ```tsx
  // main.tsx or App.tsx
  import 'rk-designsystem/styles'; // Includes font via Google Fonts CSS import
  ```

  **Note:** This loads the font via CSS `@import` from Google Fonts. For Next.js projects, the `next/font` approach above is recommended for better performance.

  ---

  ## Design System Architecture

  ### Component Types

  1. **Wrapped Components (Simple)**: Direct re-exports from `@digdir/designsystemet-react`
    - Example: `Button`

  2. **Wrapped Components (with Style Overrides)**: Digdir components with custom CSS overrides
    - Example: `Alert`

  3. **Custom Components**: Built from scratch for unique functionality
    - Examples: `DateInput`, `DatePicker`, `Carousel`

  ### Styling Approach
  - **CSS Modules**: Used for custom components (`styles.module.css`)
  - **Design Tokens**: All styling uses CSS custom properties (`var(--ds-...)`)
  - **No Magic Numbers**: Hardcoded values like `#FFF` or `16px` are forbidden
  - **Data Attributes**: Use `data-size` and `data-color` for visual variants

  ---

  ## Available Components

All components are exported from `rk-designsystem`. Below is a comprehensive list with all props:

### Form Components

#### Button
```tsx
import { Button } from 'rk-designsystem';

<Button
  asChild?={false}
  data-color?={any}
  data-size?="sm" | "md" | "lg"
  icon?={false}
  loading?={false}
  type?={"button"}
  variant?={"primary"}
 />
```

#### Checkbox
```tsx
import { Checkbox } from 'rk-designsystem';

<Checkbox
  aria-label?={string}
  aria-labelledby?={string}
  data-color?={any}
  data-size?={any}
  description?={ReactNode}
  disabled?={boolean}
  error?={ReactNode}
  label?={ReactNode}
  readOnly?={boolean}
  value?={string | number}
 />
```

#### DateInput
```tsx
import { DateInput } from 'rk-designsystem';

<DateInput
  aria-label?={string}
  aria-labelledby?={string}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  defaultValue?={string}
  description?={ReactNode}
  error?={ReactNode}
  inputClassName?={string}
  inputWrapperClassName?={string}
  label?={ReactNode}
  onChange?={(event: ChangeEvent<HTMLInputElement>, formattedValue: string) => void}
  onSuffixClick?={MouseEventHandler<HTMLButtonElement>}
  suffixIcon?={ReactNode}
  value?={string}
 />
```

#### DatePicker
```tsx
import { DatePicker } from 'rk-designsystem';

<DatePicker
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  initialDate?={new Date()}
  onDateSelect?={(date: Date) => void}
  selectedDate?={null}
 />
```

#### Input
```tsx
import { Input } from 'rk-designsystem';

<Input
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  disabled?={boolean}
  readOnly?={boolean}
  role?={AriaRole}
  size?={number}
  type?={"text"}
 />
```

#### Radio
```tsx
import { Radio } from 'rk-designsystem';

<Radio
  aria-label?={string}
  aria-labelledby?={string}
  data-color?={any}
  data-size?={any}
  description?={ReactNode}
  disabled?={boolean}
  error?={ReactNode}
  label?={ReactNode}
  readOnly?={boolean}
  value?={string | number}
 />
```

#### Select
```tsx
import { Select } from 'rk-designsystem';

<Select
  data-size?="sm" | "md" | "lg"
  readOnly?={false}
  width?={full}
 />
```

#### Switch
```tsx
import { Switch } from 'rk-designsystem';

<Switch
  aria-label?={string}
  aria-labelledby?={string}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  description?={ReactNode}
  label?={ReactNode}
  position?={start}
  value?={string | number}
 />
```

#### Textarea
```tsx
import { Textarea } from 'rk-designsystem';

<Textarea
  data-size?="sm" | "md" | "lg"
 />
```

#### Textfield
```tsx
import { Textfield } from 'rk-designsystem';

<Textfield
  aria-label?={string}
  aria-labelledby?={string}
  className?={string}
  counter?="number" | ""FieldCounterProps""
  data-size?={any}
  description?={ReactNode}
  error?={ReactNode}
  label?={ReactNode}
  multiline?={boolean}
  prefix?={string}
  size?={number}
  style?={undefined}
  suffix?={string}
  type?={"text"}
 />
```

### Layout Components

#### Card
```tsx
import { Card, CardBlock } from 'rk-designsystem';

<Card
  children={ReactNode}  // Required: Instances of `Card.Block`, `Divider` or other React nodes
  asChild?={false}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  variant?={"default"}
>
  {/* Content */}
</Card>
```

Use `<CardBlock>` for content sections inside `<Card>`.

#### Divider
```tsx
import { Divider } from 'rk-designsystem';

<Divider />
```

#### Field
```tsx
import { Field, FieldDescription, FieldCounter } from 'rk-designsystem';

<Field
  asChild?={false}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  position?={start}
>
  {/* Content */}
</Field>
```

Use `<FieldDescription>` and `<FieldCounter>` as children.

#### Fieldset
```tsx
import { Fieldset } from 'rk-designsystem';

<Fieldset
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
 />
```

### Navigation Components

#### Breadcrumbs
```tsx
import { Breadcrumbs, BreadcrumbsList, BreadcrumbsItem, BreadcrumbsLink } from 'rk-designsystem';

<Breadcrumbs
  aria-label?={"Du er her"}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
>
  {/* Content */}
</Breadcrumbs>
```

Use `<BreadcrumbsList>`, `<BreadcrumbsItem>`, and `<BreadcrumbsLink>` for structure.

#### Pagination
```tsx
import { Pagination } from 'rk-designsystem';

<Pagination
  aria-label?={Sidenavigering}
  asChild?={false}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
 />
```

#### Tabs
```tsx
import { Tabs } from 'rk-designsystem';

<Tabs
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  defaultValue?={undefined}
  onChange?={undefined}
  value?={undefined}
 />
```

### Feedback Components

#### Alert
```tsx
import { Alert } from 'rk-designsystem';

<Alert
  data-color?={"info"}
  data-size?="sm" | "md" | "lg"
  title?={string}
 />
```

#### Dialog
```tsx
import { Dialog } from 'rk-designsystem';

<Dialog
  asChild?={false}
  closeButton?={"Lukk dialogvindu"}
  closedby?={"closerequest"}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  modal?={true}
  onClose?={(event: Event) => void}
  open?={boolean}
 />
```

#### ErrorSummary
```tsx
import { ErrorSummary } from 'rk-designsystem';

<ErrorSummary
  asChild?={ReactNode}
  data-size?="sm" | "md" | "lg"
 />
```

#### Popover
```tsx
import { Popover } from 'rk-designsystem';

<Popover
  asChild?={false}
  autoPlacement?={true}
  data-color?={any}
  data-size?="sm" | "md" | "lg"
  id?={string}
  onClose?={() => void}
  onOpen?={() => void}
  open?={undefined}
  placement?={"top"}
  variant?={"default"}
 />
```

#### Tooltip
```tsx
import { Tooltip } from 'rk-designsystem';

<Tooltip
  children={ReactNode}  // Required: The element or string that triggers the tooltip.
  content={string}  // Required: Content of the tooltip
  autoPlacement?={true}
  data-size?="sm" | "md" | "lg"
  open?={boolean}
  placement?={"top"}
 />
```

### Display Components

#### Avatar
```tsx
import { Avatar } from 'rk-designsystem';

<Avatar
  aria-label?={string}
  children?={ReactNode}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?={any}
  initials?={string}
  variant?={"circle"}
 />
```

#### Badge
```tsx
import { Badge } from 'rk-designsystem';

<Badge
  count?={number}
  data-color?={any}
  data-size?="sm" | "md" | "lg"
  maxCount?={number}
  variant?={"base"}
 />
```

#### Chip
```tsx
import { Chip, Chip.Button, Chip.Checkbox, Chip.Radio } from 'rk-designsystem';

<Chip>
  {/* Content */}
</Chip>
```

Use `<Chip.Button>`, `<Chip.Checkbox>`, or `<Chip.Radio>` for different variants.

#### SkeletonLoader
```tsx
import { SkeletonLoader } from 'rk-designsystem';

<SkeletonLoader
  asChild?={false}
  characters?={number}
  height?={string | number}
  variant?={"rectangle"}
  width?={string | number}
 />
```

#### Spinner
```tsx
import { Spinner } from 'rk-designsystem';

<Spinner
  aria-label?={string}
  data-size?={}
 />
```

#### Tag
```tsx
import { Tag } from 'rk-designsystem';

<Tag
  data-color?={any}
  data-size?="sm" | "md" | "lg"
 />
```

### Data Display Components

#### List
```tsx
import { List, List.Unordered, List.Ordered, List.Item } from 'rk-designsystem';

<List>
  {/* Content */}
</List>
```

Use `<List.Unordered>` or `<List.Ordered>` with `<List.Item>` for items.

#### Table
```tsx
import { Table } from 'rk-designsystem';

<Table
  border?={false}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  hover?={false}
  stickyHeader?={false}
  zebra?={false}
 />
```

### Other Components

#### BadgePosition
```tsx
import { BadgePosition } from 'rk-designsystem';

<BadgePosition
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  overlap?={rectangle}
  placement?={top-right}
 />
```

#### BreadcrumbsItem
```tsx
import { BreadcrumbsItem } from 'rk-designsystem';

<BreadcrumbsItem />
```

#### BreadcrumbsLink
```tsx
import { BreadcrumbsLink } from 'rk-designsystem';

<BreadcrumbsLink
  asChild?={boolean}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
 />
```

#### BreadcrumbsList
```tsx
import { BreadcrumbsList } from 'rk-designsystem';

<BreadcrumbsList />
```

#### Details
```tsx
import { Details, Details.Summary, Details.Content } from 'rk-designsystem';

<Details
  children?={ReactNode}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  defaultOpen?={false}
  onToggle?={(((event: Event) => void}
  open?={undefined}
  variant?={"default"}
>
  {/* Content */}
</Details>
```

Use `<Details.Summary>` and `<Details.Content>` for accordion structure.

#### Dropdown
```tsx
import { Dropdown } from 'rk-designsystem';

<Dropdown
  asChild?={false}
  autoPlacement?={true}
  data-color?={any}
  data-size?={any}
  id?={string}
  onClose?={() => void}
  onOpen?={() => void}
  open?={undefined}
  placement?={bottom-end}
 />
```

#### DropdownButton
```tsx
import { DropdownButton } from 'rk-designsystem';

<DropdownButton
  asChild?={false}
  data-color?={any}
  data-size?="sm" | "md" | "lg"
  icon?={false}
  loading?={false}
  type?={"button"}
 />
```

#### DropdownHeading
```tsx
import { DropdownHeading } from 'rk-designsystem';

<DropdownHeading
  asChild?={boolean}
  data-size?={}
  level?={}
 />
```

#### DropdownItem
```tsx
import { DropdownItem } from 'rk-designsystem';

<DropdownItem />
```

#### DropdownList
```tsx
import { DropdownList } from 'rk-designsystem';

<DropdownList />
```

#### DropdownTrigger
```tsx
import { DropdownTrigger } from 'rk-designsystem';

<DropdownTrigger
  asChild?={false
false}
  data-color?={any}
  data-size?={any}
  icon?={false}
  inline?={false
false}
  loading?={false}
  type?={"button"}
  variant?={"primary"}
 />
```

#### DropdownTriggerContext
```tsx
import { DropdownTriggerContext } from 'rk-designsystem';

<DropdownTriggerContext />
```

#### FieldDescription
```tsx
import { FieldDescription } from 'rk-designsystem';

<FieldDescription />
```

#### Heading
```tsx
import { Heading } from 'rk-designsystem';

<Heading
  level={}  // Required: Required: Semantic heading level (1-6)
  asChild?={false}
  data-size?={"md"}
 />
```

**Important:** The `level` prop is **required** and determines the semantic HTML heading level (`<h1>` through `<h6>`). Use `data-size` to control visual appearance independently of semantic level.

#### Label
```tsx
import { Label } from 'rk-designsystem';

<Label
  asChild?={false}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  weight?={"medium"}
 />
```

#### Link
```tsx
import { Link } from 'rk-designsystem';

<Link
  children={ReactNode}  // Required: The content to display inside the link.
  asChild?={false}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
 />
```

#### PaginationButton
```tsx
import { PaginationButton } from 'rk-designsystem';

<PaginationButton
  aria-current?={false}
  asChild?={false}
  data-color?={any}
  data-size?="sm" | "md" | "lg"
  type?={"button"}
  variant?={"primary"}
 />
```

#### PaginationItem
```tsx
import { PaginationItem } from 'rk-designsystem';

<PaginationItem
  asChild?={false}
 />
```

#### PaginationList
```tsx
import { PaginationList } from 'rk-designsystem';

<PaginationList
  asChild?={false}
 />
```

#### Paragraph
```tsx
import { Paragraph } from 'rk-designsystem';

<Paragraph
  asChild?={false}
  data-size?={}
  variant?={"default"}
 />
```

#### Search
```tsx
import { Search } from 'rk-designsystem';

<Search
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
 />
```

#### SkipLink
```tsx
import { SkipLink } from 'rk-designsystem';

<SkipLink
  children={ReactNode}  // Required: The content to display inside the skiplink.
  href={string}  // Required: Href of an element in the DOM the skiplink should skip to. E.g #main-content
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
 />
```

#### Suggestion
```tsx
import { Suggestion, Suggestion.Input, Suggestion.List, Suggestion.Option, Suggestion.Empty, Suggestion.Clear } from 'rk-designsystem';

<Suggestion
  creatable?={false}
  defaultSelected?={string | SuggestionItem | (string | SuggestionItem)[]}
  filter?={true}
  multiple?={false}
  name?={undefined}
  onBeforeMatch?={(event: EventBeforeMatch) => void}
  onSelectedChange?={((value: SuggestionItem) => void}
  renderSelected?={({ label }) => label}
  selected?={string | SuggestionItem | (string | SuggestionItem)[]}
>
  {/* Content */}
</Suggestion>
```

Use `<Suggestion.Input>`, `<Suggestion.List>`, `<Suggestion.Option>`, `<Suggestion.Empty>`, and `<Suggestion.Clear>` for autocomplete structure.

#### ToggleGroup
```tsx
import { ToggleGroup } from 'rk-designsystem';

<ToggleGroup
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  defaultValue?={string}
  name?={string}
  onChange?={(value: string) => void}
  value?={string}
  variant?={"primary"}
 />
```

#### useRadioGroup
```tsx
import { useRadioGroup } from 'rk-designsystem';

<useRadioGroup
  disabled?={boolean}
  error?={ReactNode}
  name?={string of auto-generated name}
  onChange?={(nextValue: string, prevValue: string) => void}
  readOnly?={boolean}
  required?={boolean}
  value?={string}
 />
```

#### ValidationMessage
```tsx
import { ValidationMessage } from 'rk-designsystem';

<ValidationMessage
  asChild?={false}
  data-color?={"danger"}
  data-size?="sm" | "md" | "lg"
 />
```

### Custom Components

#### Carousel
```tsx
import { Carousel } from 'rk-designsystem';

<Carousel
  images={{ src: string; alt: string; }[]}
  autoDelay?={5}
  autoPlay?={false}
  cornerRadius?={0}
  data-color?="accent" | "neutral" | "danger" | etc.
  data-size?="sm" | "md" | "lg"
  showArrows?={true}
  showDots?={true}
  slideSpacing?={16}
  slidesPerView?={1}
  variant?={string}
 />
```

#### Footer
```tsx
import { Footer } from 'rk-designsystem';

<Footer
  data-color?={additional}
  primaryLogoAlt?={Røde Kors Logo}
  primaryLogoSrc?={string}
  redSectionSlot?={ReactNode}
  secondaryLogo?={false}
  secondaryLogoAlt?={Designsystem Logo}
  secondaryLogoSrc?={string}
  secondaryLogoSrcDark?={string}
  shortcutsLinksLeft?={FooterLink[]}
  shortcutsLinksRight?={FooterLink[]}
  showPrimaryLogo?={true}
  whiteSectionSlotLarge?={ReactNode}
  whiteSectionSlotSmall?={ReactNode}
 />
```

#### Header
```tsx
import { Header } from 'rk-designsystem';

<Header
  activePage?={string}
  ctaIcon?={<HeartIcon aria-hidden />}
  ctaLabel?={string}
  data-color?={primary}
  navItems?={{ label: string; href: string; }[]}
  onCtaClick?={() => void}
  secondaryLogo?={false}
  secondaryLogoAlt?={Secondary Logo}
  secondaryLogoSrc?={string}
  secondaryLogoSrcDark?={string}
  setPage?={(pageName: string) => void}
  showCta?={false}
  showHeaderExtension?={false}
  showLanguageSwitch?={false}
  showLogin?={true}
  showMenuButton?={true}
  showModeToggle?={false}
  showNavItems?={true}
  showSearch?={true}
  showThemeToggle?={false}
  showUser?={true}
 />
```


## Design Tokens

  ### Token Structure

  Design tokens are CSS custom properties prefixed with `--ds-`. They follow this structure:

  ```
  --ds-{category}-{group}-{subgroup}-{property}
  ```

  ### Token Categories

  #### 1. Colors (`--ds-color-*`)

  **Primary Colors:**
  - `--ds-color-primary-color-red-base-default`
  - `--ds-color-primary-color-red-base-hover`
  - `--ds-color-primary-color-red-base-active`

  **Neutral Colors:**
  - `--ds-color-neutral-text-default`
  - `--ds-color-neutral-text-subtle`
  - `--ds-color-neutral-background-default`
  - `--ds-color-neutral-border-default`

  **Semantic Colors:**
  - `--ds-color-success-*`
  - `--ds-color-danger-*`
  - `--ds-color-warning-*`
  - `--ds-color-info-*`

  **Brand Colors:**
  - `--ds-color-brand1-*`
  - `--ds-color-brand2-*`
  - `--ds-color-brand3-*`
  - `--ds-color-accent-*`

  **Usage:**
  ```css
  .my-component {
    background-color: var(--ds-color-neutral-background-default);
    color: var(--ds-color-neutral-text-default);
    border-color: var(--ds-color-neutral-border-default);
  }
  ```

  #### 2. Sizes & Spacing (`--ds-size-*`)

  **Important:** The design system uses `--ds-size-*` tokens, NOT `--ds-spacing-*`. There are no `--ds-spacing-*` tokens available.

  **Available Size Tokens:**
  - `--ds-size-0` through `--ds-size-15`
  - `--ds-size-18`, `--ds-size-22`, `--ds-size-26`, `--ds-size-30`
  - These tokens are calculated based on `--ds-size-unit` which scales with the size mode (`sm`, `md`, `lg`)

  **Size Mode Tokens:**
  - `--ds-size-mode-font-size--sm`: 1
  - `--ds-size-mode-font-size--md`: 1.125
  - `--ds-size-mode-font-size--lg`: 1.3125
  - Set size mode using `data-size="sm"`, `data-size="md"`, or `data-size="lg"` on elements

  **Usage:**
  ```css
  .my-component {
    padding: var(--ds-size-4);
    margin-bottom: var(--ds-size-6);
    gap: var(--ds-size-2);
  }
  ```

  **Note:** Size tokens scale automatically based on the `data-size` attribute. For example, `--ds-size-4` will be larger when `data-size="lg"` is set on a parent element.

  #### 3. Typography (`--ds-font-*`, `--ds-body-*`, `--ds-heading-*`)

  **Font Family:**
  - `--ds-font-family`: "Source Sans Pro" (or "Source Sans 3" when configured)

  > **Note:** Before using font tokens, you must set up the Source Sans 3 font. See the [Font Setup](#font-setup-nextjs-app-router) section in the Installation guide for Next.js configuration.

  **Base Font Sizes (Scale 1-10):**
  - `--ds-font-size-1` through `--ds-font-size-10`
  - These scale automatically based on size mode (`data-size` attribute)

  **Heading Font Sizes:**
  - `--ds-heading-2xl-font-size` (uses `--ds-font-size-10`)
  - `--ds-heading-xl-font-size` (uses `--ds-font-size-9`)
  - `--ds-heading-lg-font-size` (uses `--ds-font-size-8`)
  - `--ds-heading-md-font-size` (uses `--ds-font-size-7`)
  - `--ds-heading-sm-font-size` (uses `--ds-font-size-6`)
  - `--ds-heading-xs-font-size` (uses `--ds-font-size-5`)
  - `--ds-heading-2xs-font-size` (uses `--ds-font-size-4`)

  **Body Font Sizes:**
  - `--ds-body-xl-font-size` (uses `--ds-font-size-6`)
  - `--ds-body-lg-font-size` (uses `--ds-font-size-5`)
  - `--ds-body-md-font-size` (uses `--ds-font-size-4`)
  - `--ds-body-sm-font-size` (uses `--ds-font-size-3`)
  - `--ds-body-xs-font-size` (uses `--ds-font-size-2`)

  **Body Short Font Sizes** (line-height: 1.3):
  - `--ds-body-short-xl-font-size` through `--ds-body-short-xs-font-size`

  **Body Long Font Sizes** (line-height: 1.7):
  - `--ds-body-long-xl-font-size` through `--ds-body-long-xs-font-size`

  **Font Weights:**
  - `--ds-font-weight-regular`: 400
  - `--ds-font-weight-medium`: 500
  - `--ds-font-weight-semibold`: 700

  **Line Heights:**
  - `--ds-line-height-sm`: 1.3
  - `--ds-line-height-md`: 1.5
  - `--ds-line-height-lg`: 1.7

  **Letter Spacing:**
  - `--ds-letter-spacing-1` through `--ds-letter-spacing-9` (ranging from -0.01em to 0.015em)

  **Typography Variants:**
  - Use `data-typography="primary"` (default) or `data-typography="secondary"` to switch typography scales

  **Usage:**
  ```css
  .my-text {
    font-family: var(--ds-font-family);
    font-size: var(--ds-body-md-font-size);
    font-weight: var(--ds-font-weight-regular);
    line-height: var(--ds-line-height-md);
  }
  ```

  #### 4. Borders (`--ds-border-*`)

  **Border Radius:**
  - `--ds-border-radius-sm`: min(0.125rem, 0.25rem)
  - `--ds-border-radius-md`: min(0.25rem, 0.5rem)
  - `--ds-border-radius-lg`: min(0.5rem, 1.25rem)
  - `--ds-border-radius-xl`: min(0.75rem, 1.75rem)
  - `--ds-border-radius-default`: 0.25rem
  - `--ds-border-radius-full`: 624.9375rem

  **Border Width:**
  - `--ds-border-width-default`: 1px
  - `--ds-border-width-focus`: 3px

  **Usage:**
  ```css
  .my-component {
    border-radius: var(--ds-border-radius-md);
    border-width: var(--ds-border-width-default);
  }
  ```

  #### 5. Shadows (`--ds-shadow-*`)

  **Shadow Tokens:**
  - `--ds-shadow-xs`: 0 0 1px 0 rgba(0,0,0,0.16), 0 1px 2px 0 rgba(0,0,0,0.12)
  - `--ds-shadow-sm`: 0 0 1px 0 rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.1)
  - `--ds-shadow-md`: 0 0 1px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.12)
  - `--ds-shadow-lg`: 0 0 1px 0 rgba(0,0,0,0.13), 0 3px 5px 0 rgba(0,0,0,0.13), 0 6px 12px 0 rgba(0,0,0,0.14)
  - `--ds-shadow-xl`: 0 0 1px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.16), 0 12px 24px 0 rgba(0,0,0,0.16)

  **Usage:**
  ```css
  .my-card {
    box-shadow: var(--ds-shadow-md);
  }
  ```

  #### 6. Effects (`--ds-opacity-*`)

  **Opacity Tokens:**
  - `--ds-opacity-disabled`: 30%

  **Usage:**
  ```css
  .my-button:disabled {
    opacity: var(--ds-opacity-disabled);
  }
  ```

  ### Complete Token Reference

  For a complete list of all available design tokens, refer to the theme CSS file:
  - **URL**: https://norwegianredcross.github.io/design-tokens/theme.css
  - **Local**: Import from `rk-design-tokens/design-tokens-build/theme.css`

  **Key Token Categories Available:**

  #### Color Tokens (Complete List)

  All color tokens follow the pattern: `--ds-color-{color-name}-{variant}-{state}`

  **Primary Colors (Red):**
  - `--ds-color-primary-color-red-base-default`, `-hover`, `-active`
  - `--ds-color-primary-color-red-background-default`, `-tinted`
  - `--ds-color-primary-color-red-surface-default`, `-tinted`, `-hover`, `-active`
  - `--ds-color-primary-color-red-border-subtle`, `-default`, `-strong`
  - `--ds-color-primary-color-red-text-subtle`, `-default`
  - `--ds-color-primary-color-red-base-contrast-subtle`, `-default`

  **Secondary Colors:**
  - Orange: `--ds-color-secondary-color-orange-*` (same variants as red)
  - Rust: `--ds-color-secondary-color-rust-*` (same variants as red)
  - Pink: `--ds-color-secondary-color-pink-*` (same variants as red)

  **Additional Colors:**
  - Ocean: `--ds-color-additional-color-ocean-*` (same variants as red)
  - Jungle: `--ds-color-additional-color-jungle-*` (same variants as red)

  **Semantic Colors:**
  - Neutral: `--ds-color-neutral-*` (same variants as red)
  - Info: `--ds-color-info-*` (same variants as red)
  - Success: `--ds-color-success-*` (same variants as red)
  - Warning: `--ds-color-warning-*` (same variants as red)
  - Danger: `--ds-color-danger-*` (same variants as red)

  **Special Colors:**
  - `--ds-color-focus-inner`: Focus ring inner color
  - `--ds-color-focus-outer`: Focus ring outer color
  - `--ds-link-color-visited`: Visited link color

  **Color Scheme:**
  - Use `data-color-scheme="light"` (default), `"dark"`, or `"auto"` on root element
  - All color tokens automatically adapt to the color scheme

  **Color Variants:**
  - Use `data-color="neutral"`, `"info"`, `"success"`, `"warning"`, `"danger"`, etc. on components
  - This sets semantic color aliases: `--ds-color-background-default`, `--ds-color-text-default`, etc.

  #### Size Tokens (Complete List)

  **Base Size Tokens:**
  - `--ds-size-0`, `--ds-size-1`, `--ds-size-2`, `--ds-size-3`, `--ds-size-4`, `--ds-size-5`
  - `--ds-size-6`, `--ds-size-7`, `--ds-size-8`, `--ds-size-9`, `--ds-size-10`
  - `--ds-size-11`, `--ds-size-12`, `--ds-size-13`, `--ds-size-14`, `--ds-size-15`
  - `--ds-size-18`, `--ds-size-22`, `--ds-size-26`, `--ds-size-30`

  **Size Configuration:**
  - `--ds-size-base`: 18
  - `--ds-size-step`: 4
  - `--ds-size-unit`: Calculated unit based on size mode
  - `--ds-size`: Current size mode value (set via `data-size` attribute)

  **Size Mode:**
  - `--ds-size-mode-font-size--sm`: 1
  - `--ds-size-mode-font-size--md`: 1.125
  - `--ds-size-mode-font-size--lg`: 1.3125
  - Set via `data-size="sm"`, `data-size="md"`, or `data-size="lg"`

  ### Token Naming Conventions

  1. **Always use tokens** - Never hardcode values
  2. **Follow the structure** - `--ds-{category}-{group}-{subgroup}-{property}`
  3. **Use semantic names** - Prefer `--ds-color-neutral-text-default` over `--ds-color-gray-900`
  4. **Use `--ds-size-*` NOT `--ds-spacing-*`** - There are no spacing tokens, only size tokens
  5. **Check available tokens** - Visit the tokens page in Storybook or inspect `theme.css`

  ### Full CSS Reference

  The complete design tokens CSS file is available at:
  ```
  https://norwegianredcross.github.io/design-tokens/theme.css
  ```

  You can view the full file to see all available tokens, including:
  - Complete color palette for light and dark modes
  - All size tokens (`--ds-size-*`, NOT `--ds-spacing-*`)
  - Typography scale tokens
  - Border radius and width tokens
  - Shadow definitions
  - Opacity values

  **To include in your project (recommended):**
  ```tsx
  import 'rk-designsystem/styles'; // Includes base styles, theme, and font
  ```

  **Or manually (advanced):**
  ```tsx
  import '@digdir/designsystemet-css/index.css';
  import 'rk-design-tokens/design-tokens-build/theme.css';
  ```

  **Complete Theme CSS File:**

  The full theme.css file contains all design tokens. The complete file is provided below for reference. Note: This is a large file - you can also view it online at the URL above.

  <details>
  <summary>Click to expand complete theme.css file</summary>

  ```css
  @charset "UTF-8";
  /*
  build: v1.9.0
  design-tokens: v1.7.1
  */

  @layer ds.theme.size-mode {
  :root /* small */ {
    --ds-size-mode-font-size--sm: 1;
  }
  }

  @layer ds.theme.size-mode {
  :root /* medium */ {
    --ds-size-mode-font-size--md: 1.125;
  }
  }

  @layer ds.theme.size-mode {
  :root /* large */ {
    --ds-size-mode-font-size--lg: 1.3125;
  }
  }

  @layer ds.theme.size-mode {
  :root, [data-size] {
    --ds-size: var(--ds-size--md);
    --ds-size--sm: var(--ds-size,);
    --ds-size--md: var(--ds-size,);
    --ds-size--lg: var(--ds-size,);
    --ds-size-mode-font-size:
      var(--ds-size--sm, var(--ds-size-mode-font-size--sm))
      var(--ds-size--md, var(--ds-size-mode-font-size--md))
      var(--ds-size--lg, var(--ds-size-mode-font-size--lg));
  }

  [data-size='sm'] { --ds-size: var(--ds-size--sm); }
  [data-size='md'] { --ds-size: var(--ds-size--md); }
  [data-size='lg'] { --ds-size: var(--ds-size--lg); }
  }

  @layer ds.theme.type-scale {
  :root, [data-size] {
    --_ds-font-size-factor: calc(var(--ds-size-mode-font-size) / (var(--ds-size-base) / 16));
    --ds-font-size-1: calc(0.75rem * var(--_ds-font-size-factor));
    --ds-font-size-2: calc(0.875rem * var(--_ds-font-size-factor));
    --ds-font-size-3: calc(1rem * var(--_ds-font-size-factor));
    --ds-font-size-4: calc(1.125rem * var(--_ds-font-size-factor));
    --ds-font-size-5: calc(1.3125rem * var(--_ds-font-size-factor));
    --ds-font-size-6: calc(1.5rem * var(--_ds-font-size-factor));
    --ds-font-size-7: calc(1.875rem * var(--_ds-font-size-factor));
    --ds-font-size-8: calc(2.25rem * var(--_ds-font-size-factor));
    --ds-font-size-9: calc(3rem * var(--_ds-font-size-factor));
    --ds-font-size-10: calc(3.75rem * var(--_ds-font-size-factor));
    --ds-heading-2xl-font-size: var(--ds-font-size-10);
    --ds-heading-xl-font-size: var(--ds-font-size-9);
    --ds-heading-lg-font-size: var(--ds-font-size-8);
    --ds-heading-md-font-size: var(--ds-font-size-7);
    --ds-heading-sm-font-size: var(--ds-font-size-6);
    --ds-heading-xs-font-size: var(--ds-font-size-5);
    --ds-heading-2xs-font-size: var(--ds-font-size-4);
    --ds-body-xl-font-size: var(--ds-font-size-6);
    --ds-body-lg-font-size: var(--ds-font-size-5);
    --ds-body-md-font-size: var(--ds-font-size-4);
    --ds-body-sm-font-size: var(--ds-font-size-3);
    --ds-body-xs-font-size: var(--ds-font-size-2);
    --ds-body-short-xl-font-size: var(--ds-font-size-6);
    --ds-body-short-lg-font-size: var(--ds-font-size-5);
    --ds-body-short-md-font-size: var(--ds-font-size-4);
    --ds-body-short-sm-font-size: var(--ds-font-size-3);
    --ds-body-short-xs-font-size: var(--ds-font-size-2);
    --ds-body-long-xl-font-size: var(--ds-font-size-6);
    --ds-body-long-lg-font-size: var(--ds-font-size-5);
    --ds-body-long-md-font-size: var(--ds-font-size-4);
    --ds-body-long-sm-font-size: var(--ds-font-size-3);
    --ds-body-long-xs-font-size: var(--ds-font-size-2);

    @supports (width: round(down, .1em, 1px)) {
      --ds-font-size-1: round(calc(0.75rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-2: round(calc(0.875rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-3: round(calc(1rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-4: round(calc(1.125rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-5: round(calc(1.3125rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-6: round(calc(1.5rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-7: round(calc(1.875rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-8: round(calc(2.25rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-9: round(calc(3rem * var(--_ds-font-size-factor)), 1px);
      --ds-font-size-10: round(calc(3.75rem * var(--_ds-font-size-factor)), 1px);
    }
  }
  }
  ```

  > **Note:** The complete CSS file includes extensive color definitions for light and dark modes (hundreds of color tokens). The full file with all color definitions is available at: https://norwegianredcross.github.io/design-tokens/theme.css. The sections shown above demonstrate the size-mode and type-scale structure. All color tokens follow the patterns documented in the "Color Tokens" section above.

  </details>

  **Key Points:**
  - All tokens are prefixed with `--ds-`
  - Size tokens use `--ds-size-*` (NOT `--ds-spacing-*`)
  - Color tokens adapt to `data-color-scheme` attribute (light/dark/auto)
  - Size tokens scale with `data-size` attribute (sm/md/lg)
  - Typography tokens scale with size mode
  - Font sizes use calculated factors based on size mode

  ---

  ## Figma MCP Integration

  ### Prerequisites

  1. **Figma Access Token**
    - Go to Figma → Settings → Personal Access Tokens
    - Generate new token with scopes: `File content: Read` and `File metadata: Read`
    - Copy the token (you won't see it again)

  2. **MCP Server Setup** (One-time setup)

    **For Cursor/Windsurf:**
    - In Cursor/Windsurf: Settings → Features → MCP
    - Add New MCP Server:
      - Type: `command`
      - Name: `figma`
      - Command: `npx -y @modelcontextprotocol/server-figma`
      - Environment Variable:
        - Key: `FIGMA_ACCESS_TOKEN`
        - Value: `[your-token]`

    **For Claude Code (Crucial Step!):**
    
    To enable Claude Code to read Figma designs directly, you must add the Figma MCP server using the command line:
    
    1. **Start the Figma MCP server locally:**
        ```bash
        # Set your Figma access token
        export FIGMA_ACCESS_TOKEN=your_token_here
        
        # Start the MCP server
        npx -y @modelcontextprotocol/server-figma
        ```
        The server will run on `http://127.0.0.1:3845/sse` by default.
    
    2. **Add the MCP server to Claude Code:**
        ```bash
        claude mcp add --transport sse figma http://127.0.0.1:3845/sse
        ```
    
    3. **Using Figma MCP in Claude:**
        Once configured, you can use Figma links directly in your prompts:
        ```
        "Using this Figma design [paste Figma link], create a React component 
        following the design system guidelines from AI_DESIGN_SYSTEM_GUIDE.md"
        ```
    
    **Important:** The MCP server must be running locally before Claude Code can access Figma designs. The MCP server allows Claude to automatically read Figma node properties, dimensions, and design tokens, making the conversion from design to code much more accurate.

  ### Documentation Indexing (One-time per project)

  To give AI full context about the design system:

  1. Open Chat in Cursor (Cmd/Ctrl + L)
  2. Type `@Docs` and select "Add new doc"
  3. Paste: `https://norwegianredcross.github.io/DesignSystem/`
  4. Name it: `RødeKors` (or similar)
  5. Confirm

  This indexes all documentation so you can reference `@RødeKors` in future chats.

  ### Alternative: .cursorrules File

  Create `.cursorrules` in project root:

  ```
  You are an expert Frontend Developer implementing designs from Figma.

  ALWAYS follow these rules:
  1. **Documentation:** Refer to the indexed design system documentation (@RødeKors) for component usage, patterns, and guidelines.
  2. **Metadata:** Use component metadata from: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
  3. **Tokens:** Always use CSS variables/tokens defined in: https://norwegianredcross.github.io/design-tokens/theme.css (e.g., var(--ds-size-4)). Note: Use `--ds-size-*` tokens, NOT `--ds-spacing-*`.
  4. **Figma MCP:** When a Figma link is provided, use the `figma` tool to inspect node properties.

  Note: Make sure you have indexed the documentation (Step 0) before using these rules. Reference @RødeKors in chat when you need design system context.
  ```

  ---

  ## Workflow: Figma to Code

  ### Step 1: Get Figma Link

  1. Select the Frame/Component/Group in Figma
  2. Right-click → "Copy link to selection" (Ctrl/Cmd + L)
  3. **Important:** Use this function, not the browser URL

  ### Step 2: Provide Context

  **Option A: Manual Context** (Quick, one-time)
  - In chat, type `@` and paste:
    - `@https://norwegianredcross.github.io/design-tokens/theme.css`
    - `@https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json`
  - Paste the Figma link

  **Option B: Automated** (Recommended, with .cursorrules)
  - Just paste the Figma link
  - AI automatically checks .cursorrules for design system context

  ### Step 3: Generate Code

  Use this prompt template:

  ```
  Using the design at this Figma link: [paste link]

  Create a React component for this section.

  Requirements:
  - Strictly use tokens from the design system (colors, spacing) - no magic numbers
  - Map design elements to existing components where possible (Button, Heading, Card, etc.)
  - Use CSS Modules for custom styling
  - Follow accessibility best practices
  - Use semantic HTML
  ```

  ### Step 4: Review Generated Code

  Check:
  - ✅ Tokens are used correctly (`var(--ds-*)`)
  - ✅ Existing components are reused (Button, Card, etc.)
  - ✅ No hardcoded values (`#FFF`, `16px`, etc.)
  - ✅ Semantic HTML structure
  - ✅ Accessibility attributes (aria-labels, etc.)
  - ✅ Proper TypeScript types

  ### Step 5: Apply and Refine

  1. Review the diff in Cursor
  2. Apply the changes
  3. Test and refine as needed

  ---

  ## Best Practices

  ### 1. Component Selection

  **Always prefer existing components:**
  - ✅ `<Button>` instead of `<button className="btn">`
  - ✅ `<Card>` instead of `<div className="card">`
  - ✅ `<Heading>` instead of `<h1>`
  - ✅ `<Alert>` instead of custom alert div

  **When to create custom components:**
  - Unique functionality not covered by existing components
  - Complex compositions that need custom logic
  - One-off designs that don't fit existing patterns

  ### 2. Important: Do NOT Style Design System Components

  **Design system components should ONLY be configured via props:**
  - ✅ Use `data-size`, `data-color`, `variant`, `level` props
  - ✅ Trust that using the correct props will match the Figma design - both use the same tokens

  **❌ DO NOT:**
  - ❌ Add `className` or `style` props to design system components
  - ❌ Override component styles with CSS Modules
  - ❌ Apply custom CSS to design system components

  **✅ CSS Modules should ONLY be used for:**
  - Layout containers (grids, flex wrappers, sections)
  - Custom components you create yourself
  - Composition/layout logic - NOT for styling design system components

  **Example - ✅ Correct:**
  ```tsx
  <div className={styles.cardGrid}>
    <Card data-size="md" data-color="neutral">
      <CardBlock>
        <Heading level={2} data-size="lg">Title</Heading>
        <Paragraph>Content</Paragraph>
      </CardBlock>
    </Card>
  </div>
  ```

  **Example - ❌ Incorrect:**
  ```tsx
  <Card className={styles.customCard} style={{ padding: '20px' }}>
    <CardBlock>
      <Heading level={2} className={styles.customHeading}>Title</Heading>
    </CardBlock>
  </Card>
  ```

  ### 3. Token Usage

  **✅ DO:**
  ```tsx
  <div style={{ 
    padding: 'var(--ds-size-4)',
    backgroundColor: 'var(--ds-color-neutral-background-default)',
    borderRadius: 'var(--ds-border-radius-md)'
  }}>
  ```

  **❌ DON'T:**
  ```tsx
  <div style={{ 
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px'
  }}>
  ```

  ### 4. Size and Color Variants

  **Use data attributes:**
  ```tsx
  <Button data-size="lg" data-color="accent">
    Large Accent Button
  </Button>

  <Card data-size="md" data-color="neutral">
    Content
  </Card>
  ```

  ### 5. Accessibility

  **Always include:**
  - Semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
  - ARIA labels for icon-only buttons
  - Keyboard navigation support
  - Focus indicators
  - Proper heading hierarchy

  **Example:**
  ```tsx
  <Button aria-label="Close dialog">
    <CloseIcon aria-hidden />
  </Button>
  ```

  ### 6. Icons

  **Use NAV/Aksel Icons:**
  ```bash
  npm install @navikt/aksel-icons
  ```

  ```tsx
  import { AirplaneIcon } from '@navikt/aksel-icons';

  <Button>
    <AirplaneIcon aria-hidden style={{ marginRight: 'var(--ds-size-1)' }} />
    Fly
  </Button>
  ```

  **Icon Guidelines:**
  - Icon + text: Set `aria-hidden` on icon
  - Icon-only: Add `aria-label` to button, keep icon `aria-hidden`
  - Size: Use `fontSize` prop or inline style

  ### 7. CSS Modules

  **CSS Modules should ONLY be used for:**
  - Layout containers (grids, flex wrappers, sections)
  - Custom components you create yourself
  - Composition/layout logic

  **❌ DO NOT use CSS Modules to style design system components** - use props instead (see section 2).

  **Example - Layout container:**
  ```css
  /* styles.module.css */
  .container {
    display: flex;
    gap: var(--ds-size-4);
    padding: var(--ds-size-6);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-size-4);
  }
  ```

  **Import:**
  ```tsx
  import styles from './styles.module.css';

  <div className={styles.container}>
    <Card data-size="md">Content</Card>
  </div>
  ```

  ### 8. TypeScript

  **Always type props:**
  ```tsx
  interface MyComponentProps {
    title: string;
    description?: string;
    data-size?: 'sm' | 'md' | 'lg';
  }

  export const MyComponent: React.FC<MyComponentProps> = ({ 
    title, 
    description,
    'data-size': dataSize 
  }) => {
    // ...
  };
  ```

  ---

  ## Component Mapping Guide

  When converting Figma designs, map elements to components:

  ### Common Mappings

  | Figma Element | Component | Notes |
  |--------------|-----------|-------|
  | Button | `<Button>` | Check variant (primary/secondary/tertiary) |
  | Text Input | `<Textfield>` or `<Input>` | Use Textfield for labels/errors |
  | Dropdown | `<Select>` or `<Dropdown>` | Select for form, Dropdown for actions |
  | Card/Container | `<Card>` | Use CardBlock for content sections |
  | Alert/Banner | `<Alert>` | Set data-color for variant |
  | Modal | `<Dialog>` | Use modal prop for behavior |
  | Tabs | `<Tabs>` | Check for controlled/uncontrolled |
  | Checkbox | `<Checkbox>` | Wrap in Field for labels |
  | Radio | `<Radio>` | Use useRadioGroup for groups |
  | Avatar | `<Avatar>` | Requires aria-label |
  | Badge | `<Badge>` | Use BadgePosition for overlays |
  | Tooltip | `<Tooltip>` | Wrap trigger element |
  | Link | `<Link>` | Use for navigation |
  | Heading | `<Heading>` | **Required:** Set level (1-6) for semantic HTML. Optional: data-size for visual appearance |
  | Paragraph | `<Paragraph>` | For body text |
  | List | `<List.Unordered>` or `<List.Ordered>` | Use List.Item for items |
  | Table | `<Table>` | Set zebra, border, hover props |
  | Spinner | `<Spinner>` | For loading states |
  | Skeleton | `<SkeletonLoader>` | For loading placeholders |

  ### Layout Patterns

  **Form Layout:**
  ```tsx
  <Fieldset>
    <Field label="Name" description="Enter your full name">
      <Textfield />
    </Field>
    <Field label="Email" error="Invalid email">
      <Input type="email" />
    </Field>
  </Fieldset>
  ```

  **Card Grid:**
  ```tsx
  <div style={{ display: 'grid', gap: 'var(--ds-size-4)' }}>
    <Card><CardBlock>Card 1</CardBlock></Card>
    <Card><CardBlock>Card 2</CardBlock></Card>
  </div>
  ```

  **Button Group:**
  ```tsx
  <div style={{ display: 'flex', gap: 'var(--ds-size-2)' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </div>
  ```

  ### Figma Token Mapping

  When Figma uses design tokens, map them:

  **Figma Variable → CSS Token:**
  - `color/main/base-default` → `var(--ds-color-primary-color-red-base-default)`
  - `spacing/4` → `var(--ds-size-4)` (Note: Use `--ds-size-*` tokens, NOT `--ds-spacing-*`)
  - `typography/body/medium` → Use `--ds-body-md-font-size` and `--ds-font-weight-regular`

  **Process:**
  1. Extract variable name from Figma node
  2. Find matching token in `theme.css`
  3. Use CSS custom property in code

  ---

  ## Troubleshooting

  ### Missing Tokens

  If a token doesn't exist:
  1. Check `theme.css` for available tokens
  2. Use closest semantic match
  3. Document if new token is needed

  ### Component Not Found

  If a component doesn't exist:
  1. Check `metadata.json` for all available components
  2. Consider if existing component can be extended
  3. Create custom component if needed

  ### Figma MCP Not Working

  1. Verify token is set correctly
  2. Check MCP server status (should be green)
  3. Ensure Figma link uses "Copy link to selection"
  4. Verify file permissions in Figma

  ### Styling Issues

  1. Verify CSS import order (base → theme)
  2. Check token names match exactly
  3. Ensure CSS Modules are imported correctly
  4. Check for specificity conflicts

  ---

  ## Additional Resources

  - **Storybook**: https://norwegianredcross.github.io/DesignSystem/storybook/
  - **Design Tokens**: https://norwegianredcross.github.io/design-tokens/theme.css
  - **Component Metadata**: https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json
  - **GitHub Repository**: https://github.com/norwegianredcross/DesignSystem
  - **NAV/Aksel Icons**: https://aksel.nav.no/komponenter/ikoner

  ---

  ## Quick Reference

  ### Import Pattern
  ```tsx
  import { ComponentName } from 'rk-designsystem';
  ```

  ### Token Pattern
  ```css
  property: var(--ds-{category}-{group}-{subgroup}-{property});
  ```

  ### Size Pattern
  ```tsx
  <Component data-size="sm" | "md" | "lg" />
  ```

  ### Color Pattern
  ```tsx
  <Component data-color="accent" | "neutral" | "danger" | etc. />
  ```

  ---

  **Last Updated**: Based on rk-designsystem v1.1.88

  **Guide URL**: https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md

