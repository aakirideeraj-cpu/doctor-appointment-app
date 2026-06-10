import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="profile-container">
        <h1>Patient Profile</h1>

        <div className="profile-card">
          <p><strong>Name:</strong> Aakiri Deeraj</p>
          <p><strong>Age:</strong> 19</p>
          <p><strong>Email:</strong> deeraj@gmail.com</p>
          <p><strong>Phone:</strong> 9876543210</p>
          <p><strong>Blood Group:</strong> O+</p>
        </div>
      </div>
    </>
  );
}

export default Profile;