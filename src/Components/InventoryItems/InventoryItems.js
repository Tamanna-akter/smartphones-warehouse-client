import React, {useState } from 'react';
import useInventoryItems from '../Hooks/useInventoryItems';
import InventoryItem from '../InventoryItem/InventoryItem';
import Loading from '../Shared/Loading/Loading';

const InventoryItems = () => {

    const [inventoryItems, setInventoryItems] = useInventoryItems();
    const [loading, setLoading] = useState(false);
    console.log(setInventoryItems)

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