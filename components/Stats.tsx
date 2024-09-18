import React from 'react';

const Stats = () => {
    const stats = [
        { value: '1000+', label: 'College Mentors' },
        { value: '10,000+', label: 'Positive Feedback' },
        { value: '24 Hours', label: 'Availability of Mentors' },
        { value: '100+', label: 'Colleges to choose from' },
    ];

    return (
        <div className="bg-gray-100 p-8 mb-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <div key={index} className="text-center">
                            <h2 className="text-4xl font-bold text-indigo-600 mb-2">{item.value}</h2>
                            <p className="text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;