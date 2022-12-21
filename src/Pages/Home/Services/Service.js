import { Button } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const Service = () => {
    const { title, img, description, service_id, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        // console.log(review)

        const reviews = {
            service: service_id,
            review: review,
            name: user.displayName,
            img: user.photoURL,
            email: user.email
        }

        fetch('https://ankan-print-assignment-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged === true){
                    toast.success('Review added successfully')
                }
            })
            .catch(e => console.error(e))
        form.reset()
    }

    // get reviews
    useEffect(() => {
        fetch('https://ankan-print-assignment-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setComments(data)
                // console.log(data)
            })
    }, [comments])

    const selectedComments = comments.filter(comment => comment.service === service_id)
    // console.log('filter',selected)
    return (
        <div className='m-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body md:w-1/2">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <h4 className="text-2xl font-bold">Price: ${price}</h4>
                </div>
            </div>
            {user?.email ?
                <div className='w-4/5 mx-auto my-8 border border-purple-600 bg-fuchsia-100 rounded-lg p-10'>
                    <h2 className="text-2xl mb-4">Add Reviews</h2>
                    <form onSubmit={handleReview} className='flex'>
                        <textarea className="textarea textarea-bordered w-2/3" required name='review' placeholder="Write Review"></textarea>
                        <Button type='submit' className='mt-10 ml-2'>Add Review</Button>
                    </form>
                </div>
                :
                <h2 className="text-2xl">To add review Please <Link className='text-blue-600' to='/login'><u>login</u></Link> first</h2>
            }
            <div className='md:grid grid-cols-2'>

                {
                    selectedComments.map(comment => <Review
                        key={comment._id}
                        comment={comment}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Service;