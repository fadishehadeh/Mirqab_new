import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'
import { assetClasses } from '@/utils/content'

const fadeInVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function InvestmentAssetClassesPage() {
  return (
    <>
      <Head>
        <title>Investment Asset Classes - Al Mirqab Capital</title>
        <meta name="description" content="Strategic investments across a wide spectrum of asset classes for long-term value creation" />
      </Head>

      <Navigation />
      <HeroBanner imageUrl="/images/ia.jpg" alt="Investment asset classes" />
      
      <main className="section-padding space-y-16">
        {/* Header Section */}
        <motion.section 
          {...fadeInVariant}
          className="container-max text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8">INVESTMENT ASSET CLASSES</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-charcoal leading-relaxed">{assetClasses.intro}</p>
          </div>
        </motion.section>

        {/* Asset Classes List */}
        <motion.section 
          {...fadeInVariant}
          className="container-max"
        >
          <div className="max-w-5xl mx-auto space-y-8">
            {assetClasses.classes.map((assetClass, index) => (
              <motion.div
                key={assetClass.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-4">{assetClass.title}</h3>
                    <p className="text-charcoal leading-relaxed">{assetClass.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section 
          {...fadeInVariant}
          className="bg-primary py-16"
        >
          <div className="container-max text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">Strategic Asset Allocation</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Our diversified approach across asset classes enables us to navigate market cycles while optimizing risk-adjusted returns for long-term wealth preservation and growth.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
            >
              Learn More About Our Strategy
            </motion.a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}
