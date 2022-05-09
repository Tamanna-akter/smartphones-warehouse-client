import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventoryItems from '../../Hooks/useInventoryItems';
import ManageAllPhones from '../ManageAllPhones/ManageAllPhones';

const ManagePhones = () => {
    const [inventoryItems, setInventoryItems]=useInventoryItems();
    const handleDelete = (id) => {
        const deleteConfirm = window.confirm("Are you sure? you want to delete?");
        if (deleteConfirm) {
          fetch(`https://thawing-reaches-79081.herokuapp.com/phones/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
              const remaining = inventoryItems.filter(
                item => item._id !== id
              );
              setInventoryItems(remaining);
                }
            });
        }
      };
    
    return (
        <div>
        <h4 className="text-center mt-5">
          {" "}
          Total Inventory : {inventoryItems.length}
        </h4>
        <div className="mx-auto d-block px-5 mt-5">
          <Table responsive className='border border-2'>
            <thead className='bg-success'>
              <tr>
                <th>Id</th>
                <th>img</th>
                <th>Name</th>
                <th>Price$</th>
                <th>Quantity</th>
                <th>Supplier Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map(item => (
                <ManageAllPhones
                  key={item._id}
                 item={item}
                  handleDelete={handleDelete}
                ></ManageAllPhones>
              ))}
            </tbody>
          </Table>
        </div>
           <Link className="text-decoration-none text-center d-block" to="/additem">
            <button className=" my-5 btn btn-success fw-bold">Add New Item</button>
            </Link>
      </div>
    );
};

export default ManagePhones;