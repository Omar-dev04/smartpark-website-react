import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 shadow-sm sidebar">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/dashboard/overview" className="nav-link">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/parking-occupancy" className="nav-link">Parking Occupancy</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/vehicle-types" className="nav-link">Occupancy Types</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/recent-events" className="nav-link">Recent Parking Events</NavLink>
        </li>
      </ul>
    </div>
  );
}