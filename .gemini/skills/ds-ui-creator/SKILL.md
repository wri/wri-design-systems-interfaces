---
name: ds-ui-creator
description: Guidelines for building user interfaces and components using the @worldresources/wri-design-systems library. Helps consumer app developers and AI agents apply design system standards.
---

When building components and user interfaces in an application consuming the WRI Design System:

1. **Verify Component Availability (Hierarchy)**:
   Always follow this hierarchy for every UI element:
   - **Level 1: WRI Design System** — Check Storybook/docs first. If a WRI DS wrapper exists (e.g., `Button`, `IconButton`, `Select`, `TextInput`), use it.
   - **Level 2: Chakra UI v3** — If no WRI DS component covers it, use standard `@chakra-ui/react` primitives.
   - **Level 3: Custom Code** — As a last resort, write custom code and add a `// [CUSTOM COMPONENT] — <reason>` comment.

2. **Retrieve Component API (Do Not Guess)**:
   - Use Storybook MCP or check the style guide to find the correct props, variants, and behaviors for WRI DS components.
   - Use Chakra MCP to confirm Chakra v3 props (do not use Chakra v2 properties like `colorScheme`, `isDisabled`, or `leftIcon`).

3. **Enforce Design Tokens (No Hardcoding)**:
   Import tokens directly from the `@worldresources/wri-design-systems` package:
   ```typescript
   import {
     getThemedColor,
     getThemedSpacing,
     getThemedRadius,
     getThemedBorderWidth,
     getThemedFontSize,
     getThemedLineHeight,
   } from '@worldresources/wri-design-systems';
   ```
   - Never use raw hex codes (e.g., `#2C7D6E`), `px`, `rem`, or `em` for spacing, border radii, border widths, or font sizes.
   - Use token functions, e.g., `getThemedColor('primary', 500)`, `getThemedSpacing(400)`, `getThemedRadius(300)`.

4. **Preserve Visual Consistency (No Style Overrides)**:
   - Do not use `sx`, `css`, `style`, or `className` to override WRI Design System component styles. Use them as-is to maintain system-wide coherence.

5. **Implement Accessibility (A11y) First**:
   - **Accessible Names**: Provide `aria-label` or `aria-labelledby` for all icon-only buttons, tooltip triggers, and inputs without visible labels.
   - **Form Fields**: Use the design system's built-in `label` prop. For validation errors, set `aria-invalid={true}` and wire up `aria-describedby` pointing to the error message.
   - **State Representation**: For dropdowns, drawers, and accordion elements, explicitly handle state with `aria-expanded={isOpen}` and `aria-controls`.
   - **Keyboard Navigation**: Ensure custom elements maintain a logical tab order and support keyboard activation (`Space` and `Enter` keys).
