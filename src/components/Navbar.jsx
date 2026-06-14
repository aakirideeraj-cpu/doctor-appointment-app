import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav>
      <h2>Doctor Appointment System</h2>

      <Link to="/">Home</Link> |{" "}

      {!isLoggedIn ? (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/signup">Sign Up</Link>
        </>
      ) : (
        <>
          <Link to="/doctors">Doctors</Link> |{" "}
          <Link to="/appointments">Appointments</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          
          <Link to="/myappointments">
            My Appointments
          </Link>{" "}
          |{" "}

          <Link to="/doctorpanel">
            Doctor Panel
          </Link>{" "}
          |{" "}

          <Link to="/admin">
            Admin
          </Link>{" "}
          |{" "}

          <button
            onClick={handleLogout}
            style={{
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;