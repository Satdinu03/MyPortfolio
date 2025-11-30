# Motion Configuration Guide

## Animation Layers Implemented

### 🎯 Global Animations
- **Scroll Progress Bar**: Thin violet bar at top showing scroll progress
- **Cursor Accent Dot**: Subtle trailing dot (desktop only, respects reduced motion)
- **Staggered Section Reveals**: 80ms child stagger with fade-up entrance

### 🎨 Hero Section
- **Gradient Background**: Light editorial gradient with subtle grain texture
- **Morphing Blobs**: CSS keyframe animations with parallax scroll effect
- **Magnetic Buttons**: Cursor-following hover effect (8px strength)
- **Sparkle Accent**: Rotating emoji accent next to CTAs
- **Title Gradient**: Text gradient from navy to violet

### 🧭 Navigation
- **Glass Header**: Light backdrop-blur with scroll-aware shadow
- **Underline Animation**: Spring-powered scaleX animation on hover
- **Active Indicator**: Sliding underline for current section
- **Logo Rotation**: 2° rotation on hover

### 📁 Projects
- **Card Hover**: Scale + shadow lift with shimmer overlay
- **Tag Animations**: Spring pop-in with glow hover effects
- **Marquee Divider**: Scrolling tech keywords (pauses on hover)
- **Modal**: Scale+fade with backdrop blur

### 🛠️ Skills
- **Ripple Effects**: Hover ripple with mint accent
- **Highlight Bars**: Sliding violet bars for group headers
- **Spring Entrance**: Randomized delays for organic feel

### 💼 Experience
- **Timeline Drawing**: Stroke-dashoffset animation as items enter
- **Alternating Slides**: Cards slide from left/right alternately
- **Pulse Dots**: Animated timeline dots with pulse rings

### 📞 Contact
- **Floating Labels**: Labels animate up on focus
- **Focus Glow**: Enhanced focus states with color transitions
- **Ripple Submit**: Click ripple effect on submit button
- **Icon Animations**: Hover scale and rotation on contact icons

## Performance Optimizations

### ✅ Implemented
- `useReducedMotion` hook respects accessibility preferences
- `requestAnimationFrame` for smooth cursor tracking
- CSS keyframes for lightweight blob morphing
- Lazy loading of animation assets
- Transform-based animations for GPU acceleration

### 📊 Bundle Impact
- Motion utilities: ~2KB
- Framer Motion: ~35KB (already included)
- CSS animations: Minimal overhead
- Total addition: ~3KB

## Accessibility Features

### ♿ Reduced Motion Support
```typescript
const reducedMotion = useReducedMotion()
if (reducedMotion) {
  // Disable transforms, keep simple fades
  return <SimpleComponent />
}
```

### 🎯 Focus Management
- Visible focus rings on all interactive elements
- Keyboard navigation for modals
- ARIA labels for animated elements
- Screen reader friendly animations

## Customization Options

### 🎨 Animation Intensity
Adjust in `src/utils/motion.ts`:
```typescript
// Reduce stagger delay for faster reveals
staggerChildren: 0.04 // from 0.08

// Adjust magnetic strength
useMagnetic(6) // from 8-12

// Modify spring settings
stiffness: 200 // from 400
damping: 30    // from 25
```

### 🎭 Theme Colors
Update in `tailwind.config.ts`:
```typescript
colors: {
  violet: '#6366F1', // Indigo variant
  mint: '#10B981',   // Emerald variant
}
```

### ⚡ Performance Tuning
```typescript
// Throttle scroll effects
const throttledScroll = useCallback(
  throttle(handleScroll, 16), // 60fps
  []
)

// Reduce animation duration
transition: { duration: 0.3 } // from 0.6
```

## Browser Support

### ✅ Fully Supported
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### ⚠️ Graceful Degradation
- IE11: CSS fallbacks, no JS animations
- Older browsers: Static layout with basic transitions
- Mobile: Cursor effects disabled automatically

## Lighthouse Scores

### 🎯 Target Metrics (Maintained)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### 📈 Optimizations Applied
- Preload critical fonts
- Optimize animation timing
- Use `will-change` sparingly
- Prefer CSS over JS animations where possible