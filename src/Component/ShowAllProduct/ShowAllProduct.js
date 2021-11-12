import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ShowAllproduct.css'
import ShowProduct from '../ShowProduct/ShowProduct';

const ShowAllProduct = () => {
    const [showAllProduct, setShowAllProduct] = useState([])
    console.log(showAllProduct);
    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setShowAllProduct(data))

    }, [])
    return (
        <>
            <h2>All Products</h2>

            <div className="all-product">
                {
                    showAllProduct.map(product => <ShowProduct
                        key={product._id}
                        product={product}


                    ></ShowProduct>)
                }

            </div>
        </>

    );
};

export default ShowAllProduct;