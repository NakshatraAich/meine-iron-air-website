'use client'

import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
  const pathname = usePathname()
  const isPrivacyPolicy = pathname === '/privacy-policy'

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="font-mono fixed top-0 left-0 w-full bg-[#202020]/85 backdrop-blur-lg text-white flex items-center justify-start lg:justify-between px-8 lg:px-20 py-4 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Link href="/" className="flex items-center gap-2 cursor-pointer w-48 sm:w-56 h-auto">
          <Image
            src="/logos/logo.svg"
            alt="Logo"
            width={210}
            height={100}
            className="w-full h-auto"
          />
        </Link>
      </div>

      {/* Nav Buttons - Hidden on privacy policy page */}
      {!isPrivacyPolicy && (
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => handleScroll('tech')} className="text-[#FFFEF4] hover:text-[#B4D511] transition uppercase tracking-widest text-sm">
            Technology
          </button>
          <button onClick={() => handleScroll('about')} className="text-[#FFFEF4] hover:text-[#B4D511] transition uppercase tracking-widest text-sm">
            About
          </button>
          <button onClick={() => handleScroll('news')} className="text-[#FFFEF4] hover:text-[#B4D511] transition uppercase tracking-widest text-sm">
            News
          </button>
          <button onClick={() => handleScroll('footer')} className="hover:underline underline-offset-3 text-[#B4D511] transition uppercase tracking-widest text-sm">
            Contact
          </button>
        </nav>
      )}
    </header>
  )
}

export default Nav