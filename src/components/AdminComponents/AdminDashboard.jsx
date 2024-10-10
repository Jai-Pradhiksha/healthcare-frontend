import React, { useEffect, useState } from "react";
import "../AdminComponents/AdminDashboard.css";

const AdminDashboard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("user_name");
    setUserName(storedUserName);
  }, []);

  return (
    <>
      <div className="admin-welcome-section">
        <h2>Welcome, {userName}!</h2>
        <button>Manage Users</button>
        <button>Generate Reports</button>
        <button>Monitor System</button>
      </div>
    </>
  );
};

export default AdminDashboard;
