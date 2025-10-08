'use client'

import React, { useEffect, useRef } from 'react'

const Tech = () => {
  const videoRef = useRef(null)

  // ⏩ Set playback speed when video mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5
    }
  }, [])

  return (
    <section id='tech' className="font-sans w-full flex flex-col lg:flex-row-reverse items-start justify-center px-8 lg:px-20 py-10 sm:py-20 gap-12 overflow-hidden">

      <div className="relative w-full lg:w-1/2 flex flex-col justify-center text-left xl:max-w-[28rem]">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 z-2">
          Our <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-semibold leading-5 z-2">
          Our reversible rust battery transforms a natural iron-air reaction into a powerful, repeatable energy cycle.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-5 z-2">
            At the heart of this breakthrough is a simple yet revolutionary process. During discharge, iron reacts with oxygen to form rust, releasing energy. Our proprietary charging method reverses this reaction, converting rust back into pure iron. This clean cycle can be repeated thousands of times, enabling scalable, affordable, and sustainable energy storage.          
          </p>
        
          <div className="absolute left-80 -top-10 w-80 h-80 bg-[#FFF8BD] rounded-full  pointer-events-none"></div>
          <div className="absolute left-70 -top-20 w-80 h-80 bg-[#f7ef99] rounded-full  pointer-events-none "></div>
      </div>

      <div className="z-2 w-full lg:w-1/2 flex justify-center">
          <video
          ref={videoRef}
          className="w-full h-auto object-cover aspect-[4/3] rounded-2xl"
          src="/vid/cycle.mp4"
          autoPlay
          loop
          muted
          playsInline
          />
      </div>

    </section>
  )
}

export default Tech
