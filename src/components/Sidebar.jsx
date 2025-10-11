import React from "react";
import { Link } from "react-router-dom";
import sidebarConfig from "../config/sidebarConfig";
import logo from "../Assets/TVM Infotech Logo.jpg"; 
import "../styles/sidebar.css";

const Sidebar = ({ role }) => {
  const menuItems = sidebarConfig[role] || [];

  return (
    <div style={{ width: "300px", height: "100vh", background: "#7d244cff", padding: "20px" }}>
      {/* Logo */}
      <img src={logo} alt="TVM Infotech Logo" style={{ width: "190px", marginBottom: "20px" , borderRadius: "20px" }} />

      {/* Menu Items */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item, index) => (
          <li key={index} style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px", fontSize: "20px", color: "white" ,marginTop: "10px"}}>{item.icon}</span>
            <Link to={item.path} className="sidebar" style={{ color: "white", textDecoration: "none" }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
