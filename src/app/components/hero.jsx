'use client'

import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  // Update selected index on carousel select
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollTo = (index) => emblaApi?.scrollTo(index)

  return (
    <section
      id="hero"
      ref={emblaRef}
      className="font-sans relative w-full h-[90vh] sm:h-[90vh] overflow-hidden"
    >
      <div className="flex h-full">
        {/* Slide 1 */}
        <div className="relative min-w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero1.png"
            alt="hero1"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 z-1 bg-[#202020]/10"></div>
          <div
            className="absolute z-2 text-left px-8 lg:px-20 left-0 flex flex-col items-start justify-center text-white
                       top-1/2 -translate-y-1/2 sm:bottom-36 sm:top-auto sm:translate-y-0"
          >
            <h1 className="text-4xl sm:text-5xl leading-tight font-bold drop-shadow-lg sm:max-w-3xl break-words whitespace-normal">
              Low-Cost, Multi-Day Energy Storage with Breakthrough{' '}
              <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">
                Iron Air Batteries
              </span>
            </h1>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative min-w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero3.jpg"
            alt="hero3"
            fill
            className="z-0 object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-br from-transparent to-[#202020]/90"></div>
          <div
            className="absolute z-2 text-left px-8 lg:px-20 left-0 flex flex-col items-start justify-center text-white
                       top-1/2 -translate-y-1/2 sm:bottom-36 sm:top-auto sm:translate-y-0"
          >
            <h1 className="text-4xl sm:text-5xl leading-tight font-bold drop-shadow-lg sm:max-w-3xl break-words whitespace-normal">
              Enabling a future of{' '}
              <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">
                Limitless Renewable Future
              </span>
            </h1>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative min-w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero2.jpg"
            alt="hero2"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 z-1 bg-[#202020]/30"></div>
          <div
            className="absolute z-2 text-left px-8 lg:px-20 left-0 flex flex-col items-start justify-center text-white
                       top-1/2 -translate-y-1/2 sm:bottom-36 sm:top-auto sm:translate-y-0"
          >
            <h1 className="text-4xl sm:text-5xl leading-tight font-bold drop-shadow-lg sm:max-w-3xl break-words whitespace-normal">
              Long Duration Energy Storage for{' '}
              <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">
                Decentralized Grid
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute pl-8 lg:pl-20 top-30 left-0 flex gap-3 z-20">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-[#B5D411] ${
              selectedIndex === i ? 'bg-[#B4D511]' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
