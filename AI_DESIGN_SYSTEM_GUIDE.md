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
- **Base Package**: `@digdir/designsystemet-css`
- **Theme Package**: `rk-design-tokens`

### Installation
```bash
npm install rk-designsystem @digdir/designsystemet-css rk-design-tokens
```

### CSS Import Order (Critical!)
```tsx
// Must be imported in this exact order:
import '@digdir/designsystemet-css/index.css';         // 1. Base styles
import 'rk-design-tokens/design-tokens-build/theme.css'; // 2. Røde Kors theme
```

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

All components are exported from `rk-designsystem`. Below is a comprehensive list with key props:

### Form Components

#### Button
```tsx
import { Button } from 'rk-designsystem';

<Button 
  variant="primary" | "secondary" | "tertiary"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "brand1" | "brand2" | "brand3" | "neutral" | "danger"
  icon={boolean}
  loading={ReactNode | boolean}
  type="button" | "submit" | "reset"
/>
```

#### Input
```tsx
import { Input } from 'rk-designsystem';

<Input 
  type="text" | "email" | "password" | "number" | etc.
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
  size={number} // character width
  disabled={boolean}
  readOnly={boolean}
/>
```

#### Textfield (with Field wrapper)
```tsx
import { Textfield } from 'rk-designsystem';

<Textfield 
  label={ReactNode}
  description={ReactNode}
  error={ReactNode}
  prefix={string}
  suffix={string}
  counter={number | FieldCounterProps}
  multiline={boolean} // renders Textarea
  data-size="sm" | "md" | "lg"
/>
```

#### Textarea
```tsx
import { Textarea } from 'rk-designsystem';

<Textarea 
  data-size="sm" | "md" | "lg"
/>
```

#### Select
```tsx
import { Select } from 'rk-designsystem';

<Select 
  data-size="sm" | "md" | "lg"
  readOnly={boolean}
  width="full" | "auto"
/>
```

#### Checkbox
```tsx
import { Checkbox } from 'rk-designsystem';

<Checkbox 
  label={ReactNode}
  description={ReactNode}
  value={string | number}
  disabled={boolean}
  readOnly={boolean}
  error={ReactNode}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
/>
```

#### Radio
```tsx
import { Radio, useRadioGroup } from 'rk-designsystem';

<Radio 
  label={ReactNode}
  description={ReactNode}
  value={string | number}
  disabled={boolean}
  readOnly={boolean}
  error={ReactNode}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
/>
```

#### Switch
```tsx
import { Switch } from 'rk-designsystem';

<Switch 
  label={ReactNode}
  description={ReactNode}
  value={string | number}
  position="start" | "end"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
/>
```

#### DateInput (Custom)
```tsx
import { DateInput } from 'rk-designsystem';

<DateInput 
  label={ReactNode}
  description={ReactNode}
  error={ReactNode}
  value={string}
  defaultValue={string}
  onChange={(event, formattedValue) => void}
  suffixIcon={ReactNode}
  onSuffixClick={MouseEventHandler}
/>
```

#### DatePicker (Custom)
```tsx
import { DatePicker } from 'rk-designsystem';

<DatePicker 
  initialDate={Date}
  selectedDate={Date}
  onDateSelect={(date: Date) => void}
/>
```

### Layout Components

#### Card
```tsx
import { Card, CardBlock } from 'rk-designsystem';

<Card 
  variant="default" | "subtle" | "neutral"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  <CardBlock>Content</CardBlock>
</Card>
```

#### Divider
```tsx
import { Divider } from 'rk-designsystem';

<Divider />
```

#### Fieldset
```tsx
import { Fieldset } from 'rk-designsystem';

<Fieldset 
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  {/* Form fields */}
</Fieldset>
```

#### Field
```tsx
import { Field, FieldDescription, FieldCounter } from 'rk-designsystem';

<Field 
  position="start" | "end"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  <FieldDescription>Description</FieldDescription>
  {/* Input component */}
  <FieldCounter max={100} />
</Field>
```

### Navigation Components

#### Breadcrumbs
```tsx
import { Breadcrumbs, BreadcrumbsList, BreadcrumbsItem, BreadcrumbsLink } from 'rk-designsystem';

<Breadcrumbs aria-label="Navigation">
  <BreadcrumbsList>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="/">Home</BreadcrumbsLink>
    </BreadcrumbsItem>
  </BreadcrumbsList>
</Breadcrumbs>
```

