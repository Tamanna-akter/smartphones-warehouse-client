import React from 'react';
import About from '../About/About';
import FeaturedManufactures from '../FeaturedManufactures/FeaturedManufactures';
import InventoryItems from '../InventoryItems/InventoryItems';
import ManageItemslink from '../ManageItems/ManageItemslink/ManageItemslink';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
         <InventoryItems></InventoryItems>
         <ManageItemslink></ManageItemslink>
         <FeaturedManufactures></FeaturedManufactures>
         <About></About>
        </div>
    );
};

export default Home;