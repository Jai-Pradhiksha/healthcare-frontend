import React from "react";
import { useLocation } from "react-router-dom";
import "./Confirmation.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";

const Confirmation = () => {
  const location = useLocation();
  const { appointmentDetails } = location.state || {};

  const handleDownloadClick = () => {
    Swal.fire({
      icon: "info",
      title: "Under Development",
      text: "This option is under development!",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="confirmation-container d-flex justify-content-center align-items-center vh-100">
      <div className="confirmation-card shadow-lg p-4 ticket-card">
        <h2 className="text-center">Appointment Confirmed</h2>
        <div className="confirmation-details">
          <h5>Appointment Details</h5>
          <p>
            <strong>Name:</strong> {appointmentDetails?.name}
          </p>
          <p>
            <strong>Email:</strong> {appointmentDetails?.email}
          </p>
          <p>
            <strong>Date:</strong> {appointmentDetails?.date}
          </p>
          <p>
            <strong>Time:</strong> {appointmentDetails?.time}
          </p>
          <p>
            <strong>Doctor:</strong> {appointmentDetails?.doctorName}
          </p>
          <p>
            <strong>Specialization:</strong>{" "}
            {appointmentDetails?.specialization}
          </p>
        </div>
        <button
          className="btn btn-success w-100 mt-3"
          onClick={handleDownloadClick}
        >
          Download Appointment Details
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
