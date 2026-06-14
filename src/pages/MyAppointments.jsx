import Navbar from "../components/Navbar";
import { useState } from "react";

function MyAppointments() {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );

    setAppointments(updatedAppointments);

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    alert("Appointment Cancelled Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="appointments-container">
        <h1>My Appointments</h1>

        {appointments.length === 0 ? (
          <p>No Appointments Booked Yet.</p>
        ) : (
          appointments.map((appointment) => (
            <div
              className="appointment-card"
              key={appointment.id}
            >
              <h3>{appointment.doctor}</h3>

              <p>
                <strong>Patient:</strong>{" "}
                {appointment.patientName}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {appointment.date}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {appointment.time}
              </p>

              <button
                onClick={() =>
                  cancelAppointment(appointment.id)
                }
              >
                Cancel Appointment
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default MyAppointments;