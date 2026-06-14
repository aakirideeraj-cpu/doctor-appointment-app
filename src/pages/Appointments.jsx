import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Appointments() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingAppointments =
      JSON.parse(
        localStorage.getItem("appointments")
      ) || [];

    const newAppointment = {
      id: Date.now(),
      patientName: formData.patientName,
      doctor: formData.doctor,
      date: formData.date,
      time: formData.time,
    };

    const updatedAppointments = [
      ...existingAppointments,
      newAppointment,
    ];

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    alert(
      `Appointment Booked Successfully!\n\nPatient: ${formData.patientName}\nDoctor: ${formData.doctor}`
    );

    setFormData({
      patientName: "",
      doctor: "",
      date: "",
      time: "",
    });

    navigate("/myappointments");
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Book Appointment</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            required
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            <option>Dr. Ravi Kumar</option>
            <option>Dr. Priya Sharma</option>
            <option>Dr. Arjun</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </>
  );
}

export default Appointments;