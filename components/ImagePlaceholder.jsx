import React from 'react'

export default function ImagePlaceholder({ width = 400, height = 200, text = "Image Placeholder", className = "" }) {
  // Create a more sophisticated placeholder with gradient and professional styling
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:0.8" />
          <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:0.4" />
        </linearGradient>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#ffffff" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)"/>
      <rect width="100%" height="100%" fill="url(#dots)"/>
      <rect x="10" y="10" width="${width - 20}" height="${height - 20}" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.2"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" opacity="0.9">
        ${text}
      </text>
      <text x="50%" y="${height/2 + 20}" font-family="Arial, sans-serif" font-size="10" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" opacity="0.6">
        Professional Image Placeholder
      </text>
    </svg>
  `

  const dataUrl = `data:image/svg+xml;base64,${btoa(svgContent)}`

  return (
    <img
      src={dataUrl}
      alt={text}
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  )
}
