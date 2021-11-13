import React from 'react';
import { Card } from 'react-bootstrap';
import './ShowSingelReview.css'

const ShowSingleReview = ({ review }) => {
    const { name, occupation, description } = review;
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
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowSingleReview;