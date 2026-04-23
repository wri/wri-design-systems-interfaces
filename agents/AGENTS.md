# AI Agent Instructions — WRI Design System

This file provides context for AI coding agents working on WRI projects.
It is the **canonical source of truth** — do not edit the IDE-specific copies directly.
The setup script distributes this file to the correct location for each IDE.

---

## What is the WRI Design System?

`@worldresources/wri-design-systems` is the **standard component library for all World Resources Institute products**. It is built on top of Chakra UI v3 and provides WRI-branded, pre-styled components shared across multiple projects.

Because the library ships its own styles and design tokens, **do not override component styles with custom CSS**. Visual consistency across products depends on this.

| Resource | URL |
|---|---|
| Storybook | https://wri.github.io/wri-design-systems/ |
| npm | https://www.npmjs.com/package/@worldresources/wri-design-systems |
| Style guide | https://wri.zeroheight.com/styleguide/s/120400/p/113cd5-wri-uxui-design-system |

---

## MCP Servers

Two MCP servers are configured for this project. **Query them before writing any component code** — never assume props or token names from memory.

### Storybook MCP
Exposes WRI DS component stories, props, and usage patterns directly from the hosted Storybook.
Use it to verify: which WRI DS components exist, their props, and documented usage examples.

```json
{
  "mcpServers": {
    "wri-storybook": {
      "command": "npx",
      "args": ["-y", "storybook-mcp@latest"],
      "env": {
        "STORYBOOK_URL": "https://wri.github.io/wri-design-systems/index.json"
      }
    }
  }
}
```

### Chakra UI MCP
Exposes Chakra UI v3 component props, design tokens, and migration guidance.
Use it as fallback when a component is not in the WRI DS.

```json
{
  "mcpServers": {
    "chakra-ui": {
      "command": "npx",
      "args": ["-y", "@chakra-ui/react-mcp"]
    }
  }
}
```

> **Note:** The project setup script configures both MCP servers automatically.
> Run it once after cloning — see the README for instructions.

---

## Component Hierarchy — Never Skip a Level

```
1. @worldresources/wri-design-systems  ^2.189.0  — always check first
2. @chakra-ui/react                    ^3.8.1    — fallback only
3. Custom code                                   — last resort; add justification comment
```

### Level 1 — WRI Design System

Check the [Storybook](https://wri.github.io/wri-design-systems/) or query the Storybook MCP first.

```tsx
// ✅ Correct
import { Button } from "@worldresources/wri-design-systems"

<Button variant="primary">Save</Button>
```

### Level 2 — Chakra UI (fallback only)

Only use Chakra directly if there is **no WRI DS equivalent**. Use the Chakra MCP to verify props — do not rely on memory. Chakra v3 has breaking changes from v2.

```tsx
// ✅ Acceptable — no WRI DS equivalent exists
import { Skeleton } from "@chakra-ui/react"
```

### Level 3 — Custom Code (last resort)

When neither the WRI DS nor Chakra covers the use case, you **must**:

1. Add a `// [CUSTOM COMPONENT]` comment on the line above the definition.
   This is a searchable marker — find all custom components with "Find in Files" → `[CUSTOM COMPONENT]`.
2. Add a brief justification explaining why no DS or Chakra component was used.

```tsx
// [CUSTOM COMPONENT] — No WRI DS or Chakra equivalent for map tooltip overlay
const MapTooltip = ({ lat, lng, children }: MapTooltipProps) => {
  ...
}
```

---

## Design Tokens

WRI DS tokens are defined as Chakra semantic tokens. **Never hardcode values** that have a token equivalent.

```tsx
// ❌ Wrong — hardcoded colour
<Box bg="#2C7D6E" />

// ✅ Correct — semantic token
<Box bg="brand.primary" />
```

If unsure what tokens exist, use the Chakra MCP (`get_theme`) or check the [style guide](https://wri.zeroheight.com/styleguide/s/120400/p/113cd5-wri-uxui-design-system).

---

## What NOT to Do

```tsx
// ❌ Do not use a Chakra component that the WRI DS already wraps
import { Button } from "@chakra-ui/react"  // → use WRI DS Button

// ❌ Do not override WRI DS styles
<Button sx={{ backgroundColor: "red" }}>Delete</Button>

// ❌ Do not hardcode design values
<Text fontSize="14px" color="#333333">Label</Text>

// ❌ Do not create custom components without the searchable marker
const MyButton = () => <button style={{ background: "blue" }}>Click</button>

// ❌ Do not skip the hierarchy — always check WRI DS and Chakra before going custom

// ❌ Do not use Chakra v2 API — v3 has breaking changes (e.g. colorScheme is removed)
//    Always verify props via the Chakra MCP
```

---

## Quick Reference

| Question | Where to look |
|---|---|
| Does a WRI DS component exist? | [Storybook](https://wri.github.io/wri-design-systems/) or Storybook MCP |
| What props does a Chakra component accept? | Chakra MCP → `get_component_props` |
| What design tokens are available? | Chakra MCP → `get_theme` or [Zeroheight](https://wri.zeroheight.com/styleguide/s/120400/p/113cd5-wri-uxui-design-system) |
| Where are all custom components in this repo? | "Find in Files" → `[CUSTOM COMPONENT]` |
