// src/layouts/SidebarLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SidebarLayout = ({ role }) => {
  return (
    <div style={{ display: "flex" ,position:"static"}}>
      {/* Static Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
