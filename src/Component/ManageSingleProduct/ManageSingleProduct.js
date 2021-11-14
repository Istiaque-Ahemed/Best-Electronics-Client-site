import { Button } from 'react-bootstrap';
import React from 'react';
import './ManageSingleProduct.css'

const ManageSingleProduct = ({ manageSP }) => {
    const { _id, name, description, img, price } = manageSP;

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure,you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        //   const reaming = orders.filer((order) => order._id !== id);
                        //   setOrdereds(reaming);
                        alert("Deleted Successfully");
                    }
                });
        }
    };
    return (
        <div className="order-card1">
            <div className="info-card1">
                <img src={img} alt="This is mrico oven" />
                <h4 className="text-center">Price:{price}</h4>
                <h3>{name}</h3>
                <p>{description}</p>
                <Button className="Delete1" onClick={() => handleDelete(_id)} > Delete</Button>
            </div>
        </div>
    );
};

export default ManageSingleProduct;