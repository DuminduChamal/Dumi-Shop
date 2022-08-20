// packages
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layout
import { MainLayout } from "./layout/MainLayout";

// pages
import { Home } from "./pages/home/Home";
import { ProductsList } from "./pages/productsList/ProductsList";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "productsList", element: <ProductsList /> },
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
