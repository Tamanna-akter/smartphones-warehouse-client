import React from 'react';
import './Header.css';
import banner from './../../images/banner.jpg';
import { Card } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className="banner" >
            <Card className="text-dark">
                <Card.Img className='img' src={banner} alt="Card image" />
                <Card.ImgOverlay className='title'>
                    <Card.Title className="fs-3 text-dark fw-bold">Welcome to Our Smartphones Warehouse</Card.Title>
                    <Card.Text className='fs-5 text-dark'>
                    “A smartphone is an addictive device which traps a soul into a lifeless planet full of lives”.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
        </div>
    );
};

export default Header;