import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';

const Registar = () => {
    const { handleUserRegister, signInUsinGoogle } = useFirebase();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleUserRegister(data.email, data.password)
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email"
                placeholder="Email"
                type="email"
                {...register("email", { required: true })} />


            <br />
            <input name="password"
                placeholder="Password"
                type="password" {...register("password", { required: true })} />
            <br />
            <input type="submit" />
        </form>
    );
};

export default Registar;