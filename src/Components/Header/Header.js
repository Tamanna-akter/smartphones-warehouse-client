import React from 'react';
import './Header.css';
import banner from './../../images/banner2.jpg';
import { Card } from 'react-bootstrap';

const Header = () => {
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

export default Header;