# Governance Pillars Carousel Component

## Overview
The `GovernancePillarsCarousel` component is an interactive slider/carousel that displays governance pillars in a visually appealing and engaging way. It replaces the previous static grid layout with a dynamic, responsive carousel.

## Features

### 🎯 Core Functionality
- **Interactive Slider**: Smooth sliding transitions between governance pillars
- **Responsive Design**: Adapts to different screen sizes (1 card on mobile, 2 on tablet, 3 on desktop)
- **Auto-play**: Automatically advances slides every 5 seconds
- **Navigation Controls**: Previous/next arrow buttons and dot indicators
- **Keyboard Navigation**: Full keyboard accessibility support

### 🎨 Visual Design
- **Card-based Layout**: Each pillar is displayed in an elegant card with hover effects
- **Image Integration**: Placeholder images with fallback support
- **Icon Integration**: SVG icons for each pillar type
- **Color Scheme**: Uses established brand colors (blue #243570 and burgundy #621444)
- **Smooth Animations**: Framer Motion animations for enhanced user experience

### ♿ Accessibility
- **ARIA Labels**: Proper accessibility labels for screen readers
- **Keyboard Navigation**: Arrow keys and tab navigation support
- **Focus Management**: Clear focus indicators for all interactive elements
- **Screen Reader Support**: Descriptive messages for navigation elements

## Usage

```jsx
import GovernancePillarsCarousel from '@/components/GovernancePillarsCarousel'

// In your component
<GovernancePillarsCarousel pillars={governanceRisk.pillars} />
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `pillars` | Array | Yes | Array of pillar objects with `title` and `text` properties |

## Pillar Object Structure

```javascript
{
  title: "Family Charter",
  text: "Clearly defined principles outlining the family's vision, values, succession planning, and engagement in investment decisions."
}
```

## Responsive Breakpoints

- **Mobile (< 768px)**: 1 slide visible, navigation arrows hidden
- **Tablet (768px - 1024px)**: 2 slides visible
- **Desktop (> 1024px)**: 3 slides visible, navigation arrows visible

## Customization

### Icon Mapping
The component automatically maps pillar titles to appropriate icons:
- Family Charter → DocumentTextIcon
- Board Oversight → UserGroupIcon
- Investment Committees → PresentationChartLineIcon
- Transparent Reporting → ChartBarIcon
- Segregation of Duties → ShieldCheckIcon
- Internal Audit and Compliance → ClipboardDocumentCheckIcon

### Styling
The component uses Tailwind CSS classes and includes custom CSS for Swiper-specific styling. Key style features:
- Hover effects on cards
- Smooth transitions
- Custom pagination bullets
- Responsive navigation buttons

## Dependencies

- **Swiper.js**: For carousel functionality
- **Framer Motion**: For animations
- **Heroicons**: For navigation icons
- **Next.js Image**: For optimized image loading

## Browser Support

The component supports all modern browsers and includes fallbacks for:
- CSS Grid (fallback to flexbox)
- Modern JavaScript features
- Touch/swipe gestures on mobile devices

## Performance Considerations

- **Lazy Loading**: Images are loaded as needed
- **Optimized Animations**: Uses CSS transforms for smooth performance
- **Minimal Re-renders**: Efficient React rendering patterns
- **Touch Optimization**: Optimized for mobile touch interactions
