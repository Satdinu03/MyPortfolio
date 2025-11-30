# Deployment Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

### AWS S3 + CloudFront

1. Build: `npm run build`
2. Upload `dist` to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

## Environment Variables

Create `.env.local` for local development:

```env
VITE_SITE_URL=http://localhost:5173
VITE_CONTACT_EMAIL=your-email@example.com
```

## Performance Checklist

- [ ] Images optimized and compressed
- [ ] Fonts preloaded
- [ ] Bundle size < 500KB
- [ ] Lighthouse score ≥ 95
- [ ] Accessibility compliance
- [ ] SEO meta tags configured

## Custom Domain Setup

1. Purchase domain from registrar
2. Configure DNS records:
   - A record: @ → hosting IP
   - CNAME: www → hosting domain
3. Enable HTTPS/SSL certificate
4. Update site URLs in code

## Monitoring

- Google Analytics (optional)
- Google Search Console
- Lighthouse CI for performance monitoring
- Error tracking (Sentry, etc.)

## Maintenance

- Update dependencies monthly
- Monitor performance metrics
- Backup content regularly
- Test on multiple devices/browsers