import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Profile from "./pages/Profile";
import MyAppointments from "./pages/MyAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

<Route path="/doctors" element={<Doctors />} />

<Route
  path="/appointments"
  element={<Appointments />}
/>

<Route
  path="/myappointments"
  element={<MyAppointments />}
/>

<Route path="/profile" element={<Profile />} />


      </Routes>
    </BrowserRouter>
    

  );
}

export default App;