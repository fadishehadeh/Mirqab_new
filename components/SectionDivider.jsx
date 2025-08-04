import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SectionDivider({ imagePath = '/images/qatar.jpg', height = 'h-32' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`w-full ${height} relative overflow-hidden`}
    >
      <Image
        src={imagePath}
        alt="Section Divider"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </motion.div>
  )
}
