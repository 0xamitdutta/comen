import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, FileText, FileCheck, LayoutGrid, PlaneLanding } from "lucide-react";

const successPaths = [
    { title: "College Selections", icon: GraduationCap },
    { title: "College Counselling", icon: FileText },
    { title: "Competitive Exam Preps", icon: FileCheck },
    { title: "Campus Life Insights", icon: LayoutGrid },
    { title: "Abroad Studies", icon: PlaneLanding },
];

const SuccessPathItem = ({ title, icon: Icon }) => (
    <Card className="flex flex-col items-center p-4 transition-all hover:shadow-lg">
        <Icon className="w-12 h-12 mb-2 text-gray-700" />
        <CardContent className="text-center">
            <h3 className="font-semibold">{title}</h3>
        </CardContent>
    </Card>
);

const CollegeSuccessPath = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Your Path to College Success Starts Here
            </h1>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                Become the best version of yourself by accessing to the perspectives and
                life experiences of others who've been there, done that.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {successPaths.map((path, index) => (
                    <SuccessPathItem key={index} {...path} />
                ))}
            </div>
        </div>
    );
};

export default CollegeSuccessPath;