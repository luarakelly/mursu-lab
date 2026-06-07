# ui-lib

A headless, responsive-by-construction React UI library built around structure and composition.

---

## Philosophy

> Components should not know about screen sizes.

Responsiveness is achieved through intrinsic layouts, flex wrapping, grid wrapping, min-width constraints, and fluid spacing tokens — not breakpoint props, viewport detection, or mobile variants.

---

## Architecture

```
css-tokens → primitives → semantic-wrappers → patterns
```

Each layer only imports from the layer below it. This keeps every layer substitutable and the
system extensible by addition rather than modification.

---

## Layer 1 — CSS Tokens

Contains all design scales.

Examples:

```txt
spacing.css
typography.css
breakpoints.css
```

## Layer 2 — Primitives

Foundational building blocks. They know nothing about application logic or visual style.

| Primitive | Purpose |
|---|---|
| `Stack` | Sequential one-dimensional layout |
| `Grid` | Two-dimensional layout |
| `Text` | Semantic typography |
| `Button` | Actions and anchor mode via `as` prop |
| `Input` | Form inputs |

All primitives accept an `as` prop for polymorphism.

---

## Layer 3 — Semantic Wrappers

Meaningful names for common layout patterns, all extending `Stack` or `Grid` internally. Layout props work consistently across all of them.

| Wrapper | Purpose |
|---|---|
| `Section` | Logical page area, supports `responsiveColumns` |
| `Card` | Content container |
| `Aside` | Supporting content: filters, search, metadata |
| `Article` | Long-form content |
| `List` | Sequential items |
| `Steps` | Ordered process or timeline |
| `Header` / `Footer` | Page shell |
| `Navigation` | Link groups |

---

## Layer 4 — Patterns

The only layer that may own state. Combines primitives and semantic wrappers into reusable
solutions for recurring problems.

**Static**
- `StepItem` — single step in a timeline or roadmap

**Interactive**
- `Dropdown` — floating content with click-outside and escape handling
- `Pagination` — page navigation

**Hooks**
- `useSearch` — fuzzy search over a keyed dataset
- `useFilter` — multi-key tag filtering with `and` / `or` modes
- `usePagination` — page slicing and navigation state
- `useSort` — sort by field and direction
- `useFetch` — data fetching with loading and error state
- `useToggle` — boolean toggle

---

## Golden Rules

- `Stack` by default. `Grid` only for collections.
- No `isMobile`, no breakpoint props, no layout switching.
- Each layer imports only from the layer below it.
- Responsive behavior must emerge from layout, never from conditional rendering.

## More updates soon