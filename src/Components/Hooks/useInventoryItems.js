import { useEffect, useState } from 'react';

const useInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('https://thawing-reaches-79081.herokuapp.com/phones')
          .then((res) => res.json())
          .then((data) => setInventoryItems(data));
      }, []);
    
      return [inventoryItems, setInventoryItems];
    };

export default useInventoryItems;