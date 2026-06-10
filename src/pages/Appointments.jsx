import Navbar from "../components/Navbar";
import { useState } from "react";

function Appointments() {
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

    alert(
      `Appointment Booked Successfully!\n\nPatient: ${formData.patientName}\nDoctor: ${formData.doctor}`
    );

    setFormData({
      patientName: "",
      doctor: "",
      date: "",
      time: "",
    });
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