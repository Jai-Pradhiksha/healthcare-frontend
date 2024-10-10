import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentDoctors.css';

import doctor13Image from '../../../assets/deptDoctors/img13.jpg';
import doctor14Image from '../../../assets/deptDoctors/img14.jpg';

const PsychiatryDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Kavita Joshi',
      experience: '12 years',
      specialization: 'Child Psychiatry',
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '14-10-2024', '15-10-2024'], 
      availableSlots: ['9:00 AM', '11:00 AM', '3:00 PM'],
      image: doctor13Image,
    },
    {
      name: 'Dr. Ramesh Verma',
      experience: '10 years',
      specialization: 'Geriatric Psychiatry',
      availableDates: ['10-10-2024', '11-10-2024', '13-10-2024', '14-10-2024', '16-10-2024'], 
      availableSlots: ['10:00 AM', '1:00 PM', '4:00 PM'],
      image: doctor14Image,
    },
  ];

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Psychiatry Doctors</h2>
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

export default PsychiatryDoctors;
