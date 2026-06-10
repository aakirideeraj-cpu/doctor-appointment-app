import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
const navigate = useNavigate();

const [user, setUser] = useState({
name: "",
email: "",
phone: "",
password: "",
confirmPassword: "",
});

const handleChange = (e) => {
setUser({
...user,
[e.target.name]: e.target.value,
});
};

const handleSignup = (e) => {
e.preventDefault();

```
if (
  !user.name ||
  !user.email ||
  !user.phone ||
  !user.password ||
  !user.confirmPassword
) {
  alert("Please fill all fields");
  return;
}

if (user.password !== user.confirmPassword) {
  alert("Passwords do not match");
  return;
}

localStorage.setItem(
  "user",
  JSON.stringify({
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: user.password,
  })
);

alert("Registration Successful!");

navigate("/login");
```

};

return (
<> <Navbar />

```
  <div className="form-container">
    <h2>Create Account</h2>

    <form onSubmit={handleSignup}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={user.phone}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={user.confirmPassword}
        onChange={handleChange}
      />

      <button type="submit">
        Register
      </button>
    </form>
  </div>
</>


);
}

export default Signup;
