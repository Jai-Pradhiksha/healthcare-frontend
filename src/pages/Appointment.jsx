import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Appointment.css";

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    doctorName,
    specialization,
    availableDates = [],
    availableSlots = [],
  } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Appointment Details:", {
        name,
        email,
        date,
        time,
        doctorName,
        specialization,
      });
      alert("Appointment booked successfully!");

      navigate("/confirmation", {
        state: {
          appointmentDetails: {
            name,
            email,
            date,
            time,
            doctorName,
            specialization,
          },
        },
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="appointment-container d-flex justify-content-center align-items-center vh-100">
      <form
        className="appointment-form border p-4 shadow-lg rounded"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center mb-4 form-heading">
          Book an Appointment with <br /> {doctorName}
        </h2>
        <p className="text-center">
          <b>Specialization: </b>
          {specialization}
        </p>

        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="date">Appointment Date</label>
          <select
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          >
            <option value="">Select Date</option>
            {availableDates.map((availableDate, index) => (
              <option key={index} value={availableDate}>
                {availableDate}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="time">Appointment Time</label>
          <select
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select Time</option>
            {availableSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="btn submit-btn w-100"
          disabled={loading}
        >
          {loading ? "Booking..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Appointment;
