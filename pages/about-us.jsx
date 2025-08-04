import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'

import Footer from '@/components/Footer'
import { visionMission } from '@/utils/content'

const fadeInVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About Us - Al Mirqab Capital</title>
        <meta name="description" content="Learn about Al Mirqab Capital - A trusted investment institution shaping long-term prosperity for future generations" />
      </Head>

      <Navigation />
      <HeroBanner imageUrl="/images/about.png" alt="About Al Mirqab Capital" />
      
      <main className="section-padding space-y-16">
        {/* About Us Section */}
        <motion.section
          {...fadeInVariant}
          className="container-max"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-primary">WHO WE ARE</h2>
            <p className="text-lg text-charcoal leading-relaxed max-w-4xl mx-auto">
              Al Mirqab Capital is a multi-generational family office headquartered in Qatar. Guided by a prudent investment philosophy and disciplined governance, we manage a globally diversified portfolio while actively contributing to the economic and social development of Qatar and the wider region.
            </p>
            <p className="text-charcoal leading-relaxed max-w-4xl mx-auto">
              Our team blends international expertise with deep local insight to navigate dynamic markets, safeguard our legacy, and unlock new opportunities for growth.
            </p>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          {...fadeInVariant}
          className="container-max"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">OUR VISION</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-charcoal leading-relaxed">{visionMission.vision}</p>
            </div>
          </div>
        </motion.section>



        {/* Values Section */}
        <motion.section
          {...fadeInVariant}
          className="container-max"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">OUR VALUES</h2>
            <p className="text-lg text-charcoal leading-relaxed max-w-3xl mx-auto">
              Our core values guide every decision we make and define our commitment to excellence,
              integrity, and long-term value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Integrity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Value Image */}
              <div className="w-full h-32 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/vision.jpg"
                  alt="Integrity - Trust and Ethics"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Integrity</h3>
              <p className="text-charcoal leading-relaxed">
                We adhere to the highest standards of ethics and accountability in every decision we make.
              </p>
            </motion.div>

            {/* Stewardship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Value Image */}
              <div className="w-full h-32 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/fi.jpg"
                  alt="Stewardship - Responsible Management"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Stewardship</h3>
              <p className="text-charcoal leading-relaxed">
                We act as responsible custodians of our clients' wealth, ensuring prudent management for future generations.
              </p>
            </motion.div>

            {/* Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Value Image */}
              <div className="w-full h-32 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="Excellence - Quality and Achievement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Excellence</h3>
              <p className="text-charcoal leading-relaxed">
                We strive for excellence in all aspects of our operations, from investment selection to client service.
              </p>
            </motion.div>

            {/* Discretion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Value Image */}
              <div className="w-full h-32 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/services.jpg"
                  alt="Discretion - Confidentiality and Privacy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Discretion</h3>
              <p className="text-charcoal leading-relaxed">
                We maintain the highest levels of confidentiality and privacy in all our client relationships.
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              {/* Value Image */}
              <div className="w-full h-32 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/contact.jpg"
                  alt="Collaboration - Partnership and Teamwork"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Collaboration</h3>
              <p className="text-charcoal leading-relaxed">
                We believe in the power of partnership and work closely with our clients to achieve shared objectives.
              </p>
            </motion.div>
          </div>
        </motion.section>


      </main>

      <Footer preFooterImage="/images/about-footer.jpg" />
    </>
  )
}
