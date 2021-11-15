import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ShowAllproduct.css'
import ShowProduct from '../ShowProduct/ShowProduct';

const ShowAllProduct = () => {
    const [showAllProduct, setShowAllProduct] = useState([])
    console.log(showAllProduct);
    useEffect(() => {

        fetch('https://mysterious-castle-65738.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setShowAllProduct(data))

    }, [])
    return (
        <>
            <h2 className="text-center my-4">All Products</h2>

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