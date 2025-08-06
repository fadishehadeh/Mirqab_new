import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ImagePlaceholder from './ImagePlaceholder'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Map governance pillars to appropriate images
const getPillarImage = (title) => {
  const imageMap = {
    'Family Charter': '/images/vision.jpg',
    'Board Oversight': '/images/governance.jpg', 
    'Investment Committees': '/images/excellence.jpg',
    'Transparent Reporting': '/images/integrity.jpg',
    'Segregation of Duties': '/images/stewardship.jpg',
    'Internal Audit and Compliance': '/images/risk.jpg'
  }
  return imageMap[title] || '/images/governance.jpg'
}

// Map governance pillars to appropriate icons
const getPillarIcon = (title) => {
  const iconMap = {
    'Family Charter': 'DocumentTextIcon',
    'Board Oversight': 'UserGroupIcon',
    'Investment Committees': 'PresentationChartLineIcon',
    'Transparent Reporting': 'ChartBarIcon',
    'Segregation of Duties': 'ShieldCheckIcon',
    'Internal Audit and Compliance': 'ClipboardDocumentCheckIcon'
  }
  return iconMap[title] || 'DocumentTextIcon'
}

const GovernancePillarsCarousel = ({ pillars }) => {
  const swiperRef = useRef(null)

  // Early return if no pillars provided
  if (!pillars || pillars.length === 0) {
    return (
      <motion.section
        className="container-max relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center py-12">
          <p className="text-charcoal">No governance pillars available.</p>
        </div>
      </motion.section>
    )
  }

  // Icon mapping for the pillars
  const iconComponents = {
    DocumentTextIcon: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    UserGroupIcon: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    PresentationChartLineIcon: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    ChartBarIcon: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    ShieldCheckIcon: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    ClipboardDocumentCheckIcon: () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  }
  const fadeInVariant = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <motion.section
      {...fadeInVariant}
      className="container-max relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">Governance Pillars</h2>
        <p className="text-charcoal max-w-2xl mx-auto">
          Our comprehensive governance framework ensures transparency, accountability, and excellence in all our operations.
        </p>
      </div>
      
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
          spaceBetween={32}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="governance-pillars-swiper"
          a11y={{
            prevSlideMessage: 'Previous governance pillar',
            nextSlideMessage: 'Next governance pillar',
            paginationBulletMessage: 'Go to governance pillar {{index}}',
          }}
        >
          {pillars.map((pillar, index) => (
            <SwiperSlide key={pillar.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:shadow-2xl h-full"
              >
                {/* Image Section */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={getPillarImage(pillar.title)}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'block'
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden">
                    <ImagePlaceholder 
                      width={400} 
                      height={192} 
                      text={pillar.title}
                      className="rounded-lg"
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <div className="text-primary">
                      {iconComponents[getPillarIcon(pillar.title)]()}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      {iconComponents[getPillarIcon(pillar.title)]()}
                    </div>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">{pillar.text}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button 
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 text-primary hover:text-accent hover:bg-primary/5 transition-all duration-300 group"
          aria-label="Previous governance pillar"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        
        <button 
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 text-primary hover:text-accent hover:bg-primary/5 transition-all duration-300 group"
          aria-label="Next governance pillar"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
      </div>

      <style jsx global>{`
        .governance-pillars-swiper {
          padding: 0 60px 60px 60px;
          overflow: visible;
        }

        @media (max-width: 768px) {
          .governance-pillars-swiper {
            padding: 0 20px 60px 20px;
          }
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
          border: none;
          outline: none;
        }

        .swiper-pagination-bullet-custom:hover {
          background: #243570;
          transform: scale(1.2);
        }

        .swiper-pagination-bullet-custom:focus {
          background: #243570;
          transform: scale(1.2);
          box-shadow: 0 0 0 2px rgba(36, 53, 112, 0.3);
        }

        .swiper-pagination-bullet-active-custom {
          background: #243570;
          transform: scale(1.3);
        }

        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          transition: all 0.3s ease;
          border: none;
          outline: none;
        }

        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .swiper-button-prev-custom:focus,
        .swiper-button-next-custom:focus {
          box-shadow: 0 0 0 3px rgba(36, 53, 112, 0.3);
        }

        @media (max-width: 1024px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }

        /* Ensure smooth slide transitions */
        .swiper-slide {
          height: auto;
          display: flex;
        }

        .swiper-slide > div {
          width: 100%;
        }

        /* Add touch feedback for mobile */
        @media (max-width: 768px) {
          .swiper-pagination-bullet-custom {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </motion.section>
  )
}

export default GovernancePillarsCarousel
