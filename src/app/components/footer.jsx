'use client'

import React from 'react'
import Image from 'next/image'
import { Mail, MapPin } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@meineelectric.com",
    href: "mailto:contact@meineelectric.com",
    color: "text-stone-400",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: (
      <>
        1st floor, 44, 3rd Cross St, <br />
        Kamaraj Nagar, Korattur, Chennai,
        <br />
        Tamil Nadu 600050
      </>
    ),
    href: "#",
    color: "text-stone-400",
    isAddress: true,
  },
]

const Footer = () => {
  return (
    <footer id='footer' className="font-sans relative bg-[#202020] flex flex-col overflow-x-hidden">
      {/* Background bar */}
      <div className="absolute top-0 w-full h-32 bg-[#FFFDEA] z-0"></div>

      {/* Hero Image + Overlay Text */}
      <div className="w-full mt-12 px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="relative z-10 aspect-square lg:aspect-[3/1] rounded-3xl overflow-hidden">
          <Image
            src="/images/footer.png"
            alt="footer"
            fill
            className="object-cover"
            priority
          />
          <h1 className="absolute bottom-8 right-4 md:bottom-12 md:right-12 text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white z-20 max-w-full md:max-w-lg leading-snug">
            LIMITLESS RENEWABLE ENERGY
          </h1>
        </div>
      </div>

      {/* Logo + Description and Contact Info */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-32 mt-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo & Info */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Image
                  src="/logos/logo-white.svg"
                  alt="Meine Electric Logo"
                  width={144}
                  height={48}
                  className="mr-4 max-w-full h-auto"
                />
              </div>
              <p className="mb-8 font-semibold text-lg text-stone-300">
                Empowering sustainable energy solutions with innovation, reliability, and cutting-edge technology.
              </p>
            </div>
          </div>

          {/* Contact Info Box */}
          <div className="lg:col-span-2 flex justify-center w-full">
            <div className="rounded-2xl border border-stone-700/50 bg-stone-800/30 p-8 backdrop-blur-sm w-full max-w-2xl">
              <h3 className="mb-8 text-2xl font-semibold bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent text-center lg:text-left">
                Get in Touch
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-stone-500/20 to-stone-600/20 transition-all duration-300 group-hover:from-stone-500/30 group-hover:to-stone-600/30">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-white">{item.title}</h4>
                      {item.isAddress ? (
                        <address className="not-italic leading-relaxed text-stone-300">
                          {item.value}
                        </address>
                      ) : (
                        <a
                          href={item.href}
                          className={`transition-colors duration-200 text-stone-300 hover:${item.color}`}
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-stone-700/50 pt-8 md:flex-row md:space-y-0">
          <p className="text-sm text-stone-400 text-center md:text-left">
            © 2025 Meine Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
