import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneMissedIcon, FileCheck, Clock, Coins } from "lucide-react";

const ProfileReport = () => {
    return (
        <div className="w-2/3 m-4">
            <div className='flex flex-col space-y-4 m-4 p-4 '>
                <div className='flex justify-between gap-8'>
                    <Card className='p-8 w-1/2'>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <FileCheck className="w-12 h-12 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-lg text-gray-500">Total bookings</p>
                                    <p className="text-lg font-semibold">100</p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                    <Card className='p-8 w-1/2'>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                <PhoneMissedIcon className="w-12 h-12 text-indigo-600" />
                                </div>
                                <div>
                                <p className="text-lg text-gray-500">Total calls cancelled</p>
                                <p className="text-lg font-semibold">100</p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>
                <div className='flex gap-8 justify-between'>
                    <Card className='p-8 w-1/2'>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                <Clock className="w-12 h-12 text-indigo-600" />
                                </div>
                                <div>
                                <p className="text-lg text-gray-500">Total session time</p>
                                <p className="text-lg font-semibold">100</p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                    <Card className='p-8 w-1/2'>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                <Coins className="w-12 h-12 text-indigo-600" />
                                </div>
                                <div>
                                <p className="text-lg text-gray-500">Total earnings</p>
                                <p className="text-lg font-semibold">100</p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProfileReport;