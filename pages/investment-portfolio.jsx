import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'
import { investmentPortfolio } from '@/utils/content'

const fadeInVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function InvestmentPortfolioPage() {
  return (
    <>
      <Head>
        <title>Investment Portfolio - Al Mirqab Capital</title>
        <meta name="description" content="Diversified, disciplined, and global investment portfolio across multiple sectors" />
      </Head>

      <Navigation />
      <HeroBanner imageUrl="/images/portfolio.png" alt="Investment portfolio management" />
      
      <main className="section-padding space-y-16">
        {/* Header Section */}
        <motion.section 
          {...fadeInVariant}
          className="container-max text-center"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">{investmentPortfolio.heading}</h1>
          <p className="text-xl text-accent mb-8">{investmentPortfolio.subtitle}</p>
        </motion.section>

        {/* Investment Sectors Grid */}
        <motion.section 
          {...fadeInVariant}
          className="container-max"
        >
          <h2 className="text-3xl font-semibold text-primary text-center mb-12">Investment Sectors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentPortfolio.sectors.map((sector, index) => {
              // Map sector images
              const sectorImages = {
                'Real Estate': '/images/re.jpg',
                'Public & Private Equities': '/images/fi.jpg',
                'Financial Instruments': '/images/fi.jpg',
                'Alternative Assets': '/images/ia.jpg',
                'Qatar Strategic Interests': '/images/qatar.jpg'
              };

              return (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card relative overflow-hidden group"
                >


                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {sector.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">{sector.title}</h3>
                        <p className="text-charcoal leading-relaxed">{sector.text}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Sustainability Section */}
        <motion.section 
          {...fadeInVariant}
          className="bg-secondary py-16"
        >
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-primary mb-8">SUSTAINABILITY & IMPACT</h2>
              <p className="text-lg text-charcoal leading-relaxed mb-8">
                {investmentPortfolio.sustainability}
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Download Portfolio Overview
              </motion.a>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer preFooterImage="/images/portfolio-footer.jpg" />
    </>
  )
}
