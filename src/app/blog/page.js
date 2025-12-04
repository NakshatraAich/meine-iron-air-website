import React from 'react'
import Nav from "../components/header"
import Footer from "../components/footer";

const BlogPane = ({ image, title, content, link }) => {
  const preview = content.length > 150 ? content.slice(0, 150) + "..." : content;

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row justify-between items-center px-16 py-4 max-w-7xl w-full">
        <div className="w-3/5">
          {image && <img src={image} alt={title} className="w-full h-auto rounded-lg" />}
        </div>
        <div className="flex flex-col w-3/5 pl-6">
          <h2 className="text-3xl text-[#202020] font-semibold mb-2">{title}</h2>
          <p className="text-[#626262] mb-4 max-w-lg">{preview}</p>
          <a href={link} className="font-semibold text-[#B5D411] hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
    const blogPosts = [
    {
        image: "/images/hero1.jpg",
        title: "Introducing the New Smart Series",
        content:
        "Our latest Smart Series represents a breakthrough in precision, safety, and power optimization. Designed for demanding industrial and commercial environments, it integrates adaptive load management and intelligent diagnostics. Experience unmatched stability and control as MEINE Electric continues to redefine performance standards in modern power distribution systems.",
        link: "/blog/smart-series",
    },
    {
        image: "/images/hero1.jpg",
        title: "Power Efficiency Like Never Before",
        content:
        "Discover how MEINE Electric pushes energy efficiency to the next level. Through refined circuitry, advanced thermal regulation, and AI-assisted feedback control, our products reduce energy loss without compromising reliability. This innovation empowers industries to achieve sustainability goals while maintaining consistent, high-quality electrical performance across operations.",
        link: "/blog/power-efficiency",
    },
    {
        image: "/images/hero1.jpg",
        title: "Behind the Technology",
        content:
        "Every MEINE Electric innovation is backed by rigorous engineering and research. Our design teams blend hardware precision with intelligent firmware control to deliver seamless functionality. From concept to production, each component is tested for resilience, ensuring that our technology meets the evolving demands of the global energy landscape.",
        link: "/blog/behind-the-tech",
    },
    {
        image: "/images/hero1.jpg",
        title: "Future-Proof Engineering",
        content:
        "MEINE Electric is engineering tomorrow’s power solutions today. Built around modular design, upgradable architecture, and real-time monitoring, our systems adapt to future energy standards with minimal downtime. Combining reliability with foresight, we empower industries to stay competitive in an era where innovation and sustainability define success.",
        link: "/blog/future-proof",
    },
    ]


    return (
        <div className="bg-[#FFFDEA] min-h-dvh text-[#626262]">
        <Nav />
            <section className="font-sans relative w-full h-[55vh] overflow-hidden">
            <div className="flex h-full items-end justify-between px-8 lg:px-20 pb-12">
                <h1 className="text-[#202020] capitalize text-5xl font-bold drop-shadow-lg break-words whitespace-normal">
                Latest By{" "}
                <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">
                    MEINE Electric
                </span>
                </h1>
                <p className="text-[#626262] text-lg max-w-xl">
Explore our latest updates, insightful articles, innovative solutions, and behind-the-scenes stories showcasing how MEINE Electric continues to redefine the future of sustainable energy.                </p>
            </div>
            </section>

<section className="w-full h-[80vh]">
  <img 
    src="/images/blog_hero.jpg" 
    alt="Hero" 
    className="w-full h-full object-cover"
  />
</section>

            <section className='flex flex-col px-10 py-8 space-y-6'>
                {blogPosts.map((post, i) => (
                <BlogPane key={i} {...post} />
                ))}
            </section>
            
            <Footer />
        </div>
    )
}

export default Page
