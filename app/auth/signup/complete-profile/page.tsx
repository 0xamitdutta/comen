"use client"

import React, { useState, useMemo } from 'react';
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
import { Combobox } from "@/components/ui/combobox";
import { useRouter } from 'next/navigation';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { auth } from '@/lib/firebase';
// HIGHLIGHT START
import universities from '@/data/universities.json'; // Import the universities JSON
import degrees_with_cat from '@/data/degrees_with_cat.json'
// HIGHLIGHT END

const UserDetailsComponent = () => {
    const [activeTab, setActiveTab] = useState('mentee');
    const db = getFirestore();

    // Mentee State
    const [menteeFirstName, setMenteeFirstName] = useState('');
    const [menteeLastName, setMenteeLastName] = useState('');
    const [studentType, setStudentType] = useState('');
    const [desiredMajors, setDesiredMajors] = useState('');

    // Mentor State
    const [mentorFirstName, setMentorFirstName] = useState('');
    const [mentorLastName, setMentorLastName] = useState('');
    const [degreeCat, setDegreeCat] = useState('');
    const [degree, setDegree] = useState('');
    // HIGHLIGHT START
    const [collegeName, setCollegeName] = useState('');
    const [collegeSearchTerm, setCollegeSearchTerm] = useState('');
    // HIGHLIGHT END

    const [currentYear, setCurrentYear] = useState('');

    const router = useRouter();

    // HIGHLIGHT START
    // Memoized filtered universities based on search term
    const filteredUniversities = useMemo(() => {
        if (!collegeSearchTerm) return universities;
        return universities.filter(uni => 
            uni.name.toLowerCase().includes(collegeSearchTerm.toLowerCase())
        ).slice(0, 10); // Limit to 10 results
    }, [collegeSearchTerm]);
    // HIGHLIGHT END

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
                desiredMajors,
                // HIGHLIGHT START
                collegeName, // Add this back with the new combobox selection
                // HIGHLIGHT END
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
                degree,
                // HIGHLIGHT START
                collegeName, // Update to use the new combobox selection
                // HIGHLIGHT END
                currentYear: parseInt(currentYear, 10),
                createdAt: new Date(),
                profileCompleted: true,
                reviews: 0,
                reviews_arr: [],
                rating: 0,
                sessions: 0
            });

            router.push('/searchMentors');
        } catch (error) {
            console.error('Error saving mentor details', error);
        }
    };

    
    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="mentee">I'm a Mentee</TabsTrigger>
                        <TabsTrigger value="mentor">I'm a Mentor</TabsTrigger>
                    </TabsList>

                    {/* Mentee Tab Content */}
                    <TabsContent value="mentee">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Mentee Profile
                        </h2>
                        <form onSubmit={handleSubmitMenteeDetails} className="space-y-4">
                            {/* Existing first name and last name inputs */}
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

                            {/* Existing student type select */}
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
                            

                            {/* <Input
                                type="text"
                                value={desiredMajors}
                                onChange={(e) => setDesiredMajors(e.target.value)}
                                placeholder="Desired Majors/Fields of Interest"
                                required
                            /> */}

                            <Combobox
                                options={degrees_with_cat.map(cat => ({
                                    value: cat.category,
                                    label: `${cat.category}`
                                }))}
                                value={desiredMajors}
                                onChange={setDesiredMajors}
                                placeholder="Desired Majors/Fields of Interest"
                            />

                            {/* HIGHLIGHT START */}
                            <Combobox 
                                options={universities.map(uni => ({
                                    value: uni.name,
                                    label: `${uni.name} (${uni.country})`
                                }))}
                                value={collegeName}
                                onChange={setCollegeName}
                                placeholder="Select College"
                            />
                            {/* HIGHLIGHT END */}

                            <Button type="submit" className="w-full">
                                Complete Mentee Profile
                            </Button>
                        </form>
                    </TabsContent>

                    {/* Mentor Tab Content */}
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
                            <Combobox 
                                options={degrees_with_cat.map(cat => ({
                                    value: cat.category,
                                    label: `${cat.category}`
                                }))}
                                value={degreeCat}
                                onChange={setDegreeCat}
                                placeholder="Select degree category"
                            />
                            {/* <Input
                                type="text"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                placeholder="Degree"
                                required
                            /> */}
                            <Combobox
                                options={degrees_with_cat
                                    .find(cat => cat.category === degreeCat)?.degrees.map(degree => ({
                                        value: degree,
                                        label: degree
                                    })) || []}
                                value={degree}
                                onChange={setDegree}
                                placeholder="Select degree"
                            />

                            {/* HIGHLIGHT START */}
                            <Combobox 
                                options={universities.map(uni => ({
                                    value: uni.name,
                                    label: `${uni.name} (${uni.country})`
                                }))}
                                value={collegeName}
                                onChange={setCollegeName}
                                placeholder="Select College"
                            />
                            {/* HIGHLIGHT END */}

                            <Input
                                type="number"
                                value={currentYear}
                                onChange={(e) => setCurrentYear(e.target.value)}
                                placeholder="Current year in college"
                                required
                            />

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