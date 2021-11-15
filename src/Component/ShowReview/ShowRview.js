import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowSingleReview from '../ShowSingleReview/ShowSingleReview';
import './ShowReview.css'

const ShowRview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-castle-65738.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
        console.log(setReviews);
    }, [])
    return (
        <>
            <h3 className="text-center">Our Customar Review</h3>
            <div className="review-shows">
                {
                    reviews.map(review => <ShowSingleReview

                        key={review._id}
                        review={review}

                    ></ShowSingleReview>)
                }

            </div>
        </>

    );
};

export default ShowRview;