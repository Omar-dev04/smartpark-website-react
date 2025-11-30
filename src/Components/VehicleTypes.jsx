import VehiclePie from "./VehiclePie";
import "./VehicleTypes.css";

export default function VehicleTypes() {
  return (
    <div className="card shadow-sm p-4 vehicle">
      <h2 className="vehicle-title">Occupancy Types (waiting time)</h2>
      <VehiclePie />
    </div>
  );
}
