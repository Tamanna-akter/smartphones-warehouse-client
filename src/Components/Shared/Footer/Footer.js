import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer className="text-center text-lg-start text-white mx-auto">
        <section>
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3 pt-5">

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-5">

                            <h6 className="text-uppercase fw-bold">Inventory Management </h6>
                            <hr />
                            <p>
                                <Link to="/managePhones" className="text-white">Manage Phones</Link>
                            </p>
                            <p>
                                <Link to="/addItem" className="text-white">Add Item</Link>
                            </p>
                            <p>
                                <Link to="/myItems" className="text-white">My Item</Link>
                            </p>
                           
                          
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Menu</h6>
                            <hr />
                            <p>
                                <Link to="/home" className="text-white">Home</Link>
                            </p>
                        
                            <p>
                                <Link to="/about" className="text-white">About</Link>
                            </p>
                            <p>
                                <Link to="/login" className="text-white">Login</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold">Contact Us</h6>
                            <hr />

                            <p> Bangalore, North West, India</p>
                            <p>+971 7529 237</p>
                            <p>Email: smartwarehouse@gmail.com</p>
                          


                        </div>

                    </div>
                </div>
            </section>

            <div className="text-center p-2 copyright"> &copy; {year} Copyright: All Rights Reserved

            </div>
        </footer>

    );
};

export default Footer;