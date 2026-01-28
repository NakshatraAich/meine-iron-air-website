import React from "react"

const Logos = () => {
  const logos = [
    { src: "/logos/venture.png", alt: "Venture Center" },
    { src: "/logos/antler.svg", alt: "Antler" },
    { src: "/logos/rebalance.png", alt: "Rebalance" },
    { src: "/logos/grad.png", alt: "Grad" },
    { src: "/logos/vc.png", alt: "Venture Catalysts" },
    { src: "/logos/anna.svg", alt: "Anna University" },
    { src: "/logos/biocytih.png", alt: "BITS BIOCYTIH" },
    { src: "/logos/sptbi.png", alt: "SPTBI" },
    { src: "/logos/dst.svg", alt: "DST" },
    { src: "/logos/aic.png", alt: "AIC" },
    { src: "/logos/arai.png", alt: "ARAI" },
    { src: "/logos/irena.png", alt: "IRENA" },
    { src: "/logos/technoserve.png", alt: "Technoserve" },
    { src: "/logos/climate.png", alt: "Climate" },
    { src: "/logos/nidhi.png", alt: "Nidhi Prayas" },
    { src: "/logos/shell.png", alt: "Shell E4" },
  ]

  const news = [
    { src: "/logos/hindu.png", alt: "The Hindu" },
    { src: "/logos/dt.png", alt: "DT Next" },
    { src: "/logos/entrackr.png", alt: "Entrackr" },
    { src: "/logos/yourstory.svg", alt: "YourStory" },
    { src: "/logos/saur.png", alt: "Saur Energy" },
    { src: "/logos/economic.png", alt: "Economic Times" },
  ]


  return (
    <section className="px-6 lg:px-36 py-12 overflow-hidden">
      <h2  className="font-sans text-3xl font-semibold text-center mb-10">
        Our Partners & Supporters
      </h2>

      {/* Marquee with fade edges */}
      <div className="relative overflow-hidden marquee-fade">
        <div className="flex w-max animate-marquee items-center gap-14">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="
                  max-h-32
                  w-auto
                  object-contain
                  aspect-[6/5]
                "
              />
            </div>
          ))}
        </div>
      </div>

      <h2  className="font-sans text-3xl font-semibold text-center my-10">
        As Seen In
      </h2>

      {/* News marquee – reverse direction */}
      <div className="relative overflow-hidden marquee-fade">
        <div className="flex w-max animate-marquee-reverse items-center gap-14">
          {[...news, ...news].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="
                  max-h-24
                  w-auto
                  object-contain
                  aspect-[8/5]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
