'use client'

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'

export function News() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    const newsList = [
      {
       image: '/news/N12.jpeg',
       content: 'Recognized among top 50 emerging deeptech startups by NASSCOM (Emerge 50)',
       link: 'https://www.linkedin.com/posts/nasscomdeeptech_emerge50awards2025-ugcPost-7359239202267389953-xeUJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzohttps://www.linkedin.com/posts/meineelectric_meineelectric-movefastbuildthings-emerge50-activity-7360613610248617984-w5bb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
      },
      {
       image: '/news/N13.jpeg',
       content: 'MOU signed with Chematico Technologies',
       link: 'https://www.linkedin.com/posts/meineelectric_innovation-impact-commercial-activity-7354496848117583872-oY_X/'
      },
      {
       image: '/news/N14.jpeg',
       content: 'Showcased tech at TATWA summit in New Delhi on the occasion of the World Environment Day organized by Department of Science & Technology',
       link: ' https://www.linkedin.com/posts/meineelectric_meinelectric-energytransition-cleanenergy-activity-7340318422183874560-zvDd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A. '
      },
            {
       image: '/news/N15.jpeg',
       content: 'Selected for Nidhi Prayas Grant',
       link: 'https://www.linkedin.com/posts/sp-tbi_delighted-to-extend-nidhi-prayas-grant-in-aid-activity-7343254317602078722-Pbj-/'
      },
      {
        image: '/news/N11.webp',
        content: 'Felicitated by Hon\'ble Minister of Commerce & Industry Shri Piyush Goyal at Startup Mahakumbh.',
        link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meinelectric-movefastbuildthings-deeptech-activity-7314505968090800129-HQY7/?rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
      },
     {
       image: '/news/N1.webp',
       content: 'MEINE Electric Wins Student Startup of the Year 2024 at Micelio Mobility Awards.',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_cleanenergy-meineelectric-movefastbuildthings-ugcPost-7261298015968055296-bkL-/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
      image: '/news/N2.webp',
      content: 'MEINE Electric featured on CNBC-TV18 as a Top 5 Finalist in LeapToUnicorn Season 2',
      link: 'https://www.linkedin.com/posts/stuti-kakkar_stealth-spotlight-leaptounicorn-activity-7268657594808832001-l6kD/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: '/news/N3.webp',
       content: 'MEINE Electric Named a Top 5 Finalist in #LeapToUnicorn Season 2.',
       link: 'https://www.linkedin.com/posts/stuti-kakkar_top-5-startups-of-2024-grand-finale-episode-activity-7268519955912888320-crgW/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: '/news/N4.webp',
       content: 'MEINE Electric Recognized at Microsoft\'s Tech Sector Decarbonization Innovation Challenge.',
       link: 'https://www.linkedin.com/posts/stuti-kakkar_decarbonizing-datacentres-ai-activity-7266715955005665281-ann8/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: '/news/N5.webp',
       content: 'MEINE Electric Featured on CNBC-TV18 Young Turks: A Milestone in Our Journey.',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-movefastbuildthings-bigthingsahead-ugcPost-7275778387028119552-91rF/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: '/news/N6.webp',
       content: 'MEINE Electric Featured in Antler\'s ESG & Impact Report as a Key Driver of Sustainability in India.',
       link: 'https://www.linkedin.com/posts/stuti-kakkar_indias-sustainability-leap-activity-7299133370960072704-jLaV/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: '/news/N7.webp',
       content: 'Investing in Meine Electric: Creating a solution for limitless renewable energy',
       link: 'https://www.antler.co/blog/investing-in-meine-electric-creating-a-solution-for-limitless-renewable-energy'
     },
     {
       image: '/news/N8.webp',
       content: 'Insights from Smile Summit: Strengthening Local Supply Chains & Innovation Resilience',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-movefastandbuildthings-hydrogenfuelcells-activity-7227715300148862976-2Ut2/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: '/news/N9.webp',
       content: 'MEINE Electric Showcased to Anna University\'s Vice Chancellor & Former NSIC CMD',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-sustainableenergy-innovation-activity-7215699877467455488-nSrm/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: '/news/N10.webp',
       content: 'MEINE Electric Wins Tamil Nadu Student Innovators (TNSI) Award 2024.',
       link: 'https://www.linkedin.com/feed/update/urn:li:activity:7010884927990710272/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     
    ];

    return (
        <section id='news' className="font-sans px-8 lg:px-20 py-20 bg-[#FFFBD9]">
        <div className="container-padding">
            {/* Heading */}
            <div
            className="mb-12"
            >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                <h2 className="text-3xl text-[#202020] md:text-4xl font-bold">
                    Latest from Meine Electric
                </h2>
                </div>
            </div>
            </div>

            {/* Embla Carousel with arrows */}
            <div
            className="relative"
            >
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex text-sm">
                {newsList.map((news, index) => (
                    <div
                    key={index}
                    className="mx-3 flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] ] rounded-2xl overflow-hidden bg-[#f5ea89]/40 flex flex-col"
                    >
                    {news.image && (
                        <div className="relative h-64 w-full">
                        <Image
                            src={news.image}
                            alt={news.content}
                            fill
                            className="object-cover origin-top"
                        />
                        </div>
                    )}

                    {/* Card content - flex column with 'Read more' at bottom */}
                    <div className="p-4 flex flex-col flex-1">
                        <div className="text-gray-800 font-medium mb-4">{news.content}</div>

                        <a
                        href={news.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center text-xs text-[#B5D411] font-semibold hover:underline"
                        >
                        Read more <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Arrows */}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#FFFBD9]/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-40"
            >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-[#FFFBD9]/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-40"
            >
                <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
            </div>
        </div>
        </section>
    )
}
