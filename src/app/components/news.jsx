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
    type: 'iframe',
    src: 'https://drive.google.com/file/d/1RQ5ThMzKZE5HGGdWQffS8py7G4U2JiHM/preview',
    content: 'Delivered a deeptech startup address at National Startup Day in the presence of Hon\'ble PM Narendra Modi.',
    link: 'https://linkedin.com/...'
    },
    {
        image: '/news/N17.jpeg',
        content: 'MEINE Electric presented an invited talk on iron-air batteries at IMBRS 2025.',
        link: 'https://www.linkedin.com/posts/meineelectric_meineelectric-imbrs25-batteryresearch-activity-7407314931987013632-KgoL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N18.jpeg',
        content: 'Selected as the Top 50 finalists in Tata Social Enterprise Challenge 13th Edition',
        link: 'https://www.linkedin.com/posts/meineelectric_meineelectric-tsecsummit-cleanenergy-activity-7404474476199124993-tAOx/'
    },
    {
        image: '/news/N19.jpeg',
        content: 'Recognized among the Top 50 Innovators at CSR & Sustainability Conclave 2025, Bhubaneswar.',
        link: 'https://www.linkedin.com/posts/meineelectric_ironair-ldes-energytransition-activity-7401508740216393728-OB16?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N20.jpeg',
        content: 'MEINE Electric was selected as the Investor\'s Pick Startup at The Battery Show, 2025',
        link: 'https://www.linkedin.com/posts/meineelectric_meineelectric-longdurationenergystorage-ironair-activity-7393964405656518656-NOHY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N21.jpeg',
        content: 'Selected among the top nine Asia-Pacific startups in the Baker Hughes Energy Ideas Program.',
        link: 'https://www.linkedin.com/posts/meineelectric_meineelectric-bakerhughes-energyideas-activity-7396854079467155457-sXj7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N22.jpeg',
        content: 'Invited to the BSA Crescent Institute of Science and Technology for a keynote talk on Future of Energy Storage',
        link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_crescentinstitute-meineelectric-energystorage-activity-7396501360449490944-vC-e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N23.jpeg',
        content: 'MEINE Electric joined the panel on LDES at The Battery Show 2025.',
        link: 'https://www.linkedin.com/posts/stuti-kakkar_ldes-cost-reliability-activity-7394277307319754752-6wmp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N24.jpeg',
        content: 'Winners of the First Ever Thomas Bata Future Vision Award by Schulich School of Business',
        link: 'https://www.linkedin.com/posts/meineelectric_togethermission-thomasbatafuturevisionaward-activity-7389209977246248960-m4YH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N25.jpeg',
        content: 'MEINE Electric selected for IRENA\'s third global cohort, the only Indian startup honored this year',
        link: 'https://www.linkedin.com/posts/meineelectric_meineelectric-ldes-cleanenergy-activity-7384463662490587136-qrZJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },


    {
        image: '/news/N12.jpeg',
        content: 'Recognized among the top 50 emerging deeptech startups by NASSCOM Emerge 50.',
        link: 'https://www.linkedin.com/posts/nasscomdeeptech_emerge50awards2025-ugcPost-7359239202267389953-xeUJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzohttps://www.linkedin.com/posts/meineelectric_meineelectric-movefastbuildthings-emerge50-activity-7360613610248617984-w5bb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N11.webp',
        content: 'Felicitated by Hon\'ble Minister Shri Piyush Goyal at the Startup Mahakumbh event.',
        link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meinelectric-movefastbuildthings-deeptech-activity-7314505968090800129-HQY7/?rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
    },
    {
        image: '/news/N16.jpeg',
        content: 'Cell chemistry surpasses global standards for metal air performance.',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7338944102022959106/'
    },
    {
        image: '/news/N13.jpeg',
        content: 'Signed a strategic Memorandum of Understanding with Chematico Technologies to accelerate innovation.',
        link: 'https://www.linkedin.com/posts/meineelectric_innovation-impact-commercial-activity-7354496848117583872-oY_X/'
    },
    {
        image: '/news/N15.jpeg',
        content: 'Selected for the prestigious NIDHI PRAYAS grant to support scaling breakthrough technology solutions.',
        link: 'https://www.linkedin.com/posts/sp-tbi_delighted-to-extend-nidhi-prayas-grant-in-aid-activity-7343254317602078722-Pbj-/'
    },
            // {
      //  image: '/news/N14.jpeg',
      //  content: 'Showcased tech at TATWA summit in New Delhi on the occasion of the World Environment Day organized by Department of Science & Technology',
      //  link: ' https://www.linkedin.com/posts/meineelectric_meinelectric-energytransition-cleanenergy-activity-7340318422183874560-zvDd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A. '
      // },
      //  {
      //    image: '/news/N1.webp',
      //    content: 'MEINE Electric Wins Student Startup of the Year 2024 at Micelio Mobility Awards.',
      //    link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_cleanenergy-meineelectric-movefastbuildthings-ugcPost-7261298015968055296-bkL-/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //   image: '/news/N2.webp',
      //   content: 'MEINE Electric featured on CNBC-TV18 as a Top 5 Finalist in LeapToUnicorn Season 2',
      //   link: 'https://www.linkedin.com/posts/stuti-kakkar_stealth-spotlight-leaptounicorn-activity-7268657594808832001-l6kD/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //    image: '/news/N3.webp',
      //    content: 'MEINE Electric Named a Top 5 Finalist in #LeapToUnicorn Season 2.',
      //    link: 'https://www.linkedin.com/posts/stuti-kakkar_top-5-startups-of-2024-grand-finale-episode-activity-7268519955912888320-crgW/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //    image: '/news/N4.webp',
      //    content: 'MEINE Electric Recognized at Microsoft\'s Tech Sector Decarbonization Innovation Challenge.',
      //    link: 'https://www.linkedin.com/posts/stuti-kakkar_decarbonizing-datacentres-ai-activity-7266715955005665281-ann8/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //    image: '/news/N5.webp',
      //    content: 'MEINE Electric Featured on CNBC-TV18 Young Turks: A Milestone in Our Journey.',
      //    link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-movefastbuildthings-bigthingsahead-ugcPost-7275778387028119552-91rF/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //    image: '/news/N6.webp',
      //    content: 'MEINE Electric Featured in Antler\'s ESG & Impact Report as a Key Driver of Sustainability in India.',
      //    link: 'https://www.linkedin.com/posts/stuti-kakkar_indias-sustainability-leap-activity-7299133370960072704-jLaV/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //    image: '/news/N7.webp',
      //    content: 'Investing in Meine Electric: Creating a solution for limitless renewable energy',
      //    link: 'https://www.antler.co/blog/investing-in-meine-electric-creating-a-solution-for-limitless-renewable-energy'
      //  },
      //  {
      //    image: '/news/N8.webp',
      //    content: 'Insights from Smile Summit: Strengthening Local Supply Chains & Innovation Resilience',
      //    link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-movefastandbuildthings-hydrogenfuelcells-activity-7227715300148862976-2Ut2/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //    image: '/news/N9.webp',
      //    content: 'MEINE Electric Showcased to Anna University\'s Vice Chancellor & Former NSIC CMD',
      //    link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-sustainableenergy-innovation-activity-7215699877467455488-nSrm/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
      //  {
      //    image: '/news/N10.webp',
      //    content: 'MEINE Electric Wins Tamil Nadu Student Innovators (TNSI) Award 2024.',
      //    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7010884927990710272/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
      //  },
    ];

    return (
        <section id='news' className="font-sans px-8 lg:px-20 py-10 sm:py-20 bg-[#FFFBD9]">
        <div className="container-padding">
            {/* Heading */}
            <div
            className="mb-12"
            >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                <h2 className="text-3xl text-[#202020] md:text-4xl font-bold">
                    Latest From <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">MEINE Electric</span>
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
                    {(news.type === 'iframe' || news.image) && (
                        <div className="relative h-64 w-full">
                            <div className="relative h-64 w-full">
                                {news.type === 'iframe' ? (
                                    <iframe
                                    src={news.src}
                                    className="h-full w-full"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    loading="lazy"
                                    />
                                ) : (
                                    <Image
                                    src={news.image}
                                    alt={news.content}
                                    fill
                                    className="object-cover"
                                    />
                                )}
                            </div>
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

            {/* Title */}
            <div
            className="mt-12"
            >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <h2 className="text-xl text-center w-full text-[#202020] md:text-xl font-bold">
                    As Seen In
                </h2>
            </div>
            </div>

            {/* News Logos */}
            <div className="flex lg:flex-row flex-col gap-8 justify-center items-center">
                <a className="hover:scale-110 transition-all duration-150 ease-in-out" href="https://www.thehindubusinessline.com/companies/chennais-meine-electric-raises-750000-in-pre-seed-funding-to-build-its-iron-air-battery-systems/article70547022.ece" target="_blank" rel="noopener noreferrer">
                    <img
                    src="/logos/hindu.png"
                    alt="Image 1"
                    className="w-48 h-auto aspect-video object-contain"
                    />
                </a>

                <a className="hover:scale-110 transition-all duration-150 ease-in-out" href="https://b2b.economictimes.indiatimes.com/news/entrepreneur/meine-electric-raises-750000-funding-led-by-antler-rebalance-venture-catalysts/127282062" target="_blank" rel="noopener noreferrer">
                    <img
                    src="/logos/economic.png"
                    alt="Image 2"
                    className="w-54 h-auto aspect-video object-contain"
                    />
                </a>

                <a className="hover:scale-110 transition-all duration-150 ease-in-out" href="https://www.saurenergy.com/solar-energy-news/meine-electric-raises-67-cr-to-power-long-duration-iron-air-batteries-in-apac-11020959/" target="_blank" rel="noopener noreferrer">
                    <img
                    src="/logos/saur.png"
                    alt="Image 3"
                    className="w-42 h-auto aspect-video object-contain"
                    />
                </a>
            </div>
        </div>
        </section>
    )
}
