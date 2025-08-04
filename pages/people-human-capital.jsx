import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'
import { peopleCapital } from '@/utils/content'

const fadeInVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function PeopleHumanCapitalPage() {
  return (
    <>
      <Head>
        <title>People & Human Capital Development - Al Mirqab Capital</title>
        <meta name="description" content="Building exceptional talent and professional integrity for long-term success" />
      </Head>

      <Navigation />
      <HeroBanner imageUrl="/images/people.jpg" alt="People and human capital development" />
      
      <main className="section-padding space-y-16">
        {/* Header Section */}
        <motion.section 
          {...fadeInVariant}
          className="container-max text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8">{peopleCapital.heading}</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-charcoal leading-relaxed">{peopleCapital.intro}</p>
          </div>
        </motion.section>

        {/* Principles Section */}
        <motion.section 
          {...fadeInVariant}
          className="container-max"
        >
          <h2 className="text-3xl font-semibold text-primary text-center mb-12">Our Principles</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {peopleCapital.principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md"
              >
                <span className="text-accent font-bold text-xl mt-1">•</span>
                <p className="text-lg text-charcoal leading-relaxed">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Development Framework */}
        <motion.section 
          {...fadeInVariant}
          className="bg-secondary py-16"
        >
          <div className="container-max">
            <h2 className="text-3xl font-semibold text-primary text-center mb-12">Development Framework</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {peopleCapital.framework.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
                  <p className="text-charcoal leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Future Leaders & Culture */}
        <motion.section 
          {...fadeInVariant}
          className="container-max"
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-6">Future Leaders</h2>
              <p className="text-lg text-charcoal leading-relaxed mb-8">{peopleCapital.futureLeaders}</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-6">Our Culture</h2>
              <p className="text-lg text-charcoal leading-relaxed mb-8">{peopleCapital.culture}</p>
            </div>
          </div>
        </motion.section>

        {/* Join Us CTA */}
        <motion.section 
          {...fadeInVariant}
          className="bg-primary py-16"
        >
          <div className="container-max text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto">
              {peopleCapital.joinCTA}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
            >
              Explore Opportunities
            </motion.a>
          </div>
        </motion.section>
      </main>

      <Footer preFooterImage="/images/people-footer.jpg" />
    </>
  )
}
