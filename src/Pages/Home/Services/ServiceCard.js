import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, _id } = service;
    return (
        <div className="w-full">
            <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg' className='m-8'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Link to={`/service/${_id}`}>
                    <Button className='w-full' gradientDuoTone="purpleToBlue">
                        Details
                    </Button>
                </Link>
            </Card>
        </div>
    );
};

export default ServiceCard;