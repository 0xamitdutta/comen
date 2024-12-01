'use client';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BecomeMentor = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                        <Image
                            src="/assets/profile-pictures/person3.jpg?height=400&width=400"
                            alt="Student with books and headphones"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                    </div>
                    <CardContent className="md:w-1/2 p-6 bg-blue-50">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Share Your College Journey and Make a Difference : Become a Mentor
                        </h2>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Earn and build your career as a mentor, start from college
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Make a positive impact on the lives of young aspirants
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Add mentorship experience to your resume, showcasing your leadership skills
                            </li>
                        </ul>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Get Started
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default BecomeMentor;