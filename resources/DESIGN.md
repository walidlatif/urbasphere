---
name: Tectonic Precision
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dddddd'
  on-secondary-container: '#606161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#370e00'
  on-tertiary-container: '#e05814'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 110%
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 120%
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '800'
    lineHeight: 140%
    letterSpacing: 0.1em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.2em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 110%
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is built for the architectural and heavy construction sector, where reliability, structural integrity, and premium craftsmanship are paramount. The aesthetic is rooted in **Modernism** and **Architectural Brutalism**, utilizing a rigid geometric framework that mimics blueprint layouts and structural steel.

The UI avoids the "softness" of typical consumer SaaS, instead opting for sharp 90-degree angles, heavy typographic weights, and a monochromatic palette that feels as permanent as concrete. The mood is authoritative, precise, and uncompromisingly professional, targeting high-value institutional and industrial clients.

## Colors

The palette is strictly architectural, relying on a grayscale foundation to communicate stability and scale.

- **Primary & Neutral:** Black and Charcoal Black serve as the foundation for typography and structural elements.
- **Surface:** Concrete Light Gray (#F0F0F0) is the default background, providing a tactical, material feel. 
- **Accent:** A single, vibrant Orange (#F26522) is used sparingly. It functions as a "surveyor's mark"—identifying critical paths, active states, and calls to action without overwhelming the professional austerity of the site.
- **Grids:** Use Steel Gray (#7A7A7A) at 10-20% opacity for the background blueprint lines.

## Typography

The typographic hierarchy is designed for maximum impact and legibility. 

- **Headlines:** Use **Anton** for all major headings. Its condensed, vertical nature evokes the height of skyscrapers and industrial force. It must always be set in Uppercase.
- **Body & Labels:** Use **Hanken Grotesk** for readability. It provides a sharp, contemporary contrast to the heavy headers.
- **Spacing:** Significant tracking (letter-spacing) should be applied to small labels and "headline-sm" to mimic architectural labeling found on technical drawings.

## Layout & Spacing

The layout follows a **Fixed 12-Column Grid** for desktop and a **4-Column Grid** for mobile. 

- **Grid Lines:** Every page should feature subtle vertical and horizontal lines (0.5px Steel Gray) that define the margins and gutters, creating a "living blueprint" effect.
- **Alignment:** Content must strictly adhere to the grid. Use hard edges and avoid offset alignments.
- **Negative Space:** Use generous vertical padding between sections (120px+) to allow the heavy typography to breathe and maintain a premium, gallery-like feel.

## Elevation & Depth

This design system rejects the use of drop shadows and blurs. Depth is achieved through **Tonal Layering** and **Line Work**.

- **Flat Planes:** Elements do not "float"; they sit flush against the background or are inset.
- **Border Hierarchy:** Use 1px solid borders in Black or Charcoal to define containers.
- **Overlays:** Instead of shadows, use solid Charcoal Black blocks or high-contrast Steel Gray containers to denote separate functional areas.
- **Interaction:** Depth is indicated by color fills (e.g., a button filling with solid black on hover) rather than rising off the page.

## Shapes

The shape language is strictly **Rectilinear**. 

- **Corner Radius:** Every element—from buttons to input fields to cards—must have a 0px border radius. 
- **Dividers:** Use thin (1px) horizontal and vertical lines. Use the Orange accent for dividers that separate primary navigation or section titles.
- **Geometric Accents:** Small 45-degree angle crops can be used on decorative elements to mimic the slope of the logo's "roof" and "arrow" motifs.

## Components

### Header
- **Background:** Solid White or very light Concrete Gray.
- **Structure:** 1px Black bottom border. Left-aligned logo, center-aligned nav links (Label-caps), and a right-aligned 'Demander un devis' CTA.
- **CTA:** Solid Black background, White text, 0px radius.

### Footer
- **Background:** Charcoal Black (#121212).
- **Structure:** 4-column layout separated by 1px Steel Gray vertical lines.
- **Logo:** Use the White version of the logo. Include "Contractors" secondary mark.

### Premium Service/Project Cards
- **Structure:** Image on top (full bleed within card), typography below.
- **Details:** Use "headline-sm" for categories and "headline-md" for project names.
- **Hover:** A subtle 4px Orange bottom border appears on hover.

### CTA Buttons
- **Primary:** Solid Black, White text, Uppercase. Includes a small Orange arrow (→) on the right side.
- **Secondary:** Outlined 1px Black, Black text, Uppercase.
- **Active State:** On hover, the background remains, but the Orange arrow shifts 4px to the right.

### Form Inputs
- **Style:** Underlined only (1px Black) or full-box with 1px Black border. No background fill.
- **Labels:** Small caps (Label-caps) positioned above the input.
- **Focus:** The bottom border changes to Orange.

### Architectural Grid Lines
- A background layer component that renders a light grid across the entire viewport. Lines should be 0.5px and coincide with the 24px gutter system.