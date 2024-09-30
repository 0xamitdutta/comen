import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, FileCheck, Clock, Coins } from "lucide-react";

const ProfileProgress = () => {
    return (
        <div className="w-1/4 space-y-4">
            <Card className="bg-slate-50">
                <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">Complete Profile</h3>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Your profile strength</p>
                    <Progress value={25} className="h-2 mb-1" />
                    <p className="text-sm text-indigo-600">25% done</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="bg-slate-100 p-3 rounded-lg">
                            <FileCheck className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total sessions</p>
                            <p className="font-semibold">5</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-slate-100 p-3 rounded-lg">
                            <Clock className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total learning time</p>
                            <p className="font-semibold">60 hrs</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-slate-100 p-3 rounded-lg">
                            <Coins className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Coins</p>
                            <p className="font-semibold">10</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileProgress;