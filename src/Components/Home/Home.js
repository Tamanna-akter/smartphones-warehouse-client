import React from 'react';
import About from '../About/About';
import FeaturedManufactures from '../FeaturedManufactures/FeaturedManufactures';
import Header from '../Header/Header';
import InventoryItems from '../InventoryItems/InventoryItems';


const Home = () => {
    return (
        <div>
         <Header></Header>
         <InventoryItems></InventoryItems>
         <FeaturedManufactures></FeaturedManufactures>
         <About></About>
        </div>
    );
};

export default Home;