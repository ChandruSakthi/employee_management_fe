
import React from "react";
import Sidebar from "../../components/Sidebar";

const EmployeeDashboard = () => {
  const role = "EMPLOYEE"; // Get dynamically from context/auth

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role={role} />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Welcome Employee</h2>
        <p>This is your dashboard.</p>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

