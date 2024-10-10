import React from 'react';
import './DepartmentDoctors.css'; 
import { Link } from 'react-router-dom';

import doctor3Image from '../../../assets/deptDoctors/img3.jpg';
import doctor4Image from '../../../assets/deptDoctors/img4.jpg';

const DermatologyDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Sneha Gupta',
      experience: '6 years',
      specialization: 'Cosmetic Dermatology',
      availableDates: ['10-10-2024', '12-10-2024', '13-10-2024', '14-10-2024', '15-10-2024'], 
      availableSlots: ['10:00 AM', '10:20 AM', '10:40 AM', '11:00 AM'], 
      image: doctor3Image, 
    },
    {
      name: 'Dr. Karan Malhotra',
      experience: '4 years',
      specialization: 'Pediatric Dermatology',
      availableDates: ['11-10-2024', '13-10-2024', '14-10-2024', '15-10-2024', '16-10-2024'], 
      availableSlots: ['11:20 AM', '11:40 AM', '12:00 PM', '12:20 PM'], 
      image: doctor4Image, 
    },
  ];
  

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Dermatology Doctors</h2>
      </div>

      <div className="docts-cards-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="docts-doctor-card">
            <img src={doctor.image} alt={doctor.name} />
            <div className="docts-doctor-info">
              <div className="docts-doctor-name">{doctor.name}</div>
              <div className="docts-doctor-details">Experience: {doctor.experience}</div>
              <div className="docts-doctor-details">Specialization: {doctor.specialization}</div>
              <div className="docts-time-slots" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              Available timings: 
              {doctor.availableSlots.map((timeSlot, idx) => (
                <span 
                  key={idx} 
                  className="btn btn-outline-success time-slot-btn" 
                  style={{ cursor: 'default' }} 
                >
                  {timeSlot}
                </span>
              ))}
            </div>
            </div>
            <Link 
              to="/appointment" 
              state={{
                doctorName: doctor.name,
                specialization: doctor.specialization,
                availableDates: doctor.availableDates,
                availableSlots: doctor.availableSlots,
              }} 
              className="docts-book-button"
            >
              Book an Appointment
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default DermatologyDoctors;
