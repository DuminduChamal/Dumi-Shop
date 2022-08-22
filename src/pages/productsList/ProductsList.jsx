// packages
import React, { useEffect, useState } from "react";

// styling
import "./ProductsList.scss";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

// assets
import beans from "../../assets/produces/beans.jpeg";
import beetroot from "../../assets/produces/beetroot.jpeg";
import brinjal from "../../assets/produces/brinjal.jpeg";
import carrot from "../../assets/produces/carrot.jpeg";
import cashew from "../../assets/produces/cashew.jpeg";
import ladyfingers from "../../assets/produces/ladyfingers.jpeg";

// icons
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { bakery, beverages, dairy, fish, meat ,produces } from "../../assets/data";

// mock data
const producesX = [
  {
    productID: "produce-01",
    name: "Carrot",
    image: carrot,
    price: 100,
    producerName: "Mr. Fernando",
  },
  {
    productID: "produce-02",
    name: "Brinjal",
    image: brinjal,
    price: 200,
    producerName: "Mr. Perera",
  },
  {
    productID: "produce-03",
    name: "Beans",
    image: beans,
    price: 300,
    producerName: "Mr. Perera",
  },
  {
    productID: "produce-04",
    name: "Ladyfingers",
    image: ladyfingers,
    price: 400,
    producerName: "Mr. Perera",
  },
  {
    productID: "produce-05",
    name: "Beetroot",
    image: beetroot,
    price: 500,
    producerName: "Mr. Perera",
  },
  {
    productID: "produce-06",
    name: "Cashew",
    image: cashew,
    price: 1000,
    producerName: "Mr. Perera",
  },
];

const ProductCard = ({ name, image, price, productID, producerName }) => {
  const navigate = useNavigate();
  const [{ selectedCategory }, dispatch] = useStateValue();
  

  const productClick = (name, image, price, productID, producerName) => {
    const data = { name, image, price, productID, producerName };
    // console.log('messages - ', data[chatIndex]);
    dispatch({
      type: "SET_SELECTEDPRODUCT",
      product: data,
    });
    navigate(`/productsList/${name}`);
  };
  return (
    <div
      className="ProductsList__productCard"
      onClick={() => productClick(name, image, price, productID, producerName)}
    >
      <div className="ProductsList__cardTitle">{name}</div>
      <img src={image} className="ProductsList__cardImage" />
      <div className="ProductsList__cardLowerSection">
        <div className="ProductsList__productPrice">Rs. {price}</div>
        {/* <button className="ProductsList__addToCart" onClick={() => addToCart()}>
          <BsCartPlus />
        </button> */}
      </div>
    </div>
  );
};

export const ProductsList = () => {
  const [{ selectedCategory }, dispatch] = useStateValue();
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'Meat and Poultry') {
        setArray(meat)
    }
    else if (selectedCategory === 'Dairy') {
        setArray(dairy)
    }
    else if (selectedCategory === 'Seafood') {
        setArray(fish)
    }
    else if (selectedCategory === 'Produce') {
        setArray(produces)
    }
    else if (selectedCategory === 'Bakery and Desserts') {
        setArray(bakery)
    }
    else if (selectedCategory === 'Beverages') {
        setArray(beverages)
    }

  }, []);
  
  return (
    <div className="ProductsList">
      <div className="ProductsList__title">
        <span></span>
        <p>{selectedCategory}</p>
        <span></span>
      </div>
      <div className="ProductsList__content">
        {array.map((item, index) => (
          <ProductCard
            key={item.name}
            name={item.name}
            image={item.image}
            price={item.price}
            producerName={item.producerName}
            productID={item.productID}
          />
        ))}
      </div>
    </div>
  );
};
