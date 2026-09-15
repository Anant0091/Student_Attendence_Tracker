import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AttendanceCard from "../components/AttendanceCard";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <main className="content">
          <h1>Dashboard</h1>
          <p>Welcome back, Student 👋</p>

          <div className="cards">
            <AttendanceCard title="Total Classes" value="60" className="blue" />
            <AttendanceCard title="Present" value="50" className="green" />
            <AttendanceCard title="Absent" value="10" className="red" />
            <AttendanceCard title="Attendance" value="83%" className="purple" />
          </div>

          <div className="dashboard-box">
            <h2>Recent Attendance</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 Sep 2026</td>
                  <td>React JS</td>
                  <td className="present">Present</td>
                </tr>
                <tr>
                  <td>10 Sep 2026</td>
                  <td>DBMS</td>
                  <td className="present">Present</td>
                </tr>
                <tr>
                  <td>09 Sep 2026</td>
                  <td>Data Structure</td>
                  <td className="absent">Absent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;