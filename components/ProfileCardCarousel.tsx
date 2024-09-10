'use client'
import React, { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
      // ...
        </Carousel>
    )
}

import Image from 'next/image';

const images = [
    "/assets/profile-pictures/person1.jpg?height=400&width=400",
    "/assets/profile-pictures/person2.jpg?height=400&width=400",
    "/assets/profile-pictures/person3.jpg?height=400&width=400"
];

const ProfileCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <Carousel className="w-full max-w-xs" plugins={[plugin.current]}>
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="border-0 shadow-none">
                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <div className="relative w-full h-[400px] w-[400px]">
                                        <Image
                                            src={src}
                                            alt={`Profile Picture ${index + 1}`}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ProfileCardCarousel;