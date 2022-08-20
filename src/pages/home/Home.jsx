// packages
import React from "react";

// styling
import "./Home.scss";

// assets
import bakery from '../../assets/bakery.jpeg';
import beverages from '../../assets/beverages.jpeg';
import chicken from '../../assets/ChickenProducts_Lead.jpeg';
import dairy from '../../assets/dairy.jpeg';
import produce from '../../assets/produce.jpeg';
import seafood from '../../assets/seafood.jpeg';

const categories = [
    {
        title: 'Meat and Poultry',
        image: chicken,
        linkPath: 'meat'
    },
    {
        title: 'Dairy',
        image: dairy,
        linkPath: 'dairy'
    },
    {
        title: 'Seafood',
        image: seafood,
        linkPath: 'seafood'
    },
    {
        title: 'Produce',
        image: produce,
        linkPath: 'produce'
    },
    {
        title: 'Bakery and Desserts',
        image: bakery,
        linkPath: 'bakery'
    },
    {
        title: 'Beverages',
        image: beverages,
        linkPath: 'beverages'
    },
]

const CategoryCard = ({ title, image }) => {
    return (
        <div className="Home__categoryCard">
            <div className="Home__cardTitle">
                {title}
            </div>
            {/* <div className="Home__cardImage">

            </div> */}
            <img src={image} className='Home__cardImage' />
        </div>
    )
}

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__logo">LOGO</div>
      <div className="Home__tagline">Your Order.... Our Service....</div>
      <div className="Home__search">
        <input type="text" name="name" className="Home__searchInput" placeholder="Type here to browse" />
        <button className="Home__searchButton">Search</button>
      </div>
      <div className="Home__categories">
        <div className="Home__categoriesTitle">
            <span></span>
            <p>Our Categories</p>
            <span></span>
        </div>
        <div className="Home__categoriesContent">
            {categories.map((item,index)=>
                <CategoryCard key={item.title} title={item.title} image={item.image} />
            )}
        </div>
      </div>
    </div>
  );
};
