import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Leave() {
  const [form, setForm] = useState({ from: "", to: "", reason: "" });
  const [leaves, setLeaves] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const applyLeave = (e) => {
    e.preventDefault();

    if (!form.from || !form.to || !form.reason) {
      alert("Please fill all fields");
      return;
    }

    setLeaves([...leaves, { ...form, status: "Pending" }]);
    setForm({ from: "", to: "", reason: "" });
    alert("Leave application submitted!");
  };

  return (
    <div>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <main className="content">
          <h1>Leave Management</h1>

          <div className="leave-container">
            <div className="dashboard-box">
              <h2>Apply for Leave</h2>

              <form onSubmit={applyLeave}>
                <label>From Date</label>
                <input type="date" name="from" value={form.from} onChange={handleChange} />

                <label>To Date</label>
                <input type="date" name="to" value={form.to} onChange={handleChange} />

                <label>Reason</label>
                <textarea
                  name="reason"
                  placeholder="Enter leave reason"
                  value={form.reason}
                  onChange={handleChange}
                />

                <button type="submit">Apply Leave</button>
              </form>
            </div>

            <div className="dashboard-box">
              <h2>My Leave Applications</h2>

              {leaves.length === 0 ? (
                <p>No leave applications yet.</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Reason</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaves.map((leave, index) => (
                      <tr key={index}>
                        <td>{leave.from}</td>
                        <td>{leave.to}</td>
                        <td>{leave.reason}</td>
                        <td>{leave.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Leave;