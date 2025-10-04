import React from "react";
import { Link } from "react-router-dom";
import sidebarConfig from "../config/sidebarConfig";

const Sidebar = ({ role }) => {
  const menuItems = sidebarConfig[role] || [];

  return (
    <div style={{ width: "200px",height:"700px", background: "#f8f9fa", padding: "20px"}}>
      <h3>{role} Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
