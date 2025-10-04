import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";

import EmployeeDashboard from "./pages/employee/EmployeeDashboard";

import Home from "./pages/common/Home";
import Login from "./auth/login";
import Unauthorized from "./pages/common/Unauthorized";
import EmployeeForm from "./pages/admin/EmployeeForm";
import EmployeeList from "./pages/admin/EmployeeList";

function App() {
  return (
    <Router>
      {/* Optional: Navbar could go here */}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}

        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/employees" element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <EmployeeList />
          </ProtectedRoute>
        } />
        <Route path="/admin/employees/add" element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <EmployeeForm />
          </ProtectedRoute>
        } />

        {/* Employee Routes */}
        <Route path="/employee/dashboard" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        } />
        {/* <Route path="/employee/profile" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <Profile />
          </ProtectedRoute>
        } /> */}
      </Routes>
    </Router>
  );
}

export default App;
