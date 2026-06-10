import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Doctor Appointment System</h2>

      <Link to="/">Home</Link> |
      <Link to="/login">Login</Link> |
      <Link to="/signup">Sign Up</Link> |
      <Link to="/doctors">Doctors</Link>|
<Link to="/appointments">Appointments</Link>
<Link to="/profile">Profile</Link>
<Link to="/myappointments">
  My Appointments 
</Link>


    </nav>
  );
}

export default Navbar;