import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from './ui/button';
import { Pencil } from "lucide-react";

const ProfileHeader = () => {
    return (
        <Card className="w-full border-0 rounded-none mb-20 ">
            <div className="h-36 bg-indigo-500 relative">
                {/* Abstract shapes */}
                <div className="absolute inset-0 flex justify-between items-start p-4">
                    <div className="w-12 h-12 bg-indigo-400 transform rotate-45"></div>
                    <div className="w-8 h-8 bg-indigo-400 transform rotate-45"></div>
                    <div className="w-16 h-16 bg-indigo-400 transform rotate-45"></div>
                </div>
            </div>
            <CardContent className="h-36 flex items-center px-6 py-4 -mt-12">
                <Avatar className="w-32 h-32 border-4 border-white">
                    <AvatarImage src="/assets/profile-pictures/person3.jpg" alt="Puja Mehra" />
                    <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <div className="ml-4 mt-12 flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-2">Puja Mehra</h2>
                    <p className="text-gray-600">St Francis School | 12th std</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="default" className="bg-indigo-500 hover:bg-indigo-600">
                        Book Session
                    </Button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Pencil className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileHeader;