import React from "react";
import "../pages/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <div className="home-welcome-section">
          <h1>Welcome to Your Health's Best Ally!</h1>
          <p className="home-tagline">Your Health, Simplified</p>
          <p className="home-description">
            Empowering you to take control of your health <br /> with AI-driven
            treatment plans, real-time analytics, and personal appointments.
          </p>

          <button className="home-book-now-btn">
            <Link to="/departments">Book Now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
