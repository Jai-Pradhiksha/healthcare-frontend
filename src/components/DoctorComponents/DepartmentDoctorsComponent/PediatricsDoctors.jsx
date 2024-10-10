import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentDoctors.css';

import doctor11Image from '../../../assets/deptDoctors/img11.jpg';
import doctor12Image from '../../../assets/deptDoctors/img12.jpg';

const PediatricsDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Isha Arora',
      experience: '5 years',
      specialization: 'Neonatology',
      image: doctor11Image,
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024', '14-10-2024'], 
      availableSlots: ['9:00 AM', '10:00 AM', '1:00 PM'],
    },
    {
      name: 'Dr. Varun Joshi',
      experience: '4 years',
      specialization: 'Pediatric Cardiology',
      image: doctor12Image,
      availableDates: ['10-10-2024', '11-10-2024', '13-10-2024', '15-10-2024', '17-10-2024'], 
      availableSlots: ['8:00 AM', '12:00 PM', '3:00 PM'],
    },
  ];

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Pediatrics Doctors</h2>
      </div>

      <div className="docts-cards-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="docts-doctor-card">
            <img src={doctor.image} alt={doctor.name} className="docts-doctor-image" />
            <div className="docts-doctor-info">
              <div className="docts-doctor-name">{doctor.name}</div>
              <div className="docts-doctor-details">Experience: {doctor.experience}</div>
              <div className="docts-doctor-details">Specialization: {doctor.specialization}</div>
              <div className="docts-time-slots">
                {doctor.availableSlots.map((timeSlot, idx) => (
                  <Link 
                    to="/login" 
                    state={{ doctorName: doctor.name }} 
                    key={idx} 
                    className="btn btn-outline-primary time-slot-btn" 
                  >
                    {timeSlot}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PediatricsDoctors;
