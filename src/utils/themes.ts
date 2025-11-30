// Color theme presets for easy customization

export const themes = {
  default: {
    navy: '#0B1220',
    offwhite: '#F6F7FB',
    violet: '#7C4DFF',
    gray: '#8A94A6',
    mint: '#2EE6A6'
  },
  
  noir: {
    navy: '#000000',
    offwhite: '#FFFFFF',
    violet: '#333333',
    gray: '#666666',
    mint: '#999999'
  },
  
  solar: {
    navy: '#1A1A2E',
    offwhite: '#FFF8E7',
    violet: '#FF6B35',
    gray: '#A0A0A0',
    mint: '#FFD23F'
  }
}

// To use a different theme, update the colors in tailwind.config.ts
// Example: colors: themes.noir