"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { auth } from '@/lib/firebase';

const UserDetailsComponent = () => {
    const [activeTab, setActiveTab] = useState('mentee');
    const db = getFirestore();

    // Mentee State
    const [menteeFirstName, setMenteeFirstName] = useState('');
    const [menteeLastName, setMenteeLastName] = useState('');
    const [studentType, setStudentType] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [desiredMajors, setDesiredMajors] = useState('');

    // Mentor State
    const [mentorFirstName, setMentorFirstName] = useState('');
    const [mentorLastName, setMentorLastName] = useState('');
    const [currentProfession, setCurrentProfession] = useState('');
    const [industry, setIndustry] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');

    const router = useRouter();

    const handleSubmitMenteeDetails = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;

            if (!user) {
                throw new Error('No authenticated user found');
            }

            await setDoc(doc(db, 'users', user.uid), {
                firstName: menteeFirstName,
                lastName: menteeLastName,
                email: user.email,
                userType: 'mentee',
                studentType,
                graduationYear: parseInt(graduationYear),
                desiredMajors,
                createdAt: new Date(),
                profileCompleted: true
            });

            router.push('/searchMentors');
        } catch (error) {
            console.error('Error saving mentee details', error);
        }
    };

    const handleSubmitMentorDetails = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;

            if (!user) {
                throw new Error('No authenticated user found');
            }

            await setDoc(doc(db, 'users', user.uid), {
                firstName: mentorFirstName,
                lastName: mentorLastName,
                email: user.email,
                userType: 'mentor',
                currentProfession,
                industry,
                yearsOfExperience: parseInt(yearsOfExperience),
                createdAt: new Date(),
                profileCompleted: true
            });

            router.push('/searchMentors');
        } catch (error) {
            console.error('Error saving mentor details', error);
        }
    };

    // Generate an array of years for graduation year dropdown
    const currentYear = new Date().getFullYear();
    const graduationYears = Array.from(
        { length: 10 },
        (_, i) => (currentYear + i).toString()
    );

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="mentee">I'm a Mentee</TabsTrigger>
                        <TabsTrigger value="mentor">I'm a Mentor</TabsTrigger>
                    </TabsList>

                    <TabsContent value="mentee">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Mentee Profile
                        </h2>
                        <form onSubmit={handleSubmitMenteeDetails} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    value={menteeFirstName}
                                    onChange={(e) => setMenteeFirstName(e.target.value)}
                                    placeholder="First Name"
                                    required
                                />
                                <Input
                                    type="text"
                                    value={menteeLastName}
                                    onChange={(e) => setMenteeLastName(e.target.value)}
                                    placeholder="Last Name"
                                    required
                                />
                            </div>

                            <Select
                                value={studentType}
                                onValueChange={setStudentType}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Student Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high_school">High School Student</SelectItem>
                                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                                    <SelectItem value="graduate">Graduate Student</SelectItem>
                                    <SelectItem value="international">International Student</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select
                                value={graduationYear}
                                onValueChange={setGraduationYear}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Expected Graduation Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {graduationYears.map(year => (
                                        <SelectItem key={year} value={year}>
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Input
                                type="text"
                                value={desiredMajors}
                                onChange={(e) => setDesiredMajors(e.target.value)}
                                placeholder="Desired Majors/Fields of Interest"
                                required
                            />

                            <Button type="submit" className="w-full">
                                Complete Mentee Profile
                            </Button>
                        </form>
                    </TabsContent>

                    <TabsContent value="mentor">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Mentor Profile
                        </h2>
                        <form onSubmit={handleSubmitMentorDetails} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    value={mentorFirstName}
                                    onChange={(e) => setMentorFirstName(e.target.value)}
                                    placeholder="First Name"
                                    required
                                />
                                <Input
                                    type="text"
                                    value={mentorLastName}
                                    onChange={(e) => setMentorLastName(e.target.value)}
                                    placeholder="Last Name"
                                    required
                                />
                            </div>

                            <Input
                                type="text"
                                value={currentProfession}
                                onChange={(e) => setCurrentProfession(e.target.value)}
                                placeholder="Current Profession"
                                required
                            />

                            <Select
                                value={industry}
                                onValueChange={setIndustry}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="technology">Technology</SelectItem>
                                    <SelectItem value="finance">Finance</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="education">Education</SelectItem>
                                    <SelectItem value="engineering">Engineering</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select
                                value={yearsOfExperience}
                                onValueChange={setYearsOfExperience}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Years of Experience" />
                                </SelectTrigger>
                                <SelectContent>
                                    {['0-2', '3-5', '6-10', '11-15', '15+'].map(range => (
                                        <SelectItem key={range} value={range}>
                                            {range} years
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Button type="submit" className="w-full">
                                Complete Mentor Profile
                            </Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default UserDetailsComponent;