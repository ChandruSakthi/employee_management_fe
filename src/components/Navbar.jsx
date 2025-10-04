import React from 'react'

const role = localStorage.getItem("role");
const Navbar = () => {
 return (
  <nav>
    {role === "ADMIN" && (
      <>
        <a href="/admin/dashboard">Dashboard</a>
        <a href="/admin/employees">Manage Employees</a>
      </>
    )}
    {role === "EMPLOYEE" && (
      <>
        <a href="/employee/dashboard">Dashboard</a>
        <a href="/employee/profile">My Profile</a>
      </>
    )}
    <a href="/logout">Logout</a>
  </nav>
);
}

export default Navbar
