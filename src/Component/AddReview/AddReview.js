import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './AddReview.css'

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Add Successfully')
                    console.log(data);
                    reset()
                }
            })


    };
    return (
        <div className="add-review">
            <h3 className="text-center pt-5 pb-5 add-text"> Add Your Review </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="name-fild" placeholder="Name" value={user.displayName} {...register("name", { required: true, maxLength: 40 })} /> <br />

                <input className="name-fild" placeholder=" Your Occupation" {...register("occupation", { required: true, maxLength: 40 })} /> <br />

                <textarea className="input-area" placeholder="Review" {...register("description")} /> <br />

                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;