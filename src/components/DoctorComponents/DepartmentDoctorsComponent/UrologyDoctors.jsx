import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentDoctors.css';

import doctor1Image from '../../../assets/deptDoctors/img17.jpg';
import doctor2Image from '../../../assets/deptDoctors/img18.jpg';

const UrologyDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Rahul Verma',
      experience: '10 years',
      specialization: 'Pediatric Urology',
      image: doctor1Image,
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024', '14-10-2024'], 
      availableSlots: ['9:00 AM', '12:00 PM', '3:00 PM'],
    },
    {
      name: 'Dr. Sunita Rani',
      experience: '8 years',
      specialization: 'Reconstructive Urology',
      image: doctor2Image,
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '15-10-2024', '16-10-2024'], 
      availableSlots: ['10:00 AM', '1:00 PM', '4:00 PM'],
    },
  ];

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Urology Doctors</h2>
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

export default UrologyDoctors;
