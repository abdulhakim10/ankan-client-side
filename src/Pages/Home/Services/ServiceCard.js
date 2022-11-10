import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
    const { title,img, _id, description, price } = service;
    return (
        <div className="w-full">
            <Card className='m-8'>
            <PhotoProvider>
        <div className="foo">
          <PhotoView src={img}>
            <img
              title="click for full preview"
              className="w-full h-60 rounded-md cursor-pointer"
              src={img}
              alt=""
            />
          </PhotoView>
        </div>
      </PhotoProvider>
           
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description?.length > 100 ? description.slice(0, 100)+'...' : description}
                </p>
                <h4 className="text-xl">Price: ${price}</h4>
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