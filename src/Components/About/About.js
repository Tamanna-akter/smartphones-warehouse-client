import React from 'react';
import about from './../../images/about.png';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-3'>About Us</h2>
            <div className='row'>
                <div className='col col-sm-12 col-md-6 about'>
                 <img src={about} alt="" />
                </div>
                <div className='col-sm-12 col-md-6'>
                <h6>About Our Company</h6>
                <p>Cellphone Warehouse Proprietary Limited is the major cellphone distributor in Botswana. It is a majority citizen owned and Botswana registered company in June 2016 to take over from Nokia Warehouse chain of stores nationwide.</p>
                <p>Our Directors are well experienced, motivated, challengers and winners and they are:

                </p>
                <h6 className='text-primary'>Staff</h6>
                <p>Our staff is experienced motivated local citizens who have been equipped with extensive knowledge of cellphones, cellphones components, accessories and services.

               </p>
                </div>

            </div>
            
        </div>
    );
};

export default About;