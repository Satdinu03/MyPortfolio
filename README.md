# Dinesh V G - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features elegant animations, dark mode support, and accessibility compliance.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion with reduced-motion support
- **Dark Mode**: Toggle between light and dark themes
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Performance**: Optimized for Lighthouse scores ≥95
- **SEO Ready**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons (SVG)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dinesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Updating Content

Edit the `src/data/site.json` file to update:
- Personal information
- Experience details
- Projects
- Skills
- Education
- Contact information

### Color Themes

The project includes three color presets in `tailwind.config.ts`:

1. **Default**: Navy, Violet, Mint
2. **Noir**: Monochromatic blacks and grays
3. **Solar**: Warm oranges and yellows

To switch themes, update the color values in the Tailwind config.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Update the navigation in `Header.tsx`

## 📱 Responsive Breakpoints

- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Reduced motion support
- High contrast ratios
- Screen reader compatibility

## 🎯 Performance Optimizations

- Code splitting with dynamic imports
- Optimized bundle sizes
- Lazy loading for images
- Preloaded critical fonts
- Minimized CSS and JavaScript

## 📄 Project Structure

```
dinesh-portfolio/
├── public/
├── src/
│   ├── components/          # React components
│   ├── data/               # Site content (JSON)
│   ├── styles/             # Tailwind CSS
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🚀 Deployment

The project builds to static files and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📊 Lighthouse Scores

Target scores (all ≥95):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting (recommended)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: satdinu08@gmail.com
- **LinkedIn**: [Dinesh V G](https://www.linkedin.com/in/dinesh-v-g-a08b5b251/)
- **Phone**: +91 76049 40354

---

Built with ❤️ by Dinesh V G