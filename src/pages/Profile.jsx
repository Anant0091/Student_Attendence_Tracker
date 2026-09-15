import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <main className="content">
          <h1>Student Profile</h1>

          <div className="profile-card">
            <h2>Ajeet Sharma</h2>
            <p><strong>Course:</strong> BCA</p>
            <p><strong>Enrollment No:</strong> 2026BCA001</p>
            <p><strong>Email:</strong> student@example.com</p>
            <p><strong>Attendance:</strong> 83%</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;