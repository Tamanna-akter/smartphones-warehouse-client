import React from 'react';
import { Link } from 'react-router-dom';

const ManageItemslink = () => {
    return (
        <div>
             <Link className="text-decoration-none text-center d-block" to="/managePhones">
            <button className=" my-5 btn btn-success fw-bold">Manage Inventory Items</button>
            </Link>
        </div>
    );
};

export default ManageItemslink;