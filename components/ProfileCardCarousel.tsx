'use client'
import React, { useState, useEffect } from 'react';
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
    "/assets/profile-pictures/person1.jpg",
    "/assets/profile-pictures/person2.jpg",
    "/assets/profile-pictures/person3.jpg"
];

const ProfileCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Carousel className="w-full max-w-xs" plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]}>
            <CarouselContent className="w-full max-w-3xl">
                {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <Card className="rounded-lg overflow-hidden">
                            <CardContent className="flex aspect-square items-center justify-center relative">
                                <Image
                                    src={src}
                                    alt={`Profile Picture ${index + 1}`}
                                    fill
                                    objectFit='cover'
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ProfileCardCarousel;