import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [newReviews, setNewReviews] = useState([])

    useEffect(() => {
        fetch('https://ankan-print-assignment-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [newReviews])
    const selectedReviews = comments.filter(comment => comment.email === user?.email)
    console.log(selectedReviews)


    const handleDelete = (id) => {
        fetch(`https://ankan-print-assignment-server.vercel.app/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.error('Review deleted')
                    const remaining = selectedReviews.filter(sR => sR._id !== id)
                    setNewReviews(remaining)
                }
            })
            .catch(e => console.error(e))
    }
    return (
        <div className='m-8'>
            <h2 className="text-2xl">Reviews: {selectedReviews.length}</h2>
            <div>
                {
                    selectedReviews.map(sR => <div className="overflow-x-auto md:mx-auto md:w-3/5 m-4 border border-purple-600 rounded-lg">
                        <table className="table w-4/5 mx-auto">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={sR.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{sR.name}</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge m-2 p-4 badge-ghost badge-sm">{sR.review}</span>
                                    </td>
                                    <th>
                                    <Link to={`/edit/${sR._id}`}><button className="py-3 px-6 rounded-lg btn-ghost">Edit</button></Link>
                                        <button onClick={() => handleDelete(sR._id)} className='btn btn-ghost ml-2'>Delete</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyReviews;