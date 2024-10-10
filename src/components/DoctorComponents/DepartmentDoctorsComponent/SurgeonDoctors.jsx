import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentDoctors.css';

import doctor1Image from '../../../assets/deptDoctors/img15.jpg';
import doctor2Image from '../../../assets/deptDoctors/img16.jpg';

const SurgeonDoctors = () => {
  const doctors = [
    {
      name: 'Dr. Anil Kapoor',
      experience: '15 years',
      specialization: 'Cardiac Surgery',
      availableDates: ['10-10-2024', '11-10-2024', '12-10-2024', '14-10-2024', '15-10-2024'], 
      availableSlots: ['9:00 AM', '11:00 AM', '3:00 PM'],
      image: doctor1Image,
    },
    {
      name: 'Dr. Neha Bhatia',
      experience: '9 years',
      specialization: 'Orthopedic Surgery',
      availableDates: ['10-10-2024', '11-10-2024', '13-10-2024', '14-10-2024', '16-10-2024'], 
      availableSlots: ['10:00 AM', '1:00 PM', '4:00 PM'],
      image: doctor2Image,
    },
  ];

  return (
    <>
      <div className="docts-tagline-container">
        <h2>Meet our Surgeon Doctors</h2>
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

export default SurgeonDoctors;
