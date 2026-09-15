import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/attendance">Attendance</NavLink>
      <NavLink to="/leave">Leave</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </aside>
  );
}

export default Sidebar;