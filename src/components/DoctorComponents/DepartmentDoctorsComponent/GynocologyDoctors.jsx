import React from 'react';
import './DepartmentDoctors.css'; 
import { Link } from 'react-router-dom';

import doctor7Image from '../../../assets/deptDoctors/img7.jpg';
import doctor8Image from '../../../assets/deptDoctors/img8.jpg';

const GynocologyDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Meera Sethi',
      experience: '10 years',
      specialization: 'High-Risk Obstetrics',
      image: doctor7Image,
      availableDates: ['10-10-2024', '12-10-2024', '13-10-2024', '14-10-2024', '16-10-2024'], 
      availableSlots: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'], 
    },
    {
      name: 'Dr. Neelam Gupta',
      experience: '7 years',
      specialization: 'Fertility Specialist',
      image: doctor8Image,
      availableDates: ['11-10-2024', '13-10-2024', '15-10-2024', '17-10-2024', '19-10-2024'], 
      availableSlots: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'],
    },
  ];

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Gynecology Doctors</h2>
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

export default GynocologyDoctors;
