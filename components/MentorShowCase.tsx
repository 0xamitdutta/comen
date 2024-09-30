import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
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
import { GraduationCap, MessageSquare } from "lucide-react";
import MentorCard from "@/components/MentorCard";


interface Mentor {
    name: string;
    year: string;
    college: string;
    major: string;
    sessions: string;
    reviews: string;
    imageUrl: string;
}

const MentorShowcase = ({ mentors, number }: { mentors: Mentor[], number: number }) => {
    return (
        <div className="flex flex-col items-center justify-center mb-24">
            <div className="container flex justify-between items-center px-4 pt-8">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Find Top College Mentors
                </h1>
                <Button>Discover More</Button>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="container mx-auto px-4 py-8"
            >
                <CarouselContent>
                    {mentors.map((mentor, index) => (
                        <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/${number}`}>
                            <div className="p-1">
                                <MentorCard mentor={mentor} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default MentorShowcase;