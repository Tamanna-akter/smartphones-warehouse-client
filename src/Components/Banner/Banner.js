import React from 'react';
import './Banner.css';
import banner from './../../images/banner.jpg';
import { Card } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <div className="banner" >
            <Card className="text-dark">
                <Card.Img className='img' src={banner} alt="Card image" />
                <Card.ImgOverlay className='title'>
                
                </Card.ImgOverlay>
            </Card>
        </div>
        </div>
    );
};

export default Banner;