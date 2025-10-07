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

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

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
    <section id='hero' ref={emblaRef} className="font-sans relative w-full h-[90dvh] overflow-hidden">
      <div className="flex h-screen">
        {/* Slide 1 */}
        <div className="relative min-w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero1.png"
            alt="hero1"
            fill
            className="object-cover"
            priority
          />
          <div className='absolute inset-0 z-1 bg-[#202020]/10'></div>
          <div className="absolute z-2 text-left px-8 lg:px-20 bottom-36 sm:bottom-42 left-0 flex flex-col items-start justify-center text-white">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold drop-shadow-lg sm:max-w-3xl">
              Low-Cost, Multi-Day Energy <br />Storage with Breakthrough <br /><span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">Iron Air Batteries</span>
            </h1>
          </div>
        </div>

        <div className="relative min-w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero3.jpg"
            alt="hero3"
            fill
            className="z-0 object-cover"
          />
          <div className='absolute inset-0 z-1 bg-gradient-to-br from-transparent to-[#202020]/90'></div>
          <div className="z-2 absolute text-left px-8 lg:px-20 bottom-36 sm:bottom-42 left-0 flex flex-col items-start justify-center text-white">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold drop-shadow-lg sm:max-w-3xl">
              Enabling a future of<br /> <span className='bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent'>Limitless Renewable Future</span>
            </h1>
          </div>
        </div>

        <div className="relative min-w-full h-full flex items-center justify-center">
          <Image
            src="/images/hero2.jpg"
            alt="hero2"
            fill
            className="object-cover"
          />
          <div className='absolute inset-0 z-1 bg-[#202020]/30'></div>
          <div className="absolute z-2 text-left px-8 lg:px-20 bottom-36 sm:bottom-42 left-0 flex flex-col items-start justify-center text-white">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold drop-shadow-lg sm:max-w-3xl">
              Long Duration Energy Storage<br />for <span className='bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent'>Decentralized Grid</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ✅ Progress Dots */}
      <div className="absolute pl-8 lg:pl-20 top-30 left-0 flex gap-3 z-20">
        <button
          onClick={() => scrollTo(0)}
          className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-[#B5D411] ${
            selectedIndex === 0 ? 'bg-[#B4D511]' : 'bg-transparent'
          }`}
        />
        <button
          onClick={() => scrollTo(1)}
          className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-[#B5D411] ${
            selectedIndex === 1 ? 'bg-[#B4D511]' : 'bg-transparent'
          }`}
        />
        <button
          onClick={() => scrollTo(2)}
          className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-[#B5D411] ${
            selectedIndex === 2 ? 'bg-[#B4D511]' : 'bg-transparent'
          }`}
        />
      </div>
    </section>
  )
}

export default Hero
