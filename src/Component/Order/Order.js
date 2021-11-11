import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './Order.css'

const Order = () => {
    const { user } = useAuth()
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user.email])
    console.log(orders);
    return (
        <>
            <h2 className="text-center py-3">My Orders</h2>

            < div className="My-order">

                {
                    orders.map(myorder => <MyOrder
                        key={myorder._id}

                        myorder={myorder}

                    ></MyOrder>)

                }
            </div>
        </>

    );
};

export default Order;