import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

function DoctorPanel() {
  const [doctors, setDoctors] = useState(
    JSON.parse(localStorage.getItem("doctors")) || []
  );

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(storedAppointments);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.id === id
        ? { ...doctor, status: newStatus }
        : doctor
    );

    setDoctors(updatedDoctors);

    localStorage.setItem(
      "doctors",
      JSON.stringify(updatedDoctors)
    );

    alert(`Doctor marked as ${newStatus}`);
  };

  const removeAppointment = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );

    setAppointments(updatedAppointments);

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    alert("Appointment Rejected");
  };

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <h1>Doctor Dashboard</h1>

        {doctors.length === 0 ? (
          <p>No Doctors Available</p>
        ) : (
          doctors.map((doctor) => (
            <div
              className="profile-card"
              key={doctor.id}
            >
              <h2>{doctor.name}</h2>

              <p>
                <strong>Specialization:</strong>{" "}
                {doctor.specialization}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {doctor.experience}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {doctor.status}
              </p>

              <button
                onClick={() =>
                  updateStatus(
                    doctor.id,
                    "Available"
                  )
                }
              >
                Mark Available
              </button>

              <button
                onClick={() =>
                  updateStatus(
                    doctor.id,
                    "Busy"
                  )
                }
                style={{ marginLeft: "10px" }}
              >
                Mark Busy
              </button>
            </div>
          ))
        )}

        <br />

        <h2>Today's Appointments</h2>

        {appointments.length === 0 ? (
          <p>No Appointments Found</p>
        ) : (
          appointments.map((appointment) => (
            <div
              className="appointment-card"
              key={appointment.id}
            >
              <h3>{appointment.patientName}</h3>

              <p>
                <strong>Doctor:</strong>{" "}
                {appointment.doctor}
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
                  alert(
                    "Appointment Accepted Successfully"
                  )
                }
              >
                Accept
              </button>

              <button
                onClick={() =>
                  removeAppointment(
                    appointment.id
                  )
                }
                style={{ marginLeft: "10px" }}
              >
                Reject
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default DoctorPanel;