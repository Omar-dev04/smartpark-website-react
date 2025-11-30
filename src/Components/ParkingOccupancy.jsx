import ParkingChart from "./ParkingChart";
import "./Overview.css";

export default function ParkingOccupancy() {
  return (
      <div className="card shadow-sm p-4 w-75 cardsdash">
        <h2 className="title">Parking Occupancy (Last 24 Hours)</h2>
        <ParkingChart />
      </div>
  );
}
