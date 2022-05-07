import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './InventoryItem.css';
// import { Link } from 'react-router-dom';

const InventoryItem = ({inventoryItem}) => {

    const { name, img, description, price, quantity,supplier } = inventoryItem;
    return (
        <div className="col">
            <Card className="card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="fs-4 text-center">{name}</Card.Title>
                    <Card.Title>Price:${price}</Card.Title>
                    <Card.Title>Quantity:{quantity}</Card.Title>
                    <Card.Title>Supplier:{supplier}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='mx-auto'>
                    <Button variant="success">Manage Phone</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default InventoryItem;