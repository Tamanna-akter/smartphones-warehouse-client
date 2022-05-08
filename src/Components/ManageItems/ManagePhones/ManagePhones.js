import React from 'react';
import { Table } from 'react-bootstrap';
import useInventoryItems from '../../Hooks/useInventoryItems';
import ManageAllPhones from '../ManageAllPhones/ManageAllPhones';

const ManagePhones = () => {
    const [inventoryItems, setInventoryItems]=useInventoryItems();
    const handleDeleteItem = (id) => {
        const deleteConfirm = window.confirm("Are you want to delete?");
        if (deleteConfirm) {
          fetch(`http://localhost:5000/phones/${id}`, {
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
          <Table responsive="lg sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>img</th>
                <th>Name</th>
                <th>Price$</th>
                <th>Quantity</th>
                <th>Item Sold</th>
                <th>Supplier Name</th>
                <th>Delete Item</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map(item => (
                <ManageAllPhones
                  key={item._id}
                 item={item}
                  handleDeleteItem={handleDeleteItem}
                ></ManageAllPhones>
              ))}
            </tbody>
          </Table>
        </div>
        {/* <AddItemLink></AddItemLink> */}
      </div>
    );
};

export default ManagePhones;