const sidebarConfig = {
  ADMIN: [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/employees", label: "Employees" },
    { path: "/admin/employees/add", label: "Add Employee" },
    { path: "/admin/timesheet", label: "Timesheet" },  // if needed
    { path: "/admin/wfh", label: "Work From Home" }, 
  ],
  EMPLOYEE: [
    { path: "/employee/dashboard", label: "Dashboard" },
    { path: "/employee/profile", label: "Profile" }, 
    { path: "/employee/timesheet", label: "Timesheet" },
    { path: "/employee/wfh", label: "Work From Home" },
    { path: "/employee/offboarding", label: "Off-Boarding" },
    { path: "/employee/tasks", label: "Tasks" },
    { path: "/employee/goals", label: "Goals" },
  ],
};

export default sidebarConfig;
