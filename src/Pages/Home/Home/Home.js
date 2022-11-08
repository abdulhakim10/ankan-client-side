import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='m-8'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
                <Carousel indicators={false}>
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="..."
                    />
                </Carousel>
            </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <Link to='/services'>
                <Button className='mx-auto' gradientDuoTone="purpleToBlue">
                    See All
                </Button>
            </Link>
        </div>
    );
};

export default Home;