# UI-LIB Documentation

A headless, responsive-by-construction React UI architecture.

---

# Philosophy

This library is built around a single principle:

> Components should not know about screen sizes.

Responsiveness is achieved through:

* intrinsic layouts
* flex wrapping
* min-width constraints
* fluid typography
* spacing tokens

instead of:

* viewport detection
* breakpoint props
* mobile variants
* layout switching

The goal is to build interfaces that naturally adapt to available space.

---

# Architecture

```txt
css-tokens
↓
primitives
↓
slots
↓
patterns
↓
semantic-wrappers
↓
compositions
↓
application
```

Each layer has exactly one responsibility.

---

# Layer 1 — CSS Tokens

Location:

```txt
css-tokens/
```

Contains all design scales.

Examples:

```txt
spacing.css
typography.css
breakpoints.css
responsive.css
```

---

## Responsibilities

Defines:

* spacing scale
* typography scale
* container sizes
* transitions
* responsive helpers

Examples:

```css
--space-1
--space-2
--space-3
```

```css
--text-sm
--text-md
--text-lg
```

---

## Rules

Never use:

```css
padding: 12px;
gap: 18px;
font-size: 32px;
```

Instead:

```css
padding: var(--space-3);
gap: var(--space-4);
font-size: var(--text-3xl);
```

---

# Layer 2 — Primitives

Location:

```txt
primitives/
```

Primitives are the building blocks.

They know:

* layout
* spacing
* sizing
* semantic HTML

They do NOT know:

* application logic
* business logic
* page structure

---

# Flex

Purpose:

```txt
1-dimensional layout
```

Example:

```tsx
<Flex
  justify="space-between"
  align="center"
>
  <Logo />
  <Actions />
</Flex>
```

Use when:

```txt
items flow horizontally
or vertically
```

---

# Stack

Purpose:

```txt
sequential layout
```

Most used primitive.

Example:

```tsx
<Stack gap="4">
  <Title />
  <Description />
  <Button />
</Stack>
```

Example:

```tsx
<Stack
  direction="row"
  gap="4"
>
  <Avatar />
  <UserInfo />
</Stack>
```

Use whenever things are simply stacked.

---

# Grid

Purpose:

```txt
2-dimensional layout
```

Example:

```tsx
<Grid columns="repeat(auto-fit,minmax(280px,1fr))">
  <Card />
  <Card />
  <Card />
</Grid>
```

Use when items should automatically wrap into rows.

---

# Container

Purpose:

```txt
content width constraint
```

Example:

```tsx
<Container>
  <PageContent />
</Container>
```

Automatically centers content.

---

# Button

Purpose:

```txt
actions
```

Example:

```tsx
<Button>
  Save
</Button>
```

Anchor mode:

```tsx
<Button
  as="a"
  href="/docs"
>
  Docs
</Button>
```

---

# Image

Purpose:

```txt
responsive images
```

Example:

```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
/>
```

---

# Text

Purpose:

```txt
semantic typography
```

Example:

```tsx
<Text as="h1">
  Blog
</Text>
```

Visual styling comes from utility classes:

```tsx
<Text
  as="h1"
  className="text-4xl font-bold"
>
  Blog
</Text>
```

---

# Layer 3 — Slots

Location:

```txt
slots/
```

Slots define structural regions.

They do not create layouts.

They create placement zones.

---

# Available Slots

```txt
Left
Center
Right

ColumnTop
ColumnCenter
ColumnBottom
```

---

# Example

```tsx
<RowLayout
  left={<Logo />}
  center={<Search />}
  right={<Actions />}
/>
```

Internally:

```txt
Left
Center
Right
```

handle growth and shrinking.

---

# Rules

Never add:

```txt
business logic
styling
application behavior
```

to slots.

Slots only define placement.

---

# Layer 4 — Patterns

Location:

```txt
patterns/
```

Patterns combine primitives and slots.

Patterns solve recurring layout problems.

---

# Static Patterns

Examples:

```txt
RowLayout
ColumnLayout
StepItem
```

---

# RowLayout

Purpose:

```txt
left
center
right
```

Example:

```tsx
<RowLayout
  left={<Logo />}
  center={<Search />}
  right={<Actions />}
/>
```

Automatic responsiveness comes from:

