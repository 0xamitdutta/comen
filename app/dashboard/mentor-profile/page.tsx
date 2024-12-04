'use client'
import React, { useState } from 'react'
import ProfileReport from "@/components/ProfileReport"
import ReviewSection from "@/components/ReviewSection"
import { Calendar } from "@/components/ui/calendar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const chartData = [
    { month: "January", bookings: 10 },
    { month: "February", bookings: 15 },
    { month: "March", bookings: 20 },
    { month: "April", bookings: 5 },
    { month: "May", bookings: 25 },
    { month: "June", bookings: 3 },
]

const overallRating = 3.5;
const reviewData = [
    { rating: 5, count: 25 },
    { rating: 4, count: 2 },
    { rating: 3, count: 1 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
];

const MentorProfile = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const handleUpdateSlot = () => {
    }

    return (
        <div>
            <div className="container">
                <div className="flex justify-between">
                    <ProfileReport />
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border m-4 p-8"
                    />
                </div>
                <div className="flex justify-between">
                    <BarChart width={600} height={400} data={chartData} className='m-4'>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="bookings" fill="#8884d8" />
                    </BarChart>
                    <ReviewSection overallRating={overallRating} reviewData={reviewData} />
                </div>
            </div>
        </div>
    )
}

export default MentorProfile