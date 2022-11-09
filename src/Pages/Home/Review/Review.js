import React from 'react';

const Review = ({comment}) => {
    const {service, name, review} = comment;
    console.log(comment)
    

    return (
        <div>
            <p>{`${review} ${service}`}</p>
        </div>
    );
};

export default Review;