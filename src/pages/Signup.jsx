import Navbar from "../components/Navbar";

function Signup() {
  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Register</button>
      </div>
    </>
  );
}

export default Signup;