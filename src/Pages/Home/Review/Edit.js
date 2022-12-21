import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const {review, _id} = useLoaderData();
    console.log(review, _id)

    const handleUpdate = (event) => {
        event.preventDefault();
        const review = event.target.updateReview.value;
        const updateReview = {review}

        console.log(updateReview)

        fetch(`https://ankan-print-assignment-server.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Review updated')
            }
        })
        .catch(e => console.error(e))

    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
            <input type="text" name='updateReview' defaultValue={review} />
            <input className='btn btn-ghost' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Edit;