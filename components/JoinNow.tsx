'use client'
import React, { useState } from 'react';

const SignupComponent = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <div className="container mx-auto p-6 rounded-lg mb-24">
            <h1 className="text-3xl font-bold text-center mb-4">
                Start your first meeting for free in less than a minute!
            </h1>
            <div className='max-w-lg mx-auto'>
                <p className="text-center text-gray-600 mb-6">
                    We want you to get the right guidance with the right mentors.
                    Build your trust with Comen and head towards the journey to success
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Join now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupComponent;