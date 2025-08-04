import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ourServices = [
  { name: 'Investment Management', href: '/investment-portfolio' },
  { name: 'Portfolio Diversification', href: '/investment-asset-classes' },
  { name: 'Risk Management', href: '/governance-risk' },
  { name: 'Strategic Advisory', href: '/about-us' },
  { name: 'Wealth Planning', href: '/contact' },
]

const quickLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Leadership Team', href: '/people-human-capital' },
  { name: 'Our Services', href: '/investment-portfolio' },
  { name: 'Careers', href: '/contact' },
  { name: 'Case Studies', href: '/governance-risk' },
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
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
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

            {/* Our Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {ourServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 mb-8">
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

              {/* Newsletter Signup */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 0 1 1.5 17H6a2 2 0 0 1 2 2v.5z" />
                    </svg>
                  </div>
                  <h5 className="text-white font-medium">Don't miss the latest news from us...</h5>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Please sign up to follow the latest news and events from us, we promise not to spam your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg border border-gray-600 focus:outline-none focus:border-accent"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-accent text-white rounded-r-lg hover:bg-opacity-90 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
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
