import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ManageMyItem from "../ManageItems/ManageMyItem/ManageMyItem";

const MyItems = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(()=>{
    const getItem = async ()=>{
      const email= user.email;
      const url = `http://localhost:5000/addItem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItem(data);
    };
    getItem();
  }, [user]);
  console.log(user);
    


  // const handleDeleteItem = (id) => {
  //   const deleteConfirm = window.confirm("Are you sure to delete?");
  //   if (deleteConfirm) {
  //     fetch(`http://localhost:5000/addphones/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         const remaining = inventoryItems.filter(
  //           (item) => item._id !== id
           
  //         );
  //         setInventoryItems(remaining);
  //         console.log(inventoryItems);
  //       });
  //   }
  // };

  return (
    <div>
      <h1>You total item : {myItem.length} </h1>
      <div className="mx-auto d-block px-5 mt-5">
        <Table responsive="lg sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>img</th>
              <th>Name</th>
              <th>Price$</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
          {myItem.map((items) => (
      
          
            <ManageMyItem key={items._id} items={items}></ManageMyItem>
          
        
      ))}
          </tbody>
        </Table>
      </div>
      {/* <AddItemLink></AddItemLink> */}
    </div>
  );
};

export default MyItems;