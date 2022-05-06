import React from 'react';
import errorPic from './../../images/not-found2.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h3 className='text-danger text-center'>Page Not Found-404 error!!!!</h3>
            <img src={errorPic} className='notfound' alt="" />
        </div>
    );
};

export default NotFound;