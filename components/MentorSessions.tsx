"use client"
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarIcon, Clock } from "lucide-react";
import pastSessions from "@/constants/pastSessions";
import upcomingSessions from "@/constants/upcomingSessions";

interface Session {
    name: string;
    year: string;
    institution: string;
    department: string;
    date: string;
    time: string;
    isUpcoming: boolean;
}


const BookingCard = ({ name, year, institution, department, date, time, isUpcoming } : Session) => (
    <Card className="mb-4">
        <CardContent className="p-6">
            <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`} alt={name} />
                        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-sm text-gray-500">{year}, {institution}</p>
                        <p className="text-sm text-gray-500">{department}</p>
                    </div>
                </div>
                <Button variant="outline">View profile</Button>
            </div>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date}
                </div>
                <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                </div>
                <div>Video call</div>
            </div>
            <div className="mt-4 flex space-x-2">
                {isUpcoming ? (
                    <>
                        <Button variant="outline" className="flex-1">Reschedule</Button>
                        <Button variant="outline" className="flex-1">Cancel</Button>
                    </>
                ) : (
                    <>
                        <Button variant="outline" className="flex-1">Book again</Button>
                    </>
                )}
            </div>
        </CardContent>
    </Card>
);

const MentorSessions = () => {
    const [activeTab, setActiveTab] = useState("upcoming");

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    {upcomingSessions.map((session, index) => (
                        <BookingCard key={index} {...session} isUpcoming={true} />
                    ))}
                </TabsContent>
                <TabsContent value="history">
                    {pastSessions.map((session, index) => (
                        <BookingCard key={index} {...session} isUpcoming={false} />
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default MentorSessions;