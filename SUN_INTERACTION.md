# Interactive Sun Component

## 🌞 **Sun Features:**

**Content Display:**
- **Center**: Your name and title from site.json
- **Circular Text**: Skills rotating around the sun (Spring Boot · React · MySQL · Git · Docker)
- **Hover Badge**: Shows CGPA and company info

**Interactions:**
- **Desktop**: Hover to expand sun (1.04x scale) and brighten rays
- **Mobile**: Tap to toggle expansion and info badge
- **Animation**: Gentle rotation (12s) with subtle parallax scrolling

**Accessibility:**
- High contrast text (#1F2937) over warm gradient background
- `prefers-reduced-motion`: Disables rotation and parallax
- Semantic cursor pointer and tap targets
- Readable fallback text always visible

## 🎯 **Behavior:**

**Light Mode**: Interactive sun at top-left with your details
**Dark Mode**: Clean starfield only (no sun)

**Performance**: 
- Lightweight SVG with minimal DOM
- Throttled scroll events
- Mobile-optimized star count (100 vs 140)

The sun serves as both decoration and an interactive business card showcasing your key information!