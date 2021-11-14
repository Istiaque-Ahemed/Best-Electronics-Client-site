import React from 'react';
import './NotFound.css';
import img from './404 Error Page not Found with people connecting a plug-bro.png'


const NotFound = () => {
    return (
        <div className="not-found">
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;