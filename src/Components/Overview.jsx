import StatsCards from "./StatsCards.jsx";
import ParkingChart from "./ParkingChart.jsx";
import VehiclePie from "./VehiclePie.jsx";
import RecentEvents from "./RecentEvents.jsx";
import "./Overview.css";

export default function Overview() {
    return (
        <>
        <StatsCards />
        <div className="row mt-4">
            <div className="col-12 col-lg-8 mb-4">
            <div className="card shadow-sm p-3 cardsdash h-100">
                <h5 className="title">Parking Occupancy (Last 24 Hours)</h5>
                <ParkingChart />
            </div>
            </div>
            <div className="col-12 col-lg-4 mb-4">
            <div className="card shadow-sm p-3 cardsdash h-100">
                <h5 className="title">Occupancy Types (waiting time)</h5> <VehiclePie />
            </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
            <div className="card shadow-sm p-3 cardsdash">
                <h5 className="title">Recent Parking Events</h5> <RecentEvents />
            </div>
            </div>
        </div>
        </>
    );
}
