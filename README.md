# Portfolio Template - ResuMate Style

A pixel-perfect, responsive portfolio template built with React, TypeScript, and Tailwind CSS. This template replicates the beautiful ResuMate design with a dark theme and smooth animations.

## ✨ Features

- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Dark Theme**: Beautiful dark color scheme with mint green accents  
- **Interactive Animations**: Smooth hover effects and scroll-triggered animations
- **Content-Driven**: All content loaded from JSON data file
- **Accessible**: Semantic HTML, keyboard navigation, screen reader support
- **Performance Optimized**: Lazy loading, WebP images, smooth animations

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── assets/                 # Images and static assets
│   ├── profile-600.webp   # Profile photo
│   └── projects/          # Project thumbnails
├── components/            # React components
│   ├── ProfileCard.tsx    # Left sidebar profile
│   ├── Hero.tsx          # Hero section with title
│   ├── StatsRow.tsx      # Statistics counter row
│   ├── ExperienceSection.tsx
│   ├── ProjectsGrid.tsx  # Projects showcase
│   ├── EducationSection.tsx
│   ├── ToolsGrid.tsx     # Skills/tools grid
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx        # Site footer
├── data.json             # Content data file
└── pages/Index.tsx       # Main page layout
```

## 🎨 Customization

### 1. Replace Profile Content

Edit `src/data.json` to update:

```json
{
  "profile": {
    "name": "Your Name",
    "status": "Available for work",
    "titleLines": ["I'm Your Name,", "Your Title", "Based in Your Location"],
    "about": "Your bio description...",
    "social": [...],
    "cvUrl": "path/to/your/cv.pdf"
  }
}
```

### 2. Update Profile Photo

Replace `src/assets/profile-600.webp` with your photo:
- **Recommended size**: 600x600px
- **Format**: WebP for best performance, JPEG fallback
- **Aspect ratio**: Square (1:1)

### 3. Add Your Projects

Update the projects array in `data.json` and add project thumbnails to `src/assets/projects/`:
- **Recommended size**: 1200x750px (16:10 aspect ratio)
- **Format**: WebP preferred
- **Naming**: Use descriptive filenames

### 4. Customize Colors & Theme

The design system is defined in `src/index.css`. Update CSS variables:

```css
:root {
  --accent: 152 85% 52%;     /* Change primary accent color */
  --bg: 0 0% 2%;             /* Page background */
  --text: 0 0% 100%;         /* Primary text color */
  --text-muted: 0 0% 100% / 0.6; /* Secondary text */
}
```

### 5. Typography Customization

Fonts are configured in `src/index.css`:

```css
--font-heading: "Poppins", system-ui, sans-serif;
--font-body: "Inter", system-ui, sans-serif;
```

Update the Google Fonts import in `index.html` if changing fonts.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (narrow left column) 
- **Desktop**: > 1024px (two-column layout)
- **Large**: > 1200px (optimized spacing)

## ♿ Accessibility Features

- Semantic HTML structure (`<main>`, `<section>`, `<aside>`)
- Keyboard navigation support
- Screen reader compatible
- Color contrast compliance
- Focus management
- Alt text for all images
- ARIA labels for interactive elements

## 🎭 Animation Features

- **Page Load**: Staggered fade-up animations
- **Stats Counter**: Count-up animation on scroll
- **Hover Effects**: Card lifts, button scales
- **Reduced Motion**: Respects user preferences

## 🔧 Technical Details

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: CSS-based with Intersection Observer
- **Images**: Responsive with srcset support
- **Forms**: Accessible with validation

## 📞 Contact Form

The contact form includes client-side validation and shows success messages. To add backend functionality:

1. Update the `handleSubmit` function in `ContactSection.tsx`
2. Add your email service endpoint
3. Handle form validation server-side

## 🚀 Deployment

This template works with any static hosting service:

- **Vercel**: Connect GitHub repo for auto-deploy
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Traditional hosting**: Upload `dist` folder contents

## 📄 Browser Support

- **Modern browsers**: Chrome 90+, Firefox 90+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Android Chrome 90+
- **Graceful degradation**: Older browsers get simplified experience

## 🎯 Performance Optimizations

- Lazy loading for images
- WebP format with JPEG fallbacks  
- CSS-based animations (GPU accelerated)
- Minimal JavaScript bundle
- Efficient CSS with utility-first approach

## 📝 License

This template is free to use for personal and commercial projects. Attribution appreciated but not required.

## 🆘 Support

For questions or issues:
1. Check the browser console for errors
2. Verify all image paths in `data.json` 
3. Ensure proper image formats and sizes
4. Test responsive design at different screen sizes

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.