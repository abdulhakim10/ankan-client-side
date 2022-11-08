import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div className='m-12'>
            <h2 className='text-4xl font-semibold'>Services:{services.length}</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            services.map(service => <ServiceCard 
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
        </div>
        </div>
    );
};

export default Services;