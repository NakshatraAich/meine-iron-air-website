'use client'

import React from 'react'
import Image from 'next/image'
import { DollarSign, Zap, Expand, HardHat } from 'lucide-react'

const Why = () => {
  return (
    <section className="relative font-sans w-full flex flex-col lg:flex-row items-start justify-center px-8 lg:px-20 py-10 sm:py-20 gap-12 overflow-hidden">
      
      {/* Left Text Section */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center text-left xl:max-w-[28rem]">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Why <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">Iron Air?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6 font-semibold leading-5">
          Energy storage, not generation, is the real barrier limiting the clean energy transition today.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-5">
           Affordable, scalable, and sustainable Long Duration Energy Storage (LDES) is essential for a reliable renewable grid. Iron-air batteries are the most practical LDES solution: using abundant iron, they provide multi-day storage at the lowest cost per kWh, reduce renewable curtailment, and make decarbonizing the grid achievable. By bridging the gap between intermittent supply and continuous demand, this technology enables a resilient, fossil-free energy future.
        </p>
      </div>

      {/* Right Content Section */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center gap-12">
        
        {/* Image */}
        <div className="relative w-full aspect-square sm:aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/images/skid.png"
            alt="Iron-air cycle"
            fill
            className="object-contain z-10"
            priority
          />
        </div>

        {/* ✅ Responsive Grid of Feature Boxes */}
        <div className="z-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 w-full auto-rows-fr xs:px-0 px-10">
          
          {/* Box 1 */}
          <div className="flex aspect-square flex-col justify-between w-full rounded-lg bg-gradient-to-br from-[#B5D411]/90 via-[#B5D411]/80 to-[#B5D411]/40 shadow-lg p-4 gap-4">
            <div className="flex justify-between items-start">
              <div className="text-sm font-bold text-[#B4D511] bg-white rounded-full w-6 h-6 flex items-center justify-center">
                1
              </div>
              <DollarSign className="w-15 h-15 xs:w-10 xs:h-10 text-white" />
            </div>
            <p className="text-xl xs:text-sm text-green-900 font-semibold leading-snug">
              Cost-effective<br />energy storage
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex aspect-square flex-col justify-between w-full rounded-lg bg-gradient-to-br from-[#B5D411]/90 via-[#B5D411]/80 to-[#B5D411]/40 shadow-lg p-4 gap-4">
            <div className="flex justify-between items-start">
              <div className="text-sm font-bold text-[#B4D511] bg-white rounded-full w-6 h-6 flex items-center justify-center">
                2
              </div>
              <Zap className="w-15 h-15 xs:w-10 xs:h-10 text-white" />
            </div>
            <p className="text-xl xs:text-sm text-green-900 font-semibold leading-snug">
              Long duration energy storage
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex aspect-square flex-col justify-between w-full rounded-lg bg-gradient-to-br from-[#B5D411]/90 via-[#B5D411]/80 to-[#B5D411]/40 shadow-lg p-4 gap-4">
            <div className="flex justify-between items-start">
              <div className="text-sm font-bold text-[#B4D511] bg-white rounded-full w-6 h-6 flex items-center justify-center">
                3
              </div>
              <Expand className="w-15 h-15 xs:w-10 xs:h-10 text-white" />
            </div>
            <p className="text-xl xs:text-sm text-green-900 font-semibold leading-snug">
              Scalable without<br />harm
            </p>
          </div>

          {/* Box 4 */}
          <div className="flex aspect-square flex-col justify-between w-full rounded-lg bg-gradient-to-br from-[#B5D411]/90 via-[#B5D411]/80 to-[#B5D411]/40 shadow-lg p-4 gap-4">
            <div className="flex justify-between items-start">
              <div className="text-sm font-bold text-[#B4D511] bg-white rounded-full w-6 h-6 flex items-center justify-center">
                4
              </div>
              <HardHat className="w-15 h-15 xs:w-10 xs:h-10 text-white" />
            </div>
            <p className="text-xl xs:text-sm text-green-900 font-semibold leading-snug">
              Safe to use<br />and deploy
            </p>
          </div>

        </div>

        <div className="absolute left-110 top-35 w-80 h-80 bg-[#FFF8BD] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute left-120 top-40 w-80 h-80 bg-[#f7ef99] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      </div>
    </section>
  )
}

export default Why
