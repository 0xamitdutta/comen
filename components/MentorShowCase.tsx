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

interface Mentor {
    name: string;
    year: string;
    college: string;
    major: string;
    sessions: string;
    reviews: string;
    imageUrl: string;
}

interface MentorShowcaseProps {
    mentors: Mentor[];
}

async function getMentors(): Promise<Mentor[]> {
    const result = await fetch("/api/mentors");
    return result.json();
}

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
    <Card className="shadow-lg">
        <CardHeader className="p-0">
            <img src={mentor.imageUrl} alt={mentor.name} className="w-full h-80 object-cover rounded-t-lg" />
        </CardHeader>
        <CardContent className="p-4 mt-4">
            <CardTitle className="text-lg font-semibold mb-2">{mentor.name}</CardTitle>
            <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span>{`${mentor.year}, ${mentor.college}`}</span>
                </div>
                <div>{mentor.major}</div>
                <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>{`${mentor.sessions} (${mentor.reviews})`}</span>
                </div>
            </div>
        </CardContent>
    </Card>
);

const MentorShowcase = ({ mentors }: { mentors: Mentor[] }) => {
    const mentorsData = getMentors();
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
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
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