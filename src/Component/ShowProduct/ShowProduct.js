import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowProduct = ({ product }) => {
    const { _id, name, description, img, price } = product;
    const url = `/product/${_id}`;
    return (
        <div className="card-bod col-lg-4 col-md-3 col-12">
            <Card className="card shadow">
                <div className="inner">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                    <h3>{name}</h3>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3 className="text-center text-danger">Price:{price}</h3>
                </Card.Body>

                <br />

                <Link to={url}>
                    <Button className="button" variant="">Buy Now</Button>

                </Link>

            </Card>

        </div>
    );
};

export default ShowProduct;