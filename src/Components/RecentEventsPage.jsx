import RecentEvents from "./RecentEvents";
import "./Overview.css";
import "./RecentEvents.css";   

export default function RecentEventsPage() {
  return (
    <div className="recent">
      <div className="card shadow-sm cardsdash p-4">
        <h2 className="title">Recent Parking Events</h2>
        <RecentEvents />
      </div>
    </div>
  );
}
