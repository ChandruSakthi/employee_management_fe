import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      if (role === "ADMIN") navigate("/admin/dashboard");
      else if (role === "EMPLOYEE") navigate("/employee/dashboard");
      else navigate("/unauthorized");
    }
  }, [token, role, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Employee Management System</h1>
      <p>Please wait, redirecting...</p>
    </div>
  );
};

export default Home;
