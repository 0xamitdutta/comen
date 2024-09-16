import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap, MessageSquare } from "lucide-react";

interface MentorReview {
    name: string;
    year: string;
    course: string;
    sessions: string;
    review: string;
    image: string;
    reviewer: {
        name: string;
        school: string;
    };
}

const MentorCard = ({ review }: { review: MentorReview }) => (
    <Card className="w-full max-w-md flex-shrink-0">
        <CardHeader className="p-6 bg-secondary">
            <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={review.image} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                        <GraduationCap className="mr-1 h-4 w-4" /> {review.year}
                    </p>
                    <p className="text-sm text-gray-500">{review.course}</p>
                    <p className="text-sm text-gray-500 mb-4 flex items-center">
                    </p>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-6">
            <p className="text-sm mb-4">"{review.review}"</p>
        </CardContent>
        <CardFooter>
            <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/api/placeholder/32/32" alt={review.reviewer.name} />
                    <AvatarFallback>{review.reviewer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-semibold">{review.reviewer.name}</p>
                    <p className="text-xs text-gray-500">{review.reviewer.school}</p>
                </div>
            </div>
        </CardFooter>
    </Card>
);

const MentorReview = ({ reviews, categories }: { reviews: MentorReview[], categories: string[] }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">We value your opinion</h1>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        variant={index === 0 ? "default" : "outline"}
                        className={index === 0 ? "bg-blue-500 hover:bg-blue-600" : ""}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="flex space-x-4 pb-4">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="container mx-auto px-4 py-8"
                >
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <MentorCard review={review} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    );
};

export default MentorReview;

// {mentors.map((mentor, index) => (
// <Card key={index} className="w-full max-w-md flex-shrink-0">
//     <CardContent className="p-6">
//         <div className="flex items-center mb-4">
//             <Avatar className="h-12 w-12 mr-4">
//                 <AvatarImage src={mentor.image} alt={mentor.name} />
//                 <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
//             </Avatar>
//             <div>
//                 <h3 className="font-semibold">{mentor.name}</h3>
//                 <p className="text-sm text-gray-500 flex items-center">
//                     <GraduationCap className="mr-1 h-4 w-4" /> {mentor.year}
//                 </p>
//                 <p className="text-sm text-gray-500">{mentor.course}</p>
//             </div>
//         </div>
//         <p className="text-sm text-gray-500 mb-4 flex items-center">
//             <MessageSquare className="mr-1 h-4 w-4" /> {mentor.sessions}
//         </p>
//         <p className="text-sm mb-4">"{mentor.review}"</p>
//         <div className="flex items-center">
//             <Avatar className="h-8 w-8 mr-2">
//                 <AvatarImage src="/api/placeholder/32/32" alt={mentor.reviewer.name} />
//                 <AvatarFallback>{mentor.reviewer.name.charAt(0)}</AvatarFallback>
//             </Avatar>
//             <div>
//                 <p className="text-sm font-semibold">{mentor.reviewer.name}</p>
//                 <p className="text-xs text-gray-500">{mentor.reviewer.school}</p>
//             </div>
//         </div>
//     </CardContent>
// </Card>
// ))}