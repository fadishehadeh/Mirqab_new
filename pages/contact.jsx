import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'
import { contactPage, heroBanners } from '@/utils/content'

const fadeInVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    needs: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form or show success message
  }

  return (
    <>
      <Head>
        <title>Contact Us - Al Mirqab Capital</title>
        <meta name="description" content="Get in touch with Al Mirqab Capital for investment opportunities and partnerships" />
      </Head>

      <Navigation />
      <HeroBanner
        imageUrl="/images/contact.png"
        alt="Contact Al Mirqab Capital"
        title={heroBanners.contact.title}
        subtitle={heroBanners.contact.subtitle}
      />
      
      <main className="section-padding bg-gray-100">
        <motion.section
          {...fadeInVariant}
          className="container-max"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">Let's Collaborate with Us!</h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We are always ready to help you at any time, let's talk together.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address Business */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white" style={{backgroundColor: '#1A3370'}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{color: '#1A3370'}}>Address Business</h3>
                    <p className="text-gray-600">Doha, Qatar</p>
                    <p className="text-gray-600">P.O. Box 4044</p>
                  </div>
                </div>

                {/* Contact With Us */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white" style={{backgroundColor: '#1A3370'}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{color: '#1A3370'}}>Contact With Us</h3>
                    <p className="text-gray-600">Call us: +97444222123</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white" style={{backgroundColor: '#1A3370'}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{color: '#1A3370'}}>Email Address</h3>
                    <p className="text-gray-600">info@almirqabcapital.com</p>
                  </div>
                </div>

                {/* Working Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white" style={{backgroundColor: '#1A3370'}}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{color: '#1A3370'}}>Working Time</h3>
                    <p className="text-gray-600">Sunday - Thursday: 8:00am - 6:00pm</p>
                    <p className="text-gray-600">Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="*Full Name"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="*Email Address"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="*Phone Number"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <select
                    name="needs"
                    value={formData.needs}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  >
                    <option value="">What are your needs?</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write Message ..."
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-vertical"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-charcoal text-white px-8 py-3 hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                >
                  <span>Submit Require</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer preFooterImage="/images/contact-footer.jpg" />
    </>
  )
}
