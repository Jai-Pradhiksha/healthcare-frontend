import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/SharedComponents/Navigationbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./components/PatientComponents/PatientDashboard";
import DoctorDashboard from "./components/DoctorComponents/DoctorDashboard";
import AdminDashboard from "./components/AdminComponents/AdminDashboard";
import "./App.css";
import Departments from "./pages/Departments";
import CardiologyDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/CardiologyDoctors";
import NeurologyDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/NeurologyDoctors";
import DermatologyDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/DermatologyDoctors";
import GastroDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/GastroDoctors";
import PsychiatryDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/PsychiatryDoctors";
import SurgeonDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/SurgeonDoctors";
import UrologyDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/UrologyDoctors";
import GynocologyDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/GynocologyDoctors";
import PediatricsDoctors from "./components/DoctorComponents/DepartmentDoctorsComponent/PediatricsDoctors";
import Appointment from "./pages/Appointment";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/PatientDashboard" element={<PatientDashboard />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/cardiology" element={<CardiologyDoctors />} />
        <Route path="/neurology" element={<NeurologyDoctors />} />
        <Route path="/dermatology" element={<DermatologyDoctors />} />
        <Route path="/gastroenterology" element={<GastroDoctors />} />
        <Route path="/psychiatry" element={<PsychiatryDoctors />} />
        <Route path="/surgeon" element={<SurgeonDoctors />} />
        <Route path="/urology" element={<UrologyDoctors />} />
        <Route path="/gynocology" element={<GynocologyDoctors />} />
        <Route path="/pediatrics" element={<PediatricsDoctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
