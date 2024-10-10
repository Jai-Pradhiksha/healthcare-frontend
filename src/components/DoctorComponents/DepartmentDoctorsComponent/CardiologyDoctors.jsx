import React from 'react';
import './DepartmentDoctors.css'; 
import { Link } from 'react-router-dom';

import doctor1Image from '../../../assets/deptDoctors/img1.jpg';
import doctor2Image from '../../../assets/deptDoctors/img2.jpg';

const CardiologyDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Aditi Sharma',
      experience: '10 years',
      specialization: 'Interventional Cardiology',
      image: doctor1Image,
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024', '14-10-2024'], 
      availableSlots: ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'], 
    },
    {
      name: 'Dr. Vikram Singh',
      experience: '8 years',
      specialization: 'Pediatric Cardiology',
      image: doctor2Image, 
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024', '14-10-2024'], 
      availableSlots: ['8:00 AM', '12:00 PM', '1:00 PM', '3:00 PM', '4:00 PM'],
    },
  ];

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Cardiology Doctors</h2>
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

export default CardiologyDoctors;
