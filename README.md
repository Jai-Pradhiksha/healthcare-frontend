# Smart Healthcare Management System - Frontend

This is the frontend of the **Smart Healthcare Management System**, built using **React** and **Vite**. The system aims to provide a seamless experience for patients, doctors, and admins, offering various features like appointment booking, doctor search, AI-driven treatment recommendations, and more.

## Features
- **Responsive Design**: Optimized for all devices, ensuring a smooth experience across desktops, tablets, and mobile.
- **Role-Based Dashboards**: Separate dashboards for patients, doctors, and admins after login.
- **Appointment Scheduling**: Allows patients to book appointments with doctors by selecting available time slots.
- **Search Functionality**: Patients can search for doctors based on specialization, availability, and other criteria.
- **Dynamic UI**: A visually appealing homepage for key highlights.
- **Real-Time Data Integration**: Integration with backend APIs for real-time updates on appointments and user information.
- **Custom Notifications**: Pop-up alerts using SweetAlert for successful actions (e.g., registration, booking).

## Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast build and development setup.
- **Bootstrap/React-Bootstrap**: For responsive design and pre-built components.
- **Axios**: For making HTTP requests to the backend.
- **PostgreSQL**: For handling user data and appointments (via backend integration).

## Folder Structure

```bash
src/
  ├── assets/             # Static assets (images, icons)
  ├── components/         # Reusable components (Navbar, Footer, etc.)
  ├── pages/              # Main application pages (Home, Dashboard, etc.)
  ├── service/            # Contains Authorisation service file
  ├── App.jsx             # Main app component
  └── index.jsx           # Entry point of the React app
```
## API Integration

This frontend interacts with a **Spring Boot** backend via RESTful APIs for user authentication, appointment scheduling, and data management.

## Upcoming Features

- **AI-Driven Treatment Suggestions**: Personalized healthcare suggestions for patients based on their medical history.
- **Telemedicine Integration**: Video consultation with doctors.
- **Blockchain-Based Data Security**: Enhanced security for sensitive patient data.
