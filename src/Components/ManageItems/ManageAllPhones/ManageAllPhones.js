import React from 'react';

const ManageAllPhones = (props) => {
    const { _id, img, name, price, quantity, supplier } =
    props.item;
  const { handleDelete} = props;


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
            onClick={() => handleDelete(_id)}
            className="btn btn-secondary"
          >
            Delete
          </button>
        </td>
      </tr>
    );
};

export default ManageAllPhones;