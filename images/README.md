# Images Directory

This directory should contain all local image assets for the Nexus Health Operations website.

## Required Images

To fully optimize the website, download and optimize the following images from Unsplash (or use your own):

### Hero Section
- **hero.jpg** (1920x1080px recommended)
  - Current Unsplash: `https://images.unsplash.com/photo-1707756965230-5babf1f3ed7d?w=1920&q=80`
  - Healthcare digital transformation theme

### Mission Section
- **mission.jpg** (800x600px recommended)
  - Current Unsplash: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80`
  - Healthcare technology innovation

### Technology Showcase
- **tech-clinical.jpg** (600x450px recommended)
  - Current Unsplash: `https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80`
  - UK NHS junior doctor / Clinical engagement theme

- **tech-data.jpg** (600x450px recommended)
  - Current Unsplash: `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80`
  - Global data connectivity network

- **tech-ai.jpg** (600x450px recommended)
  - Current Unsplash: `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80`
  - Human AI collaboration

### Stats Section
- **stats.jpg** (800x600px recommended)
  - Current Unsplash: `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80`
  - Digital healthcare technology

### Differentiation Section (Background)
- **differentiation-bg.jpg** (1600x900px recommended)
  - Current Unsplash: `https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=80`
  - Team collaboration theme

## Image Optimization Guidelines

### Format Recommendations
1. **Use WebP format** for better compression (fallback to JPG for older browsers)
2. **Use AVIF format** for even better compression (optional, cutting edge)
3. Keep **JPG as fallback** for maximum compatibility

### Optimization Tools

**Command Line:**
```bash
# Convert to WebP
cwebp -q 80 input.jpg -o output.webp

# Resize and optimize JPG
convert input.jpg -resize 1920x1080 -quality 80 output.jpg
```

**Online Tools:**
- [TinyPNG](https://tinypng.com/) - Easy drag-and-drop optimization
- [Squoosh](https://squoosh.app/) - Advanced optimization controls
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimization

**Node.js (automated):**
```bash
npm install --save-dev imagemin imagemin-webp imagemin-mozjpeg

# Create optimization script
node scripts/optimize-images.js
```

### Size Targets
- Hero images: < 200KB
- Section images: < 100KB
- Small cards/thumbnails: < 50KB

### Naming Convention
Use descriptive, SEO-friendly names:
- ✅ `healthcare-digital-transformation-hero.jpg`
- ✅ `nhs-doctor-clinical-engagement.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo1.jpg`

## After Adding Images

Once you've added optimized images to this directory, update the image references in:

1. **index.html** - Replace Unsplash URLs with local paths
2. **styles.css** - Update background image URLs (hero, differentiation sections)

Example:
```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-1707756965230-5babf1f3ed7d?w=1920&q=80"
     alt="Healthcare digital transformation">

<!-- After -->
<img src="images/hero.jpg"
     alt="Healthcare digital transformation"
     loading="lazy"
     width="1920"
     height="1080">
```

## Social Media Image

Don't forget to create **og-image.jpg** (1200x630px) in the root directory for social media sharing!
