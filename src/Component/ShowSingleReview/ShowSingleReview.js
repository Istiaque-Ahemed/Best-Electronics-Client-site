import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './ShowSingelReview.css'

const ShowSingleReview = ({ review }) => {
    const { name, occupation, description, rating } = review;
    return (
        <div>
            <Card className="text-center rev mt-4 ">
                <Card.Header>Review</Card.Header>
                <Card.Body>
                    <Card.Title>
                        {name}

                    </Card.Title>
                    <span className="fw-lighter">{occupation}</span>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"

                    ></Rating>
                </Card.Body>
            </Card>
        </div >
    );
};

export default ShowSingleReview;