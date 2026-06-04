---
name: Azure Horizon
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3c494c'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6c797c'
  outline-variant: '#bbc9cc'
  surface-tint: '#006876'
  primary: '#006876'
  on-primary: '#ffffff'
  primary-container: '#00bcd4'
  on-primary-container: '#004650'
  inverse-primary: '#44d8f1'
  secondary: '#215abd'
  on-secondary: '#ffffff'
  secondary-container: '#6a98ff'
  on-secondary-container: '#002f74'
  tertiary: '#8f4e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#f19640'
  on-tertiary-container: '#633400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a1efff'
  primary-fixed-dim: '#44d8f1'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e59'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001945'
  on-secondary-fixed-variant: '#00429b'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77b'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  action-orange: '#FF811B'
  surface-glass: rgba(255, 255, 255, 0.7)
  deep-navy: '#0F172A'
  vibrant-blue: '#00B3FF'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style
The brand personality is professional, forward-thinking, and technologically sophisticated. It targets businesses looking for a premium digital presence that balances local trust with global quality standards.

The design style is **Corporate Modern with Glassmorphism**. This aesthetic utilizes translucent layers and vibrant background blurs to create depth. Surfaces appear like frosted glass, paired with high-end tech flourishes like subtle mesh gradients and precise, thin-line iconography. The interface should feel "glossy" and expensive, prioritizing clarity and high-contrast readability against a backdrop of deep navy and bright white space.

## Colors
The palette is anchored by a vibrant **Teal/Blue primary (#00BCD4)** used for key interactions and brand highlights. To achieve a "high-end tech" feel, we introduce a **Deep Navy (#0F172A)** as the primary neutral for text and high-contrast sections, replacing standard blacks.

- **Primary:** Teal/Blue for primary buttons, active states, and focus indicators.
- **Secondary:** Deep Blue used for gradients and background depth.
- **Surface:** Plenty of pure white space for layout, while "Glass" containers use semi-transparent white with a 20px-40px backdrop blur.
- **Accents:** An orange-gold is reserved strictly for high-urgency CTAs (like "Save 23%") to ensure maximum conversion visibility without breaking the premium cool-toned aesthetic.

## Typography
We utilize **Inter** for its exceptional legibility and modern, "tech-first" appearance. The hierarchy is clean and structured.

- **Headlines:** Use tight letter spacing and bold weights to command attention. Display styles should use a deep navy color.
- **Labels:** Small caps or increased letter spacing should be used for overlines (e.g., "KINH NGHIỆM") to create an editorial feel.
- **Body Text:** Use a slightly lighter gray on dark backgrounds and deep navy on light backgrounds to maintain optimal contrast. 
- **Numerical Data:** Pricing and statistics should use Semi-Bold or Bold weights to stand out as primary information drivers.

## Layout & Spacing
The layout follows a **12-column fluid grid** for desktop, transitioning to a 4-column grid for mobile. 

- **White Space:** Heavy vertical padding between sections (120px on desktop) is essential to maintain the "premium" feel.
- **Content Alignment:** Mix centered layouts for hero and pricing sections with asymmetrical, multi-column layouts for service details to keep the visual flow dynamic.
- **Safe Margins:** A minimum margin of 24px on mobile and 80px on desktop ensures content never feels cramped against the screen edges.

## Elevation & Depth
Visual hierarchy is achieved through a mix of **Glassmorphism** and **Ambient Shadows**.

1.  **Base Layer:** Solid white or subtle light-gray (#F8FAFC) backgrounds.
2.  **Mid Layer (Cards):** Frosted glass surfaces using `backdrop-filter: blur(20px)` and a thin 1px white border (20% opacity). This creates a "floating" effect.
3.  **Shadows:** Use extremely soft, large-spread shadows with a tint of the secondary navy color (e.g., `box-shadow: 0 20px 40px rgba(0, 74, 173, 0.1)`). Shadows should feel atmospheric rather than structural.
4.  **Interactive Depth:** On hover, cards should increase their shadow spread and scale slightly (1.02x) to provide tactile feedback.

## Shapes
The design system uses **Rounded (2xl)** geometry. 
- **Standard Cards:** 1rem (16px) corner radius.
- **Large Containers/Hero Cards:** 1.5rem (24px) corner radius.
- **Buttons:** Fully rounded (pill-shaped) to provide a soft contrast to the structured grid of the cards.
- **Icons:** Should feature rounded terminals and consistent stroke weights (2px) to match the UI's softness.

## Components

### Buttons
- **Glossy Primary:** Background gradient from `#00BCD4` to `#00B3FF`, subtle inner white glow at the top, and a pill-shaped radius.
- **Secondary (Glass):** Transparent background with a 1px white border and backdrop blur.
- **Transitions:** All buttons must have a 0.3s ease-in-out transition for background-position and shadow depth.

### Cards
- **Pricing Cards:** Feature a glassmorphic header, followed by a clean list of features with custom Teal arrow bullets (`➤`).
- **Service Cards:** Use a top-aligned professional icon and subtle hover elevation.

### Input Fields
- Underlined or softly bordered containers with a focus state that glows in the primary Teal color. Placeholders should be in a light gray with high legibility.

### Chips & Badges
- **Discount Badges:** "Save 23%" labels use a vibrant orange background with white bold text, positioned at the top-right corner of cards to break the container boundary slightly.

### Floating Action Elements
- **Contact Hub:** A sticky vertical bar or bottom-right cluster for Zalo, Phone, and Messenger, using circular glass buttons with high-contrast icons.