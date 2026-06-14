import Navbar from "../components/Navbar";
import { useState } from "react";

function Admin() {
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState("Available");

  const [doctors, setDoctors] = useState(
    JSON.parse(localStorage.getItem("doctors")) || []
  );

  const addDoctor = () => {
    if (
      !doctorName ||
      !specialization ||
      !experience
    ) {
      alert("Fill all fields");
      return;
    }

    const newDoctor = {
      id: Date.now(),
      name: doctorName,
      specialization: specialization,
      experience: experience,
      status: status,
    };

    const updatedDoctors = [...doctors, newDoctor];

    setDoctors(updatedDoctors);

    localStorage.setItem(
      "doctors",
      JSON.stringify(updatedDoctors)
    );

    setDoctorName("");
    setSpecialization("");
    setExperience("");
    setStatus("Available");

    alert("Doctor Added Successfully");
  };

  const removeDoctor = (id) => {
    const updatedDoctors = doctors.filter(
      (doctor) => doctor.id !== id
    );

    setDoctors(updatedDoctors);

    localStorage.setItem(
      "doctors",
      JSON.stringify(updatedDoctors)
    );

    alert("Doctor Removed");
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Admin Panel</h2>

        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) =>
            setDoctorName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Specialization"
          value={specialization}
          onChange={(e) =>
            setSpecialization(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Experience (Years)"
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option value="Available">
            Available
          </option>

          <option value="Busy">
            Busy
          </option>
        </select>

        <button onClick={addDoctor}>
          Add Doctor
        </button>

        <hr />

        <h3>Doctors List</h3>

        {doctors.length === 0 ? (
          <p>No Doctors Added Yet</p>
        ) : (
          doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="doctor-card"
            >
              <h3>{doctor.name}</h3>

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
                  removeDoctor(doctor.id)
                }
              >
                Remove Doctor
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Admin;