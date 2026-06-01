import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Doctor Appointment System</h2>

      <Link to="/">Home</Link> |
      <Link to="/login">Login</Link> |
      <Link to="/signup">Sign Up</Link> |
      <Link to="/">Doctors</Link> |
      <Link to="/">Appointments</Link>
    </nav>
  );
}

export default Navbar;