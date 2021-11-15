import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../product/Product';
import './Products.css'

const Products = () => {
    const [products, setSetProducts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-castle-65738.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setSetProducts(data))

    }, [])
    return (
        <>
            <h2 className="pakage"> Our Product</h2>
            <div className="services">

                {
                    products.slice(0, 6).map(product => <Product

                        key={product._id}
                        product={product}


                    ></Product>)

                }
            </div>
        </>
    );
};

export default Products;