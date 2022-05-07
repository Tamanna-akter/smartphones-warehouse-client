import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import Loading from '../Shared/Loading/Loading';

const InventoryItems = () => {

    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:5000/phone')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setInventoryItems(data)
            })

    }, [])
    return (
        <div className="container my-3">
            <h1 className="text-center">Inventory Items</h1>
            {
                loading &&
                <Loading></Loading>
            }
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                   inventoryItems.slice(0, 6).map(inventoryItem => <InventoryItem
                        key={inventoryItem._id}
                        inventoryItem={inventoryItem}
                    ></InventoryItem>
                    )
                }
            </div>
        </div>
    );
};

export default InventoryItems;