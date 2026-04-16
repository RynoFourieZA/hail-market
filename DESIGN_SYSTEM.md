# The Augmented Precision Framework (APF)
## HAIL Marketplace Design System

### Overview

The Augmented Precision Framework is a comprehensive design system for the HAIL (Human Artificial Intelligence Labor) marketplace, moving away from rigid grid-based SaaS layouts toward **Breathable Complexity**. The system emphasizes asymmetry, negative space, and tonal layering over explicit borders.

---

## 1. Philosophy: "The Digital Curator"

**Creative North Star**: Breathable Complexity

The UI treats the interface as a series of layered, light-refracting surfaces where:
- Negative space highlights critical data (budgets, labor levels, XP progression)
- Asymmetry creates visual tension and interest
- Tonal shifts replace hard boundaries
- Glassmorphism and gradient overlays evoke AI-powered futurism

---

## 2. Color System

### Primary Colors
```
Primary:                #004cca (50.12% lightness, saturated blue)
Primary Container:      #0062ff (brighter, higher velocity)
On Primary (Variant):   #003ea8 (darker, high contrast)
Surface Tint:           #0053da (base color for 2-5% opacity overlays)
```

### Surface Hierarchy
```
Base Background:        #f8f9ff (cool white, very light blue tint)
Surface Container Low:  #eff4ff (subtle section background)
Surface Container Low:  #ffffff (interactive cards, floating)
Surface Container High: #d3e4fe (active states, AI highlights)
```

### Semantic Colors
```
On Surface:             #0b1c30 (primary text, never pure black)
Outline Variant:        #c2c6d9 (ghost borders at 15% opacity only)
Tertiary Fixed Dim:     #4cd6ff (AI Insight chip background)
On Tertiary Fixed:      #001f28 (AI Insight chip text)
```

### The "No-Line" Rule
**Explicit Instruction**: Zero 1px solid borders for sectioning. All structural separation uses background color shifts through the surface hierarchy:
- Section dividers: Use `surface-container-low` vs base background
- Card separation: `surface-container-lowest` cards float on `surface-container-low` containers
- Advanced separations: Use opacity shifts of `on-surface` color

---

## 3. Typography System

### Font Strategy
- **Display & Headlines**: Manrope (geometric modernism, -2% letter tracking)
  - `h1`: 2.25rem, font-bold
  - `h2`: 1.875rem, font-bold
  - `h3`: 1.5rem, font-bold

- **Body & UI**: Inter (maximum legibility for data-dense content)
  - Text: 0.875rem - 1rem
  - Labels: 0.75rem - 0.875rem
  - UI: 0.813rem (10px equivalent)

