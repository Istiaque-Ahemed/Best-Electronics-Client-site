import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Add Successfully')
                    reset()
                }
            })


    };
    return (
        <div className="add-product">
            <h3 className="text-center pt-5 pb-5 add-text"> Add a Product </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input" placeholder="Name" {...register("name", { required: true, maxLength: 40 })} />
                <textarea className="input-area" {...register("description")} placeholder="Description" />
                <input className="input" {...register("img")} placeholder="Img Url" />
                <input className="input" type="text" {...register("price")} placeholder="Price" />
                <input className="input-btn submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;