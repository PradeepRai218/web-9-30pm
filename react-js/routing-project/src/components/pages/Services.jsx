import React from 'react'
import Header from '../common/Header';

export default function Services() {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Build responsive and modern websites',
            image: 'https://via.placeholder.com/600x360.png?text=Web+Development'
        },
        {
            id: 2,
            title: 'App Development',
            description: 'Create mobile and desktop applications',
            image: 'https://via.placeholder.com/600x360.png?text=App+Development'
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Design beautiful user interfaces',
            image: 'https://via.placeholder.com/600x360.png?text=UI%2FUX+Design'
        },
    ];

    return (
        <>
            <Header/>
             <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-blue-600 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg opacity-90">Comprehensive solutions tailored to your needs</p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
       
    )
}
