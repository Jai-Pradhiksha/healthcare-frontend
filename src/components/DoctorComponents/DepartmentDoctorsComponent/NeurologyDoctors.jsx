import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentDoctors.css';

import doctor1Image from '../../../assets/deptDoctors/img1.jpg';
import doctor2Image from '../../../assets/deptDoctors/img2.jpg';

const NeurologyDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Priya Sharma',
      experience: '12 years',
      specialization: 'Neurophysiology',
      image: doctor1Image,
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '13-10-2024', '14-10-2024'], 
      availableSlots: ['9:00 AM', '10:30 AM', '1:00 PM'],
    },
    {
      name: 'Dr. Rajesh Mehta',
      experience: '15 years',
      specialization: 'Pediatric Neurology',
      image: doctor2Image,
      availableDates: ['10-10-2024', '12-10-2024', '14-10-2024', '16-10-2024', '18-10-2024'], 
      availableSlots: ['9:30 AM', '11:00 AM', '2:00 PM'],
    },
  ];

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Neurology Doctors</h2>
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

export default NeurologyDoctors;
