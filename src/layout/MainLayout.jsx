// packages
import React from "react";
import { Outlet } from "react-router-dom";

// styling
import "./MainLayout.scss";

// components
import { Header } from "../components/header/Header";

export const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Header />
      <div className="MainLayout__outlet">
        <Outlet />
      </div>
    </div>
  );
};
