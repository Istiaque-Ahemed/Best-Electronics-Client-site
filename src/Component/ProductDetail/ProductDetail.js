import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import axios from "axios";
import { useForm } from "react-hook-form";
import './ProductDt.css'


const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { name, description, img, price } = product;

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post("http://localhost:5000/orders", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Your buying successful");
                    reset();
                }

            })
    }

    const { user } = useAuth()
    return (
        <div className="details-service">
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

                </Card>

            </div>
            <div>

                <h3 className="form-title">
                    Please fill the form and buy your product
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input" value={user.displayName} placeholder="Name" {...register("Name")} />
                    <input className="input" placeholder=" Address" {...register("Address")} />
                    <input className="input" value={user.email} placeholder="Email" {...register("email")} />
                    <input className="input" placeholder="Phone" {...register("phone")} />
                    <input className="input-detile" value={productId} placeholder="" {...register("productId")} />





                    <input className="input-btn" type="submit" value="Order" />
                </form>

            </div>
        </div>

    );
};

export default ProductDetail;
