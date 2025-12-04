import React from 'react'

const Logos = () => {
  const logos = [
    { src: '/logos/antler.svg', alt: 'Antler' },
    { src: '/logos/rebalance.png', alt: 'Rebalance' },
    { src: '/logos/grad.png', alt: 'Grad' },
    { src: '/logos/vc.png', alt: 'Venture Catalysts' },
    { src: '/logos/anna.svg', alt: 'Anna University' },
    { src: '/logos/bits.svg', alt: 'BITS' },
    { src: '/logos/sptbi.png', alt: 'SPTBI' },
    { src: '/logos/dst.svg', alt: 'DST' },
    { src: '/logos/aic.png', alt: 'AIC' },
    { src: '/logos/arai.png', alt: 'ARAI' },
    { src: '/logos/irena.png', alt: 'IRENA' },
    { src: '/logos/technoserve.png', alt: 'Technoserve' },
    { src: '/logos/climate.png', alt: 'Climate' },
    { src: '/logos/nidhi.png', alt: 'Nidhi Prayas' },
    { src: '/logos/shell.png', alt: 'Shell E4'},
    { src: '/logos/venture.png', alt: 'Venture Center'}
  ]

  return (
    <section className="px-8 lg:px-36 py-12">
      {/* Title */}
      <h2 className="font-sans text-3xl font-semibold text-center mb-10">
        Our Partners & Supporters
      </h2>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center aspect-square rounded-xl p-2 sm:p-4"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full sm:max-w-[70%] sm:max-h-[70%] object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Logos
