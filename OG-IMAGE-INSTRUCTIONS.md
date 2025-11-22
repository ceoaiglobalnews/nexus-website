# Open Graph Image Instructions

The website currently references `og-image.jpg` in the meta tags (lines 15 and 22 of index.html), but this file doesn't exist yet.

## What is an Open Graph Image?

The Open Graph (OG) image is displayed when someone shares your website link on social media platforms like:
- Facebook
- LinkedIn
- Twitter/X
- Slack
- WhatsApp
- etc.

## Requirements

### Dimensions
- **Recommended:** 1200 x 630 pixels
- **Aspect Ratio:** 1.91:1
- **File Format:** JPG or PNG
- **File Size:** < 1MB (ideally < 300KB)
- **Location:** Root directory (`/og-image.jpg`)

### Content Guidelines
Your OG image should include:
1. **Company name/logo:** "Nexus Health Operations"
2. **Tagline or value proposition:** e.g., "Healthcare Digital Transformation Advisory"
3. **Visual elements:** Clean, professional design
4. **Readable text:** Large enough to read in thumbnails
5. **Brand colors:** Use your gradient (blue/purple) theme

## Design Tools

### Option 1: Design Tools
- **Canva** (easiest): Search for "Open Graph" template
- **Figma**: Use 1200x630px canvas
- **Adobe Photoshop/Illustrator**: Create custom design
- **Sketch**: Design for social sharing

### Option 2: Online OG Image Generators
- [Canva Social Media Templates](https://www.canva.com/templates/)
- [Placid.app](https://placid.app/) - Template-based generator
- [Social Sizes](https://socialsizes.io/) - Reference for all social media sizes

### Option 3: Simple Screenshot
As a quick temporary solution:
1. Take a screenshot of your hero section
2. Crop to 1200x630px
3. Optimize file size
4. Save as `og-image.jpg` in root directory

## Example Design Layout

```
┌─────────────────────────────────────────────┐
│                                             │
│     🏥 NEXUS HEALTH OPERATIONS             │
│                                             │
│     Healthcare Digital Transformation       │
│     Advisory                                │
│                                             │
│     NHS | Saudi Arabia | UAE | Qatar        │
│                                             │
│     [Gradient background with             │
│      subtle healthcare imagery]            │
│                                             │
└─────────────────────────────────────────────┘
         1200px x 630px
```

## Design Specifications

### Colors (from your brand)
- Navy Dark: `#0a1628`
- Blue Bright: `#00d4ff`
- Blue Electric: `#0099ff`
- Purple Neon: `#a855f7`
- Use your gradient: `linear-gradient(135deg, #00d4ff 0%, #0099ff 50%, #a855f7 100%)`

### Typography
- Use clean, modern sans-serif fonts
- Headlines: 48-72px
- Subtext: 24-36px
- Ensure high contrast for readability

## Testing Your OG Image

After creating and uploading `og-image.jpg`:

1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/
3. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
4. **Generic OG Tester:** https://www.opengraph.xyz/

Simply paste your URL and these tools will show you how the image appears.

## Quick Checklist

- [ ] Create image at 1200x630px
- [ ] Include "Nexus Health Operations" branding
- [ ] Use brand colors (blue gradient theme)
- [ ] Add descriptive tagline
- [ ] Optimize file size (< 300KB)
- [ ] Save as `og-image.jpg` in root directory
- [ ] Test with Facebook Debugger
- [ ] Clear cache if updating existing image

## File Location

Place the file at:
```
/home/user/nexus-website/og-image.jpg
```

The HTML already references it correctly in `index.html`:
```html
<meta property="og:image" content="https://nexushealthoperations.co.uk/og-image.jpg">
<meta property="twitter:image" content="https://nexushealthoperations.co.uk/og-image.jpg">
```

## Temporary Placeholder

If you need a quick placeholder, you can:
1. Use one of your existing Unsplash images
2. Add text overlay with "Nexus Health Operations"
3. Upload as `og-image.jpg`
4. Replace with professional design later

Remember: This image is often the first impression people get of your brand on social media, so it's worth investing time in a professional design!
