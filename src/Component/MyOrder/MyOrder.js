
import { Button } from 'react-bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Myorder.css'
const MyOrder = ({ myorder }) => {
    const { Name, Address, email, phone, productId, _id } = myorder;
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    // Delete 
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure,you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        //   const reaming = orders.filer((order) => order._id !== id);
                        //   setOrdereds(reaming);
                        alert("Deleted Successfully");
                    }
                });
        }
    };

    return (
        <>

            <div className="order-card">
                <div className="info-card">
                    <img src={info.img} alt="This is mrico oven" />
                    <h4 className="text-center">Price:{info.price}</h4>
                    <h3>{info.name}</h3>
                    <p>{info.description}</p>
                    <p className="text-center fw-bold">Order-Receipt :</p>
                    <span className="Name fw-bold">Name: {Name}</span><br />
                    <span className="Name-2 fw-bold">Address: {Address}</span><br />
                    <span className="Name fw-bold">Email: {email}</span><br />
                    <span className="Name-4 fw-bold">Phone: {phone}</span><br />
                    <Button className="Delete" onClick={() => handleDelete(_id)} > Delete</Button>
                </div>

            </div>
        </>
    );
};

export default MyOrder;