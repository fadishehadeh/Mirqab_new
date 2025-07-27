import React from 'react'
import { motion } from 'framer-motion'

export default function HeroBanner({ imageUrl, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="img"
      aria-label={alt}
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Optional overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </motion.div>
  )
}
