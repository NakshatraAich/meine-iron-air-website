'use client'

import React from 'react'
import Image from 'next/image'

const Why = () => {
  return (
    <section id='about' className="relative font-sans w-full flex flex-col lg:flex-row items-start justify-center px-8 lg:px-20 py-10 sm:py-20 gap-12 overflow-hidden">
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center text-left lg:max-w-md">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">About </span>Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-semibold leading-5">
            We are building energy infrastructure of tomorrow - innovative, sustainable, and resilient.</p>
            <p className="text-lg text-gray-700 mb-6 leading-5">
            At Meine Electric, our passionate team of engineers, creators, and visionaries is united by a shared purpose: to transform the way energy is generated, stored, and delivered. <br/>
            Together, we are shaping a future where clean power is reliable, accessible, and empowers communities and industries to thrive.
            </p>
            <div className='mt-12 font-semibold text-[#202020]'>
                Contact Us At<br/>
                <span className='text-2xl font-semibold text-[#B5D411]'>contact@meineelectric.com</span>
            </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex flex-col justify-center gap-12">
            <div className="grid grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 gap-2 w-full rounded-2xl overflow-hidden">
                
                {/* Large image (top-left, 2 cols) */}
                <div className="relative lg:col-span-2 aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                    src="/images/electrochem.jpg"
                    alt="Iron-air cycle 1"
                    fill
                    className="object-cover" // ✅ fill and crop
                    priority
                />
                <div className='absolute inset-0 bg-[#202020]/20'></div>
                </div>

                {/* Small image (top-right, 1 col) */}
                <div className="relative lg:col-span-1 aspect-[4/3] lg:aspect-auto rounded-lg overflow-hidden">
                <Image
                    src="/images/cell.jpg"
                    alt="Iron-air cycle 2"
                    fill
                    className="object-cover"
                />
                <div className='absolute inset-0 bg-[#202020]/20'></div>
                </div>

                {/* Small image (bottom-left, 1 col) */}
                <div className="relative lg:col-span-1 aspect-[4/3] lg:aspect-auto rounded-lg overflow-hidden">
                <Image
                    src="/images/product.jpg"
                    alt="Iron-air cycle 3"
                    fill
                    className="object-cover"
                />
                    <div className='absolute inset-0 bg-[#202020]/20'></div>
                </div>

                {/* Large image (bottom-right, 2 cols) */}
                <div className="relative lg:col-span-2 aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                    src="/images/team.webp"
                    alt="Iron-air cycle 4"
                    fill
                    className="object-cover"
                />
                <div className='absolute inset-0 bg-[#202020]/20'></div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Why
