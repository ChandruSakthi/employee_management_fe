// src/config/sidebarConfig.js
import { FaTachometerAlt, FaUsers, FaUserPlus, FaClock, FaHome, FaUserTie, FaTasks, FaBullseye, FaSignOutAlt } from "react-icons/fa";

const sidebarConfig = {
  ADMIN: [
    { path: "/admin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/admin/employees", label: "Employees", icon: <FaUsers /> },
    { path: "/admin/employees/add", label: "Add Employee", icon: <FaUserPlus /> },
    { path: "/admin/timesheet", label: "Timesheet", icon: <FaClock /> },
    { path: "/admin/wfh", label: "Work From Home", icon: <FaHome /> }
  ],
  EMPLOYEE: [
    { path: "/employee/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/employee/profile", label: "Profile", icon: <FaUserTie /> },
    { path: "/employee/timesheet", label: "Timesheet", icon: <FaClock /> },
    { path: "/employee/wfh", label: "Work From Home", icon: <FaHome /> },
    { path: "/employee/offboarding", label: "Off-Boarding", icon: <FaSignOutAlt /> },
    { path: "/employee/tasks", label: "Tasks", icon: <FaTasks /> },
    { path: "/employee/goals", label: "Goals", icon: <FaBullseye /> },
    { path: "/employee/onboarding", label: "Onboarding", icon: <FaBullseye /> }
  ]
};

export default sidebarConfig;