#### Tabs
```tsx
import { Tabs } from 'rk-designsystem';

<Tabs 
  value={string}
  defaultValue={string}
  onChange={(value: string) => void}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  {/* Tab items */}
</Tabs>
```

#### Pagination
```tsx
import { Pagination, usePagination } from 'rk-designsystem';

const { currentPage, setCurrentPage } = usePagination({
  currentPage: 1,
  totalPages: 10,
  showPages: 7,
  onChange: (event, page) => void
});

<Pagination 
  aria-label="Pagination"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
/>
```

### Feedback Components

#### Alert
```tsx
import { Alert } from 'rk-designsystem';

<Alert 
  data-color="info" | "success" | "warning" | "danger"
  data-size="sm" | "md" | "lg"
  onClose={() => void}
>
  Message content
</Alert>
```

#### ErrorSummary
```tsx
import { ErrorSummary } from 'rk-designsystem';

<ErrorSummary 
  data-size="sm" | "md" | "lg"
>
  {/* Error items */}
</ErrorSummary>
```

#### Tooltip
```tsx
import { Tooltip } from 'rk-designsystem';

<Tooltip 
  content={string}
  placement="top" | "bottom" | "left" | "right"
  autoPlacement={boolean}
  open={boolean}
  data-size="sm" | "md" | "lg"
>
  {/* Trigger element */}
</Tooltip>
```

#### Popover
```tsx
import { Popover } from 'rk-designsystem';

<Popover 
  id={string}
  placement="top" | "bottom" | "left" | "right"
  variant="default" | "subtle" | "neutral"
  open={boolean}
  onOpen={() => void}
  onClose={() => void}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  {/* Content */}
</Popover>
```

#### Dialog
```tsx
import { Dialog } from 'rk-designsystem';

<Dialog 
  open={boolean}
  onClose={(event) => void}
  modal={boolean}
  closeButton={string | false}
  closedby="closerequest" | "any"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  {/* Content */}
</Dialog>
```

### Display Components

#### Avatar
```tsx
import { Avatar } from 'rk-designsystem';

<Avatar 
  aria-label={string} // Required
  variant="circle" | "square"
  data-size="sm" | "md" | "lg"
  initials={string}
  data-color="accent" | "neutral" | etc.
>
  {/* Image or icon */}
</Avatar>
```

#### Badge
```tsx
import { Badge, BadgePosition } from 'rk-designsystem';

<Badge 
  count={number}
  maxCount={number}
  variant="base" | "subtle"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
/>

<BadgePosition 
  placement="top-right" | "top-left" | etc.
  overlap="rectangle" | "circle"
>
  {/* Child element */}
</BadgePosition>
```

#### Tag
```tsx
import { Tag } from 'rk-designsystem';

<Tag 
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | "info" | "success" | "warning" | "danger"
>
  Tag content
</Tag>
```

#### Chip
```tsx
import { Chip } from 'rk-designsystem';

// Button variant
<Chip.Button 
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  Chip content
</Chip.Button>

// Checkbox variant
<Chip.Checkbox 
  value={string}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  Chip content
</Chip.Checkbox>

// Radio variant
<Chip.Radio 
  value={string}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  Chip content
</Chip.Radio>
```

#### SkeletonLoader
```tsx
import { SkeletonLoader } from 'rk-designsystem';

<SkeletonLoader 
  width={string | number}
  height={string | number}
  variant="rectangle" | "circle" | "text"
/>
```

#### Spinner
```tsx
import { Spinner } from 'rk-designsystem';

<Spinner 
  aria-label={string}
  data-size="sm" | "md" | "lg"
/>
```

### Data Display Components

#### Table
```tsx
import { Table } from 'rk-designsystem';

<Table 
  zebra={boolean}
  stickyHeader={boolean}
  border={boolean}
  hover={boolean}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  {/* Table content */}
</Table>
```

#### List
```tsx
import { List } from 'rk-designsystem';

<List.Unordered>
  <List.Item>Item 1</List.Item>
</List.Unordered>

<List.Ordered>
  <List.Item>Item 1</List.Item>
</List.Ordered>
```

