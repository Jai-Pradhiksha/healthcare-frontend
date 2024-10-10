import React, { useEffect, useState } from 'react';
import '../DoctorComponents/DoctorDashboard.css';

const DoctorDashboard = () => {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    
    const storedUserName = localStorage.getItem('user_name');
    setUserName(storedUserName);
  }, []);

  return (
    <>
    <div className='doctor-welcome-section'>
    <h2>Welcome, {userName}!</h2>
      <button>Manage Appointments</button>
      <button>View Patient History</button>
      <button>Consult with Patients</button>
    </div>
    </>
  );
};

export default DoctorDashboard;
