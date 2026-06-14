import Navbar from "../components/Navbar";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <h1>Patient Profile</h1>

        <div className="profile-card">
          <p>
            <strong>Name:</strong>{" "}
            {user?.name || "Not Available"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user?.email || "Not Available"}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {user?.phone || "Not Available"}
          </p>

          <p>
            <strong>Registered On:</strong>{" "}
            {user?.registeredAt || "Not Available"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;