### Other Components

#### Link
```tsx
import { Link } from 'rk-designsystem';

<Link 
  href={string}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  Link text
</Link>
```

#### Heading
```tsx
import { Heading } from 'rk-designsystem';

<Heading 
  level={1 | 2 | 3 | 4 | 5 | 6}
  data-size="xs" | "sm" | "md" | "lg" | "xl"
>
  Heading text
</Heading>
```

#### Paragraph
```tsx
import { Paragraph } from 'rk-designsystem';

<Paragraph>
  Paragraph text
</Paragraph>
```

#### Label
```tsx
import { Label } from 'rk-designsystem';

<Label htmlFor={string}>
  Label text
</Label>
```

#### Details (Accordion)
```tsx
import { Details } from 'rk-designsystem';

<Details 
  open={boolean}
  defaultOpen={boolean}
  onToggle={(event) => void}
  variant="default" | "subtle" | "neutral"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  <Details.Summary>Summary</Details.Summary>
  <Details.Content>Content</Details.Content>
</Details>
```

#### Dropdown
```tsx
import { Dropdown } from 'rk-designsystem';

<Dropdown 
  open={boolean}
  onOpen={() => void}
  onClose={() => void}
  placement="bottom-end" | etc.
  autoPlacement={boolean}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  {/* Trigger and content */}
</Dropdown>
```

#### Search
```tsx
import { Search } from 'rk-designsystem';

<Search 
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
/>
```

#### Suggestion (Autocomplete)
```tsx
import { Suggestion } from 'rk-designsystem';

<Suggestion>
  <Suggestion.Input />
  <Suggestion.List>
    <Suggestion.Option value="option1">Option 1</Suggestion.Option>
  </Suggestion.List>
  <Suggestion.Empty>No results</Suggestion.Empty>
  <Suggestion.Clear />
</Suggestion>
```

#### ToggleGroup
```tsx
import { ToggleGroup } from 'rk-designsystem';

<ToggleGroup 
  value={string}
  defaultValue={string}
  onChange={(value: string) => void}
  name={string}
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  {/* Toggle items */}
</ToggleGroup>
```

#### SkipLink
```tsx
import { SkipLink } from 'rk-designsystem';

<SkipLink 
  href="#main-content"
  data-size="sm" | "md" | "lg"
  data-color="accent" | "neutral" | etc.
>
  Skip to main content
</SkipLink>
```

#### ValidationMessage
```tsx
import { ValidationMessage } from 'rk-designsystem';

<ValidationMessage>
  Error or validation message
</ValidationMessage>
```

### Custom Components

#### Carousel
```tsx
import { Carousel } from 'rk-designsystem';

<Carousel 
  // Custom carousel props
>
  {/* Slides */}
</Carousel>
```

#### Header
```tsx
import { Header } from 'rk-designsystem';

<Header 
  // Header props
/>
```

---

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

#### 2. Sizes & Spacing (`--ds-size-*`, `--ds-spacing-*`)

**Spacing Tokens:**
- `--ds-spacing-1` through `--ds-spacing-12`
- `--ds-size-1` through `--ds-size-12`

**Usage:**
```css
.my-component {
  padding: var(--ds-spacing-4);
  margin-bottom: var(--ds-spacing-6);
  gap: var(--ds-spacing-2);
}
```

#### 3. Typography (`--ds-font-*`, `--ds-body-*`, `--ds-heading-*`)

**Font Family:**
- `--ds-font-family-base`
- `--ds-font-family-heading`

**Font Sizes:**
- `--ds-body-font-size-*`
- `--ds-heading-font-size-*`

**Font Weights:**
- `--ds-body-font-weight-*`
- `--ds-heading-font-weight-*`

**Usage:**
```css
.my-text {
  font-family: var(--ds-font-family-base);
  font-size: var(--ds-body-font-size-md);
  font-weight: var(--ds-body-font-weight-regular);
}
```

#### 4. Borders (`--ds-border-*`)

**Border Radius:**
- `--ds-border-radius-sm`
- `--ds-border-radius-md`
- `--ds-border-radius-lg`

**Border Width:**
- `--ds-border-width-sm`
- `--ds-border-width-md`

