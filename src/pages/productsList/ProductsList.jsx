// packages
import React from "react";

// styling
import "./ProductsList.scss";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

// assets
import beans from '../../assets/produces/beans.jpeg';
import beetroot from '../../assets/produces/beetroot.jpeg';
import brinjal from '../../assets/produces/brinjal.jpeg';
import carrot from '../../assets/produces/carrot.jpeg';
import cashew from '../../assets/produces/cashew.jpeg';
import ladyfingers from '../../assets/produces/ladyfingers.jpeg';

// icons
import { BsCartPlus } from 'react-icons/bs';

// mock data
const produces = [
  {
    name: "Carrot",
    image: carrot,
    price: 100,
  },
  {
    name: "Brinjal",
    image: brinjal,
    price: 200,
  },
  {
    name: "Beans",
    image: beans,
    price: 300,
  },
  {
    name: "Ladyfingers",
    image: ladyfingers,
    price: 400,
  },
  {
    name: "Beetroot",
    image: beetroot,
    price: 500,
  },
  {
    name: "Cashew",
    image: cashew,
    price: 1000,
  },
];

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="ProductsList__productCard">
      <div className="ProductsList__cardTitle">{name}</div>
      <img src={image} className="ProductsList__cardImage" />
      <div className="ProductsList__cardLowerSection">
        <div className="ProductsList__productPrice">Rs. {price}</div>
        <button className="ProductsList__addToCart"><BsCartPlus /></button>
      </div>
    </div>
  );
};

export const ProductsList = () => {

    const [{ selectedCategory }, dispatch] = useStateValue();
  return (
    <div className="ProductsList">
      <div className="ProductsList__title">
        <span></span>
        <p>{selectedCategory}</p>
        <span></span>
      </div>
      <div className="ProductsList__content">
        {produces.map((item, index) => (
          <ProductCard
            key={item.name}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
