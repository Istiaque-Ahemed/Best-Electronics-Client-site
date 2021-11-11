import React from 'react';
import './banner.css'
import trvcover from './pngtree-taobao-fashion-small-appliances-oven-microwave-oven-poster-banner-image_194122.jpg'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <img src={trvcover} width="100%" height="60%" alt="" />

            </div>
        </>
    );
};

export default Banner;