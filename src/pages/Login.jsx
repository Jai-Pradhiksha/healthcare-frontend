import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Login.css";
import AuthService from "../services/AuthService.jsx";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    AuthService.login(email, password)
      .then((response) => {
        const userData = response.data;

        localStorage.setItem("user_name", userData.user_name);
        localStorage.setItem("role", userData.role);

        switch (userData.role) {
          case "PATIENT":
            navigate("/PatientDashboard");
            break;
          case "DOCTOR":
            navigate("/DoctorDashboard");
            break;
          case "ADMIN":
            navigate("/AdminDashboard");
            break;
          default:
            setErrorMessage("Unknown role. Please contact support.");
            break;
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            setErrorMessage(
              "No account found with this email. Create a new one!"
            );
          } else if (error.response.status === 401) {
            setErrorMessage("Password is incorrect, Check once again");
          } else {
            setErrorMessage(
              error.response.data || "Login failed. Please try again."
            );
          }
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <>
      <div className="login-container d-flex justify-content-center align-items-center vh-100">
        <form
          className="login-width border p-4 shadow-lg rounded"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center mb-4">Login</h2>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
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
                autoComplete="current-password"
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
          <button type="submit" className="btn w-100 login-button">
            Login
          </button>
          <div className="text-center mt-3">
            <span>New user? </span>
            <Link to="/register">Register here</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
