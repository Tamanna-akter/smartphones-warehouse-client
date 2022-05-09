// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
 import usePhoneDetails from '../Hooks/usePhoneDetails';
import ManageItemslink from '../ManageItems/ManageItemslink/ManageItemslink';
import './PhoneDetails.css';

const PhoneDetails = () => {

    const { id } = useParams();
    // const { user } = useAuthState();
    const [phoneDetails,setPhoneDetails]=usePhoneDetails(id);
    const { name, quantity, description, price, supplier,img,
      } = phoneDetails;

    //   const [phone, setPhone] = useState({});
    //   useEffect(() => {
    //     fetch(`http://localhost:5000/phones/${_id}`)
    //       .then((res) => res.json())
    //       .then((data) => setPhone(data));
    //   }, [phone.quantity, _id]);
    
      const delivered = (e) => {
    
       
        const quantity = parseInt(phoneDetails.quantity) - 1;
        const newQuantity = { quantity };
    
        fetch(`http://localhost:5000/phones/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newQuantity),
        })
           .then((res) => res.json())
          .then((data) => {
            setPhoneDetails(data);
             
          });

        window.location.reload();
      };

      const [restockQuantity, setRestockQuantity] = useState();

     const handleChange = (e) => {
     setRestockQuantity(e.target.value);
  };

  const restock = (e) => {
    e.preventDefault();
    const quantity = parseInt(phoneDetails.quantity) + parseInt(restockQuantity);
    const newQuantity = { quantity };
    
    fetch(`http://localhost:5000/phones/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
    
      .then((res) => res.json())
      .then((data) => {
        
        setPhoneDetails(data);
      });
      e.target.reset();
      window.location.reload();
  };

    return (
        
            <div className="container order">
                <h2 className="text-center my-2">{name}</h2>
    
            <div className="d-flex justify-content-center">
                <div>
                    <div className="card mb-2 singleCard" style={{ 'max-width': '500px' }}>
                        <div className="row g-0">
                    <div className="col-md-4">
                     <img src={img} className="img-fluid rounded-start" alt="..." />
                     </div>
                <div className="col-md-8">
                 <div className="card-body">
                                
                    <h5 className="text-center my-2">Price:${price}</h5>
                    <h5 className="text-center my-2">Quantity:{quantity}</h5>
                    <h5 className="text-center my-2">Supplier:{supplier}</h5>
                     <p className="card-text">{description}</p>
                </div>
                 <button  onClick={delivered} className="btn btn-danger mb-3">Delivered</button>
                 <form action="" onSubmit={restock}>
              <input
                type="number"
                placeholder="Type the quantity"
                onBlur={handleChange}
                required
              />
              <input type="submit" value="restock" className="button" />
            </form>
            </div>
             </div>
            </div>
            </div>
           </div>
            <ManageItemslink></ManageItemslink>
        </div>
    );
};
export default PhoneDetails;