### High-Contrast Data
Budget, Level, and critical metrics use:
- `on-primary-fixed-variant` (#003da8) or `on-surface` (#0b1c30)
- Font weight: bold or semibold
- Class: `.data-highlight` for consistent styling

---

## 4. Elevation & Depth: Tonal Layering

### The Layering Principle
Instead of drop shadows, create perceived depth through tonal shifts:
- Place `surface-container-lowest` card on `surface-container-low` background
- Subtle hex transitions create a "soft lift" without weight

### Ambient Shadows
For elements that must visually float (drawers, overlays):
```css
box-shadow: 0 40px 16px rgba(11, 28, 48, 0.06);
hover: 0 40px 24px rgba(11, 28, 48, 0.1);
```
- 40px blur (soft environmental feel)
- 0% spread (natural edge)
- 6% opacity (environmental tint)

### The Ghost Border
When accessibility requires a stroke (high-glare environments):
```css
border: 1px solid rgb(194, 198, 217, 0.15);
/* outline-variant at 15% opacity */
```

---

## 5. Component Specifications

### Buttons
**Primary (CTA)**
- Gradient: from `primary-hail` to `primary-container` (135° angle)
- Roundedness: `rounded-xl` (1.5rem)
- Text: white, bold, uppercase on hover
- Shadow: `0 8px 16px rgba(0, 76, 202, 0.2)` on hover
- NO solid fill shadow in default state

**Secondary**
- Background: `surface-container-highest`
- Text: `primary-hail`
- Soft interactive area, doesn't compete with primary CTA

**Tertiary (Ghost)**
- No background
- Text: `primary-hail`
- Underline: on hover only

### Cards & Lists
**Constraint**: Zero divider lines
**Separation**: 1.5rem - 2rem vertical white space between list items
**Heavy Data Tables**: Alternate `surface` and `surface-container-low` rows

### Input Fields
- Fill: `surface-container-low`
- On Focus: transition to `surface-container-lowest` with `primary-hail` 2px bottom bar
- Roundedness: 0.75rem (md)
- No full border; bottom-bar only on active state

### The "AI Insight" Chip (Special)
- Background: `tertiary-fixed-dim` at 70% opacity with 20px backdrop blur
- Text: `on-tertiary-fixed`
- Roundedness: 9999px (full)
- Purpose: Highlight AI-powered tasks and insights

### Glassmorphism
For overlays and header:
- Background: `surface-container-lowest` at 70% opacity
- Backdrop Filter: `blur(20px)`
- Subtle shadow below for separation
- **Header Example**: 
  ```css
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  box-shadow: 0 40px 0 0 rgba(11, 28, 48, 0.06);
  ```

---

## 6. Do's and Don'ts

### ✅ Do

1. **Embrace Asymmetry**
   - Left-align headlines, right-align secondary data
   - Create visual tension through layout choices
   - Use the Bento grid (2+1 col, then 1+1+1 col layouts)

2. **Use Larger Type for Labels**
   - Traditionally small labels: use `headline-sm` or `title-md`
   - Bigger type = more confidence in the marketplace

3. **Use Surface Tint for Atmosphere**
   - `surface-tint` (#0053da) at 2-5% opacity over white backgrounds
   - Creates a cool, professional blue-tinted atmosphere

4. **Maximize Spacing**
   - Use 1.5rem - 2rem gaps for breathing room
   - Negative space = premium feel

5. **Implement Tonal Depth**
   - Stack background colors from base → container-low → container-lowest
   - Avoid artificial drop shadows

### ❌ Don't

1. **Never Use Pure Black**
   - Replace `#000000` with `on-surface` (#0b1c30)
   - Maintain slate-blue professional tone throughout

2. **No Small Border Radius on Large Containers**
   - `DEFAULT` (0.625rem) radius is for small buttons only
   - Large containers: use `rounded-xl` (1.5rem)
   - Maintains the "Soft Minimalist" aesthetic

3. **Don't Mix Tonal Layers Excessively**
   - Maximum 3 levels of surface nesting
   - Beyond that: use `backdrop-blur` overlays instead

4. **No Solid 1px Borders**
   - Not allowed anywhere (period)
   - Use background color shifts or 15% opacity outline-variant only

5. **No Flat Design**
   - Always use gradients for CTAs (primary → primary-container)
   - Always layer elements tonally
   - Depth is intentional, not accidental

---

## 7. Implementation Guide

### CSS Variables (Tailwind Custom Properties)

All colors available as Tailwind utilities:
```
text-primary-hail
text-on-surface
bg-surface-container-low
bg-surface-container-lowest
bg-surface-container-highest
text-tertiary-fixed-dim
```

### Typography Classes

**Headings**: Use `font-display` (Manrope) for all h1-h6
**Body**: Use `font-sans` (Inter) by default
**Data Highlights**: Apply `.data-highlight` for high-contrast metrics

### Shadow System

**Soft Ambient Shadow** (cards):
```js
shadow-[0_40px_16px_rgba(11,28,48,0.06)]
hover:shadow-[0_40px_24px_rgba(11,28,48,0.1)]
```

**Gradient Button Hover**:
```js
hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]
```

### Gradient Direction

All gradients use **135-degree angle** (top-left to bottom-right):
```js
bg-gradient-to-135 from-primary-hail to-primary-container
```

---

## 8. Component Library Status

### Updated Components
- ✅ **Header** — Glassmorphic navigation with transparent background & blur
- ✅ **TaskCard** — Tonal layering, no borders, gradient CTAs
- ✅ **PremiumTaskCard** — Glass & gradient rule implemented
- ✅ **Sidebar** — Surface hierarchy, no divider lines
- ✅ **FilterBar** — Pill buttons with tonal backgrounds
- ✅ **TaskGrid** — 1.5rem gap spacing for breathable complexity
- ✅ **LevelProgress** — Tonal card styling with proper hierarchy
- ✅ **Button (shadcn)** — All variants updated to match APF

### Established Color Tokens
All surface colors, semantic colors, and typography weights fully integrated into Tailwind theming.

---

## 9. Quality Checklist

Before shipping components, verify:
- [ ] No 1px solid borders anywhere
- [ ] All text uses `on-surface` or semantic colors (never pure black)
- [ ] Large containers have `rounded-xl` (1.5rem minimum)
- [ ] Gradient CTAs use 135° angle
- [ ] Shadows use ambient 40px blur ratio (never 8px+)
- [ ] Headings use Manrope via `font-display`
- [ ] Data metrics have `.data-highlight` class
- [ ] Surface nesting doesn't exceed 3 levels
- [ ] Glassmorphism uses 20px blur + 70% opacity
- [ ] Spacing is 1.5rem - 2rem minimum between sections

---

## 10. Design Philosophy Summary

The Augmented Precision Framework rejects traditional SaaS rigidity in favor of:

1. **Breathable Complexity** — Negative space as a first-class design element
2. **Tonal Depth** — Color shifts instead of borders
3. **Editorial Authority** — Manrope headlines command respect
4. **Glassmorphic Futurism** — Overlays feel next-generation
5. **AI Visibility** — Gradients and special chips highlight AI intent
6. **Professional Stability** — Slate-blue palette conveys trustworthiness

This system makes the HAIL marketplace feel like a **premium, AI-native platform**, not a generic SaaS clone.

---

**Framework Version**: 1.0  
**Last Updated**: April 14, 2026  
**Maintained By**: HAIL Design System Team
