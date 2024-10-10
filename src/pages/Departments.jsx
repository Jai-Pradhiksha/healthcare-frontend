import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Departments.css";
import cardiologyImage from "../assets/cardiology.png";
import neurologyImage from "../assets/neurology.png";
import dermoImage from "../assets/dermo.png";
import gastroImage from "../assets/gastro.png";
import psychiatryImage from "../assets/psychiatry.png";
import surgeonImage from "../assets/surgeon.png";
import urologyImage from "../assets/urology.png";
import gynocologyImage from "../assets/gynocology.png";
import pediatricsImage from "../assets/pediatrics.png";
import { Link } from "react-router-dom";

const departmentsData = [
  { id: 1, name: "Cardiology", image: cardiologyImage, path: "/cardiology" },
  { id: 2, name: "Neurology", image: neurologyImage, path: "/neurology" },
  { id: 3, name: "Dermatology", image: dermoImage, path: "/dermatology" },
  {
    id: 4,
    name: "Gastroenterology",
    image: gastroImage,
    path: "/gastroenterology",
  },
  { id: 5, name: "Psychiatry", image: psychiatryImage, path: "/psychiatry" },
  { id: 6, name: "Surgeon", image: surgeonImage, path: "/surgeon" },
  { id: 7, name: "Urology", image: urologyImage, path: "/urology" },
  { id: 8, name: "Gynocology", image: gynocologyImage, path: "/gynocology" },
  { id: 9, name: "Pediatrics", image: pediatricsImage, path: "/pediatrics" },
];

const Departments = () => {
  return (
    <div className="dept-main-container">
      <Col className="dept-department-description">
        <div className="dept-tagline-container">
          <h1>Select from Our Range of Departments for Optimal Care</h1>
        </div>
      </Col>
      <div className="dept-cards-container">
        <Row className="dept-department-cards">
          {departmentsData.map((department) => (
            <Col xs={10} md={4} key={department.id}>
              <Link to={department.path}>
                <Card className="dept-department-card">
                  <Card.Img variant="top" src={department.image} />
                  <Card.Body>{department.name}</Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Departments;
