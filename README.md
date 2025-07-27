# Al Mirqab Capital - Corporate Website

A modern, responsive corporate website for Al Mirqab Capital built with Next.js, Tailwind CSS, and Framer Motion. The design follows the Herrington demo aesthetic with desaturated corporate photography, clean typography, and subtle scroll animations.

## 🚀 Tech Stack

- **Next.js 14** - React framework with routing and optimization
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful hand-crafted SVG icons

## 🎨 Design Features

- **Herrington-inspired aesthetic** - Desaturated corporate photography and clean design
- **Responsive design** - Mobile-first approach with custom breakpoints
- **Smooth animations** - Fade-in effects and hover transitions
- **Custom color palette** - Primary (#0A1F44), Accent (#C9A66B), Charcoal (#1F2937)
- **Typography** - Inter font with custom prose styling

## 📁 Project Structure

```
├── components/
│   ├── HeroBanner.jsx      # Reusable hero banner component
│   └── Navigation.jsx      # Main navigation component
├── pages/
│   ├── index.jsx           # Homepage
│   ├── vision-mission.jsx  # Vision & Mission page
│   ├── governance-risk.jsx # Governance & Risk page
│   ├── investment-portfolio.jsx
│   ├── investment-asset-classes.jsx
│   ├── people-human-capital.jsx
│   └── contact.jsx         # Contact form page
├── utils/
│   └── content.js          # All page content as JS objects
├── styles/
│   └── globals.css         # Global styles and utility classes
└── public/images/          # Hero banner images
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages Overview

### 1. **Homepage** (`/`)
- Hero section with company introduction
- Navigation grid to all pages
- Gradient backgrounds and smooth animations

### 2. **Vision & Mission** (`/vision-mission`)
- Company vision statement
- Mission points with bullet animations
- Values grid with cards

### 3. **Governance & Risk** (`/governance-risk`)
- Governance pillars grid
- Risk framework accordion
- Additional safeguards section

### 4. **Investment Portfolio** (`/investment-portfolio`)
- Numbered sector cards
- Sustainability section
- Download CTA button

### 5. **Investment Asset Classes** (`/investment-asset-classes`)
- Vertical list of asset class cards
- Alternating animations
- Strategic allocation CTA

### 6. **People & Human Capital** (`/people-human-capital`)
- Principles bullets
- Development framework grid
- Future leaders and culture sections
- Join team CTA

### 7. **Contact** (`/contact`)
- Contact form with validation
- Office information cards
- Business hours

## 🎯 Key Components

### HeroBanner
- Full-width hero images
- Responsive height classes
- Fade-in animation
- Accessibility features

### Navigation
- Sticky navigation bar
- Mobile hamburger menu
- Smooth transitions
- Company logo

## 🎨 Styling System

### Custom Colors
```css
primary: #0A1F44    /* Deep blue */
accent: #C9A66B     /* Gold */
charcoal: #1F2937   /* Dark gray */
secondary: #F5F5F5  /* Light gray */
```

### Utility Classes
```css
.btn-primary        /* Primary button style */
.btn-secondary      /* Secondary button style */
.card              /* Card component style */
.section-padding   /* Consistent section spacing */
.container-max     /* Max width container */
.hero-height       /* Responsive hero heights */
```

### Responsive Breakpoints
- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation
- Optimized images

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for hero banners
- Keyboard navigation support
- Focus states for interactive elements
- Screen reader friendly

## 🚀 Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## 📝 Content Management

All content is stored in `/utils/content.js` as JavaScript objects, making it easy to:
- Update text content
- Add new sections
- Maintain consistency
- Support future i18n implementation

## 🖼️ Images

Hero banner images are located in `/public/images/`. Current placeholders should be replaced with:
- High-quality corporate photography
- Desaturated color palette
- Professional business settings
- Minimum 1920x550px resolution

## 🔧 Customization

To customize the website:
1. Update colors in `tailwind.config.js`
2. Modify content in `utils/content.js`
3. Replace hero images in `public/images/`
4. Adjust animations in component files

## 📄 License

This project is proprietary to Al Mirqab Capital.

---

Built with ❤️ using Next.js and Tailwind CSS
