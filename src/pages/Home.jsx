import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Doctor Appointment Booking System</h1>

        <p>
          Book appointments with doctors quickly and efficiently.
        </p>

        <button
          className="btn"
          onClick={() => navigate("/appointments")}
        >
          Book Appointment
        </button>

        <h2>Features</h2>

        <ul style={{ listStyle: "none" }}>
          <li>✔ Doctor Search</li>
          <li>✔ Appointment Booking</li>
          <li>✔ Appointment Management</li>
          <li>✔ Patient Profiles</li>
        </ul>
      </div>
    </>
  );
}

export default Home;