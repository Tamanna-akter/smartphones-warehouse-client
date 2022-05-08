import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import usePhoneDetails from '../Hooks/usePhoneDetails';
import ManageItemslink from '../ManageItems/ManageItemslink/ManageItemslink';
import './PhoneDetails.css';

const PhoneDetails = () => {
    const { id } = useParams();
    // const { user } = useAuthState();
    const [phoneDetails]=usePhoneDetails(id);
    const { name, quantity, description, price, supplier,img,
      } = phoneDetails;


    // const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // const [details, setDetails] = useState({});
    // useEffect(() => {
    // const url = `http://localhost:5000/phoneDetails/${id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setDetails(data);
    //             reset(data)

    //         });
    // }, [reset, id])

    // const onSubmit = data => {
    //     delete data._id;
    //     //   console.log(data);

    //     fetch('https://glacial-temple-54782.herokuapp.com/orders', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.insertedId) {
    //                 alert('Manage phone Successfully');
    //                 reset();
    //             }
    //         })
    // };


    // const status = 'Pending';

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
                 <button className="btn btn-danger">Delivered</button>
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