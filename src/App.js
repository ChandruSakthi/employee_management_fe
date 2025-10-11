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
import SidebarLayout from "./layout/SidebarLayout";
import Onboarding from "./pages/employee/Onboarding/Onboarding";

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
        <Route
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <SidebarLayout role="ADMIN" />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/employees" element={<EmployeeList />} />
          <Route path="/admin/employees/add" element={<EmployeeForm />} />
          <Route path="/admin/timesheet" element={<AdminTimesheet />} />
          <Route path="/admin/wfh" element={<AdminWFH />} />
        </Route>

        {/* Employee Routes */}
         <Route
          element={
            <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
              <SidebarLayout role="EMPLOYEE" />
            </ProtectedRoute>
          }
        >
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee/profile" element={<EmployeeProfile />} />
          <Route path="/employee/timesheet" element={<EmployeeTimesheet />} />
          <Route path="/employee/wfh" element={<EmployeeWFH />} />
          <Route path="/employee/offboarding" element={<OffBoarding />} />
          <Route path="/employee/tasks" element={<Tasks />} />
          <Route path="/employee/goals" element={<Goal />} />
          <Route path="/employee/onboarding" element={<Onboarding />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
