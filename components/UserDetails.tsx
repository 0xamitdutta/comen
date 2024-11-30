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
import { useRouter } from 'next/navigation';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { auth } from '@/lib/firebase';

const UserDetailsComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentType, setStudentType] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const db = getFirestore();
    const router = useRouter();

    const handleSubmitDetails = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Get the current authenticated user
            const user = auth.currentUser;

            if (!user) {
                throw new Error('No authenticated user found');
            }

            // Create a document in Firestore with user details
            await setDoc(doc(db, 'users', user.uid), {
                firstName,
                lastName,
                email: user.email,
                studentType,
                graduationYear: parseInt(graduationYear),
                createdAt: new Date(),
                profileCompleted: true
            });

            // Redirect to dashboard or onboarding
            router.push('/dashboard');
        } catch (error) {
            console.error('Error saving user details', error);
            // Handle error (show message to user)
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
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Complete Your Profile
                </h2>
                <form onSubmit={handleSubmitDetails} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            required
                        />
                        <Input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
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

                    <Button type="submit" className="w-full">
                        Complete Profile
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UserDetailsComponent;