**Usage:**
```css
.my-component {
  border-radius: var(--ds-border-radius-md);
  border-width: var(--ds-border-width-sm);
}
```

#### 5. Shadows (`--ds-shadow-*`)

**Shadow Tokens:**
- `--ds-shadow-sm`
- `--ds-shadow-md`
- `--ds-shadow-lg`
- `--ds-shadow-xl`

**Usage:**
```css
.my-card {
  box-shadow: var(--ds-shadow-md);
}
```

#### 6. Effects (`--ds-opacity-*`)

**Opacity Tokens:**
- `--ds-opacity-disabled`
- `--ds-opacity-hover`

**Usage:**
```css
.my-button:disabled {
  opacity: var(--ds-opacity-disabled);
}
```

### Token Naming Conventions

1. **Always use tokens** - Never hardcode values
2. **Follow the structure** - `--ds-{category}-{group}-{subgroup}-{property}`
3. **Use semantic names** - Prefer `--ds-color-neutral-text-default` over `--ds-color-gray-900`
4. **Check available tokens** - Visit the tokens page in Storybook or inspect `theme.css`

---

## Figma MCP Integration

### Prerequisites

1. **Figma Access Token**
   - Go to Figma → Settings → Personal Access Tokens
   - Generate new token with scopes: `File content: Read` and `File metadata: Read`
   - Copy the token (you won't see it again)

2. **MCP Server Setup** (One-time setup)
   - In Cursor/Windsurf: Settings → Features → MCP
   - Add New MCP Server:
     - Type: `command`
     - Name: `figma`
     - Command: `npx -y @modelcontextprotocol/server-figma`
     - Environment Variable:
       - Key: `FIGMA_ACCESS_TOKEN`
       - Value: `[your-token]`

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
3. **Tokens:** Always use CSS variables/tokens defined in: https://norwegianredcross.github.io/design-tokens/theme.css (e.g., var(--ds-spacing-md)).
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

### 2. Token Usage

**✅ DO:**
```tsx
<div style={{ 
  padding: 'var(--ds-spacing-4)',
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

### 3. Size and Color Variants

**Use data attributes:**
```tsx
<Button data-size="lg" data-color="accent">
  Large Accent Button
</Button>

<Card data-size="md" data-color="neutral">
  Content
</Card>
```

### 4. Accessibility

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

### 5. Icons

**Use NAV/Aksel Icons:**
```bash
npm install @navikt/aksel-icons
```

```tsx
import { AirplaneIcon } from '@navikt/aksel-icons';

<Button>
  <AirplaneIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1)' }} />
  Fly
</Button>
```

**Icon Guidelines:**
- Icon + text: Set `aria-hidden` on icon
- Icon-only: Add `aria-label` to button, keep icon `aria-hidden`
- Size: Use `fontSize` prop or inline style

### 6. CSS Modules

**For custom components:**
```css
/* styles.module.css */
.container {
  display: flex;
  gap: var(--ds-spacing-4);
  padding: var(--ds-spacing-6);
  background-color: var(--ds-color-neutral-background-default);
}
```

**Import:**
```tsx
import styles from './styles.module.css';

<div className={styles.container}>
```

### 7. TypeScript

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
| Heading | `<Heading>` | Set level (1-6) and data-size |
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
<div style={{ display: 'grid', gap: 'var(--ds-spacing-4)' }}>
  <Card><CardBlock>Card 1</CardBlock></Card>
  <Card><CardBlock>Card 2</CardBlock></Card>
</div>
```

**Button Group:**
```tsx
<div style={{ display: 'flex', gap: 'var(--ds-spacing-2)' }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
</div>
```

### Figma Token Mapping

When Figma uses design tokens, map them:

**Figma Variable → CSS Token:**
- `color/main/base-default` → `var(--ds-color-primary-color-red-base-default)`
- `spacing/4` → `var(--ds-spacing-4)`
- `typography/body/medium` → Use `--ds-body-font-size-md` and `--ds-body-font-weight-regular`

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

**Last Updated**: Based on rk-designsystem v1.1.59

**Guide URL**: https://norwegianredcross.github.io/DesignSystem/storybook/AI_DESIGN_SYSTEM_GUIDE.md

