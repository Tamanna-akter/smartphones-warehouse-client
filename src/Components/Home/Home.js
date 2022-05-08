import React from 'react';
import About from '../About/About';
import FeaturedManufactures from '../FeaturedManufactures/FeaturedManufactures';
import Header from '../Header/Header';
import InventoryItems from '../InventoryItems/InventoryItems';
import ManageItemslink from '../ManageItems/ManageItemslink/ManageItemslink';


const Home = () => {
    return (
        <div>
         <Header></Header>
         <InventoryItems></InventoryItems>
         <ManageItemslink></ManageItemslink>
         <FeaturedManufactures></FeaturedManufactures>
         <About></About>
        </div>
    );
};

export default Home;