import React from 'react'
import Head from 'next/head'
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Large Heading */}
            <div className="space-y-8">
              <div className="text-sm text-gray-500 tracking-wider uppercase">
                WELCOME TO AL MIRQAB CAPITAL
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Our Focus is on Delivering Superior Value to our Clients for Company Modification.
              </h1>
              <div className="flex space-x-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
                  Let's Develop Together
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                  View All Services
                </button>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-charcoal leading-relaxed">
                A private family office with a long-term vision, Al Mirqab Capital manages a diversified portfolio of strategic
                investments across real estate, financial markets, private equity, and alternative assets. Rooted in Qatar and
                globally engaged, we focus on building sustainable value across generations.
              </p>
              <p className="text-charcoal leading-relaxed">
                Our approach is characterized by patience, discipline, and a deep understanding of global markets.
                We invest not just capital, but also expertise, relationships, and strategic guidance to help our
                portfolio companies and partners achieve sustainable growth.
              </p>
            </div>
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

        {/* Mission Section */}
        <motion.section
          {...fadeInVariant}
          className="bg-gray-50 py-16 -mx-6 sm:-mx-8 lg:-mx-16"
        >
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">OUR MISSION</h2>
              <p className="text-lg text-charcoal leading-relaxed max-w-3xl mx-auto mb-8">
                Our mission drives everything we do, guiding our strategic decisions and operational excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {visionMission.missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-charcoal leading-relaxed text-center">{point}</p>
                </motion.div>
              ))}
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
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-6a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
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

      <Footer />
    </>
  )
}
