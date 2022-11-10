import React from 'react';

const Review = ({ comment }) => {
    const { name, review, img } = comment;
    console.log(comment)


    return (
        <div className='flex'>
            <div className='m-10 justify-start'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt=''/>
                    </div>
                </div>
            </div>
            <div className='border border-purple-600 p-12 mt-4 rounded-lg bg-purple-100'>
                <h4 className="text-xl">{review}</h4>
                <p>-{name}</p>
            </div>
        </div>
    );
};

export default Review;