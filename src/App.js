import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";

import EmployeeDashboard from "./pages/employee/EmployeeDashboard";

import Home from "./pages/common/Home";
import Login from "./auth/login";
import Unauthorized from "./pages/common/Unauthorized";
import EmployeeForm from "./pages/admin/EmployeeForm";
import EmployeeList from "./pages/admin/EmployeeList";
import EmployeeProfile from "./pages/employee/EmployeeProfile";
import EmployeeTimesheet from "./pages/employee/EmployeeTimesheet";
import EmployeeWFH from "./pages/employee/EmployeeWFH";
import AdminTimesheet from "./pages/admin/AdminTimesheet";
import AdminWFH from "./pages/admin/AdminWFH";
import OffBoarding from "./pages/employee/OffBoarding";
import Tasks from "./pages/employee/Tasks";
import Goal from "./pages/employee/Goal";

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
        <Route path="/admin/timesheet" element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminTimesheet />
          </ProtectedRoute>
        } />
        <Route path="/admin/wfh" element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminWFH />
          </ProtectedRoute>
        } />

        {/* Employee Routes */}
        <Route path="/employee/dashboard" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        } />
        <Route path="/employee/profile" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <EmployeeProfile />
          </ProtectedRoute>
        } />
        <Route path="/employee/timesheet" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <EmployeeTimesheet />
          </ProtectedRoute>
        } />
        <Route path="/employee/wfh" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <EmployeeWFH />
          </ProtectedRoute>
        } />
        <Route path="/employee/offboarding" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <OffBoarding />
          </ProtectedRoute>
        } />
        <Route path="/employee/tasks" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <Tasks />
          </ProtectedRoute>
        } />
        <Route path="/employee/goals" element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <Goal />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
