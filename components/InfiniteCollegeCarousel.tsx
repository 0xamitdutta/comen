'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const images = [
    "/assets/college-logos/iitb.png",
    "/assets/college-logos/aiims.png",
    "/assets/college-logos/iima.png",
    "/assets/college-logos/bitspilani.png",
    "/assets/college-logos/nid.png",
    "/assets/college-logos/nit.png",
    "/assets/college-logos/srm.png",
]

const InfiniteCollegeCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroller = scrollRef.current;

        const addAnimation = () => {
            if (!scroller) return;
            const innerScroller = scroller.querySelector('.scroll_inner');
            if (!innerScroller) return;

            // if (innerScroller.getAttribute("dataCloned") === "true") return;
            const innerScrollerChildren = Array.from(innerScroller.children);

            innerScrollerChildren.forEach((child, index) => {
                const extendedLogos = child.cloneNode(true) as HTMLElement;
                innerScroller.appendChild(extendedLogos);
            });
            // innerScroller.setAttribute("dataCloned", "true");
        };
        addAnimation();
    }, []);

    return (
        <div ref={scrollRef} className='scroller container mx-auto px-4 py-8 border '>
            <div className='scroll_inner flex flex-wrap gap-4 py-4 animate-infinite_scroll'>
                {
                    images.map((src, index) => (
                        <div key={index} className='flex items-center justify-center h-[100px] w-[100px]'>
                            <Image src={src} alt={`Collge logo ${index + 1}`} height={100} width={100} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InfiniteCollegeCarousel