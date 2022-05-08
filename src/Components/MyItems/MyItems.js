import React from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useInventoryItems from "../Hooks/useInventoryItems";
import ManageAllPhones from "../ManageItems/ManageAllPhones/ManageAllPhones";
// import useInventories from "../hooks/userInventories";
// import Loading from "../Loading/Loading";
// import AddItemLink from "../ManageInventroy/AddItemLink/AddItemLink";
// import ManageInventory from "../ManageInventroy/ManageInventory/ManageInventory";
// import ManageInventoryAll from "../ManageInventroy/ManageInventoryAll/ManageInventoryAll";
// import ManageMyInventory from "../ManageInventroy/ManageMyInvetory/ManageMyInventory";

const MyItems = () => {
  const [inventoryItems, setInventoryItems] = useInventoryItems();
  const [user, loading, error] = useAuthState(auth);

  const handleDeleteItem = (id) => {
    const deleteConfirm = window.confirm("Are you sure to delete?");
    if (deleteConfirm) {
      fetch(`http://localhost:5000/phones/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventoryItems.filter(
            (item) => item._id !== id
          );
          setInventoryItems(remaining);
        });
    }
  };

  return (
    <div>
      <h4 className="text-center mt-5"> My Adding New Item [{user?.email}]</h4>
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
              <th>Supplier</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) =>
              item?.user === user?.email ? (
                <ManageAllPhones
                  key={item._id}
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                ></ManageAllPhones>
              ) : (
                ""
              )
            )}
          </tbody>
        </Table>
      </div>
      {/* <AddItemLink></AddItemLink> */}
    </div>
  );
};

export default MyItems;