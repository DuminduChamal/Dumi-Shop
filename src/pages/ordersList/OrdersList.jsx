// packages
import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

// styling
import "./OrdersList.scss";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

export const OrdersList = () => {
  const [{ ordersList, totalQuantity, totalAmount }, dispatch] = useStateValue();

  const removeItemOrder = (index) => {
    console.log("index from orderslist", index)
    dispatch({
        type: "REMOVE_FROM_ORDERSLIST",
        index: index,
      });
  }
  return (
    <div className="OrdersList">
      <div className="OrdersList__title">My Orders</div>
      <div className="OrdersList__table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date Created</th>
              <th>Total Quantity</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ordersList?.map((item, index) => (
              <tr key={item.orderID}>
                <td>{item.orderID}</td>
                <td>{item.createdDate}</td>
                <td>{item.totalAmount}</td>
                <td>{item.totalQuantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removeItemOrder(index)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
