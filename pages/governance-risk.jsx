import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'
import { governanceRisk } from '@/utils/content'

const fadeInVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const AccordionItem = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <ChevronDownIcon 
          className={`w-5 h-5 text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-4 bg-secondary border-t border-gray-200"
        >
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span className="text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export default function GovernanceRiskPage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Corporate Governance & Risk Management - Al Mirqab Capital</title>
        <meta name="description" content="Building trust through robust governance and comprehensive risk oversight" />
      </Head>

      <Navigation />
      <HeroBanner imageUrl="/images/govhero.jpg" alt="Corporate governance and risk management" />
      
      <main className="section-padding space-y-16">
        {/* Header Section */}
        <motion.section 
          {...fadeInVariant}
          className="container-max text-center"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">{governanceRisk.heading}</h1>
          <p className="text-xl text-accent mb-8">{governanceRisk.subtitle}</p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-charcoal leading-relaxed">{governanceRisk.intro}</p>
          </div>
        </motion.section>

        {/* Governance Philosophy Section */}
        <motion.section
          {...fadeInVariant}
          className="container-max"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-semibold text-primary text-center mb-8">OUR GOVERNANCE PHILOSOPHY</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-charcoal leading-relaxed">
                At Al Mirqab Capital, robust corporate governance is the cornerstone of our success. We maintain clear structures and oversight mechanisms to ensure transparency, risk management, and alignment of interests.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                Our governance framework ensures that all investment and operational decisions are made with transparency, fiduciary responsibility, and alignment with the family's long-term objectives.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Governance Pillars Grid */}
        <motion.section 
          {...fadeInVariant}
          className="container-max"
        >
          <h2 className="text-3xl font-semibold text-primary text-center mb-12">Governance Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governanceRisk.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{pillar.title}</h3>
                <p className="text-charcoal leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Risk Framework Accordion */}
        <motion.section 
          {...fadeInVariant}
          className="container-max"
        >
          <h2 className="text-3xl font-semibold text-primary text-center mb-12">Risk Management Framework</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {governanceRisk.riskFramework.map((risk, index) => (
              <AccordionItem
                key={risk.title}
                title={risk.title}
                items={risk.items}
                isOpen={openAccordion === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </motion.section>

        {/* Safeguards Section */}
        <motion.section
          {...fadeInVariant}
          className="bg-secondary py-16"
        >
          <div className="container-max">
            <h2 className="text-3xl font-semibold text-primary text-center mb-8">FAMILY OFFICE SAFEGUARDS</h2>
            <p className="text-lg text-charcoal text-center mb-12 max-w-3xl mx-auto">
              To protect the family's interests across generations, we maintain:
            </p>
            <div className="max-w-4xl mx-auto space-y-6">
              {governanceRisk.safeguards.map((safeguard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md"
                >
                  <span className="text-accent font-bold text-xl mt-1">•</span>
                  <p className="text-lg text-charcoal leading-relaxed">{safeguard}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Building Resilience Section */}
        <motion.section
          {...fadeInVariant}
          className="container-max"
        >
          <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-semibold text-primary text-center mb-8">BUILDING RESILIENCE THROUGH GOVERNANCE</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-charcoal leading-relaxed text-center">
                We believe that sound governance and proactive risk management are key to sustaining value across generations. Our disciplined, structured, and forward-looking approach positions Al Mirqab Capital as a trusted steward of long-term family wealth.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer preFooterImage="/images/governance-footer.jpg" />
    </>
  )
}
