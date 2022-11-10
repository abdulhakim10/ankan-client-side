import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [newReviews, setNewReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [newReviews])
    const selectedReviews = comments.filter(comment => comment.email === user.email)
    console.log(selectedReviews)

    
   const handleDelete = (id) =>{
    fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            const remaining = selectedReviews.filter(sR => sR._id !== id)
            setNewReviews(remaining)
        }
    })
    .catch(e => console.error(e))
   }
    return (
        <div>
            <h2 className="text-2xl">Reviews: {selectedReviews.length}</h2>
            <div>
                {
                    selectedReviews.map(sR => <div className="overflow-x-auto w-full">
                        <table className="table w-full">
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
                                        <span  className="badge m-2 p-4 badge-ghost badge-sm">{sR.review}</span>
                                    </td>
                                    <Link to={`/edit/${sR._id}`}><button className="btn-ghost">Edit</button></Link>
                                    <th>
                                       <button onClick={() => handleDelete(sR._id)} className='btn btn-ghost'>X</button>
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