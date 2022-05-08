import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
// import auth from '../../firebase.init';
// import useInventoryItems from '../Hooks/useInventoryItems';

const AddItem = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addPhones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('New item added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="">
        <h3 className="text-center my-3">Add a new Inventory Item</h3>

        <div className="d-flex justify-content-center">
            <div>
                <form className="order-form bg-info" onSubmit={handleSubmit(onSubmit)}>
                <p className="mb-1"><small>Add a new item name:</small></p>

                    <input placeholder="Phone Name" defaultValue="" {...register("name", { required: true })} />
                    <br />
                    <p className="mb-1"><small>Price:</small></p>

                    <input placeholder="Price" defaultValue="" {...register("price", { required: true })} />
                    <p className="mb-1"><small>Quantity:</small></p>

                    <input placeholder="Quantity" defaultValue="" {...register("quantity", { required: true })} />
                    <p className="mb-1"><small>Supplier name:</small></p>
                    <input placeholder="Supplier" defaultValue="" {...register("supplier", { required: true })} />
                    <p className="mb-1"><small>img Url:</small></p>
                    <input placeholder="Image URL" defaultValue="" {...register("img", { required: true })} />
                    <p className="mb-1"><small>Description:</small></p>
                    <input placeholder="Description" defaultValue="" {...register("description", { required: true })} />
                    <br />
                    <input className='btn btn-danger mt-2' type="submit" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddItem;