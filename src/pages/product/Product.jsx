// packages
import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

// styling
import "./Product.scss";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

export const Product = () => {
  const [{ selectedProduct }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTotal(quantity * selectedProduct.price);
  }, [quantity]);

  const quantityUpdate = (value) => {
    setQuantity(value);
  };

  const addToCart = (name, image, productID) => {
    const data = { name, image, productID, quantity, total };
    dispatch({
      type: "ADD_TO_CART",
      item: data,
    });
    setQuantity(0);
    setTotal(0);
    setShowAlert(true)
    setTimeout(() => {

        setShowAlert(false)
        
    },1000);
  };

  return (
    <div className="Product">
      {showAlert && (
        <Alert variant="success" className="Product__alert">
          Product added to cart!
        </Alert>
      )}
      <div className="Product__imageCard">
        <div className="Product__title">{selectedProduct.name}</div>
        <img src={selectedProduct.image} className="Product__cardImage" />
      </div>
      <div className="Product__detailsCard">
        <p>Price per unit: Rs. {selectedProduct.price}</p>
        <p>Producer Name: {selectedProduct.producerName}</p>
        <p>
          Quantity:{" "}
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => quantityUpdate(e.target.value)}
          />
        </p>
        <p>Total Price: Rs. {total}</p>
        {quantity > 0 ? (
          <button
            className="Product__addToCartBtn"
            onClick={() =>
              addToCart(
                selectedProduct.name,
                selectedProduct.image,
                selectedProduct.productID
              )
            }
          >
            Add to Cart
          </button>
        ) : (
          <button className="Product__addToCartBtn disabled">
            Add to Cart
          </button>
        )}
        {/* <button className="Product__addToCartBtn disabled">Add to Cart</button> */}
        {/* <div className='Product__detailsLowerSection'>
                <button 
            </div> */}
      </div>
    </div>
  );
};
