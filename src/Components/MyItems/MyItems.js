import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
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
    

  return (
    <div>
      <h3 className="text-center"> Total item : {myItem.length} </h3>
      <Link className="text-decoration-none text-center d-block" to="/additem">
            <button className=" my-5 btn btn-success fw-bold">Add New Item</button>
            </Link>
      <div className="mx-auto d-block px-5 mt-5">
        <Table responsive >
          <thead className='bg-success'>
            <tr>
              <th>Id</th>
              <th>img</th>
              <th>Name</th>
              <th>Price$</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Delete</th>
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