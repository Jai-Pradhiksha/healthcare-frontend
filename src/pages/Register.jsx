import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService.jsx";
import "../pages/Register.css";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      userName,
      email,
      password,
      dateOfBirth,
      role: "PATIENT",
    };

    AuthService.register(newUser)
      .then((response) => {
        alert(`Registration done successfully, ${userName}!`);
        navigate("/departments");
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setErrorMessage("Seems like this email exists, Try Sign in.");
        } else {
          setErrorMessage(
            error.message || "Registration failed. Please try again."
          );
        }
      });
  };

  return (
    <>
      <div className="register-container d-flex justify-content-center align-items-center vh-100">
        <form
          className="register-width border p-4 shadow-lg rounded"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center mb-4">Register</h2>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div className="form-group mb-3">
            <label htmlFor="userName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                className="btn toggle-button"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                ></i>
              </Button>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn register-button w-100">
            Register
          </button>
          <div className="text-center mt-3">
            <span>Already a user? </span>
            <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
