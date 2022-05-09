import React from 'react';

const ManageMyItem = (props) => {

    const { _id, img, name, price, quantity, supplier } =
    props.items;
   const { handleDeleteItem } = props.handleDeleteItem;
    return (
        <tr>
        <td>{_id}</td>
        <td>
          <img
            className="rounded img-thumbnail img-fluid mx-auto d-block "
            style={{ width: "100px" }}
            src={img}
            alt=""
          />
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{supplier}</td>
        <td>
          <button
           onClick={() => handleDeleteItem(_id)}
            className="btn btn-secondary"
          >
            Delete
          </button>
        </td>
      </tr>
    );
};

export default ManageMyItem;