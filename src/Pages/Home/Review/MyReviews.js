import { data } from 'autoprefixer';
import { Dropdown } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [])
    const selectedReviews = comments.filter(comment => comment.email === user.email)
    console.log(selectedReviews)
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
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <Dropdown label="Dropdown">
                                            <Dropdown.Item>
                                                Dashboard
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Settings
                                            </Dropdown.Item>
                                        </Dropdown>
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