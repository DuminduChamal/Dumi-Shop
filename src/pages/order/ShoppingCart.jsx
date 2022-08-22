// packages
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// styling
import "./ShoppingCart.scss";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

export const ShoppingCart = () => {
  const [{ cart, totalQuantity, totalAmount }, dispatch] = useStateValue();
  const [createdDate, setCreatedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [deliveryDate, setDeliveryDate] = useState("T.D");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // var d = new Date();
    // d.setMonth(d.getMonth() + 8);
    // setDeliveryDate(d);
  }, []);

  const removeItemCart = (index) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      index: index,
    });
  };

  const submitOrder = () => {
    const data = {
      createdDate,
      totalAmount,
      totalQuantity,
      cart,
      orderID: `order-${Math.floor(Math.random() * 1000)}`,
    };
    dispatch({
      type: "SUBMIT_ORDER",
      data: data,
    });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <div className="ShoppingCart">
      <div className="ShoppingCart__Title">Shopping Cart</div>
      {showAlert && (
        <Alert variant="success" className="ShoppingCart__alert">
          Order Submitted Successfully!
        </Alert>
      )}
      <div className="ShoppingCart__container">
        <div className="ShoppingCart__leftSection">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.productID}>
                  <td>{item.productID}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeItemCart(index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {cart.length == 0 && <p style={{textAlign: 'center'}}>Cart is empty</p>}
        </div>
        <div className="ShoppingCart__rightSection">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Created Date</th>
                <td>{createdDate}</td>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th>Delivery Date</th>
                <td>{deliveryDate}</td>
              </tr> */}
              <tr>
                <th>Total Quantity</th>
                <td>{totalQuantity}</td>
              </tr>
              <tr>
                <th>Num of Total rows</th>
                <td>{cart.length}</td>
              </tr>
              <tr>
                <th>Total (LKR)</th>
                <td>{totalAmount}</td>
              </tr>
            </tbody>
          </Table>
          <button
            className="ShoppingCart__submitButton"
            onClick={() => submitOrder()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
