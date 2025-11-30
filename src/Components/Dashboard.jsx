import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}