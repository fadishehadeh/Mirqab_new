import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import HeroSlider from '@/components/HeroSlider'



export default function HomePage() {
  return (
    <div className="homepage-container">
      <Head>
        <title>Al Mirqab Capital - Strategic Investment Excellence</title>
        <meta name="description" content="A trusted investment institution shaping long-term prosperity for future generations through diversified portfolio management and strategic investments." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="h-full">
        {/* Hero Slider */}
        <HeroSlider />
      </main>
    </div>
  )
}