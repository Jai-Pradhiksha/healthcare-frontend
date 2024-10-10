import React, { useEffect, useState } from "react";
import "../PatientComponents/PatientDashboard.css";

const PatientDashboard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("user_name");
    setUserName(storedUserName);
  }, []);

  return (
    <>
      <div className="patient-welcome-section">
        <h2>Welcome, {userName}!</h2>
        <button>Book Appointment</button>
        <button>View Medical Records</button>
        <button>Consult a Doctor</button>
      </div>
    </>
  );
};

export default PatientDashboard;
