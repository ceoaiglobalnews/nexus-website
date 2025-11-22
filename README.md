# Nexus Health Operations Website

Official website for Nexus Health Operations - Healthcare Digital Transformation Advisory serving NHS and Middle East markets.

## 🏥 About

Nexus Health Operations provides operational excellence in healthcare digital transformation, specializing in:
- Electronic Patient Record (EPR) implementations (Epic, Oracle Health)
- Data platform integration
- AI-enabled clinical workflows
- Digital transformation delivery

**Markets Served:** NHS (UK), Saudi Arabia, UAE, Qatar

## 🚀 Quick Start

This is a static website that requires no build process for basic deployment.

### Prerequisites
- Web server (Apache, Nginx, or any static file server)
- Optional: Node.js (for development tools and optimization)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ceoaiglobalnews/nexus-website.git
cd nexus-website
```

2. Serve locally using any static server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
nexus-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── images/             # Local image assets
│   ├── hero.jpg
│   ├── mission.jpg
│   └── ...
├── og-image.jpg        # Social media preview image
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure for SEO
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## ⚙️ Configuration

### Contact Form Setup

The contact form uses Formspree for backend handling. To set up:

1. Create a free account at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `index.html` line 1452:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID

Alternatively, you can configure your own form backend by updating the action URL.

### Analytics (Optional)

To add Google Analytics or other analytics:

1. Add tracking code in `index.html` before closing `</head>` tag
2. Example for Google Analytics:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🎨 Customization

### Colors
CSS custom properties are defined in `styles.css` (lines 64-76):
```css
:root {
    --navy-dark: #0a1628;
    --navy-medium: #1a2942;
    --blue-bright: #00d4ff;
    --blue-electric: #0099ff;
    --purple-neon: #a855f7;
    --teal-bright: #00ffcc;
    /* ... */
}
```

### Content
- Main content: Edit `index.html`
- Styles: Edit `styles.css`
- Functionality: Edit `script.js`

## 🌐 Deployment

### Static Hosting (Recommended)

Deploy to any static hosting service:

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages:**
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select source branch and root folder
4. Save

**Cloudflare Pages, AWS S3, or any CDN:**
Upload all files to your hosting service.

### Traditional Hosting
Upload all files to your web server's public directory (e.g., `public_html`, `www`, `htdocs`).

## 🔧 Development Tools (Optional)

For advanced optimization, you can set up build tools:

### Install Dependencies
```bash
npm init -y
npm install --save-dev cssnano postcss-cli terser
```

### Minify CSS
```bash
npx postcss styles.css --use cssnano -o styles.min.css
```

### Minify JavaScript
```bash
npx terser script.js -c -m -o script.min.js
```

### Update HTML References
Change `index.html` to reference minified files:
```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

## ✅ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Accessibility compliant (ARIA labels, skip links, keyboard navigation)
- ✅ SEO optimized (meta tags, structured data, semantic HTML)
- ✅ Performance optimized (lazy loading, debounced scroll events)
- ✅ Modern CSS (Grid, Flexbox, Custom Properties, Animations)
- ✅ Cookie consent banner (GDPR compliant)
- ✅ Interactive FAQ accordion
- ✅ Floating CTA button
- ✅ Smooth scroll navigation
- ✅ Form validation

## 🐛 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

© 2025 Nexus Health Operations. All rights reserved.

## 📧 Contact

**Email:** bruno.nexusoperations@gmail.com
**Website:** https://nexushealthoperations.co.uk

## 🤝 Contributing

This is a private business website. For issues or suggestions, please contact the development team.

## 📝 Changelog

### Version 1.1.0 (2025-11-22)
- Extracted CSS to separate file for better maintainability
- Extracted JavaScript to separate file with improvements
- Implemented scroll debouncing for better performance
- Replaced magic numbers with named constants
- Added form validation with UX feedback
- Optimized images with lazy loading
- Added robots.txt and sitemap.xml
- Improved accessibility with ARIA live regions
- Created comprehensive documentation

### Version 1.0.0 (2025-01-01)
- Initial release
- Single-page marketing website
- Responsive design
- Contact form integration
