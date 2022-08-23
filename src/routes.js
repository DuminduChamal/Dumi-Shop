// packages
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layout
import { MainLayout } from "./layout/MainLayout";

// pages
import { Home } from "./pages/home/Home";
import { ShoppingCart } from "./pages/order/ShoppingCart";
import { OrdersList } from "./pages/ordersList/OrdersList";
import { Product } from "./pages/product/Product";
import { ProductsList } from "./pages/productsList/ProductsList";
import { Categories } from "./pages/categories/Categories";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "productsList", element: <ProductsList /> },
        { path: "productsList/:product", element: <Product /> },
        { path: "shoppingCart", element: <ShoppingCart /> },
        { path: "ordersList", element: <OrdersList /> },
        { path: "categories", element:  <Categories/> },
        // { path: "chat/:id", element: <ChatWindow /> },
        // // { path: 'login', element: <Login />},
        // { path: "404", element: <NotFound /> },
        // { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default Router;
