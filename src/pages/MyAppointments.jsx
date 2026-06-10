import Navbar from "../components/Navbar";
import { useState } from "react";

function MyAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Ravi Kumar",
      date: "2026-06-05",
      time: "10:00 AM",
    },
    {
      id: 2,
      doctor: "Dr. Priya Sharma",
      date: "2026-06-07",
      time: "03:00 PM",
    },
  ]);

  const cancelAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );

    alert("Appointment Cancelled Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="appointments-container">
        <h1>My Appointments</h1>

        {appointments.map((appointment) => (
          <div className="appointment-card" key={appointment.id}>
            <h3>{appointment.doctor}</h3>

            <p>Date: {appointment.date}</p>

            <p>Time: {appointment.time}</p>

            <button
              onClick={() =>
                cancelAppointment(appointment.id)
              }
            >
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyAppointments;