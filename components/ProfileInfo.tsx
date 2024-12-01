import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Book } from "lucide-react";
import MentorShowcase from './MentorShowCase';
import mentors from "@/constants/mentors";

const ProfileInfo = () => {
    return (
        <div className="w-3/5 space-y-4 mx-8 px-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">About</CardTitle>
                    <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                        <Pencil className="w-5 h-5 text-gray-600" />
                    </button>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700">
                        Hi, I'm Puja, a 12th-grade student passionate about science and technology, aiming to pursue
                        higher studies in engineering. I have always been fascinated by how things work, and this
                        curiosity drives my interest in subjects like physics and mathematics. My goal is to get into a...
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">Education</CardTitle>
                    <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                        <Pencil className="w-5 h-5 text-gray-600" />
                    </button>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <Book className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">St Francis School, Bangalore</h3>
                            <p className="text-gray-600">Science (Physics & Mathematic)</p>
                            <p className="text-gray-600">12th Std</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        
    );
};

export default ProfileInfo;