```txt
flex-wrap
min-width
flex-grow
```

No breakpoints needed.

---

# ColumnLayout

Purpose:

```txt
top
main
bottom
```

Example:

```tsx
<ColumnLayout
  top={<Header />}
  main={<Content />}
  bottom={<Footer />}
/>
```

---

# StepItem

Purpose:

```txt
timeline
process
roadmap
stepper
```

Example:

```tsx
<StepItem
  label={<StepNumber />}
>
  Step Content
</StepItem>
```

---

# Interactive Patterns

Examples:

```txt
Dropdown
Pagination
```

---

# Dropdown

Purpose:

```txt
floating content
```

Example:

```tsx
<Dropdown
  trigger={<Button>Open</Button>}
  content={<Menu />}
/>
```

Features:

* click outside
* escape close
* controlled mode
* uncontrolled mode

---

# Pagination

Purpose:

```txt
page navigation
```

Example:

```tsx
<Pagination
  currentPage={3}
  onPrevious={...}
  onNext={...}
/>
```

Uses:

```txt
Stack
Button
spacing tokens
```

internally.

---

# Layer 5 — Semantic Wrappers

Location:

```txt
semantic-wrappers/
```

Semantic wrappers provide meaning.

They should stay dumb.

---

# Available Wrappers

```txt
Article
Card
Header
Footer
Section
List
Navigation
Steps
```

---

# Header

Example:

```tsx
<Header>
  ...
</Header>
```

Sticky:

```tsx
<Header sticky>
  ...
</Header>
```

---

# Section

Example:

```tsx
<Section>
  ...
</Section>
```

Use to group related content.

---

# Article

Example:

```tsx
<Article>
  ...
</Article>
```

Use for:

* blog posts
* documentation
* news articles

---

# Card

Example:

```tsx
<Card>
  ...
</Card>
```

Generic content container.

---

# Navigation

Example:

```tsx
<Navigation>
  <Link />
  <Link />
  <Link />
</Navigation>
```

Automatically wraps.

---

# List

Example:

```tsx
<List>
  <li>Item</li>
  <li>Item</li>
</List>
```

Internally uses Stack.

---

# Steps

Example:

```tsx
<Steps>
  <StepItem />
  <StepItem />
  <StepItem />
</Steps>
```

---

# Layer 6 — Compositions

Location:

```txt
compositions/
```

Compositions combine patterns and wrappers.

They become application-specific UI.

---

# Example

Page Header

```tsx
<Header>
  <RowLayout
    left={
      <Stack>
        <Text as="h1">
          Blog
        </Text>
      </Stack>
    }
    right={<TerminalCard />}
  />
</Header>
```

---

# Example

Blog Card

```tsx
<Card>
  <Stack gap="4">
    <Text as="h2">
      My Post
    </Text>

    <Text>
      Description...
    </Text>

    <Button>
      Read More
    </Button>
  </Stack>
</Card>
```

---

# Responsive Rules

The entire library follows:

```txt
No responsive props
No isMobile
No breakpoint switching
```

Instead:

```txt
min-width: 0
flex-wrap
fluid typography
intrinsic sizing
```

---

# Golden Rules

## Rule 1

Use Stack by default.

```tsx
<Stack gap="4">
```

before considering Flex.

---

## Rule 2

Use Grid only for collections.

```tsx
<Grid>
```

not for normal layouts.

---

## Rule 3

Patterns solve layout problems.

Semantic wrappers do not.

---

## Rule 4

Responsive behavior must emerge naturally.

Never write:

```tsx
isMobile ? ...
```

inside UI-LIB.

---

## Rule 5

Compositions are allowed to be application-specific.

Everything below compositions should remain reusable.

---

# Recommended Build Order

When creating a new feature:

```txt
1. Tokens
2. Primitive
3. Slot
4. Pattern
5. Semantic Wrapper
6. Composition
```

Never skip layers.

---

# Example Complete Composition

```tsx
<Section>
  <Container>
    <Card>
      <Stack gap="6">
        <Text
          as="h2"
          className="text-3xl font-bold"
        >
          Latest Articles
        </Text>

        <Grid>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Grid>

        <Pagination
          currentPage={1}
        />
      </Stack>
    </Card>
  </Container>
</Section>
```

This demonstrates the complete architecture working together.
