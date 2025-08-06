import React from 'react'
import { motion } from 'framer-motion'

export default function HeroBanner({
  imageUrl,
  alt,
  title,
  subtitle,
  description,
  showText = true,
  overlayOpacity = 0.4
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="img"
      aria-label={alt}
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Text Content */}
      {showText && (title || subtitle || description) && (
        <div className="container-max px-6 relative z-10 text-center text-white">
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {title}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto font-light"
            >
              {subtitle}
            </motion.p>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed opacity-90"
            >
              {description}
            </motion.p>
          )}
        </div>
      )}
    </motion.div>
  )
}
