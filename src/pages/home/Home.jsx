// packages
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { filter } from "lodash";

// styling
import "./Home.scss";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

// assets
// import bakery from "../../assets/categories/bakery.jpeg";
// import beverages from "../../assets/categories/beverages.jpeg";
// import chicken from "../../assets/categories/ChickenProducts_Lead.jpeg";
// import dairy from "../../assets/categories/dairy.jpeg";
// import produce from "../../assets/categories/produce.jpeg";
// import seafood from "../../assets/categories/seafood.jpeg";
import logo from "../../assets/pngShop.png";
import { allData, bakery, beverages, dairy, fish, meat ,produces } from "../../assets/data";

const categories = [
  {
    title: "Meat and Poultry",
    // image: chicken,
    linkPath: "meat",
  },
  {
    title: "Dairy",
    // image: dairy,
    linkPath: "dairy",
  },
  {
    title: "Seafood",
    // image: seafood,
    linkPath: "seafood",
  },
  {
    title: "Produce",
    // image: produce,
    linkPath: "produce",
  },
  {
    title: "Bakery and Desserts",
    // image: bakery,
    linkPath: "bakery",
  },
  {
    title: "Beverages",
    // image: beverages,
    linkPath: "beverages",
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

const CategoryCard = ({ title, image }) => {
  const navigate = useNavigate();

  const [{ userData }, dispatch] = useStateValue();

  const categoryClick = (categoryName) => {
    // console.log('messages - ', data[chatIndex]);
    dispatch({
      type: "SET_SELECTEDCATEGORY",
      category: categoryName,
    });
    navigate("/productsList");
  };

  return (
    <div className="Home__categoryCard" onClick={() => categoryClick(title)}>
      <div className="Home__cardTitle">{title}</div>
      <img src={image} className="Home__cardImage" />
    </div>
  );
};

export const Home = () => {
  const [array, setArray] = useState(allData);
  const [filterName, setFilterName] = useState("");

  let filteredData = applySortFilter(
    allData,
    getComparator("asc", "name"),
    filterName
  );

  useEffect(() => {
  }, [filteredData])
  

  

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(
        array,
        (request) =>
          request.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const filterCategories = (selectedCategory) => {
    
    if (selectedCategory === 'Meat and Poultry') {
        console.log('selectedCategory', selectedCategory)
        filteredData = meat;
    }
    else if (selectedCategory === 'Dairy') {
        filteredData = dairy;
    }
    else if (selectedCategory === 'Seafood') {
        filteredData = fish;
    }
    else if (selectedCategory === 'Produce') {
        filteredData = produces;
    }
    else if (selectedCategory === 'Bakery and Desserts') {
        filteredData = bakery;
    }
    else if (selectedCategory === 'Beverages') {
        filteredData = beverages;
    }
  }

  const search = (searchTerm) => {
    let result = array;
    console.log("searchTerm", searchTerm);
    result = array.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log('result', result);
    setArray(result);
  };
  return (
    <div className="Home">
      <img className="Home__logo" src={logo} />
      <div className="Home__logoText">Dumi Shop</div>
      <div className="Home__tagline">Your Order.... Our Service....</div>
      <div className="Home__search">
        <input
          type="text"
          name="name"
          className="Home__searchInput"
          placeholder="Type here to browse"
          value={filterName}
          onChange={handleFilterByName}
        />
        <button className="Home__searchButton">Search</button>
      </div>
      <div className="Home__categories">
        {/* <div className="Home__categoriesList">
        {categories.map((item, index) => (
            <div className="Home__categoryItem" key={item.title} onClick={() => filterCategories(item.title)}>{item.title}</div>
          ))}
        </div> */}
        <div className="Home__categoriesTitle">
          <span></span>
          <p>Our Products</p>
          <span></span>
        </div>
        <div className="Home__categoriesContent">
          {filteredData.map((item, index) => (
            <ProductCard
              key={item.name}
              name={item.name}
              image={item.image}
              price={item.price}
              producerName={item.producerName}
              productID={item.productID}
            />
          ))}
          {filteredData.length == 0 && <p>No search results found!</p>}
        </div>
      </div>
    </div>
  );
};
