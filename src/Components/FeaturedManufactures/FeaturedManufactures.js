import React from 'react';
import brand1 from './../../images/brand1.jpg';
import brand2 from './../../images/brand2.jpg';
import brand3 from './../../images/brand3.jpg';
import brand4 from './../../images/brand4.jpg';
import brand5 from './../../images/brand5.jpg';
import brand6 from './../../images/brand6.jpg';
import './FeaturedManufactures.css';

const FeaturedManufactures = () => {
    return (
    <div className='container mb-5'>
            <h1 className='text-center'>Featured Manufactures</h1>
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
          <div className='brand'>
          <img src={brand1} alt="" />
          <h5 className='text-center'>Brand:MI</h5>
          </div>
          <div className='brand'>
          <img src={brand2} alt="" />
          <h5 className='text-center'>Brand:NOKIA</h5>
          </div>
          <div className='brand'>
          <img src={brand3} alt="" />
          <h5 className='text-center'>Brand:APPLE</h5>
          </div>
          <div className='brand'>
          <img src={brand4} alt="" />
          <h5 className='text-center'>Brand:HUAWEI</h5>
          </div>
          <div className='brand'>
          <img src={brand5} alt="" />
          <h5 className='text-center'>Brand:SAMSUNG</h5>
          </div>
          <div className='brand'>
          <img src={brand6} alt="" />
          <h5 className='text-center'>Brand:JBL</h5>
          </div>
      </div>
    </div>
    );
};

export default FeaturedManufactures;