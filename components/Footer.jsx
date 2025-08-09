import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const quickLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Corporate Governance', href: '/governance-risk' },
  { name: 'Investment Portfolio', href: '/investment-portfolio' },
  { name: 'Asset Classes', href: '/investment-asset-classes' },
  { name: 'Human Capital', href: '/people-human-capital' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer({ preFooterImage }) {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container-max px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Company Information */}
            <div className="lg:pr-8">
              {/* Logo */}
              <div className="mb-8">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logowhiteen.svg"
                    alt="Al Mirqab Capital"
                    width={180}
                    height={54}
                    className="transition-all duration-300"
                  />
                </Link>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                We understand that investment can be complex. That's where we come in.
                We're focused on adding strategic value to your portfolio.
              </p>

              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg mb-4">Company Information</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Office: Doha, Qatar P.O. Box 4044</p>
                  <p>Send mail: info@almirqabcapital.com</p>
                  <p>Call us: +97444222123</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} Al Mirqab Capital. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Confidentiality & Privacy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Legal Information
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Return and Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
