# Plan: Dynamic Font Sizing and Heavy Slide Splitting

## Goal
Make content sizing dynamic based on screen size (especially fonts), split content-heavy slides, without changing content.

## Analysis

### Current Issues
1. **Fixed font sizes** in index.css (e.g., h3: 1.4rem, table: 1.25rem, pre: 1.1rem)
2. **Fixed padding** in CinematicSlider.tsx (padding: '4rem 6rem')
3. **No breakpoints** for smaller screens
4. **Content-heavy slides** in data files with 5+ elements per slide

### Files to Modify
- `src/index.css` - Add dynamic sizing with clamp() and media queries
- `src/components/atomic/CinematicSlider.tsx` - Add responsive padding
- `src/data/day1.ts` - Split heavy slides
- `src/data/day2.ts` - Split heavy slides
- `src/data/day3.ts` - Split heavy slides  
- `src/data/day4.ts` - Split heavy slides

## Tasks

### 1. Responsive CSS (index.css)
- Add container query support for dynamic sizing
- Update h1: clamp(2rem, 4vw, 3.5rem) -> clamp(1.8rem, 3.5vw, 2.8rem)
- Update h2: clamp(1.6rem, 3vw, 2.4rem) -> clamp(1.4rem, 2.5vw, 2rem)
- Update h3: 1.4rem -> clamp(1.1rem, 1.8vw, 1.4rem)
- Update p: clamp(1rem, 1.8vw, 1.3rem) -> clamp(0.95rem, 1.5vw, 1.15rem)
- Update blockquote: clamp(1.2rem, 2.2vw, 1.8rem) -> clamp(1rem, 1.8vw, 1.5rem)
- Update table: 1.25rem -> clamp(0.9rem, 1.4vw, 1.1rem)
- Update pre: 1.1rem -> clamp(0.85rem, 1.2vw, 1rem)
- Update cinematic-list: clamp(1rem, 1.8vw, 1.3rem) -> clamp(0.9rem, 1.5vw, 1.1rem)
- Add media queries: 1024px, 768px, 480px
- Add viewport-based spacing

### 2. Responsive CinematicSlider (CinematicSlider.tsx)
- Replace fixed padding with responsive values
- Add useWindowSize hook or use viewport units
- Update slide-content-area-cinematic padding: responsive clamp()

### 3. Split Heavy Slides (Data Files)

#### Heavy slides identified:

**day1.ts:**
- slide_40_86vwnh (5 elements: h2, 3x h3)
- slide_43_cb6u4y (2 elements: h2, h3)
- slide_44_7zo0zq (6 elements: 6x p)
- slide_45_xby1hv (5 elements: 4x p)

**day2.ts:**
- Slide with table in row 184 (many elements)
- More to identify via content analysis

**day3.ts, day4.ts:**
- Analyze and split similarly

Strategy: Split slides with 4+ elements into multiple slides with related content groupings.

### 4. Additional Mobile Considerations
- Touch-friendly button sizes
- Adjusted image max-heights for smaller screens
- Horizontal scroll for tables on small screens