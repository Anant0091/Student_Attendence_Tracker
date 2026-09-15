import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Attendance() {
  const [attendance, setAttendance] = useState([
    { date: "11 Sep 2026", subject: "React JS", status: "Present" },
    { date: "10 Sep 2026", subject: "DBMS", status: "Present" },
    { date: "09 Sep 2026", subject: "Data Structure", status: "Absent" },
  ]);

  const markAttendance = (status) => {
    const newRecord = {
      date: new Date().toLocaleDateString(),
      subject: "React JS",
      status,
    };
    setAttendance([...attendance, newRecord]);
  };

  return (
    <div>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <main className="content">
          <h1>Attendance</h1>

          <div className="attendance-actions">
            <button className="present-btn" onClick={() => markAttendance("Present")}>
              Mark Present
            </button>
            <button className="absent-btn" onClick={() => markAttendance("Absent")}>
              Mark Absent
            </button>
          </div>

          <div className="dashboard-box">
            <h2>Attendance History</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.subject}</td>
                    <td className={item.status === "Present" ? "present" : "absent"}>
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Attendance;