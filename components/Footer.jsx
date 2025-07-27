import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ImagePlaceholder from './ImagePlaceholder'

// Pre-footer image component
function PreFooterImage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/images/home2.jpg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </motion.section>
  )
}

const footerLinks = [
  { name: 'Vision & Mission', href: '/vision-mission' },
  { name: 'Governance & Risk', href: '/governance-risk' },
  { name: 'Investment Portfolio', href: '/investment-portfolio' },
  { name: 'Asset Classes', href: '/investment-asset-classes' },
  { name: 'People & Human Capital', href: '/people-human-capital' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <>
      <PreFooterImage />
      <footer className="bg-primary text-white py-16">
      <div className="container-max px-6 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logowhiteen.svg"
                alt="Al Mirqab Capital"
                width={200}
                height={60}
                className="mb-4"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              A trusted investment institution shaping long-term prosperity for future generations
              while positively impacting the communities we serve.
            </p>
            <div className="text-gray-300">
              <p><strong>Address:</strong> Doha, Qatar</p>
              <p><strong>Email:</strong> info@almirqabcapital.com</p>
              <p><strong>Phone:</strong> +974 XXXX XXXX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Al Mirqab Capital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
