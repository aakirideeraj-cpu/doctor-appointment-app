import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Doctors() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const defaultDoctors = [
    {
      id: 1,
      name: "Dr. Ravi Kumar",
      specialization: "Cardiologist",
      experience: "10 Years",
      status: "Available",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      experience: "8 Years",
      status: "Available",
    },
    {
      id: 3,
      name: "Dr. Arjun",
      specialization: "Orthopedic",
      experience: "12 Years",
      status: "Available",
    },
  ];

  const adminDoctors =
    JSON.parse(localStorage.getItem("doctors")) || [];

  const doctors =
    adminDoctors.length > 0
      ? adminDoctors
      : defaultDoctors;

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      doctor.specialization
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="doctors-container">
        <h1>Available Doctors</h1>

        <input
          type="text"
          placeholder="Search by doctor name or specialization..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-box"
        />

        <div className="doctor-grid">
          {filteredDoctors.map((doctor) => (
            <div
              className="doctor-card"
              key={doctor.id}
            >
              <h2>{doctor.name}</h2>

              <p>
                <strong>Specialization:</strong>{" "}
                {doctor.specialization}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {doctor.experience || "N/A"}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {doctor.status || "Available"}
              </p>

              <button
                disabled={
                  doctor.status === "Busy"
                }
                onClick={() =>
                  navigate("/appointments")
                }
              >
                {doctor.status === "Busy"
                  ? "Doctor Busy"
                  : "Book Appointment"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Doctors;