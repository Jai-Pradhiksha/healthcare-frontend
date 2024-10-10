import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/healthcare-logo.png";
import "../SharedComponents/Navigationbar.css";
import { FaSearch } from "react-icons/fa";

const Navigationbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={logo} className="navbar-logo" alt="Hospital Logo" />
          <span className="navbar-app-name">
            <Nav.Link as={Link} to="/">
              Smart Healthcare
            </Nav.Link>
          </span>
        </div>

        <div className="navbar-search-container">
          <Form className="d-flex" style={{ width: "auto" }}>
            <FormControl
              type="search"
              placeholder="Search departments, doctors for appointments..."
              className="navbar-search-box"
            />
            <Button variant="success" className="navbar-search-button">
              <FaSearch />
            </Button>
          </Form>
        </div>

        <div className="navbar-right-container">
          <Nav>
            <NavLink
              as={Link}
              to="/"
              className="navbar-nav-link"
              style={{ marginRight: "20px" }}
            >
              Home
            </NavLink>
            <NavLink
              as={Link}
              to="/departments"
              className="navbar-nav-link"
              style={{ marginRight: "20px" }}
            >
              Book Appointment
            </NavLink>
            <NavLink as={Link} to="/login" className="navbar-nav-link">
              Login
            </NavLink>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
