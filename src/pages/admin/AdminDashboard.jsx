
import React from "react";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  const role = "ADMIN"; // In real app, take from Auth Context or localStorage

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role={role} />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Welcome Admin</h2>
        <p>This is your dashboard.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;

