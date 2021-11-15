import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ManageProduct.css'
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-castle-65738.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (

        <>
            <h2 className="text-center my-3">Manage Product</h2>

            <div className="manage-Product">
                {
                    product.map(manageSP => <ManageSingleProduct

                        key={manageSP._id}
                        manageSP={manageSP}

                    ></ManageSingleProduct>)
                }

            </div>
        </>
    );
};

export default ManageProduct;