import React from "react";
import "./Sidebar.css";
import {
  FiHome,
  FiClock,
  FiCalendar,
  FiClipboard,
  FiBarChart2,
  FiTool,
  FiMessageSquare,
  FiHelpCircle,
} from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>
          Health<strong>care. </strong>
        </h1>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3>General</h3>
          <ul>
            <li className="active">
              <FiHome /> Dashboard
            </li>
            <li>
              <FiClock /> History
            </li>
            <li>
              <FiCalendar /> Calendar
            </li>
            <li>
              <FiClipboard /> Appointments
            </li>
            <li>
              <FiBarChart2 /> Statistics
            </li>
            <li> Tools</li>
            <li>
              <FiMessageSquare /> Chat
            </li>
            <li>
              <FiHelpCircle /> Support
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
