'use client'
import React, { useState } from 'react'
import ProfileCardCarousel from './ProfileCardCarousel'
import { Button } from './ui/button'

const Hero = () => {
    const [activeTab, setActiveTab] = useState('mentee');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="text-center lg:text-left max-w-lg">
                    <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                        <a
                            href="#"
                            className={`pb-1 ${activeTab === 'mentee'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-400 border-b-2 border-transparent hover:border-gray-400'
                                }`}
                            onClick={() => handleTabClick('mentee')}
                        >
                            Mentee
                        </a>
                        <a
                            href="#"
                            className={`pb-1 ${activeTab === 'mentor'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-400 border-b-2 border-transparent hover:border-gray-400'
                                }`}
                            onClick={() => handleTabClick('mentor')}
                        >
                            Mentor
                        </a>
                    </div>
                    {
                        activeTab == 'mentee' ? (
                            <>
                                <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
                                    Connect, Learn, and Succeed with Comen
                                </h1>
                                <p className="text-gray-600 mb-6">
                                    Chart Your Future with Guidance from Today's College Stars!
                                </p>
                                <div className="relative max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Search by College/ Course"
                                        className="w-full py-3 px-4 border rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <Button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white py-2 px-4 rounded-full">
                                        Search
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
                                    Turn Your Insigts into Impact: Mentor With Comen
                                </h1>
                                <p className="text-gray-600 mb-6">
                                    Guide Aspiring Students and Shape Future Leaders!
                                </p>
                                <div className="relative max-w-md">
                                    <Button className="w-full py-6 px-4 border rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                        Search
                                    </Button>
                                </div>
                            </>
                        )
                    }
                </div>

                {/* Right Section */}
                <div className="mt-12 lg:mt-0 ">
                    <ProfileCardCarousel />
                </div>
            </div>
        </section>
    )
}

export default Hero