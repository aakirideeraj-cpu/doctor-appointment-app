import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Doctors() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Ravi Kumar",
      specialization: "Cardiologist",
      experience: "10 Years",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      experience: "8 Years",
    },
    {
      id: 3,
      name: "Dr. Arjun",
      specialization: "Orthopedic",
      experience: "12 Years",
    },
    
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase())
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
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <div className="doctor-grid">
          {filteredDoctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <h2>{doctor.name}</h2>

              <p>
                <strong>Specialization:</strong>{" "}
                {doctor.specialization}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {doctor.experience}
              </p>

              <button
                onClick={() => navigate("/appointments")}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Doctors;